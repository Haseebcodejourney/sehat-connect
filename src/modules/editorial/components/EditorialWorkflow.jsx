import { EDITORIAL_WORKFLOW } from '../data/editorialContent';

export default function EditorialWorkflow() {
  return (
    <section className="editorial-page__section editorial-page__workflow" aria-labelledby="editorial-workflow-title">
      <h2 id="editorial-workflow-title" className="editorial-page__workflow-title">
        Editorial Workflow
      </h2>

      <div className="editorial-timeline">
        <ul className="editorial-timeline__list">
          {EDITORIAL_WORKFLOW.map((item) => {
            const isRight = item.side === 'right';
            return (
              <li
                key={item.step}
                className={`editorial-timeline__item${item.isLast ? ' editorial-timeline__item--last' : ''}`}
              >
                <div className={`editorial-timeline__point${isRight ? ' editorial-timeline__point--right' : ' editorial-timeline__point--left'}`}>
                  <span className="editorial-timeline__number">{item.step}</span>
                </div>
                <div className={`editorial-timeline__bubble${isRight ? ' editorial-timeline__bubble--right' : ' editorial-timeline__bubble--left'}`}>
                  <p className="editorial-timeline__bubble-title">{item.title}</p>
                  <p className="editorial-timeline__bubble-text">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
