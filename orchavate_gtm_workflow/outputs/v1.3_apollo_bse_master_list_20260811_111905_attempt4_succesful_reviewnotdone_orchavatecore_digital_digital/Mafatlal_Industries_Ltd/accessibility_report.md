# Accessibility & GTM Outreach Audit Report — Mafatlal Industries Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `72 / 100`  
> **Total WCAG Violations:** `7`  
> **Verified Contact Email:** `info@mafatlals.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `info@mafatlals.com` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **72/100** on automated WCAG 2.1 AA accessibility testing with **7 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `72/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `5` | Serious: `2` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 1 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (1 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Mafatlal Industries Ltd
- **Resolved URL:** [https://mafatlals.com](https://mafatlals.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@mafatlals.com` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@mafatlals.com` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@mafatlals.com` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#menu-item-82 > .menu-link`
2. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#menu-item-86 > .menu-link`
3. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#menu-item-77523 > .menu-link`
4. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#menu-item-98 > .menu-link`
5. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#menu-item-150 > .menu-link`
6. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-button-text`
7. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `#masthead > div[data-toggle-type="off-canvas"] > .ast-main-header-wrap.main-header-bar-wrap > .ast-primary-header-bar.ast-primary-header.main-header-bar > .ast-builder-grid-row-container.site-primary-header-wrap[data-section="section-primary-header-builder"] > .ast-grid-center-col-layout.ast-builder-grid-row.ast-builder-grid-row-has-sides > .site-header-primary-section-right.ast-grid-right-section.site-header-section > aside > .widget.widget_block.widget_media_image > .wp-block-image.is-resized.size-full > a`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Mafatlal_Industries_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Mafatlal_Industries_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Mafatlal_Industries_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
