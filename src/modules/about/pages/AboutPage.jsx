import AboutCta from '../components/AboutCta';
import AboutFounders from '../components/AboutFounders';
import AboutHero from '../components/AboutHero';
import AboutIntro from '../components/AboutIntro';
//import AboutLife from '../components/AboutLife';
import AboutMission from '../components/AboutMission';
import AboutStats from '../components/AboutStats';
import AboutTimeline from '../components/AboutTimeline';

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutIntro />
      <AboutTimeline />
      <AboutFounders />
      <AboutCta />
      {/* <AboutLife /> */}
    </div>
  );
}
