# WoodAccent Atelier — Design Prototype

Static prototype of the WoodAccent Atelier site, built from the Figma design
([source file](https://www.figma.com/file/lkjIwAwNbGTALcrEz7YVe0?type=design), page "✅ Intro").

## Pages

| Page | File | Figma frame |
|---|---|---|
| Homepage | `index.html` | `homepage` (407:4027) |
| Shop / The Archive | `shop.html` | `room-transformation-store` (457:4027) |
| Product / Transformation | `transformation.html` | `transformation-page` (457:4122) |
| Cart / Commission | `cart.html` | `cart-configure` (457:4190) |
| Brief a Project | `brief.html` | `brief-a-project` (457:4259) |
| Portfolio | `portfolio.html` | `the-portfolio` (457:4329) |
| Process | `process.html` | `architectural-process` (459:4026) |
| The Makers | `makers.html` | `the-makers` (459:4082) |
| Journal | `journal.html` | `journal` (459:4138) |
| Contact | `contact.html` | `contact` (459:4223) |
| Product quick-view modal | `js/main.js` | `web-product-modal` (470:4022) |

## Running

No build step. Serve the folder with any static server:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

- `css/styles.css` — design tokens (palette, type scale), shared nav/footer/buttons/modal
- Per-page layout styles live in a `<style>` block in each page
- `js/main.js` — product quick-view modal and finish/upholstery option chips
- `assets/img/` — placeholder artwork

## Notes

- **Fonts**: Spectral (display serif), Space Mono (labels), Hanken Grotesk and
  Gabarito (body), loaded from Google Fonts per the design.
- **Imagery**: the Figma asset CDN was not reachable from the build environment,
  so all photography is stood in by generated wood-toned SVG placeholders in
  `assets/img/`. Swap them for the real exports (same filenames) when available.
