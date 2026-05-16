import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageLoader from '../../../components/common/PageLoader';
import EmptyState from '../../../components/common/EmptyState';
import DoctorsBreadcrumb from '../components/DoctorsBreadcrumb';
import DoctorListingHeader from '../components/DoctorListingHeader';
import DoctorSearchBar from '../components/DoctorSearchBar';
import DoctorFilters from '../components/DoctorFilters';
import DoctorCard from '../components/DoctorCard';
import DoctorCityLinks from '../components/DoctorCityLinks';
import { filterDoctors, getDoctorsListPath, getListingLocationLabel } from '../utils/doctorPaths';

export default function DoctorsListingPage() {
  const { city: routeCity, specialty: routeSpecialty } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [localSpecialty, setLocalSpecialty] = useState('');
  const [loading] = useState(false);

  const filters = useMemo(
    () => ({
      city: routeCity ?? '',
      specialty: routeSpecialty ?? localSpecialty,
    }),
    [routeCity, routeSpecialty, localSpecialty]
  );

  const activeSpecialty = routeSpecialty ?? (localSpecialty || undefined);

  const doctors = useMemo(
    () =>
      filterDoctors({
        city: routeCity,
        specialty: activeSpecialty,
        searchTerm,
        filters: {
          specialty: activeSpecialty,
        },
        sortBy,
      }),
    [routeCity, activeSpecialty, searchTerm, sortBy]
  );

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortBy(value);
  }, []);

  const handleFilterChange = useCallback(
    (nextFilters) => {
      const { city, specialty } = nextFilters;
      const nextCity = city || undefined;
      const nextSpecialty = specialty || undefined;
      const targetPath = getDoctorsListPath({
        city: nextCity,
        specialty: nextSpecialty,
      });

      if (targetPath !== window.location.pathname) {
        navigate(targetPath);
        setLocalSpecialty('');
        return;
      }

      setLocalSpecialty(routeSpecialty ? '' : specialty);
    },
    [navigate, routeSpecialty]
  );

  if (loading) return <PageLoader />;

  const locationLabel = getListingLocationLabel(routeCity);

  return (
    <div className="doctors">
      <DoctorsBreadcrumb city={routeCity} specialty={routeSpecialty} />

      <DoctorListingHeader />

      <div className="doctors__container">
        <aside className="doctors__sidebar">
          <DoctorFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            showCityFilter={!routeCity}
          />
        </aside>

        <div className="doctors__content">
          <p className="doctors__count">
            <strong>{doctors.length}</strong> Doctors available {locationLabel}
          </p>

          <DoctorSearchBar
            onSearch={handleSearch}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />

          <div className="doctors__list">
            {doctors.length === 0 ? (
              <EmptyState
                title="No doctors found"
                description={
                  searchTerm
                    ? `No doctors matched "${searchTerm}"`
                    : 'Try adjusting your filters or browse another city'
                }
              />
            ) : (
              doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
            )}
          </div>
        </div>
      </div>

      <DoctorCityLinks />
    </div>
  );
}
