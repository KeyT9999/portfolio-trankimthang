# Old Hanoi Newspaper Design System (Hệ Thống Thiết Kế Báo Hà Nội Xưa)

**Version:** 1.0.0 (Phase 02 — Static Editorial Foundation)  
**Author:** Trần Kim Thắng  
**Concept:** Alternate-Timeline Vietnamese Editorial Print Culture Meets Modern Software Craft

---

## 1. Visual Philosophy & Art Direction

The visual identity of this portfolio is rooted in an alternate-timeline design premise:
> *"What if the sophisticated print culture of 1920s–1930s Hanoi newspapers (L'Éveil économique de l'Indochine, Phong Hóa, Nam Phong tạp chí) evolved directly into a high-performance modern web experience?"*

### Core Pillars:
- **Authentically Vietnamese & Archival**: Grounded in real Indochina/Tonkin archival scans, postal stamps, woodblock engravings, and lead-type printing.
- **Crafted & Editorial**: Prioritizes typography, disciplined grid rules, and reading flow over flashy UI decoration.
- **Modern & Robust**: Built with modern CSS Grid, Next.js Server Components, and strict performance limits.
- **Zero Gimmicks**: Avoids generic American/Western "vintage" clichés, heavy sepia photo filters, or artificial noise that hinders readability.

---

## 2. Historical References & Archival Sources

| Archival Reference | Original Source & Date | Applied Design Motif |
| :--- | :--- | :--- |
| **L'Éveil économique de l'Indochine** | BnF Gallica / Hanoi, 1925 & 1934 | Multi-column grid, double borders, masthead ears, subdeck styling. |
| **Plan de la ville de Hanoï 1890** | BnF Gallica (7680×8804 master) | Cartographic backdrop, hero illustration, spatial narrative. |
| **Phố Hàng Đào & Đường Tàu Điện** | Hanoi Photo Archive, ~1890s | Front-page documentary photography with newsprint contrast. |
| **Ấn Triện Đông Dương (Meander Seal)** | Phủ Toàn quyền Đông Dương (SVG) | Editorial verification stamp, masthead hallmark. |
| **Vé Xổ Số Đông Dương 1942** | Loterie Indochinoise, 1942 | Serial number dockets (`HS-001`, `DA-2026`), ticket borders. |
| **Vé Tàu Hà Nội — Hải Phòng 1926** | Chemin de fer Tonkin, 1926 | Archival record card layout and docket tags. |
| **Tem Đông Pháp Bưu Điện 1931** | Đông Pháp Bưu Điện (東法郵電) | Postal stamp accent in Contact / Tòa soạn section. |
| **Bản khắc Máy Đánh Chữ & Máy Ảnh** | Vintage Engraving Archives | Editorial line-art illustrations and vignette accents. |

---

## 3. Color System

The palette is derived directly from un-altered scans of historical newsprint and traditional printing inks:

```text
PAPER FOUNDATIONS
├── --paper:        #f4eedb  (Authentic natural newsprint base)
├── --paper-warm:   #faf5ea  (Crisp boxed notice / ticket background)
├── --paper-aged:   #eae1cb  (Archival photo mount tone)
└── --paper-shadow: #d6cbaf  (Subtle crease / folded edge depth)

INK INTENSITIES
├── --ink:          #181715  (Dense letterpress black — not harsh digital #000)
├── --ink-soft:     #38352f  (Article body text for effortless reading)
├── --ink-faded:    #646056  (Editorial metadata, captions, bylines)
└── --ink-muted:    #847f74  (Borders, rules, micro-labels)

ACCENTS & SEALS
├── --accent-red:      #a4281a  (Traditional Vietnamese cinnabar / vermilion seal ink)
├── --accent-red-dark: #7a1b10  (Deep lacquer red)
└── --accent-gold:     #9e7d3b  (Antique brass hallmark)

RULES & BORDERS
├── --rule:        #181715  (Primary solid / double divider lines)
├── --rule-medium: #706b60  (Dashed stamp & ticket borders)
└── --rule-light:  #d4c8ab  (Column separator rules)
```

---

## 4. Typography System

The typography marries 1930s Vietnamese editorial craft with modern diacritical precision:

```text
1. MASTHEAD & LEAD HEADLINES
   Font: Playfair Display / Display Serif
   Weights: 700, 800, 900
   Tracking: -0.02em, tight letter-spacing
   Classes: .text-masthead, .text-display-xl, .text-display-lg

2. ARTICLE BODY & EDITORIAL TEXT
   Font: Newsreader (Google Fonts OFL with full Vietnamese diacritics)
   Weights: 400 (Regular), 400 Italic, 600 (Semi-bold)
   Line Height: 1.6 – 1.7 (Comfortable editorial reading measure)
   Classes: .font-body, .drop-cap, .editorial-quote

3. SYSTEM METADATA, SERIALS & STAMPS
   Font: JetBrains Mono
   Weights: 400, 600, 700
   Tracking: 0.05em – 0.2em (Uppercase letterspaced)
   Classes: .kicker, .editorial-byline, .stamp-box
```

### Typographic Hierarchy & Scale:
- `Masthead Title`: `clamp(2.75rem, 7.5vw, 5.5rem)`
- `Display XL (Lead Story)`: `clamp(2.25rem, 5vw, 3.75rem)`
- `Display LG (Section Lead)`: `clamp(1.75rem, 3.5vw, 2.75rem)`
- `Headline`: `clamp(1.25rem, 2.2vw, 1.875rem)`
- `Subdeck`: `clamp(1.05rem, 1.4vw, 1.25rem)` (Italic)
- `Body`: `1rem` / `16px` (Line height 1.65)
- `Caption`: `0.875rem` / `14px` (Italic with source bracket)
- `Meta / Kicker`: `0.75rem` / `12px` (Uppercase monospace)

---

## 5. Newspaper Grid Architecture

The layout employs a **12-Column Base Grid** with fluid column-gap rules:

```text
DESKTOP (lg: 1024px+):
├── 8 / 4  (Main lead story + side dispatch notice)
├── 4 / 4 / 4  (Classic 3-column newspaper dispatch & project dossiers)
├── 6 / 6  (Two-column parallel editorial debate)
└── 12  (Full-width banner headline & masthead)

TABLET (md: 768px – 1023px):
├── 6 / 6  (Simplified 2-column editorial grid)
└── Responsive borders convert right-border rules into bottom rules.

MOBILE (sm: <768px):
├── Single-column natural reading flow.
└── Proportions recompose vertically with fluid clamp font scaling.
```

---

## 6. Component Primitives

The design system exports clean, semantic React Server Components from `@/components/editorial`:

1. `<Masthead />`: Complete newspaper header with left/right ear notices, mottos, and title.
2. `<EditionMeta />`: Publication metadata bar (Date, Issue Number, Price: "GIÁ: MỘT CÚ CLICK").
3. `<SectionLabel />`: Section demarcation with red square marker and page number indicator.
4. `<Headline />`: Composable heading with kicker, display title, and subdeck.
5. `<ArticleBlock />`: Semantic `<article>` with drop caps, bylines, and paragraph styling.
6. `<HistoricalImage />`: `<figure>` with newsprint contrast filter, paper frame, and `<figcaption>`.
7. `<EditorialRule />`: Single (`1px`), Double (`3px double`), Thick-Thin (`4px compound`), Light (`1px muted`).
8. `<ArchiveStamp />`: Indochina seal SVG, Tonkin circular postmark, or serial number docket.
9. `<NewspaperGrid />` & `<NewspaperColumn />`: Composable 12-column grid layout wrapper.

---

## 7. Image & Material System

1. **Newsprint Image Filter (`.newsprint-image`)**:
   - `filter: grayscale(100%) contrast(112%) brightness(95%)`
   - `mix-blend-mode: multiply`
   - Preserves historical ink integration into the paper surface.
2. **Paper Grain Texture (`body::before`)**:
   - Lightweight procedural SVG grain (`/textures/generated/paper-grain.svg`).
   - `opacity: 0.12` with `pointer-events: none` ensuring text sharpness.
3. **Web-Optimized Derivatives**:
   - Master archives are converted to high-performance WebP (400px–1600px).
   - Zero payload bloat on initial page load.

---

## 8. Usage & Anti-Usage Rules

### ✅ DO:
- Use `<SectionLabel />` at the beginning of each major thematic page section.
- Use `clamp()` and semantic font classes (`font-display`, `font-body`, `font-mono`).
- Use `<HistoricalImage />` with descriptive captions and proper source citations.
- Keep Server Components as the default for all editorial layout structures.

### ❌ DO NOT:
- Do NOT use modern saturated neon colors or pure digital `#000000` / `#ffffff`.
- Do NOT shrink desktop multi-column layouts horizontally on mobile — recompose them into single-column reading order.
- Do NOT add decorative icons without editorial meaning.
- Do NOT introduce animated page-turns or WebGL physics into Phase 02 (scheduled for Phase 03+).
