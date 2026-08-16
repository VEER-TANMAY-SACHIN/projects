# Accessibility & GTM Outreach Audit Report — Crisil Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `22`  
> **Verified Contact Email:** `info@crisil.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@crisil.com` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **22 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `20` | Serious: `2` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 20 violations
- 🎨 **Color Contrast Failures:** 2 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (20 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (2 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Crisil Ltd
- **Resolved URL:** [https://crisil.com](https://crisil.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@crisil.com` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@crisil.com` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@crisil.com` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.item2 > .analytics-cta-title > b`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.item3 > .analytics-cta-title > b`
3. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.delevering-mission > .image-and-text > .banner-wrap > .banner > .hidden-xs`
4. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.columncontrol:nth-child(3) > .no-padding.col-xs-12 > .box > .recognition-content-container > .columncontrol > .no-padding.col-xs-12 > .columncontrol > .fiveColumnctrl > .col-md-2.col-xs-6.col-sm-6:nth-child(1) > .image.parbase > .cq-dd-image[data-emptytext="Image"]`
5. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.col-md-2.col-xs-6.col-sm-6:nth-child(2) > .image.parbase > .cq-dd-image[data-emptytext="Image"]`
6. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.col-md-2.col-xs-6.col-sm-6:nth-child(3) > .image.parbase > .cq-dd-image[data-emptytext="Image"]`
7. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.col-md-2.col-xs-6.col-sm-6:nth-child(4) > .image.parbase > .cq-dd-image[data-emptytext="Image"]`
8. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.col-md-2.col-xs-6.col-sm-6:nth-child(5) > .image.parbase > .cq-dd-image[data-emptytext="Image"]`
9. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.columncontrol:nth-child(4) > .no-padding.col-xs-12 > .box > .recognition-content-container > .columncontrol > .no-padding.col-xs-12 > .columncontrol > .fiveColumnctrl > .col-md-2.col-xs-6.col-sm-6:nth-child(1) > .image.parbase > .cq-dd-image[data-emptytext="Image"]`
10. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.single-analytics-cta[title="Award and Recognitions"][rel="noopener noreferrer"] > img[height="24"][width="24"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Crisil_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Crisil_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Crisil_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
