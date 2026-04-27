# The Mission

A [[Mission]] has one or multiple [[Objective|Objectives]] that must be reached and achieved. A Mission consists of several [[Sector|Sectors]] that are linked together. Each Mission starts at a designated **Landing Zone (LZ)**, with some missions having multiple to choose from.

The network between Sectors can grow quite complex, varying from a simple linear assault to various alternate routes and even a free-form hexagonal system. Depending on the mission type, the mission might be complete once the Objective has been achieved, or require the [[Squad]] to retreat to the original LZ, or reach an alternative **Extraction Zone (EZ)**.

## Difficulty

> *"Actual to Squad, listen up, quick and clean: you hit the LZ, move hard to Sector Alpha. Clear light resistance, no prolonged fights - keep momentum. Push through to Bravo, expect open ground; use smoke for crossing and suppressing fire from two-man element. Charlie is the objective. Take it, dig in, hold until evac or relief. Holdout timer starts on contact. Rules of engagement: no unnecessary heroics, conserve ammo. Questions? No? Stack up. Move at 30, eyes sharp. Good hunting."*

A Mission has a set **Difficulty**, which determines the maximum [[Threat Level]] of foes encountered. Assign a difficulty that makes sense, or roll {roll:1d6|Difficulty}:

| 1d6 | Difficulty | Max Threat Level     | Notes                                                |
| --- | ---------- | -------------------- | ---------------------------------------------------- |
| 1–3 | Routine    | 2 (Standard)         | Patrols, lightly contested                           |
| 4–5 | Hazardous  | 3 (Heavy)            | Standard operation into active battlefields         |
| 6   | Desperate  | 4 (Overwhelming)     | Intense opposition, grave danger                     |

[[Threat Level]] affects the likelihood of a firefight starting in a favorable position, the difficulty of gaining [[Momentum]], risk of serious injury, and the likelihood of the enemy using battlefield-shifting tactics.

## Airspace

**Airspace** is a descriptor for who currently holds air superiority. By default, this can be considered *contested*. In longer campaigns consisting of multiple missions, completing certain missions can affect the Airspace of missions in the future.

| Airspace   | Transport                            | Support       |
| ---------- | ------------------------------------ | ------------- |
| Clear      | No hindrance                         | No hindrance  |
| Contested  | 2-in-6 odds of taking fire           | No hindrance  |
| Hostile    | 4-in-6 odds of taking fire           | Not available |

If flying in Contested or Hostile airspace, roll to see if the transport is targeted when moving to a mission and on extraction.

If a transport takes fire, roll {roll:1d6|Take fire}. On a **1–3**, the transport goes down. These odds may be modified by factors such as pilot skill or vehicle resilience (for example, a skilled pilot might make the odds 2-in-6 instead).

If the transport is shot down, each Trooper rolls {roll:1d6|Crash injury}. On a **1–2**, they suffer an [[Injury]] as the vehicle crashes.

- If en route to the LZ, the Squad lands off-course and must travel {roll:1d3|Extra sectors} extra Sectors on foot.
- If extracting, the Squad must hold off enemies at the crash site (a Defensive [[Engagement]] - survive for TL + {roll:1d2|Exchanges} Exchanges) or reroute to a secondary Extraction Zone ({roll:1d3|Sectors away} Sectors away), or risk being left behind.

# Mission Objective

Depending on the type of mission, there can be one or multiple [[Objective|objectives]], which can be independent from each other or conditional. Objectives can require specific gear or impose specific parameters.

## Seize & Secure

Move from LZ to Objective, destroy opposition and/or secure position. Your bread-and-butter offensive op. No fallback, no extraction planned. Finish the job and hold the ground.

- **Assault.** Take down an enemy position and claim it.
- **Search & Destroy.** Take down a particular enemy unit.
- **Breach.** Destroy an enemy fortification (might involve bringing [[Special Equipment|Demolition Charges]]).

## Hit & Run

Move from LZ to Objective, complete task, exfiltrate. Precision mission - entry and exit baked in. Depending on the parameters, the exit might involve reaching a different EZ.

- **Raid.** Done to inflict damage, cause a distraction or debilitate an enemy force.
- **Recon.** Gain intel from a particular position.
- **Extraction.** Saving or securing a VIP.
- **Recovery.** Retrieve crucial material or equipment behind enemy lines.
- **Sabotage.** Destroy enemy materiel, supply lines or equipment.

## Free Roam Engagement

Move from LZ to any of multiple Objectives and/or destroy a number of enemy forces, extract. Drop in, wreak havoc, get out. Gives the Squad agency, but they must know when to leave.

- **Kill Mission.** Take down a certain number of enemy positions or forces.
- **Disruption.** Target multiple installations of enemy infrastructure.

## Defensive Engagement

Hold a position and prevent enemy advancement. Withstand the storm and hold your ground. Depending on the terrain, it can involve multiple fall-back positions, and retaking those later when the Squad is in a position to do so.

- **Siege.** Fend off multiple enemy waves until the enemy falls back, or reinforcements arrive.
- **Evacuation.** Buy time for VIPs, civilians or other squads to exfil, and then exfil yourselves.
- **Last Stand.** Take down as many foes while holding on to a last fortification.

## Procedurally Generated Missions

Pick an Objective (Destroy an outpost, assault a vital location etc.). Then, determine (or roll for) the **Mission Length** and **Branches** of the mission.

| 1d6 | Mission Length | Branches |
| --- | -------------- | -------- |
| 1–2 | Short (7)      | 1        |
| 3–5 | Medium (9)     | 3        |
| 6   | Long (11)      | 5        |

Whenever you enter a Sector, *before* you roll for its contents, roll {roll:2d6kl1|Objective check} and **add the number of cleared Sectors**.

If the result is equal or greater than the Mission Length (7, 9 or 11), this sector contains the Objective.

> [!example] Worked example
> The Tiger Commandos have cleared 5 sectors during their Medium length mission. They're about to enter a new sector of the thick jungles of Thralaan IV. They roll 2d6, and keep the lowest (a 3). They add the number of cleared sectors - 3+5=8. They haven't reached the target number yet (9), but they are getting close…

Whenever you *clear* a Sector, roll {roll:1d6|Path forward} to see if the path continues from here:

| 1d6  | Result               | Condition                                           |
| ---- | -------------------- | --------------------------------------------------- |
| 1    | Dead end             | Only if other unexplored paths remain               |
| 2–3  | A branch - 2 options | Only if there are less branches than Mission Length |
| 4–6  | One way forward      | -                                                   |
