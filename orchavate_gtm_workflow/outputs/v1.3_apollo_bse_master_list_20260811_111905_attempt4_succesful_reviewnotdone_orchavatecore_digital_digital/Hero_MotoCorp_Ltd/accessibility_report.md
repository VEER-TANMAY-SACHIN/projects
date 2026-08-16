# Accessibility & GTM Outreach Audit Report — Hero MotoCorp Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `84 / 100`  
> **Total WCAG Violations:** `4`  
> **Verified Contact Email:** `xxx@yourdomain.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `xxx@yourdomain.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **84/100** on automated WCAG 2.1 AA accessibility testing with **4 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `84/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `0` | Serious: `4` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 4 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (4 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Hero MotoCorp Ltd
- **Resolved URL:** [https://heromotocorp.com](https://heromotocorp.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `xxx@yourdomain.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `xxx@yourdomain.com` | **Status:** `Verified` | **Source Page:** https://heromotocorp.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.our-range-action-cta > span`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.ride-tab--active`
3. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `button[data-tab-category="scooters"]`
4. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.slick-slide[data-slick-index="2"][aria-hidden="true"] > div > .connect-card-col-3.connect-card-container > .connect-card-1.connect-card-wrapper > .text-container > .primary-cta[data-analyticsposition="STAY CONNECTED"][target="_blank"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Hero_MotoCorp_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Hero_MotoCorp_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Hero_MotoCorp_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
