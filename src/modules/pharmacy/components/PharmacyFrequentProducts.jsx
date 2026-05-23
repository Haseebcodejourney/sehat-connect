import { FREQUENT_PRODUCTS } from '../data/frequentProducts';
import { usePharmacyCart } from '../context/pharmacyCartContext';
import { formatRs } from '../utils/pharmacyCartUtils';
import MedicineProductImage from './MedicineProductImage';

export default function PharmacyFrequentProducts() {
  const { items, addToCart, updateQuantity } = usePharmacyCart();

  const getCartQuantity = (productId) =>
    items.find((item) => item.id === productId)?.quantity ?? 0;

  return (
    <section className="pharmacy-frequent" aria-labelledby="frequent-products-title">
      <div className="pharmacy-frequent__header">
        <h2 id="frequent-products-title" className="pharmacy-frequent__title">
          Most Frequent Bought Products
        </h2>
        <p className="pharmacy-frequent__subtitle">Get Upto 10% discount on all items</p>
      </div>

      <div className="pharmacy-frequent__grid">
        {FREQUENT_PRODUCTS.map((product) => {
          const inCartQty = getCartQuantity(product.id);

          return (
            <article key={product.id} className="pharmacy-frequent__card">
              <span className="pharmacy-frequent__badge">{product.discount}% OFF</span>
              <div className="pharmacy-frequent__image-wrap">
                <MedicineProductImage
                  src={product.image}
                  className="pharmacy-frequent__image"
                />
              </div>
              <h3 className="pharmacy-frequent__name">{product.name}</h3>
              <div className="pharmacy-frequent__prices">
                <span className="pharmacy-frequent__price">{formatRs(product.price)}</span>
                <span className="pharmacy-frequent__price-old">
                  {formatRs(product.originalPrice)}
                </span>
              </div>
              {inCartQty > 0 ? (
                <div className="pharmacy-frequent__qty">
                  <button
                    type="button"
                    className="pharmacy-frequent__qty-btn"
                    aria-label={`Decrease ${product.name} quantity`}
                    onClick={() => updateQuantity(product.id, inCartQty - 1)}
                  >
                    −
                  </button>
                  <span>{inCartQty}</span>
                  <button
                    type="button"
                    className="pharmacy-frequent__qty-btn"
                    aria-label={`Increase ${product.name} quantity`}
                    onClick={() => updateQuantity(product.id, inCartQty + 1)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="pharmacy-frequent__add-btn"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
