# DTA Design System — Fase 1

Código fuente del sistema de diseño de DTA Sistemas, derivado de la arquitectura
aprobada en Fase 0 y de los mockups de referencia.

## Contenido de este paquete

```
tailwind.config.ts          Tokens de color, tipografía, radios y spacing
styles/globals.css          CSS variables + estilos base + accesibilidad (focus-visible, reduced-motion)
data/navigation.ts          Fuente única de verdad del menú (usada por Navbar y Footer)
components/ui/
  Container.tsx              Wrapper de ancho máximo (1280px)
  Section.tsx                Wrapper de sección con control de tono (light/dark/transparent)
  SectionHeading.tsx          Eyebrow + título con fragmento resaltado + subtítulo
  Button.tsx                  Botón (primary/secondary/dark), soporta href o onClick
  Badge.tsx                   Badge/pill + IconCircle
  ProcessStep.tsx              Paso numerado ("Así trabajamos")
components/cards/
  SolutionCard.tsx             Card de pilar/solución
  SectorCard.tsx                Card de sector (con o sin imagen)
  ProjectCard.tsx                Card de "Soluciones en acción"
components/layout/
  Navbar.tsx                    Navbar responsive con menú móvil
  Footer.tsx                     Footer de 5 columnas sobre fondo navy
app/design-system/page.tsx    Página /design-system que renderiza todo lo anterior junto
```

## Cómo integrarlo

Este paquete asume que ya existe un proyecto Next.js (App Router) con Tailwind CSS
instalado, tal como se definió en la Fase 0. Pasos:

1. Copiar `tailwind.config.ts` a la raíz del proyecto (fusionar si ya existe uno).
2. Copiar el contenido de `styles/globals.css` dentro del `globals.css` del proyecto.
3. Copiar `data/`, `components/` y `app/design-system/` respetando las rutas.
4. Instalar dependencias usadas por estos componentes: `lucide-react` (ya contemplado
   en el stack de Fase 0).
5. Configurar `next/font` para Inter en el `layout.tsx` raíz y exponerlo como
   `--font-inter` (referenciado en `globals.css`).
6. Visitar `/design-system` en desarrollo para validar visualmente.

## Reglas de uso (no negociables, heredadas de Fase 0)

- El azul (`dta-blue-600`) es **acento**, nunca color dominante. Máximo 1–2 bloques
  en tono navy (`dta-navy-900`) por página.
- Numeración (`01`, `02`...) solo en contenido realmente secuencial (procesos), no
  como decoración.
- Todo componente interactivo debe tener estado de foco visible (ya resuelto en
  `globals.css` vía `:focus-visible`).
- No se agregan animaciones que perjudiquen performance — Motion solo para
  microinteracciones puntuales, a implementar en Fase 2 sobre estos componentes base.

## Vista previa interactiva

Junto a este paquete se entrega `dta_design_system_preview.jsx`, una versión
autocontenida (sin imports de proyecto) que renderiza los mismos componentes para
validación visual inmediata, sin necesidad de correr el proyecto Next.js completo.

---
**Estado:** Fase 1 completa — pendiente de tu validación antes de iniciar Fase 2 (Homepage).
