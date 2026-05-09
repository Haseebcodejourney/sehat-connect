import { useEffect, useState } from 'react';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: 'https://healthwire.pk/assets/b2c_design/landing/pharmacy-banner-desktop.webp',
      imageAlt: 'Pharmacy banner',
    },
    {
      image: 'https://healthwire.pk/assets/b2c_design/landing/book-labtests-desktop.webp',
      imageAlt: 'Book lab tests banner',
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="hero" aria-label="Featured healthcare banners">
      <div className="hero__track">
        {slides.map((slide, index) => (
          <div
            className={`hero__slide ${index === activeSlide ? 'hero__slide--active' : ''}`}
            aria-hidden={index !== activeSlide}
            key={slide.image}
          >
            <img className="hero__image" src={slide.image} alt={slide.imageAlt} />
          </div>
        ))}
      </div>

      <div className="hero__dots" aria-label="Hero slide controls">
        {slides.map((slide, index) => (
          <button
            className={`hero__dot ${index === activeSlide ? 'hero__dot--active' : ''}`}
            key={slide.image}
            onClick={() => goToSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
