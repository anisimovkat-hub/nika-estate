# Design QA — инвестиционная встреча Nika Estate

## Артефакты и нормализация

- Source visual truth, desktop: `/var/folders/q_/sn0glqyj0zb8fnvz7dxlsm280000gn/T/TemporaryItems/NSIRD_screencaptureui_63w75O/Снимок экрана — 2026-09-11 в 16.48.48.png`.
- Source visual truth, mobile: `/var/folders/q_/sn0glqyj0zb8fnvz7dxlsm280000gn/T/TemporaryItems/NSIRD_screencaptureui_iZGuEK/Снимок экрана — 2026-09-11 в 16.49.37.png`.
- Implementation URL: `http://localhost:4174/invest-meeting/`.
- Implementation screenshots: `/private/tmp/prodigital-work/sites/nika-invest-qa/desktop-hero.jpg`, `/private/tmp/prodigital-work/sites/nika-invest-qa/desktop-form.jpg`, `/private/tmp/prodigital-work/sites/nika-invest-qa/mobile-hero-final.jpg`, `/private/tmp/prodigital-work/sites/nika-invest-qa/mobile-plan-final.jpg`, `/private/tmp/prodigital-work/sites/nika-invest-qa/mobile-form-telegram.jpg`.
- Same-input comparison screenshots: `/private/tmp/prodigital-work/sites/nika-invest-qa/desktop-comparison.jpg`, `/private/tmp/prodigital-work/sites/nika-invest-qa/mobile-comparison-final.jpg`.
- Desktop source pixels: `2940 × 1912` at Retina density `2x`. Browser chrome was excluded with a 309 px source crop; the compared page region was approximately `2940 × 1601` pixels, or `1470 × 800.5` CSS px.
- Desktop implementation: `1280 × 720` pixels, viewport `1280 × 720` CSS px, density `1x`. In the side-by-side comparison the live desktop layout used a `960 × 523` CSS iframe and both sides were scaled to `600 × 327` for one comparison frame.
- Mobile source pixels: `794 × 1334` at `2x`, normalized to `397 × 667` CSS px.
- Mobile implementation: `397 × 667` pixels, viewport `397 × 667` CSS px, density `1x`; exact normalized viewport match. Additional responsive checks used `390 × 844`.
- State: public page, top-of-page hero, closed mobile menu for visual comparison; separate focused checks for expanded menu, meeting plan, project choice and Telegram form state.

## Full-view comparison evidence

- Desktop comparison: the implementation preserves the reference logic — full-width darkened property image, one dominant offer, short proof row and primary CTA — while using the Nika Estate header, palette and real project imagery. The Nika hero is deliberately shorter than the reference and contains fewer unsupported promotional claims.
- Mobile comparison: offer, lead, CTA and all three proof points fit into the first `397 × 667` screen. The header remains branded and the text hierarchy stays readable over the image.
- Intentional differences: Percent&Co. yellow/blue branding, `+40%` promise and ruble price claims were not copied. They were replaced with Nika Estate gold/black/ivory tokens and source-backed calculation language.

## Focused region evidence

- Meeting plan: `/private/tmp/prodigital-work/sites/nika-invest-qa/mobile-plan-final.jpg` confirms a single-column numbered list, compact line height and no fixed CTA covering the content.
- Form: `/private/tmp/prodigital-work/sites/nika-invest-qa/mobile-form-telegram.jpg` confirms four messenger choices, the conditional Telegram username field, one primary submit action and separate WhatsApp/call actions below.
- Desktop form: `/private/tmp/prodigital-work/sites/nika-invest-qa/desktop-form.jpg` confirms a balanced two-column layout and contact actions below the form.

## Findings

- No actionable P0/P1/P2 findings remain.
- Typography: passed. Display and body copy use the existing Nika sans stack, with reduced line height, tighter tracking and no oversized serif display treatment.
- Spacing/layout: passed. Hero height and section density are compact on desktop; mobile content is single-column, tap targets are at least 54 px, and fixed actions do not cover sections with their own CTA.
- Colors/tokens: passed. Brand gold, black, ivory and neutral borders are applied consistently with sufficient contrast.
- Image quality: passed. The hero, full-width lifestyle image, project cards and team block use real repository assets with purposeful `object-fit` crops; no placeholder, emoji, CSS-drawn or fake SVG imagery is used.
- Copy/content: passed. The page follows the investment-meeting sequence, uses direct Russian buyer language, contains four concrete project examples and qualifies yield numbers as benchmarks rather than guarantees.
- Responsiveness/accessibility: passed at `1280 × 720`, `397 × 667` and `390 × 844`. Semantic headings, labels, alt text, skip link and large mobile controls are present.

## Comparison history

1. Initial comparison found a P2 mobile density issue: the hero used a `635px` minimum height, proof points stacked vertically, and the fixed CTA could cover the bottom of the first screen. Fixes: desktop hero `610px → 560px`; mobile hero `635px → 548px`; mobile heading `37px → 34px`; proof points changed to a compact three-column row; the fixed CTA now starts hidden and remains hidden while the hero is visible. Post-fix evidence: `mobile-comparison-final.jpg` and `mobile-hero-final.jpg`.
2. Focused mobile review found a P2 overlap: the fixed CTA covered meeting-plan and project content while equivalent inline CTAs were already present. Fix: sections with their own conversion action now opt into `data-mobile-cta-cover`, and the shared observer respects that state. Post-fix evidence: `mobile-plan-final.jpg`; the numbered list is unobstructed.
3. Final browser pass found no console errors. Mobile menu expands/collapses, project links transfer the selected project into the form, phone fields initialize with `+`, Telegram reveals a required username field, and direct WhatsApp/call links remain separate from form submission.

## Follow-up polish

- P3: once Nika Estate provides a final analytics/form endpoint, replace the current WhatsApp handoff with CRM submission while keeping the visible form flow unchanged.

## Implementation checklist

- [x] Compact desktop and mobile hero.
- [x] Sans-serif hierarchy and reduced heading line gaps.
- [x] Reference block logic adapted to Nika Estate.
- [x] Four project cards with purpose, yield benchmark and first-payment context.
- [x] CTA coverage throughout the page without content overlap.
- [x] Conditional Telegram username and separate direct-contact buttons.
- [x] Desktop/mobile visual comparison and interaction checks.

final result: passed
