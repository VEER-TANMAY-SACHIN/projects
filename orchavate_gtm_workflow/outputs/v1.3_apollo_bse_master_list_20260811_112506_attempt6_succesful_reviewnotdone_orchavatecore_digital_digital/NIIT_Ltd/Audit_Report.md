# Accessibility & GTM Outreach Audit Report — NIIT Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `33`  
> **Verified Contact Email:** `info@niit.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@niit.com` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **33 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `6` | Serious: `27` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 26 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 1 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (26 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Keyboard & Focus Management (1 issues):** Ensure all interactive buttons/links are focusable via `Tab` key and visual focus outlines are visible.

---

## 1. Company & Website Verification
- **Company Name:** NIIT Ltd
- **Resolved URL:** [https://niit.com](https://niit.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@niit.com` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@niit.com` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@niit.com` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.swiper-button-prev-custom`
2. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.swiper-button-next-custom`
3. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.swiper-button-prev-custom-about`
4. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.swiper-button-next-custom-about`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.swiper-slide-active.swiper-slide[data-swiper-slide-index="0"] > .sm\:p-10.pr-3.items-start > .xs\:text-2xl.pl-0.sm\:max-w-xs > span:nth-child(1)`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.swiper-slide-active.swiper-slide[data-swiper-slide-index="0"] > .sm\:p-10.pr-3.items-start > .xs\:text-2xl.pl-0.sm\:max-w-xs > span:nth-child(2)`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.swiper-slide-active.swiper-slide[data-swiper-slide-index="0"] > .sm\:p-10.pr-3.items-start > .xs\:text-2xl.pl-0.sm\:max-w-xs > span:nth-child(3)`
8. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.swiper-slide-active.swiper-slide[data-swiper-slide-index="0"] > .sm\:p-10.pr-3.items-start > .lg\:text-base.pr-5.text-gray-200`
9. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.min-w-\[70px\].sm\:min-w-\[120px\].sm\:justify-center:nth-child(1) > .sm\:text-center.text-center > .lg\:text-2xl.mb-0\.5.sm\:mb-1 > .items-baseline.inline-flex > span:nth-child(2)`
10. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.min-w-\[70px\].sm\:min-w-\[120px\].sm\:justify-center:nth-child(1) > .sm\:text-center.text-center > .text-\[7px\].sm\:text-\[9px\].lg\:text-\[11px\]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/NIIT_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/NIIT_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/NIIT_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
