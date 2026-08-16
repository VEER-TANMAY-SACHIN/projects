# Accessibility & GTM Outreach Audit Report — Thomas Cook (India) Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `24`  
> **Verified Contact Email:** `info@thomascook.in`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@thomascook.in` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **24 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `3` | Serious: `19` | Moderate: `2`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 8 violations
- 📝 **Form & Structural Labels:** 1 violations
- ⌨️ **Keyboard Navigation & Focus:** 6 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (8 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Form Labels & ARIA (1 issues):** Associate all `<input>` and `<select>` elements with explicit `<label for="...">` tags or `aria-label` attributes.
- **Keyboard & Focus Management (6 issues):** Ensure all interactive buttons/links are focusable via `Tab` key and visual focus outlines are visible.

---

## 1. Company & Website Verification
- **Company Name:** Thomas Cook (India) Ltd
- **Resolved URL:** [https://thomascook.in](https://thomascook.in)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@thomascook.in` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@thomascook.in` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@thomascook.in` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `.card_one > .btn[aria-hidden="true"]`
2. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `.card_two > .btn[aria-hidden="true"]`
3. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `.card_three > .btn[aria-hidden="true"]`
4. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `.card_four > .btn[aria-hidden="true"]`
5. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `.card_five > .btn[aria-hidden="true"]`
6. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.search_box > .btn_search.btn`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `button[data-target=".tabofferforex"]`
8. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `button[data-target=".tabofferflights"]`
9. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.inactive[aria-label="4 / 7"][role="group"] > .bank_offers.item_card > .img_block > .coupon > span`
10. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.inactive[aria-label="4 / 7"][role="group"] > .bank_offers.item_card > .text_box > .top_blk > .lft > span:nth-child(1)`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Thomas_Cook__India__Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Thomas_Cook__India__Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Thomas_Cook__India__Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
