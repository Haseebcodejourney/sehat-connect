import { useState } from 'react';

export default function CareersTestimonials({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex];

  const goPrev = () => {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const goNext = () => {
    setActiveIndex((index) => (index === slides.length - 1 ? 0 : index + 1));
  };

  return (
    <section className="careers-testimonials" aria-labelledby="careers-testimonials-title">
      <div className="careers-page__container">
        <p className="careers-testimonials__eyebrow">Testimonials</p>
        <h2 id="careers-testimonials-title">What people are saying</h2>

        <div className="careers-testimonials__slider">
          <button
            type="button"
            className="careers-testimonials__arrow careers-testimonials__arrow--prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          />

          <article className="careers-testimonials__card">
            <figure className="careers-testimonials__photo">
              <img src="/assets/B2c/careers/slider-image.webp" alt="" width={411} height={425} loading="lazy" />
            </figure>

            <div className="careers-testimonials__content">
              <svg className="careers-testimonials__quote-icon" width="25" height="16" viewBox="0 0 25 16" fill="none" aria-hidden="true">
                <path d="M9.24 15.24H0.36L6.84 0.12H12.66L9.24 15.24ZM21.36 15.24H12.48L18.96 0.12H24.78L21.36 15.24Z" fill="#2D2D2D" />
              </svg>
              <p>&ldquo;{active.quote}&rdquo;</p>
              <h3>{active.name}</h3>
            </div>
          </article>

          <button
            type="button"
            className="careers-testimonials__arrow careers-testimonials__arrow--next"
            onClick={goNext}
            aria-label="Next testimonial"
          />

          <div className="careers-testimonials__dots" role="tablist" aria-label="Testimonial slides">
            {slides.map((slide, index) => (
              <button
                key={slide.name + index}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show testimonial ${index + 1}`}
                className={`careers-testimonials__dot${index === activeIndex ? ' careers-testimonials__dot--active' : ''}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
