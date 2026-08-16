# Accessibility & GTM Outreach Audit Report — JSW Steel Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `56 / 100`  
> **Total WCAG Violations:** `11`  
> **Verified Contact Email:** `info@jswsteel.in`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `info@jswsteel.in` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **56/100** on automated WCAG 2.1 AA accessibility testing with **11 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `56/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `3` | Serious: `8` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 2 violations
- 🎨 **Color Contrast Failures:** 1 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (2 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (1 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** JSW Steel Ltd
- **Resolved URL:** [https://jswsteel.in](https://jswsteel.in)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@jswsteel.in` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@jswsteel.in` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@jswsteel.in` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.commonCTA > .common_cta[target=""]`
2. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.block-registration > span > img`
3. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.social-box > img`
4. **`[other] input-button-name`** (CRITICAL)
   - **Help:** Input buttons must have discernible text
   - **Selector:** `.wpcf7-submit`
5. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.logo_cvr`
6. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `a[href="#"]`
7. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.social-box > a[target="_blank"]:nth-child(1)`
8. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `a[target="_blank"]:nth-child(2)`
9. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `a[href$="jswsteel"]`
10. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `a[target="_blank"]:nth-child(4)`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/JSW_Steel_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/JSW_Steel_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/JSW_Steel_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
