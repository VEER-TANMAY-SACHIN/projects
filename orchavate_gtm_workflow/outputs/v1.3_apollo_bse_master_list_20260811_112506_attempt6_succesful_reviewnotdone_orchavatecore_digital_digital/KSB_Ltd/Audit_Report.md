# Accessibility & GTM Outreach Audit Report — KSB Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `80 / 100`  
> **Total WCAG Violations:** `5`  
> **Verified Contact Email:** `Jackie.DeFusco@hearst.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `Jackie.DeFusco@hearst.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **80/100** on automated WCAG 2.1 AA accessibility testing with **5 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `80/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `4` | Serious: `1` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 1 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (1 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** KSB Ltd
- **Resolved URL:** [https://ksbw.com](https://ksbw.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `Jackie.DeFusco@hearst.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `Jackie.DeFusco@hearst.com` | **Status:** `Verified` | **Source Page:** https://ksbw.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `iframe > .wxmap--src-widgets-map-components-layouts-default-zoom-zoom__button.wxmap--src-widgets-map-components-layouts-default-common-button__root_icon.wxmap--src-widgets-map-components-layouts-default-common-button__root:nth-child(1)`
2. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `iframe > .wxmap--src-widgets-map-components-layouts-default-zoom-zoom__button.wxmap--src-widgets-map-components-layouts-default-common-button__root_icon.wxmap--src-widgets-map-components-layouts-default-common-button__root:nth-child(2)`
3. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `iframe > .wxmap--src-widgets-map-components-layouts-default-locations-locations__toggle-button`
4. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `iframe > .wxmap--src-widgets-map-components-layouts-default-layers-layers__toggle-button`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.css-xbt7nk`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/KSB_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/KSB_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/KSB_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
