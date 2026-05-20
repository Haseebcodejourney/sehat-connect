import { FRANCHISE_HERO_IMAGE_SRC } from '../constants';

export default function PharmacyFranchiseHero() {
  const hasImage = Boolean(FRANCHISE_HERO_IMAGE_SRC);

  return (
    <section className="pharmacy-franchise-hero" aria-label="Pharmacy franchise banner">
      {hasImage ? (
        <img
          src={FRANCHISE_HERO_IMAGE_SRC}
          alt="Sehat Connect pharmacy storefront"
          className="pharmacy-franchise-hero__image"
        />
      ) : (
        <div className="pharmacy-franchise-hero__placeholder">
          <span className="pharmacy-franchise-hero__placeholder-label">Hero banner — add image</span>
          <span className="pharmacy-franchise-hero__placeholder-hint">
            Set <code>FRANCHISE_HERO_IMAGE_SRC</code> in <code>constants.js</code>
          </span>
        </div>
      )}
    </section>
  );
}
