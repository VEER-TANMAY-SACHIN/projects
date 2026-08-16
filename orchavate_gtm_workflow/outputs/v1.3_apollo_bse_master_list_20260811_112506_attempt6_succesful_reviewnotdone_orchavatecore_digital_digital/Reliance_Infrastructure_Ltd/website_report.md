# Accessibility & GTM Outreach Audit Report — Reliance Infrastructure Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `18`  
> **Verified Contact Email:** `info@rinfra.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@rinfra.com` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **18 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `6` | Serious: `12` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 4 violations
- 🎨 **Color Contrast Failures:** 0 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (4 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.

---

## 1. Company & Website Verification
- **Company Name:** Reliance Infrastructure Ltd
- **Resolved URL:** [https://rinfra.com](https://rinfra.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@rinfra.com` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@rinfra.com` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@rinfra.com` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-input-field-name`** (SERIOUS)
   - **Help:** ARIA input fields must have an accessible name
   - **Selector:** `#yui_patched_v3_18_1_3_1786449882575_12`
2. **`[other] aria-input-field-name`** (SERIOUS)
   - **Help:** ARIA input fields must have an accessible name
   - **Selector:** `#yui_patched_v3_18_1_2_1786449882575_16`
3. **`[other] aria-prohibited-attr`** (SERIOUS)
   - **Help:** Elements must only use permitted ARIA attributes
   - **Selector:** `#yui_patched_v3_18_1_3_1786449882575_112 > .carousel-menu-pause.carousel-menu-item[aria-label="play"]`
4. **`[other] aria-prohibited-attr`** (SERIOUS)
   - **Help:** Elements must only use permitted ARIA attributes
   - **Selector:** `#yui_patched_v3_18_1_3_1786449882575_114 > .carousel-menu-prev.image-viewer-base-control-left[aria-label="previous"]`
5. **`[other] aria-prohibited-attr`** (SERIOUS)
   - **Help:** Elements must only use permitted ARIA attributes
   - **Selector:** `#yui_patched_v3_18_1_3_1786449882575_116 > .carousel-menu-next.image-viewer-base-control-right[aria-label="next"]`
6. **`[other] aria-prohibited-attr`** (SERIOUS)
   - **Help:** Elements must only use permitted ARIA attributes
   - **Selector:** `#yui_patched_v3_18_1_2_1786449882575_119 > .carousel-menu-pause.carousel-menu-item[aria-label="play"]`
7. **`[other] aria-prohibited-attr`** (SERIOUS)
   - **Help:** Elements must only use permitted ARIA attributes
   - **Selector:** `#yui_patched_v3_18_1_2_1786449882575_121 > .carousel-menu-prev.image-viewer-base-control-left[aria-label="previous"]`
8. **`[other] aria-prohibited-attr`** (SERIOUS)
   - **Help:** Elements must only use permitted ARIA attributes
   - **Selector:** `#yui_patched_v3_18_1_2_1786449882575_123 > .carousel-menu-next.image-viewer-base-control-right[aria-label="next"]`
9. **`[other] aria-valid-attr-value`** (CRITICAL)
   - **Help:** ARIA attributes must conform to valid values
   - **Selector:** `#yui_patched_v3_18_1_3_1786449882575_58`
10. **`[other] aria-valid-attr-value`** (CRITICAL)
   - **Help:** ARIA attributes must conform to valid values
   - **Selector:** `#yui_patched_v3_18_1_2_1786449882575_65`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Reliance_Infrastructure_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Reliance_Infrastructure_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Reliance_Infrastructure_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
