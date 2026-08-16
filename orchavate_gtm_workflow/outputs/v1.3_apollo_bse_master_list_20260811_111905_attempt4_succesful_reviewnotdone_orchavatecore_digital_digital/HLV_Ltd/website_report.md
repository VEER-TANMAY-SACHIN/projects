# Accessibility & GTM Outreach Audit Report — HLV Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `105`  
> **Verified Contact Email:** `info@hlv.de`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `info@hlv.de` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **105 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `67` | Serious: `38` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 25 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (25 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** HLV Ltd
- **Resolved URL:** [https://hlv.de](https://hlv.de)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `info@hlv.de` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `info@hlv.de` | **Status:** `Verified` | **Source Page:** https://hlv.de

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-required-children`** (CRITICAL)
   - **Help:** Certain ARIA roles must contain particular children
   - **Selector:** `#submenu39`
2. **`[other] aria-required-children`** (CRITICAL)
   - **Help:** Certain ARIA roles must contain particular children
   - **Selector:** `#submenu99`
3. **`[other] aria-required-children`** (CRITICAL)
   - **Help:** Certain ARIA roles must contain particular children
   - **Selector:** `#submenu38`
4. **`[other] aria-required-children`** (CRITICAL)
   - **Help:** Certain ARIA roles must contain particular children
   - **Selector:** `#submenu166`
5. **`[other] aria-required-children`** (CRITICAL)
   - **Help:** Certain ARIA roles must contain particular children
   - **Selector:** `#submenu142`
6. **`[other] aria-required-children`** (CRITICAL)
   - **Help:** Certain ARIA roles must contain particular children
   - **Selector:** `#submenu155`
7. **`[other] aria-required-parent`** (CRITICAL)
   - **Help:** Certain ARIA roles must be contained by particular parents
   - **Selector:** `a[href$="praesidium"][role="menuitem"][target=""]`
8. **`[other] aria-required-parent`** (CRITICAL)
   - **Help:** Certain ARIA roles must be contained by particular parents
   - **Selector:** `a[href$="verbandsrat"][role="menuitem"][target=""]`
9. **`[other] aria-required-parent`** (CRITICAL)
   - **Help:** Certain ARIA roles must be contained by particular parents
   - **Selector:** `#submenu39 > .navigation-list-inner-pane > .navigation-list-outer-pane-container > .row > .col.col-sm-4:nth-child(1) > .navigation-list-inner-pane-container.mb-1:nth-child(1) > .navigation-list > .navigation-list-sub:nth-child(3) > a[role="menuitem"][target=""]`
10. **`[other] aria-required-parent`** (CRITICAL)
   - **Help:** Certain ARIA roles must be contained by particular parents
   - **Selector:** `a[href$="fachausschuesse"][role="menuitem"][target=""]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/HLV_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/HLV_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/HLV_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
