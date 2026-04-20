// Markdown renderer tuned for the DANGER CLOSE SRD.
// Supports headings, paragraphs, bold/italic, inline code, links, unordered/ordered lists,
// blockquotes (incl. > [!tip] callouts), pipe tables with inline rollers auto-detected,
// custom [[term]] glossary links and {roll:...|label} inline rollers.
//
// Not a general-purpose MD parser — just what we need.

(function () {
  const escapeHtml = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const slugify = (s) =>
    String(s).toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");

  window.slugify = slugify;

  // --- inline pass ---
  function renderInline(text) {
    // Protect code spans first
    const codes = [];
    text = text.replace(/`([^`]+)`/g, (_, c) => {
      codes.push(c);
      return `\u0000CODE${codes.length - 1}\u0000`;
    });

    text = escapeHtml(text);

    // Links [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const safe = href.replace(/"/g, "%22");
      return `<a href="${safe}" target="_blank" rel="noopener">${label}</a>`;
    });

    // [[Term]] or [[Term|Display]]
    text = text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, term, display) => {
      const label = display || term;
      return `<span class="term" data-term="${term.trim()}">${label}</span>`;
    });

    // {roll:2d6|label}
    text = text.replace(/\{roll:([^|}]+)(?:\|([^}]+))?\}/g, (_, formula, label) => {
      const lbl = label ? label.trim() : formula.trim();
      return `<button class="roller-inline" data-roll="${formula.trim()}" data-label="${escapeHtml(lbl)}" title="Roll ${escapeHtml(formula.trim())}"><span class="d6">◆</span>${escapeHtml(formula.trim())}</button>`;
    });

    // Bold **x** and italic *x* (simple)
    text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");

    // ATK / DEF stat highlighting — auto-detected, no special syntax needed.
    // Matches patterns like "+2 ATK", "-1 DEF", "1d3 ATK", "3 ATK", "0 DEF".
    // Run after bold so **+2 ATK** stays inside <strong> but also gets the colour span.
    text = text.replace(/((?:[+\-\u2212]|\d+d)?\d+\s*ATK\b)/g, '<span class="stat atk">$1</span>');
    text = text.replace(/((?:[+\-\u2212]|\d+d)?\d+\s*DEF\b)/g, '<span class="stat def">$1</span>');

    // Restore code spans
    text = text.replace(/\u0000CODE(\d+)\u0000/g, (_, i) => `<code>${escapeHtml(codes[+i])}</code>`);

    return text;
  }

  // --- block pass ---
  function renderBlocks(md) {
    const lines = md.replace(/\r\n/g, "\n").split("\n");
    const out = [];
    let i = 0;
    const headings = [];

    function closeList() {
      while (listStack.length) out.push(`</${listStack.pop()}>`);
    }
    const listStack = [];

    while (i < lines.length) {
      const line = lines[i];

      // Blank
      if (/^\s*$/.test(line)) {
        closeList();
        i++;
        continue;
      }

      // Heading
      const h = line.match(/^(#{1,4})\s+(.*)$/);
      if (h) {
        closeList();
        const lvl = h[1].length;
        const raw = h[2].trim();
        const id = slugify(raw);
        headings.push({ level: lvl, text: raw, id });
        out.push(
          `<h${lvl} id="${id}"><a class="heading-anchor" href="#${id}" aria-label="Link to this heading">#</a>${renderInline(raw)}</h${lvl}>`
        );
        i++;
        continue;
      }

      // Blockquote (collect until blank). Callouts: > [!kind] optional title
      if (/^>\s?/.test(line)) {
        closeList();
        const buf = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          buf.push(lines[i].replace(/^>\s?/, ""));
          i++;
        }
        let kind = "quote";
        let title = "";
        const first = buf[0] || "";
        const calloutM = first.match(/^\[!(\w+)\](?:\s+(.*))?$/);
        if (calloutM) {
          kind = calloutM[1].toLowerCase();
          title = calloutM[2] || "";
          buf.shift();
        }
        const inner = renderBlocks(buf.join("\n")).html;
        if (kind === "quote") {
          out.push(`<blockquote>${inner}</blockquote>`);
        } else {
          out.push(
            `<aside class="callout callout-${kind}">` +
              (title ? `<div class="callout-title">${renderInline(title)}</div>` : "") +
              `<div class="callout-body">${inner}</div>` +
            `</aside>`
          );
        }
        continue;
      }

      // Table (line with pipes, followed by separator line)
      if (/^\|.+\|\s*$/.test(line) && /^\|[\s\-:|]+\|\s*$/.test(lines[i + 1] || "")) {
        closeList();
        const headerCells = splitRow(line);
        i += 2;
        const rows = [];
        while (i < lines.length && /^\|.+\|\s*$/.test(lines[i])) {
          rows.push(splitRow(lines[i]));
          i++;
        }
        // Decide if this is a "dice table" (first header contains d6/2d6/etc)
        const firstH = (headerCells[0] || "").toLowerCase().replace(/\s+/g, "");
        const diceMatch = firstH.match(/^(\d*)d(\d+)/);
        const isDiceTable = !!diceMatch;

        let html = '<div class="table-wrap">';
        if (isDiceTable) {
          const formula = firstH.replace(/[^0-9d]/g, "");
          html += `<div class="table-tools"><button class="roller-table" data-roll="${formula}" data-label="${escapeHtml(headerCells[0])}"><span class="d6">◆</span> Roll ${escapeHtml(headerCells[0])}</button><span class="roll-result" aria-live="polite"></span></div>`;
        }
        html += "<table>";
        html += "<thead><tr>" + headerCells.map((c) => `<th>${renderInline(c)}</th>`).join("") + "</tr></thead>";
        html += "<tbody>";
        for (const r of rows) {
          const firstCell = (r[0] || "").trim();
          html += `<tr data-key="${escapeHtml(firstCell)}">` + r.map((c, idx) => `<td${idx===0?' class="num"':''}>${renderInline(c)}</td>`).join("") + "</tr>";
        }
        html += "</tbody></table></div>";
        out.push(html);
        continue;
      }

      // Lists
      const ulM = line.match(/^(\s*)[-*]\s+(.*)$/);
      const olM = line.match(/^(\s*)\d+\.\s+(.*)$/);
      if (ulM || olM) {
        const tag = ulM ? "ul" : "ol";
        if (listStack[listStack.length - 1] !== tag) {
          closeList();
          out.push(`<${tag}>`);
          listStack.push(tag);
        }
        const content = (ulM || olM)[2];
        // Collect continuation lines
        const buf = [content];
        i++;
        while (i < lines.length && /^\s{2,}\S/.test(lines[i])) {
          buf.push(lines[i].trim());
          i++;
        }
        out.push(`<li>${renderInline(buf.join(" "))}</li>`);
        continue;
      }

      // Horizontal rule
      if (/^-{3,}\s*$/.test(line)) {
        closeList();
        out.push("<hr />");
        i++;
        continue;
      }

      // Paragraph
      closeList();
      const buf = [line];
      i++;
      while (
        i < lines.length &&
        !/^\s*$/.test(lines[i]) &&
        !/^#{1,4}\s/.test(lines[i]) &&
        !/^>\s?/.test(lines[i]) &&
        !/^(\s*)[-*]\s+/.test(lines[i]) &&
        !/^(\s*)\d+\.\s+/.test(lines[i]) &&
        !/^\|.+\|\s*$/.test(lines[i])
      ) {
        buf.push(lines[i]);
        i++;
      }
      out.push(`<p>${renderInline(buf.join(" "))}</p>`);
    }
    closeList();
    return { html: out.join("\n"), headings };
  }

  function splitRow(line) {
    const cells = line.trim().replace(/^\|/, "").replace(/\|\s*$/, "").split("|");
    return cells.map((c) => c.trim());
  }

  window.renderMarkdown = function (md) {
    return renderBlocks(md);
  };
})();
