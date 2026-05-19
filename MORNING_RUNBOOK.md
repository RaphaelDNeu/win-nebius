# Morning runbook for Raphael
Date: 17 May 2026 (interview 22 May 2026)

This summarizes what I did overnight and what is left for you in the
morning. Everything is reversible.

## 1. China energy fact-check, slide 2.4
Full report at `/tmp/factcheck.md`.

Two corrections were applied:
- "more than the US has added in its history" was FALSE
  (US lifetime build-out is ~1,250 GW). Changed to
  "roughly ten times what the US added the same year"
  (~56 GW US 2024, accurate and more punchy).
- "Power is 60 to 70 percent of model operating costs" was weakly
  sourced. Changed to "Power is the single largest line in inference
  operating cost," which is fully defensible.

The Goldman Sachs attribution was added to the 400 GW spare-by-2030
secondary stat so the source lands on the slide. Confirmed claims
left untouched: 543 GW, Feb 2026 OpenRouter crossover, all dated.

## 2. Territory plan changes, FINAL vs v5
Applied in the previous session, summarized here so you know what is
already in the deck:
- Slide 1.1 speaker notes: replaced the vague "AI factory" line with
  Booking 480 models / 400B preds, Adyen 1.4B params, TomTom Orbis
  Maps platform.
- Slide 4.1 thesis: added "full-stack, low-TCO sovereignty story"
  and the "AI-engineering community underpins both" beat.
- Slide 4.3 footer: enriched with Amsterdam HQ + Finland DC + Paris
  GPU cluster footprint.
- Slide 4.4 Picnic/Cradle card: aligned with FINAL's "Picnic trains
  in-house" framing and Cradle's UCSF protein reference.
- Slide 4.7 callout: added "post-training" qualifier on the financial
  services pilot.

## 3. Hosting on GitHub Pages
The repo is git-initialised locally with one commit on `main`. The
private materials (territory plan docx files, brief, screenshot, the
generated deck.pdf) are excluded via `.gitignore` so they will NOT
push.

To deploy in the morning:
```
gh repo create nebius-benelux-deck --public --source=. --push
# OR, if you prefer to set up manually:
#   git remote add origin git@github.com:<your-handle>/<repo>.git
#   git push -u origin main
```

Then on github.com:
1. Open the repo > Settings > Pages.
2. Source: "Deploy from a branch", Branch: `main`, Folder: `/ (root)`.
3. Save. URL appears at `https://<handle>.github.io/<repo>/` within
   ~60 seconds.

Yes, hosting now and editing later works perfectly. Every push
re-deploys in about a minute. No build step.

## 4. PDF export, two paths
You have two ways to produce a PDF for emailing.

### Path A, manual (the README-documented path, you already know this)
1. Start the server: `python3 -m http.server 8000`.
2. Open `http://localhost:8000/?print-pdf` in Chrome.
3. Wait 1 second, hit Cmd+P.
4. Destination: Save as PDF.
5. Layout: Landscape. Paper: A4 or Letter. Margins: None.
   Enable Background graphics. Save.

This path is what the README documents and what I confirmed still
works.

### Path B, automated (new tonight)
A `deck.pdf` was generated for you at the repo root, 24 pages, all
slides included. It uses a Python script under `scripts/` that drives
Chrome via DevTools Protocol so it waits for reveal's print-ready
event before printing (this is what regular `chrome --print-to-pdf`
does not do, hence the manual path was needed before).

**Verified visually** by rendering pages 3, 9, 19, 21, 24 to PNGs
and inspecting them: all card grids, data callouts, and bar charts
render with their full body content (i.e. the "fragment fade-up"
animations are flattened to fully-visible in print mode, as expected
from `pdfSeparateFragments: false` in `index.html`). The fact-check
edits to slide 2.4 and the FINAL territory plan edits to slides 4.4
and 4.7 are present in the PDF.

To regenerate after edits:
```
python3 -m http.server 8000          # in one terminal
./scripts/make-pdf.sh http://localhost:8000/?print-pdf deck.pdf
```

Requirements: macOS, Chrome installed at the standard location,
`pip3 install --user websocket-client` (script auto-installs on
first run).

## 5. PowerPoint
There is no clean reveal.js to PowerPoint path. The honest options
are:
- Send the PDF as the email attachment (industry-standard for
  interview decks, accepted everywhere).
- If they specifically request PowerPoint, you would need to rebuild
  the deck in Keynote/PowerPoint manually. Not recommended.
  
The link plus PDF combination covers every recipient.

## 6. Editability double-check
Confirmed:
- All slide copy lives in `content.js`. Edit a string, save, refresh
  the browser. Reveal picks it up. No build step, no transpilation.
- Theme tokens are CSS variables in `css/theme.css`. Change a hex
  value and every slide updates.
- Adding a slide: copy a slide object inside `slides: [...]`, give
  it a new id, set the archetype, fill in the data. Save.
- Reordering: drag slide objects up or down inside the array.
- Replacing a placeholder photo: drop a JPG into `images/` with the
  filename listed in `images/README.txt`.

You can do all of this yourself in any editor. No tooling needed.

## 7. What's still open for you to look at
- Section 3 (the deal case study) is still bracketed placeholder
  copy. You will replace it with the real deal. Edit slides 3.1
  through 3.5 in `content.js`.
- Section 4 cards are spoken-talk surface: each card has 2 bullet
  lines, the panel will hear the rest from you. Confirm the wording
  matches your delivery style.
- Photos for slides 1.3, 2.1, 2.2 are placeholders. Drop real JPGs
  into `images/` with the exact filenames in `images/README.txt` to
  replace.
- The Section 2.4 thesis still has the fact-check status line in
  the speaker notes. You can delete that note once you have read
  it.

## 8. What I am NOT doing without your sign-off
- Pushing the repo anywhere.
- Touching Section 3 content (placeholders by design).
- Sending or scheduling anything.
- Changing the deck visual system, archetypes, or layout.
