import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import '../../styles/pages/_not-found.scss';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__code">404</h1>
        <h2 className="not-found__title">Page Not Found</h2>
        <p className="not-found__message">The page you're looking for doesn't exist or has been moved.</p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </div>
    </div>
  );
}
