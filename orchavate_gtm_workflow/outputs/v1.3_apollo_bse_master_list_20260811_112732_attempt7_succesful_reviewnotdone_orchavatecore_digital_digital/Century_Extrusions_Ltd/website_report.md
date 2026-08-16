# Accessibility & GTM Outreach Audit Report — Century Extrusions Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `31`  
> **Verified Contact Email:** `enquiry@centuryextrusions.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `enquiry@centuryextrusions.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **31 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `13` | Serious: `18` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 1 violations
- 🎨 **Color Contrast Failures:** 13 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (1 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (13 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Century Extrusions Ltd
- **Resolved URL:** [https://centuryextrusions.com](https://centuryextrusions.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `enquiry@centuryextrusions.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **Investor Grievance / Compliance Officer Email:** `info@centuryextrusions.com` | **Status:** `Verified` | **Source Page:** https://centuryextrusions.com/investors
- **General Contact Email:** `enquiry@centuryextrusions.com` | **Status:** `Verified` | **Source Page:** https://centuryextrusions.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#serv-scrol > .owl-dots > .active.owl-dot[role="button"]`
2. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#serv-scrol > .owl-dots > .owl-dot[role="button"]:nth-child(2)`
3. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#serv-scrol > .owl-dots > .owl-dot[role="button"]:nth-child(3)`
4. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#serv-scrol > .owl-dots > .owl-dot[role="button"]:nth-child(4)`
5. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#serv-scrol > .owl-dots > .owl-dot[role="button"]:nth-child(5)`
6. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#nws-scrol > .owl-dots > .active.owl-dot[role="button"]`
7. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#nws-scrol > .owl-dots > .owl-dot[role="button"]:nth-child(2)`
8. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#testi-scrol > .owl-dots > .active.owl-dot[role="button"]`
9. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#testi-scrol > .owl-dots > .owl-dot[role="button"]:nth-child(2)`
10. **`[other] button-name`** (CRITICAL)
   - **Help:** Buttons must have discernible text
   - **Selector:** `#testi-scrol > .owl-dots > .owl-dot[role="button"]:nth-child(3)`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Century_Extrusions_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Century_Extrusions_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Century_Extrusions_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
