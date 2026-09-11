import type { L } from "./i18n";

/**
 * Everything editable about the brand lives here.
 * Images are placeholders from picsum.photos — swap for real assets in /public
 * and update the paths; nothing else needs to change.
 */
export const site = {
  name: "Milson",
  brand: "Milson UIX",
  role: { en: "Multidisciplinary graphic designer, focused on UI/UX", pt: "Designer gráfico multidisciplinar, focado em UI/UX" } as L,
  tagline: { en: "Transforming brands with visionary design", pt: "A transformar marcas com design visionário" } as L,
  location: { en: "Maputo, Mozambique", pt: "Maputo, Moçambique" } as L,
  email: "hello@milsonuix.com",
  url: "https://milsonuix.com",
  description: {
    en: "Milson UIX is the studio and personal brand of Milson — a multidisciplinary graphic designer building brands, products and motion for ambitious companies.",
    pt: "Milson UIX é o estúdio e a marca pessoal do Milson — um designer gráfico multidisciplinar que constrói marcas, produtos e motion para empresas ambiciosas.",
  } as L,
  socials: [
    { label: "LinkedIn", short: "li", href: "https://linkedin.com/in/milsonuix" },
    { label: "Instagram", short: "ig", href: "https://instagram.com/milsonuix" },
    { label: "Behance", short: "be", href: "https://behance.net/milsonuix" },
    { label: "X", short: "x", href: "https://x.com/milsonuix" },
  ],
};

/** Placeholder image helper — deterministic per seed so layouts stay stable. */
export const img = (seed: string, w = 1600, h = 1000, gray = false) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}${gray ? "?grayscale" : ""}`;

/** The three practice areas — they drive the hero, the pillars and the work filter. */
export type Pillar = { id: "brand" | "product" | "motion"; label: L; short: L; statement: L; body: L; seed: string };

export const pillars: Pillar[] = [
  {
    id: "brand",
    label: { en: "Brand identity", pt: "Identidade de marca" },
    short: { en: "Brand", pt: "Marca" },
    statement: { en: "Identities built to be recognised at a glance and remembered a year later.", pt: "Identidades feitas para serem reconhecidas num relance e lembradas um ano depois." },
    body: { en: "Strategy, naming, logotype, typography and the system that keeps it consistent — from the sign on the door to the splash screen.", pt: "Estratégia, naming, logótipo, tipografia e o sistema que mantém tudo coerente — da placa na porta ao ecrã inicial." },
    seed: "milson-brand",
  },
  {
    id: "product",
    label: { en: "Product design", pt: "Design de produto" },
    short: { en: "UI/UX", pt: "UI/UX" },
    statement: { en: "Interfaces that make complex work feel obvious — designed with the people who use them.", pt: "Interfaces que tornam óbvio o trabalho complexo — desenhadas com quem as usa." },
    body: { en: "Research, flows, wireframes, design systems and pixel-final UI for web and mobile. Shipped with the engineers, not thrown over the wall.", pt: "Pesquisa, fluxos, wireframes, design systems e UI final para web e mobile. Entregue com os engenheiros, não atirado por cima do muro." },
    seed: "milson-product",
  },
  {
    id: "motion",
    label: { en: "Motion & video", pt: "Motion & vídeo" },
    short: { en: "Motion", pt: "Motion" },
    statement: { en: "Movement that explains the idea faster than a paragraph ever could.", pt: "Movimento que explica a ideia mais depressa do que qualquer parágrafo." },
    body: { en: "Brand films, product walkthroughs, launch teasers and the micro-interactions that make a product feel alive.", pt: "Filmes de marca, walkthroughs de produto, teasers de lançamento e as micro-interacções que dão vida a um produto." },
    seed: "milson-motion",
  },
];
