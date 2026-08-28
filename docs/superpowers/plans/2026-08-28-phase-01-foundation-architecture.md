# Phase 01: Project Foundation & Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize and scaffold the production-ready Next.js App Router + TypeScript codebase for the Old Hanoi Newspaper portfolio with strict feature-first architecture, clear 3-layer separation (Content DOM-first, Motion, WebGL lazy-isolated), quality tooling, design token foundations, and validation setup.

**Architecture:** A DOM-first editorial architecture composed of thin Next.js App Router pages delegating to feature modules (`features/*`), decoupled motion infrastructure (`motion/*`), and an isolated, dynamically loadable 3D experience layer (`experience/*`). Core readability functions 100% without WebGL or complex motion scripts.

**Tech Stack:** Next.js (App Router), TypeScript (Strict), Tailwind CSS / CSS Variables (Design Tokens), GSAP, Lenis, Zustand, Zod, Three.js / React Three Fiber (lazy-load isolated), ESLint, Prettier.

## Global Constraints

- Production-ready Next.js App Router + TypeScript (Strict mode enabled).
- Architectural layer order: Content (DOM) → Interaction (GSAP/Lenis) → Immersive (Three.js/GLSL).
- The core readable portfolio must NOT depend on Three.js/WebGL. If `/experience` is deleted, the site still works.
- Server Components by default; `"use client"` only where strictly necessary.
- No final visual design, animations, page-flipping, shaders, 3D models, or audio in Phase 01.
- No fake projects or placeholder content.
- Feature-level barrel exports (`@/features/newspaper`); no global `src/index.ts`.
- Thin `app/` directory (composition only).
- Package installation strictly conservative for Phase 01; future packages documented in `ARCHITECTURE.md`.

---

## Tasks

- [ ] **Task 1: Project Setup & Quality Tooling**
- [ ] **Task 2: Asset Folder Skeleton & Design Tokens**
- [ ] **Task 3: Core Types, Utilities & Progressive Enhancement Hooks**
- [ ] **Task 4: State Management & Motion Infrastructure**
- [ ] **Task 5: Isolated WebGL Experience Layer**
- [ ] **Task 6: Content Schema & Feature Modules Scaffold**
- [ ] **Task 7: App Router Composition & Architecture Validation Page**
- [ ] **Task 8: Documentation (ARCHITECTURE.md, CONTRIBUTING.md) & Full Verification**
