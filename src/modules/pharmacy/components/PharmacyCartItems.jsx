import { Link } from 'react-router-dom';
import { usePharmacyCart } from '../context/pharmacyCartContext';
import { formatRs } from '../utils/pharmacyCartUtils';
import MedicineProductImage from './MedicineProductImage';

export default function PharmacyCartItems() {
  const { items, itemCount, updateQuantity } = usePharmacyCart();

  return (
    <section className="pharmacy-cart-items" aria-labelledby="cart-items-title">
      <h2 id="cart-items-title" className="pharmacy-cart-items__title">
        Items In Your Cart ({itemCount})
      </h2>

      <ul className="pharmacy-cart-items__list">
        {items.map((item) => (
          <li key={item.id} className="pharmacy-cart-item">
            <div className="pharmacy-cart-item__image-wrap">
              <MedicineProductImage
                src={item.image}
                className="pharmacy-cart-item__image"
              />
            </div>

            <div className="pharmacy-cart-item__details">
              <h3 className="pharmacy-cart-item__name">{item.name}</h3>
              {item.manufacturer ? (
                <p className="pharmacy-cart-item__meta">{item.manufacturer}</p>
              ) : null}
              {item.packaging ? (
                <p className="pharmacy-cart-item__meta">{item.packaging}</p>
              ) : null}
            </div>

            <div className="pharmacy-cart-item__price">
              <span className="pharmacy-cart-item__price-old">
                {formatRs(item.originalPrice)}
              </span>
              <span className="pharmacy-cart-item__price-current">
                {formatRs(item.price)}
              </span>
            </div>

            <div className="pharmacy-cart-item__qty">
              <button
                type="button"
                className="pharmacy-cart-item__qty-btn"
                aria-label={`Decrease quantity of ${item.name}`}
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                −
              </button>
              <span className="pharmacy-cart-item__qty-value">{item.quantity}</span>
              <button
                type="button"
                className="pharmacy-cart-item__qty-btn"
                aria-label={`Increase quantity of ${item.name}`}
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="pharmacy-cart-items__footer">
        <Link to="/" className="pharmacy-cart-items__add-more">
          Add More Medicines
        </Link>
      </div>
    </section>
  );
}
