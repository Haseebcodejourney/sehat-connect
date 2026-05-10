import Careers from '../../components/Home/Careers';
import Hero from '../../components/Home/Hero';
import HowHelp from '../../components/Home/HowHelp';
import HowWeWork from '../../components/Home/HowWeWork';
import MedicineRange from '../../components/Home/MedicineRange';
import MissionStatement from '../../components/Home/MissionStatement';
import NewsArticles from '../../components/Home/NewsArticles';

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero">
          <Hero/>
          <HowHelp/>
          <MissionStatement/>
          <MedicineRange/>
          <HowWeWork/>
          <Careers/>
          <NewsArticles/>
      </section>

      {/* <section className="home__features">
        <div className="home__features-grid">
          <div className="home__feature-card">
            <h3>Easy Booking</h3>
            <p>Schedule appointments with just a few clicks</p>
          </div>
          <div className="home__feature-card">
            <h3>Expert Doctors</h3>
            <p>Access to qualified healthcare professionals</p>
          </div>
          <div className="home__feature-card">
            <h3>Secure & Safe</h3>
            <p>Your health data is protected and secure</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
