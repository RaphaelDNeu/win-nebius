# Nebius Benelux interview deck

Interactive presentation for the Nebius Benelux Account Executive interview, 22 May 2026. Built on reveal.js 6.0.1, fully self-contained, runs offline.

One codebase, three uses:
1. Interactive HTML deck for live delivery, full screen, keyboard navigable.
2. The same files hosted on GitHub Pages as a shareable link.
3. A PDF export of the same files for follow-up.

## Project layout

```
/index.html          Shell, loads reveal.js, content, archetypes, theme
/content.js          All slide copy, the only file to edit for content changes
/css/theme.css       Nebius theme: palette, typography, archetype styles
/js/archetypes.js    The reusable layout components
/lib/reveal/         Vendored reveal.js 6.0.1, no CDN dependency
/fonts/              Self-hosted Space Grotesk and Inter
/images/             Drop real photos here using the filenames in images/README.txt
/.claude/launch.json Preview server config, ignore for normal use
```

## Edit content

Open `content.js`. Every slide is one entry in `window.DECK_CONTENT.slides`, with three fields:

- `id` slug used for the URL hash and DOM id.
- `archetype` which layout component to use, one of: `title`, `statement`, `image`, `data`, `cards`, `imagedata`, `thesis`, `diagram`, `timeline`, `logos`.
- `data` the archetype-specific payload (headlines, callouts, cards, photos).
- `notes` optional speaker notes, surfaced in reveal.js speaker view.

Change a headline, a number, a card line, or a placeholder by editing `data` in place. Do not touch `js/archetypes.js` or `css/theme.css` for content changes. Section 3 carries bracketed placeholders; replace the bracketed strings when the deal case study is finalized.

To reorder slides, move whole slide objects up or down inside the `slides` array.

To replace a photo, save it into `/images/` using the exact filenames listed in `images/README.txt`. The renderer picks it up automatically and falls back to the styled placeholder if the file is missing.

## Run locally

The deck requires an HTTP server. It will not work from `file://` because browsers block local module and font loads.

From the project root:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/` in any modern browser.

Keyboard:

- Left and right arrows: previous and next slide.
- `F`: fullscreen.
- `S`: open speaker view in a second window (speaker notes plus next-slide preview).
- `Esc`: slide overview grid.
- `B` or `.`: black the screen.

## Export to PDF

reveal.js exports to PDF via Chrome's print pipeline.

1. Start the local server (see above) and open the deck in Google Chrome.
2. Append `?print-pdf` to the URL, so it reads `http://localhost:8000/?print-pdf`.
3. Wait one second for the print layout to render, then open the print dialog (Cmd+P on macOS, Ctrl+P on Windows).
4. Set Destination to "Save as PDF".
5. Set Layout to Landscape.
6. Set Paper size to A4 or Letter, whichever matches the panel's printer.
7. Set Margins to None.
8. Enable Background graphics.
9. Save.

The deck is configured for one PDF page per slide. If the export looks misaligned, hard-refresh after appending `?print-pdf` so reveal.js fully switches into print mode.

decktape exists for command-line export but has install quirks. It is optional, the deck does not depend on it.

## Deploy to GitHub Pages

The deck is GitHub Pages ready with no build step.

1. Create a new public repository on GitHub.
2. Push this directory to the repository's default branch.
3. In the repository settings, open Pages.
4. Source: Deploy from a branch. Branch: `main`, folder: `/ (root)`.
5. Save. GitHub serves the deck at `https://<your-handle>.github.io/<repo-name>/`.

No Jekyll processing is needed because there is no Markdown to render. All files are static.

## Photos and placeholders

The deck ships with styled placeholders for every photo. Real photos go into `/images/` using these exact filenames:

- `vc-event-1.jpg` through `vc-event-4.jpg` for Slide 1.3.
- `hangzhou-skyline.jpg` for Slide 2.1.
- `teaching-rural-china.jpg` for Slide 2.2.

Source photos should be full color. The theme applies a navy duotone scrim and slight desaturation so a rural-China classroom and an Amsterdam VC event read as one visual system. Lime never appears inside a photo, that is enforced by the theme.

## Visual system

Defined in `css/theme.css` as CSS variables.

| Token | Hex | Use |
|---|---|---|
| Page background | `#052B42` | Full-bleed base on every slide |
| Card background | `#203F53` | Content cards |
| Card raised | `#3B565F` | Layered or highlighted cards, used sparingly |
| Lime accent | `#E1FF4F` | The one thing that matters on the slide |
| Electric purple | `#6D68FF` | Secondary accent, context, history |
| Purple tint | `#9997FA` | Historical or de-emphasized data series |
| Headline white | `#F6FEFF` | Headlines |
| Body text | `#9DB0BD` | Paragraph and supporting text |

Fonts: Space Grotesk (display) and Inter (body), both self-hosted in `/fonts`.

Rule the theme enforces: two data colors only. Lime is always the point, purple is always the context. No third data color anywhere.

## Troubleshooting

- Blank deck and a console error about CORS: you opened `file:///`. Start the local server and use `http://localhost:8000/`.
- White flash on slide transitions: confirm `css/theme.css` sets `background` on `html`, `body`, `.reveal-viewport` and `.reveal`. Reveal 6 wraps the deck in `.reveal-viewport` and it must be navy too.
- PDF cuts slides in half: confirm `pdfMaxPagesPerSlide: 1` is set in the `Reveal.initialize` call in `index.html`.
- Photo not showing: confirm the filename in `/images/` matches the entry in `content.js`. The renderer falls back to a placeholder if the file is missing.
- Speaker view shows blank notes: confirm the slide has a `notes` field in `content.js`.
