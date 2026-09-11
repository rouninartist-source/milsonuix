import { img } from "./site";
import type { L } from "./i18n";

export type Project = {
  slug: string;
  title: string;
  client: string | L;
  year: string;
  category: "brand" | "product" | "motion";
  categoryLabel: L;
  role: L;
  services: L<string[]>;
  summary: L;
  intro: L;
  cover: string;
  sections: { label: L; text: L; images: string[] }[];
};

const BRIEF: L = { en: "Brief", pt: "Briefing" };
const APPROACH: L = { en: "Approach", pt: "Abordagem" };
const OUTCOME: L = { en: "Outcome", pt: "Resultado" };
const BRAND: L = { en: "Brand identity", pt: "Identidade de marca" };
const PRODUCT: L = { en: "Product design", pt: "Design de produto" };
const MOTION: L = { en: "Motion & video", pt: "Motion & vídeo" };

export const projects: Project[] = [
  {
    slug: "quota",
    title: "Quota",
    client: "Quota Studio",
    year: "2026",
    category: "product",
    categoryLabel: PRODUCT,
    role: { en: "Product designer & front-end", pt: "Designer de produto & front-end" },
    services: { en: ["UX research", "Design system", "UI design", "Front-end"], pt: ["Pesquisa UX", "Design system", "UI design", "Front-end"] },
    summary: {
      en: "Invoicing that Mozambican SMEs actually finish — quotes, invoices and receipts sent over WhatsApp.",
      pt: "Facturação que as PMEs moçambicanas realmente terminam — cotações, facturas e recibos enviados pelo WhatsApp.",
    },
    intro: {
      en: "Small businesses in Maputo were quoting on paper and chasing payments by phone. Quota turns that into a two-minute flow: pick a client, add lines, send the PDF to WhatsApp, get paid on M-Pesa.",
      pt: "As pequenas empresas de Maputo cotavam em papel e cobravam por telefone. O Quota transforma isso num fluxo de dois minutos: escolher o cliente, adicionar linhas, enviar o PDF pelo WhatsApp, receber por M-Pesa.",
    },
    cover: img("quota-cover", 1600, 1000),
    sections: [
      { label: BRIEF, text: { en: "Replace paper and spreadsheets without asking owners to learn accounting. Every screen had to fit on a phone held in one hand, in Portuguese, with IVA handled automatically.", pt: "Substituir papel e folhas de cálculo sem pedir aos donos que aprendam contabilidade. Cada ecrã tinha de caber num telemóvel numa só mão, em português, com o IVA tratado automaticamente." }, images: [img("quota-1", 1600, 1000)] },
      { label: APPROACH, text: { en: "A single 'bench' screen where the document builds itself as you type, a live preview that is the printed PDF, and templates the business can pick without a designer. No page ever scrolls on desktop — everything the owner needs is in view.", pt: "Um único ecrã 'bancada' onde o documento se constrói à medida que se escreve, uma pré-visualização que é o PDF impresso, e templates que a empresa escolhe sem designer. Nenhuma página faz scroll no desktop — tudo o que o dono precisa está à vista." }, images: [img("quota-2", 1200, 1500), img("quota-3", 1200, 1500)] },
      { label: OUTCOME, text: { en: "Shipped as a multi-tenant SaaS with self-service signup. First clients on-boarded from the landing page alone.", pt: "Entregue como SaaS multi-empresa com registo self-service. Primeiros clientes a entrar só a partir da landing page." }, images: [img("quota-4", 1600, 900)] },
    ],
  },
  {
    slug: "kanimambo",
    title: "Kanimambo Coffee",
    client: "Kanimambo",
    year: "2025",
    category: "brand",
    categoryLabel: BRAND,
    role: { en: "Creative director", pt: "Director criativo" },
    services: { en: ["Strategy", "Identity", "Packaging", "Art direction"], pt: ["Estratégia", "Identidade", "Embalagem", "Direcção de arte"] },
    summary: { en: "A specialty coffee brand from Gurué given the confidence to sit next to any roaster in Lisbon or Cape Town.", pt: "Uma marca de café de especialidade do Gurué com a confiança para estar ao lado de qualquer torrefactor em Lisboa ou na Cidade do Cabo." },
    intro: { en: "Kanimambo means thank you. The identity had to carry that warmth without becoming folksy — a wordmark with real weight and a colour system pulled from the roast itself.", pt: "Kanimambo significa obrigado. A identidade tinha de levar esse calor sem cair no folclórico — um logótipo com peso real e um sistema de cor tirado da própria torra." },
    cover: img("kanimambo-cover", 1600, 1000),
    sections: [
      { label: BRIEF, text: { en: "Move from a local favourite to an export-ready brand without losing the origin story.", pt: "Passar de favorito local a marca pronta para exportar sem perder a história de origem." }, images: [img("kan-1", 1600, 1000)] },
      { label: APPROACH, text: { en: "Condensed wordmark, a single accent colour per origin, and packaging that photographs well on a phone — because that is where it gets discovered.", pt: "Logótipo condensado, uma cor de destaque por origem, e embalagem que fotografa bem no telemóvel — porque é aí que é descoberta." }, images: [img("kan-2", 1200, 1500), img("kan-3", 1200, 1500)] },
      { label: OUTCOME, text: { en: "Full identity system, packaging range and launch campaign delivered in eight weeks.", pt: "Sistema de identidade completo, gama de embalagens e campanha de lançamento entregues em oito semanas." }, images: [img("kan-4", 1600, 900)] },
    ],
  },
  {
    slug: "maputo-transit",
    title: "Maputo Transit",
    client: { en: "Municipal pilot", pt: "Piloto municipal" },
    year: "2024",
    category: "product",
    categoryLabel: PRODUCT,
    role: { en: "Lead UX designer", pt: "Designer UX principal" },
    services: { en: ["Research", "Service design", "Mobile UI", "Wayfinding"], pt: ["Pesquisa", "Design de serviço", "UI mobile", "Sinalética"] },
    summary: { en: "Real-time chapa and bus information for a city that never had a timetable.", pt: "Informação em tempo real de chapas e autocarros para uma cidade que nunca teve horário." },
    intro: { en: "Commuters were relying on word of mouth. We designed an app and a matching wayfinding system so the information on the pole matches the one on the phone.", pt: "Os passageiros dependiam do boca-a-boca. Desenhámos uma app e um sistema de sinalética a condizer, para que a informação no poste seja a mesma do telemóvel." },
    cover: img("transit-cover", 1600, 1000),
    sections: [
      { label: BRIEF, text: { en: "Give riders a reason to trust the schedule — on cheap Android phones, on 2G, in sunlight.", pt: "Dar aos passageiros uma razão para confiar no horário — em Androids baratos, em 2G, ao sol." }, images: [img("tr-1", 1600, 1000)] },
      { label: APPROACH, text: { en: "High contrast, big type, offline-first. Every route got a colour and a number that repeats on stops, vehicles and the app.", pt: "Alto contraste, tipo grande, offline primeiro. Cada rota ganhou uma cor e um número que se repete nas paragens, nos veículos e na app." }, images: [img("tr-2", 1200, 1500), img("tr-3", 1200, 1500)] },
      { label: OUTCOME, text: { en: "Pilot on three corridors; stop signage adopted city-wide.", pt: "Piloto em três corredores; sinalética de paragens adoptada em toda a cidade." }, images: [img("tr-4", 1600, 900)] },
    ],
  },
  {
    slug: "indico",
    title: "Índico Studio",
    client: "Índico",
    year: "2025",
    category: "motion",
    categoryLabel: MOTION,
    role: { en: "Director & motion designer", pt: "Realizador & motion designer" },
    services: { en: ["Brand film", "Motion system", "Web"], pt: ["Filme de marca", "Sistema de motion", "Web"] },
    summary: { en: "A brand film and motion language for an architecture studio that builds with the ocean in mind.", pt: "Um filme de marca e uma linguagem de motion para um atelier de arquitectura que constrói a pensar no oceano." },
    intro: { en: "Architecture is slow; film is fast. The job was to make the studio's patience feel like a strength — long takes, one typeface, the sound of the tide.", pt: "A arquitectura é lenta; o filme é rápido. O trabalho foi fazer da paciência do atelier uma força — planos longos, uma tipografia, o som da maré." },
    cover: img("indico-cover", 1600, 1000),
    sections: [
      { label: BRIEF, text: { en: "Launch the studio's new positioning with something people would actually watch to the end.", pt: "Lançar o novo posicionamento do atelier com algo que as pessoas vissem mesmo até ao fim." }, images: [img("in-1", 1600, 1000)] },
      { label: APPROACH, text: { en: "Three-minute film, a set of loopable motion assets for the site and social, and type animation rules the studio can reuse.", pt: "Filme de três minutos, um conjunto de assets de motion em loop para o site e redes, e regras de animação tipográfica que o atelier pode reutilizar." }, images: [img("in-2", 1200, 1500), img("in-3", 1200, 1500)] },
      { label: OUTCOME, text: { en: "Film, motion toolkit and a new website shipped together.", pt: "Filme, toolkit de motion e novo website entregues em conjunto." }, images: [img("in-4", 1600, 900)] },
    ],
  },
  {
    slug: "lusa-health",
    title: "Lusa Health",
    client: "Lusa Health",
    year: "2024",
    category: "product",
    categoryLabel: PRODUCT,
    role: { en: "Product designer", pt: "Designer de produto" },
    services: { en: ["Design system", "Patient app", "Clinician dashboard"], pt: ["Design system", "App de paciente", "Painel clínico"] },
    summary: { en: "A patient app and clinician dashboard that speak the same visual language.", pt: "Uma app de paciente e um painel clínico que falam a mesma linguagem visual." },
    intro: { en: "Two audiences, one product. The patient side needed calm; the clinician side needed density. A shared design system kept them siblings, not strangers.", pt: "Dois públicos, um produto. O lado do paciente precisava de calma; o lado clínico precisava de densidade. Um design system partilhado manteve-os irmãos, não estranhos." },
    cover: img("lusa-cover", 1600, 1000),
    sections: [
      { label: BRIEF, text: { en: "Unify three inherited interfaces into one product family.", pt: "Unificar três interfaces herdadas numa só família de produto." }, images: [img("lu-1", 1600, 1000)] },
      { label: APPROACH, text: { en: "Tokens first, then components, then screens. Accessibility audited at every step.", pt: "Primeiro tokens, depois componentes, depois ecrãs. Acessibilidade auditada a cada passo." }, images: [img("lu-2", 1200, 1500), img("lu-3", 1200, 1500)] },
      { label: OUTCOME, text: { en: "Design system in Figma with coded components; both apps relaunched on it.", pt: "Design system em Figma com componentes em código; ambas as apps relançadas sobre ele." }, images: [img("lu-4", 1600, 900)] },
    ],
  },
  {
    slug: "beira-port",
    title: "Porto da Beira",
    client: { en: "Port authority", pt: "Autoridade portuária" },
    year: "2023",
    category: "brand",
    categoryLabel: BRAND,
    role: { en: "Brand designer", pt: "Designer de marca" },
    services: { en: ["Identity", "Signage", "Annual report"], pt: ["Identidade", "Sinalética", "Relatório anual"] },
    summary: { en: "A century-old port given an identity as solid as its cranes.", pt: "Um porto centenário com uma identidade tão sólida como os seus guindastes." },
    intro: { en: "Heavy industry, but a public institution. The identity leans on structure — a grid, a bold mark, and a report that people actually read.", pt: "Indústria pesada, mas instituição pública. A identidade apoia-se na estrutura — uma grelha, uma marca forte e um relatório que as pessoas realmente lêem." },
    cover: img("beira-cover", 1600, 1000),
    sections: [
      { label: BRIEF, text: { en: "Modernise without erasing a hundred years of history.", pt: "Modernizar sem apagar cem anos de história." }, images: [img("be-1", 1600, 1000)] },
      { label: APPROACH, text: { en: "A mark drawn from the crane silhouette; a typographic system that works on a hard hat and a 200-page report.", pt: "Uma marca desenhada a partir da silhueta do guindaste; um sistema tipográfico que funciona num capacete e num relatório de 200 páginas." }, images: [img("be-2", 1200, 1500), img("be-3", 1200, 1500)] },
      { label: OUTCOME, text: { en: "Identity, signage and the 2023 annual report.", pt: "Identidade, sinalética e o relatório anual de 2023." }, images: [img("be-4", 1600, 900)] },
    ],
  },
];
