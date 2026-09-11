import { img } from "./site";

export type Post = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  cover: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "mediocrity-is-a-choice",
    title: "Mediocrity is a choice — and so is the alternative",
    tag: "Insights",
    date: "2026-08-12",
    cover: img("post-1", 1200, 1500),
    excerpt: "Most 'fine' work is the result of nobody deciding it should be better. Here's how I decide.",
    body: [
      "Every project has a moment where it is good enough. Good enough to ship, good enough to invoice, good enough that nobody will complain. That moment is where most work stops.",
      "The difference between fine and memorable is rarely talent. It is one more round — the one where you ask what the piece would look like if it had to be the only thing you're remembered for.",
      "I try to build that round into the schedule instead of stealing it from sleep. Clients notice. So do their customers.",
    ],
  },
  {
    slug: "designing-for-2g",
    title: "Designing for 2G: what sunlight and cheap phones taught me",
    tag: "Process",
    date: "2026-06-03",
    cover: img("post-2", 1200, 1500),
    excerpt: "Constraints from the Maputo Transit project that made every product after it better.",
    body: [
      "If your interface works on a five-year-old Android in direct sun with one bar of signal, it works everywhere.",
      "Big type, real contrast, offline first, no spinner longer than a second. These are not accessibility extras; they are the product.",
    ],
  },
  {
    slug: "one-typeface",
    title: "The case for one typeface",
    tag: "Craft",
    date: "2026-04-21",
    cover: img("post-3", 1200, 1500),
    excerpt: "A brand with one voice sounds more confident than one with four.",
    body: [
      "A single family, used with intent, does more than a pairing chosen to look clever. Weight, size and spacing give you all the hierarchy you need.",
      "When I do add a second face, it has one job — usually the headline — and it never appears anywhere else.",
    ],
  },
  {
    slug: "ship-with-engineers",
    title: "Ship with the engineers, not at them",
    tag: "Insights",
    date: "2026-02-09",
    cover: img("post-4", 1200, 1500),
    excerpt: "Why I write front-end for the products I design, and what it changed.",
    body: [
      "Handoff is where design goes to die. The fix is not a better spec — it is being in the codebase.",
      "On Quota I built the UI I designed. The result is the design that shipped is the design that was intended, down to the pixel.",
    ],
  },
];

export const findPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
