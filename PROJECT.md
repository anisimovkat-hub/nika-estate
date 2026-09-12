# Nika Estate landing pages

- Repository: https://github.com/nika-estate/nika-estate
- Live base URL: https://nika-estate.github.io/nika-estate/
- Deployment: GitHub Pages from `main`; Cloudflare Pages project `nika-estate` retained as backup
- Build: static HTML, CSS and JavaScript; no package installation

## Routes

- `https://nika-estate.github.io/nika-estate/` — City Walk + Central Park
- `https://nika-estate.github.io/nika-estate/dubai/` — UAE property selection with a six-step quiz and project examples
- `https://nika-estate.github.io/nika-estate/uae/` — Dubai and Abu Dhabi comparison
- `https://nika-estate.github.io/nika-estate/saudi-arabia/` — Saudi Arabia / Riyadh / OSUS Eye
- `https://nika-estate.github.io/nika-estate/invest-meeting/` — online investment consultation
- `https://nika-estate.github.io/nika-estate/real-estate/` — conversion landing for property selection in the UAE and Saudi Arabia, with current projects and 2026 market yield benchmarks
- `https://nika-estate.github.io/nika-estate/the-archive/` — The Archive by Imtiaz project landing

## Lead routing

All forms send a lead copy to the shared Google Sheets endpoint and then keep the existing WhatsApp flow. The shared browser module is `assets/scripts/lead-capture.js`; each page passes its landing and default offer names through `data-landing-name` and `data-offer-name`. Pages with more than one form set a separate `data-offer-name` on each form.

The Google Apps Script asset served through `?asset=lead-capture` had invalid JavaScript on 2026-09-11, so the repository uses a corrected local client module pointed at the same healthy POST endpoint. Do not replace it with the hosted asset until that deployment passes a JavaScript syntax check.

### New landing checklist

1. Include `assets/scripts/lead-capture.js` once before `</body>`.
2. Set the shared endpoint, `data-landing-name` and the page-level `data-offer-name` on the script tag.
3. If forms promote different offers, set `data-offer-name` on each form.
4. Keep contact field names compatible: `name`, `phone` or `contact`, `email`, `telegram`, `whatsapp`, `messenger`.
5. Verify that the form is bound once and send one clearly marked test lead before launch.

## Content safeguards

Prices, unit availability, views, handover dates and payment plans are described as subject to confirmation. Rows marked for verification in the client registry are not published as current numeric offers.
