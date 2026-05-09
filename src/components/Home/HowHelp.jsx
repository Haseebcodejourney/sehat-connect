const HowHelp = () => {
  return (
    <section className="how-help">

      <h2 className="how_help__h2">
        How We Can Help You
      </h2>

      {/* Left Box */}
      <div className="how_help__left_wrapper">

        <div className="how_help__left_content">
          <h3 className="how_help__left_content_h3">
            Order Medicines
          </h3>

          <p className="how_help__left_content_p">
            Get them delivered to your doorstep with{' '}
            <strong>Up to 10% OFF</strong> on all your
            pharmacy orders!
          </p>

          <button
            type="button"
            className="how_help__left_content_svg_wrapper"
            aria-label="Order Medicines"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="how_help__back-arrow"
            >
              <path
                d="M20.9016 9.44659L14.3762 1.43691C13.956 0.890306 13.1256 0.841572 12.6385 1.31741C12.1515 1.79325 12.1022 2.70083 12.5537 3.21669L17.2694 9.00154L1.22366 9.00154C0.547968 9.00154 0 9.59936 0 10.3366C0 11.0738 0.547662 11.6716 1.22366 11.6716L17.2694 11.6716L12.5537 17.4564C12.1022 17.9723 12.1631 18.8784 12.6505 19.3542C13.1375 19.8301 13.9561 19.7829 14.3762 19.2363L20.9016 11.2266C21.3278 10.5791 21.2936 9.99771 20.9016 9.44681L20.9016 9.44659Z"
                fill="#163E73"
              />
            </svg>
          </button>
        </div>

        <div className="how_help__left_content_right_content">
          <figure>
            <img
              src="https://healthwire.pk/assets/b2c_design/landing/pharmacy.webp"
              alt="Order Medicine"
              width={191}
              height={261}
            />
          </figure>
        </div>

      </div>

      {/* Right Box */}
      <div className="how_help__left_wrapper">

        <div className="how_help__left_content">
          <h3 className="how_help__left_content_h3">
            Lab Tests
          </h3>

          <p className="how_help__left_content_p">
         Home-sampling & in-lab bookings at <strong>Upto 28% OFF</strong> on lab tests from top labs!
          </p>

          <button
            type="button"
            className="how_help__left_content_svg_wrapper"
            aria-label="Book Lab Tests"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="how_help__back-arrow"
            >
              <path
                d="M20.9016 9.44659L14.3762 1.43691C13.956 0.890306 13.1256 0.841572 12.6385 1.31741C12.1515 1.79325 12.1022 2.70083 12.5537 3.21669L17.2694 9.00154L1.22366 9.00154C0.547968 9.00154 0 9.59936 0 10.3366C0 11.0738 0.547662 11.6716 1.22366 11.6716L17.2694 11.6716L12.5537 17.4564C12.1022 17.9723 12.1631 18.8784 12.6505 19.3542C13.1375 19.8301 13.9561 19.7829 14.3762 19.2363L20.9016 11.2266C21.3278 10.5791 21.2936 9.99771 20.9016 9.44681L20.9016 9.44659Z"
                fill="#163E73"
              />
            </svg>
          </button>
        </div>

        <div className="how_help__left_content_right_content" style={{bottom:'10px'}}>
          <figure>
            <img
              src="https://healthwire.pk/assets/b2c_design/landing/lab_tests.webp"
              alt="Lab Tests"
              width={200}
              height={157}
              
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default HowHelp