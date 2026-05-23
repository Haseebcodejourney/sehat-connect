import AboutHeroOverlay from './AboutHeroOverlay';

export default function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="about-page__container about-hero__inner">
        <div className="about-hero__content">
          <h1 id="about-hero-title" className="about-hero__title">
            We&apos;re Building A Home For Healthcare
          </h1>
          <p className="about-hero__subtitle">
            A place where every type of patient can seek out and access healthcare
            professionals and treatment options.
          </p>
        </div>

        <div className="about-hero__visual" aria-hidden="true">
          <figure className="about-hero__figure">
            <div className="about-hero__photo" />
            <AboutHeroOverlay />
          </figure>
        </div>
      </div>
    </section>
  );
}
