# Accessibility & GTM Outreach Audit Report — Aaron Industries Limited

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `30 / 100`  
> **Total WCAG Violations:** `22`  
> **Verified Contact Email:** `tds@bigshareonline.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🔴 Critical (High Legal & Compliance Risk)
- **What this Score Means:** The website has severe accessibility barriers. Screen readers, keyboard-only users, and visually impaired visitors will struggle or fail to use key services.
- **Business & Legal Risk:** High compliance and legal risk under WCAG 2.1 AA standards. Immediate outreach recommended to offer remediation.
- **Primary Outreach Contact:** `tds@bigshareonline.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **30/100** on automated WCAG 2.1 AA accessibility testing with **22 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `30/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `0` | Serious: `22` | Moderate: `0`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 13 violations
- 🎨 **Color Contrast Failures:** 2 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 0 violations

### Priority Code Remediation Steps for Developers
- **Image Alt Attributes (13 issues):** Add meaningful `alt="..."` text to all `<img>` tags. Use `alt=""` for purely decorative images.
- **Color Contrast Ratios (2 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.

---

## 1. Company & Website Verification
- **Company Name:** Aaron Industries Limited
- **Resolved URL:** [https://aaronindustries.net](https://aaronindustries.net)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `tds@bigshareonline.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `tds@bigshareonline.com` | **Status:** `Verified` | **Source Page:** https://aaronindustries.net/investor-information/

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `#content-089f0246a789193d86a6-tab > .elementskit-tab-title`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.elementor-element-ce5b196 > .elementor-widget-container > h2`
3. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.elementor-element-4f0f463 > .elementor-widget-container > a[href$="aaronindustries.net/"]`
4. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.elementor-element-4126e15 > .elementor-widget-container > .elementor-icon-wrapper > .elementor-icon`
5. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.elementor-element-41619bb > .elementor-widget-container > a[target="_blank"]`
6. **`[other] link-name`** (SERIOUS)
   - **Help:** Links must have discernible text
   - **Selector:** `.elementor-element-9f12401 > .elementor-widget-container > a[href$="aaronindustries.net/"]`
7. **`[other] nested-interactive`** (SERIOUS)
   - **Help:** Interactive controls must not be nested
   - **Selector:** `#sm-17863706092991616-1`
8. **`[other] nested-interactive`** (SERIOUS)
   - **Help:** Interactive controls must not be nested
   - **Selector:** `#sm-17863706092991616-3`
9. **`[other] nested-interactive`** (SERIOUS)
   - **Help:** Interactive controls must not be nested
   - **Selector:** `#sm-17863706092991616-5`
10. **`[missing_alt_text] role-img-alt`** (SERIOUS)
   - **Help:** [role="img"] elements must have alternative text
   - **Selector:** `.swiper-slide-duplicate[aria-label="5 / 7"][data-swiper-slide-index="4"] > .elementor-carousel-image[aria-label=""][role="img"]`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/Aaron_Industries_Limited_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/Aaron_Industries_Limited_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/Aaron_Industries_Limited_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
