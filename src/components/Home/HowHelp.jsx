/**
 * Home “How can we help?” section — pharmacy and lab test promo cards.
 * Images use srcSet so smaller assets load on mobile (see public/assets/b2c_design/landing/).
 */

/** Shared arrow icon on promo cards (decorative; wire navigation when routes are ready). */
function PromoCardArrow() {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="how_help__back-arrow"
      aria-hidden="true"
    >
      <path
        d="M20.9016 9.44659L14.3762 1.43691C13.956 0.890306 13.1256 0.841572 12.6385 1.31741C12.1515 1.79325 12.1022 2.70083 12.5537 3.21669L17.2694 9.00154L1.22366 9.00154C0.547968 9.00154 0 9.59936 0 10.3366C0 11.0738 0.547662 11.6716 1.22366 11.6716L17.2694 11.6716L12.5537 17.4564C12.1022 17.9723 12.1631 18.8784 12.6505 19.3542C13.1375 19.8301 13.9561 19.7829 14.3762 19.2363L20.9016 11.2266C21.3278 10.5791 21.2936 9.99771 20.9016 9.44681L20.9016 9.44659Z"
        fill="#163E73"
      />
    </svg>
  );
}

export default function HowHelp() {
  return (
    <section className="how-help" aria-labelledby="how-help-title">
      <h2 id="how-help-title" className="how_help__h2">
        How can we help?
      </h2>

      {/* Pharmacy promo card */}
      <div className="how_help__left_wrapper">
        <div className="how_help__left_content">
          <h3 className="how_help__left_content_h3">Order Medicines</h3>
          <p className="how_help__left_content_p">
            Get them delivered to your doorstep with{' '}
            <strong>Up to 10% OFF</strong> on all your pharmacy orders!
          </p>
          <button
            type="button"
            className="how_help__left_content_svg_wrapper"
            aria-label="Order Medicines"
          >
            <PromoCardArrow />
          </button>
        </div>

        <div className="how_help__left_content_right_content">
          <figure>
            <img
              src="/assets/b2c_design/landing/pharmacy.webp"
              srcSet="/assets/b2c_design/landing/pharmacy-mobile.webp 400w, /assets/b2c_design/landing/pharmacy.webp 191w"
              sizes="(max-width: 700px) 169px, 191px"
              alt="Order medicine online"
              width={191}
              height={261}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>

      {/* Lab tests promo card */}
      <div className="how_help__left_wrapper">
        <div className="how_help__left_content">
          <h3 className="how_help__left_content_h3">Lab Tests</h3>
          <p className="how_help__left_content_p">
            Home-sampling &amp; in-lab bookings at <strong>Upto 28% OFF</strong> on lab tests from
            top labs!
          </p>
          <button
            type="button"
            className="how_help__left_content_svg_wrapper"
            aria-label="Book Lab Tests"
          >
            <PromoCardArrow />
          </button>
        </div>

        <div className="how_help__left_content_right_content how_help__left_content_right_content--lab">
          <figure>
            <img
              src="/assets/b2c_design/landing/lab_tests.webp"
              srcSet="/assets/b2c_design/landing/lab_tests-mobile.webp 400w, /assets/b2c_design/landing/lab_tests.webp 200w"
              sizes="(max-width: 700px) 200px, 200px"
              alt="Book lab tests"
              width={200}
              height={157}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
