import AllMedicinesPage from './pages/AllMedicinesPage';
import PharmacyCartPage from './pages/PharmacyCartPage';
import PharmacyCheckoutPage from './pages/PharmacyCheckoutPage';
import PharmacyFranchisePage from './pages/PharmacyFranchisePage';

export const pharmacyMedicineRoutes = [
  {
    path: 'medicines',
    element: <AllMedicinesPage />,
  },
];

export const pharmacyFranchiseRoutes = [
  {
    path: 'pharmacy-franchises',
    element: <PharmacyFranchisePage />,
  },
];

export const pharmacyCartRoutes = [
  {
    path: 'pharmacy/cart',
    element: <PharmacyCartPage />,
  },
  {
    path: 'pharmacy/checkout',
    element: <PharmacyCheckoutPage />,
  },
];

export const pharmacyRoutes = [
  ...pharmacyMedicineRoutes,
  ...pharmacyFranchiseRoutes,
  ...pharmacyCartRoutes,
];
