# Accessibility & GTM Outreach Audit Report — Bharat Heavy Electricals Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `72 / 100`  
> **Total WCAG Violations:** `7`  
> **Verified Contact Email:** `investor@bigshareonline.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `investor@bigshareonline.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **72/100** on automated WCAG 2.1 AA accessibility testing with **7 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `72/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `2` | Serious: `5` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 1 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (1 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Bharat Heavy Electricals Ltd
- **Resolved URL:** [https://bhel.com](https://bhel.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `investor@bigshareonline.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **Investor Grievance / Compliance Officer Email:** `investor@bigshareonline.com` | **Status:** `Verified` | **Source Page:** https://bhel.com/investor-grievance-redressal-mechanism
- **General Contact Email:** `investor@bigshareonline.com` | **Status:** `Verified` | **Source Page:** https://bhel.com/investor-grievance-redressal-mechanism

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.business_solution_carosel > .owl-dots > .owl-dot.active[role="button"]`
2. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.business_solution_carosel > .owl-dots > .owl-dot[role="button"]:nth-child(2)`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.col-12.col-md-3:nth-child(1) > .ab-social-cart > iframe > .tutorial_link`
4. **`[other] frame-title`** (SERIOUS)
   - **Help:** Frames must have an accessible name
   - **Selector:** `.col-12.col-md-3:nth-child(1) > .ab-social-cart > iframe`
5. **`[other] frame-title`** (SERIOUS)
   - **Help:** Frames must have an accessible name
   - **Selector:** `.col-12.col-md-3:nth-child(2) > .ab-social-cart > iframe`
6. **`[other] frame-title`** (SERIOUS)
   - **Help:** Frames must have an accessible name
   - **Selector:** `iframe[allow="encrypted-media"]`
7. **`[other] frame-title`** (SERIOUS)
   - **Help:** Frames must have an accessible name
   - **Selector:** `.w-100`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Bharat_Heavy_Electricals_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Bharat_Heavy_Electricals_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Bharat_Heavy_Electricals_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
