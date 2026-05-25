export default function CareersCoreValues({ eyebrow, title, description, values }) {
  return (
    <section className="careers-values" aria-labelledby="careers-values-title">
      <div className="careers-page__container">
        <div className="careers-values__intro">
          <div className="careers-values__head">
            <p className="careers-values__eyebrow">{eyebrow}</p>
            <h2 id="careers-values-title">{title}</h2>
          </div>
          <p className="careers-values__description">{description}</p>
        </div>

        <div className="careers-values__grid">
          {values.map((value) => (
            <article key={value.id} className={`careers-values__card careers-values__card--${value.id}`}>
              <div className="careers-values__icon-wrap">
                <img src={value.icon} alt="" width={61} height={61} loading="lazy" />
              </div>
              <div className="careers-values__card-body">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
