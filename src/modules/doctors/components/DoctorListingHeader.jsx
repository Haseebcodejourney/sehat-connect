/**
 * Doctors listing page banner.
 * Reuses home hero assets with the same responsive breakpoints for performance.
 */
export default function DoctorListingHeader() {
  return (
    <section className="doctors-listing-header">
      <figure className="doctors-listing-header__banner">
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/assets/b2c_design/landing/pharmacy-banner-mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1199px)"
            srcSet="/assets/b2c_design/landing/pharmacy-banner-tablet.webp"
            type="image/webp"
          />
          <img
            src="/assets/b2c_design/landing/pharmacy-banner-desktop.webp"
            srcSet="/assets/b2c_design/landing/pharmacy-banner-mobile.webp 750w, /assets/b2c_design/landing/pharmacy-banner-tablet.webp 1100w, /assets/b2c_design/landing/pharmacy-banner-desktop.webp 1400w"
            sizes="(max-width: 600px) calc(100vw - 30px), (max-width: 1199px) calc(100vw - 30px), 1192px"
            alt="Find and book doctors on Sehat Connect"
            width={750}
            height={203}
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </figure>
    </section>
  );
}
