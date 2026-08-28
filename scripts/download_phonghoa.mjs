import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

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
  console.log("=== Scraping and Downloading Phong Hóa Archives ===");
  try {
    const res = await fetch(
      "https://www.diendan.org/tai-lieu/van-kho/phong-hoa/noi-dung-phong-hoa",
      { headers: { "User-Agent": USER_AGENT } }
    );
    const html = await res.text();
    const matches = html.match(/href="([^"]*PH_[^"]*\.pdf)"/gi);
    if (matches) {
      const cleanUrls = matches
        .map((m) => m.replace(/href="|"/g, ""))
        .filter((v, i, a) => a.indexOf(v) === i);
      console.log(`Found ${cleanUrls.length} Phong Hóa PDF files.`);

      // Download first 3 representative issues (e.g. 1934, 1935, 1936)
      const selected = cleanUrls.slice(0, 3);
      for (const itemUrl of selected) {
        const fullUrl = itemUrl.startsWith("http")
          ? itemUrl
          : `https://www.diendan.org${itemUrl.startsWith("/") ? "" : "/"}${itemUrl}`;
        const fileName = path.basename(itemUrl);
        await downloadFile(fullUrl, `public/images/archive/phong-hoa/${fileName}`);
      }
    } else {
      console.log("No direct PDF matches on Diendan index.");
    }
  } catch (err) {
    console.error("Phong Hoa download error:", err.message);
  }

  // Also download the research document with Tokalon 1935 advertisement
  const adDocUrl = "https://ndl.ethernet.edu.et/bitstream/123456789/34379/1/115.pdf";
  await downloadFile(adDocUrl, "public/images/archive/phong-hoa-tokalon-ad-research-1935.pdf");

  console.log("=== Phong Hóa Archive Download Complete ===");
}

main();
