// Table of contents — chapters are loaded from /chapters/*.md at runtime.
// Each entry: id (slug used in URL and anchors), title, file, group (optional chapter-group label),
// placeholder: true for not-yet-written stubs.

window.TOC = [
  { group: "Basic Rules" },
  { id: "introduction",       title: "Introduction",        file: "chapters/00-introduction.md" },
  { id: "the-squad",          title: "The Squad",           file: "chapters/01-the-squad.md" },
  { id: "the-mission",        title: "The Mission",         file: "chapters/02-the-mission.md" },
  { id: "the-mission",        title: "Sectors",             file: "chapters/03-sectors.md" },
  { id: "mission-phase",      title: "Mission Phase",       file: "chapters/04-mission-phase.md" },
  { id: "engagement",         title: "Engagement",          file: "chapters/05-engagement.md" },
  { id: "exchange",           title: "Exchange",            file: "chapters/06-exchange.md" },
  { id: "hard-targets",       title: "Hard Targets",        file: "chapters/07-hard-targets.md" },
  { id: "equipment-and-gear", title: "Equipment & Gear",    file: "chapters/08-equipment-and-gear.md" },
  { id: "after-the-mission",  title: "After The Mission",   file: "chapters/09-after-the-mission.md" },
  { id: "summary",  title: "Summary",   file: "chapters/10-summary.md" },

  // { group: "Toolkit" },
  // { id: "making-troopers",    title: "Making Troopers",     placeholder: true },
  // { id: "sector-inspiration", title: "Sector Inspiration",  placeholder: true },
  // { id: "between-the-bullets",title: "Between the Bullets", placeholder: true },
  // { id: "campaigns",          title: "Campaigns & Operations", placeholder: true },

  { group: "Reference" },
  { id: "credits",            title: "Credits & License",   file: "chapters/99-credits.md" },
];
