import { EDITORIAL_WRITERS } from '../data/editorialContent';

function SocialLinks({ twitter, linkedin }) {
  return (
    <div className="editorial-writer-card__social">
      <a
        href={twitter}
        className="editorial-writer-card__social-link editorial-writer-card__social-link--twitter"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter profile"
      >
        <svg viewBox="0 0 13.707 10.786" width="14" height="11" aria-hidden="true">
          <path
            fill="#fff"
            d="M12.3,6.069c.009.118.009.236.009.354a7.809,7.809,0,0,1-7.993,7.744A8.126,8.126,0,0,1,0,12.945a6,6,0,0,0,.678.034,5.742,5.742,0,0,0,3.488-1.163A2.8,2.8,0,0,1,1.539,9.928a3.654,3.654,0,0,0,.531.042,3.062,3.062,0,0,0,.739-.093A2.745,2.745,0,0,1,.557,7.206V7.173a2.9,2.9,0,0,0,1.27.345A2.7,2.7,0,0,1,.574,5.251,2.637,2.637,0,0,1,.957,3.878,8.073,8.073,0,0,0,6.749,6.726,2.981,2.981,0,0,1,6.68,6.1,2.765,2.765,0,0,1,9.489,3.381a2.845,2.845,0,0,1,2.053.859,5.64,5.64,0,0,0,1.783-.657,2.732,2.732,0,0,1-1.235,1.5,5.775,5.775,0,0,0,1.618-.421A5.94,5.94,0,0,1,12.3,6.069Z"
          />
        </svg>
      </a>
      <a
        href={linkedin}
        className="editorial-writer-card__social-link editorial-writer-card__social-link--linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <svg viewBox="0 0 10.6 10.601" width="11" height="11" aria-hidden="true">
          <path
            fill="#fff"
            d="M2.373,10.6H.175V3.524h2.2Zm-1.1-8.043A1.279,1.279,0,1,1,2.546,1.273,1.284,1.284,0,0,1,1.273,2.558ZM10.6,10.6H8.405V7.156c0-.821-.017-1.874-1.143-1.874-1.143,0-1.318.892-1.318,1.815v3.5h-2.2V3.524H5.857v.965h.031A2.309,2.309,0,0,1,7.967,3.346c2.224,0,2.633,1.465,2.633,3.367V10.6Z"
          />
        </svg>
      </a>
    </div>
  );
}

export default function EditorialWriters() {
  return (
    <section className="editorial-page__writers" aria-labelledby="editorial-writers-title">
      <div className="editorial-page__container">
        <h2 id="editorial-writers-title" className="editorial-page__writers-title">
          Our Writers
        </h2>

        <div className="editorial-page__writers-grid">
          {EDITORIAL_WRITERS.map((writer) => (
            <article key={writer.id} className="editorial-writer-card">
              <div className={`editorial-writer-card__photo editorial-writer-card__photo--${writer.id}`} aria-hidden="true" />
              <div className="editorial-writer-card__info">
                <h3 className="editorial-writer-card__name">{writer.name}</h3>
                <SocialLinks twitter={writer.twitter} linkedin={writer.linkedin} />
                <p className="editorial-writer-card__bio">{writer.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
