import { img } from "./site";
import type { L } from "./i18n";

/** Timeline for the About page — one entry per year marker. */
export const story: { year: string; title: L; text: L; image: string }[] = [
  {
    year: "2014",
    title: { en: "First logo, first invoice", pt: "Primeiro logótipo, primeira factura" },
    text: {
      en: "Started as a graphic designer in Maputo doing identities for friends' businesses — the ones that taught me a logo is worth nothing until it's on a shopfront.",
      pt: "Comecei como designer gráfico em Maputo a fazer identidades para negócios de amigos — os que me ensinaram que um logótipo não vale nada até estar numa montra.",
    },
    image: img("story-2014", 900, 1200),
  },
  {
    year: "2018",
    title: { en: "From print to product", pt: "Da impressão ao produto" },
    text: {
      en: "Moved into interfaces when clients started asking for the app to match the brand. Learned UX the honest way: watching people fail to use my screens.",
      pt: "Passei para interfaces quando os clientes começaram a pedir que a app combinasse com a marca. Aprendi UX da forma honesta: a ver pessoas falharem a usar os meus ecrãs.",
    },
    image: img("story-2018", 900, 1200),
  },
  {
    year: "2022",
    title: { en: "Milson UIX", pt: "Milson UIX" },
    text: {
      en: "Opened the studio. Brand, product and motion under one roof, so the identity, the interface and the film are designed by the same hands.",
      pt: "Abri o estúdio. Marca, produto e motion sob o mesmo tecto, para que a identidade, a interface e o filme sejam desenhados pelas mesmas mãos.",
    },
    image: img("story-2022", 900, 1200),
  },
  {
    year: "2026",
    title: { en: "Building, not just designing", pt: "Construir, não só desenhar" },
    text: {
      en: "Shipping the products I design — Quota being the first — with the front-end written in the studio.",
      pt: "Entregar os produtos que desenho — o Quota foi o primeiro — com o front-end escrito no estúdio.",
    },
    image: img("story-2026", 900, 1200),
  },
];
