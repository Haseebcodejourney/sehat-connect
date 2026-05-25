const CONTACT_BANNER_PATH =
  'M109 0C75.8628 0 49 26.8628 49 60V166C49 199.137 75.8628 226 109 226H263C296.137 226 323 199.137 323 166V60C323 26.8628 296.137 0 263 0H415C381.863 0 355 26.8628 355 60V339C355 372.137 381.863 399 415 399H475C508.137 399 535 372.137 535 339V551H263C296.137 551 323 524.137 323 491V318C323 284.863 296.137 258 263 258H211C177.863 258 151 284.863 151 318V491C151 524.137 177.863 551 211 551H0V415.5C0 448.361 26.6392 475 59.5 475C92.3608 475 119 448.361 119 415.5V307.5C119 274.639 92.3608 248 59.5 248C26.6392 248 0 274.639 0 307.5V0H109ZM535 60V0H475C508.137 0 535 26.8628 535 60Z';

export default function ContactHero() {
  return (
    <section className="contact-us-banner" aria-labelledby="contact-hero-title">
      <div className="banner-detail">
        <h1 id="contact-hero-title">
          Have Questions?
          <br />
          Get in touch
        </h1>
        <p>
          Join us on our journey to solve real world problems for the Pakistan&apos;s leading
          Healthcare, through technology.
        </p>
      </div>

      <div className="banner-img" aria-hidden="true">
        <figure>
          <svg
            className="contact-banner-svg"
            width="535"
            height="551"
            viewBox="0 0 535 551"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <g id="contact-banner-img">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={CONTACT_BANNER_PATH}
                  fill="white"
                />
              </g>
            </defs>
            <use href="#contact-banner-img" xlinkHref="#contact-banner-img" />
          </svg>
        </figure>
      </div>
    </section>
  );
}
