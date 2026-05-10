import '../../styles/layout/home/_medicinerange.scss';

const medicines = [
  {
    name: 'Citanew (10Mg) 14 Tablets',
    generic: 'Escitalopram',
    price: '441.88',
    oldPrice: '490.98',
    featured: true,
    brand: 'Citanew',
    dose: '10mg',
    theme: 'citanew',
  },
  {
    name: 'Clomid (50Mg) 10 Tablets',
    price: '566.1',
    oldPrice: '629.0',
    brand: 'CLOMID',
    dose: '50mg',
    theme: 'clomid',
  },
  {
    name: 'Arinac Forte (400/60Mg) 100 Tablets',
    price: '135.0',
    oldPrice: '150.0',
    brand: 'ARINAC',
    dose: 'Forte',
    theme: 'arinac',
  },
  {
    name: 'Brufen (200Mg) 100 Tablets',
    price: '39.51',
    oldPrice: '43.9',
    brand: 'BRUFEN',
    dose: '200mg',
    theme: 'brufen',
  },
  {
    name: 'Alp (0.25Mg) 30 Tablet',
    price: '90.0',
    oldPrice: '100.0',
    brand: 'ALP',
    dose: '0.25mg',
    theme: 'alp',
  },
];

const MedicinePack = ({ medicine, size = 'small' }) => (
  <div className={`medicine-range__pack medicine-range__pack--${medicine.theme} medicine-range__pack--${size}`}>
    <span className="medicine-range__pack-dose">{medicine.dose}</span>
    <strong>{medicine.brand}</strong>
    <span className="medicine-range__pack-strip" />
  </div>
);

const MedicineCard = ({ medicine }) => (
  <article
    className={`medicine-range__card${medicine.featured ? ' medicine-range__card--featured' : ''}`}
  >
    <div className="medicine-range__image">
      <MedicinePack medicine={medicine} size={medicine.featured ? 'large' : 'small'} />
    </div>

    <div className="medicine-range__details">
      <h3>{medicine.name}</h3>
      {medicine.generic && <p>{medicine.generic}</p>}
      <div className="medicine-range__price">
        <strong>Rs. {medicine.price}</strong>
        <del>Rs. {medicine.oldPrice}</del>
      </div>
    </div>
  </article>
);

const MedicineRange = () => {
  const [featuredMedicine, ...regularMedicines] = medicines;

  return (
    <section className="medicine-range" aria-labelledby="medicine-range-title">
      <span className="medicine-range__eyebrow">Pharmacy</span>
      <h2 className="medicine-range__title" id="medicine-range-title">
        Wide Range Of Medicines
      </h2>

      <div className="medicine-range__grid">
        <MedicineCard medicine={featuredMedicine} />

        <div className="medicine-range__list">
          {regularMedicines.map((medicine) => (
            <MedicineCard medicine={medicine} key={medicine.name} />
          ))}
        </div>
      </div>

      <a className="medicine-range__link" href="/pharmacy">
        View Online Pharmacy
        <span aria-hidden="true">›</span>
      </a>
    </section>
  );
};

export default MedicineRange;
