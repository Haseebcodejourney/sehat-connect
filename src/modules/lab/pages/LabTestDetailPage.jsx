import { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorState from '../../../components/common/ErrorState';
import LabBreadcrumb from '../components/LabBreadcrumb';
import LabTestContent from '../components/LabTestContent';
import LabQuickBooking from '../components/LabQuickBooking';
import LabCommonTests from '../components/LabCommonTests';
import { findLabTestBySlug } from '../utils/labPaths';

export default function LabTestDetailPage() {
  const { slug } = useParams();
  const test = findLabTestBySlug(slug);

  const handleAddToCart = useCallback(() => {
    window.alert(`${test?.name} added to cart. Checkout will be available soon.`);
  }, [test?.name]);

  const handleQuickBook = useCallback(() => {
    window.alert('Quick booking will be available soon. Please try again later.');
  }, []);

  if (!test) {
    return (
      <div className="lab-test-page lab-test-page--not-found">
        <ErrorState
          title="Lab test not found"
          description="We could not find this lab test. Browse all tests to find what you need."
        />
        <Link to="/lab-tests" className="btn btn--primary btn--medium">
          Browse lab tests
        </Link>
      </div>
    );
  }

  return (
    <div className="lab-test-page">
      <LabBreadcrumb testName={test.name} />

      <h1 className="lab-test-page__title">{test.name}</h1>

      <div className="lab-test-page__layout">
        <LabTestContent test={test} onAddToCart={handleAddToCart} />
        <LabQuickBooking testName={test.name} onBook={handleQuickBook} />
      </div>

      <LabCommonTests />
    </div>
  );
}
