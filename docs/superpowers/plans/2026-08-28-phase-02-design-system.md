# Phase 02: Old Hanoi Newspaper Design System & Static Editorial Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a comprehensive, authentic Old Hanoi Newspaper Design System (1920s–1930s Vietnamese editorial print aesthetics + modern digital editorial craft), generate optimized web derivatives of archival assets, implement semantic CSS design tokens & typography, build reusable editorial layout primitives, compose a static editorial homepage, and document everything in `DESIGN_SYSTEM.md`.

**Architecture:** DOM-first semantic layout using CSS Grid and CSS variables for paper material and ink states. Next.js font optimization for Vietnamese editorial typography. Web-optimized image derivatives in `public/images/generated/` and `public/textures/generated/`. Zero complex runtime JS dependencies for rendering the static design.

**Tech Stack:** Next.js (App Router), React 19 Server Components, TypeScript (Strict), Tailwind CSS / CSS Variables, `next/font/google` (Newsreader, Playfair Display, JetBrains Mono), `sharp` or Node canvas/image processing script for web derivatives.

## Global Constraints

- Authentic Old Hanoi / Indochina 1920s-1930s print culture, avoiding generic Western vintage newspaper cliches or heavy sepia filters.
- Master archival files must remain untouched; create optimized WebP/AVIF web derivatives in `public/images/generated/` and `public/textures/generated/`.
- No animated page flips, GSAP timelines, WebGL effects, audio, or preloader in this phase.
- Server Components by default; static layout must look award-worthy with zero JavaScript execution.
- Vietnamese diacritics must render flawlessly across all typographic levels.
- Reusable, composable components with semantic HTML (`<article>`, `<section>`, `<header>`, `<figure>`, `<figcaption>`).

---

## Tasks

- [ ] **Task 1: Archival Asset Optimization & Web Derivative Generation**
- [ ] **Task 2: Design Token & Typography System Expansion**
- [ ] **Task 3: Reusable Editorial Layout Primitives & Motifs**
- [ ] **Task 4: Static Editorial Homepage Composition**
- [ ] **Task 5: Documentation (DESIGN_SYSTEM.md) & Full Verification**
