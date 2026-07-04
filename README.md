# WoodAccent Atelier — Design Prototype

React prototype of the WoodAccent Atelier site, built from the Figma design
([source file](https://www.figma.com/file/lkjIwAwNbGTALcrEz7YVe0?type=design), page "✅ Intro").

Vite + React + React Router. No backend — everything is a client-side prototype.

## Running

```sh
npm install
npm run dev       # dev server
npm run build     # production build to dist/
npm run preview   # serve the production build
```

## Routes

| Route | Component | Figma frame |
|---|---|---|
| `/` | `src/pages/Home.jsx` | `homepage` (407:4027) |
| `/shop` | `src/pages/Shop.jsx` | `room-transformation-store` (457:4027) |
| `/transformation` | `src/pages/Transformation.jsx` | `transformation-page` (457:4122) |
| `/cart` | `src/pages/Cart.jsx` | `cart-configure` (457:4190) |
| `/brief` | `src/pages/Brief.jsx` | `brief-a-project` (457:4259) |
| `/portfolio` | `src/pages/Portfolio.jsx` | `the-portfolio` (457:4329) |
| `/process` | `src/pages/ProcessPage.jsx` | `architectural-process` (459:4026) |
| `/makers` | `src/pages/Makers.jsx` | `the-makers` (459:4082) |
| `/journal` | `src/pages/Journal.jsx` | `journal` (459:4138) |
| `/contact` | `src/pages/Contact.jsx` | `contact` (459:4223) |

## Structure

- `src/styles/global.css` — design tokens (palette, type scale), shared nav/footer/buttons/modal styles
- `src/pages/*.jsx` + `src/pages/*.css` — one component and stylesheet per page,
  each wrapped in a `.page-<name>` scope class
- `src/components/` — shared pieces:
  - `Nav` (per-page Act I/Act II highlight), `Footer`
  - `ProductModal` — quick-view modal from Figma `web-product-modal` (470:4022), opens from the first shop card
  - `OptionGroup` — finish/upholstery radio chips on the product page
- `public/assets/img/` — placeholder artwork

## Notes

- **Fonts**: Spectral (display serif), Space Mono (labels), Hanken Grotesk and
  Gabarito (body), loaded from Google Fonts per the design.
- **Imagery**: the Figma asset CDN was not reachable from the build environment,
  so all photography is stood in by generated wood-toned SVG placeholders in
  `public/assets/img/`. Swap them for the real exports (same filenames) when available.
