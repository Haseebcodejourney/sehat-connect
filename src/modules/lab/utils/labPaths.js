import { LAB_MENU_COLUMNS } from '../constants';
import labTestsData from '../../../mock/labTests.json';

function getMenuLabel(slug) {
  for (const column of LAB_MENU_COLUMNS) {
    const match = column.links.find((link) => link.slug === slug);
    if (match) return match.label;
  }
  return slug.replace(/-/g, ' ');
}

function createStubTest(slug) {
  const name = getMenuLabel(slug);
  return {
    id: slug,
    slug,
    name,
    shortName: name,
    price: 800,
    originalPrice: 1000,
    sampleType: 'Blood',
    reportTime: '24 hours',
    sections: [
      {
        title: `What is ${name}?`,
        paragraphs: [
          `${name} is available through Sehat Connect partner labs. Book online for home sampling or visit a nearby collection centre.`,
        ],
      },
      {
        title: `${name} Price in Pakistan`,
        paragraphs: [
          'Prices vary by city and lab partner. Select your city in Quick Booking to see the latest discounted rate.',
        ],
      },
    ],
    faq: [],
    relatedSlugs: ['cbc-blood-test', 'lipid-profile', 'liver-function-test'].filter((s) => s !== slug),
  };
}

export function findLabTestBySlug(slug) {
  const found = labTestsData.tests.find((test) => test.slug === slug);
  if (found) return found;

  const isMenuSlug = LAB_MENU_COLUMNS.some((column) =>
    column.links.some((link) => link.slug === slug)
  );

  return isMenuSlug ? createStubTest(slug) : undefined;
}

export function getAllLabTests() {
  return [...labTestsData.tests];
}

export function getLabTestPath(test) {
  return `/lab-tests/${test.slug}`;
}

export function getRelatedLabTests(test) {
  const slugs = test.relatedSlugs ?? [];
  return slugs.map((slug) => findLabTestBySlug(slug)).filter(Boolean);
}

export function filterLabTests(searchTerm = '') {
  if (!searchTerm.trim()) {
    return getAllLabTests();
  }

  const term = searchTerm.trim().toLowerCase();
  return getAllLabTests().filter(
    (test) =>
      test.name.toLowerCase().includes(term) ||
      test.shortName?.toLowerCase().includes(term) ||
      test.slug.includes(term)
  );
}
