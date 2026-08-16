# Accessibility & GTM Outreach Audit Report — Chambal Fertilisers & Chemicals Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `68 / 100`  
> **Total WCAG Violations:** `8`  
> **Verified Contact Email:** `einward.ris@Kfintech.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `einward.ris@Kfintech.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **68/100** on automated WCAG 2.1 AA accessibility testing with **8 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `68/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `4` | Serious: `4` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 3 violations
- 🎨 **Color Contrast Failures:** 0 violations
- 📝 **Form & Structural Labels:** 1 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (3 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Form Labels & ARIA (1 issues):** Associate all `<input>` and `<select>` elements with explicit `<label for="...">` tags or `aria-label` attributes.

---

## 1. Company & Website Verification
- **Company Name:** Chambal Fertilisers & Chemicals Ltd
- **Resolved URL:** [https://chambalfertilisers.com](https://chambalfertilisers.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `einward.ris@Kfintech.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `einward.ris@Kfintech.com` | **Status:** `Verified` | **Source Page:** https://chambalfertilisers.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] frame-title`** (SERIOUS)
   - **Help:** Frames must have an accessible name
   - **Selector:** `#ticks`
2. **`[other] frame-title`** (SERIOUS)
   - **Help:** Frames must have an accessible name
   - **Selector:** `#ticks > #ticks`
3. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `img[src$="chambalgjk3.jpg"]`
4. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `#ticks > #ticks > #tdbse`
5. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `#ticks > #ticks > #tdnse`
6. **`[form_labels] label`** (CRITICAL)
   - **Help:** Form elements must have labels
   - **Selector:** `#mod-search-searchword`
7. **`[other] marquee`** (SERIOUS)
   - **Help:** <marquee> elements are deprecated and must not be used
   - **Selector:** `#ticks > #ticks > #MarqueeId`
8. **`[other] marquee`** (SERIOUS)
   - **Help:** <marquee> elements are deprecated and must not be used
   - **Selector:** `marquee`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Chambal_Fertilisers___Chemicals_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Chambal_Fertilisers___Chemicals_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Chambal_Fertilisers___Chemicals_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
