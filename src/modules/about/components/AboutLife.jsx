import { Link } from 'react-router-dom';
import { ABOUT_LIFE_GALLERY } from '../data/aboutContent';
import AboutImage from './AboutImage';

export default function AboutLife() {
  return (
    <section className="about-life" aria-labelledby="about-life-title">
      <div className="about-page__container">
        <span className="about-life__eyebrow">Careers</span>
        <h2 id="about-life-title" className="about-life__title">
          Life At Sehat Connect
        </h2>
        <p className="about-life__subtitle">
          Join us, and help transform healthcare for everyone.
        </p>

        <ul className="about-life__gallery">
          {ABOUT_LIFE_GALLERY.map((item, index) => (
            <li key={item.imageKey} className="about-life__item">
              <AboutImage
                assetKey={item.imageKey}
                alt={item.alt}
                className="about-life__image"
              />
            </li>
          ))}
        </ul>

        <Link to="/careers" className="about-life__cta">
          View Job Openings
        </Link>
      </div>
    </section>
  );
}
