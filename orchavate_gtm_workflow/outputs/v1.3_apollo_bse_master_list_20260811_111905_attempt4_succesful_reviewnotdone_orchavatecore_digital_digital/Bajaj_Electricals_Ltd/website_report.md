# Accessibility & GTM Outreach Audit Report — Bajaj Electricals Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `32 / 100`  
> **Total WCAG Violations:** `17`  
> **Verified Contact Email:** ``  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **32/100** on automated WCAG 2.1 AA accessibility testing with **17 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `32/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `0` | Serious: `17` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 8 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (8 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Bajaj Electricals Ltd
- **Resolved URL:** [https://bajajelectricals.com](https://bajajelectricals.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `` | **Status:** `Verified` | **Source Page:** https://bajajelectricals.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.parentSearchcontainer > .header__search.header__search--collapsible-mob.header__search--collapsible-desktop > predictive-search > .search.search--speech[role="search"] > search-form > .search__input.js-search-input[type="search"]`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `div[aria-label="1 / 8"] > .div_card_wrapper > a > .div_card_wrapper_sub > .div_card_wrapper_sub_WrapperText > .div_card_wrapper_sub_WrapperText_title`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `div[aria-label="2 / 8"] > .div_card_wrapper > a > .div_card_wrapper_sub > .div_card_wrapper_sub_WrapperText > .div_card_wrapper_sub_WrapperText_title`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `div[aria-label="3 / 8"] > .div_card_wrapper > a > .div_card_wrapper_sub > .div_card_wrapper_sub_WrapperText > .div_card_wrapper_sub_WrapperText_title`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `div[aria-label="4 / 8"] > .div_card_wrapper > a > .div_card_wrapper_sub > .div_card_wrapper_sub_WrapperText > .div_card_wrapper_sub_WrapperText_title`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `div[aria-label="1 / 10"] > .test-card > .card-wrapper-slider > .card-parent > .name`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `div[aria-label="2 / 10"] > .test-card > .card-wrapper-slider > .card-parent > .name`
8. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `div[aria-label="3 / 10"] > .test-card > .card-wrapper-slider > .card-parent > .name`
9. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `#template--25426251022636__slideshow_iTpXyQ_1 > .image-banner__image.media.media--has-overlay`
10. **`[other] list`** (SERIOUS)
   - **Help:** <ul> and <ol> must only directly contain <li>, <script> or <template> elements
   - **Selector:** `.main-nav`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Bajaj_Electricals_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Bajaj_Electricals_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Bajaj_Electricals_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
