# In Depth Audio — Project Continuation Log

> **RULE: This file is APPEND-ONLY. Never delete content — only add new entries as the project progresses.**

---

## Project Overview

- **Site**: In Depth Audio (indepthaudio.com) — Dave Barkby's custom home theater & audiophile speaker business
- **Stack**: Astro 5.17.1, Tailwind CSS 4.2 (Vite plugin), TypeScript (strict)
- **Deployment**: Cloudflare Pages, auto-deploys on push to `main`
- **Repo**: `ConnectorOfKnowledge/indepthaudio` (GitHub)
- **Workflow**: Code changes in Cowork VM → commit → user pushes from Windows PC → Cloudflare auto-builds

---

## Design System

- **Background**: `#080808` (near-black)
- **Gold accent**: `#c9a64a`
- **Fonts**:
  - Display: Cormorant Garamond (headings, hero text)
  - Body: Raleway (paragraphs, descriptions)
  - Labels: Montserrat (small caps, UI elements)
- **Aesthetic**: Dark luxury — think high-end audio showroom

---

## Commit History

| Hash | Description |
|------|-------------|
| `8256be6` | Initial commit |
| `1c15b37` | Initial Astro setup |
| `9c16fb3` | Merge remote |
| `644fac9` | Build luxury homepage for In Depth Audio |
| `1782aaa` | Merge luxury homepage from worktree |
| `9aa1e55` | Add product pages with Legacy Audio speaker catalog |
| `2e36ce0` | Add interactive finish swatches with image swap on product pages |
| `498d9a6` | Replace image swatches with text-based finish buttons |

---

## Session Log

### Session 1 — Homepage & Product Pages (Initial Build)

**What was built:**
- Luxury homepage (`src/pages/index.astro`) with hero section, product showcase, about section
- Full product data system (`src/data/products.ts`) with Legacy Audio speaker catalog
- Dynamic product detail pages (`src/pages/products/[slug].astro`)
- Product cards with gold-accent hover effects
- Responsive layout with dark luxury aesthetic throughout

**Product catalog includes:**
- Aeris (flagship floor-standing)
- Signature SE (floor-standing)
- Focus SE (floor-standing)
- Marquis XD (floor-standing)
- Calibre XD (bookshelf)
- Plus center channels, subwoofers, surround speakers

**Finish system — 13 finishes across 3 tiers:**
- **Standard (5)**: Black Oak, Medium Oak, Walnut, Natural Cherry, White Satin
- **Premium (4)**: Black Pearl, Rosewood, Curly Maple, Natural Sapele Pommele
- **Exotic (4)**: Birdseye Maple, Olive Ash Burl, Cabernet Sapele Pommele, Exotic Copper

Each finish has a color dot defined in CSS. Some finishes have dedicated product photos that swap when selected.

### Session 2 — Finish Swatches (Attempted → Replaced)

**The attempt:** Tried to create small image swatches by algorithmically cropping wood grain from speaker product photos using Python (PIL/Pillow + NumPy). Multiple versions (v1–v4) of cropping scripts were written with brightness analysis, edge detection, etc.

**The problem:** Speaker photos show the whole speaker — drivers, grilles, hardware — making it extremely difficult to reliably crop just the wood grain. Different speakers have different geometries, angles, and lighting.

**Image analysis findings (saved for future reference if hand-cropping is ever revisited):**
- Mahogany Sig SE: wood at x=195-235, y=100-300 (left of drivers)
- Curly maple Sig SE: front panel at x=120-155, y=100-350
- Sapele pommele Sig SE: left speaker side panel at x=40-160, y=80-380
- Cabernet Aeris: left cheek at x=155-200, y=300-550
- Exotic copper Aeris: right speaker at x=250-310, y=80-250
- Black oak Aeris: left speaker left cheek at x=35-90, y=150-400
- Medium oak Sig SE: left-of-drivers at x=155-195, y=120-380 (confirmed working)

**The solution:** Replaced image swatches entirely with text-based finish buttons — pill-shaped buttons with a colored dot + finish name + camera icon (for finishes that have dedicated photos). Clean, elegant, and no cropping issues.

**Key file changes:**
- `src/pages/products/[slug].astro` — Major rewrite of finish selector section
- Removed `swatchPath` import, replaced swatch HTML with `.finish-btn` buttons
- 13 CSS color dot classes (e.g., `.finish-dot-medium-oak { background: #b08040; }`)
- Image swap via `setMainImage()` still works when clicking finishes with photos

**Commit:** `498d9a6` — "Replace image swatches with text-based finish buttons"

### Session 2 (continued) — Feature Requests from WordPress Site Review

User reviewed Dave's original WordPress site and identified features to bring forward (but improved):

**1. Image Hover Zoom (Related Products Cards)**
- WordPress shows smooth scale-up on hover for product card images
- User likes the transition effect but NOT the "related products" concept (items weren't truly related)
- Want to apply hover zoom only where it makes sense
- Status: **NOT YET IMPLEMENTED**

**2. Product Image Lightbox / Expand**
- WordPress grays out the main product image on hover and shows a double-arrow icon, then expands to center screen on click
- User DOES NOT like the gray-out hover treatment
- User DOES want the click-to-expand functionality
- Wants "something similar — but better!"
- Status: **NOT YET IMPLEMENTED**

**3. Image Hover Flip (Front → Back View)**
- WordPress site has a hover effect on some product cards (e.g., Aeris XD) where the image flips from front view to rear view showing the binding post / terminal plate
- Cool way to show both the front aesthetic and the rear connections
- Status: **NOT YET IMPLEMENTED**

---

## Pending / Future Work

- [ ] User needs to `git push origin main` to deploy text-based finish buttons (commit `498d9a6`)
- [ ] Image hover zoom — apply to appropriate image elements (product cards, gallery)
- [ ] Product image lightbox — click main product image to expand overlay (NO gray-out)
- [ ] Image hover flip — front-to-back view swap on hover (needs rear-view photos)
- [ ] Consider whether "related products" section is worth adding (only if truly relatable)
- [ ] Possible future: hand-cropped wood grain swatch images (coordinates documented above)

---

## Known Limitations

- **Cowork VM cannot build**: `@rollup/rollup-linux-x64-gnu` missing, npm install returns 403. Site builds fine on Cloudflare Pages — this is a VM-only issue.
- **Git push**: Must be done by the user from their Windows PC (Cowork VM doesn't have push credentials).

---

## Key File Map

| File | Purpose |
|------|---------|
| `src/pages/index.astro` | Homepage — hero, product showcase, about |
| `src/pages/products/[slug].astro` | Product detail page template (dynamic) |
| `src/data/products.ts` | Product catalog data, finish definitions, helper functions |
| `src/layouts/Layout.astro` | Base HTML layout with fonts, meta |
| `public/images/products/` | Product photos organized by speaker slug |
| `public/images/swatches/` | Generated swatch JPGs (currently unused — text buttons replaced them) |
| `CONTINUATION.md` | This file — append-only project progress log |
