# Chucko Golf — website build brief

Build the marketing site for **Chucko Golf**, a Canadian golf glove brand selling one product: a premium microfiber golf glove.

The approved visual reference is `Chucko Golf.dc.html` in this project — a design canvas with three page mockups (Home, Shop, About Us) plus earlier hero explorations. **Turn 3 (`3a` Home, `3b` Shop, `3c` About us) is the approved direction.** Read that file for exact type sizes, spacing, and section order before writing code.

## Assets

| File | Use |
| --- | --- |
| `logo-mark.png` | Primary mark (navy poodle + pin flag, transparent background). Nav, footer, watermarks. |
| `uploads/logo.jpg` | Original logo scan on paper. Source only — don't ship. |
| `uploads/materials-1787451362610-pxcr.jpg` | Product shot, Golf Glove V1. White glove on a **white background** — set on a light plate with `mix-blend-mode: multiply`, or replace with a transparent cutout. |
| `uploads/pasted-1787452362211-0.png` | Photo of Charles, the cockapoo. About Us page. |

Missing assets to request from the client: transparent product PNG, lifestyle/on-course photography, a photo of Charles outdoors, and shots for any secondary products.

## Brand

- **Voice:** dry and confident. Short declaratives. No exclamation marks, no hype, no emoji except the 🇨🇦 in the top banner.
- **Positioning:** performance tech. Microfiber beats leather in real Canadian conditions.
- **Product:** Golf Glove V1 — $25, or 3 for $66. Five sizes (S–XXL), left and right hand.
- Always "microfiber", never leather. Never invent specs (thicknesses, perforation counts, rounds tested).
- The dog is **Charles**, a cockapoo. The brand is **Chucko Golf**.

## Design tokens

```
Colors
  ink / navy        #171f3d      primary text, dark bands, buttons
  navy deep         #111730      alternate dark field
  paper             #f4f2ed      page background
  paper alt         #efece6      alternating section background
  plate             #e6e3dc      image plates
  canada red        #c8102e      top banner only
  ink @ .75         rgba(23,31,61,.75)   body copy
  ink @ .55         rgba(23,31,61,.55)   mono labels
  hairline          rgba(23,31,61,.14)   section dividers, 1px

Type   Archivo (400/500/600/700/800) + IBM Plex Mono (400/500)  — Google Fonts
  display h1     800, 64–92px, line-height .92–1.02, letter-spacing -.045em
  section h2     700, 40–46px, line-height 1.05, letter-spacing -.03em
  body           400, 16–17.5px, line-height 1.6, text-wrap: pretty
  eyebrow/spec   IBM Plex Mono 500, 11–11.5px, uppercase, letter-spacing .12–.14em
  button/nav     Archivo 600, 12.5–13px, uppercase, letter-spacing .08em

Layout
  page max-width 1120px, gutters 40px
  section padding 56–80px vertical
  section boundaries are 1px hairlines, not shadows — no rounded corners anywhere
  buttons: square, no radius; primary = navy fill on paper, inverted on dark bands
```

Rhythm: paper → paper-alt → paper → navy band → paper → navy footer. Never two dark bands adjacent. Mono eyebrow above every section heading.

## Pages

**Global chrome**
- Top banner: red `#c8102e`, centered, mono uppercase, "🇨🇦 Proudly Canadian Owned and operated".
- Nav: mark + wordmark left; Home / Shop / Microfiber / Fit / About us center (current page underlined); price + basket icon with count badge right.
- Footer: navy, four columns — brand block ("Canadian-founded. One glove, done properly."), Shop, Company, Help.

**Home (`3a`)** — hero (headline left, product on a ruled plate right), three-up benefits (Breathability / Wet grip / Fit), "Why not leather" two-column with the microfiber paragraph and a 2×2 conditions table, "Find your size" 5-column table (S 7.0–7.5in, M 7.5–8.0, L 8.0–8.75, XL 8.75–9.5, XXL 9.5+), navy shop band, About teaser with the logo watermark, footer.

**Shop (`3b`)** — gallery left with thumbnails, buy column right: eyebrow, title, price + 3-for-$66, description, hand toggle (Left/Right), size row (XXL shown out of stock), quantity stepper, add to bag, mono reassurance list. Below: "Also in the shop" three-up. The ball marker and towel are placeholders — confirm before shipping.

**About Us (`3c`)** — hero headline "Meet Charles — our resident cockapoo, and the reason this brand exists.", photo of Charles in the left column with mono caption, client copy in the right column (**verbatim, do not rewrite**), closing thank-you line as a pull quote on paper-alt, three-up facts row (Material / Founded / Range), navy CTA band.

## Build notes

- Responsive: single column under 900px; nav collapses to mark + basket + menu; hero headline scales to ~44px; keep 44px minimum hit targets.
- The mockups are desktop-only. Mobile layouts have not been designed — ask before inventing them.
- Accessibility: navy on paper passes AA. White on `#c8102e` passes AA at the banner's size. Keep real `alt` text on the mark, product, and Charles.
- Commerce is not scoped. Wire the basket and checkout to whatever platform the client picks; the buy column is a static mockup.
- Don't add sections that aren't in the mockups (reviews, blog, Instagram grid) without asking.
