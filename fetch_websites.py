#!/usr/bin/env python3
import pandas as pd
import requests
from bs4 import BeautifulSoup
import re
import urllib3
import time

# Disable SSL warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

import sys
import os

default_input = '/workspaces/projects/SME_EQUITY_L_562.csv'
default_output = 'nse_tracker_enriched_clearbit.xlsx'

# Check CLI arguments first or prompt interactively
input_file = ''
output_file = ''

if '--input' in sys.argv:
    idx = sys.argv.index('--input')
    if idx + 1 < len(sys.argv):
        input_file = sys.argv[idx + 1]

if '--output' in sys.argv:
    idx = sys.argv.index('--output')
    if idx + 1 < len(sys.argv):
        output_file = sys.argv[idx + 1]

# Handle positional arguments (e.g. python3 fetch_websites.py <input> [output])
if not input_file and len(sys.argv) > 1 and not sys.argv[1].startswith('--'):
    input_file = sys.argv[1]
    if len(sys.argv) > 2 and not sys.argv[2].startswith('--'):
        output_file = sys.argv[2]

if not input_file:
    user_in = input(f"Enter input file path [default: {default_input}]: ").strip().strip('"').strip("'")
    input_file = user_in if user_in else default_input

if not output_file:
    output_file = default_output

if not output_file.lower().endswith('.csv') and not output_file.lower().endswith('.xlsx') and not output_file.lower().endswith('.xls'):
    output_file += '.xlsx'


print(f"\nLoading {input_file}...")
try:
    if input_file.lower().endswith('.csv'):
        df = pd.read_csv(input_file)
    else:
        df = pd.read_excel(input_file)
except FileNotFoundError:
    print(f"Error: Could not find {input_file}. Please check the file name.")
    exit()
except Exception as e:
    print(f"Error loading file: {e}")
    exit()



# Find the company name column dynamically
company_col = None
for name in ['NAME OF COMPANY', 'COMPANY NAME', 'Company Name', 'Company', 'NAME', 'SECURITY NAME']:
    if name in df.columns:
        company_col = name
        break

if not company_col:
    company_col = df.columns[1]  # Default to second column

print(f"Using column '{company_col}' for Clearbit search.\n")
total_rows = len(df)

def clean_company_name(name):
    """Removes legal suffixes so Clearbit can find the brand."""
    if pd.isna(name): return ""
    name = str(name)
    # Remove common legal suffixes
    clean = re.sub(r'\b(Limited|Ltd|Ltd\.|India|Corporation|Inc|Incorporated|Technologies|Enterprises)\b', '', name, flags=re.IGNORECASE)
    # Remove special characters like () or -
    clean = re.sub(r'[^\w\s]', '', clean)
    return " ".join(clean.split())

def extract_page_data(domain):
    data = {"Emails": "None", "LinkedIn": "None", "PDFs": "None"}
    url = f"https://www.{domain}"
    
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        response = requests.get(url, headers=headers, timeout=10, verify=False)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        emails = set()
        for a in soup.find_all('a', href=re.compile(r'^mailto:')):
            emails.add(a.get('href').replace('mailto:', '').strip().lower())
        
        if not emails:
            raw_emails = re.findall(r'[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+', response.text)
            emails.update([e.lower() for e in raw_emails])
            
        target_emails = [e for e in emails if re.search(r'investor|compliance|grievance|secretarial|cs@', e)]
        if target_emails: data["Emails"] = " | ".join(target_emails)
            
        linkedin = soup.find('a', href=re.compile(r'linkedin\.com/company'))
        if linkedin: data["LinkedIn"] = linkedin.get('href')
            
        pdfs = [a.get('href') for a in soup.find_all('a', href=re.compile(r'\.pdf$'))]
        if pdfs: data["PDFs"] = " | ".join(list(set(pdfs))[:2])
            
    except Exception:
        pass
        
    return data

def query_clearbit(query_name):
    """Helper function to make the API call safely."""
    try:
        time.sleep(0.5) 
        url = f"https://autocomplete.clearbit.com/v1/companies/suggest?query={query_name}"
        res = requests.get(url, timeout=10)
        if res.status_code == 200 and len(res.json()) > 0:
            return res.json()[0]['domain']
    except Exception:
        pass
    return None

def process_company(company_name, current_index):
    print(f"[{current_index}/{total_rows}] Analyzing: {company_name}")
    result = {"Authentic_Website": "Not Found", "Target_Emails": "None", "LinkedIn": "None", "PDF_Links": "None"}
    if pd.isna(company_name): return result
        
    # Attempt 1: Exact Match
    domain = query_clearbit(company_name)
    
    # Attempt 2: Cleaned Brand Name
    if not domain:
        cleaned_name = clean_company_name(company_name)
        if cleaned_name and cleaned_name.lower() != str(company_name).lower():
            domain = query_clearbit(cleaned_name)
            
    if domain:
        result["Authentic_Website"] = domain
        print(f"   [+] Verified Domain: {domain}")
        extracted = extract_page_data(domain)
        result["Target_Emails"] = extracted["Emails"]
        result["LinkedIn"] = extracted["LinkedIn"]
        result["PDF_Links"] = extracted["PDFs"]
    else:
        print(f"   [-] Not found on Clearbit (Tried exact and cleaned names).")
        
    return result

results = [process_company(name, i+1) for i, name in enumerate(df[company_col])]

df['Authentic Website'] = [res["Authentic_Website"] for res in results]
df['Target Emails'] = [res["Target_Emails"] for res in results]
df['LinkedIn'] = [res["LinkedIn"] for res in results]
df['PDF Links'] = [res["PDF_Links"] for res in results]

print("\nSaving updated tracker...")
try:
    if output_file.lower().endswith('.csv'):
        df.to_csv(output_file, index=False)
    else:
        df.to_excel(output_file, index=False)
    print(f"Done! Saved as {output_file}")
except Exception as err:
    fallback_csv = output_file.replace('.xlsx', '.csv').replace('.xls', '.csv')
    if not fallback_csv.endswith('.csv'):
        fallback_csv += '.csv'
    df.to_csv(fallback_csv, index=False)
    print(f"Done! Saved as {fallback_csv} (CSV fallback)")