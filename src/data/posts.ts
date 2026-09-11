import { img } from "./site";
import type { L } from "./i18n";

export type Post = {
  slug: string;
  title: L;
  tag: L;
  date: string;
  cover: string;
  excerpt: L;
  body: L<string[]>;
};

const INSIGHTS: L = { en: "Insights", pt: "Ideias" };
const PROCESS: L = { en: "Process", pt: "Processo" };
const CRAFT: L = { en: "Craft", pt: "Ofício" };

export const posts: Post[] = [
  {
    slug: "mediocrity-is-a-choice",
    title: { en: "Mediocrity is a choice — and so is the alternative", pt: "A mediocridade é uma escolha — e a alternativa também" },
    tag: INSIGHTS,
    date: "2026-08-12",
    cover: img("post-1", 1200, 1500),
    excerpt: { en: "Most 'fine' work is the result of nobody deciding it should be better. Here's how I decide.", pt: "A maior parte do trabalho 'razoável' resulta de ninguém decidir que devia ser melhor. É assim que eu decido." },
    body: {
      en: [
        "Every project has a moment where it is good enough. Good enough to ship, good enough to invoice, good enough that nobody will complain. That moment is where most work stops.",
        "The difference between fine and memorable is rarely talent. It is one more round — the one where you ask what the piece would look like if it had to be the only thing you're remembered for.",
        "I try to build that round into the schedule instead of stealing it from sleep. Clients notice. So do their customers.",
      ],
      pt: [
        "Todos os projectos têm um momento em que estão suficientemente bons. Bons para entregar, bons para facturar, bons para ninguém se queixar. É nesse momento que a maior parte do trabalho pára.",
        "A diferença entre razoável e memorável raramente é talento. É mais uma volta — aquela em que se pergunta como ficaria a peça se tivesse de ser a única coisa por que somos lembrados.",
        "Tento pôr essa volta no calendário em vez de a roubar ao sono. Os clientes notam. Os clientes deles também.",
      ],
    },
  },
  {
    slug: "designing-for-2g",
    title: { en: "Designing for 2G: what sunlight and cheap phones taught me", pt: "Desenhar para 2G: o que o sol e os telemóveis baratos me ensinaram" },
    tag: PROCESS,
    date: "2026-06-03",
    cover: img("post-2", 1200, 1500),
    excerpt: { en: "Constraints from the Maputo Transit project that made every product after it better.", pt: "Restrições do projecto Maputo Transit que tornaram melhor cada produto a seguir." },
    body: {
      en: [
        "If your interface works on a five-year-old Android in direct sun with one bar of signal, it works everywhere.",
        "Big type, real contrast, offline first, no spinner longer than a second. These are not accessibility extras; they are the product.",
      ],
      pt: [
        "Se a sua interface funciona num Android com cinco anos, ao sol directo e com uma barra de rede, funciona em qualquer lado.",
        "Tipo grande, contraste a sério, offline primeiro, nenhum spinner com mais de um segundo. Não são extras de acessibilidade; são o produto.",
      ],
    },
  },
  {
    slug: "one-typeface",
    title: { en: "The case for one typeface", pt: "A favor de uma só tipografia" },
    tag: CRAFT,
    date: "2026-04-21",
    cover: img("post-3", 1200, 1500),
    excerpt: { en: "A brand with one voice sounds more confident than one with four.", pt: "Uma marca com uma só voz soa mais confiante do que uma com quatro." },
    body: {
      en: [
        "A single family, used with intent, does more than a pairing chosen to look clever. Weight, size and spacing give you all the hierarchy you need.",
        "When I do add a second face, it has one job — usually the headline — and it never appears anywhere else.",
      ],
      pt: [
        "Uma só família, usada com intenção, faz mais do que um par escolhido para parecer inteligente. Peso, tamanho e espaçamento dão toda a hierarquia necessária.",
        "Quando acrescento uma segunda fonte, tem uma só tarefa — normalmente o título — e nunca aparece em mais lado nenhum.",
      ],
    },
  },
  {
    slug: "ship-with-engineers",
    title: { en: "Ship with the engineers, not at them", pt: "Entregar com os engenheiros, não contra eles" },
    tag: INSIGHTS,
    date: "2026-02-09",
    cover: img("post-4", 1200, 1500),
    excerpt: { en: "Why I write front-end for the products I design, and what it changed.", pt: "Porque escrevo front-end para os produtos que desenho, e o que isso mudou." },
    body: {
      en: [
        "Handoff is where design goes to die. The fix is not a better spec — it is being in the codebase.",
        "On Quota I built the UI I designed. The result is the design that shipped is the design that was intended, down to the pixel.",
      ],
      pt: [
        "O handoff é onde o design vai morrer. A solução não é uma spec melhor — é estar no código.",
        "No Quota construí a UI que desenhei. O resultado: o design que foi entregue é o que foi pensado, até ao pixel.",
      ],
    },
  },
];
