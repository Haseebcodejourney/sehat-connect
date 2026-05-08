import { useState, useCallback } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

export default function DoctorSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = useCallback(() => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  }, [searchTerm, onSearch]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="doctor-search-bar">
      <Input
        type="text"
        placeholder="Search doctors by name, specialty..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
