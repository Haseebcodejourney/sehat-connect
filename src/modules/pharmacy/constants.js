/**
 * Pharmacy franchise page — static copy and local image paths.
 * Images live under public/assets/pharmacy/franchise/ (see npm run sync-assets).
 */

const FRANCHISE_ASSETS = '/assets/pharmacy/franchise';

/** Hero banner on /pharmacy-franchises */
export const FRANCHISE_HERO_IMAGE_SRC = `${FRANCHISE_ASSETS}/Banner-Image.webp`;

/** Two-column benefit lists in the franchise form section */
export const FRANCHISE_BENEFITS = {
  left: [
    'Location Consultancy',
    'Staff Training & Development',
    'Initial Stock Fulfilment',
    'Partnership With Labs / Pharmacies (If Applicable)',
    'Inventory Management',
    'Constant Software Support',
    'Lowest Royalty / Franchising Fee',
  ],
  right: [
    'Site Evaluation Assistance',
    'Category & Licensing Consultancy',
    'H-Cloud® Software: FREE',
    'Training & Operation Management',
    'Access & Target Online Customers',
    'Retail Management',
  ],
};

/** Franchise inquiry form — city dropdown */
export const FRANCHISE_CITIES = [
  { value: '', label: 'Select City' },
  { value: 'lahore', label: 'Lahore' },
  { value: 'karachi', label: 'Karachi' },
  { value: 'islamabad', label: 'Islamabad' },
  { value: 'rawalpindi', label: 'Rawalpindi' },
  { value: 'peshawar', label: 'Peshawar' },
  { value: 'multan', label: 'Multan' },
  { value: 'faisalabad', label: 'Faisalabad' },
  { value: 'sialkot', label: 'Sialkot' },
  { value: 'gujranwala', label: 'Gujranwala' },
  { value: 'bahawalpur', label: 'Bahawalpur' },
  { value: 'sargodha', label: 'Sargodha' },
  { value: 'lodhran', label: 'Lodhran' },
  { value: 'gujrat', label: 'Gujrat' },
];

export const INVESTMENT_RANGES = [
  { value: '', label: 'Select Investment Range' },
  { value: '5-7', label: '5–7 Million' },
  { value: '7+', label: 'Over 7 Million' },
];

/** City cards in “Our presence” — image filename matches CDN export (e.g. Sarrgodha typo preserved) */
export const PRESENCE_CITIES = [
  { name: '', slug: 'lahore', image: `${FRANCHISE_ASSETS}/Lahore.webp` },
  { name: '', slug: 'sargodha', image: `${FRANCHISE_ASSETS}/Sarrgodha.webp` },
  { name: '', slug: 'islamabad', image: `${FRANCHISE_ASSETS}/Islamabad.webp` },
  { name: '', slug: 'multan', image: `${FRANCHISE_ASSETS}/Multan.webp` },
  { name: '', slug: 'bahawalpur', image: `${FRANCHISE_ASSETS}/Bahawalpur.webp` },
  { name: '', slug: 'lodhran', image: `${FRANCHISE_ASSETS}/Lodhran.webp` },
  { name: '', slug: 'sialkot', image: `${FRANCHISE_ASSETS}/Sialkot.webp` },
  { name: '', slug: 'nankana-sahib', image: `${FRANCHISE_ASSETS}/NankanaSahib.webp` },
  { name: '', slug: 'faisalabad', image: `${FRANCHISE_ASSETS}/Faisalabad.webp` },
  { name: '', slug: 'gujrat', image: `${FRANCHISE_ASSETS}/Gujrat.webp` },
  { name: '', slug: 'peshawar', image: `${FRANCHISE_ASSETS}/Peshawar.webp` },
  { name: '', slug: 'gujranwala', image: `${FRANCHISE_ASSETS}/Gujranwala.webp` },
];

export const GALLERY_ITEMS = [
  { key: 'image1', src: `${FRANCHISE_ASSETS}/Image1.webp`, alt: 'Sehat Connect pharmacy glimpse 1' },
  { key: 'image5a', src: `${FRANCHISE_ASSETS}/Image5.webp`, alt: 'Sehat Connect pharmacy glimpse 2' },
  { key: 'image5b', src: `${FRANCHISE_ASSETS}/Image5.webp`, alt: 'Sehat Connect pharmacy glimpse 3' },
  { key: 'image6', src: `${FRANCHISE_ASSETS}/image6.webp`, alt: 'Sehat Connect pharmacy glimpse 4' },
];
