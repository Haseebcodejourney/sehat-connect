import { useCallback, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LabMegaMenu from '../../modules/lab/components/LabMegaMenu';

export default function HeaderLabDropdown() {
  const location = useLocation();
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const isLabRoute = location.pathname.startsWith('/lab-tests');

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleBlur = (event) => {
    if (!containerRef.current?.contains(event.relatedTarget)) {
      closeMenu();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`header__nav-dropdown${isOpen ? ' header__nav-dropdown--open' : ''}`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={handleBlur}
    >
      <Link
        to="/lab-tests"
        className={`header__nav-dropdown-trigger${isLabRoute ? ' header__nav-dropdown-trigger--active' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Lab tests
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <LabMegaMenu isOpen={isOpen} />
    </div>
  );
}
