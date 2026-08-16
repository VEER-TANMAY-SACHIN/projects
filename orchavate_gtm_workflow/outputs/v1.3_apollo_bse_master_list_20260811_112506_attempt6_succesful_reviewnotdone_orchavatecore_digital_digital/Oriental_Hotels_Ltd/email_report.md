# Accessibility & GTM Outreach Audit Report — Oriental Hotels Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `24`  
> **Verified Contact Email:** `info@oriental-hotels.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@oriental-hotels.com` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **24 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `1` | Serious: `22` | Moderate: `1`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 10 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (10 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Oriental Hotels Ltd
- **Resolved URL:** [https://oriental-hotels.com](https://oriental-hotels.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@oriental-hotels.com` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@oriental-hotels.com` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@oriental-hotels.com` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-input-field-name`** (SERIOUS)
   - **Help:** ARIA input fields must have an accessible name
   - **Selector:** `.slick-track`
2. **`[other] aria-toggle-field-name`** (SERIOUS)
   - **Help:** ARIA toggle fields must have an accessible name
   - **Selector:** `.item`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href="/news/2099/"] > .txtBox > time`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href="/news/2080/"] > .txtBox > time`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href="/news/2083/"] > .txtBox > time`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href="/news/2065/"] > .txtBox > time`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href="/news/2051/"] > .txtBox > time`
8. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href="/news/2041/"] > .txtBox > time`
9. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href="/news/2035/"] > .txtBox > time`
10. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href="/news/2016/"] > .txtBox > time`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Oriental_Hotels_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Oriental_Hotels_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Oriental_Hotels_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
