# Sectors

A **[[Sector]]** is a distinct location visited during a mission, defined by its [[Cover]], [[Space]] and [[Threat Level]]. The contents of Sectors can be determined in advance for the entire mission, or upon entering a Sector for the first time.

The notation for Sectors is:

> **[Sector Name] / [Cover] / [Space] / [Threat Level]**

For instance: *Fortified Promenade C1/S2/TL2* or *Bunker Tunnels C2/S0/TL3* or *Scorched Park C0/S2/TL1*.

Give each Sector a unique identity, based on its Cover/Space, general mission location and mission context, such as "Ruined Carpark", "Ravaged Square", "Fortified Promenade". Then write one sentence describing what the Squad sees: the burnt-out vehicles, the collapsed scaffolding, the flickering floodlights. These details are not decoration. They are things Troopers can interact with when Advancing or through the *Improvise* intent during an [[Engagement]].

## Cover

For a Sector's **[[Cover]]**, roll {roll:1d6|Cover}. Cover is expanded upon in [[Engagement|Engagements]].

| 1d6  | Cover                                           | Max. Fortified |
| ---- | ----------------------------------------------- | -------------- |
| 1    | **0 - Exposed.** No real cover.                 | None           |
| 2–4  | **1 - Normal.** Scattered cover.                | 2              |
| 5–6  | **2 - Dense.** Rubble, solid walls, barricades. | No limit       |

## Space

A Sector's **[[Space]]** describes the degree to which the battlefield is open or cramped, and allows Troopers to maneuver. See [[Engagement|Engagements]]. Roll {roll:1d6|Space}.

| 1d6  | Space                                                        | Max. Flanking |
| ---- | ------------------------------------------------------------ | ------------- |
| 1    | **0 - Tight.** Tunnels, narrow corridors, trenches.          | None          |
| 2–4  | **1 - Transitional.** Courtyards, broken streets, alleyways, scattered ruins. | 2             |
| 5–6  | **2 - Open.** Plazas, squares, promenades, fields.           | No limit      |

## Sector Contents

Roll {roll:1d6|Sector contents} and check the result, depending on [[Mission]] Difficulty. The mentioned TL ([[Threat Level]]) determines the opposition faced in the [[Engagement]].

Threat Level ranges from 1 to 4, also named *Light - Standard - Heavy - Overwhelming*.

Generally, the last Sector visited will remain cleared. Other previously cleared Sectors are not necessarily safe forever, due to roaming patrols.

| 1d6  | Routine | Hazardous | Desperate |
| ---- | ------- | --------- | --------- |
| 1    | TL 2    | TL 3      | TL 4      |
| 2    | TL 1    | TL 2      | TL 3      |
| 3    | TL 1    | TL 1      | TL 3      |
| 4    | Nothing | TL 1      | TL 2      |
| 5    | Nothing | Nothing   | TL 2      |
| 6    | Boon    | Boon      | Boon      |

## Boon Table

Roll {roll:1d6|Boon}.

| d6   | Boon                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | **Ammo Cache.** All Troopers gain +1 Ammo.                   |
| 2    | **Enemy Intel.** A vantage point, wounded scout or intercepted comms signal gives you +1 on the next [[Advance Roll]]. |
| 3    | **Prepared Ground.** Someone was here before you, and they left gifts. Razor wire, traps, pre-sighted kill zones, a friendly mine field. Easily avoided by your Squad. If enemy forces pursue you into this Sector, gain +1 [[Momentum]] automatically. |
| 4    | **Fallen Friendlies.** A slain friendly squad, with {roll:1d3} [[Ammo]] and [[Special Weapons]] ({roll:1d6}): 1-3 an LMG // 4-5 a Sniper Rifle // 6 Rocket Launcher |
| 5    | **Positions Revealed.** A comms relay, interrogated foe or briefing from Command informs you of the Threat Level and Cover of all adjoining Sectors. |
| 6    | **Rookies.** An eager squad of rookies, local militia or fresh recruits joins up with you. Their awe of the Squad is palpable. They act as a sizable group (**+2 ATK**). See [[Attached Forces]] in the Engagement section. |

## Sector Scale

A Sector is as large or as small as the fiction demands. It can be several square kilometers of wilderness, an entire enemy camp, a stretch of urban blocks, or a single room. The game mechanics stay the same.

When a Sector is a wide stretch of terrain, any firefights take place at its most notable location: a bridge, a crossroads, a fortified position. The rest of the Sector is the approach and the aftermath. 

When a Sector is a single room, the [[Advance Roll]] is the breach, and the Engagement is the brutal seconds that follow. [[Fortified]] might mean wedged behind a doorframe. [[Flanking]] might mean clearing a corner. A 
[[Tight Space|Tight]]/[[Exposed|Exposed Cover]] Sector can be a single interior hallway, or a kilometers-long canyon. A three-Sector mission could be a jungle patrol ending at an enemy compound, or three rooms in a bunker.

The positions are the same abstractions, the scale is different.

## Scaling the Fantasy & Difficulty

DANGER CLOSE is built as an ode to the grunt. Regular soldiers, competent but mortal, doing their best with what they have. But the system works just as well for super soldiers, power-armored knights, or elite operatives.

[[Threat Level]] is relative to the Squad, not an objective measure of enemy strength. 

- A TL 1 force opposing five regular infantry might be a handful of militia with outdated rifles. 
- A TL 1 force opposing five gene-forged super soldiers might be an entire mechanized platoon that simply isn't equipped to handle what's coming for them. 

If you want to represent a Squad of enhanced soldiers without changing the narration scale, small mechanical tweaks go a long way: Power Armor that works as [[Heavy Armor]] without the Mobility penalty, an 
extra [[Status]] level before [[Bleeding Out]], a flat **+1 ATK** on whatever the super soldier does. A mixed Squad of one super soldier and four regular troopers works fine: the super soldier is mechanically better, but still subject to the same dice.

## Fleshing Out Sectors

Roll {roll:1d6} or pick an element to add more depth to a Sector. Each entry is a fiction prompt, not a fixed rule. Interpret it based on the setting, the terrain, and what makes the fight interesting.

1. **Elevated Position**. A ridge, rooftop, gantry, or cliff face. Whoever holds it has the advantage. If the squad holds the high ground, Fortified Troopers might gain **+1 ATK** from clear sight lines. If the enemy holds it, the squad might suffer -1 ATK shooting uphill. Can change hands through movement. The Advance Roll result suggests who starts with it.
2. **Volatile Element**. Fuel storage, ammunition stockpile, gas pockets, unstable machinery. Before the Engagement starts, define what it is and where it sits. Either side can target it: treat it as a separate [[Hard Target]] pool. If it blows, it might deal **+3 ATK** worth of damage, reduce Defensive Positions, or create smoke. The enemy might target it too, forcing Troopers to Move or take Injuries.
3. **Concealment**. Underbrush, fog, smoke, tall grass, industrial haze. Can grant +1 on the [[Advance Roll]]. In combat, it might grant +1 DEF for the first Exchange, or for the whole Engagement if the fiction supports it.
4. Unstable Ground. Mud, rubble, ice, shifting debris, flooded terrain. -1 [[Mobility]] for all Troopers this Engagement. Movement becomes riskier, Flanking Bonuses might drop a tier. The enemy suffers too.
5. **Collateral Risk**. Civilians, prisoners, fragile objectives, sacred ground, volatile cargo. If the squad's **ATK** pool exceeds a threshold (7 or higher), there's a risk of collateral damage: roll {roll:1d6}, on a 1-2 something goes wrong. Consequences are fictional but real. Precision matters. Heavy weapons become liabilities.
6. **Interactable**. Floodlights, blast doors, bridge controls, generators, cranes, consoles. A Trooper can spend their Intent to activate it. The effect depends on the fiction: cutting lights might grant Concealment, opening a door might create a flanking route, activating machinery might crush a [[Hard Target]].