import { Link } from 'react-router-dom';

export default function LabQuickBooking({ test, onAddToCart, onCheckout }) {
  if (!test) return null;

  return (
    <aside className="lab-quick-booking">
      <div className="lab-quick-booking__card">
        <h3 className="lab-quick-booking__heading">Book this lab test?</h3>

        <div className="lab-quick-booking__row">
          <p className="lab-quick-booking__test">{test.name}</p>
          <div className="lab-quick-booking__price-wrap">
            <span className="lab-quick-booking__price-current">Rs. {test.price?.toLocaleString()}</span>
            {test.originalPrice > test.price && (
              <span className="lab-quick-booking__price-old">Rs. {test.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>

        <div className="lab-quick-booking__action">
          <button type="button" className="lab-quick-booking__btn lab-quick-booking__btn--add" onClick={onAddToCart}>
            Add to cart
          </button>
        </div>

        <div className="lab-quick-booking__footer">
          <Link to="/lab-tests" className="lab-quick-booking__btn lab-quick-booking__btn--back">
            Back to Tests
          </Link>
          <button type="button" className="lab-quick-booking__btn lab-quick-booking__btn--checkout" onClick={onCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}
