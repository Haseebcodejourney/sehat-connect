import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LabBreadcrumb from '../components/LabBreadcrumb';
import { filterLabTests, getAllLabTests, getLabTestPath } from '../utils/labPaths';

function formatRs(price) {
  const n = Number(price);
  return `Rs. ${Number.isInteger(n) ? `${n}.0` : n.toFixed(1)}`;
}

export default function LabTestsListingPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sort, setSort] = useState('az');
  const [cartIds, setCartIds] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef(null);

  const allTestsCatalog = useMemo(() => getAllLabTests(), []);
  const allCount = allTestsCatalog.length;

  const tests = useMemo(() => {
    const filtered = filterLabTests(searchTerm);
    const next = [...filtered];
    next.sort((a, b) => {
      const cmp = a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      return sort === 'az' ? cmp : -cmp;
    });
    return next;
  }, [searchTerm, sort]);

  const cartTests = useMemo(() => {
    const byId = new Map(allTestsCatalog.map((t) => [t.id, t]));
    return cartIds.map((id) => byId.get(id)).filter(Boolean);
  }, [cartIds, allTestsCatalog]);

  const grandTotal = useMemo(() => {
    if (cartTests.length === 0) return null;
    return cartTests.reduce((sum, t) => sum + Number(t.price), 0);
  }, [cartTests]);

  const toggleCart = useCallback((test) => {
    let added = false;
    setCartIds((prev) => {
      if (prev.includes(test.id)) {
        return prev.filter((id) => id !== test.id);
      }
      added = true;
      return [...prev, test.id];
    });
    if (added) {
      setToastMessage(`${test.name} added in cart successfully`);
      setToastVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!toastVisible) return undefined;
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastVisible(false);
    }, 2600);
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, [toastVisible]);

  const handleCheckout = useCallback(() => {
    if (cartTests.length === 0) return;
    window.alert(`Checkout for ${cartTests.length} test(s) will be available soon.`);
  }, [cartTests.length]);

  return (
    <div className="lab-tests-listing">
      <div className="lab-tests-listing__shell">
        <div className="lab-tests-listing__main">
          <header className="lab-tests-listing__header">
            <h1 className="lab-tests-listing__title">Lab Tests In Pakistan</h1>
            <LabBreadcrumb />
          </header>

          <div className="lab-tests-listing__search">
            <span className="lab-tests-listing__search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path d="M16 16 21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="search"
              className="lab-tests-listing__search-input"
              placeholder="Search Tests by name here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search lab tests by name"
            />
          </div>

          <div className="lab-tests-listing__toolbar">
            <p className="lab-tests-listing__count">
              {searchTerm.trim() ? `Showing ${tests.length} of ${allCount}` : `All Tests (${allCount})`}
            </p>
            <label className="lab-tests-listing__sort">
              <span className="lab-tests-listing__sort-label">Sort By:</span>
              <select
                className="lab-tests-listing__sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort tests"
              >
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </label>
          </div>

          <ul className="lab-tests-listing__list" aria-label="Lab tests">
            {tests.map((test) => {
              const inCart = cartIds.includes(test.id);
              return (
                <li key={test.id} className="lab-tests-row">
                  <div className="lab-tests-row__left">
                    <span
                      className={`lab-tests-row__radio ${inCart ? 'lab-tests-row__radio--on' : ''}`}
                      aria-hidden="true"
                    />
                    <div className="lab-tests-row__info">
                      <h2 className="lab-tests-row__name">
                        <Link to={getLabTestPath(test)}>{test.name}</Link>
                      </h2>
                      <Link to={getLabTestPath(test)} className="lab-tests-row__details">
                        View Test Details{' '}
                        <span className="lab-tests-row__chevron" aria-hidden="true">
                          &gt;
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="lab-tests-row__right">
                    <div className="lab-tests-row__prices">
                      <span className="lab-tests-row__price-current">{formatRs(test.price)}</span>
                      {test.originalPrice > test.price && (
                        <span className="lab-tests-row__price-old">{formatRs(test.originalPrice)}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      className={`lab-tests-row__add${inCart ? ' lab-tests-row__add--added' : ''}`}
                      onClick={() => toggleCart(test)}
                    >
                      {inCart ? 'Add' : 'Add'}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lab-tests-listing__sidebar">
          <aside className="lab-tests-summary" aria-label="Booking summary">
            <h2 className="lab-tests-summary__title">Summary</h2>
            <p className="lab-tests-summary__hint">
              Please add the tests that you want to book from the list
            </p>
            <div className="lab-tests-summary__rule" role="presentation" />
            <div className="lab-tests-summary__total">
              <span className="lab-tests-summary__total-label">Grand Total</span>
              <span className="lab-tests-summary__total-value">
                {grandTotal == null ? 'N/A' : formatRs(grandTotal)}
              </span>
            </div>
            <button
              type="button"
              className="lab-tests-summary__checkout"
              disabled={cartTests.length === 0}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </div>

      <div
        className={`lab-toast ${toastVisible ? 'lab-toast--visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        <div className="lab-toast__icon" aria-hidden="true">
          ✓
        </div>
        <p className="lab-toast__message">{toastMessage || 'Test added in cart successfully'}</p>
        <button
          type="button"
          className="lab-toast__action"
          onClick={() => {
            setToastVisible(false);
            navigate('/pharmacy/cart');
          }}
        >
          View Cart
        </button>
      </div>
    </div>
  );
}