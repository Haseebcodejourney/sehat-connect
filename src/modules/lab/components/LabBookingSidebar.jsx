export default function LabBookingSidebar({ test, onAddToCart }) {
  const discount =
    test.originalPrice > test.price
      ? Math.round(((test.originalPrice - test.price) / test.originalPrice) * 100)
      : 0;

  return (
    <aside className="lab-booking-sidebar">
      <h2 className="lab-booking-sidebar__title">Book this lab test?</h2>
      <h3 className="lab-booking-sidebar__test-name">{test.name}</h3>

      <div className="lab-booking-sidebar__price">
        <span className="lab-booking-sidebar__price-current">Rs. {test.price.toLocaleString()}</span>
        {test.originalPrice > test.price && (
          <span className="lab-booking-sidebar__price-original">
            Rs. {test.originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {discount > 0 && (
        <p className="lab-booking-sidebar__discount">{discount}% OFF</p>
      )}

      <button type="button" className="lab-booking-sidebar__btn" onClick={onAddToCart}>
        Add to cart
      </button>
      <button type="button" className="lab-booking-sidebar__btn lab-booking-sidebar__btn--outline">
        Checkout
      </button>

      <ul className="lab-booking-sidebar__meta">
        {test.sampleType && <li>Sample: {test.sampleType}</li>}
        {test.reportTime && <li>Report: {test.reportTime}</li>}
        {test.priceRange && <li>Typical price range: Rs. {test.priceRange}</li>}
      </ul>
    </aside>
  );
}

