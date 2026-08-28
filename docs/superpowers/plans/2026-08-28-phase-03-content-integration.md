# Phase 03: Real Portfolio Content Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate authentic, verified CV data for Trần Kim Thắng (Backend Developer Intern — Java, Spring Boot, NodeJS, FPT University) across centralized content models, project dossiers (`restaurant-booking-platform`, `ebook-reading-website`), education, awards, certifications, technical skills index, and reusable project detail layouts, with strict privacy controls and zero fabricated claims.

**Architecture:** Centralized, strictly typed content layer in `src/content/` (`profile.ts`, `education.ts`, `awards.ts`, `certifications.ts`, `skills.ts`, `projects/`). Server Components derive rendering directly from validated data structures. Privacy architecture cleanly separates public defaults from full source records. Zero fake projects or placeholder routes.

**Tech Stack:** Next.js (App Router), React 19 Server Components, TypeScript (Strict), Zod schema validation, Tailwind CSS / Design System Tokens.

## Global Constraints

- Strict adherence to source CV facts. Never invent clients, metrics, awards, technologies, or employment histories.
- Privacy architecture: Personal phone, birth date, and full street address configurable and hidden publicly by default.
- Real project slugs only: `restaurant-booking-platform` (DA-001) and `ebook-reading-website` (DA-002).
- Tone: Technical, precise, calm, confident, editorial Vietnamese with natural English technical terms.
- No animations, GSAP timelines, WebGL effects, or audio in this phase (preserved for Phase 04+).
- All linting, typechecking, and production SSG builds must succeed with 0 errors.

---

## Tasks

- [ ] **Task 1: Structured Content Models & Privacy Architecture**
- [ ] **Task 2: Front Page & Lead Story Integration (Trang 01)**
- [ ] **Task 3: Projects, Education, Awards, Skills & Contact Sections (Trang 02–05)**
- [ ] **Task 4: Content-Driven Project Detail Template & Routes**
- [ ] **Task 5: SEO, Metadata & Full Build Verification**
