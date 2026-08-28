# System Architecture Documentation

**Project:** Portfolio Trần Kim Thắng  
**Concept:** Old Hanoi Newspaper Interactive Editorial Experience (Báo Hà Nội xưa)  
**Status:** Phase 01 — Project Foundation & Architecture

---

## 1. Architectural Layers & Separation of Concerns

The architecture is strictly organized into 3 distinct, unidirectional layers:

```text
┌────────────────────────────────────────────────────────┐
│ 1. CONTENT LAYER (DOM-First)                           │
│    Next.js Server Components, Semantic HTML, MDX      │
├────────────────────────────────────────────────────────┤
│                          ↓                             │
├────────────────────────────────────────────────────────┤
│ 2. INTERACTION LAYER (Motion & Scroll)                 │
│    Lenis (Smooth Scroll) + GSAP + ScrollTrigger        │
├────────────────────────────────────────────────────────┤
│                          ↓                             │
├────────────────────────────────────────────────────────┤
│ 3. IMMERSIVE LAYER (Isolated WebGL)                    │
│    Three.js, Custom Shaders, Post-processing           │
└────────────────────────────────────────────────────────┘
```

### Layer Responsibilities:
1. **Content Layer (`src/features/*`, `src/components/*`, `src/content/*`)**:
   - Renders semantic, readable, accessible HTML markup.
   - Fully functions without JavaScript or WebGL enabled.
   - Primary content (headlines, articles, project metadata) is server-rendered for instant indexing and zero layout shifts.

2. **Interaction Layer (`src/motion/*`)**:
   - Manages single-instance Lenis smooth scrolling.
   - Synchronizes scroll events with GSAP `ScrollTrigger`.
   - Drives editorial transitions and section pins.
   - Strictly respects `prefers-reduced-motion`.

3. **Immersive Layer (`src/experience/*`)**:
   - Isolated WebGL canvas loaded dynamically (`ssr: false`).
   - Renders visual enhancements (paper lighting, ambient particles, curl effects).
   - Zero coupling with core content: removing `/src/experience` leaves the entire portfolio 100% operational.

---

## 2. Dependency Direction & Module Boundaries

The project enforces strict top-to-bottom dependency hierarchy:

```text
src/app (Composition only)
  ↓
src/features (Domain-specific features: cover, newspaper, projects, archive, about, contact)
  ↓
src/components (Shared UI & layout primitives)
  ↓
src/motion / src/store / src/hooks / src/lib / src/types
```

### Architectural Guardrails:
- **No Global Barrel (`src/index.ts`)**: Barrel exports are isolated at the feature level (e.g. `@/features/newspaper`).
- **WebGL Independence**: Core features must never import from `@/experience`. The experience canvas is mounted via `src/app/providers.tsx` dynamically.
- **Server Components as Default**: Client components (`"use client"`) are restricted only to interactive controls, animation mounts, hooks, and WebGL boundaries.

---

## 3. DOM-First & WebGL Isolation Strategy

- **DOM as Source of Truth**: All text, layout dimensions, and editorial typography are defined in the DOM using CSS Grid and semantic elements (`<article>`, `<header>`, `<section>`).
- **WebGL Canvas Overlay**: The 3D canvas is positioned in a fixed, pointer-events-none background/foreground layer (`fixed inset-0 -z-10`).
- **Dynamic Loading**: `ExperienceCanvas` is loaded via `next/dynamic` on the client side after the initial HTML/DOM is rendered.
- **Fail-Safe Fallback**: If WebGL is unsupported or disabled, CSS gradients and static paper textures provide the authentic newspaper aesthetic without performance penalty.

---

## 4. Future GSAP & Scroll Orchestration

- **Single Lenis Instance**: Managed via `src/motion/smoothScroll.ts` singleton pattern.
- **No Monolithic Master Timeline**: Each feature module owns its scoped animation creation via `src/features/<feature>/animations/`.
- **GSAP Plugin Registration**: Centralized in `src/motion/gsap.ts`, preventing duplicate registrations and SSR hydration crashes.

---

## 5. Future Page-Flip Architecture

- **Phased Implementation (Phase 03)**:
  - Responsive Strategy: On desktop/large screens, scroll progress drives 3D/CSS3D page curling and paper rotation.
  - Mobile/Touch Strategy: Falls back to vertical column scroll and swipe transitions for readability.
- **State Integration**: Reading progress is broadcast through `src/store/uiStore.ts`.

---

## 6. Content Pipeline & MDX Strategy

- **Location**: `src/content/projects/`.
- **Validation**: Schema validated via Zod (`src/content/schema.ts`).
- **Typing**: Strict TypeScript interfaces in `src/types/project.ts`.
- **Static Compilation**: In future phases, MDX will be loaded using `@next/mdx` or `next-mdx-remote` at build time for zero runtime bundle overhead.

---

## 7. Asset Organization Strategy

Assets are categorized strictly under `public/`:
```text
public/
  images/
    projects/      # Project mockups and editorial screenshots
    editorial/     # Historic Hanoi newspaper cuts and portraits
    archive/       # Archived documents and artifacts
  textures/
    paper/         # High-res seamless paper textures
    noise/         # Film and paper grain noise maps
    halftone/      # Dot and line halftone patterns
    ink/           # Ink bleed and smudge masks
  models/          # GLTF/GLB 3D newspaper meshes (lazy-loaded)
  audio/           # Ambient sound effects (page flip, typewriter)
  icons/           # Editorial iconography and emblems
```

---

## 8. Responsive & Performance Strategy

1. **Device Performance Tiers (`high` | `medium` | `low`)**:
   - `high`: Full WebGL effects, high-res textures, smooth paper curl shaders.
   - `medium`: Lightweight WebGL particles, standard paper shaders.
   - `low`: CSS-only paper textures, static overlays, WebGL disabled.
2. **First Contentful Paint (FCP)**:
   - Initial DOM load does not block on Three.js, audio files, or 3D models.
3. **Accessibility**:
   - When `prefers-reduced-motion: reduce` is active, Lenis smooth scrolling and transform animations are bypassed.

---

## 9. Dependency Roadmap & Postponed Libraries

| Library | Status | Reason / Future Target Phase |
| :--- | :--- | :--- |
| `next`, `react`, `react-dom` | Installed | App foundation |
| `typescript`, `tailwindcss` | Installed | Tooling & semantic styling |
| `gsap`, `lenis` | Installed | Interaction & scroll engine foundation |
| `three`, `@types/three` | Installed | Immersive layer foundation |
| `zustand`, `zod`, `clsx`, `tailwind-merge` | Installed | State, schema validation & class utilities |
| `@react-three/fiber`, `@react-three/drei` | Postponed | Evaluated in Phase 03 if R3F declarative 3D is required over vanilla Three.js |
| `@next/mdx` / `next-mdx-remote` | Postponed | Scheduled for Phase 04 (MDX Article Pipeline) |
| `howler` / Web Audio API | Postponed | Scheduled for Phase 05 (Audio Experience) |
| `glslify` / shader loaders | Postponed | Scheduled for Phase 03 (Custom GLSL Shaders) |
