/**
 * Home mission statement block with link to the About page.
 * Link text is descriptive for SEO (not generic “Read more”).
 */
import { Link } from 'react-router-dom';
import '../../styles/layout/home/_missionstatement.scss';

export default function MissionStatement() {
  return (
    <section className="mission-statement" aria-labelledby="mission-statement-title">
      <div className="mission-statement__heading">
        <span className="mission-statement__eyebrow">Mission Statement</span>
        <h2 className="mission-statement__title" id="mission-statement-title">
          Aapki Sehat, Hamari Tarjeeh
        </h2>
      </div>

      <div className="mission-statement__content">
        <p>
          Healthwire is on a mission to make quality healthcare more accessible and affordable for
          220 Million+ Pakistanis. We believe in empowering our users with the most accurate,
          comprehensive, curated information, care and enabling them to make better healthcare
          decisions.
        </p>

        <Link className="mission-statement__link" to="/about">
          Learn more about Sehat Connect
        </Link>
      </div>
    </section>
  );
}
