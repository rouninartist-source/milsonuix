/**
 * Everything editable about the brand lives here.
 * Images are placeholders from picsum.photos — swap for real assets in /public
 * and update the paths; nothing else needs to change.
 */
export const site = {
  name: "Milson",
  brand: "Milson UIX",
  role: "Multidisciplinary graphic designer, focused on UI/UX",
  tagline: "Transforming brands with visionary design",
  location: "Maputo, Mozambique",
  email: "hello@milsonuix.com",
  url: "https://milsonuix.com",
  description:
    "Milson UIX is the studio and personal brand of Milson — a multidisciplinary graphic designer building brands, products and motion for ambitious companies.",
  socials: [
    { label: "LinkedIn", short: "li", href: "https://linkedin.com/in/milsonuix" },
    { label: "Instagram", short: "ig", href: "https://instagram.com/milsonuix" },
    { label: "Behance", short: "be", href: "https://behance.net/milsonuix" },
    { label: "X", short: "x", href: "https://x.com/milsonuix" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
};

/** Placeholder image helper — deterministic per seed so layouts stay stable. */
export const img = (seed: string, w = 1600, h = 1000, gray = false) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}${gray ? "?grayscale" : ""}`;

/** The three practice areas — they drive the hero, the pillars and the work filter. */
export type Pillar = { id: "brand" | "product" | "motion"; label: string; short: string; statement: string; body: string; seed: string };

export const pillars: Pillar[] = [
  {
    id: "brand",
    label: "Brand identity",
    short: "Brand",
    statement: "Identities built to be recognised at a glance and remembered a year later.",
    body: "Strategy, naming, logotype, typography and the system that keeps it consistent — from the sign on the door to the splash screen.",
    seed: "milson-brand",
  },
  {
    id: "product",
    label: "Product design",
    short: "UI/UX",
    statement: "Interfaces that make complex work feel obvious — designed with the people who use them.",
    body: "Research, flows, wireframes, design systems and pixel-final UI for web and mobile. Shipped with the engineers, not thrown over the wall.",
    seed: "milson-product",
  },
  {
    id: "motion",
    label: "Motion & video",
    short: "Motion",
    statement: "Movement that explains the idea faster than a paragraph ever could.",
    body: "Brand films, product walkthroughs, launch teasers and the micro-interactions that make a product feel alive.",
    seed: "milson-motion",
  },
];
