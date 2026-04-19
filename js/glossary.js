// Glossary of key terms for DANGER CLOSE SRD.
// Keys are canonical names (case-insensitive match). Aliases list alternate forms [[Trooper|Troopers]] handles.
// Each entry: def (short definition), xref (related terms), chapter (slug) and anchor (heading slug).

window.GLOSSARY = {
  "Squad": {
    def: "A unit of 5 Troopers under the player's command. The core tactical element of DANGER CLOSE.",
    xref: ["Trooper", "Mission"],
    chapter: "the-squad"
  },
  "Trooper": {
    def: "A single soldier. Has Status, Gear, Grit, Ammo, and Mobility. Five of them make a Squad.",
    xref: ["Squad", "Status", "Grit", "Ammo", "Mobility"],
    chapter: "the-squad"
  },
  "Status": {
    def: "A Trooper's health track: OK → Grazed → Wounded → Bleeding Out → Dead.",
    xref: ["Injury", "Trooper"],
    chapter: "exchange",
    anchor: "injury"
  },
  "OK": {
    def: "Default Trooper Status. No injuries, fully combat-effective.",
    xref: ["Status", "Grazed"],
    chapter: "exchange",
    anchor: "injury"
  },
  "Grazed": {
    def: "Minor injury. Restored to OK when Catching Breath. No mechanical penalty.",
    xref: ["Status", "OK", "Wounded"],
    chapter: "exchange",
    anchor: "injury"
  },
  "Wounded": {
    def: "Serious injury. Imposes −1 Mobility. Can only be healed through medical attention. Must sit out the next mission.",
    xref: ["Status", "Grazed", "Bleeding Out", "Mobility"],
    chapter: "exchange",
    anchor: "injury"
  },
  "Bleeding Out": {
    def: "Critical injury. The Trooper dies at the end of the next Exchange unless stabilized. Cannot take any actions.",
    xref: ["Status", "Wounded", "Dead", "Interact"],
    chapter: "exchange",
    anchor: "injury"
  },
  "Dead": {
    def: "KIA. The Trooper is permanently removed from the Squad.",
    xref: ["Status", "Bleeding Out"],
    chapter: "exchange",
    anchor: "injury"
  },
  "Gear": {
    def: "A Trooper's equipped Armor and Weapon. Can be default issue or specialized.",
    xref: ["Armor", "Weapon"],
    chapter: "equipment-and-gear"
  },
  "Armor": {
    def: "Light, Medium or Heavy. Modifies final DEF result and carries a Mobility cost.",
    xref: ["Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Light Armor": {
    def: "−1 to final DEF result. No Mobility cost. Favors speed over protection.",
    xref: ["Armor", "Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Medium Armor": {
    def: "No DEF modifier. −1 Mobility cost. The default loadout.",
    xref: ["Armor", "Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Heavy Armor": {
    def: "+1 to final DEF result. −2 Mobility cost. Maximum protection at the cost of maneuverability.",
    xref: ["Armor", "Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Weapon": {
    def: "Carbine, Assault Rifle, Marksman Rifle, or a Special Weapon (LMG, Plasma Rifle, Sniper, etc.)",
    xref: ["Gear"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Carbine": {
    def: "+1 ATK when Engaged in Tight battlefields. −1 ATK when Engaged in Open battlefields.",
    xref: ["Weapon", "Assault Rifle", "Marksman Rifle"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Assault Rifle": {
    def: "No special properties. The reliable workhorse. Default weapon for all Troopers.",
    xref: ["Weapon", "Carbine", "Marksman Rifle"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Marksman Rifle": {
    def: "+1 ATK when Engaged in Exposed battlefields. −1 ATK when Engaged in Dense battlefields.",
    xref: ["Weapon", "Carbine", "Assault Rifle"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Grit": {
    def: "Expendable resource. Spend to re-roll a Move or Defense Roll die. Survivors gain +1 Grit after a mission (max 3).",
    xref: ["Mobility Check", "Defense Roll"],
    chapter: "the-squad"
  },
  "Ammo": {
    def: "Abstracted munitions. Troopers start with 3 (max 3). Spend to boost attacks or fire Special Weapons.",
    xref: ["Trooper"],
    chapter: "the-squad"
  },
  "Mobility": {
    def: "Base 5, reduced by armor/gear. Target number for all Mobility Checks (roll 1d6 equal or under).",
    xref: ["Mobility Check", "Armor", "Flanking Bonus"],
    chapter: "equipment-and-gear",
    anchor: "mobility"
  },
  "Mobility Check": {
    def: "Roll 1d6 equal or under the Trooper's Mobility to succeed. Being wounded imposes −1.",
    xref: ["Mobility", "Grit"],
    chapter: "equipment-and-gear",
    anchor: "mobility"
  },
  "Flanking Bonus": {
    def: "ATK bonus when Flanking, determined by Mobility. +1 ATK at Mobility 0–3, +2 at Mobility 4, +3 at Mobility 5.",
    xref: ["Mobility", "Flanking", "Fire"],
    chapter: "equipment-and-gear",
    anchor: "mobility"
  },
  "Tags": {
    def: "A Trooper's personality descriptor: Forceful, Technical, Steady, or Sharp. Guides roleplay and non-combat problem solving.",
    xref: ["Trooper"],
    chapter: "the-squad",
    anchor: "tags"
  },
  "Mission": {
    def: "An effort to achieve one or more Objectives across multiple Sectors, starting at an LZ.",
    xref: ["Objective", "Sector", "Threat Level"],
    chapter: "the-mission"
  },
  "Objective": {
    def: "What the mission is for: Seize & Secure, Hit & Run, Free Roam, or Defensive.",
    xref: ["Mission"],
    chapter: "the-mission",
    anchor: "mission-objective"
  },
  "Sector": {
    def: "A distinct location visited during a mission. Defined by Cover, Space and Threat Level.",
    xref: ["Cover", "Space", "Threat Level"],
    chapter: "the-mission",
    anchor: "sectors"
  },
  "Cover": {
    def: "How much physical protection a Sector offers. 0 — Exposed, 1 — Normal, 2 — Dense. Limits how many Troopers can be Fortified.",
    xref: ["Space", "Sector", "Fortified"],
    chapter: "the-mission",
    anchor: "cover"
  },
  "Exposed Cover": {
    def: "Cover 0. No real cover. No Troopers can be Fortified.",
    xref: ["Cover", "Normal Cover", "Dense Cover"],
    chapter: "the-mission",
    anchor: "cover"
  },
  "Normal Cover": {
    def: "Cover 1. Scattered cover. No more than 2 Troopers can be Fortified.",
    xref: ["Cover", "Exposed Cover", "Dense Cover"],
    chapter: "the-mission",
    anchor: "cover"
  },
  "Dense Cover": {
    def: "Cover 2. Rubble, solid walls, barricades. No limit on Fortified Troopers.",
    xref: ["Cover", "Exposed Cover", "Normal Cover"],
    chapter: "the-mission",
    anchor: "cover"
  },
  "Space": {
    def: "How open a Sector is. 0 — Tight, 1 — Transitional, 2 — Open. Limits how many Troopers can Flank.",
    xref: ["Cover", "Sector", "Flanking"],
    chapter: "the-mission",
    anchor: "space"
  },
  "Tight Space": {
    def: "Space 0. Tunnels, narrow corridors, trenches. No Troopers can be Flanking.",
    xref: ["Space", "Transitional Space", "Open Space"],
    chapter: "the-mission",
    anchor: "space"
  },
  "Transitional Space": {
    def: "Space 1. Courtyards, broken streets, alleyways. No more than 2 Troopers can be Flanking.",
    xref: ["Space", "Tight Space", "Open Space"],
    chapter: "the-mission",
    anchor: "space"
  },
  "Open Space": {
    def: "Space 2. Plazas, squares, promenades, fields. No limit on Flanking Troopers.",
    xref: ["Space", "Tight Space", "Transitional Space"],
    chapter: "the-mission",
    anchor: "space"
  },
  "Threat Level": {
    def: "The strength of enemy forces, 1 (Light) to 4 (Overwhelming). Drives injury severity and Enemy Tactics.",
    xref: ["Mission", "Sector"],
    chapter: "the-mission",
    anchor: "difficulty"
  },
  "Mission Phase": {
    def: "Moving between Sectors: Advance!, Retreat!, Catch Breath.",
    xref: ["Advance Roll", "Sector", "Retreat"],
    chapter: "mission-phase"
  },
  "Advance Roll": {
    def: "2d6 + modifiers when entering a threatened Sector. Determines starting Momentum and Defensive Positions.",
    xref: ["Mission Phase", "Momentum", "Stealth", "Infiltration"],
    chapter: "mission-phase",
    anchor: "advance-roll"
  },
  "Infiltration": {
    def: "When Stealth is active and not all Mobility Checks pass, each 2 successes lets you pick a bonus: Cut Comms, Target Commanders, Trap, or Exit Route.",
    xref: ["Stealth", "Advance Roll", "Mobility Check"],
    chapter: "mission-phase",
    anchor: "offensive-position--infiltration"
  },
  "Stealth": {
    def: "+3 on the Advance Roll if the enemy is unaware of hostile presence. Lost on using Assault or rolling SPOTTED or worse.",
    xref: ["Advance Roll", "Infiltration"],
    chapter: "mission-phase",
    anchor: "advance-roll"
  },
  "Retreat": {
    def: "The Squad falls back to the previous Sector. The enemy may pursue with split forces.",
    xref: ["Mission Phase", "Disengage", "Momentum"],
    chapter: "mission-phase",
    anchor: "retreat"
  },
  "Engagement": {
    def: "A zoomed-in firefight to clear a Sector. Played out in Exchanges until VICTORY or DEFEAT.",
    xref: ["Exchange", "Momentum"],
    chapter: "engagement"
  },
  "Exchange": {
    def: "One round of an Engagement: Intent → Offense Roll → Defense Roll → Momentum → Enemy Tactics.",
    xref: ["Engagement", "Offense Roll", "Defense Roll"],
    chapter: "exchange"
  },
  "Momentum": {
    def: "The Squad's control of the battlefield. Track: DEFEAT, FALTERING, LOSING GROUND, CONTESTED, GAINING GROUND, BREAKING THROUGH, VICTORY.",
    xref: ["Engagement", "Offense Roll"],
    chapter: "engagement",
    anchor: "momentum"
  },
  "Offensive Position": {
    def: "A Trooper's ability to attack. Three levels: Limited, Engaged, Flanking. Better position means more ATK.",
    xref: ["Defensive Position", "Limited", "Engaged", "Flanking"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Defensive Position": {
    def: "A Trooper's ability to survive incoming fire. Three levels: Flanked, In Cover, Fortified. Better position means easier Defense Rolls.",
    xref: ["Offensive Position", "Flanked", "In Cover", "Fortified"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Limited": {
    def: "Lowest Offensive Position. The Trooper can Fire but at −1 ATK. Poor angles, obstructed sight lines.",
    xref: ["Offensive Position", "Engaged", "Flanking"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Engaged": {
    def: "Middle Offensive Position. The Trooper contributes standard ATK when Firing.",
    xref: ["Offensive Position", "Limited", "Flanking"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Flanking": {
    def: "Best Offensive Position. The Trooper adds their Flanking Bonus ATK when Firing. Limited by Sector Space.",
    xref: ["Offensive Position", "Flanking Bonus", "Space"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Flanked": {
    def: "Worst Defensive Position. Direct Fire on a roll of 3 or less. Must Fall Back on Momentum Loss or suffer −1 DEF.",
    xref: ["Defensive Position", "In Cover", "Fortified"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "In Cover": {
    def: "Middle Defensive Position. Direct Fire on a roll of 1 only.",
    xref: ["Defensive Position", "Flanked", "Fortified"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Fortified": {
    def: "Best Defensive Position. Direct Fire on a roll of 1 only, and a roll of 2 is also Safe. Limited by Sector Cover. Clears Suppressed.",
    xref: ["Defensive Position", "In Cover", "Flanked", "Cover", "Suppressed"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "ATK": {
    def: "Attack dice (d6s) added to the Squad's Offense Roll. Pooled from all Firing Troopers into a single roll.",
    xref: ["Offense Roll", "Fire", "DEF"],
    chapter: "exchange",
    anchor: "atk--def"
  },
  "DEF": {
    def: "Defense dice (d6s) for a Trooper's individual Defense Roll. Modified by Covering Fire, Armor, and situational effects.",
    xref: ["Defense Roll", "Covering Fire", "Armor", "ATK"],
    chapter: "exchange",
    anchor: "atk--def"
  },
  "Fire": {
    def: "Intent: contribute ATK to the Offense Roll. The staple action. Flanking Bonus and Ammo can increase ATK. Prevented by Suppressed.",
    xref: ["ATK", "Offense Roll", "Flanking Bonus", "Suppressed"],
    chapter: "exchange",
    anchor: "fire"
  },
  "Move": {
    def: "Intent: reposition on the battlefield via Mobility Check. Move Up (go Flanking), Fall Back (go Fortified), or Reposition (go Engaged/In Cover).",
    xref: ["Mobility Check", "Offensive Position", "Defensive Position"],
    chapter: "exchange",
    anchor: "move"
  },
  "Covering Fire": {
    def: "Intent: grant +1 DEF to a fellow Trooper. Stacks with multiple providers. LMG adds an additional +1 DEF.",
    xref: ["DEF", "Defense Roll"],
    chapter: "exchange",
    anchor: "covering-fire"
  },
  "Use Special Gear": {
    def: "Intent: fire heavy weapons, call in airstrikes, or use other Special Equipment or Special Weapons. Some take a full Exchange.",
    xref: ["Gear"],
    chapter: "exchange",
    anchor: "use-special-gear"
  },
  "Interact": {
    def: "Intent: do something outside the firefight. Stabilize Bleeding Out Troopers, unjam weapons, plant demo charges. Some take multiple Exchanges.",
    xref: ["Bleeding Out"],
    chapter: "exchange",
    anchor: "interact"
  },
  "Disengage": {
    def: "Intent: the entire Squad retreats. Each Trooper rolls for Injury based on current Momentum. One Trooper may sacrifice themselves to save the rest.",
    xref: ["Retreat", "Momentum", "Injury"],
    chapter: "exchange",
    anchor: "disengage"
  },
  "Improvise": {
    def: "Intent: attempt something not covered by other intents. Use Oracle Dice. The cost the Trooper pays sets the scale of the gain.",
    xref: ["Oracle Dice"],
    chapter: "exchange",
    anchor: "improvise"
  },
  "Suppressed": {
    def: "Chosen instead of Injury on a failed Defense Roll. Cannot Fire next Exchange. Clears on a passed Defense Roll or becoming Fortified. Cannot be chosen twice in a row.",
    xref: ["Defense Roll", "Fire", "Fortified", "Injury"],
    chapter: "exchange",
    anchor: "suppressed"
  },
  "Pressure": {
    def: "Accumulated enemy fire weight during an Engagement. Increases when Enemy Tactics d6 shows 4+. Each point imposes −1 ATK. Can be targeted as a Hard Target to reduce.",
    xref: ["ATK", "Enemy Tactics", "Hard Target"],
    chapter: "exchange",
    anchor: "pressure"
  },
  "Offense Roll": {
    def: "Pool all ATK from Firing Troopers, roll d6s, take highest. 6 = Success, 4–5 = Hold or Success at a Cost, ≤3 = Pushed Back.",
    xref: ["Exchange", "Momentum", "ATK"],
    chapter: "exchange",
    anchor: "offense-roll"
  },
  "Defense Roll": {
    def: "Each Trooper rolls DEF d6s and takes highest. Armor modifies result. Outcome depends on Defensive Position.",
    xref: ["Exchange", "Injury", "Armor", "DEF"],
    chapter: "exchange",
    anchor: "defense-roll"
  },
  "Injury": {
    def: "Moves the Trooper one step down the Status track. Severity scales with Threat Level.",
    xref: ["Status", "Trooper"],
    chapter: "exchange",
    anchor: "injury"
  },
  "Enemy Tactics": {
    def: "End-of-Exchange roll: 1d6 + Threat Level. Triggers Reposition, Scatter, Pinned Down, Encircle, Push Forward, or Fall Back. Sergeant can nullify with 1 Grit.",
    xref: ["Exchange", "Threat Level", "Grit", "Pressure"],
    chapter: "exchange",
    anchor: "enemy-tactics"
  },
  "Hard Target": {
    def: "Tanks, gun nests, brutes. Fired on in a separate dice pool. 6 = Hit, 4–5 = Hit at a Cost.",
    xref: ["Offense Roll"],
    chapter: "hard-targets"
  },
  "Attached Forces": {
    def: "Additional fighters accompanying the Squad. Add +1/+2/+3 ATK. Committed dice that roll 1 are removed as casualties.",
    xref: ["Offense Roll", "ATK"],
    chapter: "hard-targets",
    anchor: "attached-forces"
  },
  "Oracle Dice": {
    def: "Roll 1d6 for a 50/50 question. 2d6 keep lowest for Unlikely, 2d6 keep highest for Likely.",
    xref: ["Improvise"],
    chapter: "introduction",
    anchor: "oracle-dice"
  },
  "Field Report": {
    def: "Post-mission narrative exercise. Answer prompts about the mission to turn dice rolls into your regiment's history.",
    xref: ["Mission"],
    chapter: "after-the-mission",
    anchor: "the-field-report"
  }
};

// Aliases — alternate forms that map to a canonical glossary key.
window.GLOSSARY_ALIASES = {
  "troopers": "Trooper",
  "squads": "Squad",
  "sectors": "Sector",
  "engagements": "Engagement",
  "exchanges": "Exchange",
  "objectives": "Objective",
  "missions": "Mission",
  "hard targets": "Hard Target",
  "oracle die": "Oracle Dice",
  "mobility checks": "Mobility Check",
  "advance rolls": "Advance Roll",
  "offense rolls": "Offense Roll",
  "defense rolls": "Defense Roll",
  "defense roll": "Defense Roll",
  "injuries": "Injury",
  "field reports": "Field Report",
  "tags": "Tags",
  "tag": "Tags",
  "flanking bonus": "Flanking Bonus",
  "exposed": "Exposed Cover",
  "exposed cover": "Exposed Cover",
  "normal": "Normal Cover",
  "normal cover": "Normal Cover",
  "dense": "Dense Cover",
  "dense cover": "Dense Cover",
  "tight": "Tight Space",
  "tight space": "Tight Space",
  "transitional": "Transitional Space",
  "transitional space": "Transitional Space",
  "open": "Open Space",
  "open space": "Open Space",
  "attached force": "Attached Forces",
  "offensive positions": "Offensive Position",
  "defensive positions": "Defensive Position",
  "light armor": "Light Armor",
  "medium armor": "Medium Armor",
  "heavy armor": "Heavy Armor",
  "carbines": "Carbine",
  "assault rifles": "Assault Rifle",
  "marksman rifles": "Marksman Rifle",
  "infiltrate": "Infiltration",
  "enemy tactic": "Enemy Tactics",
  "tactics": "Enemy Tactics",
  "stealth bonus": "Stealth",
  "fire": "Fire",
  "move up": "Move",
  "fall back": "Move",
  "reposition": "Move",
  "covering fire": "Covering Fire",
  "special gear": "Use Special Gear",
  "interact": "Interact",
  "disengage": "Disengage",
  "improvise": "Improvise",
  "atk": "ATK",
  "def": "DEF",
  "suppressed": "Suppressed",
  "pressure": "Pressure",
  "retreat": "Retreat",
  "retreat!": "Retreat",
  "ok": "OK",
  "grazed": "Grazed",
  "wounded": "Wounded",
  "bleeding out": "Bleeding Out",
  "dead": "Dead",
  "limited": "Limited",
  "engaged": "Engaged",
  "flanking": "Flanking",
  "flanked": "Flanked",
  "in cover": "In Cover",
  "fortified": "Fortified"
};