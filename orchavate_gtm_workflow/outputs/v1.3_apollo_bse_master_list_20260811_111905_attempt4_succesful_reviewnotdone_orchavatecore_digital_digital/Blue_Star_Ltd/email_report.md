# Accessibility & GTM Outreach Audit Report — Blue Star Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `64`  
> **Verified Contact Email:** `investors@bluestarindia.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `investors@bluestarindia.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **64 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `14` | Serious: `49` | Moderate: `1`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 7 violations
- 🎨 **Color Contrast Failures:** 42 violations
- 📝 **Form & Structural Labels:** 4 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (7 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (42 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Form Labels & ARIA (4 issues):** Associate all `<input>` and `<select>` elements with explicit `<label for="...">` tags or `aria-label` attributes.

---

## 1. Company & Website Verification
- **Company Name:** Blue Star Ltd
- **Resolved URL:** [https://bluestarindia.com](https://bluestarindia.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `investors@bluestarindia.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `investors@bluestarindia.com` | **Status:** `Verified` | **Source Page:** https://bluestarindia.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `.topclose`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="locations"]`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="dealer-locator"]`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `li:nth-child(3) > a[href="#"]`
5. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `li:nth-child(4) > a[href$="the-blue-star-way"]`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="enquiries"]`
7. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="tvcs"]`
8. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.rightNav > ul > li:nth-child(7) > a[target="_blank"][rel="noopener noreferrer"]`
9. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `a[href$="resources"]`
10. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `h1`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Blue_Star_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Blue_Star_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Blue_Star_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
