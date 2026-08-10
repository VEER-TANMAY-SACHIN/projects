# Accessibility & GTM Outreach Audit Report — 3i Infotech Limited

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `18`  
> **Verified Contact Email:** `marketing@3i-infotech.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `marketing@3i-infotech.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **18 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `12` | Serious: `5` | Moderate: `1`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 11 violations
- 🎨 **Color Contrast Failures:** 0 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (11 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.

---

## 1. Company & Website Verification
- **Company Name:** 3i Infotech Limited
- **Resolved URL:** [https://3i-infotech.com](https://3i-infotech.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `marketing@3i-infotech.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `marketing@3i-infotech.com` | **Status:** `Verified` | **Source Page:** https://3i-infotech.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `button[data-target=".aux-search-popup-bed4454"]`
2. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-e03899e > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(1) > .elementor-icon-list-text > img[decoding="async"]`
3. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-e03899e > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(2) > .elementor-icon-list-text > img[decoding="async"]`
4. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-e03899e > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(3) > .elementor-icon-list-text > img[decoding="async"]`
5. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-e03899e > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(4) > .elementor-icon-list-text > img[decoding="async"]`
6. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-e03899e > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(5) > .elementor-icon-list-text > img[decoding="async"]`
7. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-4ae10a0 > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(1) > .elementor-icon-list-text > img[decoding="async"]`
8. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-4ae10a0 > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(2) > .elementor-icon-list-text > img[decoding="async"]`
9. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-4ae10a0 > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(3) > .elementor-icon-list-text > img[decoding="async"]`
10. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.elementor-element-4ae10a0 > .elementor-widget-container > .elementor-icon-list-items > .elementor-icon-list-item:nth-child(4) > .elementor-icon-list-text > img[decoding="async"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/3i_Infotech_Limited_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/3i_Infotech_Limited_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/3i_Infotech_Limited_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
