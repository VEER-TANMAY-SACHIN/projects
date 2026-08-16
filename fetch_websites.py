#!/usr/bin/env python3
import pandas as pd
import requests
from bs4 import BeautifulSoup
import re
import urllib3
import time
import sys
import os
from concurrent.futures import ThreadPoolExecutor, as_completed

# Disable SSL warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

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
    sys.exit(1)
except Exception as e:
    print(f"Error loading file: {e}")
    sys.exit(1)


# Find the company name column dynamically
def find_company_column(dataframe):
    cols = list(dataframe.columns)
    
    # 1. Normalized priority pattern search (exact/near match)
    priority_patterns = [
        r'^company\s*name$', r'^issuer\s*name$', r'^name\s*of\s*company$',
        r'^scrip\s*name$', r'^company$', r'^issuer$', r'^security\s*name$',
        r'^organization\s*name$', r'^firm\s*name$', r'^entity\s*name$', r'^name$'
    ]
    for pat in priority_patterns:
        for col in cols:
            norm_col = str(col).strip().lower().replace('_', ' ')
            if re.search(pat, norm_col):
                return col

    # 2. Partial match (contains key terms)
    for col in cols:
        norm_col = str(col).strip().lower()
        if any(k in norm_col for k in ['issuer', 'company', 'scrip_name', 'security name', 'firm', 'organization']):
            return col

    # 3. Fallback: longest average text column excluding metadata/URLs
    best_col = None
    max_len = 0
    for col in cols:
        if dataframe[col].dtype == 'object':
            sample = dataframe[col].dropna().astype(str)
            if len(sample) > 0:
                avg_len = sample.str.len().mean()
                col_lower = str(col).lower()
                if not any(k in col_lower for k in ['url', 'isin', 'status', 'segment', 'group', 'code', 'cd']) and avg_len > max_len:
                    max_len = avg_len
                    best_col = col

    return best_col

company_col = find_company_column(df)

if not company_col:
    print(f"Error: Could not automatically find a Company Name column in columns: {list(df.columns)}")
    sys.exit(1)

total_rows = len(df)
print(f"Found {total_rows} companies to process using column '{company_col}'.")

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def clean_company_name(name):
    if pd.isna(name): return ""
    name = str(name)
    suffixes = [
        r'\blimited\b', r'\bltd\b', r'\bprivate\b', r'\bpvt\b', r'\binc\b', r'\bllp\b',
        r'\bcorp\b', r'\bcorporation\b', r'\bholdings\b', r'\bindustries\b', r'\benterprises\b',
        r'\btechnologies\b', r'\btech\b', r'\bservices\b', r'\bsolutions\b', r'\bgroup\b',
        r'\bfinance\b', r'\bcapital\b', r'\bpharma\b', r'\bpharmaceuticals\b', r'\bhealthcare\b'
    ]
    cleaned = name.lower()
    for s in suffixes:
        cleaned = re.sub(s, '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'\(.*?\)', '', cleaned)
    cleaned = re.sub(r'[^a-zA-Z0-9\s]', '', cleaned)
    return cleaned.strip()

def query_clearbit(query_name):
    if not query_name: return None
    try:
        url = f"https://autocomplete.clearbit.com/v1/companies/suggest?query={query_name}"
        res = requests.get(url, headers=headers, timeout=5)
        if res.status_code == 200 and len(res.json()) > 0:
            return res.json()[0]['domain']
    except Exception:
        pass
    return None

def process_company(args):
    index, company_name = args
    result = {
        "index": index,
        "Authentic_Website": "Not Found",
        "Target_Emails": "None",
        "LinkedIn": "None",
        "PDF_Links": "None"
    }
    if pd.isna(company_name): return result
        
    domain = query_clearbit(company_name)
    if not domain:
        cleaned_name = clean_company_name(company_name)
        if cleaned_name and cleaned_name.lower() != str(company_name).lower():
            domain = query_clearbit(cleaned_name)
            
    if domain:
        result["Authentic_Website"] = f"https://{domain}" if not domain.startswith('http') else domain
        print(f"[{index+1}/{total_rows}] [+] {company_name} -> {result['Authentic_Website']}")
    else:
        print(f"[{index+1}/{total_rows}] [-] {company_name} -> Not Found")
        
    return result

results = [None] * total_rows

# Fast Multi-threaded execution (30 parallel workers)
print("\n🚀 Starting Fast Multi-Threaded Website Discovery (30 workers)...")
with ThreadPoolExecutor(max_workers=30) as executor:
    futures = [executor.submit(process_company, (i, name)) for i, name in enumerate(df[company_col])]
    for future in as_completed(futures):
        res = future.result()
        results[res["index"]] = res

df['Authentic Website'] = [res["Authentic_Website"] if res else "Not Found" for res in results]
df['Website'] = df['Authentic Website']

print("\nSaving updated tracker...")
try:
    if output_file.lower().endswith('.csv'):
        df.to_csv(output_file, index=False)
    else:
        df.to_excel(output_file, index=False)
    print(f"🎉 Done! Saved as {output_file}")
except Exception as e:
    print(f"Error saving output file: {e}")