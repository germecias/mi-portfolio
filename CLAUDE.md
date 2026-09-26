# Portfolio de Editor de Video - Contexto del Proyecto

## Stack
- React + Vite
- Tailwind CSS v4 (usa `@theme` en index.css, NO tailwind.config.js ni @tailwind directives)
- @tailwindcss/vite como plugin en vite.config.js
- Framer Motion (animaciones de componentes React)
- GSAP (animaciones de scroll más cinematográficas)
- React Router (si se agregan páginas individuales por proyecto)
- Lucide React (iconos)

## Configuración importante
- Tailwind v4: los estilos custom (colores, fuentes) van en `src/index.css` con `@theme { --color-x: ...; --font-x: ...; }`
- El plugin de Tailwind está en `vite.config.js`, no hay archivo de config separado

## Estructura de carpetas

src/
components/
layout/ → Navbar, Footer
sections/ → Hero, About, ProjectsGrid, Contact
ui/ → ProjectCard, ProjectModal, Button, AnimatedText
shared/ → SectionWrapper (wrapper con animación de scroll reutilizable)
data/
projects.js → array de proyectos (ver estructura abajo)
hooks/
useScrollAnimation.js
lib/
utils.js


## Estructura de datos de proyectos (`data/projects.js`)
Cada proyecto tiene: `id`, `title`, `role`, `year`, `tags` (array), `videoId`, 
`videoSource` ("vimeo" o "youtube"), `thumbnail` (path), `description`.

## Decisiones de diseño
- Videos embebidos vía Vimeo/YouTube (no hosteados localmente) por performance
- Modal/lightbox para reproducir cada proyecto a pantalla completa
- Animaciones de scroll sutiles (fade + slide), evitar sobrecargar
- Estilo: [completar: minimalista / oscuro cinematográfico / colorido]

## Estado actual
- Setup base funcionando (Vite + React + Tailwind v4 confirmado con test visual)
- Próximo paso: construir Hero.jsx con animación de entrada