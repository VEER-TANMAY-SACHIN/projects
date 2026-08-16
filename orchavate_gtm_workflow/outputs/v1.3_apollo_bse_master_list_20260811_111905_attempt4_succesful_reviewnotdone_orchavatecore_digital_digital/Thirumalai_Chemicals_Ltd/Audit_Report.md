# Accessibility & GTM Outreach Audit Report — Thirumalai Chemicals Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `32 / 100`  
> **Total WCAG Violations:** `17`  
> **Verified Contact Email:** `info@thirumalaichemicals.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@thirumalaichemicals.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **32/100** on automated WCAG 2.1 AA accessibility testing with **17 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `32/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `4` | Serious: `13` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 6 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (6 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Thirumalai Chemicals Ltd
- **Resolved URL:** [https://thirumalaichemicals.com](https://thirumalaichemicals.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@thirumalaichemicals.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **Investor Grievance / Compliance Officer Email:** `rajagopalan.t@thirumalaichemicals.com` | **Status:** `Verified` | **Source Page:** https://thirumalaichemicals.com/investor-information/
- **General Contact Email:** `info@thirumalaichemicals.com` | **Status:** `Verified` | **Source Page:** https://thirumalaichemicals.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#slick-slide10`
2. **`[other] aria-input-field-name`** (SERIOUS)
   - **Help:** ARIA input fields must have an accessible name
   - **Selector:** `.draggable > .slick-track[role="listbox"]`
3. **`[other] aria-input-field-name`** (SERIOUS)
   - **Help:** ARIA input fields must have an accessible name
   - **Selector:** `.slick-dotted > .slick-list[aria-live="polite"] > .slick-track[role="listbox"]`
4. **`[other] aria-required-children`** (CRITICAL)
   - **Help:** Certain ARIA roles must contain particular children
   - **Selector:** `.slick-dots`
5. **`[other] aria-valid-attr-value`** (CRITICAL)
   - **Help:** ARIA attributes must conform to valid values
   - **Selector:** `#slick-slide10`
6. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.simple-icon`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.text-container:nth-child(1) > .fancybox[href="#"]`
8. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.paoc-popup-mheading`
9. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.paoc-popup-sheading`
10. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.pop-up-para:nth-child(1)`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Thirumalai_Chemicals_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Thirumalai_Chemicals_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Thirumalai_Chemicals_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
