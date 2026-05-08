import { useState, useCallback } from 'react';
import DoctorSearchBar from '../../features/doctors/components/DoctorSearchBar';
import DoctorFilters from '../../features/doctors/components/DoctorFilters';
import DoctorCard from '../../features/doctors/components/DoctorCard';
import PageLoader from '../../components/common/PageLoader';
import EmptyState from '../../components/common/EmptyState';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    specialty: '',
    rating: 0,
    availability: '',
  });
  const [doctors] = useState([]);
  const [loading] = useState(false);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    // TODO: Implement API call
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
    // TODO: Implement API call
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className="doctors">
      <div className="doctors__header">
        <h1>Find Doctors</h1>
        <DoctorSearchBar onSearch={handleSearch} />
      </div>

      <div className="doctors__container">
        <aside className="doctors__sidebar">
          <DoctorFilters onFilterChange={handleFilterChange} filters={filters} />
        </aside>

        <div className="doctors__list">
          {doctors.length === 0 ? (
            <EmptyState
              title="No doctors found"
              description={searchTerm ? `No doctors matched "${searchTerm}"` : 'Try adjusting your search or filters'}
            />
          ) : (
            doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
          )}
        </div>
      </div>
    </div>
  );
}
