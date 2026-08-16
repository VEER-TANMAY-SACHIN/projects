# Accessibility & GTM Outreach Audit Report — EID Parry India Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `25`  
> **Verified Contact Email:** `info@eidparry.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@eidparry.com` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **25 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `8` | Serious: `17` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 8 violations
- 🎨 **Color Contrast Failures:** 6 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (8 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (6 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** EID Parry India Ltd
- **Resolved URL:** [https://eidparry.com](https://eidparry.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@eidparry.com` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@eidparry.com` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@eidparry.com` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[title="Home"]`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.col-sm-12 > h5`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.accordion-toggle`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.copyright > .container > .row > .col-sm-6:nth-child(1)`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="angleritech.com/"]`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="digitalatrium.in/"]`
7. **`[other] frame-title`** (SERIOUS)
   - **Help:** Frames must have an accessible name
   - **Selector:** `iframe[width="90%"]`
8. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.active.item > img`
9. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.col-sm-12 > img`
10. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.fadeInLeft.col-md-4[data-wow-delay="0.5s"] > .img-responsive`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/EID_Parry_India_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/EID_Parry_India_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/EID_Parry_India_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
