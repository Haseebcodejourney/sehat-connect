/**
 * Home page hero carousel.
 * Uses responsive WebP banners so mobile does not download full desktop assets.
 */
import { useEffect, useState } from 'react';

/** Slide config: local paths under public/assets/b2c_design/landing/ */
const HERO_SLIDES = [
  {
    alt: 'Order medicines online with Sehat Connect pharmacy',
    desktop: '/assets/b2c_design/landing/pharmacy-banner-desktop.webp',
    tablet: '/assets/b2c_design/landing/pharmacy-banner-tablet.webp',
    mobile: '/assets/b2c_design/landing/pharmacy-banner-mobile.webp',
    width: 750,
    height: 203,
  },
  {
    alt: 'Book lab tests at home with Sehat Connect',
    desktop: '/assets/b2c_design/landing/book-labtests-desktop.webp',
    tablet: '/assets/b2c_design/landing/book-labtests-tablet.webp',
    mobile: '/assets/b2c_design/landing/book-labtests-mobile.webp',
    width: 750,
    height: 203,
  },
];

/** Auto-advance interval (ms) */
const SLIDE_INTERVAL_MS = 10_000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="hero" aria-label="Featured healthcare banners">
      <div className="hero__track">
        {HERO_SLIDES.map((slide, index) => (
          <div
            className={`hero__slide ${index === activeSlide ? 'hero__slide--active' : ''}`}
            aria-hidden={index !== activeSlide}
            key={slide.desktop}
          >
            {/* picture: mobile/tablet sources; img fallback + srcSet for browsers that support it */}
            <picture>
              <source media="(max-width: 600px)" srcSet={slide.mobile} type="image/webp" />
              <source media="(max-width: 1199px)" srcSet={slide.tablet} type="image/webp" />
              <img
                className="hero__image"
                src={slide.desktop}
                srcSet={`${slide.mobile} 750w, ${slide.tablet} 1100w, ${slide.desktop} 1400w`}
                sizes="(max-width: 600px) calc(100vw - 30px), (max-width: 1199px) calc(100vw - 30px), 1192px"
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="hero__dots" aria-label="Hero slide controls">
        {HERO_SLIDES.map((slide, index) => (
          <button
            type="button"
            className={`hero__dot ${index === activeSlide ? 'hero__dot--active' : ''}`}
            key={slide.desktop}
            onClick={() => goToSlide(index)}
            aria-label={`Show slide ${index + 1}: ${slide.alt}`}
            aria-current={index === activeSlide}
          />
        ))}
      </div>
    </section>
  );
}
