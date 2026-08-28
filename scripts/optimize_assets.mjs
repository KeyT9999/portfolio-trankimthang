import fs from "fs";
import path from "path";
import sharp from "sharp";

async function processImage(inputPath, outputPath, options = {}) {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(inputPath)) {
    console.warn(`Input file does not exist: ${inputPath}`);
    return;
  }

  const { width, quality = 80, format = "webp" } = options;
  let pipeline = sharp(inputPath);

  if (width) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }

  if (format === "webp") {
    pipeline = pipeline.webp({ quality });
  } else if (format === "avif") {
    pipeline = pipeline.avif({ quality });
  }

  await pipeline.toFile(outputPath);
  const inputSize = fs.statSync(inputPath).size;
  const outputSize = fs.statSync(outputPath).size;
  const savings = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);
  console.log(
    `✓ ${path.basename(inputPath)} (${(inputSize / 1024).toFixed(0)}KB) -> ${path.basename(
      outputPath
    )} (${(outputSize / 1024).toFixed(0)}KB) [${savings}% smaller]`
  );
}

async function createPaperTextureSVG() {
  const dir = "public/textures/generated";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Generate subtle SVG paper noise filter
  const svgNoise = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <filter id="noiseFilter">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
    <feColorMatrix type="matrix" values="0.2 0 0 0 0.1   0 0.2 0 0 0.08   0 0 0.2 0 0.05   0 0 0 0.07 0" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.6" />
</svg>`;

  fs.writeFileSync(path.join(dir, "paper-grain.svg"), svgNoise, "utf8");
  console.log("✓ Generated paper-grain.svg");
}

async function main() {
  console.log("=== Generating Optimized Web Derivatives ===");

  await createPaperTextureSVG();

  const conversions = [
    // Hero map
    {
      in: "public/images/editorial/hanoi-map-plan-1890.jpg",
      out: "public/images/generated/hanoi-map-plan-1890-1600.webp",
      options: { width: 1600, quality: 82 },
    },
    {
      in: "public/images/editorial/hanoi-map-plan-1890.jpg",
      out: "public/images/generated/hanoi-map-plan-1890-800.webp",
      options: { width: 800, quality: 80 },
    },
    // Pho Hang Dao
    {
      in: "public/images/editorial/pho-hang-dao-1890s.jpg",
      out: "public/images/generated/pho-hang-dao-1890s-1200.webp",
      options: { width: 1200, quality: 82 },
    },
    {
      in: "public/images/editorial/pho-hang-dao-1890s.jpg",
      out: "public/images/generated/pho-hang-dao-1890s-600.webp",
      options: { width: 600, quality: 80 },
    },
    // Periodicals L'Eveil 1934 & 1925
    {
      in: "public/images/archive/leveil-economique-1934-p1.jpg",
      out: "public/images/generated/leveil-economique-1934-p1-1200.webp",
      options: { width: 1200, quality: 80 },
    },
    {
      in: "public/images/archive/leveil-economique-1925-p1.jpg",
      out: "public/images/generated/leveil-economique-1925-p1-1200.webp",
      options: { width: 1200, quality: 80 },
    },
    // Ephemera & Tickets
    {
      in: "public/images/archive/loterie-indochinoise-1942.png",
      out: "public/images/generated/loterie-indochinoise-1942-800.webp",
      options: { width: 800, quality: 85 },
    },
    {
      in: "public/images/archive/railway-ticket-hanoi-haiphong-1926.jpg",
      out: "public/images/generated/railway-ticket-1926-800.webp",
      options: { width: 800, quality: 85 },
    },
    {
      in: "public/images/archive/letter-resident-superior-tonkin-1890s.jpg",
      out: "public/images/generated/letter-resident-superior-tonkin-800.webp",
      options: { width: 800, quality: 82 },
    },
    {
      in: "public/images/archive/dong-phap-buu-dien-stamp-1931.jpg",
      out: "public/images/generated/dong-phap-stamp-1931-400.webp",
      options: { width: 400, quality: 88 },
    },
    // Postcards
    {
      in: "public/images/editorial/postcard-tonkin-hanoi.jpg",
      out: "public/images/generated/postcard-tonkin-hanoi-800.webp",
      options: { width: 800, quality: 82 },
    },
    {
      in: "public/images/editorial/postcard-cau-the-huc.jpg",
      out: "public/images/generated/postcard-cau-the-huc-800.webp",
      options: { width: 800, quality: 82 },
    },
    {
      in: "public/images/editorial/postcard-chua-mot-cot.jpg",
      out: "public/images/generated/postcard-chua-mot-cot-800.webp",
      options: { width: 800, quality: 82 },
    },
    // Illustrations
    {
      in: "public/images/editorial/vintage-typewriter-illustration.jpg",
      out: "public/images/generated/vintage-typewriter-illustration-800.webp",
      options: { width: 800, quality: 85 },
    },
    {
      in: "public/images/editorial/vintage-camera-illustration.jpg",
      out: "public/images/generated/vintage-camera-illustration-800.webp",
      options: { width: 800, quality: 85 },
    },
  ];

  for (const c of conversions) {
    await processImage(c.in, c.out, c.options);
  }

  console.log("=== Asset Optimization Complete ===");
}

main();
