import { Link } from 'react-router-dom';

export default function PharmacyCartBreadcrumb() {
  return (
    <nav className="pharmacy-cart__breadcrumb" aria-label="Breadcrumb">
      <ol className="pharmacy-cart__breadcrumb-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>
          <Link to="/pharmacy/cart">Pharmacy</Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>
          <span aria-current="page">Cart</span>
        </li>
      </ol>
    </nav>
  );
}
