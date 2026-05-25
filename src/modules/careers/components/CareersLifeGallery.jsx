export default function CareersLifeGallery({ images }) {
  const track = [...images, ...images];

  return (
    <section className="careers-life" aria-labelledby="careers-life-title">
      <p className="careers-life__eyebrow">Culture</p>
      <h2 id="careers-life-title">Life at Healthwire</h2>

      <div className="careers-life__marquee" aria-hidden="true">
        <div className="careers-life__track">
          {track.map((src, index) => (
            <figure key={`${src}-${index}`} className="careers-life__slide">
              <img src={src} alt="" width={376} height={461} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
