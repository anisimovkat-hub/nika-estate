# Nika Estate — landing pages

Static Russian-language landing pages in the Nika Estate brand style.

- `/` — City Walk + Central Park
- `/dubai/` — UAE property selection with a six-step quiz
- `/uae/` — Dubai vs Abu Dhabi
- `/saudi-arabia/` — Riyadh and OSUS Eye
- `/invest-meeting/` — online investment meeting
- `/real-estate/` — broad UAE property selection landing
- `/the-archive/` — The Archive by Imtiaz project landing

The visual system uses local Inter and Cormorant Garamond fonts, the real Nika Estate logo, editorial whitespace, black typography and the brand gold accent. Lead forms open the official Nika Estate WhatsApp with a prefilled message.

## Publication

The public site is deployed to GitHub Pages at:

- https://anisimovkat-hub.github.io/nika-estate/
- https://anisimovkat-hub.github.io/nika-estate/dubai/
- https://anisimovkat-hub.github.io/nika-estate/uae/
- https://anisimovkat-hub.github.io/nika-estate/saudi-arabia/
- https://anisimovkat-hub.github.io/nika-estate/invest-meeting/
- https://anisimovkat-hub.github.io/nika-estate/real-estate/
- https://anisimovkat-hub.github.io/nika-estate/the-archive/

GitHub remains the source of truth and GitHub Pages publishes directly from the `main` branch. The older Cloudflare Pages deployment is retained only as a fallback because it may be unavailable to some visitors in Russia.

## Lead capture

Every landing includes `assets/scripts/lead-capture.js` once before `</body>`. The script sends valid form submissions to the shared Nika Estate Google Sheets endpoint and records the landing name, offer, form answers, contacts, URL, referrer and UTM parameters. A form-specific `data-offer-name` overrides the page default when a landing contains multiple offers.
