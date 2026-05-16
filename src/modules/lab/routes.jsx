import LabTestsListingPage from './pages/LabTestsListingPage';
import LabTestDetailPage from './pages/LabTestDetailPage';

export const labPublicRoutes = [
  {
    path: 'lab-tests',
    children: [
      { index: true, element: <LabTestsListingPage /> },
      { path: ':slug', element: <LabTestDetailPage /> },
    ],
  },
];

