# Accessibility & GTM Outreach Audit Report — Bhansali Engineering Polymers Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `76 / 100`  
> **Total WCAG Violations:** `6`  
> **Verified Contact Email:** `rnt.helpdesk@in.mpms.mufg.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `rnt.helpdesk@in.mpms.mufg.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **76/100** on automated WCAG 2.1 AA accessibility testing with **6 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `76/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `2` | Serious: `3` | Moderate: `1`

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
- **Company Name:** Bhansali Engineering Polymers Ltd
- **Resolved URL:** [https://bhansaliabs.com](https://bhansaliabs.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `rnt.helpdesk@in.mpms.mufg.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **Investor Grievance / Compliance Officer Email:** `Investors@Bhansaliabs.com` | **Status:** `Verified` | **Source Page:** https://bhansaliabs.com/investorcontact
- **General Contact Email:** `rnt.helpdesk@in.mpms.mufg.com` | **Status:** `Verified` | **Source Page:** https://bhansaliabs.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.tradingview-widget-copyright`
2. **`[other] html-has-lang`** (SERIOUS)
   - **Help:** <html> element must have a lang attribute
   - **Selector:** `html`
3. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `#tradingview_749b8 > img`
4. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `.financial_img > img`
5. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `a[href$="bhansaliabs.com"]`
6. **`[other] meta-viewport`** (MODERATE)
   - **Help:** Zooming and scaling must not be disabled
   - **Selector:** `meta[name="viewport"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Bhansali_Engineering_Polymers_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Bhansali_Engineering_Polymers_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Bhansali_Engineering_Polymers_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
