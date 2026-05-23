import { Link } from 'react-router-dom';
import { PHARMACY_CART_EMPTY_IMAGE } from '../constants/cartAssets';

export default function PharmacyCartEmpty() {
  return (
    <div className="pharmacy-cart__empty">
      <img
        src={PHARMACY_CART_EMPTY_IMAGE}
        alt=""
        className="pharmacy-cart__empty-image"
        width={200}
        height={160}
      />
      <p className="pharmacy-cart__empty-text">No medicine added to cart yet</p>
      <Link to="/" className="pharmacy-cart__empty-btn">
        Add Medicine Now
      </Link>
    </div>
  );
}
