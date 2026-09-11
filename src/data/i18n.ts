/**
 * Language plumbing + every UI string, in both languages.
 * EN lives at `/`, PT under `/pt`. Page copy (projects, posts, story) is
 * localised in its own data file with `{ en, pt }` fields and read via `pick()`.
 */
export type Lang = "en" | "pt";
export const langs: Lang[] = ["en", "pt"];
export type L<T = string> = Record<Lang, T>;

export const isL = (v: unknown): v is L<unknown> =>
  typeof v === "object" && v !== null && "en" in v && "pt" in v;

export const pick = <T,>(v: T | L<T>, lang: Lang): T => (isL(v) ? (v as L<T>)[lang] : (v as T));

/** Prefix a site path for the language: href("pt", "/work") → "/pt/work". */
export const href = (lang: Lang, path: string) =>
  lang === "en" ? path : path === "/" ? "/pt" : `/pt${path}`;

/** Work out the language and the language-free path from a URL pathname. */
export const fromPath = (pathname: string): { lang: Lang; path: string } => {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (clean === "/pt") return { lang: "pt", path: "/" };
  if (clean.startsWith("/pt/")) return { lang: "pt", path: clean.slice(3) };
  return { lang: "en", path: clean };
};

export const formatDate = (iso: string, lang: Lang) =>
  new Date(iso).toLocaleDateString(lang === "pt" ? "pt-PT" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

const en = {
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
  menu: { open: "Open menu", close: "Close menu", follow: "Follow me", lang: "Language" },
  hero: { watch: "Watch my work on:", topics: "Showreel topics" },
  about: {
    label: "About",
    statement: "I'm Milson — a multidisciplinary designer who builds the brand, the product and the film, so they finally look like they came from the same place.",
    aside: "Ten years across print, identity and interfaces in Maputo. In 2022 I opened Milson UIX to do all three under one roof — and since 2026 the studio ships the front-end for the products it designs.",
    more: "Learn more",
  },
  pillars: { areas: "Practice areas", see: "See the work", all: "All projects" },
  explore: {
    label: "Explore",
    lead: "Case studies, process notes and the occasional strong opinion — all in one place.",
    tiles: ["Case studies", "Process", "Journal"],
  },
  journal: { label: "Journal", all: "View all posts", read: "Read", back: "Back to journal", intro: "Notes on design, process and the occasional strong opinion." },
  updates: { title: "Stay updated", body: "One email when a case study or a post goes out. No noise.", cta: "Subscribe", ok: "Thanks — you're on the list.", placeholder: "you@company.com" },
  cta: { lead: "Have a brand, a product or a film that deserves better? Let's talk.", start: "Start a project" },
  footer: { practice: "Practice", contact: "Contact", start: "Start a project", built: "Designed and built by", rights: "All rights reserved." },
  aboutPage: {
    intro: "Milson is a multidisciplinary graphic designer, focused on UI/UX — building brands, products and motion for companies that want to be remembered.",
    story: "My story",
    storyWord: ["My", "Story"],
    seeWork: "See the work",
    manifesto: "Today the studio does three things and refuses to do them separately: the identity, the product and the film are designed by the same hands, so the brand you see on the street is the one you tap on the phone. Nothing is thrown over a wall — we ship the front-end for the products we design, in Maputo, for clients across Mozambique and beyond.",
    inShort: "In short",
    facts: [["Based in", "Maputo, Mozambique"], ["Since", "2014 · studio 2022"], ["Practice", "Brand · Product · Motion"], ["Tools", "Figma, After Effects, code"]],
  },
  workPage: { title: "Work", intro: "Selected projects across brand, product and motion. Fewer, deeper — every one shipped.", all: "All", projects: "projects", view: "View case", client: "Client", role: "Role", services: "Services", next: "Next project", allProjects: "All projects" },
  contactPage: {
    title: "Contact",
    intro: "Tell me what you're building. I reply within two working days.",
    tz: "CAT (UTC+2)",
    name: "Name", email: "Email", need: "What do you need?", about: "About the project",
    placeholder: "Goals, timeline, budget range — whatever you have.",
    send: "Send", sent: "Opening your mail app — if nothing happens, write to",
    subject: "New project",
  },
  notFound: { text: "That page isn't here.", home: "Back home" },
  pages: { about: "About", work: "Work", journal: "Journal", contact: "Contact", notFound: "Not found" },
};

export type UI = typeof en;

const pt: UI = {
  nav: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Trabalho", href: "/work" },
    { label: "Journal", href: "/journal" },
    { label: "Contacto", href: "/contact" },
  ],
  menu: { open: "Abrir menu", close: "Fechar menu", follow: "Siga-me", lang: "Idioma" },
  hero: { watch: "Veja o meu trabalho em:", topics: "Temas do showreel" },
  about: {
    label: "Sobre",
    statement: "Sou o Milson — um designer multidisciplinar que constrói a marca, o produto e o filme, para que finalmente pareçam vir do mesmo lugar.",
    aside: "Dez anos entre impressão, identidade e interfaces em Maputo. Em 2022 abri a Milson UIX para fazer as três coisas sob o mesmo tecto — e desde 2026 o estúdio entrega o front-end dos produtos que desenha.",
    more: "Saber mais",
  },
  pillars: { areas: "Áreas de prática", see: "Ver o trabalho", all: "Todos os projectos" },
  explore: {
    label: "Explorar",
    lead: "Casos de estudo, notas de processo e, de vez em quando, uma opinião forte — tudo num só lugar.",
    tiles: ["Casos de estudo", "Processo", "Journal"],
  },
  journal: { label: "Journal", all: "Ver todos os artigos", read: "Ler", back: "Voltar ao journal", intro: "Notas sobre design, processo e, de vez em quando, uma opinião forte." },
  updates: { title: "Fique a par", body: "Um email quando sai um caso de estudo ou um artigo. Sem ruído.", cta: "Subscrever", ok: "Obrigado — está na lista.", placeholder: "voce@empresa.com" },
  cta: { lead: "Tem uma marca, um produto ou um filme que merece melhor? Vamos falar.", start: "Começar um projecto" },
  footer: { practice: "Prática", contact: "Contacto", start: "Começar um projecto", built: "Desenhado e construído por", rights: "Todos os direitos reservados." },
  aboutPage: {
    intro: "Milson é um designer gráfico multidisciplinar, focado em UI/UX — constrói marcas, produtos e motion para empresas que querem ser lembradas.",
    story: "A minha história",
    storyWord: ["Minha", "História"],
    seeWork: "Ver o trabalho",
    manifesto: "Hoje o estúdio faz três coisas e recusa fazê-las em separado: a identidade, o produto e o filme são desenhados pelas mesmas mãos, para que a marca que vê na rua seja a mesma em que toca no telemóvel. Nada é atirado por cima do muro — entregamos o front-end dos produtos que desenhamos, em Maputo, para clientes em todo o Moçambique e além.",
    inShort: "Em resumo",
    facts: [["Base", "Maputo, Moçambique"], ["Desde", "2014 · estúdio 2022"], ["Prática", "Marca · Produto · Motion"], ["Ferramentas", "Figma, After Effects, código"]],
  },
  workPage: { title: "Trabalho", intro: "Projectos seleccionados em marca, produto e motion. Menos, mais fundo — todos entregues.", all: "Todos", projects: "projectos", view: "Ver caso", client: "Cliente", role: "Papel", services: "Serviços", next: "Projecto seguinte", allProjects: "Todos os projectos" },
  contactPage: {
    title: "Contacto",
    intro: "Conte-me o que está a construir. Respondo em dois dias úteis.",
    tz: "CAT (UTC+2)",
    name: "Nome", email: "Email", need: "Do que precisa?", about: "Sobre o projecto",
    placeholder: "Objectivos, prazo, orçamento — o que tiver.",
    send: "Enviar", sent: "A abrir a sua aplicação de email — se nada acontecer, escreva para",
    subject: "Novo projecto",
  },
  notFound: { text: "Essa página não está aqui.", home: "Voltar ao início" },
  pages: { about: "Sobre", work: "Trabalho", journal: "Journal", contact: "Contacto", notFound: "Não encontrada" },
};

export const ui: Record<Lang, UI> = { en, pt };
