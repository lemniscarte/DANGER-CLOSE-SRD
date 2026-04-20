// Main app bootstrap — router, chapter loader, renderer glue, theme toggle, squad pad, heading anchor copy.
(function () {
  const contentEl = document.getElementById("content");
  const navEl = document.getElementById("nav");
  const sidebarEl = document.getElementById("sidebar");
  const backdropEl = document.getElementById("sidebar-backdrop");
  const themeBtn = document.getElementById("theme-toggle");
  const menuBtn = document.getElementById("menu-btn");
  const chapterTitleEl = document.getElementById("mobile-chapter");

  // ---- Theme ----
  const savedTheme = localStorage.getItem("dcsrd.theme") || "light";
  if (savedTheme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  updateThemeBtn();
  themeBtn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    if (next === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("dcsrd.theme", next);
    updateThemeBtn();
    if (window.applyTweaks) window.applyTweaks();
  });
  function updateThemeBtn() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    themeBtn.innerHTML = dark ? "☀ Light mode" : "☾ Dark mode";
  }

  // ---- Nav rendering ----
  let lastSubs = [];
  function renderNav(activeId, activeAnchor, subheadings = []) {
    const items = [];
    let n = 0;
    for (const entry of window.TOC) {
      if (entry.group) {
        items.push(`<div class="nav-group"><div class="nav-group-title">${entry.group}</div><ul class="nav-list" data-group></ul></div>`);
        continue;
      }
      n++;
      const num = String(n).padStart(2, "0");
      const active = entry.id === activeId;
      const placeholderCls = entry.placeholder ? " placeholder" : "";
      let subHtml = "";
      if (active && subheadings.length) {
        subHtml = `<ul class="nav-sub">${subheadings.map(s =>
          `<li class="${activeAnchor === s.id ? "active" : ""}"><a href="#${entry.id}/${s.id}">${s.text}</a></li>`
        ).join("")}</ul>`;
      }
      items.push({
        group: true,
        html: `<li class="nav-item${active ? " active" : ""}${placeholderCls}"><a href="#${entry.id}"><span class="nav-num">${num}</span>${entry.title}</a>${subHtml}</li>`
      });
    }
    // Build DOM
    navEl.innerHTML = "";
    let curList = null;
    for (const entry of window.TOC) {
      if (entry.group) {
        const wrap = document.createElement("div");
        wrap.className = "nav-group";
        wrap.innerHTML = `<div class="nav-group-title">${entry.group}</div>`;
        curList = document.createElement("ul");
        curList.className = "nav-list";
        wrap.appendChild(curList);
        navEl.appendChild(wrap);
      } else {
        const item = items.find(x => x && x.html && x.html.includes(`#${entry.id}"`));
        if (curList && item) curList.insertAdjacentHTML("beforeend", item.html);
      }
    }
  }

  // ---- Markdown cache ----
  const cache = {};
  async function loadChapter(id) {
    const entry = window.TOC.find(e => e.id === id);
    if (!entry) return null;
    if (entry.placeholder) {
      return { placeholder: true, title: entry.title };
    }
    if (cache[id]) return cache[id];
    try {
      const res = await fetch(entry.file);
      if (!res.ok) throw new Error("fetch failed " + res.status);
      const md = await res.text();
      const { html, headings } = window.renderMarkdown(md);
      cache[id] = { html, headings, title: entry.title };
      return cache[id];
    } catch (e) {
      return { error: e.message, title: entry.title };
    }
  }

  // ---- Routing ----
  function parseHash() {
    const h = location.hash.replace(/^#/, "");
    if (!h) return { id: window.TOC.find(e => !e.group)?.id, anchor: null };
    const [id, anchor] = h.split("/");
    return { id, anchor: anchor || null };
  }

  async function render() {
    const { id, anchor } = parseHash();
    const entry = window.TOC.find(e => e.id === id);
    if (!entry) { contentEl.innerHTML = "<p>Not found.</p>"; return; }

    const data = await loadChapter(id);
    if (!data) { contentEl.innerHTML = "<p>Not found.</p>"; return; }

    if (data.placeholder) {
      contentEl.innerHTML = `
        <div class="chapter-chyron">${getChapterNumber(id)}</div>
        <h1>${data.title}</h1>
        <div class="placeholder-page">
          <div class="stamp">CLASSIFIED</div>
          <p>This chapter of the SRD is not yet transcribed. Drop a markdown file at <code>chapters/${id}.md</code> and update <code>js/toc.js</code> to light it up.</p>
        </div>`;
      renderNav(id, null, []);
      updateMobileTitle(data.title);
      return;
    }
    if (data.error) {
      contentEl.innerHTML = `<h1>${data.title}</h1><p style="color: var(--accent)">Failed to load chapter: ${data.error}</p>`;
      return;
    }

    const chapterNum = getChapterNumber(id);
    contentEl.innerHTML = `<div class="chapter-chyron">${chapterNum}</div>${data.html}`;
    updateMobileTitle(data.title);

    // Nav sub-headings (h2 only)
    const subs = data.headings.filter(h => h.level === 2);
    renderNav(id, anchor, subs);
    wireContent();

    // Jump to anchor
    if (anchor) {
      const target = document.getElementById(anchor);
      if (target) {
        setTimeout(() => {
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 20, behavior: "instant" });
        }, 0);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // Close mobile nav
    sidebarEl.classList.remove("open");
    backdropEl.classList.remove("show");
  }

  function getChapterNumber(id) {
    let n = 0;
    for (const e of window.TOC) {
      if (e.group) continue;
      n++;
      if (e.id === id) return `Chapter ${String(n).padStart(2, "0")}`;
    }
    return "";
  }

  function updateMobileTitle(t) {
    if (chapterTitleEl) chapterTitleEl.textContent = t;
  }

  // ---- Content wiring ----
  function wireContent() {
    // Tooltips
    window.initTooltips(contentEl);

    // Inline rollers
    contentEl.querySelectorAll(".roller-inline").forEach(btn => {
      btn.addEventListener("click", () => {
        const formula = btn.getAttribute("data-roll");
        const result = window.rollDice(formula);
        btn.classList.add("rolled");
        const existing = btn.querySelector(".result");
        if (existing) existing.remove();
        const span = document.createElement("span");
        span.className = "result";
        const detail = result.kind ? ` (${result.rolls.join(",")})` : "";
        span.textContent = `= ${result.total}${detail}`;
        btn.appendChild(span);
      });
    });

    // Table rollers — roll dice and highlight matching row
    contentEl.querySelectorAll(".table-wrap").forEach(wrap => {
      const btn = wrap.querySelector(".roller-table");
      if (!btn) return;
      const resultEl = wrap.querySelector(".roll-result");
      btn.addEventListener("click", () => {
        const formula = btn.getAttribute("data-roll");
        const r = window.rollDice(formula);
        const rows = wrap.querySelectorAll("tbody tr");
        rows.forEach(tr => tr.classList.remove("highlight"));
        // Match by first cell (supports "3", "2–3", "1-3", "≤3", "11+")
        const match = Array.from(rows).find(tr => cellMatches(tr.getAttribute("data-key") || "", r.total));
        if (match) match.classList.add("highlight");
        resultEl.innerHTML = `Rolled <span class="hit">${r.total}</span> <span style="color: var(--ink-mute)">(${r.rolls.join(", ")})</span>${match ? " → " + match.querySelector("td:nth-child(2)")?.textContent.trim().split(".")[0] : ""}`;
      });
    });

    // Heading anchor copy
    contentEl.querySelectorAll(".heading-anchor").forEach(a => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const id = a.getAttribute("href").replace(/^#/, "");
        const { id: chapterId } = parseHash();
        const url = location.origin + location.pathname + "#" + chapterId + "/" + id;
        try { navigator.clipboard.writeText(url); } catch {}
        history.replaceState(null, "", "#" + chapterId + "/" + id);
        a.classList.add("copied");
        setTimeout(() => a.classList.remove("copied"), 1200);
      });
    });
  }

  function cellMatches(key, n) {
    if (!key) return false;
    const k = key.replace(/[–—]/g, "-").replace(/\s/g, "");
    if (k === String(n)) return true;
    const range = k.match(/^(\d+)-(\d+)$/);
    if (range) return n >= +range[1] && n <= +range[2];
    const le = k.match(/^[≤<=]+(\d+)$/);
    if (le) return n <= +le[1];
    const ge = k.match(/^(\d+)\+$/);
    if (ge) return n >= +ge[1];
    return false;
  }

  // ---- Mobile menu ----
  menuBtn?.addEventListener("click", () => {
    sidebarEl.classList.toggle("open");
    backdropEl.classList.toggle("show");
  });
  backdropEl?.addEventListener("click", () => {
    sidebarEl.classList.remove("open");
    backdropEl.classList.remove("show");
  });

  // Squad pad removed.

  // ---- Init ----
  window.addEventListener("hashchange", render);
  if (!location.hash) {
    const first = window.TOC.find(e => !e.group);
    if (first) location.hash = "#" + first.id;
  }
  render();
})();
