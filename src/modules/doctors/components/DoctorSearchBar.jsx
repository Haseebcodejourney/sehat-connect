import { useState } from 'react';
import Select from '../../../components/ui/Select';
import { SORT_OPTIONS } from '../constants';

export default function DoctorSearchBar({ onSearch, sortBy, onSortChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value.trim());
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="doctor-toolbar">
      <div className="doctor-toolbar__search">
        <span className="doctor-toolbar__icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <input
          type="search"
          className="doctor-toolbar__input"
          placeholder="Search doctors by name"
          value={searchTerm}
          onChange={handleChange}
          aria-label="Search doctors by name"
        />
      </div>

      <div className="doctor-toolbar__sort">
        <label htmlFor="doctor-sort">Sort By :</label>
        <Select
          id="doctor-sort"
          name="sortBy"
          value={sortBy}
          onChange={handleSortChange}
          options={SORT_OPTIONS}
        />
      </div>
    </div>
  );
}

