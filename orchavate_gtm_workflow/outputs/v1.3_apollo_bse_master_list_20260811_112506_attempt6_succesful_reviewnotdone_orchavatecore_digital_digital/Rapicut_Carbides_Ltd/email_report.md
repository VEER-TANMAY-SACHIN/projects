# Accessibility & GTM Outreach Audit Report — Rapicut Carbides Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `44 / 100`  
> **Total WCAG Violations:** `14`  
> **Verified Contact Email:** `sales@rapicutcarbides.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `sales@rapicutcarbides.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **44/100** on automated WCAG 2.1 AA accessibility testing with **14 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `44/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `5` | Serious: `9` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 5 violations
- 🎨 **Color Contrast Failures:** 2 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (5 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (2 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Rapicut Carbides Ltd
- **Resolved URL:** [https://rapicutcarbides.com](https://rapicutcarbides.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `sales@rapicutcarbides.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **Investor Grievance / Compliance Officer Email:** `investors@rapicutcarbides.com` | **Status:** `Verified` | **Source Page:** https://rapicutcarbides.com/investor-relations/annual-reports
- **General Contact Email:** `sales@rapicutcarbides.com` | **Status:** `Verified` | **Source Page:** https://rapicutcarbides.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.ht-btn`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.cookie-consent__message`
3. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.swiper-slide-active > .category-thumb > img`
4. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.swiper-slide-next > .category-thumb > img`
5. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.swiper-slide-visible.category-box.swiper-slide:nth-child(3) > .category-thumb > img`
6. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.swiper-slide-visible.category-box.swiper-slide:nth-child(4) > .category-thumb > img`
7. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.category-box.swiper-slide.industry-four-slider__single-slide:nth-child(5) > .category-thumb > img`
8. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.header-wrapper__inner > .logo > a[href="/"]`
9. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.footer-logo > a[href="#"]`
10. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `a[data-tippy="Facebook"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Rapicut_Carbides_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Rapicut_Carbides_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Rapicut_Carbides_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
