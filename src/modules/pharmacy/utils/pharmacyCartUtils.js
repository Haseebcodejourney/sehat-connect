export const PLATFORM_FEE = 9;
export const DELIVERY_CHARGE = 239;
export const REDUCED_DELIVERY_CHARGE = 203;
export const DELIVERY_DISCOUNT_THRESHOLD = 754.4;

export function calculateCartTotals(items) {
  if (!items.length) {
    return {
      subtotal: 0,
      discount: 0,
      platformFee: 0,
      deliveryCharges: 0,
      grandTotal: 0,
      deliveryProgressRemaining: 0,
      deliveryProgressPercent: 0,
      nextDeliveryCharge: REDUCED_DELIVERY_CHARGE,
    };
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );
  const discount = items.reduce(
    (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
    0
  );
  const platformFee = PLATFORM_FEE;
  const deliveryCharges = DELIVERY_CHARGE;
  const grandTotal = subtotal - discount + platformFee + deliveryCharges;

  const deliveryProgressRemaining = Math.max(0, DELIVERY_DISCOUNT_THRESHOLD - subtotal);
  const deliveryProgressPercent = Math.min(
    100,
    (subtotal / DELIVERY_DISCOUNT_THRESHOLD) * 100
  );

  return {
    subtotal,
    discount,
    platformFee,
    deliveryCharges,
    grandTotal,
    deliveryProgressRemaining,
    deliveryProgressPercent,
    nextDeliveryCharge: REDUCED_DELIVERY_CHARGE,
  };
}

export function formatRs(amount, { decimals = 2 } = {}) {
  const value = Number(amount);
  if (decimals === 0) {
    return `Rs. ${Math.round(value).toLocaleString('en-PK')}`;
  }
  const fixed = value.toFixed(decimals);
  const [whole, fraction] = fixed.split('.');
  return `Rs. ${Number(whole).toLocaleString('en-PK')}.${fraction}`;
}
