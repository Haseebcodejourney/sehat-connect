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
      <div className="header_container">

        <div className='header_top'>
          <div className='header_top_left'>
            <div className="header_logo" onClick={() => navigate('/')}>
              <figure className='header_figure'>
                <img className='header_img' src="https://neareasthospital.com/wp-content/uploads/sites/163/2019/10/01/yakin-dogu-hastanesi-1_svg-tr.svg?ver=2916765794c490712f3b4a7298979919" alt="Sehat Connect Logo" />
              </figure>
            </div>
            <div className='header_search_wrapper'>
              <div className='header_location_wrapper'>
                <span className='header_location_dot'>
                  <svg id="" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M9.99935 13.8346C11.8403 13.8346 13.3327 12.3423 13.3327 10.5013C13.3327 8.66035 11.8403 7.16797 9.99935 7.16797C8.1584 7.16797 6.66602 8.66035 6.66602 10.5013C6.66602 12.3423 8.1584 13.8346 9.99935 13.8346Z" fill="#255FB8"></path>
                    <path d="M10.8327 3.89214V2.16797H9.16602V3.89214C7.6996 4.07937 6.33682 4.74811 5.29149 5.79344C4.24616 6.83878 3.57742 8.20155 3.39018 9.66797H1.66602V11.3346H3.39018C3.57714 12.8012 4.2458 14.1641 5.29118 15.2095C6.33656 16.2549 7.69949 16.9235 9.16602 17.1105V18.8346H10.8327V17.1105C12.2993 16.9236 13.6623 16.255 14.7077 15.2096C15.7531 14.1642 16.4217 12.8012 16.6085 11.3346H18.3327V9.66797H16.6085C16.4216 8.20144 15.7529 6.83852 14.7075 5.79313C13.6621 4.74775 12.2992 4.0791 10.8327 3.89214ZM9.99935 15.5013C7.24185 15.5013 4.99935 13.2588 4.99935 10.5013C4.99935 7.7438 7.24185 5.5013 9.99935 5.5013C12.7569 5.5013 14.9994 7.7438 14.9994 10.5013C14.9994 13.2588 12.7569 15.5013 9.99935 15.5013Z" fill="#255FB8"></path>
                  </svg>
                </span>
                <div className='header_location_input_wapper'>
                  <input type="text" placeholder='Location' className='header_location_input' />
                </div>
              </div>
              <div className='header_main_search_wrapper'>
                <input type="text" placeholder='Search for doctors, clinics, hospitals, etc.' className='header_main_search_input' />
              </div>
              <div className='header_search_button'></div>
            </div>
          </div>
          <div className='header_top_right'>
            Signup
          </div>

          <div className='header_search'></div>
        </div>

        <div className='header_bottom'>
          <nav className="header_nav">
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
      </div>
    </header>
  );
}
