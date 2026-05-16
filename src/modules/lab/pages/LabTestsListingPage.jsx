import { useMemo, useState } from 'react';
import LabBreadcrumb from '../components/LabBreadcrumb';
import LabTestCard from '../components/LabTestCard';
import { filterLabTests } from '../utils/labPaths';

export default function LabTestsListingPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const tests = useMemo(() => filterLabTests(searchTerm), [searchTerm]);

  return (
    <div className="lab-tests-listing">
      <LabBreadcrumb />

      <header className="lab-tests-listing__header">
        <h1>Lab Tests</h1>
        <p>Book reliable lab tests from trusted labs with home sampling available.</p>
      </header>

      <div className="lab-tests-listing__search">
        <input
          type="search"
          placeholder="Search lab tests by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search lab tests"
        />
      </div>

      <p className="lab-tests-listing__count">
        <strong>{tests.length}</strong> test{tests.length === 1 ? '' : 's'} available
      </p>

      <div className="lab-tests-listing__grid">
        {tests.map((test) => (
          <LabTestCard key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
}

