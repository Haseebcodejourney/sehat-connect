import { Link } from 'react-router-dom';
import { getLabTestPath } from '../utils/labPaths';

export default function LabRelatedTests({ tests }) {
  if (!tests.length) return null;

  return (
    <section className="lab-related">
      <h2>Common Lab Tests in Pakistan</h2>
      <ul className="lab-related__list">
        {tests.map((test) => (
          <li key={test.slug}>
            <Link to={getLabTestPath(test)}>{test.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

