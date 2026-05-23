import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../features/auth/authContext';
import PharmacyOrderSummary from '../components/PharmacyOrderSummary';
import { usePharmacyCart } from '../context/pharmacyCartContext';

const CITIES = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad'];

function PayfastLogos() {
  return (
    <span className="pharmacy-checkout__card-logos" aria-hidden="true">
      <span className="pharmacy-checkout__card-logo pharmacy-checkout__card-logo--visa">
        VISA
      </span>
      <span className="pharmacy-checkout__card-logo pharmacy-checkout__card-logo--mc">
        MC
      </span>
    </span>
  );
}

export default function PharmacyCheckoutPage() {
  const navigate = useNavigate();
  const { openAuthModal } = useAuth();
  const { isEmpty } = usePharmacyCart();

  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [saveInfo, setSaveInfo] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isEmpty) {
      navigate('/pharmacy/cart', { replace: true });
    }
  }, [isEmpty, navigate]);

  if (isEmpty) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const showErrors = submitted;
  const submitLabel = paymentMethod === 'payfast' ? 'Pay Now' : 'Complete Order';

  return (
    <div className="pharmacy-checkout-page">
      <div className="pharmacy-checkout">
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
              <span aria-current="page">Checkout</span>
            </li>
          </ol>
        </nav>

        <div className="pharmacy-checkout__layout">
          <form className="pharmacy-checkout__form" onSubmit={handleSubmit} noValidate>
            <section className="pharmacy-checkout__section">
              <div className="pharmacy-checkout__section-header">
                <h1 className="pharmacy-checkout__heading">Contact</h1>
                <button
                  type="button"
                  className="pharmacy-checkout__section-link"
                  onClick={openAuthModal}
                >
                  Log in
                </button>
              </div>
              <input
                type="tel"
                className={`pharmacy-checkout__input${showErrors && !phone ? ' pharmacy-checkout__input--error' : ''}`}
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-invalid={showErrors && !phone}
              />
            </section>

            <section className="pharmacy-checkout__section">
              <h2 className="pharmacy-checkout__heading">Delivery</h2>
              <label className="pharmacy-checkout__label" htmlFor="checkout-city">
                City
              </label>
              <select
                id="checkout-city"
                className="pharmacy-checkout__input pharmacy-checkout__select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {CITIES.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className={`pharmacy-checkout__input${showErrors && !name ? ' pharmacy-checkout__input--error' : ''}`}
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={showErrors && !name}
              />
              <input
                type="text"
                className={`pharmacy-checkout__input${showErrors && !address ? ' pharmacy-checkout__input--error' : ''}`}
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                aria-invalid={showErrors && !address}
              />
              <label className="pharmacy-checkout__checkbox">
                <input
                  type="checkbox"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                />
                <span>Save this information for next time</span>
              </label>
            </section>

            <section className="pharmacy-checkout__section">
              <h2 className="pharmacy-checkout__heading">Payment</h2>
              <p className="pharmacy-checkout__payment-note">
                All transactions are secure and encrypted.
              </p>

              <div className="pharmacy-checkout__payment-options">
                <label
                  className={`pharmacy-checkout__payment-option${paymentMethod === 'payfast' ? ' pharmacy-checkout__payment-option--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="payfast"
                    checked={paymentMethod === 'payfast'}
                    onChange={() => setPaymentMethod('payfast')}
                  />
                  <span className="pharmacy-checkout__payment-label">
                    PAYFAST (Pay via Debit/Credit/Wallet/Bank Account)
                  </span>
                  <PayfastLogos />
                </label>

                {paymentMethod === 'payfast' ? (
                  <div className="pharmacy-checkout__payment-detail">
                    <div className="pharmacy-checkout__redirect-icon" aria-hidden="true">
                      <svg viewBox="0 0 64 48" fill="none">
                        <rect x="8" y="6" width="48" height="36" rx="3" stroke="#9ca3af" strokeWidth="1.5" />
                        <path d="M32 20v12M26 26l6 6 6-6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p>
                      After clicking &apos;Pay now&apos;, you will be redirected to PAYFAST (Pay via
                      Debit/Credit/Wallet/Bank Account) to complete your purchase securely.
                    </p>
                  </div>
                ) : null}

                <label
                  className={`pharmacy-checkout__payment-option${paymentMethod === 'cod' ? ' pharmacy-checkout__payment-option--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <span className="pharmacy-checkout__payment-label">Cash on Delivery (COD)</span>
                </label>

                {paymentMethod === 'cod' ? (
                  <div className="pharmacy-checkout__payment-detail pharmacy-checkout__payment-detail--cod">
                    <p>
                      To confirm your order outside Lahore, delivery charges must be paid online.
                      Remaining order amount is payable via COD. Account/payment details will be
                      shared in the Order Received Confirmation Message.
                    </p>
                  </div>
                ) : null}
              </div>
            </section>

            <button type="submit" className="pharmacy-checkout__submit-btn">
              {submitLabel}
            </button>
          </form>

          <PharmacyOrderSummary variant="checkout" />
        </div>
      </div>
    </div>
  );
}
