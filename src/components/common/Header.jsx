import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authStore';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo" onClick={() => navigate('/')}>
          Sehat Connect
        </div>

        <nav className="header__nav">
          {!user ? (
            <>
              <a href="/doctors">Doctors</a>
              <a href="/login">Login</a>
              <a href="/signup">Sign Up</a>
            </>
          ) : (
            <>
              <a href={`/${user.role}`}>Dashboard</a>
              <a href={`/${user.role}/profile`}>Profile</a>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
