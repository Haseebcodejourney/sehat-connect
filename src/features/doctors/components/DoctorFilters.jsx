import Select from '../../components/ui/Select';

export default function DoctorFilters({ onFilterChange, filters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="doctor-filters">
      <h3>Filters</h3>

      <div className="doctor-filters__group">
        <label htmlFor="specialty">Specialty</label>
        <Select
          id="specialty"
          name="specialty"
          value={filters.specialty}
          onChange={handleChange}
          options={[
            { value: '', label: 'All Specialties' },
            { value: 'cardiology', label: 'Cardiology' },
            { value: 'dermatology', label: 'Dermatology' },
            { value: 'neurology', label: 'Neurology' },
            { value: 'orthopedics', label: 'Orthopedics' },
            { value: 'pediatrics', label: 'Pediatrics' },
          ]}
        />
      </div>

      <div className="doctor-filters__group">
        <label htmlFor="rating">Minimum Rating</label>
        <Select
          id="rating"
          name="rating"
          value={filters.rating}
          onChange={handleChange}
          options={[
            { value: 0, label: 'Any Rating' },
            { value: 3, label: '3+ Stars' },
            { value: 4, label: '4+ Stars' },
            { value: 4.5, label: '4.5+ Stars' },
          ]}
        />
      </div>

      <div className="doctor-filters__group">
        <label htmlFor="availability">Availability</label>
        <Select
          id="availability"
          name="availability"
          value={filters.availability}
          onChange={handleChange}
          options={[
            { value: '', label: 'Any Time' },
            { value: 'today', label: 'Today' },
            { value: 'week', label: 'This Week' },
            { value: 'month', label: 'This Month' },
          ]}
        />
      </div>
    </div>
  );
}
