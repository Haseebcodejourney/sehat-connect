import { ABOUT_FOUNDERS } from '../data/aboutContent';
import AboutImage from './AboutImage';

function QuoteIcon() {
  return (
    <svg
      className="about-founders__quote-icon"
      width="32"
      height="24"
      viewBox="0 0 32 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 24C4.5 24 0 19.5 0 14.5 0 8.5 4.5 3.5 12 0l2.5 5.5C11.5 7 8.5 10 8.5 13h4v11H9.5zm17 0c-5 0-9.5-4.5-9.5-9.5C17 8.5 21.5 3.5 29 0l2.5 5.5C28.5 7 25.5 10 25.5 13h4v11h-3z"
        fill="currentColor"
      />
    </svg>
  );
}

function FounderPhotoBg() {
  return (
    <svg
      className="about-founders__photo-bg"
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 40C24 17.9086 41.9086 0 64 0H216C238.091 0 256 17.9086 256 40V280C256 302.091 238.091 320 216 320H64C41.9086 320 24 302.091 24 280V40Z"
        fill="#EBF3FF"
      />
      <path
        d="M0 280L120 120L280 40V320H0V280Z"
        fill="#D6E8F8"
        fillOpacity="0.65"
      />
    </svg>
  );
}

export default function AboutFounders() {
  return (
    <section className="about-founders" aria-labelledby="about-founders-title">
      <div className="about-page__container">
        <h2 id="about-founders-title" className="about-founders__title">
          Message From Our Founders
        </h2>

        <div className="about-founders__grid">
          {ABOUT_FOUNDERS.map((founder) => (
            <article key={founder.name} className="about-founders__card">
              <div className="about-founders__media">
                {/* <FounderPhotoBg /> */}
                <AboutImage
                  assetKey={founder.imageKey}
                  alt={founder.name}
                  className="about-founders__photo"
                />
              </div>

              <div className="about-founders__body">
                <QuoteIcon />
                <blockquote className="about-founders__quote">
                  <p>{founder.quote}</p>
                </blockquote>
                <footer className="about-founders__meta">
                  <strong>{founder.name}</strong>
                  <span>{founder.title}</span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
