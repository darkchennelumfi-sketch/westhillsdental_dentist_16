# West Hills Dental — Rebrand Inventory

## Source material

- `westhillsdental_dentist_16_old/old_site_structure.html` — captured "Meet our Team" page, including global navigation and footer.
- `westhillsdental_dentist_16_old/old_site_design.png` — visual reference for the previous site.
- Team portraits were cropped to a consistent 2:3 ratio and exported as 800 × 1200 WebP files in `public/images/team/`.

## Preserved business information

| Item | Value |
| --- | --- |
| Practice | West Hills Dental |
| Dentist | Dr. Stephanie Ness |
| Address | 2615 Elk Drive, Suite 2, Minot, ND 58701 |
| Phone | (701) 837-1050 |
| Fax | 701-837-6350 |
| Email | westhillsdental@srt.com |
| Hours | Monday–Thursday, 7:30 AM–3:30 PM; Friday–Sunday, closed |
| Facebook | https://www.facebook.com/westhillsdentalnd |
| Established in Minot | 2013 (referenced in Brenda's biography) |

## Team mapping

All seven team members and their biographies were carried forward. Biographies were lightly edited for punctuation, paragraphing, and readability; names, roles, employers, schools, family details, and dates are unchanged.

| Team member | Role |
| --- | --- |
| Brenda | Front Office |
| Glenda | Front Office |
| Emily | Registered Dental Hygienist |
| Mariah | Registered Dental Hygienist |
| Melinda | Registered Dental Hygienist |
| Lindsay | Registered Dental Assistant |
| McKenzie | Dental Assistant |

## Navigation mapping

| Old path | New path | Notes |
| --- | --- | --- |
| `/` | `/` | Home |
| `/meet-our-doctor/` | `/meet-our-doctor` | Doctor profile |
| `/meet-our-team/` | `/meet-our-team` | Team directory with filters and bio dialogs |
| `/office_tour/` | `/office-tour` | Permanent redirect retained for the old URL |
| `/services/preventative-dentistry/` | `/services/preventative-dentistry` | Service detail |
| `/services/restorative-dentistry/` | `/services/restorative-dentistry` | Service detail |
| `/services/cosmetic-dentistry/` | `/services/cosmetic-dentistry` | Service detail |
| `/services/childrens-dentistry/` | `/services/childrens-dentistry` | Service detail |
| `/services/dental-implants/` | `/services/dental-implants` | Service detail |
| `/new-patients/` | `/new-patients` | New-patient guide |
| `/faqs/` | `/faqs` | Searchable, filterable FAQ explorer |
| `/make-payment/` | `/make-payment` | Payment-link request form |
| `/contact-us/` | `/contact-us` | Contact details, map panel, appointment form |
| `/privacy-policy/` | `/privacy-policy` | Privacy policy |

### Intentional additions

- `/services` — overview page linking all six service areas.
- `/services/emergency-dentistry` — added as a sixth service area to give urgent calls a clear next step.
- `/insurance-and-financing` — plain-language guidance on insurance, estimates, and payment options.

Every page is reachable from the header, footer, service directory, or contextual links. The sitemap and robots file enumerate the new route set.

## Newly written content

The old snapshot contained the team page and global navigation/footer. The following pages and sections were written for the rebrand: service overviews and detail copy, new-patient guidance, FAQs, insurance and financing guidance, payment-link request copy, appointment request copy, privacy policy, office-tour descriptions, and error-page copy.

Insurance and payment language intentionally avoids unverified claims about specific carriers, networks, or financing partners. Patients are asked to confirm benefits with the front office. The office location panel is an original illustration, not a live map embed; the address links to Google Maps.

## Design system

- **Palette:** evergreen `#123b26` and ink `#10271c`, cream `#f7f2e8`, paper `#fcf9f2`, lime `#d9e8b8`, sand `#eadfcd`, sage, rose, and a contrast-safe deep copper `#944a2e`.
- **Type:** Fraunces for display, Instrument Sans for body, IBM Plex Mono for labels and small metadata.
- **Motifs:** two-arch logo mark, arched image frames, editorial numbering, botanical linework, grain texture, and a recurring "care plan" card language.
- **Motion:** reveal-on-scroll, staggered hero entrance, marquee, count-up statistics, and dialog transitions, all disabled or reduced under `prefers-reduced-motion`.
- **Components:** shadcn/Radix dialog, accordion, checkbox, radio group, and label primitives; React Hook Form + Zod forms; Lucide icons; `next/image` for team portraits.

## Verification

Run from the project root:

```bash
npm run typecheck
npm run lint
npm run build
npm run start -- -p 3100
```

Results recorded on 11 November 2026:

- TypeScript: clean.
- ESLint: clean.
- Production build: 26 static pages generated successfully.
- Playwright route pass: 18 routes × desktop and mobile (36 checks) plus the custom 404 — zero overflow, broken images, missing alt text, missing `<main>`, page errors, or failed internal links.
- Interactions: search palette, mobile navigation, team filters and bio dialog, FAQ search/filter/empty state, three-step appointment request, payment request, and API validation (400 on invalid payloads) all verified.
- axe-core 4.14, WCAG 2.0/2.1 A and AA: **0 violations** across 18 desktop routes, 18 mobile routes, and interactive states (mobile navigation, search dialog, team bio dialog, appointment steps 2–3, expanded FAQ).
