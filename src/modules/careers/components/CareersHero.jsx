const CAREERS_MASK_PATH =
  'M70.7889 0H0V494H204.134C170.997 494 144.134 467.137 144.134 434V274.783C144.134 241.646 170.997 214.783 204.134 214.783H245.221C278.358 214.783 305.221 241.646 305.221 274.783V434C305.221 467.137 278.358 494 245.221 494H494V0H425.995C459.133 0 485.995 26.8628 485.995 60V297.076C485.995 330.213 459.133 357.076 425.995 357.076H377.749C344.612 357.076 317.749 330.213 317.749 297.076V60C317.749 26.8628 344.612 0 377.749 0H245.22C278.357 0 305.22 26.8628 305.22 60V142.253C305.22 175.391 278.357 202.253 245.22 202.253H70.7889C37.6518 202.253 10.7889 175.391 10.7889 142.253V60C10.7889 26.8628 37.6519 0 70.7889 0ZM9 274.783C9 241.646 35.8629 214.783 69 214.783H71.605C104.742 214.783 131.605 241.646 131.605 274.783V374.935C131.605 408.072 104.742 434.935 71.6051 434.935H69.0001C35.863 434.935 9 408.072 9 374.935V274.783Z';

export default function CareersHero({ title, subtitle }) {
  return (
    <section className="careers-hero" aria-labelledby="careers-hero-title">
      <div className="careers-page__container careers-hero__inner">
        <div className="careers-hero__text">
          <h1 id="careers-hero-title">{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className="careers-hero__visual" aria-hidden="true">
          <figure>
            <svg
              className="careers-hero__mask"
              width="494"
              height="494"
              viewBox="0 0 494 494"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <g id="abc-logo">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={CAREERS_MASK_PATH}
                    fill="white"
                  />
                </g>
              </defs>
              <use href="#abc-logo" xlinkHref="#abc-logo" />
            </svg>
          </figure>
        </div>
      </div>
    </section>
  );
}
