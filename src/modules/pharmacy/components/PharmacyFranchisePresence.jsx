import { PRESENCE_CITIES } from '../constants';

export default function PharmacyFranchisePresence() {
  return (
    <section className="pharmacy-franchise-presence">
      <h2 className="pharmacy-franchise-presence__title">Our Presence</h2>
      <ul className="pharmacy-franchise-presence__highlights">
        <li>Fastest Growing Pharmacy Chain</li>
        <li>Currently Operational at 10+ Locations</li>
      </ul>
      <p className="pharmacy-franchise-presence__intro">
        Support to help your franchise get visibility and growth doesn&apos;t end with just helping
        you set up — there&apos;s more.
      </p>
      <div className="pharmacy-franchise-presence__grid">
        {PRESENCE_CITIES.map((city) => (
          <article
            key={city.slug}
            className={`pharmacy-franchise-presence__card pharmacy-franchise-presence__card--${city.slug}`}
          >
            <span className="pharmacy-franchise-presence__city">{city.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
