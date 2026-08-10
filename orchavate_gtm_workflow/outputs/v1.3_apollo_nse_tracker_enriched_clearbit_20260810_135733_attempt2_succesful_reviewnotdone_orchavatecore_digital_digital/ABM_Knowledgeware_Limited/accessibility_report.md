# Accessibility & GTM Outreach Audit Report — ABM Knowledgeware Limited

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `77`  
> **Verified Contact Email:** `egovernance@abmindia.com, cs@abmindia.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `egovernance@abmindia.com, cs@abmindia.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **77 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `24` | Serious: `52` | Moderate: `1`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 14 violations
- 🎨 **Color Contrast Failures:** 8 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 24 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (14 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (8 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Keyboard & Focus Management (24 issues):** Ensure all interactive buttons/links are focusable via `Tab` key and visual focus outlines are visible.

---

## 1. Company & Website Verification
- **Company Name:** ABM Knowledgeware Limited
- **Resolved URL:** [https://abmindia.com](https://abmindia.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `egovernance@abmindia.com, cs@abmindia.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `egovernance@abmindia.com, cs@abmindia.com` | **Status:** `Verified` | **Source Page:** https://abmindia.com/home/contact_us

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#slick-slide00`
2. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#slick-slide70`
3. **`[other] aria-allowed-attr`** (CRITICAL)
   - **Help:** Elements must only use supported ARIA attributes
   - **Selector:** `#slick-slide60`
4. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `.front-baner.hero-banner[data-slick-index="5"]`
5. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `#slick-slide01`
6. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `#slick-slide02`
7. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `#slick-slide03`
8. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `#slick-slide04`
9. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `#slick-slide71`
10. **`[keyboard_navigation] aria-hidden-focus`** (SERIOUS)
   - **Help:** ARIA hidden element must not be focusable or contain focusable elements
   - **Selector:** `#slick-slide72`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/ABM_Knowledgeware_Limited_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/ABM_Knowledgeware_Limited_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/ABM_Knowledgeware_Limited_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
