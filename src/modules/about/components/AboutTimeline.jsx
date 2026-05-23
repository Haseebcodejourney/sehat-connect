import { ABOUT_TIMELINE } from '../data/aboutContent';

export default function AboutTimeline() {
  return (
    <section className="about-timeline" aria-labelledby="about-timeline-title">
      <div className="about-page__container">
        <h2 id="about-timeline-title" className="about-timeline__title">
          What We Have Done
        </h2>

        <div className="about-timeline__track" aria-hidden="true">
          <figure className="about-timeline__figure">
           <img src="https://healthwire.pk/assets/B2c/careers/graph.webp" alt="" className="about-timeline__line" />
          </figure>
        </div>
      </div>
    </section>
  );
}
