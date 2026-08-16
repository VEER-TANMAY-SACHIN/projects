# Accessibility & GTM Outreach Audit Report — Ganesh Benzoplast Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `56 / 100`  
> **Total WCAG Violations:** `11`  
> **Verified Contact Email:** `info@gblinfra.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `info@gblinfra.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **56/100** on automated WCAG 2.1 AA accessibility testing with **11 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `56/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `4` | Serious: `6` | Moderate: `1`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 4 violations
- 🎨 **Color Contrast Failures:** 0 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (4 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.

---

## 1. Company & Website Verification
- **Company Name:** Ganesh Benzoplast Ltd
- **Resolved URL:** [https://ganeshbenzoplast.com](https://ganeshbenzoplast.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@gblinfra.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `info@gblinfra.com` | **Status:** `Verified` | **Source Page:** https://ganeshbenzoplast.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] html-has-lang`** (SERIOUS)
   - **Help:** <html> element must have a lang attribute
   - **Selector:** `html`
2. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `img[src$="logo.jpg"]`
3. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `#slick-slide00 > img[src$="slider1.jpg"]`
4. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `img[src$="InvestorCenter.jpg"]`
5. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `img[src$="Careers.jpg"]`
6. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.logo > a[href="/"]`
7. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `#slick-slide00 > .btn-knowmore[href$="AboutGroup"]`
8. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.mb-md-0 > .know-more > a`
9. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.know-more > a[href$="Careers"]`
10. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `#back-to-top`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Ganesh_Benzoplast_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Ganesh_Benzoplast_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Ganesh_Benzoplast_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
