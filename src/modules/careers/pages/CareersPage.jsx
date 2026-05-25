import CareersCoreValues from '../components/CareersCoreValues';
import CareersHero from '../components/CareersHero';
import CareersJobListings from '../components/CareersJobListings';
import CareersLifeGallery from '../components/CareersLifeGallery';
import CareersTestimonials from '../components/CareersTestimonials';
import {
  CAREERS_CORE_VALUES,
  CAREERS_GALLERY_IMAGES,
  CAREERS_HERO,
  CAREERS_TESTIMONIALS,
} from '../data/careersContent';

export default function CareersPage() {
  return (
    <div className="careers-page">
      <CareersHero title={CAREERS_HERO.title} subtitle={CAREERS_HERO.subtitle} />
      <CareersCoreValues {...CAREERS_CORE_VALUES} />
      <CareersLifeGallery images={CAREERS_GALLERY_IMAGES} />
      <CareersJobListings />
      <CareersTestimonials slides={CAREERS_TESTIMONIALS} />
    </div>
  );
}
