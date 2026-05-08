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

        <div className="header__top">
          <div className="header__top-left">
            <div className="header__logo" onClick={() => navigate('/')}>
              <figure className="header__figure">
                <img className="header__img" src="https://neareasthospital.com/wp-content/uploads/sites/163/2019/10/01/yakin-dogu-hastanesi-1_svg-tr.svg?ver=2916765794c490712f3b4a7298979919" alt="Sehat Connect Logo" />
              </figure>
            </div>
            <div className="header__search-wrapper">
              <div className="header__location-wrapper">
                <span className="header__location-dot">
                  <svg id="" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M9.99935 13.8346C11.8403 13.8346 13.3327 12.3423 13.3327 10.5013C13.3327 8.66035 11.8403 7.16797 9.99935 7.16797C8.1584 7.16797 6.66602 8.66035 6.66602 10.5013C6.66602 12.3423 8.1584 13.8346 9.99935 13.8346Z" fill="#255FB8"></path>
                    <path d="M10.8327 3.89214V2.16797H9.16602V3.89214C7.6996 4.07937 6.33682 4.74811 5.29149 5.79344C4.24616 6.83878 3.57742 8.20155 3.39018 9.66797H1.66602V11.3346H3.39018C3.57714 12.8012 4.2458 14.1641 5.29118 15.2095C6.33656 16.2549 7.69949 16.9235 9.16602 17.1105V18.8346H10.8327V17.1105C12.2993 16.9236 13.6623 16.255 14.7077 15.2096C15.7531 14.1642 16.4217 12.8012 16.6085 11.3346H18.3327V9.66797H16.6085C16.4216 8.20144 15.7529 6.83852 14.7075 5.79313C13.6621 4.74775 12.2992 4.0791 10.8327 3.89214ZM9.99935 15.5013C7.24185 15.5013 4.99935 13.2588 4.99935 10.5013C4.99935 7.7438 7.24185 5.5013 9.99935 5.5013C12.7569 5.5013 14.9994 7.7438 14.9994 10.5013C14.9994 13.2588 12.7569 15.5013 9.99935 15.5013Z" fill="#255FB8"></path>
                  </svg>
                </span>
                <div className="header__location-input-wrapper">
                  <input type="text" placeholder="Location" className="header__location-input" />
                </div>
              </div>
              <div className="header__main-search-wrapper">
                <input type="text" placeholder="Search for medicines and lab tests ..." className="header__main-search-input" />
              </div>
              <div className="header__search-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="buttons" width="52" height="45" viewBox="0 0 52 45" fill="none"><path d="M0 0H46C49.3137 0 52 2.68629 52 6V39C52 42.3137 49.3137 45 46 45H0V0Z" fill="#3F7FE0"></path><path d="M35.5123 29.6585L31.6439 25.79C32.8217 24.0268 33.3017 21.8885 32.9903 19.7911C32.6789 17.6936 31.5985 15.787 29.9592 14.442C28.3199 13.097 26.2389 12.4099 24.121 12.5143C22.0031 12.6186 19.9998 13.5071 18.5007 15.0067C17.0016 16.5064 16.1138 18.51 16.0102 20.6279C15.9066 22.7458 16.5944 24.8266 17.94 26.4654C19.2855 28.1042 21.1926 29.184 23.2902 29.4946C25.3877 29.8053 27.5258 29.3246 29.2886 28.1461L33.1571 32.0137C33.4721 32.321 33.8947 32.493 34.3347 32.493C34.7747 32.493 35.1973 32.321 35.5123 32.0137C35.8246 31.7014 36 31.2778 36 30.8361C36 30.3944 35.8246 29.9708 35.5123 29.6585ZM24.549 15.0125C25.7432 15.0125 26.9106 15.3666 27.9036 16.03C28.8965 16.6935 29.6704 17.6365 30.1274 18.7398C30.5844 19.8431 30.704 21.0571 30.471 22.2284C30.238 23.3996 29.6629 24.4755 28.8185 25.3199C27.9741 26.1643 26.8982 26.7394 25.727 26.9724C24.5557 27.2054 23.3417 27.0858 22.2384 26.6288C21.1351 26.1718 20.1921 25.3979 19.5286 24.4049C18.8652 23.412 18.5111 22.2446 18.5111 21.0504C18.5128 19.4496 19.1495 17.9148 20.2815 16.7829C21.4134 15.6509 22.9482 15.0142 24.549 15.0125Z" fill="white"></path></svg>
              </div>
            </div>
          </div>
          <div className="header__top-right">
            Signup
          </div>

          <div className="header__search"></div>
        </div>

        <div className="header__bottom">
          <nav className="header__nav">
            {!user ? (
              <>
                <a href="/doctors">Home</a>
                <a href="/login">Doctors</a>
                <a href="/signup">Lab Tests</a>
                   <a href="/signup">Health Blogs
                   
                   </a>
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
