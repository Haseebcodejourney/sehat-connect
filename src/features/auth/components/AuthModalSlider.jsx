import { useEffect, useState } from 'react';
import { AUTH_MODAL_SLIDES } from '../authModalSlides';

const SLIDE_INTERVAL_MS = 5000;

export default function AuthModalSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = AUTH_MODAL_SLIDES[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % AUTH_MODAL_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="auth-modal__slider">
      <div className="auth-modal__banner-track">
        {AUTH_MODAL_SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={`auth-modal__banner-slide ${index === activeSlide ? 'auth-modal__banner-slide--active' : ''}`}
            aria-hidden={index !== activeSlide}
          >
            <img src={item.image} alt={item.imageAlt} className="auth-modal__banner-image" />
          </div>
        ))}
      </div>

      <div className="auth-modal__slide-copy">
        <h3 className="auth-modal__slide-title">{slide.title}</h3>
        <p className="auth-modal__slide-description">{slide.description}</p>
      </div>

      <div className="auth-modal__dots" role="tablist" aria-label="Promotional slides">
        {AUTH_MODAL_SLIDES.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            className={`auth-modal__dot ${index === activeSlide ? 'auth-modal__dot--active' : ''}`}
            aria-label={`Show slide ${index + 1}: ${item.title}`}
            aria-selected={index === activeSlide}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
