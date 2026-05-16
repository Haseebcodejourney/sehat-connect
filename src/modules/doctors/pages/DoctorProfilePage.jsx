import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorState from '../../../components/common/ErrorState';
import ReviewList from '../../../features/reviews/components/ReviewList';
import DoctorsBreadcrumb from '../components/DoctorsBreadcrumb';
import DoctorProfileHero from '../components/DoctorProfileHero';
import DoctorBookingSidebar from '../components/DoctorBookingSidebar';
import DoctorCard from '../components/DoctorCard';
import {
  findDoctorBySlug,
  getDoctorsListPath,
  getCityLabel,
  getSpecialtyLabel,
} from '../utils/doctorPaths';
import {
  getDoctorAbout,
  getDoctorDiseases,
  getDoctorEducation,
  getDoctorFaqs,
  getDoctorLocations,
  getSimilarDoctors,
} from '../utils/doctorProfile';

export default function DoctorProfilePage() {
  const { city, specialty, slug } = useParams();
  const doctor = findDoctorBySlug({ city, specialty, slug });
  const [showAllDiseases, setShowAllDiseases] = useState(false);

  if (!doctor) {
    return (
      <div className="doctor-profile doctor-profile--not-found">
        <ErrorState
          title="Doctor not found"
          description="We could not find a doctor at this address. Browse the directory to find another specialist."
        />
        <Link to={getDoctorsListPath({ city, specialty })} className="btn btn--primary btn--medium">
          Back to doctors
        </Link>
      </div>
    );
  }

  const about = getDoctorAbout(doctor);
  const education = getDoctorEducation(doctor);
  const locations = getDoctorLocations(doctor);
  const diseases = getDoctorDiseases(doctor);
  const similarDoctors = getSimilarDoctors(doctor);
  const faqs = getDoctorFaqs(doctor);
  const visibleDiseases = showAllDiseases ? diseases : diseases.slice(0, 8);
  const specialtyLabel = getSpecialtyLabel(specialty);

  return (
    <div className="doctor-profile">
      <DoctorsBreadcrumb city={city} specialty={specialty} doctorName={doctor.name} />

      <div className="doctor-profile__layout">
        <div className="doctor-profile__main">
          <DoctorProfileHero doctor={doctor} />

          <section className="doctor-profile-section">
            <h2>About</h2>
            <p>{about}</p>
          </section>

          {education.length > 0 && (
            <section className="doctor-profile-section">
              <h2>Education</h2>
              <ul className="doctor-profile-list">
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {locations.length > 0 && (
            <section className="doctor-profile-section">
              <h2>Locations</h2>
              <ul className="doctor-profile-locations">
                {locations.map((location) => (
                  <li key={`${location.name}-${location.address}`} className="doctor-profile-location">
                    <h3>{location.name}</h3>
                    {location.schedule && <p className="doctor-profile-location__schedule">{location.schedule}</p>}
                    {location.address && <p className="doctor-profile-location__address">{location.address}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {diseases.length > 0 && (
            <section className="doctor-profile-section">
              <h2>Diseases</h2>
              <p className="doctor-profile-section__intro">
                {doctor.name} treats the following diseases. Tap on any disease to see its details.
              </p>
              <ul className="doctor-profile-tags">
                {visibleDiseases.map((disease) => (
                  <li key={disease}>
                    <span className="doctor-profile-tag">{disease}</span>
                  </li>
                ))}
              </ul>
              {diseases.length > 8 && (
                <button
                  type="button"
                  className="doctor-profile-section__toggle"
                  onClick={() => setShowAllDiseases((prev) => !prev)}
                >
                  {showAllDiseases ? 'See Less' : 'See More'}
                </button>
              )}
            </section>
          )}

          <section className="doctor-profile-section">
            <h2>Reviews</h2>
            <ReviewList doctorId={String(doctor.id)} />
          </section>

          {similarDoctors.length > 0 && (
            <section className="doctor-profile-section">
              <h2>Similar Doctors</h2>
              <div className="doctor-profile-similar">
                {similarDoctors.map((item) => (
                  <DoctorCard key={item.id} doctor={item} />
                ))}
              </div>
            </section>
          )}

          <section className="doctor-profile-section doctor-profile-section--faq">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <dl className="doctor-profile-faq">
              {faqs.map((faq) => (
                <div key={faq.question} className="doctor-profile-faq__item">
                  <dt>{faq.question}</dt>
                  <dd>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="doctor-profile-section doctor-profile-section--links">
            <h2>{specialtyLabel} Near You</h2>
            <Link
              to={getDoctorsListPath({ city, specialty })}
              className="doctor-profile-section__link"
            >
              View all {specialtyLabel} in {getCityLabel(city)}
            </Link>
          </section>
        </div>

        <DoctorBookingSidebar doctor={doctor} city={city} specialty={specialty} />
      </div>
    </div>
  );
}

