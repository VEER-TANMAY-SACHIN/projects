# Accessibility & GTM Outreach Audit Report — 5Paisa Capital Limited

> **Audit Status:** `Completed`  
> **Lighthouse Accessibility Score:** `52 / 100`  
> **Total WCAG Violations:** `12`  
> **Verified Contact Email:** `care@paisabazaar.com`  

---

## 👔 Executive Summary (For Non-Technical & Business Stakeholders)

- **Accessibility Rating:** 🟠 Moderate (Needs Improvement)
- **What this Score Means:** The website is partially accessible but contains noticeable barriers in image descriptions, color contrast, or navigation controls.
- **Business & Legal Risk:** Moderate compliance risk. Potential loss of disabled customers and non-compliance with digital accessibility guidelines.
- **Primary Outreach Contact:** `care@paisabazaar.com` (`Verified`)

### Executive Overview & Pitch Angle
This company currently scores **52/100** on automated WCAG 2.1 AA accessibility testing with **12 identified WCAG violations**. 
Addressing these compliance barriers will improve digital reach, satisfy regulatory requirements, and protect against accessibility lawsuits.

---

## 💻 Developer & Engineering Technical Breakdown

- **Lighthouse A11y Metric:** `52/100`
- **Axe-core Rule Engine Status:** Evaluated across Homepage DOM tree.
- **Impact Breakdown:** Critical: `0` | Serious: `11` | Moderate: `1`

### Technical Violation Breakdown
- 🖼️ **Missing Alt Text:** 0 violations
- 🎨 **Color Contrast Failures:** 2 violations
- 📝 **Form & Structural Labels:** 0 violations
- ⌨️ **Keyboard Navigation & Focus:** 9 violations

### Priority Code Remediation Steps for Developers
- **Color Contrast Ratios (2 issues):** Ensure text contrast against background meets minimum 4.5:1 ratio for normal text and 3:1 for large text.
- **Keyboard & Focus Management (9 issues):** Ensure all interactive buttons/links are focusable via `Tab` key and visual focus outlines are visible.

---

## 1. Company & Website Verification
- **Company Name:** 5Paisa Capital Limited
- **Resolved URL:** [https://paisabazaar.com](https://paisabazaar.com)
- **Resolution Source:** `readymade-fallback` (HIGH Confidence)
- **Status:** ✓ Verified & Confirmed
- **Assigned Auditor:** Unassigned
- **Verified By:** Orchavate Automated Tool v1.1


---

## 2. Email & Contact Discovery
- **Primary Contact Email:** `care@paisabazaar.com` (`Verified`)
- **Overall Discovery Status:** `Verified`

### Discovered Accessibility / Compliance Endpoints
- **General Contact Email:** `care@paisabazaar.com` | **Status:** `Verified` | **Source Page:** https://paisabazaar.com

---

## 3. Detailed WCAG Violation Log (DOM Selectors)
1. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.expert-dropdown-nav.desktop:nth-child(1) > .expert-dropdown > span`
2. **`[color_contrast] color-contrast`** (SERIOUS)
   - **Help:** Elements must meet minimum color contrast ratio thresholds
   - **Selector:** `.expert-dropdown-nav.desktop:nth-child(3) > .expert-dropdown > span`
3. **`[other] meta-viewport`** (MODERATE)
   - **Help:** Zooming and scaling must not be disabled
   - **Selector:** `meta[name="viewport"]`
4. **`[keyboard_navigation] scrollable-region-focusable`** (SERIOUS)
   - **Help:** Scrollable region must have keyboard access
   - **Selector:** `.embla__slide_testimonials:nth-child(1) > .testimonial-box > .testimonial-text`
5. **`[keyboard_navigation] scrollable-region-focusable`** (SERIOUS)
   - **Help:** Scrollable region must have keyboard access
   - **Selector:** `.embla__slide_testimonials:nth-child(2) > .testimonial-box > .testimonial-text`
6. **`[keyboard_navigation] scrollable-region-focusable`** (SERIOUS)
   - **Help:** Scrollable region must have keyboard access
   - **Selector:** `.embla__slide_testimonials:nth-child(3) > .testimonial-box > .testimonial-text`
7. **`[keyboard_navigation] scrollable-region-focusable`** (SERIOUS)
   - **Help:** Scrollable region must have keyboard access
   - **Selector:** `.embla__slide_testimonials:nth-child(4) > .testimonial-box > .testimonial-text`
8. **`[keyboard_navigation] scrollable-region-focusable`** (SERIOUS)
   - **Help:** Scrollable region must have keyboard access
   - **Selector:** `.embla__slide_testimonials:nth-child(5) > .testimonial-box > .testimonial-text`
9. **`[keyboard_navigation] scrollable-region-focusable`** (SERIOUS)
   - **Help:** Scrollable region must have keyboard access
   - **Selector:** `.embla__slide_testimonials:nth-child(6) > .testimonial-box > .testimonial-text`
10. **`[keyboard_navigation] scrollable-region-focusable`** (SERIOUS)
   - **Help:** Scrollable region must have keyboard access
   - **Selector:** `.embla__slide_testimonials:nth-child(7) > .testimonial-box > .testimonial-text`

---

## 4. Evidence & Tool Screenshots
- 🎨 **WAVE WebAIM Overlay:** `screenshots/5Paisa_Capital_Limited_Homepage_WAVE_Overlay.png`
- 🛡️ **Axe DevTools Panel:** `screenshots/5Paisa_Capital_Limited_Homepage_Axe_DevTools.png`
- ⚡ **Lighthouse Summary:** `screenshots/5Paisa_Capital_Limited_Homepage_Lighthouse_Summary.png`

---
*Report generated automatically by Orchavate GTM Accessibility Workflow v1.1*
