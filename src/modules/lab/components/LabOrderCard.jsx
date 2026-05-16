export default function LabOrderCard({ test, onAddToCart }) {
  return (
    <aside className="lab-order-card">
      <h2 className="lab-order-card__title">Book this lab test?</h2>
      <h3 className="lab-order-card__name">{test.name}</h3>
      <div className="lab-order-card__price">
        <span className="lab-order-card__price-current">Rs. {test.price.toLocaleString()}</span>
        {test.originalPrice > test.price && (
          <span className="lab-order-card__price-old">Rs. {test.originalPrice.toLocaleString()}</span>
        )}
      </div>
      <button type="button" className="lab-order-card__btn" onClick={onAddToCart}>
        Add to cart
      </button>
      <button type="button" className="lab-order-card__btn lab-order-card__btn--outline">
        Checkout
      </button>
    </aside>
  );
}
