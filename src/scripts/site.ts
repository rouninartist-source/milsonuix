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

/* ─── Hero: "Watch my work on" pills switch the giant strip + backdrop ─── */
{
  const hero = $<HTMLElement>("[data-hero]");
  if (hero) {
    const pills = $$<HTMLButtonElement>("[data-topic]", hero);
    const words = $$<HTMLElement>("[data-word]", hero);
    const images = $$<HTMLImageElement>("[data-backdrop]", hero);
    const clock = $<HTMLElement>("[data-clock]", hero);
    const durations: Record<string, number> = { brand: 83, product: 96, motion: 71 };
    let active: string | null = null;
    let elapsed = 0;
    let timer: number | undefined;

    const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
    const render = () => {
      hero.classList.toggle("is-playing", !!active);
      hero.dataset.topic = active ?? "";
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
      if (clock) clock.textContent = active ? `${fmt(elapsed)} / ${fmt(durations[active])}` : "";
    };
    const stop = () => {
      clearInterval(timer);
      active = null;
      elapsed = 0;
      render();
    };
    const play = (topic: string) => {
      clearInterval(timer);
      active = topic;
      elapsed = 0;
      render();
      timer = window.setInterval(() => {
        elapsed += 1;
        if (elapsed >= durations[topic]) stop();
        else render();
      }, 1000);
    };
    pills.forEach((p) => p.addEventListener("click", () => (p.dataset.topic === active ? stop() : play(p.dataset.topic!))));
    render();
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

/* ─── Work filter: chips filter cards by category, URL keeps ?f= ─── */
{
  const filter = $<HTMLElement>("[data-filter]");
  if (filter) {
    const chips = $$<HTMLButtonElement>("[data-f]", filter);
    const cards = $$<HTMLElement>("[data-category]");
    const count = $<HTMLElement>("[data-count]");
    const apply = (f: string) => {
      chips.forEach((c) => c.classList.toggle("is-active", c.dataset.f === f));
      let n = 0;
      cards.forEach((c) => {
        const show = f === "all" || c.dataset.category === f;
        c.hidden = !show;
        if (show) n++;
      });
      if (count) count.textContent = String(n).padStart(2, "0");
      const url = new URL(location.href);
      f === "all" ? url.searchParams.delete("f") : url.searchParams.set("f", f);
      history.replaceState(null, "", url);
    };
    chips.forEach((c) => c.addEventListener("click", () => apply(c.dataset.f!)));
    const initial = new URL(location.href).searchParams.get("f");
    apply(chips.some((c) => c.dataset.f === initial) ? initial! : "all");
  }
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

/* ─── Newsletter: placeholder until an endpoint exists ─── */
{
  $$<HTMLFormElement>("[data-subscribe]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("is-done");
      const ok = $<HTMLElement>("[data-sent]", form);
      if (ok) ok.hidden = false;
      form.reset();
    });
  });
}
