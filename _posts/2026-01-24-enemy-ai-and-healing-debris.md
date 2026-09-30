---
title: "Enemies, combat & healing debris"
description: The world pushes back — first enemy AI that can damage the player, green debris that heals, and a camera that can lock into a fixed shot.
tags: [Combat, Systems, Camera]
video: /assets/video/2026-01-24-enemy-combat.mp4
image: /assets/video/2026-01-24-enemy-combat.jpg
video_caption: Enemies (red capsules, for now) patrolling and dealing damage; green debris restoring health.
---

The world has teeth now.

- **Enemy AI & combat.** First-pass enemies patrol, notice the player and deal damage to health bar A. They're red capsules for the moment — expressive, I know.
- **Green debris heals.** Debris now comes in more than one flavour. The new green type restores health — the first step toward debris of different colors doing different things.
- **Fixed camera trigger.** Walking up to an anchor now switches the camera to a fixed, composed shot. This is the seed of the more cinematic, movie-like camera the game needs for its big moments.

## Unity gotcha

Every UI element has to live under the `CanvasUI` object, or it simply won't render. Cost me a while to figure out; writing it down so future me doesn't repeat it.

## Next up

A **BornPoint**: when either health value drops to zero, send the player back to the last checkpoint instead of leaving them stranded.
