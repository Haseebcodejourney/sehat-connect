/**
 * Public home page — composes landing sections in display order.
 * Visible H1 is sr-only; section headings provide structure for accessibility.
 */
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
      <h1 className="sr-only">Sehat Connect Home</h1>

      <section className="home__hero" aria-label="Home page sections">
        <Hero />
        <HowHelp />
        <MissionStatement />
        <MedicineRange />
        <HowWeWork />
        <Careers />
        <NewsArticles />
      </section>
    </div>
  );
}
