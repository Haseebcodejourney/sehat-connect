import { PRESENCE_CITIES } from '../constants';

export default function PharmacyFranchisePresence() {
  return (
    <section className="pharmacy-franchise-presence">
      <h2 className="pharmacy-franchise-presence__title">Our Presence</h2>
      <p className="pharmacy-franchise-presence__intro">
        Support to help your franchise get visibility and growth doesn&apos;t end with just helping
        you set up — there&apos;s more.
      </p>
      <ul className="pharmacy-franchise-presence__highlights">
        <li>
          <span className="pharmacy-franchise-presence__check" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5 9.2 7 12.7 14.5 5.2"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Fastest Growing Pharmacy Chain
        </li>
        <li>
          <span className="pharmacy-franchise-presence__check" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5 9.2 7 12.7 14.5 5.2"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Currently Operational at 10+ Locations
        </li>
      </ul>
      <div className="pharmacy-franchise-presence__grid">
        {PRESENCE_CITIES.map((city) => (
          <article
            key={city.slug}
            className={`pharmacy-franchise-presence__card pharmacy-franchise-presence__card--${city.slug}`}
            style={city.image ? { backgroundImage: `url(${city.image})` } : undefined}
          >
            <span className="pharmacy-franchise-presence__city">{city.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
