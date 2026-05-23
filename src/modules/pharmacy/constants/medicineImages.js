/**
 * Temporary medicine product photos (Unsplash / Pexels, free to use).
 * Swap each URL for your own assets when ready.
 */
const unsplash = (id, query = 'auto=format&fit=crop&w=400&h=400&q=80') =>
  `https://images.unsplash.com/${id}?${query}`;

const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`;

export const MEDICINE_PLACEHOLDER_IMAGES = {
  /** White tablets in blister pack */
  blisterWhite: unsplash('photo-1584308666744-24d5c474f2ae'),
  /** Colorful tablet blister packs */
  blisterColor: unsplash('photo-1471864190281-a93a3070b6de'),
  /** Round white pills */
  tabletsRound: unsplash('photo-1550572017-edd226b08e79'),
  /** Assorted capsules and pills */
  capsules: unsplash('photo-1628348068343-c6a848d0b307'),
  /** Pink / white medicine tablets */
  tabletsPink: pexels('208512'),
  /** Medicine bottle / syrup */
  syrupBottle: pexels('4378160'),
};

/** Shown when a product image fails to load */
export const MEDICINE_IMAGE_FALLBACK = MEDICINE_PLACEHOLDER_IMAGES.blisterWhite;
