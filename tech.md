Có. Với concept **“portfolio như một tờ báo Hà Nội cũ có thể đọc, cuộn và lật trang”**, mình sẽ không làm nó đơn giản như một website vintage. Nên coi toàn bộ site là một **interactive editorial experience**: người xem đang “đọc một số báo đặc biệt về bạn”.

Điểm quan trọng nhất là: **nội dung báo vẫn nên là HTML/DOM bình thường**, còn WebGL/3D chỉ dùng ở những khoảnh khắc cần tạo wow-effect. Đây cũng là hướng hợp lý hơn việc dựng toàn bộ site bằng Three.js, vì dễ đọc, SEO tốt và nhẹ hơn.

## 1. Bộ tech mình khuyên dùng

| Layer               | Công nghệ                               | Dùng để làm gì                                 |
| ------------------- | --------------------------------------- | ---------------------------------------------- |
| Framework           | **Next.js + React + TypeScript**        | Toàn bộ portfolio                              |
| Styling             | **Tailwind CSS + CSS Modules**          | Grid báo, typography, responsive               |
| Smooth scroll       | **Lenis**                               | Cho cảm giác cuộn mượt, có quán tính           |
| Motion chính        | **GSAP**                                | Animation timeline                             |
| Scroll animation    | **GSAP ScrollTrigger**                  | Pin trang báo, scrub animation, chuyển section |
| Page flip           | **GSAP + CSS 3D**                       | Lật trang báo theo scroll                      |
| Page flip realistic | **StPageFlip / react-pageflip**         | Nếu muốn hiệu ứng cuốn sách thật               |
| 3D nâng cao         | **Three.js + React Three Fiber + Drei** | Trang giấy 3D, camera, vật thể                 |
| Shader              | **GLSL**                                | Paper curl, noise, ink reveal                  |
| Image effect        | **CSS blend modes + SVG filters**       | Grain, halftone, ink                           |
| Audio               | **Howler.js / Web Audio API**           | Tiếng giấy, tiếng máy in                       |
| CMS tùy chọn        | MDX / Sanity                            | Quản lý project như bài báo                    |

GSAP ScrollTrigger đặc biệt phù hợp với concept này vì nó có sẵn `scrub`, `pin`, `snap` và timeline gắn trực tiếp vào tiến trình scroll. ([GSAP][1]) Lenis lại được thiết kế cho smooth scrolling và đồng bộ tốt với WebGL/parallax. ([GitHub][2])

---

# 2. Trải nghiệm mình hình dung cho portfolio của bạn

Thay vì:

```text
HOME
↓
ABOUT
↓
PROJECTS
↓
CONTACT
```

người xem sẽ trải nghiệm:

```text
BÌA BÁO
↓
MỞ TỜ BÁO
↓
ĐỌC TRANG 01
↓
CUỘN THEO CỘT BÁO
↓
HẾT TRANG
↓
GIẤY CONG LÊN
↓
LẬT SANG TRANG 02
↓
PROJECT 01
↓
LẬT TRANG
↓
PROJECT 02
↓
...
↓
TRANG CUỐI / TÒA SOẠN / CONTACT
```

Đây mới là phần khiến nó giống các portfolio award-level: **scroll không chỉ dùng để di chuyển; scroll trở thành interaction chính**.

ITom cũng dùng React Three Fiber + GSAP + WebGL để biến chuyển động/navigation thành một phần của trải nghiệm chứ không chỉ thêm animation trang trí. ([GitHub][3])

---

# 3. Hiệu ứng quan trọng nhất: Scroll → đọc → lật báo

Giả sử một trang báo cao bằng màn hình.

Khi user cuộn:

```text
0–10%
Trang báo xuất hiện

10–65%
Đọc nội dung
ảnh / headline / text reveal

65–80%
Trang bắt đầu pin

80–100%
mép giấy cong lên
↓
shadow xuất hiện
↓
trang xoay
↓
trang sau xuất hiện
```

GSAP ScrollTrigger sẽ điều khiển timeline:

```js
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".newspaper-page",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true
  }
})

tl
  .to(".article", { y: -100 })
  .to(".page", {
    rotateY: -180,
    transformOrigin: "left center"
  })
```

Đây chỉ là bản đơn giản.

Version đẹp hơn sẽ không xoay cả hình chữ nhật như card mà **làm giấy cong**.

---

# 4. Có 3 level làm hiệu ứng lật trang

### Level 1 — CSS 3D + GSAP

Nhanh nhất và mình khuyên làm bản đầu.

Dùng:

```css
transform-style: preserve-3d;
perspective: 1800px;
transform-origin: left center;
```

GSAP điều khiển:

```text
rotateY
skew
scale
shadow
brightness
```

Kết quả đủ đẹp cho portfolio.

---

### Level 2 — StPageFlip

Nếu muốn cảm giác giống **đọc sách/báo thật**, dùng StPageFlip hoặc `react-pageflip`.

Library này hỗ trợ cả HTML content, canvas, portrait/landscape và mobile, nên hợp với newspaper interface. ([GitHub][4])

Ví dụ:

```jsx
<HTMLFlipBook>
  <Page />
  <Page />
  <Page />
  <Page />
</HTMLFlipBook>
```

Nhưng mình sẽ **không dùng nó cho toàn bộ website**.

Chỉ dùng lúc:

```text
transition page 01 → page 02
```

Còn bên trong page vẫn scroll tự nhiên.

---

### Level 3 — Three.js paper simulation

Đây là bản “Awwwards”.

Trang giấy là một subdivided plane:

```text
PlaneGeometry
40 × 40 segments
```

Vertex shader làm mép giấy:

```text
bend
curl
wave
```

Scroll progress:

```text
0 ----------------------- 1
↓                         ↓
flat                  flipped
```

Shader nhận:

```js
uProgress = scrollProgress
```

rồi biến dạng vertex.

Lúc này bạn có thể làm:

```text
mép giấy cong
ánh sáng chạy theo nếp gấp
bóng phía sau trang
paper thickness
texture mặt trước
texture mặt sau
```

Đây sẽ là điểm wow nhất của site.

---

# 5. Nhưng đừng dùng WebGL cho chữ báo

Đây là một quyết định architecture rất quan trọng.

Đừng làm:

```text
Three.js
 └── toàn bộ newspaper
     ├── text
     ├── title
     ├── article
     └── images
```

Mình sẽ làm:

```text
React / HTML
│
├── Headlines
├── Articles
├── Projects
├── About
└── Contact

        +

WebGL Layer
│
├── Paper
├── Shadow
├── Page curl
├── transition
└── atmospheric effects
```

Như vậy bạn có cả:

**visual mạnh + readable + responsive + SEO + performance**.

---

# 6. Kiểu bố cục báo nên dùng

Trang báo nên dựa trên **CSS Grid**, không nên position tuyệt đối tất cả.

Ví dụ:

```text
┌───────────────────────────────────────────┐
│  HÀ NỘI · THỨ HAI · 28.08.2026           │
├───────────────────────────────────────────┤
│                                           │
│        VŨ — SOFTWARE ENGINEER             │
│                                           │
├──────────────┬────────────────────────────┤
│              │                            │
│  GIỚI THIỆU  │      TIN NỔI BẬT           │
│              │                            │
│              │      PROJECT 01            │
│              │                            │
├──────────────┼───────────────┬────────────┤
│ PROJECT 02   │ PROJECT 03    │ GHI CHÚ    │
│              │               │            │
└──────────────┴───────────────┴────────────┘
```

CSS:

```css
.page {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

Trên mobile chuyển thành một cột.

---

# 7. Một chi tiết rất hay: đọc theo từng cột báo

Đừng reveal toàn bộ trang một lúc.

Khi scroll:

```text
COLUMN 01
████████████
████████████
      ↓

COLUMN 02
████████████
████████████
      ↓

PHOTO
      ↓

CAPTION
      ↓

HEADLINE tiếp theo
```

GSAP ScrollTrigger có thể khiến từng block tiến vào theo thứ tự.

Ví dụ ảnh:

```text
clip-path:
inset(100% 0 0 0)

↓

inset(0 0 0 0)
```

cho cảm giác ảnh vừa được **in xuống giấy**.

---

# 8. Hiệu ứng “mực in” sẽ rất quan trọng

Đây là thứ giúp site không trông như:

> website màu beige + font serif.

Bạn cần tái tạo **quy trình in báo**.

Có thể dùng:

```text
SVG displacement
CSS filter
mix-blend-mode
mask-image
noise texture
halftone texture
```

Khi headline xuất hiện:

```text
blank paper

↓

noise

↓

ink stains

↓

characters appear

↓

sharp text
```

Tạo cảm giác **máy in vừa in chữ xuống giấy**.

---

# 9. Halftone ảnh báo

Ảnh báo cũ không nên quá nét như JPEG hiện đại.

Tạo:

```text
original photo
↓
grayscale
↓
contrast
↓
halftone
↓
paper texture
↓
multiply
```

Có thể dùng CSS:

```css
mix-blend-mode: multiply;
filter:
  grayscale(1)
  contrast(1.15);
```

Rồi overlay PNG halftone/noise.

Hover vào ảnh:

```text
HALFTONE OLD PHOTO

        ↓ hover

FULL COLOR ORIGINAL
```

Rất đẹp cho portfolio design/project.

---

# 10. Mouse interaction cũng có thể giống báo thật

Ví dụ cursor không nên là vòng tròn futuristic.

Thay bằng:

```text
✥
ĐỌC
```

Hover project:

```text
XEM BÀI →
```

Hover góc giấy:

```text
LẬT TRANG
```

Click headline:

```text
paper expands
↓
article opens
```

---

# 11. Parallax nên rất nhẹ

Khi user scroll:

```text
foreground newspaper
        ↓ 1x

photograph
        ↓ 0.8x

paper texture
        ↓ 0.4x

dust/grain
        ↓ 0.2x
```

Lenis + GSAP rất phù hợp cho kiểu synchronization này. ([GitHub][2])

Không nên parallax mạnh vì sẽ mất chất editorial.

---

# 12. Trang bìa có thể cực kỳ đặc biệt

Màn hình đầu mình sẽ không cho thấy website ngay.

Ví dụ:

```text
────────────────────────────────

          HÀ NỘI

    NHẬT TRÌNH CÔNG NGHỆ

      SỐ ĐẶC BIỆT · 2026

────────────────────────────────

      VŨ
      SOFTWARE ENGINEER

      CHUYỆN VỀ
      NHỮNG SẢN PHẨM
      ĐƯỢC VIẾT BẰNG CODE

────────────────────────────────
```

Mouse xuất hiện:

```text
CUỘN ĐỂ MỞ BÁO ↓
```

Cuộn:

```text
camera zoom nhẹ
↓
bìa mở
↓
trang 1 xuất hiện
```

---

# 13. Có thể thêm một cảnh 3D trước khi vào báo

Nếu muốn portfolio có level tương tự ITom:

```text
camera nhìn xuống

↓

một bàn gỗ Hà Nội cũ

↓

trên bàn có:
tờ báo
ly cà phê
bút máy
radio
tem thư

↓

mouse move
camera parallax

↓

scroll

↓

camera tiến gần tờ báo

↓

báo mở

↓

DOM website tiếp quản
```

Phần này dùng:

**React Three Fiber + Drei + Three.js**.

R3F thường được dùng để quản lý Three.js scene trong React; các portfolio scroll-linked hiện đại cũng thường ghép R3F với GSAP ScrollTrigger. ([GitHub][5])

Đây là chỗ dùng 3D rất đáng.

---

# 14. “Nguyên liệu” visual bạn nên chuẩn bị

Đây thực ra quan trọng ngang code:

* scan giấy báo thật 300–600dpi
* giấy ngả vàng
* giấy gấp / paper folds
* newspaper grain
* halftone patterns
* vết mực
* mép giấy rách
* chữ headline kiểu báo Việt
* quảng cáo Việt Nam xưa
* tem thư
* dấu bưu điện
* con dấu
* số báo / ngày tháng
* barcode / serial number hiện đại hóa
* ảnh Hà Nội cũ
* ảnh project của bạn
* handwriting annotations
* bản đồ Hà Nội
* vé xe / vé tàu / hóa đơn cũ
* ảnh radio / máy ảnh / máy đánh chữ
* icon minh họa line-art kiểu báo

Với tư liệu báo/ảnh lịch sử thật, nên dùng nguồn bạn có quyền sử dụng hoặc nguồn public domain/licensed phù hợp.

---

# 15. Font cực kỳ quan trọng

Đừng chỉ dùng một font vintage.

Nên có **3 tầng typography**:

```text
MASTHEAD
font custom / lettering
VD: tên tờ báo

↓

HEADLINE
Serif / display

↓

BODY
Serif đọc tốt

↓

SYSTEM INFO
Sans / monospace
```

Ví dụ:

```text
NHẬT TRÌNH CÔNG NGHỆ
     ↓ custom lettering

Dự án AutoJudge:
Hệ thống chấm thi tự động
     ↓ serif bold

Hệ thống được xây dựng...
     ↓ Noto Serif

PROJECT / 001 / 2026
     ↓ IBM Plex Mono
```

Như vậy vừa có **Hà Nội cũ** vừa còn hơi thở IT.

---

# 16. Audio sẽ làm trải nghiệm cực mạnh

Nhưng dùng rất ít.

Ví dụ:

```text
lật trang
→ tiếng giấy nhẹ

mở báo
→ paper unfold

project loading
→ máy đánh chữ rất nhỏ

special transition
→ tiếng máy in
```

Không autoplay.

Có nút:

```text
SOUND
ON / OFF
```

---

# 17. Một chi tiết mình rất thích: Project là “chuyên mục báo”

Ví dụ portfolio IT của bạn:

```text
TIN CÔNG NGHỆ
PROJECT 01
AutoJudge

────────────────────

CHUYÊN ĐỀ
PROJECT 02
AI System

────────────────────

THƯƠNG MẠI
PROJECT 03
E-commerce

────────────────────

PHÒNG THÍ NGHIỆM
SIDE PROJECTS

────────────────────

NHÂN VẬT
ABOUT ME

────────────────────

TÒA SOẠN
CONTACT
```

Tức là **information architecture cũng phải đi theo concept**, chứ không chỉ visual.

---

# 18. Architecture code mình sẽ dùng

```text
src/
│
├── app/
│   ├── page.tsx
│   └── projects/
│
├── components/
│   │
│   ├── newspaper/
│   │   ├── Newspaper.jsx
│   │   ├── Page.jsx
│   │   ├── Column.jsx
│   │   ├── Headline.jsx
│   │   ├── Article.jsx
│   │   └── PageFlip.jsx
│   │
│   ├── motion/
│   │   ├── SmoothScroll.jsx
│   │   ├── InkReveal.jsx
│   │   ├── PageTransition.jsx
│   │   └── ImageReveal.jsx
│   │
│   └── experience/
│       ├── Canvas.jsx
│       ├── Newspaper3D.jsx
│       └── Camera.jsx
│
├── shaders/
│   ├── paper.vert
│   ├── paper.frag
│   └── ink.frag
│
├── assets/
│   ├── paper/
│   ├── noise/
│   ├── stamps/
│   ├── photos/
│   └── models/
│
└── data/
    └── projects.ts
```

---

# 19. Có một nguyên tắc mình rất khuyên bạn giữ

**Đừng cho animation xảy ra liên tục.**

Một website kiểu này đẹp khi có nhịp:

```text
ĐỌC

ĐỌC

ĐỌC

WOW — LẬT TRANG

ĐỌC

ĐỌC

WOW — MỰC IN

ĐỌC

WOW — 3D

ĐỌC
```

Chứ nếu:

```text
parallax
glitch
rotate
zoom
3D
mouse effect
noise
animation
```

ở mọi nơi thì nó sẽ thành website demo kỹ thuật chứ không còn là **tờ báo Hà Nội cũ** nữa.

---

# 20. Stack cuối cùng mình chọn

Nếu **chính mình code project này**, mình sẽ dùng:

```text
Next.js
React
TypeScript

Tailwind CSS
CSS Grid

GSAP
ScrollTrigger
Lenis

React Three Fiber
Three.js
Drei

GLSL
SVG Filters

StPageFlip
(chỉ nếu cần)

Howler.js

MDX
```

Trong đó **80% trải nghiệm là React/HTML/CSS/GSAP**, chỉ khoảng **20% là Three.js**.

Đó là tỷ lệ mình thấy hợp lý nhất.

---

## Và concept tổng thể mình sẽ gọi là

> **HÀ NỘI DIGITAL GAZETTE**
> *A personal archive of code, projects and stories.*

Không làm kiểu “vintage website”.

Mà làm như **một tờ báo Hà Nội từ một dòng thời gian khác — nơi báo giấy cũ gặp công nghệ hiện đại**.

Đấy sẽ là hướng có khả năng ra một portfolio **rất khác mặt bằng portfolio IT hiện nay**, nhưng vẫn đủ đất để khoe Three.js, GSAP, shader, animation, frontend architecture và tư duy UI/UX.

[1]: https://gsap.com/docs/v3/Plugins/ScrollTrigger/?utm_source=chatgpt.com "ScrollTrigger | GSAP | Docs & Learning"
[2]: https://github.com/propagande-studio/lenis?utm_source=chatgpt.com "GitHub - propagande-studio/lenis: How smooth scroll should be · GitHub"
[3]: https://github.com/ITomPoland/portfolio-itom?utm_source=chatgpt.com "GitHub - ITomPoland/portfolio-itom: An immersive, interactive 3D Web Developer portfolio built by Tomasz 'ITom' Szmajda using React Three Fiber, GSAP, and advanced WebGL rendering architecture. · GitHub"
[4]: https://github.com/Nodlik/StPageFlip/blob/master/README.md?utm_source=chatgpt.com "StPageFlip/README.md at master · Nodlik/StPageFlip · GitHub"
[5]: https://github.com/jawadhaider0024/jawad-portfolio-v2?utm_source=chatgpt.com "GitHub - jawadhaider0024/jawad-portfolio-v2: Interactive 3D developer portfolio — React 19, Three.js (R3F) and GSAP ScrollTrigger, scroll-linked WebGL scene · GitHub"
