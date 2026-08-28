Với portfolio kiểu **báo Hà Nội cũ + GSAP + page flip + một ít Three.js**, mình khuyên **không tổ chức src theo kiểu “components / hooks / utils” đơn thuần**, vì lúc project lớn sẽ rất khó biết animation nào thuộc trang nào.

Nên chia theo **feature/domain + layer**. Mục tiêu là:

**nhẹ khi deploy → dễ lazy-load → animation không đá nhau → project càng lớn càng dễ quản lý.**

## Cấu trúc mình khuyên dùng

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   └── api/
│
├── features/
│   │
│   ├── newspaper/
│   │   ├── components/
│   │   │   ├── Newspaper.tsx
│   │   │   ├── NewspaperPage.tsx
│   │   │   ├── NewspaperColumn.tsx
│   │   │   ├── Headline.tsx
│   │   │   └── Article.tsx
│   │   │
│   │   ├── animations/
│   │   │   ├── pageFlip.ts
│   │   │   ├── pageReveal.ts
│   │   │   └── inkReveal.ts
│   │   │
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── projects/
│   │   ├── components/
│   │   ├── data/
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── archive/
│   │   ├── components/
│   │   └── animations/
│   │
│   └── contact/
│
├── experience/
│   │
│   ├── three/
│   │   ├── Scene.tsx
│   │   ├── Camera.tsx
│   │   ├── Newspaper3D.tsx
│   │   ├── PaperMesh.tsx
│   │   └── Environment.tsx
│   │
│   ├── shaders/
│   │   ├── paper.vert
│   │   ├── paper.frag
│   │   └── ink.frag
│   │
│   └── loaders/
│
├── motion/
│   ├── gsap.ts
│   ├── smoothScroll.ts
│   ├── scrollManager.ts
│   ├── transitions/
│   └── presets/
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Image.tsx
│   │   └── Cursor.tsx
│   │
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
│
├── content/
│   ├── projects/
│   │   ├── autojudge.mdx
│   │   ├── ecommerce.mdx
│   │   └── ...
│   │
│   └── site.ts
│
├── store/
│   ├── uiStore.ts
│   └── experienceStore.ts
│
├── hooks/
│   ├── useMediaQuery.ts
│   ├── useReducedMotion.ts
│   └── useDevicePerformance.ts
│
├── lib/
│   ├── cn.ts
│   ├── image.ts
│   ├── performance.ts
│   └── metadata.ts
│
├── styles/
│   ├── globals.css
│   ├── typography.css
│   ├── newspaper.css
│   └── tokens.css
│
└── types/
    └── global.ts
```

Điểm quan trọng là **Three.js không nằm lẫn với UI báo**.

---

# 1. Tách 3 layer thật rõ

Mình sẽ coi website có 3 tầng:

```text
CONTENT
↓
React / HTML / MDX

INTERACTION
↓
GSAP / ScrollTrigger / Lenis

IMMERSIVE
↓
Three.js / R3F / GLSL
```

Không để kiểu:

```tsx
ProjectCard.tsx

→ fetch data
→ GSAP
→ Three.js
→ audio
→ state
→ responsive
→ shader
```

Một component ôm hết như vậy sau này cực khó sửa.

Nên là:

```text
ProjectArticle
    ↓
chỉ render content

ProjectReveal
    ↓
quản lý GSAP

ProjectScene
    ↓
quản lý WebGL
```

---

# 2. `app/` phải cực mỏng

Sai lầm khá phổ biến:

```text
app/page.tsx
2000 dòng
```

Không nên.

`page.tsx` chỉ nên orchestration:

```tsx
import { NewspaperHero } from "@/features/newspaper";
import { FeaturedProjects } from "@/features/projects";
import { Archive } from "@/features/archive";

export default function Home() {
  return (
    <main>
      <NewspaperHero />
      <FeaturedProjects />
      <Archive />
    </main>
  );
}
```

Khoảng vài chục dòng là đẹp.

---

# 3. Mỗi feature tự quản animation của mình

Ví dụ:

```text
features/newspaper/
```

chỉ chứa những thứ liên quan newspaper.

```text
features/projects/
```

chỉ chứa project.

Điều này cực có lợi khi project lớn.

Ví dụ lỗi page flip:

Bạn biết ngay:

```text
features/newspaper/animations/pageFlip.ts
```

chứ không phải tìm trong:

```text
utils/
animations/
helpers/
functions/
common/
misc/
```

---

# 4. Đừng tạo một GSAP timeline khổng lồ

Ví dụ không nên:

```ts
const masterTimeline = gsap.timeline();

masterTimeline
  .to(hero)
  .to(page1)
  .to(page2)
  .to(project1)
  .to(project2)
  .to(contact);
```

Site càng dài càng dễ:

* timeline sai
* trigger chồng
* resize lỗi
* back navigation lỗi
* memory leak

Nên mỗi section có timeline riêng.

Ví dụ:

```tsx
useGSAP(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: root.current,
      start: "top top",
      end: "+=200%",
      scrub: true,
      pin: true,
    },
  });

  timeline.to(page.current, {
    rotateY: -180,
  });

  return () => {
    timeline.kill();
  };
});
```

Section unmount thì animation chết theo.

---

# 5. Nên tạo một `motion/` layer chung

Có những animation dùng cả site:

```text
fade
reveal
stagger
imageReveal
slideUp
clipReveal
```

Không nên copy mỗi chỗ một đoạn GSAP.

Tạo:

```text
motion/presets/
```

Ví dụ:

```ts
export const fadeUp = {
  from: {
    opacity: 0,
    y: 40,
  },

  to: {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  },
};
```

Rồi project dùng lại.

---

# 6. Three.js phải lazy load

Đây là một trong những cách giảm bundle mạnh nhất.

Không nên:

```tsx
import Experience from "./Experience";
```

ngay từ homepage nếu user chưa cần 3D.

Với Next.js:

```tsx
import dynamic from "next/dynamic";

const Experience = dynamic(
  () => import("@/experience/three/Scene"),
  {
    ssr: false,
  }
);
```

Thậm chí chỉ mount scene khi user chuẩn bị tới section.

```text
HOME

↓

HTML newspaper

↓

gần tới 3D section
→ load Three.js

↓

user thấy 3D
```

Thay vì:

```text
load website
↓
load THREE
↓
load models
↓
load shaders
↓
load textures
↓
mới hiện hero
```

---

# 7. Đừng dùng Three.js để render mọi thứ

Portfolio của bạn nên khoảng:

```text
HTML/CSS       75–85%
GSAP           10–15%
Three.js        5–10%
```

Không phải:

```text
Three.js 100%
```

Three.js chỉ dành cho:

* bìa báo mở
* paper curl
* bàn báo 3D
* transition đặc biệt
* interactive object

Article vẫn HTML.

---

# 8. Assets phải tổ chức riêng

Không nên có:

```text
public/
image1.png
image2.png
paper.png
test2.png
final-final.png
abc.png
```

Nên:

```text
public/
│
├── images/
│   ├── projects/
│   │   ├── autojudge/
│   │   │   ├── cover.webp
│   │   │   ├── detail-01.webp
│   │   │   └── detail-02.webp
│   │
│   │   └── ecommerce/
│
├── textures/
│   ├── paper/
│   │   ├── paper-01.webp
│   │   └── paper-grain.webp
│   │
│   ├── noise/
│   └── halftone/
│
├── models/
│   ├── newspaper.glb
│   ├── radio.glb
│   └── table.glb
│
├── audio/
│   ├── page-flip.mp3
│   └── typewriter.mp3
│
└── fonts/
```

---

# 9. Asset format quyết định rất nhiều đến deploy

Ảnh:

```text
JPG/PNG
      ↓
AVIF / WebP
```

Texture:

```text
4096px
↓
1024 / 2048px
```

3D:

```text
raw GLB 20MB
↓
Draco / Meshopt
↓
2–5MB
```

Texture 3D nên cân nhắc:

```text
KTX2
```

thay vì PNG lớn.

---

# 10. Đặt performance budget ngay từ đầu

Ví dụ mình sẽ đặt rule:

```text
Initial JS
< 250–350 KB

Hero images
< 500 KB

One normal texture
< 300 KB

One GLB
< 3 MB

Total initial page
< 2 MB

Three.js
lazy loaded
```

Portfolio đẹp đến đâu mà:

```text
First Load = 14MB
```

thì vẫn là một implementation chưa tốt.

---

# 11. Project data không viết trực tiếp trong component

Sai:

```tsx
<Project
  title="AutoJudge"
  description="..."
  technologies={...}
/>
```

100 project sẽ rất khó quản lý.

Nên:

```text
content/projects/autojudge.mdx
```

Ví dụ:

```md
---
title: "AutoJudge"
year: 2026
category: "Software Engineering"
stack:
  - Next.js
  - Java
  - Docker
  - PostgreSQL
featured: true
---

## Bài toán

...

## Giải pháp

...
```

Frontend tự đọc data.

---

# 12. TypeScript schema

Đây là thứ giúp project lớn **ít sai hẳn**.

Ví dụ:

```ts
export type Project = {
  slug: string;
  title: string;
  year: number;
  category: string;
  featured: boolean;
  stack: string[];
  cover: string;
};
```

Tốt hơn nữa dùng Zod:

```ts
const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  year: z.number(),
  stack: z.array(z.string()),
});
```

Nếu content thiếu:

```text
title
```

build fail ngay.

Đỡ lỗi lúc deploy.

---

# 13. State cũng phải chia nhỏ

Không cần Redux cho portfolio này.

Mình sẽ dùng Zustand.

```text
store/

uiStore
experienceStore
```

Ví dụ:

```ts
type ExperienceState = {
  currentPage: number;
  soundEnabled: boolean;
  webglEnabled: boolean;
};
```

Không đưa mọi thứ vào một global state.

---

# 14. Một nơi quản lý Scroll

Đây rất quan trọng với Lenis + GSAP.

Không được:

```text
Section A tạo Lenis
Section B tạo Lenis
PageFlip tạo Lenis
Hero tạo Lenis
```

Chỉ có **1 smooth-scroll instance**.

Ví dụ:

```text
motion/
└── smoothScroll.ts
```

App khởi tạo một lần.

Sau đó ScrollTrigger dùng chung.

---

# 15. Responsive animation phải có strategy

Desktop:

```text
full page flip
WebGL
parallax
mouse effects
```

Mobile:

```text
simplified page transition
reduced parallax
no expensive shader
touch optimized
```

Không cố chạy cùng một experience.

Có thể tạo:

```ts
const quality = useDevicePerformance();
```

trả:

```text
high
medium
low
```

Sau đó:

```tsx
{quality === "high" && <PaperShader />}

{quality !== "low" && <Parallax />}

{quality === "low" && <SimplePageFlip />}
```

Đây là cách portfolio chuyên nghiệp thường phải xử lý.

---

# 16. Respect `prefers-reduced-motion`

Có người không muốn animation mạnh.

```css
@media (prefers-reduced-motion: reduce) {
  .animated {
    animation: none;
  }
}
```

Và trong JS:

```ts
const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
```

Nếu bật:

```text
page flip → fade
parallax → off
camera movement → off
```

---

# 17. CSS nên chia tokens

Ví dụ:

```css
:root {
  --paper: #e5d8ba;
  --paper-dark: #c9b98f;

  --ink: #1d1c18;
  --ink-muted: #5e594d;

  --accent-red: #8d2f24;

  --font-display: "...";
  --font-body: "...";

  --page-max: 1440px;
}
```

Không viết:

```css
color: #8d2f24;
```

ở 50 chỗ.

Sau này đổi màu chỉ sửa một dòng.

---

# 18. Animation cũng nên có tokens

Ví dụ:

```ts
export const motionTokens = {
  duration: {
    fast: 0.25,
    normal: 0.6,
    slow: 1.2,
    pageFlip: 1.8,
  },

  easing: {
    editorial: "power3.inOut",
    soft: "power2.out",
  },
};
```

Như vậy toàn site có cùng một "motion language".

---

# 19. Architecture tổng thể mình chọn

```text
                  NEXT.JS
                     │
        ┌────────────┴────────────┐
        │                         │
      CONTENT                 EXPERIENCE
        │                         │
      MDX                       R3F
        │                         │
    React DOM                  Three.js
        │                         │
        └────────────┬────────────┘
                     │
                   GSAP
                     │
               ScrollTrigger
                     │
                   Lenis
```

Đây là kiến trúc mình thấy hợp nhất cho concept này.

---

# 20. Folder nào được phép import folder nào

Nên đặt rule:

```text
app
 ↓
features
 ↓
components
 ↓
lib
```

Ví dụ:

```text
features
→ có thể import ui

ui
→ KHÔNG import features
```

Không để dependency vòng:

```text
newspaper
→ projects
→ newspaper
```

Sau này rất dễ lỗi.

---

# 21. Barrel export

Thay vì:

```tsx
import Newspaper from
"@/features/newspaper/components/Newspaper";

import NewspaperPage from
"@/features/newspaper/components/NewspaperPage";
```

Feature có:

```text
features/newspaper/index.ts
```

```ts
export { Newspaper } from "./components/Newspaper";
export { NewspaperPage } from "./components/NewspaperPage";
```

Sau đó:

```tsx
import {
  Newspaper,
  NewspaperPage
} from "@/features/newspaper";
```

Code sạch hơn rất nhiều.

---

# 22. Nhưng đừng barrel toàn bộ project

Không tạo:

```text
src/index.ts
```

export toàn thế giới.

Nó dễ gây:

* circular dependency
* tree shaking kém
* khó debug

Chỉ barrel **theo feature**.

---

# 23. Component cũng nên có giới hạn

Rule rất hữu ích:

```text
< 150 dòng
→ bình thường

150–300
→ xem xét tách

> 300
→ gần như chắc chắn cần tách
```

Ví dụ:

```text
NewspaperPage.tsx
```

không nên chứa:

```text
Headline
Image
Article
Footer
Animation
Audio
Shader
Page flip
```

---

# 24. Để project to mà không “vỡ”

Mình khuyên setup ngay:

```text
ESLint
Prettier
TypeScript strict
Husky
lint-staged
Vitest
Playwright
```

Trong `tsconfig`:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Đừng tắt strict.

Nó cứu rất nhiều lỗi về sau.

---

# 25. CI trước khi deploy

Mỗi lần push:

```text
npm run lint
      ↓
npm run typecheck
      ↓
npm run test
      ↓
npm run build
      ↓
deploy
```

Chỉ khi tất cả pass mới deploy.

Đây là điểm cực quan trọng nếu sau này portfolio thành project lớn.

---

# 26. Với project này mình sẽ dùng route loading như sau

```text
/
↓
HTML + CSS
↓
GSAP
↓
visible

then

load:
Lenis
Three.js
GLTF
shader
audio
```

Không nên:

```text
/
↓
download everything
↓
wait
↓
show site
```

---

# 27. Component rendering strategy

Ví dụ homepage:

```tsx
<Home>
  <Cover />
  <Introduction />
  <Projects />
  <Archive />

  <LazyExperience />
</Home>
```

và:

```tsx
const LazyExperience = dynamic(
  () => import("./Experience"),
  {
    ssr: false,
    loading: () => null,
  }
);
```

---

# 28. Bản structure mình thực sự recommend cho bạn

Nếu bắt đầu code hôm nay:

```text
src/
│
├── app/
│
├── features/
│   ├── cover/
│   ├── newspaper/
│   ├── projects/
│   ├── archive/
│   ├── about/
│   └── contact/
│
├── experience/
│   ├── three/
│   ├── shaders/
│   └── effects/
│
├── motion/
│   ├── gsap.ts
│   ├── lenis.ts
│   ├── presets/
│   └── transitions/
│
├── components/
│   ├── ui/
│   └── layout/
│
├── content/
│
├── store/
│
├── hooks/
│
├── lib/
│
├── styles/
│
└── types/
```

Đây là mức **đủ chuyên nghiệp nhưng chưa over-engineering**.

---

## Và có một rule quan trọng nhất

Mỗi feature phải có thể **xóa khỏi project mà không làm cả website chết**.

Ví dụ ngày mai bạn bỏ:

```text
3D Newspaper
```

thì chỉ cần xóa:

```text
experience/
```

Website vẫn chạy.

Bỏ:

```text
Archive
```

thì:

```text
features/archive/
```

biến mất.

Không ảnh hưởng:

```text
projects
newspaper
contact
```

Nếu architecture đạt được điều đó thì khi project phình lên 50–100 component, bạn vẫn kiểm soát được.

Với concept này, mình sẽ ưu tiên **Next.js + feature-based architecture + DOM-first + lazy WebGL + GSAP section-local timelines + typed content**. Đó là bộ khung vừa đủ để làm hiệu ứng rất mạnh nhưng deploy vẫn nhẹ và ít lỗi.
