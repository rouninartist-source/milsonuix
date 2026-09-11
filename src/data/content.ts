import type { Lang } from "./site";

/**
 * All copy, in both languages. `en` defines the shape; `pt` must match it.
 * Sections are keyed by the anchors used in the menu.
 */
const en = {
  meta: {
    title: "Mushin Designer — Creative Director & Digital Product Designer",
    description:
      "Digital Product Design, UI/UX, Brand and Creative Direction from Maputo. Quiet systems, cinematic interfaces, intentional value.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Voices", href: "#voices" },
    { label: "Contact", href: "#contact" },
  ],
  menu: { follow: "Follow me", resume: "Download resume", portfolio: "Open portfolio", lang: "Language" },
  hero: {
    role: "Creative Director & Digital Product Designer",
    statement: "Quiet systems, cinematic interfaces, intentional value.",
    explore: "I work across:",
    topics: [
      { id: "product", label: "Product", word: "Product" },
      { id: "uiux", label: "UI/UX", word: "UI·UX" },
      { id: "brand", label: "Brand", word: "Brand" },
      { id: "direction", label: "Direction", word: "Direction" },
    ],
    disciplines: ["Product Design", "UI/UX", "Brand Identity", "Creative Direction", "Visual Systems", "Editorial", "Motion"],
    cta: "View services",
    cta2: "Case studies",
  },
  about: {
    label: "About me",
    title: "Creative Director and Digital Product Designer",
    statement: "Simplicity and elegance — the only route to clarity, impact and solutions that outlast the trend.",
    body: [
      "Known as the Mushin Designer, I approach every project with creativity guided by the balance of Yin and Yang — harmony between contrasting forces that work together.",
      "Design is more than aesthetics. It is a tool for connection, inspiration, value creation, communication, emotional impact and meaningful experiences.",
    ],
    metrics: [
      { value: "8+", label: "Years of experience" },
      { value: "50+", label: "Projects" },
    ],
    resume: "Download resume",
  },
  experience: { label: "Experience", title: "My job experience" },
  skills: { label: "Quality skills", title: "Best quality skills" },
  work: {
    label: "Selected work",
    title: "Featured works",
    intro: "A curated cut from the last eight years: products, identities and editorial systems built with intention.",
    soon: "Coming soon",
    soonBody: "The latest case studies are being prepared. While the online showcase is finalised, the complete portfolio is available as an interactive book.",
    bookLabel: "Interactive portfolio",
    bookNote: "Interactive book · {size} · loads only when opened, to keep the site fast.",
    open: "Open portfolio",
    download: "Download portfolio",
  },
  services: {
    label: "Services",
    title: "My services",
    items: [
      { n: "I", title: "Digital Product Design", body: "Designing digital products and experiences with a focus on clarity, usability and intentional value." },
      { n: "II", title: "UI / UX Design", body: "Creating interfaces and user experiences that balance functionality, visual quality and ease of use." },
      { n: "III", title: "Website Design", body: "Designing websites and digital experiences with strong visual direction, structure and usability." },
      { n: "IV", title: "Brand Identity", body: "Building visual identities that communicate positioning, character and value consistently." },
      { n: "V", title: "Creative Direction", body: "Defining and guiding the creative vision across brands, products and communication systems." },
      { n: "VI", title: "Social Media Design", body: "Creating visual systems and content designed for consistent, professional digital communication." },
    ],
  },
  process: {
    label: "Process",
    title: "A path, not a formula.",
    steps: [
      { n: "01", title: "Discover", line: "Listening before sketching. Mapping the field.", body: "Understand the context, goals, needs and opportunities before beginning visual exploration." },
      { n: "02", title: "Research", line: "Evidence over opinion. Insight over data.", body: "Explore the problem, audience, market and available evidence to build an informed direction." },
      { n: "03", title: "Strategy", line: "Pick the one fight worth winning.", body: "Define priorities and identify the most important challenge or opportunity to solve." },
      { n: "04", title: "Design", line: "Compose, edit, edit again. Remove until it breathes.", body: "Develop, refine and simplify the visual and functional solution until it achieves clarity." },
      { n: "05", title: "Prototype", line: "Make it real enough to feel.", body: "Turn ideas into tangible experiences that can be explored, tested and understood." },
      { n: "06", title: "Launch", line: "Ship with intention. Measure. Return.", body: "Deliver the work, observe its performance and return to the process when refinement is needed." },
    ],
  },
  manifesto: { line1: "Good design is not what people see.", line2: "It is what people feel.", by: "Mushin Designer" },
  voices: {
    label: "Voices",
    title: "Testimonials",
    items: [
      { quote: "A modern, professional design and exactly what we needed. Speed, quality, and attention to detail. I recommend this work.", name: "Yuran Chiziane", role: "CEO, Great Holding" },
      { quote: "The transformation of our image and communication strengthened our brand. Creativity, professionalism, and solutions that deliver results.", name: "Farido Aly", role: "Country Manager, Techdrilling" },
    ],
    trusted: "Trusted by",
  },
  lab: {
    label: "Visual lab",
    title: "A small museum of experiments.",
    soon: "Coming soon",
    body: "New experiments are in preparation. The Visual Lab is a small museum being curated, with new studies planned for publication.",
  },
  contact: {
    label: "Contact",
    title: "Let's create something meaningful.",
    openTo: "Open to",
    focus: ["Product partnerships", "Brand systems", "Creative direction", "Selective collaborations"],
    fields: { name: "Name", email: "Email", project: "Project", projectPlaceholder: "What are we building, and by when?" },
    send: "Send inquiry",
    sent: "Opening your mail app — if nothing happens, write to {email}.",
    channels: "Channels",
  },
  footer: { rights: "© {year} Mushin Designer", crafted: "Crafted in silence.", location: "Maputo, Mozambique" },
};

export type Content = typeof en;

const pt: Content = {
  meta: {
    title: "Mushin Designer — Director Criativo & Designer de Produto Digital",
    description:
      "Design de Produto Digital, UI/UX, Marca e Direcção Criativa a partir de Maputo. Sistemas silenciosos, interfaces cinematográficas, valor intencional.",
  },
  nav: [
    { label: "Sobre", href: "#about" },
    { label: "Trabalho", href: "#work" },
    { label: "Serviços", href: "#services" },
    { label: "Processo", href: "#process" },
    { label: "Vozes", href: "#voices" },
    { label: "Contacto", href: "#contact" },
  ],
  menu: { follow: "Siga-me", resume: "Descarregar CV", portfolio: "Abrir portfólio", lang: "Idioma" },
  hero: {
    role: "Director Criativo & Designer de Produto Digital",
    statement: "Sistemas silenciosos, interfaces cinematográficas, valor intencional.",
    explore: "Trabalho em:",
    topics: [
      { id: "product", label: "Produto", word: "Produto" },
      { id: "uiux", label: "UI/UX", word: "UI·UX" },
      { id: "brand", label: "Marca", word: "Marca" },
      { id: "direction", label: "Direcção", word: "Direcção" },
    ],
    disciplines: ["Design de Produto", "UI/UX", "Identidade de Marca", "Direcção Criativa", "Sistemas Visuais", "Editorial", "Motion"],
    cta: "Ver serviços",
    cta2: "Casos de estudo",
  },
  about: {
    label: "Sobre mim",
    title: "Director Criativo e Designer de Produto Digital",
    statement: "Simplicidade e elegância — o único caminho para a clareza, o impacto e soluções que sobrevivem à moda.",
    body: [
      "Conhecido como o Mushin Designer, abordo cada projecto com criatividade guiada pelo equilíbrio do Yin e Yang — harmonia entre forças contrárias que trabalham juntas.",
      "O design é mais do que estética. É uma ferramenta de ligação, inspiração, criação de valor, comunicação, impacto emocional e experiências com significado.",
    ],
    metrics: [
      { value: "8+", label: "Anos de experiência" },
      { value: "50+", label: "Projectos" },
    ],
    resume: "Descarregar CV",
  },
  experience: { label: "Experiência", title: "A minha experiência profissional" },
  skills: { label: "Competências", title: "Melhores competências" },
  work: {
    label: "Trabalho seleccionado",
    title: "Trabalhos em destaque",
    intro: "Uma selecção dos últimos oito anos: produtos, identidades e sistemas editoriais construídos com intenção.",
    soon: "Em breve",
    soonBody: "Os casos de estudo mais recentes estão a ser preparados. Enquanto a montra online é finalizada, o portfólio completo está disponível como livro interactivo.",
    bookLabel: "Portfólio interactivo",
    bookNote: "Livro interactivo · {size} · só carrega quando aberto, para manter o site rápido.",
    open: "Abrir portfólio",
    download: "Descarregar portfólio",
  },
  services: {
    label: "Serviços",
    title: "Os meus serviços",
    items: [
      { n: "I", title: "Design de Produto Digital", body: "Desenho de produtos e experiências digitais com foco em clareza, usabilidade e valor intencional." },
      { n: "II", title: "Design UI / UX", body: "Interfaces e experiências que equilibram funcionalidade, qualidade visual e facilidade de uso." },
      { n: "III", title: "Design de Websites", body: "Websites e experiências digitais com direcção visual forte, estrutura e usabilidade." },
      { n: "IV", title: "Identidade de Marca", body: "Identidades visuais que comunicam posicionamento, carácter e valor de forma consistente." },
      { n: "V", title: "Direcção Criativa", body: "Definição e orientação da visão criativa em marcas, produtos e sistemas de comunicação." },
      { n: "VI", title: "Design para Redes Sociais", body: "Sistemas visuais e conteúdo pensados para uma comunicação digital consistente e profissional." },
    ],
  },
  process: {
    label: "Processo",
    title: "Um caminho, não uma fórmula.",
    steps: [
      { n: "01", title: "Descobrir", line: "Ouvir antes de desenhar. Mapear o terreno.", body: "Perceber o contexto, os objectivos, as necessidades e as oportunidades antes de começar a exploração visual." },
      { n: "02", title: "Pesquisar", line: "Evidência acima de opinião. Insight acima de dados.", body: "Explorar o problema, o público, o mercado e a evidência disponível para construir uma direcção informada." },
      { n: "03", title: "Estratégia", line: "Escolher a única batalha que vale a pena vencer.", body: "Definir prioridades e identificar o desafio ou a oportunidade mais importante a resolver." },
      { n: "04", title: "Desenhar", line: "Compor, editar, editar outra vez. Remover até respirar.", body: "Desenvolver, refinar e simplificar a solução visual e funcional até atingir clareza." },
      { n: "05", title: "Prototipar", line: "Tornar real o suficiente para se sentir.", body: "Transformar ideias em experiências tangíveis que podem ser exploradas, testadas e compreendidas." },
      { n: "06", title: "Lançar", line: "Entregar com intenção. Medir. Voltar.", body: "Entregar o trabalho, observar o seu desempenho e voltar ao processo quando for preciso refinar." },
    ],
  },
  manifesto: { line1: "Bom design não é o que as pessoas vêem.", line2: "É o que as pessoas sentem.", by: "Mushin Designer" },
  voices: {
    label: "Vozes",
    title: "Testemunhos",
    items: [
      { quote: "Um design moderno, profissional e exactamente o que precisávamos. Rapidez, qualidade e atenção ao detalhe. Recomendo este trabalho.", name: "Yuran Chiziane", role: "CEO, Great Holding" },
      { quote: "A transformação da nossa imagem e comunicação fortaleceu a nossa marca. Criatividade, profissionalismo e soluções que dão resultados.", name: "Farido Aly", role: "Country Manager, Techdrilling" },
    ],
    trusted: "Confiam em mim",
  },
  lab: {
    label: "Laboratório visual",
    title: "Um pequeno museu de experiências.",
    soon: "Em breve",
    body: "Novas experiências estão em preparação. O Laboratório Visual é um pequeno museu em curadoria, com novos estudos planeados para publicação.",
  },
  contact: {
    label: "Contacto",
    title: "Vamos criar algo com significado.",
    openTo: "Aberto a",
    focus: ["Parcerias de produto", "Sistemas de marca", "Direcção criativa", "Colaborações selectivas"],
    fields: { name: "Nome", email: "Email", project: "Projecto", projectPlaceholder: "O que vamos construir, e até quando?" },
    send: "Enviar pedido",
    sent: "A abrir a sua aplicação de email — se nada acontecer, escreva para {email}.",
    channels: "Canais",
  },
  footer: { rights: "© {year} Mushin Designer", crafted: "Feito em silêncio.", location: "Maputo, Moçambique" },
};

export const content: Record<Lang, Content> = { en, pt };
export const langHome = (lang: Lang) => (lang === "en" ? "/" : "/pt");
