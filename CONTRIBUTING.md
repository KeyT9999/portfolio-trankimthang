# Contributing Guidelines & Development Standards

## 1. Development Scripts

```bash
# Start local development server
npm run dev

# Run TypeScript type check
npm run typecheck

# Run Next.js ESLint check
npm run lint

# Format code with Prettier
npm run format

# Production build
npm run build

# Start production server
npm run start
```

## 2. Architecture Rules

1. **DOM-First Priority**: Always build content as accessible HTML/React Server Components before attaching animations or WebGL effects.
2. **WebGL Isolation**: Never import code from `src/experience/` inside `src/features/` or `src/components/`. All 3D experiences must be mounted via client providers or dynamic lazy-loaders.
3. **Server Components Default**: Keep pages and layout components as Server Components. Add `"use client"` only when accessing hooks, state, DOM events, or animation timelines.
4. **Motion Conventions**: Use the singleton Lenis manager (`@/motion/smoothScroll`) and centralized GSAP configuration (`@/motion/gsap`).
5. **Strict Typing**: All new modules must have explicit TypeScript types. `any` is disallowed.
6. **Feature Isolation**: Place domain components, animations, and types in their respective feature folders (`@/features/<domain>/`).
