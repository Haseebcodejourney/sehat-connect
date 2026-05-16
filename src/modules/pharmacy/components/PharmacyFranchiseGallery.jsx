import { GALLERY_IMAGES } from '../constants';

export default function PharmacyFranchiseGallery() {
  return (
    <section className="pharmacy-franchise-gallery">
      <h2 className="pharmacy-franchise-gallery__title">Some Glimpse Of Sehat Connect Pharmacy</h2>
      <div className="pharmacy-franchise-gallery__grid">
        {GALLERY_IMAGES.map((image) => (
          <figure key={image.alt} className="pharmacy-franchise-gallery__item">
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
