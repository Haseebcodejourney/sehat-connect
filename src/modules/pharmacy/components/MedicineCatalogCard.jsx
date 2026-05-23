import { usePharmacyCart } from '../context/pharmacyCartContext';
import { formatRs } from '../utils/pharmacyCartUtils';
import MedicineProductImage from './MedicineProductImage';

export default function MedicineCatalogCard({ product }) {
  const { addToCart } = usePharmacyCart();

  const badgeLabel = product.soldOut ? 'Sold Out' : `${product.discount}% OFF`;
  const buttonLabel = product.soldOut ? 'Request Item' : 'Add To Cart';

  const handleAction = () => {
    if (!product.soldOut) {
      addToCart(product);
    }
  };

  return (
    <article className={`medicine-card${product.soldOut ? ' medicine-card--sold-out' : ''}`}>
      <div className="medicine-card__image-wrap">
        <span
          className={`medicine-card__badge${product.soldOut ? ' medicine-card__badge--sold-out' : ''}`}
        >
          {badgeLabel}
        </span>
        <MedicineProductImage src={product.image} alt="" className="medicine-card__image" />
      </div>

      <h3 className="medicine-card__name">{product.name}</h3>

      <div className="medicine-card__prices">
        <span className="medicine-card__price">{formatRs(product.price)}</span>
        <span className="medicine-card__price-old">{formatRs(product.originalPrice)}</span>
      </div>

      <button
        type="button"
        className="medicine-card__btn"
        onClick={handleAction}
      >
        {buttonLabel}
      </button>
    </article>
  );
}
