/**
 * Temporary placeholders — replace with your own image paths when ready.
 * Example: heroDoctor: '/assets/about/hero-doctor.webp'
 */
const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const ABOUT_ASSETS = {
  /** Doctor photo behind hero SVG frame (local copy of Healthwire asset) */
  heroPhoto: '/assets/B2c/careers/flue-image.webp',
  heroDoctor: img('photo-1559839734-2b71ea197ec2', 600),
  teamPhoto: img('photo-1522071820081-009f0129c71c', 900),
  founderHamza: 'https://healthwire.pk/assets/B2c/careers/ceo.webp',
  founderNabeel: 'https://healthwire.pk/assets/B2c/careers/cto.webp',
  life1: img('photo-1497366216548-37526070297c', 500),
  life2: img('photo-1497215728102-855f83c874f7', 500),
  life3: img('photo-1524758637874-876a3e3beceb', 500),
  life4: img('photo-1600880292203-757bb62b4baf', 500),
};

export const ABOUT_IMAGE_FALLBACK = img('photo-1576091160399-112ba8d25d1d', 600);
