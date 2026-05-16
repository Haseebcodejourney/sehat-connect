export const LAB_CITIES = [
  { value: 'lahore', label: 'Lahore' },
  { value: 'karachi', label: 'Karachi' },
  { value: 'islamabad', label: 'Islamabad' },
  { value: 'rawalpindi', label: 'Rawalpindi' },
  { value: 'multan', label: 'Multan' },
];

export const LAB_PARTNERS = [
  { value: 'chughtai', label: 'Chughtai Lab' },
  { value: 'excel', label: 'Excel Lab' },
  { value: 'dr-essa', label: 'Dr. Essa Laboratory' },
  { value: 'islamabad-diagnostic', label: 'Islamabad Diagnostic Centre' },
];

/** Mega-menu columns (Healthwire-style). */
export const LAB_MENU_COLUMNS = [
  {
    title: 'Lab Tests',
    showTitle: true,
    showAllLink: true,
    links: [
      { label: 'CBC Blood Test', slug: 'cbc-blood-test' },
      { label: 'Blood Culture Test', slug: 'blood-culture-test' },
      { label: 'Blood Glucose Fasting Test', slug: 'blood-glucose-fasting-test' },
      { label: 'LFT', slug: 'liver-function-test' },
      { label: 'Cholesterol Test', slug: 'lipid-profile' },
      { label: 'Uric Acid (Serum) Test', slug: 'uric-acid-test' },
    ],
  },
  {
    links: [
      { label: 'TSH (Thyroid Stimulating Hormone) Test', slug: 'tsh-test' },
      { label: '17-OH Progesterone Test', slug: 'progesterone-test' },
      { label: 'Testosterone Test', slug: 'testosterone-test' },
      { label: 'Hepatitis-B Qualitative Test', slug: 'hepatitis-b-test' },
      { label: 'Biopsy', slug: 'biopsy-test' },
      { label: 'ECG Test', slug: 'ecg-test' },
    ],
  },
  {
    links: [
      { label: 'CT-Scan Test', slug: 'ct-scan-test' },
      { label: 'MRI Test', slug: 'mri-test' },
      { label: 'Urine Complete Examination', slug: 'urine-complete-test' },
      { label: 'CT Angiography Neck And Brain', slug: 'ct-angiography-test' },
      { label: 'COVID-19 PCR Test', slug: 'covid-pcr-test' },
    ],
  },
];
