import { useNavigate } from 'react-router-dom';
import PharmacyCartBreadcrumb from '../components/PharmacyCartBreadcrumb';
import PharmacyCartEmpty from '../components/PharmacyCartEmpty';
import PharmacyCartItems from '../components/PharmacyCartItems';
import PharmacyFrequentProducts from '../components/PharmacyFrequentProducts';
import PharmacyOrderSummary from '../components/PharmacyOrderSummary';
import { usePharmacyCart } from '../context/pharmacyCartContext';

export default function PharmacyCartPage() {
  const navigate = useNavigate();
  const { isEmpty } = usePharmacyCart();

  const handleCheckout = () => {
    navigate('/pharmacy/checkout');
  };

  return (
    <div className="pharmacy-cart-page">
      <div className="pharmacy-cart">
        <PharmacyCartBreadcrumb />

        <div className="pharmacy-cart__layout">
          <div className="pharmacy-cart__main">
            <h1 className="pharmacy-cart__title">Shopping Cart</h1>
            <p className="pharmacy-cart__delivery">
              Delivery by Today, 07:00 pm - 10:00 pm
            </p>
            {isEmpty ? <PharmacyCartEmpty /> : <PharmacyCartItems />}
          </div>

          <PharmacyOrderSummary onCheckout={handleCheckout} />
        </div>

        <PharmacyFrequentProducts />
      </div>
    </div>
  );
}
