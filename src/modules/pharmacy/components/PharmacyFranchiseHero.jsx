import { HERO_IMAGE } from '../constants';

export default function PharmacyFranchiseHero() {
  return (
    <section className="pharmacy-franchise-hero">
      <img
        src={HERO_IMAGE}
        alt="Sehat Connect pharmacy storefront"
        className="pharmacy-franchise-hero__image"
      />
    </section>
  );
}
