# Accessibility & GTM Outreach Audit Report — Lupin Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `92 / 100`  
> **Total WCAG Violations:** `2`  
> **Verified Contact Email:** `email@example.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟢 Excellent (Low Risk)
- **What this Score Means:** The website adheres well to WCAG 2.1 AA accessibility standards. Disabled users and screen reader operators can navigate the platform with minimal friction.
- **Business & Legal Risk:** Low compliance risk. Minor polish needed for complete digital inclusion.
- **Primary Outreach Contact:** `email@example.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **92/100** on automated WCAG 2.1 AA accessibility testing with **2 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `92/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `0` | Serious: `2` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 1 violations
- 🎨 **Color Contrast Failures:** 0 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (1 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.

---

## 1. Company & Website Verification
- **Company Name:** Lupin Ltd
- **Resolved URL:** [https://lupinepet.com](https://lupinepet.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `email@example.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `email@example.com` | **Status:** `Verified` | **Source Page:** https://lupinepet.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `a[data-timer-link=""]`
2. **`[missing_alt_text] role-img-alt`** (SERIOUS)
   - **Help:** [role="img"] elements must have alternative text
   - **Selector:** `.image-with-text-overlay__desktop-image--cropped > theme-parallax`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Lupin_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Lupin_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Lupin_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
