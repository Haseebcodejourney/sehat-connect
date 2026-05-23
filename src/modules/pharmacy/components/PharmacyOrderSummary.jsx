import { Link } from 'react-router-dom';
import { usePharmacyCart } from '../context/pharmacyCartContext';
import { formatRs } from '../utils/pharmacyCartUtils';
import MedicineProductImage from './MedicineProductImage';

export default function PharmacyOrderSummary({
  variant = 'cart',
  onCheckout,
  checkoutLabel = 'Check Out',
}) {
  const { items, totals, isEmpty } = usePharmacyCart();
  const {
    subtotal,
    discount,
    platformFee,
    deliveryCharges,
    grandTotal,
    deliveryProgressRemaining,
    deliveryProgressPercent,
    nextDeliveryCharge,
  } = totals;

  const showProgress = variant === 'cart' && !isEmpty && deliveryProgressRemaining > 0;
  const discountLabel = variant === 'checkout' ? 'Total Discount' : 'Discount Applied';

  return (
    <aside
      className={`pharmacy-cart__summary pharmacy-cart__summary--${variant}`}
      aria-labelledby="order-summary-title"
    >
      <div className="pharmacy-cart__summary-header">
        <h2 id="order-summary-title" className="pharmacy-cart__summary-title">
          Order Summary
        </h2>
        {variant === 'checkout' ? (
          <Link to="/pharmacy/cart" className="pharmacy-cart__summary-link">
            Go to Cart
          </Link>
        ) : null}
      </div>

      {variant === 'checkout' && !isEmpty ? (
        <ul className="pharmacy-cart__summary-items">
          {items.map((item) => (
            <li key={item.id} className="pharmacy-cart__summary-item">
              <div className="pharmacy-cart__summary-item-image">
                <span className="pharmacy-cart__summary-item-qty">{item.quantity}</span>
                <MedicineProductImage
                  src={item.image}
                  className="pharmacy-cart__summary-item-img"
                />
              </div>
              <div className="pharmacy-cart__summary-item-info">
                <p className="pharmacy-cart__summary-item-name">{item.name}</p>
                {item.manufacturer ? (
                  <p className="pharmacy-cart__summary-item-meta">{item.manufacturer}</p>
                ) : null}
                {item.packaging ? (
                  <p className="pharmacy-cart__summary-item-meta">{item.packaging}</p>
                ) : null}
              </div>
              <span className="pharmacy-cart__summary-item-price">
                {formatRs(item.originalPrice * item.quantity)}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {variant === 'checkout' ? (
        <div className="pharmacy-cart__voucher">
          <input
            type="text"
            className="pharmacy-cart__voucher-input"
            placeholder="Voucher Code"
            aria-label="Voucher code"
          />
          <button type="button" className="pharmacy-cart__voucher-btn">
            Apply
          </button>
        </div>
      ) : null}

      <dl className="pharmacy-cart__summary-rows">
        <div className="pharmacy-cart__summary-row">
          <dt>Subtotal</dt>
          <dd>{formatRs(subtotal, { decimals: isEmpty ? 0 : 1 })}</dd>
        </div>
        <div className="pharmacy-cart__summary-row pharmacy-cart__summary-row--discount">
          <dt>{discountLabel}</dt>
          <dd>
            {discount > 0 ? `-${formatRs(discount)}` : formatRs(0, { decimals: 0 })}
          </dd>
        </div>
        <div className="pharmacy-cart__summary-row">
          <dt>Platform fee</dt>
          <dd>{formatRs(platformFee, { decimals: 0 })}</dd>
        </div>
        <div className="pharmacy-cart__summary-row">
          <dt>Delivery Charges</dt>
          <dd>{formatRs(deliveryCharges, { decimals: 0 })}</dd>
        </div>
      </dl>

      {showProgress ? (
        <div className="pharmacy-cart__delivery-progress">
          <p className="pharmacy-cart__delivery-progress-text">
            Add {formatRs(deliveryProgressRemaining)} more to reduce delivery charges to{' '}
            {formatRs(nextDeliveryCharge, { decimals: 0 })}
          </p>
          <div
            className="pharmacy-cart__delivery-progress-bar"
            role="progressbar"
            aria-valuenow={Math.round(deliveryProgressPercent)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span
              className="pharmacy-cart__delivery-progress-fill"
              style={{ width: `${deliveryProgressPercent}%` }}
            />
          </div>
        </div>
      ) : null}

      <div className="pharmacy-cart__summary-total">
        <span>Grand Total</span>
        <strong>{formatRs(grandTotal)}</strong>
      </div>

      {variant === 'cart' ? (
        <button
          type="button"
          className="pharmacy-cart__checkout-btn"
          disabled={isEmpty}
          onClick={onCheckout}
        >
          {checkoutLabel}
        </button>
      ) : null}
    </aside>
  );
}
