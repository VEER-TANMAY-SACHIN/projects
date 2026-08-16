# Accessibility & GTM Outreach Audit Report — Rain Industries Ltd

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `42`  
> **Verified Contact Email:** `customerservice@rainbowshops.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `customerservice@rainbowshops.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **42 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `12` | Serious: `30` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 13 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (13 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Rain Industries Ltd
- **Resolved URL:** [https://rainbowshops.com](https://rainbowshops.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `customerservice@rainbowshops.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `customerservice@rainbowshops.com` | **Status:** `Verified` | **Source Page:** https://rainbowshops.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `.lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[href$="womens-tops"][data-popover-control=""]`
2. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `.lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[href$="womens-dresses"][data-popover-control=""]`
3. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `.lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[href$="womens-bottoms"][data-popover-control=""]`
4. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#tab-womens > .snap-center:nth-child(9) > accessible-hover-popover > .lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[data-popover-control=""][aria-label="Hover to open menu"]`
5. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#tab-womens > .snap-center:nth-child(11) > accessible-hover-popover > .lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[href$="womens-shoes"][data-popover-control=""]`
6. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#tab-womens > .snap-center:nth-child(12) > accessible-hover-popover > .lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[data-popover-control=""][aria-label="Hover to open menu"]`
7. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `.lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[href$="r-collection"][data-popover-control=""]`
8. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `.lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[href$="womens-swimwear"][data-popover-control=""]`
9. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `.lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[href$="womens-lingerie"][data-popover-control=""]`
10. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `.lg\:flex.snap-center.hidden:nth-child(17) > accessible-hover-popover > .lg\:aria-\[selected\=true\]\:border-b-rainbow-blue[aria-controls="popover-"][data-popover-control=""]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Rain_Industries_Ltd_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Rain_Industries_Ltd_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Rain_Industries_Ltd_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
