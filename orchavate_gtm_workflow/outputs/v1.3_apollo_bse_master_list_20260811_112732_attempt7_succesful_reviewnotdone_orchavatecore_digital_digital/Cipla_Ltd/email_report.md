# Accessibility & GTM Outreach Audit Report — Cipla Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `44 / 100`  
> **Total WCAG Violations:** `14`  
> **Verified Contact Email:** `info@cipla.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@cipla.com` (`Unverified - guessed pattern`)

### Executive Overview & Pitch Angle
This company currently scores **44/100** on automated WCAG 2.1 AA accessibility testing with **14 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `44/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `11` | Serious: `3` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 11 violations
- 🎨 **Color Contrast Failures:** 0 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (11 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.

---

## 1. Company & Website Verification
- **Company Name:** Cipla Ltd
- **Resolved URL:** [https://cipla.com](https://cipla.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@cipla.com` (`Unverified - guessed pattern`)
- **Overall Discovery Status:** `Unverified - guessed pattern`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email (Guessed Pattern):** `info@cipla.com` | **Status:** `Unverified - guessed pattern`
- **Investor Grievance Email (Guessed Pattern):** `contact@cipla.com` | **Status:** `Unverified - guessed pattern`

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `#pills-purpose-686 > .our-purpose-image > .anims-reveal > .img-fluid[width="1500"][height="660"]`
2. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `figure[data-delay="1"] > a > .img-fluid[height="371"][width="700"]`
3. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `img[height="462"]`
4. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `figure[data-delay="5"] > a > .img-fluid[height="371"][width="700"]`
5. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `figure[data-delay="8"] > a > .img-fluid[height="371"][width="700"]`
6. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `div[aria-label="1 / 5"] > .card-component-two > .card-component-content > h3 > span > .img-fluid[loading="lazy"][typeof="foaf:Image"]`
7. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `div[aria-label="2 / 5"] > .card-component-two > .card-component-content > h3 > span > .img-fluid[width="100"][height="100"]`
8. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `div[aria-label="3 / 5"] > .card-component-two > .card-component-content > h3 > span > .img-fluid[loading="lazy"][typeof="foaf:Image"]`
9. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `div[aria-label="4 / 5"] > .card-component-two > .card-component-content > h3 > span > .img-fluid[loading="lazy"][typeof="foaf:Image"]`
10. **`[missing_alt_text] image-alt`** (CRITICAL)
   - **Help:** Images must have alternative text
   - **Selector:** `div[aria-label="5 / 5"] > .card-component-two > .card-component-content > h3 > span > .img-fluid[width="100"][height="100"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Cipla_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Cipla_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Cipla_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
