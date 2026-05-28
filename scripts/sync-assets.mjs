#!/usr/bin/env node
/**
 * Download remote raster assets and convert local PNG/JPEG to WebP.
 * SVG files are left unchanged.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');

/** Remote URLs → public/ paths (raster → WebP via sharp) */
const REMOTE_DOWNLOADS = [
  {
    url: 'https://healthwire.pk/assets/b2c_design/landing/pharmacy-banner-desktop.webp',
    out: 'assets/b2c_design/landing/pharmacy-banner-desktop.webp',
  },
  {
    url: 'https://healthwire.pk/assets/b2c_design/landing/book-labtests-desktop.webp',
    out: 'assets/b2c_design/landing/book-labtests-desktop.webp',
  },
  {
    url: 'https://healthwire.pk/assets/b2c_design/landing/pharmacy.webp',
    out: 'assets/b2c_design/landing/pharmacy.webp',
  },
  {
    url: 'https://healthwire.pk/assets/b2c_design/landing/lab_tests.webp',
    out: 'assets/b2c_design/landing/lab_tests.webp',
  },
  {
    url: 'https://healthwire.pk/assets/B2c/careers/join-us.webp',
    out: 'assets/B2c/careers/join-us.webp',
  },
  {
    url: 'https://healthwire.pk/assets/B2c/careers/ceo.webp',
    out: 'assets/B2c/careers/ceo.webp',
  },
  {
    url: 'https://healthwire.pk/assets/B2c/careers/cto.webp',
    out: 'assets/B2c/careers/cto.webp',
  },
  {
    url: 'https://healthwire.pk/assets/B2c/careers/graph.webp',
    out: 'assets/B2c/careers/graph.webp',
  },
  {
    url: 'https://healthwire.pk/assets/B2c/careers/need-help-two.webp',
    out: 'assets/B2c/careers/need-help-two.webp',
  },
  {
    url: 'https://healthwire.pk/assets/B2c/pharmacy/empty-cart.png',
    out: 'assets/B2c/pharmacy/empty-cart.webp',
  },
  {
    url: 'https://healthwire.pk/wp-content/uploads/2022/09/difference-between-physical-therapy-and-rehabilitation.jpg',
    out: 'assets/b2c_design/news/physical-therapy-rehabilitation.webp',
  },
  {
    url: 'https://d3313lwq5y3sh2.cloudfront.net/assets/photos/001/442/381/water_mark_image/416971592_2614355652074540_5261664106062451994_n.jpg?1705491360',
    out: 'assets/doctors/doctor-aamir.webp',
  },
  {
    url: 'https://d3313lwq5y3sh2.cloudfront.net/assets/photos/001/255/403/water_mark_image/IMG20230507150338_-_Aadil_Shams_Ali.jpg?1683623531',
    out: 'assets/doctors/doctor-ahmed.webp',
  },
  {
    url: 'https://d3313lwq5y3sh2.cloudfront.net/assets/photos/001/441/806/water_mark_image/Dr_amir_rashid_1.jpg?1696948054',
    out: 'assets/doctors/doctor-amir-rashid.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    out: 'assets/about/hero-doctor.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    out: 'assets/about/team-photo.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80',
    out: 'assets/about/life-1.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1497215728102-855f83c874f7?auto=format&fit=crop&w=500&q=80',
    out: 'assets/about/life-2.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1524758637874-876a3e3beceb?auto=format&fit=crop&w=500&q=80',
    out: 'assets/about/life-3.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80',
    out: 'assets/about/life-4.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    out: 'assets/about/fallback.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=400&q=80',
    out: 'assets/medicine/blister-white.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&h=400&q=80',
    out: 'assets/medicine/blister-color.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1550572017-edd226b08e79?auto=format&fit=crop&w=400&h=400&q=80',
    out: 'assets/medicine/tablets-round.webp',
  },
  {
    url: 'https://images.unsplash.com/photo-1628348068343-c6a848d0b307?auto=format&fit=crop&w=400&h=400&q=80',
    out: 'assets/medicine/capsules.webp',
  },
  {
    url: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    out: 'assets/medicine/tablets-pink.webp',
  },
  {
    url: 'https://images.pexels.com/photos/4378160/pexels-photo-4378160.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    out: 'assets/medicine/syrup-bottle.webp',
  },
];

/** Franchise page images (some CDN paths return 403 — placeholders may be copied manually) */
const PHARMACY_CDN = 'https://d3313lwq5y3sh2.cloudfront.net/assets/images/pharmacy_images';
const PHARMACY_FILES = [
  'Banner-Image.webp',
  'Lahore.webp',
  'Sarrgodha.webp',
  'Islamabad.webp',
  'Multan.webp',
  'Bahawalpur.webp',
  'Lodhran.webp',
  'Sialkot.webp',
  'NankanaSahib.webp',
  'Faisalabad.webp',
  'Gujrat.webp',
  'Peshawar.webp',
  'Gujranwala.webp',
  'Image1.webp',
  'Image5.webp',
  'image6.png',
];

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function downloadToWebp(url, outRel) {
  const outPath = path.join(publicDir, outRel);
  await ensureDir(outPath);
  const res = await fetch(url, {
    headers: { 'User-Agent': 'SehatConnect-AssetSync/1.0' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const webp = await sharp(buf).webp({ quality: 82 }).toBuffer();
  await fs.writeFile(outPath, webp);
  console.log('Downloaded:', outRel);
}

async function convertFileToWebp(absPath) {
  const ext = path.extname(absPath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;
  const rel = path.relative(publicDir, absPath);
  const webpRel = rel.replace(/\.(png|jpe?g)$/i, '.webp');
  const outPath = path.join(publicDir, webpRel);
  if (absPath === outPath) return webpRel;
  await ensureDir(outPath);
  await sharp(absPath).webp({ quality: 82 }).toFile(outPath);
  console.log('Converted:', webpRel);
  return webpRel;
}

async function walkConvert(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      await walkConvert(full);
    } else if (ent.isFile()) {
      await convertFileToWebp(full);
    }
  }
}

async function main() {
  console.log('Downloading remote assets...');
  for (const item of REMOTE_DOWNLOADS) {
    try {
      await downloadToWebp(item.url, item.out);
    } catch (e) {
      console.warn('Skip download:', item.url, e.message);
    }
  }

  for (const file of PHARMACY_FILES) {
    const url = `${PHARMACY_CDN}/${file}`;
    const out = `assets/pharmacy/franchise/${file.replace(/\.(png|jpe?g)$/i, '.webp')}`;
    try {
      await downloadToWebp(url, out);
    } catch (e) {
      console.warn('Skip pharmacy:', url, e.message);
    }
  }

  console.log('\nConverting local raster files in public/...');
  await walkConvert(publicDir);

  console.log('\nGenerating responsive hero / landing images...');
  const landing = path.join(publicDir, 'assets/b2c_design/landing');
  const heroBases = ['pharmacy-banner-desktop.webp', 'book-labtests-desktop.webp'];
  for (const base of heroBases) {
    const src = path.join(landing, base);
    const prefix = base.replace('-desktop.webp', '');
    try {
      await sharp(src)
        .resize({ width: 750, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(landing, `${prefix}-mobile.webp`));
      await sharp(src)
        .resize({ width: 1100, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(landing, `${prefix}-tablet.webp`));
      console.log('Responsive:', prefix);
    } catch (e) {
      console.warn('Skip responsive:', base, e.message);
    }
  }
  for (const [src, dest, w] of [
    ['pharmacy.webp', 'pharmacy-mobile.webp', 400],
    ['lab_tests.webp', 'lab_tests-mobile.webp', 400],
  ]) {
    try {
      await sharp(path.join(landing, src))
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(landing, dest));
      console.log('Responsive:', dest);
    } catch (e) {
      console.warn('Skip:', dest, e.message);
    }
  }

  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
