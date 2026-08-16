# Accessibility & GTM Outreach Audit Report — Lyka Labs Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `40 / 100`  
> **Total WCAG Violations:** `15`  
> **Verified Contact Email:** `enquiry@lykalabs.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `enquiry@lykalabs.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **40/100** on automated WCAG 2.1 AA accessibility testing with **15 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `40/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `0` | Serious: `15` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 14 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 1 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (14 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Keyboard & Focus Management (1 issues):** Ensure all interactive buttons/links are focusable via `Tab` key and visual focus outlines are visible.

---

## 1. Company & Website Verification
- **Company Name:** Lyka Labs Ltd
- **Resolved URL:** [https://lykalabs.com](https://lykalabs.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `enquiry@lykalabs.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `enquiry@lykalabs.com` | **Status:** `Verified` | **Source Page:** https://lykalabs.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-da6771f > .elementor-widget-container > .elementor-heading-title.elementor-size-default`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-button-link.elementor-button[href$="about/"] > .elementor-button-content-wrapper > .elementor-button-text`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-15ab053 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link.elementor-button[href$="contact/"] > .elementor-button-content-wrapper > .elementor-button-text`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-cc623ef > .elementor-widget-container > .elementor-heading-title.elementor-size-default`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-fbddae3 > .elementor-widget-container > .elementor-heading-title.elementor-size-default`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-c88b3fa > .elementor-widget-container > .elementor-heading-title.elementor-size-default`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-5e9ef27 > .elementor-widget-container > .elementor-heading-title.elementor-size-default`
8. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-e97ea51 > .elementor-widget-container > .elementor-heading-title.elementor-size-default`
9. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-10b97b6 > .elementor-widget-container > .elementor-heading-title.elementor-size-default`
10. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-e0429d1 > .elementor-widget-container > .elementor-heading-title.elementor-size-default`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Lyka_Labs_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Lyka_Labs_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Lyka_Labs_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
