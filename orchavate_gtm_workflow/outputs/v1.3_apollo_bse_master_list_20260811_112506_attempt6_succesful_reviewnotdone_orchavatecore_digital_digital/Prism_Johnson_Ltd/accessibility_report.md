# Accessibility & GTM Outreach Audit Report — Prism Johnson Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `64 / 100`  
> **Total WCAG Violations:** `9`  
> **Verified Contact Email:** `info@prismjohnson.in`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `info@prismjohnson.in` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **64/100** on automated WCAG 2.1 AA accessibility testing with **9 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `64/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `4` | Serious: `5` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 4 violations
- 🎨 **Color Contrast Failures:** 4 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (4 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (4 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Prism Johnson Ltd
- **Resolved URL:** [https://prismjohnson.in](https://prismjohnson.in)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@prismjohnson.in` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@prismjohnson.in` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@prismjohnson.in` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.content > .btn_style_1:nth-child(3)`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.overview > .container > .content > .btn_style_1:nth-child(4)`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.mdmsg > .container > .content > .btn_style_1`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.inv_r > .mt-50.btn_style_1`
5. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.igbox:nth-child(1) > .igimg > img`
6. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.igbox:nth-child(2) > .igimg > img`
7. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.igbox:nth-child(3) > .igimg > img`
8. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.igbox:nth-child(4) > .igimg > img`
9. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.logo`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Prism_Johnson_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Prism_Johnson_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Prism_Johnson_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
