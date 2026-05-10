import '../../styles/layout/home/_careers.scss';

const Careers = () => {
  return (
    <section className="careers" aria-label="Career opportunities at Sehat Connect">
      <span className='careers__span'>News & Articles</span>
        <h2 className="careers__title">Read top articles of the day</h2>
        {/* <p className='careers__p'>Health articles that keep you informed about good health practices and achieve your goals.</p> */}
        <figure className='careers__figure'>
          <svg width="988" height="334" viewBox="0 0 988 334" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M86 0C38.5035 0 0 38.5035 0 86V0H86ZM289.5 0H86C133.496 0 172 38.5035 172 86V160C172 207.496 133.496 246 86 246C38.5035 246 0 207.496 0 160V334H289.5H468C434.863 334 408 307.137 408 274V60C408 26.8629 434.863 0 468 0H289.5ZM724 0C757.137 0 784 26.8629 784 60V274C784 307.137 757.137 334 724 334H900H988V246C988 294.601 948.601 334 900 334C851.399 334 812 294.601 812 246V88C812 39.3989 851.399 0 900 0C948.601 0 988 39.3989 988 88V0H900H724ZM289.5 0C337.273 0 376 38.7274 376 86.5V247.5C376 295.273 337.273 334 289.5 334C241.727 334 203 295.273 203 247.5V86.5C203 38.7274 241.727 0 289.5 0Z" fill="white"></path>
</svg>
          {/* <img src='https://healthwire.pk/wp-content/uploads/2022/09/difference-between-physical-therapy-and-rehabilitation.jpg' alt='' width={376} height={217} /> */}
        </figure>
        <p className='careers__bottom_text'>Join us, and help transform healthcare for everyone.</p>
        <div className='careers__link_wrapper'>
          <a className='careers__link' href='/'>View Job Openings</a>
        </div>
    </section>
  )
}

export default Careers
