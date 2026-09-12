# Design QA — Real Estate landing

Date: 2026-09-12

## Compared references

- Source mobile hero: `/var/folders/q_/sn0glqyj0zb8fnvz7dxlsm280000gn/T/TemporaryItems/NSIRD_screencaptureui_KuQmYR/Снимок экрана — 2026-09-12 в 18.46.02.png`
- Source mobile transition block: `/var/folders/q_/sn0glqyj0zb8fnvz7dxlsm280000gn/T/TemporaryItems/NSIRD_screencaptureui_4qKuLw/Снимок экрана — 2026-09-12 в 18.47.12.png`
- Updated implementation: `http://localhost:4186/real-estate/`
- Desktop review: Chrome, 1470 × 802 screenshot surface.
- Responsive review: Codex in-app browser, 625 × 903 screenshot surface, mobile media query active.

## Comparison findings

- Hero hierarchy is now shorter and clearer: one exact offer, one supporting sentence and one primary action.
- The secondary “Смотреть объекты” link and the first-payment overlay were removed.
- The first image is clean and uninterrupted; the metrics are centred between separators.
- The former numbered trust block is replaced by a four-step quiz with automatic transitions.
- The service explanation uses four two-column cards on mobile instead of eight numbered cards.
- Project cards use one image each and include type, area, location, price, first payment, rental scenario and buyer fit.
- OSUS Eye uses the single architectural image from the former location section.
- The locations and repeated process sections were removed to avoid duplicate meaning.
- The consultation band now separates the offer from three concrete outcomes with black/white contrast.
- The Nika Estate block and FAQ use direct, human language.
- WhatsApp and phone actions are opaque gold buttons.

## Functional checks

- Quiz automatically advances after each selected answer.
- Budget ranges start at USD 35,000.
- Telegram selection reveals a required username field.
- The shorter quiz omits absent optional fields from the WhatsApp message.
- Both forms retain the shared Google Apps Script lead-capture integration.
- Anchor offsets account for the sticky header.
- JavaScript syntax and whitespace checks pass.

## Result

final result: passed
