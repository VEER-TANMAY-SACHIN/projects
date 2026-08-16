# Accessibility & GTM Outreach Audit Report — Hindalco Industries Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `63`  
> **Verified Contact Email:** `hilinvestors@adityabirla.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `hilinvestors@adityabirla.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **63 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `34` | Serious: `29` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 15 violations
- 🎨 **Color Contrast Failures:** 7 violations
- 📝 **Form & Structural Labels:** 19 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (15 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (7 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Form Labels & ARIA (19 issues):** Associate all `<input>` and `<select>` elements with explicit `<label for="...">` tags or `aria-label` attributes.

---

## 1. Company & Website Verification
- **Company Name:** Hindalco Industries Ltd
- **Resolved URL:** [https://hindalco.com](https://hindalco.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `hilinvestors@adityabirla.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **Investor Grievance / Compliance Officer Email:** `hilinvestors@adityabirla.com` | **Status:** `Verified` | **Source Page:** https://hindalco.com
- **General Contact Email:** `hilinvestors@adityabirla.com` | **Status:** `Verified` | **Source Page:** https://hindalco.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `iframe > #BasicChart_lnkNSE`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `iframe > #BasicChart_li3`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `iframe > #BasicChart_li5`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `iframe > #BasicChart_li6`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `iframe > #BasicChart_li7`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `iframe > #BasicChart_li9`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.fadeInUp-view.mt-5[href$="people-stories"] > span`
8. **`[other] frame-title`** (SERIOUS)
   - **Help:** Frames must have an accessible name
   - **Selector:** `iframe`
9. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.aboutus_main-nav_item > .main-nav__list--lvl2.main-nav__list > .menu-bg > .figure > .figure-caption > .arrowHalf > img`
10. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.businesses_main-nav_item > .main-nav__list--lvl2.main-nav__list > .menu-bg > .figure > .figure-caption > .arrowHalf > img`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Hindalco_Industries_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Hindalco_Industries_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Hindalco_Industries_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
