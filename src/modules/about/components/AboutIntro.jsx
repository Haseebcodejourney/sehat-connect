import AboutImage from './AboutImage';

export default function AboutIntro() {
  return (
    <section className="about-intro" aria-labelledby="about-intro-title">
      <div className="about-page__container about-intro__inner">
        <div className="about-intro__media">
          <AboutImage
            assetKey="teamPhoto"
            alt="Sehat Connect team"
            className="about-intro__image"
          />
        </div>
        <div className="about-intro__content">
          <span className="about-intro__eyebrow">Story</span>
          <h2 id="about-intro-title" className="about-intro__title">
            About Us
          </h2>
          <p>
            Since its inception in 2015, Sehat Connect believes that digital healthcare is
            the fastest, efficient and safest way to provide healthcare services. With an
            aim to provide a seamless ecosystem of healthcare, Sehat Connect is pacing
            forward and stepping up the game of digital healthcare in Pakistan because we
            believe &ldquo;Aapki Sehat, Hamari Tarjeeh.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
