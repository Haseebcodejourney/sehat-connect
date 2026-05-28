/**
 * Home news / articles teaser (static mock content until CMS is connected).
 */
import '../../styles/layout/home/_newsarticles.scss';

export default function NewsArticles() {
  return (
    <section className="news-articles" aria-label="Latest health news articles">
      <span>News &amp; Articles</span>
      <h2 className="news-articles__title">Read top articles of the day</h2>
      <p className="news-articles__p">
        Health articles that keep you informed about good health practices and achieve your goals.
      </p>

      <div className="news-articles__list">
        <article className="news-article" aria-label="Article about pain management and rehabilitation">
          <figure>
            <img
              src="/assets/b2c_design/news/physical-therapy-rehabilitation.webp"
              alt="Physical therapy and rehabilitation"
              width={376}
              height={217}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <h3 className="news-article__title">Pain Management</h3>
          <p className="news-article__summary">
            Difference Between Physical Therapy and Rehabilitation – Read to Learn!
          </p>
        </article>
      </div>

      <span className="news-articles__a_wrapper">
        <a className="news-articles__a" href="/">
          View all health articles
        </a>
      </span>
    </section>
  );
}
