# Dear Z. — website

Source for the *Dear Z.* game website, built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.
Every push to `main` rebuilds the site automatically (takes ~1 minute).

Live: https://xiayu-zhao.github.io/DearZ-web/

## Where things live

| To change…                      | Edit                                   |
|---------------------------------|----------------------------------------|
| Devlog entries                  | `_posts/YYYY-MM-DD-some-title.md`      |
| Chapter cards                   | `_data/chapters.yml`                   |
| Gallery tiles                   | `_data/gallery.yml`                    |
| Soundtrack                      | `_data/soundtrack.yml`                 |
| Progress board                  | `_data/roadmap.yml`                    |
| Footer / social links           | `_data/links.yml`                      |
| Top navigation                  | `_data/nav.yml`                        |
| Home page text (world, pillars) | `index.html`                           |
| Site title, tagline, author     | `_config.yml`                          |
| Colors, fonts, layout           | `assets/css/main.css`                  |
| Images / video / audio          | `assets/img`, `assets/video`, `assets/audio` |

## Add a devlog entry

Create `_posts/2026-10-05-my-update.md`:

```markdown
---
title: "Short, human title"
description: One sentence shown on cards and in link previews.
tags: [Systems, Art]
video: /assets/video/2026-10-05-my-update.mp4     # optional
image: /assets/video/2026-10-05-my-update.jpg     # poster / cover / share image (optional)
video_caption: What the clip shows.               # optional
---

Write the post in Markdown here.
```

It appears on the devlog page and in the home page's "Latest" row automatically.
If it finishes a roadmap item, set that item's `status: done` and `log:` to the post URL
(`/devlog/2026/10/05/my-update/`).

## Preparing media

Keep the repo light — GitHub Pages sites should stay well under 1 GB, and files must be < 100 MB.

**Video** (1920px wide, 30 fps, web-friendly):

```bash
ffmpeg -i raw.mp4 -vf "scale=1920:-2,fps=30" -c:v libx264 -preset slow -crf 25 \
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k assets/video/NAME.mp4
ffmpeg -ss 5 -i raw.mp4 -frames:v 1 -vf scale=1280:-2 -q:v 4 assets/video/NAME.jpg   # poster
```

**Images:** export JPG ~1600–2000px wide for full size plus a ~960px copy for thumbnails.

## Private material

`.gitignore` keeps the raw design docs (`Script_Demo.md`, the ideas catalog, `VisionCanvas.md`)
and the original `images/`, `soundtrack/`, `devLog_video/` folders out of the public repo.
Only what's in `assets/` gets published.

## Preview locally (optional)

Requires Ruby + Bundler:

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000/DearZ-web/
```
