import React from 'react';
import '../../styles/layout/home/_newsarticles.scss';

const NewsArticles = () => {
  return (
    <>
      <section className="news-articles" aria-label="Latest health news articles">
        <span>News & Articles</span>
        <h2 className="news-articles__title">Read top articles of the day</h2>
        <p className='news-articles__p'>Health articles that keep you informed about good health practices and achieve your goals.</p>
        <div className="news-articles__list"> 
          <article className="news-article" aria-label="Article about healthy eating">
            <figure>
              <img src='https://healthwire.pk/wp-content/uploads/2022/09/difference-between-physical-therapy-and-rehabilitation.jpg' alt='' width={376} height={217} />
            </figure>
            <h3 className="news-article__title">Pain Management</h3>
            <p className="news-article__summary">Difference Between Physical Therapy and Rehabilitation – Read to Learn!</p>
          </article>
         
        </div>
         <span className='news-articles__a_wrapper'>
            <a className='news-articles__a' href='/'>View All</a>
          </span>
      </section>
    </>
  )
}

export default NewsArticles
