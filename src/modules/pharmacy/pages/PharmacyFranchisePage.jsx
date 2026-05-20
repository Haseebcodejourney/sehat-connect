import PharmacyFranchiseHero from '../components/PharmacyFranchiseHero';
import PharmacyFranchiseBenefits from '../components/PharmacyFranchiseBenefits';
import PharmacyFranchiseForm from '../components/PharmacyFranchiseForm';
import PharmacyFranchiseGallery from '../components/PharmacyFranchiseGallery';
import PharmacyFranchisePresence from '../components/PharmacyFranchisePresence';

export default function PharmacyFranchisePage() {
  const scrollToForm = () => {
    document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pharmacy-franchise-page">
      <div className="pharmacy-franchise-page__wrap">
        <PharmacyFranchiseHero />

        <div className="pharmacy-franchise-page__container">
          <h1 className="pharmacy-franchise-headline">
            <span className="pharmacy-franchise-headline__line">Elevate your business with our</span>
            <span className="pharmacy-franchise-headline__accent">Pharmacy Franchising Model</span>
          </h1>

          <section className="pharmacy-franchise-why" aria-labelledby="pharmacy-franchise-why-title">
            <h2 id="pharmacy-franchise-why-title" className="pharmacy-franchise-why__title">
              Why Sehat Connect Pharmacy?
            </h2>
            <p className="pharmacy-franchise-why__text">
              Sehat Connect Pharmacy is building one of Pakistan&apos;s fastest-growing pharmacy
              retail networks — bringing genuine medicines and professional service closer to
              communities across the country. This is your chance to play your part in this
              healthcare revolution.
            </p>
            <button type="button" className="pharmacy-franchise-why__cta" onClick={scrollToForm}>
              Request Information
            </button>
          </section>

          <PharmacyFranchiseBenefits />
          <PharmacyFranchiseForm />
          <PharmacyFranchiseGallery />
          <PharmacyFranchisePresence />
        </div>
      </div>
    </div>
  );
}
