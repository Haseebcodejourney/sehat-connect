import { Link } from 'react-router-dom';
import { getLabTestPath } from '../utils/labPaths';

export default function LabTestCard({ test }) {
  return (
    <article className="lab-test-card">
      <h3 className="lab-test-card__name">
        <Link to={getLabTestPath(test)}>{test.name}</Link>
      </h3>
      <p className="lab-test-card__meta">
        {test.sampleType && <span>{test.sampleType}</span>}
        {test.reportTime && <span>Report in {test.reportTime}</span>}
      </p>
      <div className="lab-test-card__price">
        <strong>Rs. {test.price.toLocaleString()}</strong>
        {test.originalPrice > test.price && (
          <span className="lab-test-card__price-old">Rs. {test.originalPrice.toLocaleString()}</span>
        )}
      </div>
      <Link to={getLabTestPath(test)} className="lab-test-card__link">
        View details
      </Link>
    </article>
  );
}

