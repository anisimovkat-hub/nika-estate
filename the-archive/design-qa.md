# Design QA — The Archive by Imtiaz

## Visual truth and test setup

- Main source reference: `https://aeon.estate-dubai.ae/`.
- Project data source: `/Users/katerinaanisimova/Documents/Dubai & Abu Dhabi — недвижимость/01_Объекты/Реестр объектов — Dubai & Abu Dhabi.xlsx`.
- Project brochure: `/Users/katerinaanisimova/Documents/Dubai & Abu Dhabi — недвижимость/01_Объекты/The Archive by Imtiaz/Брошюра/The_Archive_by_Imtiaz_брошюра.pdf`.
- High-resolution imagery source: official Imtiaz project materials and gallery.
- Implementation URL: `http://127.0.0.1:4186/the-archive/`.
- Browser QA viewports: desktop `1470 × 802`; mobile `625 × 903`.
- Client source captures compared in the same review pass with the implementation:
  - payment plan desktop: `/Users/katerinaanisimova/Desktop/Снимок экрана — 2026-09-12 в 18.38.16.png` (`2940 × 1912`);
  - calculator mobile: `/var/folders/q_/sn0glqyj0zb8fnvz7dxlsm280000gn/T/TemporaryItems/NSIRD_screencaptureui_wxJQuB/Снимок экрана — 2026-09-12 в 18.41.20.png` (`892 × 1288`);
  - developer facts mobile: `/var/folders/q_/sn0glqyj0zb8fnvz7dxlsm280000gn/T/TemporaryItems/NSIRD_screencaptureui_bqu5uX/Снимок экрана — 2026-09-12 в 18.43.11.png` (`896 × 906`);
  - location distances mobile: `/var/folders/q_/sn0glqyj0zb8fnvz7dxlsm280000gn/T/TemporaryItems/NSIRD_screencaptureui_Ew9Qdq/Снимок экрана — 2026-09-12 в 18.43.46.png` (`846 × 1384`).
- Implementation captures were inspected directly in Chrome and the in-app browser. Those browser surfaces do not expose filesystem paths for their captures.

## Changes verified against the source captures

- Replaced the oversized “Два плана оплаты…” composition with a compact `План платежей` heading and two balanced payment cards. The complete desktop section now fits within one `802px`-high viewport.
- Replaced the generic mid-page selection CTA with a project-specific investment-plan consultation offer.
- Rebuilt the rental-only dropdown calculator as segmented apartment/payment-plan controls, three sliders and simultaneous rental and resale scenarios.
- Reversed the location hierarchy: the place is now the card heading and travel time is supporting information. Added plain-language DLRC context and who the district suits.
- Converted mobile facts, amenities, developer proof and location cards to two-column grids where appropriate.
- Increased payment-card body and amount readability while reducing vertical padding.

## Iterations completed during QA

- The first calculator implementation exceeded one desktop screen because the heading copy was itself a grid item. Wrapped it in a dedicated heading group; final calculator section height is about `759px` at the desktop QA viewport.
- The sticky mobile CTA initially covered calculator controls. It now hides while the calculator intersects the viewport and returns after the interactive section.
- Checked the payment selector and calculator controls after the layout changes. A tested scenario with `1 спальня`, plan `60/40`, rental yield `7.2%`, price growth `8.5%` and term `5 лет` recalculated every dependent amount.

## Final checks

- Desktop document width equals viewport width: `1470px`; mobile document width equals viewport width: `625px`. No horizontal overflow.
- Chrome and in-app browser console checks returned no warnings or errors.
- Payment plans, apartment-type buttons, plan buttons and sliders remain keyboard- and pointer-operable.
- The financial module is explicitly presented as a scenario, not a guaranteed return. The disclaimer names omitted service, administration, vacancy, management, transaction and assignment conditions.
- Lead capture remains connected to the shared Nika Estate Google Sheets endpoint. No test lead was submitted during QA.
- External map failure remains handled by the local location visual and a direct Google Maps link.

final result: passed
