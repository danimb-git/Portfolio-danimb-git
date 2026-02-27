<div align="center">
  <img src="dist/images/Logo.png" alt="Portfolio logo" width="120" />

  <h1>Portfolio — Daniel Moore Burgos</h1>

  <p>
    Responsive personal portfolio to showcase projects, services and provide professional contact information.
  </p>

  <p>
    <a href="https://danimb-git.github.io/Portfolio-danimb-git/">Live demo</a>
    ·
    <a href="https://github.com/danimb-git/Portfolio-danimb-git">Repository</a>
    ·
    <a href="mailto:daniel.moore04@gmail.com">Contact</a>
  </p>
</div>

- Clean design with a color system (CSS variables) and responsive layout (desktop/tablet/mobile).
- JS interactions: "About me" panel, filterable skills table, flip cards, FAQ accordion and Leaflet map.

---

## Demo / Links

- **Live demo:** `https://danimb-git.github.io/Portfolio-danimb-git/` (GitHub Pages)
- **Repository:** `https://github.com/danimb-git/Portfolio-danimb-git`
- **CV (PDF):** [CV Daniel Moore (DAW)](<dist/docs/CV Daniel Moore (DAW).pdf>)
- **Wireframes / Figma:** `https://www.figma.com/design/Vm1bSPfOiRzeAkFpqGLzTg/Portfolio---Maqueta-gr%C3%A0fica?node-id=1-2&t=THDdzR7qwrqzgc3N-1`
- **Contact:** `daniel.moore04@gmail.com`

---

## Table of Contents

- [Context and Goals](#context-and-goals)
- [Features](#features)
- [Site Map](#site-map)
- [Tech Stack and Tools](#tech-stack-and-tools)
- [Folder Structure](#folder-structure)
- [Installation and Local Usage](#installation-and-local-usage)
- [Responsive Design](#responsive-design)
- [SEO and Accessibility](#seo-and-accessibility)
- [Roadmap](#roadmap)
- [Credits and Resources](#credits-and-resources)
- [License](#license)
- [Author](#author)

---

## Context and Goals

This project is my personal portfolio: a static site designed to showcase who I am, what I do and how to get in touch with me.

It is also an **educational project** completed as coursework for the **Web Interface Design** subject in the **CFGS DAW (Web Application Development)** program.

- **Target audience:** recruiters, product teams/startups and potential clients.
- **Goals:** clear navigation, strong visual first impression and conversion (contact / quote request).

---

## Features

- **Navigation:** consistent header and footer + links between sections.
- **Home:** main sections + featured projects and services.
- **About me:** dynamic panel (About me / Experience / Education / Skills / Languages) + CV download.
- **Skills:** competency table with `Frontend / Backend / Soft Skills` filter.
- **Interests:** flip cards (click interaction to flip).
- **Services:** listing + quote request form (Formspree) with privacy consent.
- **Contact:** info card with map (Leaflet + OpenStreetMap/Esri) + FAQ accordion + form (Formspree).
- **Responsive:** separate CSS per breakpoint (desktop/tablet/mobile).

---

## Site Map

- **Home:** `dist/index.html`
- **About me:** `dist/html/aboutme.html`
- **My projects:** `dist/html/myprojects.html`
  - **Project:** `dist/html/proyecto-runlearn.html`
  - **Project:** `dist/html/proyecto-wildebit.html`
- **My services:** `dist/html/myservices.html`
- **Contact:** `dist/html/contact.html`
- **Thank you:** `dist/html/gracias.html`
- **Legal / help (footer):** `dist/html/footerdestination.html`

---

## Tech Stack and Tools

- **Frontend:** HTML5, CSS3 and JavaScript (vanilla), no frameworks.
- **Libraries / integrations:**
  - **Leaflet:** JS library to render the interactive map on the contact page (marker, zoom and controls).
  - **Map tiles (OpenStreetMap/Esri):** tile provider(s) used by Leaflet to display the map.
  - **Formspree:** external endpoint to handle form submissions (contact/quote) without a custom backend.
- **Deploy:** GitHub Pages via the `gh-pages` package (devDependency). The `npm run deploy` script publishes the `dist/` folder.
- **Tools:** Git/GitHub and VS Code.

---

## Folder Structure

```
dist/
  index.html
  css/
    desktop.css
    tablet.css
    mobile.css
  js/
    about-grid.js
    skills-table.js
    interests-flip.js
    faq.js
    map-contact.js
  html/
    aboutme.html
    myprojects.html
    proyecto-runlearn.html
    proyecto-wildebit.html
    myservices.html
    contact.html
    gracias.html
    footerdestination.html
  images/
  icons/
  docs/
    CV Daniel Moore (DAW).pdf
```

---

## Installation and Local Usage

1. Clone the repo:
   ```bash
   git clone https://github.com/danimb-git/Portfolio-danimb-git.git
   cd Portfolio-danimb-git
   ```
2. Open `dist/index.html` directly in your browser **or** use a **Live Server** extension pointing to `dist/`.

### Deploy to GitHub Pages

```bash
npm install
npm run deploy
```

---

## Responsive Design

The portfolio is designed to look good on **desktop, tablet and mobile**. Base styles are defined for large screens and progressive adjustments are applied from there to reduce columns, reorganize sections and maintain readability.

- **Breakpoints:**
  - **Tablet:** `max-width: 900px`
  - **Mobile:** `max-width: 600px`
- **Layered CSS (1 file per breakpoint):**
  - `desktop.css` contains the base styles (layout, typography, variables and components).
  - `tablet.css` is loaded with `media="screen and (max-width: 900px)"` and adjusts the layout for medium screens.
  - `mobile.css` is loaded with `media="screen and (max-width: 600px)"` and optimizes the experience for mobile.
- **Responsive layout:** combination of **Flexbox/Grid** so that lists/galleries go from multiple columns to fewer columns (or a single one) and sections that are horizontal on desktop stack vertically.
- **Visual consistency:** centralized palette in CSS variables (`:root`), with consistent shadows/borders/spacing to reuse components (cards, buttons, featured sections) across all pages.
- **Verification:** breakpoint testing with the browser's responsive mode (DevTools) to ensure there are no overflows and that navigation remains comfortable.

---

## SEO and Accessibility

- **Basic SEO:** `meta viewport`, page-based structure and section headings.
- **Accessibility:** semantic HTML, `alt` attributes on icons/images and `aria-label` on navigation.
- **Forms:** visible labels + `required` where applicable.

---

## Roadmap

- Real internal search (currently UI only).
- Add more projects and tag-based filters.
- Dark mode (optional) and Lighthouse improvements.
- i18n (ES/CAT/EN).
- Update social media links (LinkedIn/Instagram/etc.) to real profiles.

---

## Credits and Resources

- **Maps:** Leaflet + OpenStreetMap and Esri tiles.
- **Forms:** Formspree (`action` in `contact.html` and `myservices.html`).
- **Icons/assets:** SVGs in `dist/icons/`.

---

## License

ISC.

---

## Author

- **Daniel Moore Burgos**
- GitHub: `https://github.com/danimb-git`
- Email: `daniel.moore04@gmail.com`
