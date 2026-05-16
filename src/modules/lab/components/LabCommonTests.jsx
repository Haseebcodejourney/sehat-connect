import { Link } from 'react-router-dom';
import { getAllLabTests, getLabTestPath } from '../utils/labPaths';

export default function LabCommonTests() {
  const tests = getAllLabTests();

  return (
    <section className="lab-common-tests">
      <h2>Common Lab Tests in Pakistan</h2>
      <ul className="lab-common-tests__list">
        {tests.map((test) => (
          <li key={test.slug}>
            <Link to={getLabTestPath(test)}>{test.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
