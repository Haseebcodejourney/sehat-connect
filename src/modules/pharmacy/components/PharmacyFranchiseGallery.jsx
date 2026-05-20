import { GALLERY_ITEMS } from '../constants';

export default function PharmacyFranchiseGallery() {
  return (
    <section className="pharmacy-franchise-gallery">
      <h2 className="pharmacy-franchise-gallery__title">Some Glimpse Of Sehat Connect Pharmacy</h2>
      <div className="pharmacy-franchise-gallery__grid">
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.key} className="pharmacy-franchise-gallery__item">
            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
