# Design QA — The Archive by Imtiaz

## Visual truth and test setup

- Source reference: `https://aeon.estate-dubai.ae/`.
- Project source: `/Users/katerinaanisimova/Documents/Dubai & Abu Dhabi — недвижимость/01_Объекты/The Archive by Imtiaz/Брошюра/The_Archive_by_Imtiaz_брошюра.pdf`.
- High-resolution imagery source: official Imtiaz project gallery, `https://imtiaz.ae/property/the-archive-by-imtiaz`.
- Implementation URL: `http://127.0.0.1:4186/the-archive/`.
- Comparison viewports: desktop `1440 × 900` and mobile `390 × 844`.
- Implementation screenshots were reviewed in the in-app browser; that browser surface does not expose a filesystem path for captures.

## Reference match

- Kept the reference’s warm off-white canvas, slim header, editorial display type, champagne CTA, arched project photography and dark data panels.
- Preserved its conversion sequence: hero, project idea, amenities, available apartment formats, payment plan, investment figures, gallery, developer, location and final enquiry.
- Adapted the copy, images, contacts and forms to Nika Estate and The Archive instead of reproducing the competitor brand.

## QA findings

- No actionable P0/P1/P2 findings remain.
- Desktop: hero, two-column sections, richer layout cards, side-by-side payment plans, calculator, compact gallery and form align cleanly with no clipped text.
- Mobile: verified at `390px`; document width equals viewport width, headings stay readable, cards and both payment plans stack in the intended order, and tap targets remain full-width.
- Interactions: amenities expansion, apartment filters, two-photo apartment sliders, detail modal, payment amount selector, rental calculator, main gallery, mobile menu and conditional Telegram username field all work.
- Forms: the Nika Estate contact flow and local lead-capture module are present. No test lead was sent during visual QA.
- Map: external embedded maps were blocked in the target browser. The page now always renders a local map image with the published coordinates `25.09826, 55.37543` and provides a direct Google Maps button for the same point.
- Financial copy: prices, areas, handover and payment plans come from the supplied brochure. The 6–7% calculator is explicitly labelled as a scenario and includes an expenses disclaimer.
- Floor plans: the supplied brochure and official Imtiaz gallery do not publish unit-specific floor-plan files. The page does not reuse a misleading generic plan; the detail modal explains that the broker will send the official plan for the selected available unit.

final result: passed
