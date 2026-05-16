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
      <PharmacyFranchiseHero />

      <div className="pharmacy-franchise-page__container">
        <section className="pharmacy-franchise-intro">
          <h1 className="pharmacy-franchise-intro__headline">
            Elevate your business with our
            <span> Pharmacy Franchising Model</span>
          </h1>

          <h2 className="pharmacy-franchise-intro__subtitle">Why Sehat Connect Pharmacy?</h2>
          <p className="pharmacy-franchise-intro__text">
            Sehat Connect Pharmacy is growing as one of Pakistan&apos;s emerging pharmacy chains. We
            are building a trusted healthcare retail network so patients can access genuine
            medicines with professional service. This is your chance to be part of that healthcare
            revolution.
          </p>
          <button type="button" className="pharmacy-franchise-intro__cta" onClick={scrollToForm}>
            Request Information
          </button>
        </section>

        <PharmacyFranchiseBenefits />
        <PharmacyFranchiseForm />
        <PharmacyFranchiseGallery />
        <PharmacyFranchisePresence />
      </div>
    </div>
  );
}
