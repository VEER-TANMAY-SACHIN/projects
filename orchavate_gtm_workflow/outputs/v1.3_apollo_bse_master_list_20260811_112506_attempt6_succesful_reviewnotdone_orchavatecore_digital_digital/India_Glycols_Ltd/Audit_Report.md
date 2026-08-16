# Accessibility & GTM Outreach Audit Report — India Glycols Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `30`  
> **Verified Contact Email:** `info@indiaglycols.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@indiaglycols.com` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **30 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `9` | Serious: `21` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 15 violations
- 🎨 **Color Contrast Failures:** 4 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 1 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (15 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (4 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Keyboard & Focus Management (1 issues):** Ensure all interactive buttons/links are focusable via `Tab` key and visual focus outlines are visible.

---

## 1. Company & Website Verification
- **Company Name:** India Glycols Ltd
- **Resolved URL:** [https://indiaglycols.com](https://indiaglycols.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@indiaglycols.com` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@indiaglycols.com` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@indiaglycols.com` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#sm-17864488887986008-1`
2. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#sm-17864488887986008-3`
3. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#sm-17864488887986008-5`
4. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#sm-17864488887986008-7`
5. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `iframe > .ytmVideoInfoVideoTitle`
6. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `#slick-slide04`
7. **`[other] aria-prohibited-attr`** (SERIOUS)
   - **Help:** Elements must only use permitted ARIA attributes
   - **Selector:** `iframe > #movie_player`
8. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `iframe > .ytmVideoInfoChannelAvatar`
9. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="legal-disclaimer/"]`
10. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-747c240 > .elementor-widget-container > .elementor-heading-title.elementor-size-default`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/India_Glycols_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/India_Glycols_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/India_Glycols_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
