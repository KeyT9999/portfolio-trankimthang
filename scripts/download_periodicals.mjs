import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const USER_AGENT = "HanoiEditorialPortfolio/1.0 (https://trankimthang.dev; dev@trankimthang.dev)";

async function downloadFile(url, destPath) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`Downloading: ${url}\n  -> ${destPath}`);
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) {
      console.error(`Failed ${res.status}: ${url}`);
      return false;
    }
    const fileStream = fs.createWriteStream(destPath);
    // @ts-ignore
    await pipeline(res.body, fileStream);
    console.log(`✓ Saved: ${destPath} (${fs.statSync(destPath).size} bytes)\n`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return false;
  }
}

async function main() {
  console.log("=== Downloading Hanoi Periodicals (BnF Gallica) ===");

  // 1. L'Éveil économique de l'Indochine (Hanoi, 30/09/1934) - Pages 1-4
  const gallicaBase = "https://gallica.bnf.fr/iiif/ark:/12148/bpt6k55831547";
  const gallicaPages = [
    { url: `${gallicaBase}/f1/full/2400,/0/native.jpg`, dest: "public/images/archive/leveil-economique-1934-p1.jpg" },
    { url: `${gallicaBase}/f2/full/2400,/0/native.jpg`, dest: "public/images/archive/leveil-economique-1934-p2.jpg" },
    { url: `${gallicaBase}/f3/full/2400,/0/native.jpg`, dest: "public/images/archive/leveil-economique-1934-p3.jpg" },
    { url: `${gallicaBase}/f4/full/2400,/0/native.jpg`, dest: "public/images/archive/leveil-economique-1934-p4.jpg" },
  ];

  for (const item of gallicaPages) {
    await downloadFile(item.url, item.dest);
  }

  console.log("=== Periodicals Download Complete ===");
}

main();
