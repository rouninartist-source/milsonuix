/**
 * Brand constants shared by both languages. Copy lives in ./content.ts.
 * Images are placeholders from picsum.photos — swap for real assets in /public
 * and update the paths; nothing else needs to change.
 */
export const site = {
  brand: "Mushin Designer",
  short: "Mushin",
  url: "https://milsonuix.com",
  location: "Maputo, Mozambique",
  year: "2026",
  email: "hello@milsonuix.com",
  resume: "/downloads/mushin-designer-resume.pdf",
  portfolio: "/downloads/mushin-designer-portfolio.pdf",
  portfolioSize: "29 MB",
  socials: [
    { label: "LinkedIn", short: "li", href: "https://linkedin.com/in/mushindesigner" },
    { label: "Behance", short: "be", href: "https://behance.net/mushindesigner" },
    { label: "Instagram", short: "ig", href: "https://instagram.com/mushindesigner" },
  ],
  trustedBy: [
    "Elinka", "Havana Pool Bar", "Horizon Contabilidade", "KMA Advisory Group", "Mozambique Machinery",
    "Obratto", "Great Holding", "SGL", "TechDrilling", "Muzza", "R6", "Encanto Kids",
    "Maëva Mozambique", "Imperial Insurance Moçambique",
  ],
  skills: [
    { tool: "Figma", tag: { en: "Product design", pt: "Design de produto" } },
    { tool: "Lovable", tag: { en: "Vibe coding", pt: "Vibe coding" } },
    { tool: "Illustrator", tag: { en: "Design", pt: "Design" } },
    { tool: "Framer", tag: { en: "Vibe coding", pt: "Vibe coding" } },
    { tool: "Photoshop", tag: { en: "Product design", pt: "Design de produto" } },
    { tool: "HTML 5", tag: { en: "Semantic language", pt: "Linguagem semântica" } },
    { tool: "InDesign", tag: { en: "Editorial design", pt: "Design editorial" } },
    { tool: "CSS", tag: { en: "Semantic language", pt: "Linguagem semântica" } },
    { tool: "Adobe XD", tag: { en: "UI/UX design", pt: "Design UI/UX" } },
    { tool: "JavaScript", tag: { en: "Development", pt: "Desenvolvimento" } },
  ],
  experience: [
    { company: "Wise We Belive", role: { en: "Senior Creative Designer", pt: "Designer Criativo Sénior" }, from: "2024", to: { en: "Present", pt: "Presente" } },
    { company: "Hey Studio Critivo", role: { en: "Senior Creative Designer", pt: "Designer Criativo Sénior" }, from: "2021", to: "2024" },
    { company: "Wise Tech Builders", role: { en: "UX/UI Designer", pt: "Designer UX/UI" }, from: "2019", to: "2021" },
    { company: "Wise We Belive", role: { en: "Creative Designer & Webmaster", pt: "Designer Criativo & Webmaster" }, from: "2017", to: "2019" },
    { company: "INCM", role: { en: "ISO Systems Analyst (Intern)", pt: "Analista de Sistemas ISO (Estagiário)" }, from: "2017", to: "2017" },
  ],
};

export type Lang = "en" | "pt";
export const langs: Lang[] = ["en", "pt"];
export const pick = <T,>(v: T | Record<Lang, T>, lang: Lang): T =>
  typeof v === "object" && v !== null && "en" in (v as object) ? (v as Record<Lang, T>)[lang] : (v as T);

/** Placeholder image helper — deterministic per seed so layouts stay stable. */
export const img = (seed: string, w = 1600, h = 1000, gray = false) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}${gray ? "?grayscale" : ""}`;
