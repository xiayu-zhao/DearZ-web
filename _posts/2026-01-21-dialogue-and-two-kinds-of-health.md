---
title: "A dialogue system, and two kinds of health"
description: Characters can talk now — plus a Physical and a Mental health bar, the two things the player has to protect.
tags: [Narrative, Player, Tools]
video: /assets/video/2026-01-21-dialogue-health.mp4
image: /assets/video/2026-01-21-dialogue-health.jpg
video_caption: Walking into a dialogue trigger (the Doctor) and the new pair of health bars.
---

## Dialogue

Added a **dialogue system** made of three parts: a *sequence* (the lines), a *system* (the UI) and a *manager* (who's speaking, and when).

Adding a new conversation is now a repeatable recipe:

1. Drag a **dialogue trigger** into the scene.
2. Create a **dialogue sequence** asset (under `projectDearZ/dialogue sequence`).
3. Assign the sequence to the trigger.
4. Register it with the **dialogue manager**.

The dialogue UI itself lives in the dialogue system, so styling it later is a one-place change. The first speaker is, fittingly, the Doctor.

## Health × 2

The player now has **two health bars**. In the game they'll be **Physical** (pink) and **Mental** (baby blue) — some things hurt the body, some things hurt the mind, and you'll have to look after both.

## Workflow note

A small lesson from working with Cursor + Claude: don't `@`-mention the whole Scripts folder when asking for help. It burns far more context than mentioning nothing at all and letting the assistant search.
