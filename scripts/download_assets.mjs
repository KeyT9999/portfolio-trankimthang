import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const USER_AGENT = "HanoiEditorialPortfolio/1.0 (https://trankimthang.dev; dev@trankimthang.dev)";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

async function getWikimediaUrl(fileTitle) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    fileTitle
  )}&prop=imageinfo&iiprop=url&format=json`;
  try {
    const res = await fetch(apiUrl, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) {
      console.error(`API response status: ${res.status}`);
      return null;
    }
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return null;
    for (const key of Object.keys(pages)) {
      if (pages[key]?.imageinfo?.[0]?.url) {
        return pages[key].imageinfo[0].url;
      }
    }
  } catch (err) {
    console.error(`Error querying Wikimedia API for ${fileTitle}:`, err.message);
  }
  return null;
}

async function main() {
  console.log("=== Starting Wikimedia Historical & Editorial Assets Download ===");

  const wikiFiles = [
    {
      title: "File:Vietnamese-style_seal_of_the_Government-General_of_French_Indochina_with_meander.svg",
      dest: "public/icons/indochina-seal-meander.svg",
    },
    {
      title: "File:Loterie_Indochinoise_-_seri_D_Đợt_3_1942_-_Notestamps_01.png",
      dest: "public/images/archive/loterie-indochinoise-1942.png",
    },
    {
      title: "File:Pho-Hang-Dao-1-1727770693.jpg",
      dest: "public/images/editorial/pho-hang-dao-1890s.jpg",
    },
    {
      title: "File:Letter_of_the_cabinet_of_the_Resident-Superior_of_Annam_&_Tonkin_Number_92_(FRDAFAN83_OL0364059v021_L)_02.jpg",
      dest: "public/images/archive/letter-resident-superior-tonkin-1890s.jpg",
    },
    {
      title: "File:Hanoi_map_plan_1890.jpg",
      dest: "public/images/editorial/hanoi-map-plan-1890.jpg",
    },
    {
      title: "File:Coupures_de_la_ligne_de_Chemin_de_fer_de_Hanoi-Haiphong,_Tonkin_(Vietnam),_1926_(Luzet_Hannoi,_b).jpg",
      dest: "public/images/archive/railway-ticket-hanoi-haiphong-1926.jpg",
    },
    {
      title: "File:Vintage_typewriter_illustration_(46733125102).jpg",
      dest: "public/images/editorial/vintage-typewriter-illustration.jpg",
    },
    {
      title: "File:Vintage_film_slide_camera_illustration_(46785853841).jpg",
      dest: "public/images/editorial/vintage-camera-illustration.jpg",
    },
    {
      title: "File:1 cent - Đông Pháp Bưu Điện (東法郵電) Postes Indochine tax stamp (1931) - Draregandco.jpg",
      dest: "public/images/archive/dong-phap-buu-dien-stamp-1931.jpg",
    },
    {
      title: "File:14. TONKIN - Hanoi - Mandarin et sa Femme.jpg",
      dest: "public/images/editorial/postcard-tonkin-hanoi.jpg",
    },
    {
      title: "File:Cauhokieu.jpg",
      dest: "public/images/editorial/postcard-cau-the-huc.jpg",
    },
    {
      title: "File:Chua-Mot-Cot. Pagode montée sur un pilier.jpg",
      dest: "public/images/editorial/postcard-chua-mot-cot.jpg",
    },
  ];

  for (const item of wikiFiles) {
    console.log(`Resolving ${item.title}...`);
    const url = await getWikimediaUrl(item.title);
    if (url) {
      await downloadFile(url, item.dest);
    } else {
      console.warn(`Could not resolve URL for ${item.title}`);
    }
    await delay(1000);
  }

  console.log("=== Wikimedia Assets Download Completed ===");
}

main();
