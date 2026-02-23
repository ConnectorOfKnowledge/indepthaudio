/* ─── PRODUCT DATA ──────────────────────────────────────────────────
   In Depth Audio – Legacy Audio Speaker Catalog
   All specs sourced from Legacy Audio & Dave Barkby's catalog.
   ──────────────────────────────────────────────────────────────────── */

export interface FinishOption {
  name: string;
  tier: "standard" | "premium" | "exotic";
  /** Image filename (without path) if we have a photo of this finish */
  image?: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Short blurb for cards */
  cardDescription: string;
  /** Category label shown above title */
  category: string;
  /** Starting MSRP per pair in USD (standard finish) */
  priceFrom: number;
  /** Max MSRP per pair in USD (exotic finish) */
  priceTo: number;
  /** Whether this pair is physically in Dave's AZ showroom */
  instantShip: boolean;
  /** Whether this model is discontinued */
  discontinued: boolean;
  /** Special note (e.g. "Last pair available") */
  badge?: string;
  /** Hero image filename */
  heroImage: string;
  /** Gallery image filenames */
  gallery: string[];
  /** Key specifications */
  specs: SpecRow[];
  /** Available finishes */
  finishes: FinishOption[];
  /** Feature highlights for detail page */
  highlights: string[];
  /** Sort order (lower = first) */
  order: number;
}

/* ─── FINISH DEFINITIONS ────────────────────────────────────────── */

const STANDARD_FINISHES: FinishOption[] = [
  { name: "Black Oak", tier: "standard" },
  { name: "Medium Oak", tier: "standard" },
  { name: "Walnut", tier: "standard" },
  { name: "Natural Cherry", tier: "standard" },
  { name: "White Satin", tier: "standard" },
];

const PREMIUM_FINISHES: FinishOption[] = [
  { name: "Black Pearl", tier: "premium" },
  { name: "Rosewood", tier: "premium" },
  { name: "Curly Maple", tier: "premium" },
  { name: "Natural Sapele Pommele", tier: "premium" },
];

const EXOTIC_FINISHES: FinishOption[] = [
  { name: "Birdseye Maple", tier: "exotic" },
  { name: "Olive Ash Burl", tier: "exotic" },
  { name: "Cabernet Sapele Pommele", tier: "exotic" },
  { name: "Exotic Copper", tier: "exotic" },
];

const ALL_FINISHES = [...STANDARD_FINISHES, ...PREMIUM_FINISHES, ...EXOTIC_FINISHES];

/* ─── PRODUCTS ──────────────────────────────────────────────────── */

export const products: Product[] = [
  /* ── Aeris XD ─────────────────────────────────────────────────── */
  {
    slug: "aeris",
    name: "Aeris XD",
    tagline: "The Pinnacle of Powered Performance",
    description:
      "The Aeris XD represents Legacy Audio's statement piece — a 4.5-way powered tower with 1,000 watts of onboard ICEpower amplification and Wavelaunch DSP processing. From its dual 12\" spun-aluminum woofers to the Air Motion Transformer tweeter array, every element is engineered for effortless, room-filling authority. The Aeris doesn't just play music — it recreates the event.",
    cardDescription:
      "4.5-way powered tower with 1,000W ICEpower amplification, DSP processing, and Air Motion Transformer technology.",
    category: "Flagship Tower",
    priceFrom: 23400,
    priceTo: 26516,
    instantShip: true,
    discontinued: false,
    heroImage: "aeris-hero.jpg",
    gallery: [
      "aeris-rosewood-front.jpg",
      "aeris-rosewood-angle.jpg",
      "aeris-black-pearl.jpg",
      "aeris-black-pearl-full.jpg",
      "aeris-natural-sapele.jpg",
      "aeris-exotic-copper.jpg",
      "aeris-black-oak.jpg",
      "aeris-cabernet-black-pearl.jpg",
      "aeris-back-panel.jpg",
      "aeris-black-overhead.jpg",
      "aeris-crossover.jpg",
      "aeris-grille-comparison.jpg",
      "aeris-amt-tweeter.jpg",
      "aeris-side-rear.jpg",
      "aeris-avatar-setup.jpg",
      "aeris-rmaf.jpg",
      "aeris-rosewood-black-pearl.jpg",
      "aeris-golden-ear-award.jpg",
    ],
    specs: [
      { label: "Type", value: "4.5-Way Powered Tower" },
      { label: "Frequency Response", value: "18 Hz – 30 kHz ±2dB" },
      { label: "Sensitivity", value: "95.4 dB" },
      { label: "Impedance", value: "4 Ohms nominal" },
      { label: "Onboard Amplification", value: "1,000W ICEpower" },
      { label: "Processing", value: "Wavelaunch™ DSP" },
      { label: "Drivers", value: "Dual 12\" woofers, 7\" midrange, AMT tweeter array" },
      { label: "Dimensions", value: '57" H × 14.5" W × 18" D' },
      { label: "Weight", value: "175 lbs each" },
    ],
    finishes: ALL_FINISHES,
    highlights: [
      "1,000 watts of onboard ICEpower Class D amplification per speaker",
      "Wavelaunch™ DSP with room correction and time alignment",
      "Dual 12\" spun-aluminum subwoofer drivers for seismic low-end",
      "Air Motion Transformer (AMT) tweeter array — ultra-low distortion highs",
      "95.4 dB sensitivity — effortless dynamics at any volume",
      "Golden Ear Award winner",
    ],
    order: 1,
  },

  /* ── Focus XD ─────────────────────────────────────────────────── */
  {
    slug: "focus-xd",
    name: "Focus XD",
    tagline: "Powered Precision for the Serious Listener",
    description:
      "The Focus XD distills Legacy's powered speaker philosophy into a more accessible footprint without sacrificing authority. With 750 watts of onboard ICEpower amplification driving its bass section and a 4-way architecture topped by Legacy's renowned ribbon tweeter, the Focus XD delivers the kind of effortless dynamics and crystalline detail that define the Legacy sound. Active bass management means seamless integration in any room.",
    cardDescription:
      "4-way powered tower with 750W ICEpower amplification and dual 12\" woofers — serious performance, refined footprint.",
    category: "Powered Tower",
    priceFrom: 15200,
    priceTo: 17590,
    instantShip: true,
    discontinued: false,
    heroImage: "focus-xd-hero.jpg",
    gallery: [
      "focus-xd-black-pearl.jpg",
      "focus-xd-cabernet.jpg",
      "focus-xd-rosewood.jpg",
      "focus-xd-sapele.jpg",
      "focus-xd-olive-ash-burl.jpg",
      "focus-xd-ribbon-closeup.jpg",
    ],
    specs: [
      { label: "Type", value: "4-Way Powered Tower" },
      { label: "Frequency Response", value: "18 Hz – 30 kHz ±2dB" },
      { label: "Sensitivity", value: "95.6 dB" },
      { label: "Impedance", value: "4 Ohms nominal" },
      { label: "Onboard Amplification", value: "750W ICEpower" },
      { label: "Drivers", value: "Dual 12\" woofers, 7\" midrange, 4\" ribbon tweeter" },
      { label: "Dimensions", value: '53" H × 12.75" W × 16" D' },
      { label: "Weight", value: "130 lbs each" },
    ],
    finishes: ALL_FINISHES,
    highlights: [
      "750 watts of onboard ICEpower Class D amplification per speaker",
      "Active bass management with adjustable room correction",
      "Dual 12\" woofers for deep, controlled bass extension to 18 Hz",
      "4\" folded ribbon tweeter — Legacy's signature high-frequency detail",
      "95.6 dB sensitivity — pairs beautifully with any amplifier for mids/highs",
    ],
    order: 2,
  },

  /* ── Signature SE ─────────────────────────────────────────────── */
  {
    slug: "signature-se",
    name: "Signature SE",
    tagline: "The Passive Tower That Started It All",
    description:
      "The Signature SE is Legacy Audio's iconic 4-way passive tower — the speaker that put the company on the map and continues to set the standard for what a full-range, high-sensitivity floor-stander can achieve. With frequency response reaching down to 22 Hz, a 96 dB sensitivity rating, and Legacy's exquisite cabinetry, the Signature SE fills large rooms with ease while remaining musical and refined at any volume.",
    cardDescription:
      "Iconic 4-way passive tower with 22 Hz bass extension, 96 dB sensitivity, and Legacy's legendary cabinetry.",
    category: "Reference Tower",
    priceFrom: 10000,
    priceTo: 11642,
    instantShip: true,
    discontinued: false,
    heroImage: "signature-se-hero.jpg",
    gallery: [
      "signature-se-rosewood.jpg",
      "signature-se-curly-maple.jpg",
      "signature-se-mahogany.jpg",
      "signature-se-sapele-pommele.jpg",
      "signature-se-cabernet.jpg",
      "signature-se-medium-oak.jpg",
      "signature-se-pair.jpg",
      "signature-se-white-satin.jpg",
      "signature-se-sapele-single.jpg",
      "signature-se-htr-award.jpg",
    ],
    specs: [
      { label: "Type", value: "4-Way Passive Tower" },
      { label: "Frequency Response", value: "22 Hz – 30 kHz ±2dB" },
      { label: "Sensitivity", value: "96 dB" },
      { label: "Impedance", value: "4 Ohms nominal" },
      { label: "Recommended Power", value: "25 – 400 watts" },
      { label: "Drivers", value: 'Dual 12" woofers, 7" midrange, AMT tweeter' },
      { label: "Dimensions", value: '55" H × 13" W × 16" D' },
      { label: "Weight", value: "125 lbs each" },
    ],
    finishes: ALL_FINISHES,
    highlights: [
      "96 dB sensitivity — needs as little as 25 watts to sing",
      "True full-range bass extension to 22 Hz — no subwoofer required",
      "4-way design with dedicated drivers for each frequency band",
      "Air Motion Transformer tweeter for lifelike high-frequency reproduction",
      "HTR Best of 2012 Award winner — enduring excellence",
    ],
    order: 3,
  },

  /* ── Calibre ──────────────────────────────────────────────────── */
  {
    slug: "calibre",
    name: "Calibre",
    tagline: "Compact Authority — The Last Pair",
    description:
      "The Calibre is Legacy Audio's 3-way bookshelf monitor — a compact speaker with an outsized voice. Reaching down to 38 Hz with a sensitivity of 92 dB, the Calibre delivers the tonal richness and dynamic headroom that Legacy is known for, in a form factor that works as a primary speaker in smaller rooms or as an exceptional surround in a reference home theater. This model has been discontinued by Legacy Audio — Dave has the last pair available anywhere.",
    cardDescription:
      "Discontinued 3-way monitor with 38 Hz extension. This is the last pair available anywhere.",
    category: "Reference Monitor",
    priceFrom: 6400,
    priceTo: 7315,
    instantShip: true,
    discontinued: true,
    badge: "Last Pair Available",
    heroImage: "calibre-hero.jpg",
    gallery: [
      "calibre-front.jpg",
      "calibre-rosewood.jpg",
      "calibre-rmaf.jpg",
      "calibre-rmaf-display.jpg",
    ],
    specs: [
      { label: "Type", value: "3-Way Bookshelf Monitor" },
      { label: "Frequency Response", value: "38 Hz – 30 kHz ±2dB" },
      { label: "Sensitivity", value: "92 dB" },
      { label: "Impedance", value: "8 Ohms nominal" },
      { label: "Recommended Power", value: "20 – 200 watts" },
      { label: "Drivers", value: '8" woofer, 5.25" midrange, AMT tweeter' },
      { label: "Dimensions", value: '21" H × 11" W × 14" D' },
      { label: "Weight", value: "45 lbs each" },
    ],
    finishes: ALL_FINISHES,
    highlights: [
      "3-way design with dedicated drivers — not a compromised 2-way",
      "38 Hz bass extension from a bookshelf — remarkable for the size",
      "92 dB sensitivity — pairs well with a wide range of amplifiers",
      "Ideal as high-performance surrounds or compact mains",
      "Discontinued by Legacy Audio — this is the final pair",
    ],
    order: 4,
  },

  /* ── Studio HD ────────────────────────────────────────────────── */
  {
    slug: "studio-hd",
    name: "Studio HD",
    tagline: "Your Entry Into the Legacy Sound",
    description:
      "The Studio HD is Legacy Audio's most accessible speaker — a 2-way monitor that punches far above its price point. Built around a 4\" folded ribbon tweeter and a 6.5\" woven-fiber woofer in a precision-tuned cabinet, the Studio HD delivers the kind of transparency and musicality that has earned Legacy its reputation. Whether used as front channels, surrounds, or a dedicated stereo pair, the Studio HD is the foundation of serious listening.",
    cardDescription:
      "2-way monitor with Legacy's signature ribbon tweeter — accessible entry point, uncompromising sound.",
    category: "Monitor",
    priceFrom: 2400,
    priceTo: 3136,
    instantShip: true,
    discontinued: false,
    heroImage: "studio-hd-hero.jpg",
    gallery: [
      "studio-hd-front.jpg",
      "studio-hd-closeup.jpg",
      "studio-hd-black-pearl.jpg",
      "studio-hd-black-pearl-alt.jpg",
      "studio-hd-birdseye-maple.jpg",
      "studio-hd-natural-cherry.jpg",
      "studio-hd-rosewood-no-grille.jpg",
      "studio-hd-rosewood-rear.jpg",
      "studio-hd-bp-detail.jpg",
      "studio-hd-vertical-panel.jpg",
      "studio-hd-tweeter-mid-detail.jpg",
      "studio-hd-ribbon-closeup.jpg",
    ],
    specs: [
      { label: "Type", value: "2-Way Bookshelf Monitor" },
      { label: "Frequency Response", value: "41 Hz – 30 kHz ±2dB" },
      { label: "Sensitivity", value: "91 dB" },
      { label: "Impedance", value: "8 Ohms nominal" },
      { label: "Recommended Power", value: "15 – 150 watts" },
      { label: "Drivers", value: '6.5" woven-fiber woofer, 4" folded ribbon tweeter' },
      { label: "Dimensions", value: '15" H × 9" W × 12" D' },
      { label: "Weight", value: "22 lbs each" },
    ],
    finishes: ALL_FINISHES,
    highlights: [
      "4\" folded ribbon tweeter — the same technology used in Legacy's flagship speakers",
      "91 dB sensitivity — easy to drive with any quality amplifier",
      "Precision-tuned cabinet minimizes coloration and resonance",
      "Versatile — excels as mains, surrounds, or desktop monitors",
      "Legacy Audio build quality and finish options at an accessible price",
    ],
    order: 5,
  },
];

/* ─── HELPERS ───────────────────────────────────────────────────── */

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsSorted(): Product[] {
  return [...products].sort((a, b) => a.order - b.order);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents);
}

/** e.g. "$2,400 – $3,136 / pair" */
export function formatPriceRange(product: Product): string {
  return `${formatPrice(product.priceFrom)} – ${formatPrice(product.priceTo)} / pair`;
}

export const SHIPPING_NOTE = "Free shipping — Continental US";
export const CUSTOM_ORDER_LEAD = "Custom orders: 8–12 week lead time";
export const PHONE_NUMBER = "(480) 550-0097";
export const PHONE_HREF = "tel:+14805500097";

/* ─── FINISH SWATCH / PHOTO MAPPING ───────────────────────────── */

/** Convert finish name → slug (e.g. "Black Oak" → "black-oak") */
export function finishSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

/** Swatch thumbnail path for a given finish name */
export function swatchPath(name: string): string {
  return `/images/swatches/${finishSlug(name)}.jpg`;
}

/**
 * Maps speaker slug → { finishSlug → image filename }
 * Only includes finishes where we have a dedicated product photo.
 * When a finish IS in this map, clicking its swatch swaps the main image.
 * When a finish is NOT here, the swatch is still shown but no image swap occurs.
 */
export const FINISH_PHOTO_MAP: Record<string, Record<string, string>> = {
  aeris: {
    "rosewood": "aeris-rosewood-front.jpg",
    "black-pearl": "aeris-black-pearl.jpg",
    "black-oak": "aeris-black-oak.jpg",
    "exotic-copper": "aeris-exotic-copper.jpg",
    "natural-sapele-pommele": "aeris-natural-sapele.jpg",
    "cabernet-sapele-pommele": "aeris-cabernet-black-pearl.jpg",
  },
  "studio-hd": {
    "black-pearl": "studio-hd-black-pearl.jpg",
    "birdseye-maple": "studio-hd-birdseye-maple.jpg",
    "natural-cherry": "studio-hd-natural-cherry.jpg",
    "rosewood": "studio-hd-rosewood-no-grille.jpg",
  },
  "signature-se": {
    "rosewood": "signature-se-rosewood.jpg",
    "curly-maple": "signature-se-curly-maple.jpg",
    "white-satin": "signature-se-white-satin.jpg",
    "medium-oak": "signature-se-medium-oak.jpg",
    "cabernet-sapele-pommele": "signature-se-cabernet.jpg",
    "natural-sapele-pommele": "signature-se-sapele-pommele.jpg",
  },
  "focus-xd": {
    "black-pearl": "focus-xd-black-pearl.jpg",
    "rosewood": "focus-xd-rosewood.jpg",
    "olive-ash-burl": "focus-xd-olive-ash-burl.jpg",
    "cabernet-sapele-pommele": "focus-xd-cabernet.jpg",
    "natural-sapele-pommele": "focus-xd-sapele.jpg",
  },
  calibre: {
    "rosewood": "calibre-rosewood.jpg",
  },
};
