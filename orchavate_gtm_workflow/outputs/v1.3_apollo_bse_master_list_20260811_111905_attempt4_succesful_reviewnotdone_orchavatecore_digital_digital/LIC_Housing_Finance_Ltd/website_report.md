# Accessibility & GTM Outreach Audit Report — LIC Housing Finance Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `28`  
> **Verified Contact Email:** `customersupport@lichousing.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `customersupport@lichousing.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **28 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `6` | Serious: `22` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 6 violations
- 📝 **Form & Structural Labels:** 6 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (6 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Form Labels & ARIA (6 issues):** Associate all `<input>` and `<select>` elements with explicit `<label for="...">` tags or `aria-label` attributes.

---

## 1. Company & Website Verification
- **Company Name:** LIC Housing Finance Ltd
- **Resolved URL:** [https://lichousing.com](https://lichousing.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `customersupport@lichousing.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `customersupport@lichousing.com` | **Status:** `Verified` | **Source Page:** https://lichousing.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[data-event-key="tab1"]`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[data-event-key="tab2"]`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[data-event-key="loan_eligibility_calculator"]`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[data-event-key="balance_transfer_calculator"]`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[data-event-key="affordability_calculator"]`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[data-event-key="newsEvents"]`
7. **`[form_labels] label`** (CRITICAL)
   - **Help:** Form elements must have labels
   - **Selector:** `input[min="50000"]`
8. **`[form_labels] label`** (CRITICAL)
   - **Help:** Form elements must have labels
   - **Selector:** `.range-slider_value[value="1000000"][type="number"]`
9. **`[form_labels] label`** (CRITICAL)
   - **Help:** Form elements must have labels
   - **Selector:** `.active.tab-pane[role="tabpanel"] > .row > .col-lg.col-calc > .calc-slider > .range-slider:nth-child(2) > .align-items-center.row > .col-sm > input[min="1"][max="100"][value="7.15"]`
10. **`[form_labels] label`** (CRITICAL)
   - **Help:** Form elements must have labels
   - **Selector:** `.active.tab-pane[role="tabpanel"] > .row > .col-lg.col-calc > .calc-slider > .range-slider:nth-child(2) > .align-items-center.row > .col-sm-auto > .range-slider_value[value="7.15"][type="number"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/LIC_Housing_Finance_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/LIC_Housing_Finance_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/LIC_Housing_Finance_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
