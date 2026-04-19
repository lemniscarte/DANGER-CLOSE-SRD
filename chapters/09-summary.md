# Summary

This chapter walks through a full [[Mission]] from start to finish: how [[Sector|Sectors]] are built, how the [[Mission Phase]] moves the [[Squad]] through them, and how [[Engagement|Engagements]] play out at the tactical level. Use it as a reference during play or as a refresher between sessions.

## Building a Mission

Every Mission starts with an [[Objective]] and a **Difficulty** (Routine, Hazardous, or Desperate), which sets the maximum [[Threat Level]] of enemies the Squad will face. The Mission is made up of connected Sectors, beginning at a **Landing Zone (LZ)** and ending at the Objective or an **Extraction Zone (EZ)**.

Sectors can be laid out in advance or generated as the Squad enters them. Each Sector is defined by three properties:

- **[[Cover]]** determines how much physical protection is available, and limits how many [[Trooper|Troopers]] can be [[Fortified]]. [[Exposed Cover]] offers none. [[Normal Cover]] allows up to 2. [[Dense Cover]] has no limit.
- **[[Space]]** determines how much room there is to maneuver, and limits how many Troopers can be [[Flanking]]. [[Tight Space]] allows none. [[Transitional Space]] allows up to 2. [[Open Space]] has no limit.
- **[[Threat Level]]** ranges from 1 (Light) to 4 (Overwhelming), and scales injury severity, [[Enemy Tactics]] frequency, and the difficulty of gaining [[Momentum]].

A Sector's notation looks like: *Ruined Carpark C1/S2/TL2*. Give each one a name and a one-sentence description of what the Squad sees. Those details feed the fiction and give Troopers things to interact with.

## The Mission Phase

The Squad cycles through four states as they move between Sectors:

**Advance!** The default. Push forward to a new Sector. If the Sector is empty or contains a Boon, the Squad can keep moving or **Catch Breath**. If it contains a Threat, make an [[Advance Roll]].

**[[Advance Roll]].** Roll 2d6, modified by Fatigue (−1 per 3 previous Advance Rolls), [[Threat Level]] (negative), weather, [[Stealth]] (+3 if the enemy doesn't know you're here), and any [[Ammo]] spent on Assault. The result sets starting [[Momentum]] and [[Defensive Position|Defensive Positions]]:

- **AMBUSHED** (≤3): LOSING GROUND, [[Flanked]].
- **SPOTTED** (4–7): CONTESTED, [[In Cover]].
- **SURPRISE** (8–10): GAINING GROUND, [[Fortified]].
- **Overwhelm** (11+): Enemy routed, no Engagement. Catch Breath.

Each Trooper then rolls a [[Mobility Check]] to determine their [[Offensive Position]]. If every Trooper passes, the Squad bypasses the Sector entirely. If [[Stealth]] is active and not everyone passes, every 2 successes earns an [[Infiltration]] pick: Cut Comms, Target Commanders, Trap, or Exit Route.

**[[Retreat]]!** The Squad falls back to a previous Sector, either by choice or because [[Momentum]] hit DEFEAT. The enemy may pursue with split forces, and drawing them into favorable terrain is a valid tactic.

**Catch Breath.** After clearing a Sector, the Squad regroups. Use [[Special Equipment|Medic Gear]] to patch the [[Wounded]], redistribute [[Ammo]] from a [[Special Equipment|Supply Backpack]], and narrate a moment between the bullets.

## The Engagement

When the Squad hits serious resistance, the fight zooms in. An [[Engagement]] plays out in [[Exchange|Exchanges]], each one a round of combat resolved in five steps.

### 1. Intent

Every able Trooper picks what they're doing this round:

- **[[Fire]]**: Contribute [[ATK]] to the [[Offense Roll]]. The bread and butter. A Trooper's [[Flanking Bonus]] (set by [[Mobility]]) adds extra ATK when [[Flanking]]. Spending 1 [[Ammo]] adds +1 ATK. Being [[Limited]] costs −1 ATK.
- **[[Move]]**: Reposition via [[Mobility Check]]. **Move Up** pushes to [[Flanking]] (risking [[Flanked]] on failure). **Fall Back** retreats to [[Fortified]] (risking [[Limited]] on failure). **Reposition** settles into [[Engaged]]/[[In Cover]].
- **[[Covering Fire]]**: Grant +1 [[DEF]] to another Trooper. Stacks.
- **[[Use Special Gear]]**: Fire heavy weapons, call strikes, deploy equipment.
- **[[Interact]]**: Stabilize a [[Bleeding Out]] Trooper, plant charges, unjam a weapon.
- **[[Disengage]]**: The whole Squad retreats. Each Trooper risks [[Injury]] based on current Momentum.
- **[[Improvise]]**: Attempt something creative using [[Oracle Dice]]. The cost the Trooper pays sets the scale of the reward.

A [[Suppressed]] Trooper cannot [[Fire]].

### 2. Offense Roll

Pool all [[ATK]] from the Squad and roll that many d6s, taking the highest.

- +1 ATK if Momentum was gained last Exchange.
- +1 ATK if a Trooper died last Exchange.
- −1 ATK per point of [[Pressure]].

| Result | Outcome |
| ------ | ------- |
| ≤3 | **Pushed Back.** Lose −1 Momentum. |
| 4–5 | **Hold Position** (+1 DEF, no Momentum change) or **Success at a Cost** (+1 Momentum, but −1 DEF to the most at-risk Trooper). |
| 6 | **Success.** +1 Momentum. If 6s rolled ≥ TL+1, gain an additional +1 Momentum. |

If a 0 ATK pool occurs, roll 2d6 and keep the lowest. Success at a Cost is unavailable.

### 3. Defense Roll

Each Trooper rolls individually. Base [[DEF]] is 1, modified by [[Covering Fire]], [[Armor]], and situational effects. Roll DEF dice, take the highest. [[Heavy Armor]] adds +1 to the final result; [[Light Armor]] subtracts −1.

The Trooper takes **Direct Fire** if their result falls at or below the threshold for their [[Defensive Position]]:

| Result | [[Flanked]] | [[In Cover]] | [[Fortified]] |
| ------ | ----------- | ------------ | ------------- |
| 1 | Direct Fire | Direct Fire | Direct Fire |
| 2 | Direct Fire | Direct Fire | Safe |
| 3 | Direct Fire | Safe | Safe |
| 4–6 | Safe | Safe | Safe |

On Direct Fire, the Trooper chooses: suffer an [[Injury]] (severity scales with [[Threat Level]]) or become [[Suppressed]] (if not already Suppressed).

### 4. Momentum Resolution

**On Momentum Gain:** +1 ATK next Offense Roll. [[Flanking]] Troopers choose to become [[Engaged]] or stay Flanking at −1 DEF. [[Fortified]] Troopers choose to become [[Limited]] or move to Engaged/In Cover.

**On Momentum Loss:** [[Flanked]] Troopers must Fall Back next Exchange or suffer −1 DEF.

If Momentum reaches **VICTORY**, the [[Engagement]] is won. If it reaches **DEFEAT**, the Squad is routed via [[Disengage]].

### 5. Enemy Tactics

Roll 1d6 + [[Threat Level]]. Results of 5+ trigger a Tactic: Reposition, Scatter, Pinned Down, Encircle, Push Forward, or Fall Back. The Sergeant can spend 1 [[Grit]] to nullify it.

If the d6 shows a natural 4+, [[Pressure]] also increases by 1 (max TL+1). Each point of Pressure imposes −1 ATK on the Squad. Pressure can be targeted during [[Fire]] as a [[Hard Target]], with each Hit reducing it by 1.

Then the next [[Exchange]] begins.

## After the Engagement

When the fighting ends, take a moment for an **After-Action Report**: which Trooper took the biggest risk, what moment the squad would still be talking about, whether anyone's reputation changed. These notes feed into the [[Field Report]] at the end of the mission.

After the mission itself, surviving Troopers regain [[Grit]] (and earn +1, max 3), injuries are treated, and the Squad earns Requisition to spend on gear. Any Trooper who ended the mission [[Wounded]] or was [[Bleeding Out]] at any point must sit out the next mission.
