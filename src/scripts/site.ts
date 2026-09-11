/**
 * All client behaviour for the site. Each block is independent and only runs
 * when its markup exists, so pages pay for nothing they don't use.
 */
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

/* ─── Menu ─── */
{
  const menu = $<HTMLElement>("#menu");
  const toggles = $$<HTMLButtonElement>("[data-menu-toggle]");
  if (menu && toggles.length) {
    const set = (open: boolean) => {
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
      menu.toggleAttribute("inert", !open);
      document.body.classList.toggle("menu-open", open);
      toggles.forEach((t) => t.setAttribute("aria-expanded", String(open)));
      if (open) $<HTMLElement>(".menu__close", menu)?.focus();
      else toggles[0].focus();
    };
    toggles.forEach((t) => t.addEventListener("click", () => set(!menu.classList.contains("is-open"))));
    $$<HTMLAnchorElement>("[data-menu-close]", menu).forEach((a) => a.addEventListener("click", () => set(false)));
    addEventListener("keydown", (e) => e.key === "Escape" && menu.classList.contains("is-open") && set(false));
  }
}

/* ─── Scroll reveal ─── */
{
  const els = $$<HTMLElement>("[data-reveal]");
  if (els.length) {
    if (reduced || !("IntersectionObserver" in window)) els.forEach((el) => el.classList.add("is-in"));
    else {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-in");
              io.unobserve(en.target);
            }
          }),
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
      );
      els.forEach((el) => io.observe(el));
    }
  }
}

/* ─── Progressive statement: words brighten as they cross the viewport centre ─── */
{
  const blocks = $$<HTMLElement>(".fade-words");
  if (blocks.length) {
    blocks.forEach((b) => {
      const words = (b.textContent ?? "").trim().split(/\s+/);
      b.innerHTML = words.map((w) => `<span>${w}</span>`).join(" ");
    });
    const spans = $$<HTMLSpanElement>(".fade-words span");
    let ticking = false;
    const update = () => {
      ticking = false;
      const focus = innerHeight * 0.55;
      spans.forEach((s) => {
        const r = s.getBoundingClientRect();
        const d = r.top + r.height / 2 - focus;
        // fully lit within 60px of the focus line, then fades over ~280px below it
        const o = d < 60 ? 1 : Math.max(0.18, 1 - (d - 60) / 280);
        s.style.setProperty("--o", o.toFixed(2));
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    if (reduced) spans.forEach((s) => s.style.setProperty("--o", "1"));
    else {
      addEventListener("scroll", onScroll, { passive: true });
      addEventListener("resize", onScroll);
      update();
    }
  }
}

/* ─── Hero: discipline pills switch the giant strip + backdrop ─── */
{
  const hero = $<HTMLElement>("[data-hero]");
  if (hero) {
    const pills = $$<HTMLButtonElement>("[data-topic]", hero);
    const words = $$<HTMLElement>("[data-word]", hero);
    const images = $$<HTMLImageElement>("[data-backdrop]", hero);
    let active: string | null = null;
    const render = () => {
      hero.classList.toggle("is-playing", !!active);
      pills.forEach((p) => {
        const on = p.dataset.topic === active;
        p.classList.toggle("is-active", on);
        p.setAttribute("aria-pressed", String(on));
        // SVG elements have no `.hidden` property — toggle the attribute
        $(".pill__play", p)?.toggleAttribute("hidden", on);
        $(".pill__pause", p)?.toggleAttribute("hidden", !on);
      });
      words.forEach((w) => w.classList.toggle("is-active", w.dataset.word === active));
      images.forEach((i) => i.classList.toggle("is-active", (i.dataset.backdrop || null) === active));
    };
    pills.forEach((p) =>
      p.addEventListener("click", () => {
        active = p.dataset.topic === active ? null : p.dataset.topic!;
        render();
      }),
    );
    render();
  }
}

/* ─── Scroll-spy: highlight the menu entry for the section in view ─── */
{
  const links = $$<HTMLAnchorElement>("[data-spy]");
  const sections = $$<HTMLElement>("[data-spy-section]");
  if (links.length && sections.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((l) => l.classList.toggle("is-active", l.dataset.spy === en.target.id));
        }),
      { rootMargin: "-40% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
  }
}

/* ─── Tab groups (pillars, story timeline): [data-tabs] > [data-tab=id] / [data-panel=id] ─── */
{
  $$<HTMLElement>("[data-tabs]").forEach((group) => {
    const tabs = $$<HTMLButtonElement>("[data-tab]", group);
    const panels = $$<HTMLElement>("[data-panel]", group);
    const bar = $<HTMLElement>("[data-progress]", group);
    const select = (id: string) => {
      tabs.forEach((t, i) => {
        const on = t.dataset.tab === id;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", String(on));
        // everything up to and including the active step counts as "reached"
        t.classList.toggle("is-reached", i <= tabs.findIndex((x) => x.dataset.tab === id));
      });
      panels.forEach((p) => {
        const on = p.dataset.panel === id;
        p.classList.toggle("is-active", on);
        p.hidden = !on;
      });
      if (bar) {
        const idx = tabs.findIndex((t) => t.dataset.tab === id);
        bar.style.setProperty("--p", tabs.length > 1 ? String(idx / (tabs.length - 1)) : "1");
      }
      group.dataset.active = id;
    };
    tabs.forEach((t) => t.addEventListener("click", () => select(t.dataset.tab!)));
    select(group.dataset.active || tabs[0]?.dataset.tab || "");
  });
}

/* ─── Contact form: no backend yet — compose a mail from the fields ─── */
{
  const form = $<HTMLFormElement>("[data-contact]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const to = form.dataset.contact!;
      const kinds = d.getAll("kind").join(", ") || "Not specified";
      const subject = `New project — ${d.get("name")}`;
      const body = [`Name: ${d.get("name")}`, `Email: ${d.get("email")}`, `Project: ${kinds}`, "", String(d.get("message") ?? "")].join("\n");
      location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const ok = $<HTMLElement>("[data-sent]", form);
      if (ok) ok.hidden = false;
    });
  }
}
