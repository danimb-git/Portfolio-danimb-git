<div align="center">
  <img src="dist/images/Logo.png" alt="Logo del portfolio" width="120" />

  <h1>Portfolio — Daniel Moore Burgos</h1>

  <p>
    Portfolio personal responsive para presentar proyectos, servicios y facilitar el contacto profesional.
  </p>

  <p>
    <a href="https://danimb-git.github.io/Portfolio-danimb-git/">Live demo</a>
    ·
    <a href="https://github.com/danimb-git/Portfolio-danimb-git">Repositorio</a>
    ·
    <a href="mailto:daniel.moore04@gmail.com">Contacto</a>
  </p>
</div>

- Diseño limpio con sistema de colores (CSS variables) y layout responsive (desktop/tablet/mobile).
- Interacciones en JS: panel “Sobre mí”, tabla de skills filtrable, tarjetas flip, FAQ accordion y mapa con Leaflet.

---

## Demo / enlaces

- **Live demo:** `https://danimb-git.github.io/Portfolio-danimb-git/` (GitHub Pages)
- **Repositorio:** `https://github.com/danimb-git/Portfolio-danimb-git`
- **CV (PDF):** [CV Daniel Moore (DAW)](<dist/docs/CV Daniel Moore (DAW).pdf>)
- **Wireframes / Figma:** `https://www.figma.com/design/Vm1bSPfOiRzeAkFpqGLzTg/Portfolio---Maqueta-gr%C3%A0fica?node-id=1-2&t=THDdzR7qwrqzgc3N-1`
- **Contacto:** `daniel.moore04@gmail.com`

---

## Indice (Table of Contents)

- [Contexto y objetivos](#contexto-y-objetivos)
- [Funcionalidades](#funcionalidades)
- [Mapa del sitio](#mapa-del-sitio)
- [Stack y herramientas](#stack-y-herramientas)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Instalacion y uso (local)](#instalacion-y-uso-local)
- [Responsive y diseno](#responsive-y-diseno)
- [SEO y accesibilidad](#seo-y-accesibilidad)
- [Roadmap](#roadmap)
- [Creditos y recursos](#creditos-y-recursos)
- [Licencia](#licencia)
- [Autor](#autor)

---

## Contexto y objetivos

Este proyecto es mi portfolio personal: un sitio estático pensado para mostrar quién soy, qué hago y cómo contactarme.

Además, se trata de un **proyecto educativo** realizado como trabajo de la asignatura **Disseny d’interfícies web** del **CFGS de DAW**.

- **Público objetivo:** recruiters, equipos de producto/startups y posibles clientes.
- **Objetivos:** navegación clara, buena primera impresión visual y conversión (contacto / solicitud de presupuesto).

---

## Funcionalidades

- **Navegación:** header y footer consistentes + enlaces entre secciones.
- **Home:** secciones principales + proyectos y servicios destacados.
- **Sobre mí:** panel dinámico (Sobre mí / Experiencia / Formación / Habilidades / Idiomas) + descarga de CV.
- **Skills:** tabla de competencias con filtro `Frontend / Backend / Soft Skills`.
- **Intereses:** tarjetas “flip” (interacción click para girar).
- **Servicios:** listado + formulario de presupuesto (Formspree) con consentimiento de privacidad.
- **Contacto:** ficha con mapa (Leaflet + OpenStreetMap/Esri) + FAQ accordion + formulario (Formspree).
- **Responsive:** CSS separado por breakpoint (desktop/tablet/mobile).

---

## Mapa del sitio

- **Home:** `dist/index.html`
- **Sobre mí:** `dist/html/aboutme.html`
- **Mis proyectos:** `dist/html/myprojects.html`
  - **Proyecto:** `dist/html/proyecto-runlearn.html`
  - **Proyecto:** `dist/html/proyecto-wildebit.html`
- **Mis servicios:** `dist/html/myservices.html`
- **Contacto:** `dist/html/contact.html`
- **Gracias:** `dist/html/gracias.html`
- **Legal / ayuda (footer):** `dist/html/footerdestination.html`

---

## Stack y herramientas

- **Frontend:** HTML5, CSS3 y JavaScript (vanilla), sin frameworks.
- **Librerías / integraciones:**
  - **Leaflet:** librería JS para renderizar el mapa interactivo en la página de contacto (marcador, zoom y controles).
  - **Tiles de mapa (OpenStreetMap/Esri):** proveedor(es) de teselas usados por Leaflet para mostrar el mapa.
  - **Formspree:** endpoint externo para gestionar el envío de formularios (contacto/presupuesto) sin backend propio.
- **Deploy:** GitHub Pages mediante el paquete `gh-pages` (devDependency). El script `npm run deploy` publica la carpeta `dist/`.
- **Herramientas:** Git/GitHub y VS Code.

---

## Estructura de carpetas

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

## Instalacion y uso (local)

1. Clona el repo:
   ```bash
   git clone https://github.com/danimb-git/Portfolio-danimb-git.git
   cd Portfolio-danimb-git
   ```
2. Abre `dist/index.html` directamente en tu navegador **o** usa una extensión tipo **Live Server** apuntando a `dist/`.

### Deploy a GitHub Pages

```bash
npm install
npm run deploy
```

---

## Responsive y diseño

El portfolio está pensado para verse bien en **desktop, tablet y móvil**. La base de estilos se define para pantallas grandes y, a partir de ahí, se aplican ajustes progresivos para reducir columnas, reorganizar secciones y mantener la legibilidad.

- **Breakpoints:**
  - **Tablet:** `max-width: 900px`
  - **Mobile:** `max-width: 600px`
- **CSS por capas (1 archivo por breakpoint):**
  - `desktop.css` contiene el estilo base (layout, tipografías, variables y componentes).
  - `tablet.css` se carga con `media="screen and (max-width: 900px)"` y ajusta el layout a pantallas medianas.
  - `mobile.css` se carga con `media="screen and (max-width: 600px)"` y optimiza la experiencia en móvil.
- **Layout responsive:** combinación de **Flexbox/Grid** para que listas/galerías pasen de varias columnas a menos columnas (o una sola) y secciones que en desktop están en horizontal se apilen en vertical.
- **Consistencia visual:** paleta centralizada en variables CSS (`:root`), con sombras/bordes/espaciados coherentes para reutilizar componentes (cards, botones, secciones destacadas) en todas las páginas.
- **Verificación:** comprobación de los puntos de corte con el modo responsive del navegador (DevTools) para asegurar que no haya desbordes y que la navegación siga siendo cómoda.

---

## SEO y accesibilidad

- **SEO básico:** `meta viewport`, estructura por páginas y títulos por sección.
- **Accesibilidad:** uso de semántica HTML, `alt` en iconos/imágenes y `aria-label` en navegación.
- **Formularios:** labels visibles + `required` donde aplica.

---

## Roadmap

- Buscador interno real (ahora es UI).
- Añadir más proyectos y filtros por tags.
- Dark mode (opcional) y mejoras de Lighthouse.
- i18n (ES/CAT/EN).
- Actualizar enlaces de redes (LinkedIn/Instagram/etc.) a perfiles reales.

---

## Creditos y recursos

- **Mapas:** Leaflet + tiles de OpenStreetMap y Esri.
- **Formularios:** Formspree (`action` en `contact.html` y `myservices.html`).
- **Iconos/recursos:** SVG dentro de `dist/icons/`.

---

## Licencia

ISC.

---

## Autor

- **Daniel Moore Burgos**
- GitHub: `https://github.com/danimb-git`
- Email: `daniel.moore04@gmail.com`
