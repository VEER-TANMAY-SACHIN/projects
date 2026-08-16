# Accessibility & GTM Outreach Audit Report — Himadri Speciality Chemical Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `19`  
> **Verified Contact Email:** `info@himadri.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@himadri.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **19 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `3` | Serious: `16` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 1 violations
- 🎨 **Color Contrast Failures:** 1 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (1 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (1 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Himadri Speciality Chemical Ltd
- **Resolved URL:** [https://himadri.com](https://himadri.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@himadri.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **Investor Grievance / Compliance Officer Email:** `investors@himadri.com` | **Status:** `Verified` | **Source Page:** https://himadri.com/home/investor_information
- **General Contact Email:** `info@himadri.com` | **Status:** `Verified` | **Source Page:** https://himadri.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `iframe[width="100%"] > .ytmVideoInfoVideoTitle`
2. **`[other] aria-prohibited-attr`** (SERIOUS)
   - **Help:** Elements must only use permitted ARIA attributes
   - **Selector:** `iframe[width="100%"] > #movie_player`
3. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `iframe[width="100%"] > .ytmVideoInfoChannelAvatar`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="mailto:info@himadri.com"]`
5. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.underline`
6. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.footer__top-wrapper-3 > .end[href$="contact.php"]`
7. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.footer__top-3 > .end[href$="contact.php"]`
8. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.footer__btm-2 > .end[href$="contact.php"]`
9. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.container-fluid > .end[href$="contact.php"]`
10. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.row > .end[href$="contact.php"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Himadri_Speciality_Chemical_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Himadri_Speciality_Chemical_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Himadri_Speciality_Chemical_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
