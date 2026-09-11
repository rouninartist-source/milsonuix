import { img } from "./site";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: "brand" | "product" | "motion";
  categoryLabel: string;
  role: string;
  services: string[];
  summary: string;
  intro: string;
  cover: string;
  sections: { label: string; text: string; images: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "quota",
    title: "Quota",
    client: "Quota Studio",
    year: "2026",
    category: "product",
    categoryLabel: "Product design",
    role: "Product designer & front-end",
    services: ["UX research", "Design system", "UI design", "Front-end"],
    summary: "Invoicing that Mozambican SMEs actually finish — quotes, invoices and receipts sent over WhatsApp.",
    intro:
      "Small businesses in Maputo were quoting on paper and chasing payments by phone. Quota turns that into a two-minute flow: pick a client, add lines, send the PDF to WhatsApp, get paid on M-Pesa.",
    cover: img("quota-cover", 1600, 1000),
    sections: [
      {
        label: "Brief",
        text: "Replace paper and spreadsheets without asking owners to learn accounting. Every screen had to fit on a phone held in one hand, in Portuguese, with IVA handled automatically.",
        images: [img("quota-1", 1600, 1000)],
      },
      {
        label: "Approach",
        text: "A single 'bench' screen where the document builds itself as you type, a live preview that is the printed PDF, and templates the business can pick without a designer. No page ever scrolls on desktop — everything the owner needs is in view.",
        images: [img("quota-2", 1200, 1500), img("quota-3", 1200, 1500)],
      },
      {
        label: "Outcome",
        text: "Shipped as a multi-tenant SaaS with self-service signup. First clients on-boarded from the landing page alone.",
        images: [img("quota-4", 1600, 900)],
      },
    ],
  },
  {
    slug: "kanimambo",
    title: "Kanimambo Coffee",
    client: "Kanimambo",
    year: "2025",
    category: "brand",
    categoryLabel: "Brand identity",
    role: "Creative director",
    services: ["Strategy", "Identity", "Packaging", "Art direction"],
    summary: "A specialty coffee brand from Gurué given the confidence to sit next to any roaster in Lisbon or Cape Town.",
    intro: "Kanimambo means thank you. The identity had to carry that warmth without becoming folksy — a wordmark with real weight and a colour system pulled from the roast itself.",
    cover: img("kanimambo-cover", 1600, 1000),
    sections: [
      { label: "Brief", text: "Move from a local favourite to an export-ready brand without losing the origin story.", images: [img("kan-1", 1600, 1000)] },
      { label: "Approach", text: "Condensed wordmark, a single accent colour per origin, and packaging that photographs well on a phone — because that is where it gets discovered.", images: [img("kan-2", 1200, 1500), img("kan-3", 1200, 1500)] },
      { label: "Outcome", text: "Full identity system, packaging range and launch campaign delivered in eight weeks.", images: [img("kan-4", 1600, 900)] },
    ],
  },
  {
    slug: "maputo-transit",
    title: "Maputo Transit",
    client: "Municipal pilot",
    year: "2024",
    category: "product",
    categoryLabel: "Product design",
    role: "Lead UX designer",
    services: ["Research", "Service design", "Mobile UI", "Wayfinding"],
    summary: "Real-time chapa and bus information for a city that never had a timetable.",
    intro: "Commuters were relying on word of mouth. We designed an app and a matching wayfinding system so the information on the pole matches the one on the phone.",
    cover: img("transit-cover", 1600, 1000),
    sections: [
      { label: "Brief", text: "Give riders a reason to trust the schedule — on cheap Android phones, on 2G, in sunlight.", images: [img("tr-1", 1600, 1000)] },
      { label: "Approach", text: "High contrast, big type, offline-first. Every route got a colour and a number that repeats on stops, vehicles and the app.", images: [img("tr-2", 1200, 1500), img("tr-3", 1200, 1500)] },
      { label: "Outcome", text: "Pilot on three corridors; stop signage adopted city-wide.", images: [img("tr-4", 1600, 900)] },
    ],
  },
  {
    slug: "indico",
    title: "Índico Studio",
    client: "Índico",
    year: "2025",
    category: "motion",
    categoryLabel: "Motion & video",
    role: "Director & motion designer",
    services: ["Brand film", "Motion system", "Web"],
    summary: "A brand film and motion language for an architecture studio that builds with the ocean in mind.",
    intro: "Architecture is slow; film is fast. The job was to make the studio's patience feel like a strength — long takes, one typeface, the sound of the tide.",
    cover: img("indico-cover", 1600, 1000),
    sections: [
      { label: "Brief", text: "Launch the studio's new positioning with something people would actually watch to the end.", images: [img("in-1", 1600, 1000)] },
      { label: "Approach", text: "Three-minute film, a set of loopable motion assets for the site and social, and type animation rules the studio can reuse.", images: [img("in-2", 1200, 1500), img("in-3", 1200, 1500)] },
      { label: "Outcome", text: "Film, motion toolkit and a new website shipped together.", images: [img("in-4", 1600, 900)] },
    ],
  },
  {
    slug: "lusa-health",
    title: "Lusa Health",
    client: "Lusa Health",
    year: "2024",
    category: "product",
    categoryLabel: "Product design",
    role: "Product designer",
    services: ["Design system", "Patient app", "Clinician dashboard"],
    summary: "A patient app and clinician dashboard that speak the same visual language.",
    intro: "Two audiences, one product. The patient side needed calm; the clinician side needed density. A shared design system kept them siblings, not strangers.",
    cover: img("lusa-cover", 1600, 1000),
    sections: [
      { label: "Brief", text: "Unify three inherited interfaces into one product family.", images: [img("lu-1", 1600, 1000)] },
      { label: "Approach", text: "Tokens first, then components, then screens. Accessibility audited at every step.", images: [img("lu-2", 1200, 1500), img("lu-3", 1200, 1500)] },
      { label: "Outcome", text: "Design system in Figma with coded components; both apps relaunched on it.", images: [img("lu-4", 1600, 900)] },
    ],
  },
  {
    slug: "beira-port",
    title: "Porto da Beira",
    client: "Port authority",
    year: "2023",
    category: "brand",
    categoryLabel: "Brand identity",
    role: "Brand designer",
    services: ["Identity", "Signage", "Annual report"],
    summary: "A century-old port given an identity as solid as its cranes.",
    intro: "Heavy industry, but a public institution. The identity leans on structure — a grid, a bold mark, and a report that people actually read.",
    cover: img("beira-cover", 1600, 1000),
    sections: [
      { label: "Brief", text: "Modernise without erasing a hundred years of history.", images: [img("be-1", 1600, 1000)] },
      { label: "Approach", text: "A mark drawn from the crane silhouette; a typographic system that works on a hard hat and a 200-page report.", images: [img("be-2", 1200, 1500), img("be-3", 1200, 1500)] },
      { label: "Outcome", text: "Identity, signage and the 2023 annual report.", images: [img("be-4", 1600, 900)] },
    ],
  },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
