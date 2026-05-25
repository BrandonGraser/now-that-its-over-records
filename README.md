# Now That Its Over Records — Website

Static HTML/CSS/JS website for **Now That Its Over Records**, an independent experimental and underground music label.

## Project Structure

```
now-that-its-over-records/
├── index.html              # Homepage
├── pages/
│   ├── releases.html       # Releases catalogue
│   ├── artists.html        # Artist roster
│   ├── shop.html           # Merch / shop
│   ├── submit.html         # Demo submission form
│   ├── about.html          # About the label
│   └── contact.html        # Contact form
├── css/
│   ├── style.css           # Global styles, header, footer, homepage sections
│   └── pages.css           # Interior page styles (grids, forms, buttons)
├── js/
│   └── main.js             # Active nav state, image placeholder fallbacks
├── images/
│   │   ── logo-dog.png     # ← ADD: header dog logo
│   ├── icon-hook.png       # ← ADD: decorative hook doodle (What We Do Different section)
│   ├── icon-cloud.png      # ← ADD: cloud doodle (Creative Channels header)
│   ├── icon-flower.png     # ← ADD: flower doodle (Artists section)
│   ├── channel-placeholder-1.png  # ← ADD: Yellow Fella channel art
│   ├── channel-placeholder-2.png
│   ├── channel-placeholder-3.png
│   ├── release-placeholder-1.png  # ← ADD: release artwork
│   ├── release-placeholder-2.png
│   ├── release-placeholder-3.png
│   ├── release-placeholder-4.png
│   ├── artist-voidcrawler.png     # ← ADD: artist photos
│   ├── artist-palewire.png
│   ├── artist-burialground.png
│   ├── artist-statichymn.png
│   ├── shop-placeholder-1.png     # ← ADD: product photos
│   ├── shop-placeholder-2.png
│   └── shop-placeholder-3.png
└── README.md
```

## Adding Images

Drop your image files into the `images/` folder using the filenames listed above. The site will pick them up automatically — no code changes needed.

## Adding the MadInk Font

1. Place your font files (`.woff2`, `.woff`) in a `fonts/` folder at the project root.
2. Create `css/fonts.css` with an `@font-face` declaration:

```css
@font-face {
  font-family: 'MadInk';
  src: url('../fonts/MadInk.woff2') format('woff2'),
       url('../fonts/MadInk.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

3. Uncomment the `<link rel="stylesheet" href="css/fonts.css" />` line in every HTML file's `<head>`.
4. Also uncomment the `@font-face` block in `css/style.css`.

Until then, the site falls back to `Impact` for headings.

## Running Locally

No build step needed — open `index.html` directly in your browser, or use any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploying

This is a plain static site. Works with:
- **GitHub Pages** — push to `main` branch, enable Pages in repo settings (root `/`)
- **Netlify** — drag the folder into the Netlify dashboard
- **Vercel** — `vercel .` from the project root

## Color Palette

| Variable            | Value     | Use                        |
|---------------------|-----------|----------------------------|
| `--color-black`     | `#0a0a0a` | Text, borders, dark sections |
| `--color-white`     | `#f4f1eb` | Light section text         |
| `--color-cream`     | `#f4f1eb` | Page background            |
| `--color-dark-section` | `#111111` | Channels & About bg     |
