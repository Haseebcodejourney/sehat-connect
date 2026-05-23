import { ABOUT_STATS } from '../data/aboutContent';

export default function AboutStats() {
  return (
    <section className="about-stats" aria-label="Company highlights">
      <div className="about-page__container">
        <ul className="about-stats__list">
          {ABOUT_STATS.map((stat) => (
            <li key={stat.label} className="about-stats__item">
              <strong className="about-stats__value">{stat.value}</strong>
              <span className="about-stats__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
