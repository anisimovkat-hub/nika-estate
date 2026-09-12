# Nika Estate — landing pages

Static Russian-language landing pages in the Nika Estate brand style.

- `/` — City Walk + Central Park
- `/dubai/` — UAE property selection with a six-step quiz
- `/uae/` — Dubai vs Abu Dhabi
- `/saudi-arabia/` — Riyadh and OSUS Eye
- `/invest-meeting/` — online investment meeting
- `/about/` — Nika Estate services, current project examples, locations and 2026 market yield benchmarks

The visual system uses local Inter and Cormorant Garamond fonts, the real Nika Estate logo, editorial whitespace, black typography and the brand gold accent. Lead forms open the official Nika Estate WhatsApp with a prefilled message.

## Publication

The public site is deployed to Cloudflare Pages at:

- https://nika-estate.pages.dev/
- https://nika-estate.pages.dev/dubai/
- https://nika-estate.pages.dev/uae/
- https://nika-estate.pages.dev/saudi-arabia/
- https://nika-estate.pages.dev/invest-meeting/
- https://nika-estate.pages.dev/about/

GitHub remains the source of truth. Cloudflare Pages receives a clean static build from the `main` branch, without repository metadata or internal project documents.

## Lead capture

Every landing includes `assets/scripts/lead-capture.js` once before `</body>`. The script sends valid form submissions to the shared Nika Estate Google Sheets endpoint and records the landing name, offer, form answers, contacts, URL, referrer and UTM parameters. A form-specific `data-offer-name` overrides the page default when a landing contains multiple offers.
