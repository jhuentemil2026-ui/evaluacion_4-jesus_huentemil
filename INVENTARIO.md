# Inventario de migración: Evaluación 2 → React

Trazabilidad de lo que se recuperó del portafolio de la Evaluación 2 (HTML, CSS y JavaScript) y de cómo quedó en la versión con React y TypeScript.

## Secciones

| Sección en la E2 | Componente o página en React | Ruta |
|---|---|---|
| Barra de navegación | `components/Navbar/Navbar.tsx` | todas |
| Inicio | `pages/HomePage.tsx` | `/` |
| Sobre mí | `pages/AboutPage.tsx` | `/sobre-mi` |
| Proyectos y filtros | `pages/ProjectsPage.tsx` y `components/ProjectCard/ProjectCard.tsx` | `/proyectos` |
| Habilidades | `pages/SkillsPage.tsx` | `/habilidades` |
| Contacto | `pages/ContactPage.tsx` y `components/ContactForm/ContactForm.tsx` | `/contacto` |

## Estilos

- Se conservaron la paleta, la tipografía (Bricolage Grotesque y Source Sans 3) y las variables CSS de la E2, incluido el tema oscuro con `data-theme="dark"`. Quedaron en `src/index.css`.
- Los selectores de la E2 se renombraron a BEM y se separaron en un archivo CSS por componente.

| Clase en la E2 | Clase en React (BEM) |
|---|---|
| `.site-header`, `.logo` | `.navbar`, `.navbar__logo` |
| `.nav a`, `.nav.open` | `.navbar__link`, `.navbar__nav--open` |
| `.menu-btn`, `.theme-btn` | `.navbar__menu-btn`, `.navbar__button` |
| `.hero`, `.kicker`, `.lead`, `.btn` | `.hero`, `.hero__kicker`, `.hero__lead`, `.hero__button` |
| `.block` | clases de cada página (`.about`, `.projects`, `.skills`, `.contact`) |
| `.chip` | `.projects__chip`, `.projects__chip--active` |
| `.card`, `.tags` | `.project-card`, `.project-card__tags` |
| `.skills li` | `.skills__item` |
| `.field`, `label`, `input`, `.error`, `.status` | `.contact-form__field`, `__label`, `__input`, `__error`, `__status` |

## Interactividad (JavaScript → estado de React)

| Funcionalidad en la E2 | Cómo funciona en React |
|---|---|
| Menú hamburguesa en móvil | `useState` en `Navbar` controla la clase `navbar__nav--open` y `aria-expanded` |
| Modo oscuro | `ThemeContext` (Context API) guarda el tema, lo aplica en `data-theme` y lo recuerda en `localStorage` |
| Filtro de proyectos | `useState` en `ProjectsPage` con el filtro activo y `aria-pressed` en cada botón |
| Validación del formulario | `useState` en `ContactForm` con valores, errores y confirmación, con mensajes asociados a cada campo |

## Cambios y mejoras respecto de la E2

- La navegación por anclas (`#proyectos`) se reemplazó por React Router (`NavLink`), con ruta activa marcada, enlace al inicio siempre disponible y ruta comodín para el 404.
- Los datos que estaban escritos dentro del HTML (proyectos, habilidades, textos) pasaron a `src/data/portfolioData.ts`, con tipos en `src/types/index.ts`.
- Se agregó la sección de repositorios de GitHub en Proyectos, con la API pública de GitHub (`useFetchApi`), y los estados de carga y error.
- El código se separó en componentes con responsabilidad única y props tipadas, sin usar `any`.

## Pendiente o no migrado

- _(Completar si algo de la E2 no se recuperó, por ejemplo el enlace "saltar al contenido".)_