import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { calculateCartTotals } from '../utils/pharmacyCartUtils';

export const PharmacyCartContext = createContext(null);

export function usePharmacyCart() {
  const ctx = useContext(PharmacyCartContext);
  if (!ctx) {
    throw new Error('usePharmacyCart must be used within a PharmacyCartProvider');
  }
  return ctx;
}

export function PharmacyCartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = useCallback((product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity < 1) {
      setItems((current) => current.filter((item) => item.id !== productId));
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const removeFromCart = useCallback((productId) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  }, []);

  const totals = useMemo(() => calculateCartTotals(items), [items]);
  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      totals,
      addToCart,
      updateQuantity,
      removeFromCart,
      isEmpty: items.length === 0,
    }),
    [items, itemCount, totals, addToCart, updateQuantity, removeFromCart]
  );

  return (
    <PharmacyCartContext.Provider value={value}>
      {children}
    </PharmacyCartContext.Provider>
  );
}
