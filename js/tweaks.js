/* ============================================================
   Tweaks — live-editable controls for paper colors + typography.
   Persists via window.parent.postMessage to the host's EDITMODE block.
   ============================================================ */
(function () {
  const DEFAULTS = {
    paper:       "#ffffff",
    paper2:      "#f5f5f2",
    paperEdge:   "#e6e6e0",
    ink:         "#1a1814",
    rule:        "#dcdcd2",
    accent:      "#9c4a2b",
    bodyFont:    "outfit",
    headingFont: "karrik",
    bodySize:    16,
  };

  const PRESETS = {
    white:    { paper: "#ffffff", paper2: "#f5f5f2", paperEdge: "#e6e6e0", rule: "#dcdcd2" },
    offwhite: { paper: "#fbfaf6", paper2: "#f3f0e8", paperEdge: "#e7e3d6", rule: "#d9d4c4" },
    paper:    { paper: "#f6f1e4", paper2: "#ebe4d1", paperEdge: "#dfd6bd", rule: "#cfc4a7" },
    cream:    { paper: "#f4ecd8", paper2: "#ece2c9", paperEdge: "#ddd1b4", rule: "#c7bda3" },
  };

  const FONTS = {
    council:      "var(--font-council)",
    karrik:       "var(--font-karrik)",
    lora:         "var(--font-lora)",
    garamond:     "var(--font-garamond)",
    outfit:       "var(--font-outfit)",
    "system-serif": "var(--font-sys-serif)",
    "system-sans":  "var(--font-sys-sans)",
  };

  // --- State -----------------------------------------------------
  let state = Object.assign({}, DEFAULTS, window.__TWEAKS || {});

  // Derive paper2/paperEdge/rule from paper if the user only edits `paper`
  function deriveFromPaper(hex) {
    // Find closest preset by paper color; if none matches, just darken steps.
    // Simpler: shade the hex toward #000 by small amounts.
    const c = hexToRgb(hex);
    if (!c) return null;
    const shade = (amt) => rgbToHex({
      r: Math.max(0, Math.round(c.r * (1 - amt))),
      g: Math.max(0, Math.round(c.g * (1 - amt))),
      b: Math.max(0, Math.round(c.b * (1 - amt))),
    });
    return { paper2: shade(0.05), paperEdge: shade(0.10), rule: shade(0.16) };
  }
  function hexToRgb(h) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
    return m ? { r: parseInt(m[1],16), g: parseInt(m[2],16), b: parseInt(m[3],16) } : null;
  }
  function rgbToHex(c) {
    const hx = (n) => n.toString(16).padStart(2, "0");
    return "#" + hx(c.r) + hx(c.g) + hx(c.b);
  }

  function whichPreset(hex) {
    for (const [k, v] of Object.entries(PRESETS)) if (v.paper.toLowerCase() === hex.toLowerCase()) return k;
    return "custom";
  }

  // --- Apply state to DOM ---------------------------------------
  function apply() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    const root = document.documentElement.style;
    if (!dark) {
      root.setProperty("--paper",      state.paper);
      root.setProperty("--paper-2",    state.paper2);
      root.setProperty("--paper-edge", state.paperEdge);
      root.setProperty("--ink",        state.ink);
      root.setProperty("--rule",       state.rule);
      root.setProperty("--accent",     state.accent);
    } else {
      // Let [data-theme="dark"] CSS vars take effect unobstructed
      root.removeProperty("--paper");
      root.removeProperty("--paper-2");
      root.removeProperty("--paper-edge");
      root.removeProperty("--ink");
      root.removeProperty("--rule");
      root.removeProperty("--accent");
    }
    root.setProperty("--body-size",  state.bodySize + "px");
    root.setProperty("--serif",      FONTS[state.bodyFont]    || FONTS.outfit);
    root.setProperty("--display",    FONTS[state.headingFont] || FONTS.karrik);
  }
  apply();
  window.applyTweaks = apply; // let app.js call this on theme toggle

  // --- Tweaks panel wiring --------------------------------------
  const panel  = document.getElementById("tweaks-panel");
  const close  = document.getElementById("tweaks-close");
  const preset = document.getElementById("tw-preset");
  const paperI = document.getElementById("tw-paper");
  const inkI   = document.getElementById("tw-ink");
  const accI   = document.getElementById("tw-accent");
  const bFont  = document.getElementById("tw-body-font");
  const hFont  = document.getElementById("tw-head-font");
  const bSize  = document.getElementById("tw-body-size");
  const bSizeO = document.getElementById("tw-body-size-out");
  const reset  = document.getElementById("tweak-reset");

  function syncControls() {
    preset.value = whichPreset(state.paper);
    paperI.value = state.paper;
    inkI.value   = state.ink;
    accI.value   = state.accent;
    bFont.value  = state.bodyFont;
    hFont.value  = state.headingFont;
    bSize.value  = state.bodySize;
    bSizeO.textContent = state.bodySize + "px";
  }
  syncControls();

  function persist(patch) {
    Object.assign(state, patch);
    apply();
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
    } catch {}
  }

  preset.addEventListener("change", () => {
    const v = preset.value;
    if (v === "custom") return;
    const p = PRESETS[v];
    if (!p) return;
    persist(p);
    syncControls();
  });
  paperI.addEventListener("input", () => {
    const p = paperI.value;
    const d = deriveFromPaper(p) || {};
    persist(Object.assign({ paper: p }, d));
    preset.value = whichPreset(p);
  });
  inkI.addEventListener("input",  () => persist({ ink:    inkI.value  }));
  accI.addEventListener("input",  () => persist({ accent: accI.value  }));
  bFont.addEventListener("change",() => persist({ bodyFont:    bFont.value }));
  hFont.addEventListener("change",() => persist({ headingFont: hFont.value }));
  bSize.addEventListener("input", () => {
    persist({ bodySize: +bSize.value });
    bSizeO.textContent = bSize.value + "px";
  });
  reset.addEventListener("click", () => {
    persist(DEFAULTS);
    syncControls();
  });
  close.addEventListener("click", () => {
    panel.hidden = true;
    try { window.parent.postMessage({ type: "__deactivate_edit_mode_ack" }, "*"); } catch {}
  });

  // --- Host protocol (edit-mode toggle) --------------------------
  window.addEventListener("message", (e) => {
    const d = e.data || {};
    if (d.type === "__activate_edit_mode")    panel.hidden = false;
    if (d.type === "__deactivate_edit_mode")  panel.hidden = true;
  });

  // Announce after the listener is live.
  try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch {}
})();
