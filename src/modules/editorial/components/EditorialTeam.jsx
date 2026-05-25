import { EDITORIAL_EXPERTS } from '../data/editorialContent';

export default function EditorialTeam() {
  return (
    <section className="editorial-page__team" aria-labelledby="editorial-team-title">
      <div className="editorial-page__container">
        <h2 id="editorial-team-title" className="editorial-page__team-title">
          Team of Experts
        </h2>

        <div className="editorial-page__team-grid">
          {EDITORIAL_EXPERTS.map((expert) => (
            <article key={expert.id} className="editorial-team-card">
              <div className={`editorial-team-card__photo editorial-team-card__photo--${expert.id}`} aria-hidden="true" />
              <div className="editorial-team-card__info">
                <h3 className="editorial-team-card__name">{expert.name}</h3>
                <p className="editorial-team-card__role">
                  <span className="editorial-team-card__role-label">{expert.role}</span>
                </p>
                <p className="editorial-team-card__role">
                  <span className="editorial-team-card__experience">{expert.experience}</span> experience
                </p>
                <p className="editorial-team-card__qualification">{expert.qualification}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
