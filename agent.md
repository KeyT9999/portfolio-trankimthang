# AGENT.md — Rules for Antigravity / AI Coding Agents

> **Repository:** PortfolioTranKimThang  
> **Priority:** Mandatory project operating rules  
> **Audience:** Antigravity, coding agents, autonomous AI tools, future contributors

---

# 1. Mandatory reading order

Before modifying the repository, read these files in order:

```text
1. AGENT.md
2. DESIGN.md / design.md
3. ARCHITECTURE.md
4. CONTRIBUTING.md
5. src.md
6. tech.md
7. current task / phase specification
```

If two documents conflict, use this priority:

```text
Explicit current user instruction
↓
AGENT.md
↓
DESIGN.md
↓
ARCHITECTURE.md
↓
CONTRIBUTING.md
↓
src.md / tech.md
↓
implementation details
```

Never silently resolve a meaningful conflict.

Report it before making a destructive architectural decision.

---

# 2. Core mission

Build a production-quality interactive portfolio based on:

> **Old Hanoi Newspaper × Modern Digital Editorial Design**

The system must remain:

- readable
- maintainable
- lightweight
- scalable
- accessible
- performance-aware
- modular
- culturally intentional

Do not optimize for visual spectacle at the expense of code quality or usability.

---

# 3. Phase discipline

The project is phase-driven.

Current phase must always be identified before implementation.

Official phase order:

```text
PHASE 01 — Foundation & Architecture
PHASE 02 — Old Hanoi Newspaper Design System
PHASE 03 — Static Newspaper Content System
PHASE 04 — Motion & Scroll Storytelling
PHASE 05 — Page Turn Experience
PHASE 06 — WebGL / 3D Enhancement
PHASE 07 — Polish / Sound / Micro-interactions
PHASE 08 — Optimization / Accessibility / Production
```

## Hard rule

**Never begin the next phase automatically.**

At the end of each phase:

1. validate the project
2. report results
3. stop
4. wait for explicit user approval

Do not "helpfully" continue.

---

# 4. Preserve approved architecture

Phase 01 architecture is considered approved unless the user says otherwise.

Do not refactor folder structure, dependency boundaries, or rendering strategy simply because another pattern is preferred.

Refactor only when:

- there is a real technical problem
- there is measurable duplication
- a dependency causes production issues
- the current architecture blocks the requested feature

Before a significant refactor, explain:

```text
Problem
Why current design fails
Proposed change
Files affected
Risk
Migration impact
```

Do not perform broad architectural rewrites silently.

---

# 5. Architecture direction

The project follows:

```text
CONTENT
React / HTML / MDX

↓

INTERACTION
GSAP / ScrollTrigger / Lenis

↓

IMMERSIVE
Three.js / R3F / GLSL
```

The philosophy is:

> **DOM FIRST. WEBGL SECOND.**

Core content must never depend on WebGL.

If the entire `src/experience/` directory is removed, the readable portfolio should still be able to function.

---

# 6. Server / client component rules

Use Next.js Server Components by default.

Add `"use client"` only when technically required for:

- browser APIs
- GSAP execution
- Zustand client state
- interactive hooks
- WebGL
- event handlers
- client-only libraries

Never convert a large subtree into client components for convenience.

Before adding `"use client"`, ask:

> Does this component actually require client execution?

If not, keep it server-side.

---

# 7. Dependency rules

Do not install libraries merely because they may be useful later.

Before adding any dependency, verify:

```text
[ ] Is it required by the current phase?
[ ] Can the browser/platform already do this?
[ ] Is there already a library in the project solving it?
[ ] Does it materially increase bundle size?
[ ] Does it create peer dependency complexity?
[ ] Can it be lazy-loaded?
```

When adding a dependency, report:

```text
package
reason
where it is used
client/server impact
bundle/performance considerations
```

Avoid duplicate solutions.

Examples:

Do not simultaneously introduce multiple:

- smooth-scroll engines
- animation libraries
- state managers
- page-flip libraries
- 3D frameworks

without explicit justification.

---

# 8. One Lenis instance only

The application may have only one Lenis smooth-scroll instance.

Never initialize Lenis inside individual sections.

Correct:

```text
Application-level smooth-scroll manager
↓
Sections subscribe/use scroll state
```

Incorrect:

```text
Hero → Lenis
Projects → Lenis
Archive → Lenis
PageFlip → Lenis
```

---

# 9. GSAP rules

GSAP must be centrally configured.

Register plugins once.

Avoid a single giant global timeline.

Each feature/section should own its animation lifecycle.

Animations must:

- be scoped to the feature
- clean up on unmount
- survive navigation
- survive resize where relevant
- respect reduced motion

Do not create uncontrolled ScrollTriggers.

When implementing scroll interaction, test:

```text
desktop
mobile
refresh
navigation back/forward
resize
reduced motion
```

---

# 10. WebGL rules

WebGL is optional enhancement.

Rules:

- dynamically import heavy WebGL code
- do not block readable content
- do not render main article text in canvas
- avoid permanent render loops when unnecessary
- use adaptive DPR/quality later
- lazy-load scenes and assets
- dispose resources correctly

WebGL must not become the app shell.

Before adding a WebGL effect, determine whether CSS/GSAP/SVG can achieve the desired result more cheaply.

Use WebGL only when it materially improves the experience.

---

# 11. Three.js / R3F decision rule

Do not maintain two competing 3D architectures without reason.

When the project reaches the dedicated 3D phase, explicitly choose the dominant approach:

```text
Vanilla Three.js
OR
React Three Fiber
```

If both are retained, document exactly why each is required.

Avoid duplicated scene management.

---

# 12. Component rules

Components must have one primary responsibility.

Guideline:

```text
< 150 lines     normal
150–300 lines   review for decomposition
> 300 lines     split unless strongly justified
```

Avoid god components combining:

- data fetching
- layout
- GSAP
- WebGL
- audio
- global state
- responsive logic
- asset loading

Prefer separation such as:

```text
ArticleContent
ArticleMotion
ArticleExperience
```

Do not over-componentize trivial markup.

---

# 13. Feature boundaries

Use feature-first organization.

Preferred direction:

```text
app
↓
features
↓
shared components
↓
hooks / lib / types
```

Core UI must not import from the WebGL experience layer.

Avoid circular dependencies.

Do not create catch-all folders such as:

```text
misc/
helpers/
stuff/
common-everything/
```

Use meaningful domain ownership.

---

# 14. Barrel export rules

Feature-level barrel exports are allowed.

Example:

```ts
import { NewspaperPage } from "@/features/newspaper";
```

Do not create a giant global `src/index.ts` exporting the whole project.

Avoid barrel exports that create circular dependency chains or accidentally pull client-only code into server bundles.

---

# 15. Content rules

Do not invent:

- fake employers
- fake clients
- fake awards
- fake project metrics
- fake testimonials
- fake achievements
- fake production results

Neutral structural placeholders are allowed when explicitly needed for layout testing.

Examples:

```text
DỰ ÁN 01
HỒ SƠ 01
TƯ LIỆU
```

Never present placeholders as real facts.

---

# 16. Historical asset rules

Historical master assets are references and source material.

Never overwrite master files.

Do not directly ship unnecessarily large source scans.

Create optimized derivatives where needed.

Preferred production formats:

```text
AVIF
WebP
SVG
```

Historical imagery must be used intentionally.

Do not flood a page with archive objects simply because they are available.

Follow `design.md` visual-density rules.

---

# 17. Asset organization

Keep assets organized by role.

```text
public/images/projects/
public/images/editorial/
public/images/archive/
public/images/generated/

public/textures/paper/
public/textures/noise/
public/textures/halftone/
public/textures/ink/
public/textures/generated/

public/models/
public/audio/
public/icons/
```

Do not create files named:

```text
final.png
final2.png
image1.png
new-new.png
abc.jpg
```

Use descriptive filenames.

---

# 18. Performance rules

Performance is a feature.

The initial readable portfolio must not wait for:

- Three.js
- GLTF
- custom shaders
- audio
- large textures
- nonessential interaction bundles

General targets:

```text
Initial page transfer: aim < 2 MB
Initial JS: keep as low as reasonably possible
Large 3D code: lazy-load
Large images: responsive AVIF/WebP
Textures: normally 1024–2048px when feasible
Important GLB models: aim around < 3 MB when feasible
```

These are budgets, not absolute laws.

If a feature exceeds the budget, explain why.

---

# 19. Image optimization rules

Use `next/image` for normal content imagery where appropriate.

Always define intentional:

- dimensions/aspect ratio
- responsive `sizes`
- loading priority

Do not mark many images as `priority`.

Never use an 8 MB archival scan as a normal page background.

---

# 20. CSS rules

Maintain separation:

```text
tokens.css      → semantic tokens
typography.css  → type system
newspaper.css   → editorial/paper system
globals.css     → reset/global behavior
```

Do not create one giant stylesheet.

Do not hardcode repeated design values throughout components.

Use tokens.

Avoid `!important` unless fixing an unavoidable third-party integration and document the reason.

---

# 21. Responsive rules

Do not scale a desktop newspaper down to mobile.

Recompose layouts.

Desktop:

```text
12-column editorial grid
```

Tablet:

```text
6-column simplified grid
```

Mobile:

```text
1–2-column reading system
```

Interactive features must have touch-compatible alternatives.

Hover may enhance an experience but cannot be the only method of accessing information.

---

# 22. Accessibility rules

Always maintain:

- semantic HTML
- heading hierarchy
- keyboard access
- visible focus states
- alt text
- captions where needed
- sufficient contrast
- reduced-motion support

Decorative historical elements must not create screen-reader noise.

Use `aria-hidden="true"` when appropriate.

---

# 23. Reduced motion rules

Every significant animation must have a reduced-motion strategy.

Examples:

```text
page curl → simple crossfade
parallax → static position
camera travel → immediate state
text reveal → visible immediately
```

Never make essential content dependent on animation completion.

---

# 24. Error prevention rules

Use TypeScript strict mode.

Do not silence TypeScript by casually using:

```ts
any
// @ts-ignore
// @ts-nocheck
```

If unavoidable, document why.

Use Zod or appropriate runtime validation for untrusted structured content.

Do not assume external content shape without validation.

---

# 25. No silent destructive changes

Do not:

- delete user assets without instruction
- overwrite master historical files
- reset config files unnecessarily
- replace architecture wholesale
- remove dependencies without checking usage
- rename large feature trees without reporting it

For destructive changes, explain the reason first unless the current explicit task already authorizes them.

---

# 26. No fake completeness

Never claim:

- "fully optimized"
- "zero issues"
- "production-ready"
- "pixel perfect"
- "all devices supported"

unless verified.

Report what was actually tested.

If something was not tested, say so.

---

# 27. Validation after meaningful changes

After meaningful implementation work, run:

```bash
npm run lint
npm run typecheck
npm run build
```

When relevant, also run tests.

Do not report completion until these checks finish.

If one fails:

1. diagnose
2. fix if within task scope
3. rerun
4. report remaining failure honestly

---

# 28. Browser/runtime verification

For UI or interaction work, static compilation is not enough.

When tooling allows, inspect runtime behavior.

Check relevant states:

```text
desktop
mobile
navigation
scroll
resize
reduced motion
loading
missing asset/error state
```

Do not claim visual success from TypeScript build alone.

---

# 29. Design-change rule

Before introducing a new major design language, verify it against `design.md`.

Do not introduce unrelated styles such as:

- glassmorphism
- cyberpunk
- neon dashboard
- generic brutalism
- generic SaaS cards

unless explicitly requested.

Old Hanoi newspaper art direction is the visual north star.

---

# 30. Animation restraint rule

Do not animate simply because GSAP is available.

Every animation must answer at least one:

```text
Does it improve hierarchy?
Does it explain navigation?
Does it reinforce the newspaper metaphor?
Does it improve spatial continuity?
Does it create a meaningful signature moment?
```

If the answer is no, do not add it.

---

# 31. Page flip rule

The future page flip must not be implemented as a cheap card rotation if the intended design requires physical paper behavior.

The progression should be designed in layers:

```text
Level 1 — static page transition
Level 2 — GSAP + CSS 3D prototype
Level 3 — realistic bend/curl if justified
```

Do not jump directly to expensive GLSL simulation before the reading structure is validated.

---

# 32. Source-of-truth data rule

Project content should have one source of truth.

Do not duplicate the same project metadata inside:

```text
component props
MDX
JSON
constants
```

without a real reason.

Prefer typed structured content and derive UI from it.

---

# 33. Naming rules

Use descriptive English code identifiers.

Examples:

```text
NewspaperPage
EditionMeta
HistoricalImage
ArchiveStamp
PageTurnController
```

Visible editorial copy may be Vietnamese.

Do not mix Vietnamese and English unpredictably in code identifiers.

---

# 34. Git / change hygiene

Keep changes scoped to the task.

Avoid touching unrelated files.

Do not run broad formatting changes across the entire repository unless requested or required.

When finishing, provide a changed-file list.

---

# 35. Documentation responsibility

When architecture or reusable design behavior changes, update the appropriate documentation.

Use:

```text
AGENT.md         → operating constraints
DESIGN.md        → art direction and design language
ARCHITECTURE.md  → technical architecture
CONTRIBUTING.md  → contributor workflow
```

Do not duplicate large blocks across all four files unnecessarily.

---

# 36. Before coding checklist

Before every major task:

```text
[ ] Identify current phase.
[ ] Read relevant source-of-truth docs.
[ ] Inspect existing implementation.
[ ] Reuse existing patterns where appropriate.
[ ] Confirm dependency needs.
[ ] Check whether the task affects server/client boundaries.
[ ] Check asset/performance implications.
[ ] Define the smallest safe implementation scope.
```

---

# 37. Before completion checklist

Before reporting completion:

```text
[ ] Task requirements are implemented.
[ ] No next-phase features were added accidentally.
[ ] No fake project facts were introduced.
[ ] No master archival asset is being shipped unnecessarily.
[ ] No accidental global client boundary was introduced.
[ ] No duplicate Lenis instance exists.
[ ] GSAP effects clean up correctly if used.
[ ] Responsive behavior was considered.
[ ] Reduced-motion behavior was considered.
[ ] lint passes.
[ ] typecheck passes.
[ ] build passes.
[ ] Changed files are listed.
[ ] Remaining risks are reported honestly.
```

---

# 38. Required final response format

After completing a task, report in this structure:

## A. What changed

Short factual summary.

## B. Files changed

List created/modified/deleted files.

## C. Architecture impact

State whether architecture changed.

## D. Dependencies

List added/removed dependencies and why.

## E. Performance impact

State expected bundle/asset/runtime impact.

## F. Accessibility / responsive impact

State relevant behavior.

## G. Validation

Report actual results:

```text
lint
TypeScript
build
tests if applicable
```

## H. Remaining concerns

List unresolved issues or `None`.

## I. Next recommended phase/task

Recommend only.

**Do not execute it without user approval.**

---

# 39. Stop condition

When the requested task is complete:

> **STOP.**

Do not continue improving unrelated code.

Do not begin the next phase.

Do not redesign sections that were not part of the task.

Do not install optional future dependencies.

Wait for explicit user instruction.

---

# 40. Final operating principle

The project should become sophisticated because its systems are coherent, not because it contains the maximum number of effects.

Use technology deliberately.

Preserve cultural identity.

Protect performance.

Keep content readable.

Keep architecture removable and modular.

And always prefer:

> **clear editorial design + one memorable interaction**

instead of:

> **many impressive effects with weak structure.**
