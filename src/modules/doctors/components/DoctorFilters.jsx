import Select from '../../../components/ui/Select';
import { DOCTOR_CITIES, DOCTOR_SPECIALTIES } from '../constants';

export default function DoctorFilters({ filters, onFilterChange, showCityFilter }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="doctor-filters">
      <h3>Filter by</h3>

      {showCityFilter && (
        <div className="doctor-filters__group">
          <label htmlFor="city">City</label>
          <Select
            id="city"
            name="city"
            value={filters.city}
            onChange={handleChange}
            options={[
              { value: '', label: 'All Cities' },
              ...DOCTOR_CITIES.map((city) => ({ value: city.slug, label: city.label })),
            ]}
          />
        </div>
      )}

      <div className="doctor-filters__group">
        <label htmlFor="specialty">Speciality</label>
        <Select
          id="specialty"
          name="specialty"
          value={filters.specialty}
          onChange={handleChange}
          options={[
            { value: '', label: 'All Specialities' },
            ...DOCTOR_SPECIALTIES.map((s) => ({ value: s.slug, label: s.label })),
          ]}
        />
      </div>
    </div>
  );
}

