# Accessibility & GTM Outreach Audit Report — Asian Hotels (North) Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `48 / 100`  
> **Total WCAG Violations:** `13`  
> **Verified Contact Email:** `investorrelations@ahlnorth.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `investorrelations@ahlnorth.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **48/100** on automated WCAG 2.1 AA accessibility testing with **13 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `48/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `1` | Serious: `12` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 9 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (9 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Asian Hotels (North) Ltd
- **Resolved URL:** [https://asianhotelsnorth.com](https://asianhotelsnorth.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `investorrelations@ahlnorth.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **Investor Grievance / Compliance Officer Email:** `sunil.upadhyay@ahlnorth.com` | **Status:** `Verified` | **Source Page:** https://asianhotelsnorth.com/investor-relations.html
- **General Contact Email:** `investorrelations@ahlnorth.com` | **Status:** `Verified` | **Source Page:** https://asianhotelsnorth.com/contactus.html

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-input-field-name`** (SERIOUS)
   - **Help:** ARIA input fields must have an accessible name
   - **Selector:** `.carousel-inner`
2. **`[other] aria-required-children`** (CRITICAL)
   - **Help:** Certain ARIA roles must contain particular children
   - **Selector:** `.carousel-inner`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="aboutus.html"]`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="photo-gallery.html"]`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="contactus.html"]`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.active > a[href="#"]`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `h4`
8. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="Sitemap.html"]`
9. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `p:nth-child(1) > a[href="#"]`
10. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `p:nth-child(2)`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Asian_Hotels__North__Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Asian_Hotels__North__Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Asian_Hotels__North__Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
