# DESIGN.md — Hanoi Digital Gazette

> **Project:** PortfolioTranKimThang  
> **Concept:** Old Hanoi Newspaper × Modern Digital Editorial Portfolio  
> **Design Principle:** *If all animation is removed, the portfolio must still look excellent.*

---

## 1. Purpose of this document

This file is the visual and experience source of truth for the project.

Any AI coding/design agent working on the repository must read this document before changing:

- layout
- typography
- color
- imagery
- editorial components
- textures
- interaction
- animation
- page transitions
- WebGL presentation

This document does **not** describe implementation details unless they directly affect design quality.

The goal is not to create a generic "vintage website".

The goal is to create:

> **A digital portfolio imagined as a special newspaper edition from an alternate timeline where old Hanoi print culture evolved into a modern interactive publication.**

---

# 2. Core visual identity

The portfolio must combine three visual worlds:

### A. Old Hanoi print culture

References:

- Hanoi newspapers from the 1920s–1930s
- Vietnamese editorial print
- French Indochina newspaper layouts
- railway documents
- postal stamps
- archival letters
- historical Hanoi maps
- old Hanoi postcards
- early Vietnamese advertising

### B. Modern editorial design

References:

- premium magazine layouts
- Swiss editorial systems
- strong typographic hierarchy
- disciplined grids
- large editorial imagery
- whitespace
- structured metadata

### C. Digital interaction

References:

- award-winning interactive portfolios
- scroll storytelling
- page-by-page narrative
- GSAP/ScrollTrigger transitions
- selective Three.js/WebGL moments
- paper interaction
- modern performance-aware motion

The final aesthetic should feel:

- historical
- Vietnamese
- editorial
- intellectual
- crafted
- tactile
- cinematic
- restrained
- premium
- readable
- modern

It must **not** feel:

- Halloween vintage
- cowboy Western newspaper
- generic sepia filter
- scrapbook overload
- cyberpunk
- game HUD
- SaaS landing page
- Behance masonry grid
- generic developer template

---

# 3. Historical reference assets

The repository already contains historical assets under `public/`.

Important master references include:

```text
public/images/archive/
  leveil-economique-1925-p1.jpg ... p4.jpg
  leveil-economique-1934-p1.jpg ... p4.jpg
  loterie-indochinoise-1942.png
  railway-ticket-hanoi-haiphong-1926.jpg
  letter-resident-superior-tonkin-1890s.jpg
  dong-phap-buu-dien-stamp-1931.jpg

public/images/editorial/
  hanoi-map-plan-1890.jpg
  pho-hang-dao-1890s.jpg
  postcard-tonkin-hanoi.jpg
  postcard-cau-the-huc.jpg
  postcard-chua-mot-cot.jpg
  vintage-typewriter-illustration.jpg
  vintage-camera-illustration.jpg

public/icons/
  indochina-seal-meander.svg
```

These assets are primarily:

- historical references
- visual-language sources
- composition references
- texture sources
- typography references
- editorial motifs

Do **not** place every archival asset into the interface.

A page should usually use only a small number of historical motifs.

Recommended maximum visual density per viewport:

```text
1 dominant image
1 minor historical motif
1 subtle paper texture
1 editorial accent
```

Historical materials must behave like evidence and texture, not decoration spam.

---

# 4. Design philosophy

## 4.1 Content first

The visitor must always understand:

- who the portfolio belongs to
- what the current article/project is
- how to continue reading
- where they are in the publication

Visual experimentation must never obscure information architecture.

## 4.2 Editorial before cinematic

Always solve these first:

1. typography
2. hierarchy
3. grid
4. image treatment
5. spacing
6. print material

Only then add animation.

## 4.3 Authenticity before "vintage effects"

Do not fake history using random filters.

Authenticity should come from:

- real print proportions
- real newspaper hierarchy
- Vietnamese typography
- restrained color
- archival images
- serial numbers
- editorial rules
- old-paper material
- caption systems

## 4.4 Controlled imperfection

Historical print is imperfect, but the interface must still be intentional.

Allowed:

- slight texture
- small ink variation
- subtle misregistration
- grain
- irregular stamp opacity
- slight paper tonal variation

Avoid:

- heavy dirt
- excessive stains
- unreadable type
- random scratches everywhere
- dramatic paper damage on every section

---

# 5. Color system

Use semantic tokens rather than hardcoded colors.

Suggested foundation:

```css
--color-paper: #e7dcc2;
--color-paper-warm: #d9c9a9;
--color-paper-muted: #cbbd9f;
--color-paper-shadow: #ab9b7f;

--color-ink: #1e1c18;
--color-ink-soft: #3c382f;
--color-ink-faded: #6d6657;

--color-accent: #8c3028;
--color-accent-dark: #60221d;

--color-rule: rgba(30, 28, 24, 0.55);
--color-rule-light: rgba(30, 28, 24, 0.18);
```

These values are starting points only.

When actual archival material suggests better values, adjust the tokens rather than scattering replacements throughout CSS.

### Color rules

- Avoid pure `#000000` when possible.
- Avoid pure `#ffffff` for the main paper surface.
- Use red as an editorial accent, not a dominant background.
- Avoid excessive sepia.
- Modern project screenshots may preserve their original colors only in intentionally designed reveal states.

---

# 6. Typography system

Typography is the strongest identity layer of this project.

All selected fonts must support Vietnamese diacritics correctly.

Use a maximum of **three core font families** unless a strong reason exists.

## Typography roles

### 6.1 Masthead

Purpose:

- identity
- newspaper title
- strongest visual signature

Characteristics:

- custom-feeling
- historically informed
- Vietnamese-compatible
- bold but not decorative for decoration's sake

Working title:

> HÀ NỘI DIGITAL GAZETTE

This title may change later.

### 6.2 Display headline

Used for:

- hero article
- major project announcement
- section opener

Characteristics:

- high contrast
- editorial serif or carefully selected display face
- strong hierarchy

### 6.3 Article headline

Used for normal project/article titles.

Must remain highly readable.

### 6.4 Body article

Requirements:

- excellent Vietnamese readability
- long-form friendly
- editorial serif preferred
- comfortable line height
- controlled line length

Target body measure:

```text
50–75 characters per line
```

### 6.5 Caption

Small but readable.

Can use sans-serif or compact serif.

### 6.6 Editorial metadata

Examples:

```text
SỐ 001
HÀ NỘI
28 · 08 · 2026
TRANG 01
HỒ SƠ
TƯ LIỆU
```

Use a clean sans-serif or mono family to create a subtle digital contrast.

### 6.7 System / serial text

Used for:

```text
HS-001
DA-002
LT-003
PORTFOLIO EDITION
ARCHIVE INDEX
```

This is where modern technical typography is welcome.

---

# 7. Editorial grid system

Desktop base grid:

```text
12 columns
```

Supported compositions:

```text
3 / 6 / 3
4 / 4 / 4
3 / 3 / 6
6 / 6
8 / 4
4 / 8
12
```

Use CSS Grid as the primary layout mechanism.

Avoid absolute positioning for structural layout.

## Responsive grid

Desktop:

```text
12 columns
```

Tablet:

```text
6 columns
```

Mobile:

```text
1–2 columns
```

Mobile must be recomposed, not visually shrink a desktop newspaper page.

---

# 8. Newspaper page anatomy

A reusable newspaper page may contain:

```text
Masthead
Edition metadata
Section label
Primary headline
Subheadline / deck
Lead image
Image caption
Article columns
Secondary stories
Editorial rules
Pull quote
Archive stamp
Page number
Serial / issue identifier
```

Not every page must contain every element.

A page should have one clear visual hierarchy.

---

# 9. Core editorial components

Preferred primitives:

```text
Masthead
EditionMeta
NewspaperPage
NewspaperGrid
NewspaperColumn
EditorialRule
SectionLabel
Headline
ArticleBlock
FeatureArticle
HistoricalImage
ImageCaption
PageNumber
ArchiveStamp
```

Only create components that solve repeated design patterns.

Do not componentize every line of markup.

---

# 10. Historical image treatment

Historical images should feel integrated into the print system.

Possible static treatments:

- grayscale
- warm monochrome
- slightly faded contrast
- newsprint halftone
- multiply blend with paper
- subtle grain

A historical image component should support:

```text
figure
image
caption
source/meta
optional archive ID
```

Do not destructively edit master assets.

Create optimized web derivatives instead.

---

# 11. Modern project image treatment

Modern screenshots must visually belong inside the newspaper world.

Default state may use:

```text
grayscale
newsprint contrast
halftone-ready treatment
```

Future interaction may transition to:

```text
full color
clean modern image
```

Do not implement the reveal until its interaction phase.

---

# 12. Paper material system

Paper should be built as layered material, not one giant dirty background image.

Recommended conceptual layers:

```text
Base paper color
Fine grain
Very subtle tonal noise
Occasional fold hint
Rare edge imperfection
```

Rules:

- body copy must remain easy to read
- grain should rarely be consciously noticed
- use optimized repeatable textures
- large master scans must not be loaded as full-screen textures

Possible primitives:

```text
PaperSurface
PaperTexture
PaperNoise
```

---

# 13. Ink language

Static ink variants may include:

```text
ink-solid
ink-soft
ink-faded
ink-stamp
```

Use opacity, masks, blend modes, or subtle print texture.

Do not fake ink with excessive blur.

Animated ink reveal belongs to a later phase.

---

# 14. Historical motifs

Possible motifs:

- seal
- postal stamp
- serial number
- railway ticket geometry
- archive notation
- handwritten annotation
- old Hanoi map crop
- vintage illustration

Use motifs to reinforce meaning.

Examples:

- a seal may mark a featured project
- a serial code may identify a case study
- a map may introduce the About/Contact section
- handwriting may annotate a process image

Avoid using motifs purely because they look old.

---

# 15. Metadata language

Preferred Vietnamese editorial vocabulary:

```text
SỐ ĐẶC BIỆT
HÀ NỘI
TRANG
HỒ SƠ
DỰ ÁN
CHUYÊN MỤC
TƯ LIỆU
LƯU TRỮ
GHI CHÚ
PHỤ LỤC
TÒA SOẠN
```

Possible project IDs:

```text
DA-001
DA-002
HS-001
LT-001
```

Do not imitate historical text so aggressively that the portfolio becomes confusing.

---

# 16. Homepage editorial structure

The static homepage should eventually read as one coherent newspaper edition.

Recommended structure:

```text
01. FRONT PAGE / COVER
02. LEAD STORY
03. SELECTED PROJECTS
04. ARCHIVE / OTHER WORK
05. ABOUT / PROFILE
06. TÒA SOẠN / CONTACT
```

This order may evolve if the real content requires it.

---

# 17. Motion philosophy

Motion must support reading.

Never animate everything.

Preferred rhythm:

```text
READ
READ
READ
SIGNATURE MOMENT
READ
READ
PAGE TURN
READ
```

Not:

```text
zoom
parallax
rotate
glitch
shake
shader
cursor
particle
on every viewport
```

## Future motion language

Possible interactions:

- subtle headline reveal
- image print reveal
- pinned editorial section
- scroll-linked reading progression
- page edge lift
- physical page turn
- controlled map reveal
- archival stamp reveal

Use GSAP/ScrollTrigger only when the static layout already works.

---

# 18. Scroll storytelling concept

The intended long-term experience is:

```text
OPEN NEWSPAPER
↓
READ PAGE
↓
SCROLL THROUGH ARTICLE
↓
PAGE REACHES END
↓
PAGE PINS
↓
EDGE LIFTS
↓
PAPER BENDS
↓
PAGE TURNS
↓
NEXT PAGE
```

The page turn is a narrative transition, not a repeated gimmick every few seconds.

---

# 19. WebGL philosophy

WebGL is an enhancement layer.

Use it for moments such as:

- newspaper on a physical Hanoi-inspired desk
- realistic page curl
- subtle paper deformation
- limited camera sequence
- high-impact scene transition

Never render core article text in WebGL.

If WebGL is disabled, the site must remain complete and understandable.

---

# 20. Audio philosophy

Audio is optional and user-controlled.

Possible sounds:

- paper fold
- page flip
- soft printing sound
- subtle typewriter accent

Rules:

- never autoplay loud audio
- provide sound on/off control
- use audio sparingly
- silence must remain a complete experience

---

# 21. Accessibility

Design must preserve:

- semantic HTML hierarchy
- sufficient color contrast
- keyboard navigation
- visible focus states
- meaningful alt text
- figcaption structure
- reduced motion support

Decorative stamps, noise, seals, and textures should use `aria-hidden` when appropriate.

---

# 22. Performance-aware design

Design decisions must respect production performance.

Rules:

- do not ship archival masters directly
- prefer AVIF/WebP for editorial images
- use responsive image sizes
- optimize textures
- lazy-load noncritical visual assets
- isolate WebGL bundles

Master archival assets may be large, but production derivatives should normally be around:

```text
1200px
1600px
2000px
```

unless a specific use case requires more.

---

# 23. Visual anti-patterns

Never intentionally design the portfolio as:

### Generic vintage

Avoid:

- random sepia
- fake burnt edges everywhere
- western saloon fonts
- decorative Victorian ornaments without relevance

### Scrapbook overload

Avoid simultaneous use of:

- five stamps
- three tickets
- handwritten note
- map
- tape
- torn edge
- typewriter
- multiple vintage illustrations

in one viewport.

### Tech cliché

Avoid:

- neon cyan
- hacker terminal everywhere
- meaningless binary strings
- glowing cards
- glassmorphism
- random code rain

### Portfolio cliché

Avoid:

- skill percentage bars
- huge software-logo walls
- generic card grids
- fake achievement counters

---

# 24. Design quality gate

Before considering a page complete, verify:

```text
[ ] It has one clear primary focal point.
[ ] Typography hierarchy is obvious.
[ ] Vietnamese text renders correctly.
[ ] Historical motifs are restrained.
[ ] Layout works without animation.
[ ] Content remains readable without texture.
[ ] Mobile is recomposed, not scaled down.
[ ] No large master asset is shipped accidentally.
[ ] The page feels Vietnamese/Hanoi rather than generic Western vintage.
[ ] Removing decorative elements does not expose weak composition.
```

---

# 25. Project phases

Design work must follow this order:

```text
PHASE 01
Foundation & Architecture

PHASE 02
Old Hanoi Newspaper Design System

PHASE 03
Static Newspaper Content System

PHASE 04
Motion & Scroll Storytelling

PHASE 05
Page Turn Experience

PHASE 06
WebGL / 3D Enhancement

PHASE 07
Polish / Sound / Micro-interactions

PHASE 08
Performance / Accessibility / Production Optimization
```

Do not use later-phase complexity to compensate for incomplete earlier-phase design.

---

# 26. Final north star

The final portfolio should not feel like:

> "a developer website with an old newspaper skin"

It should feel like:

> **a real editorial publication whose subject happens to be the creator, their work, their ideas, and their projects.**

The history gives the project identity.

The grid gives it discipline.

Typography gives it authority.

Motion gives it life.

Technology must remain invisible until it improves the experience.
