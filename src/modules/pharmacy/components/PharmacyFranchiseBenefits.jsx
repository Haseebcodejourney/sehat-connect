import { FRANCHISE_BENEFITS } from '../constants';

function BenefitList({ items }) {
  return (
    <ul className="pharmacy-franchise-benefits__list">
      {items.map((item) => (
        <li key={item}>
          <span className="pharmacy-franchise-benefits__check" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M7 12.5l3 3 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PharmacyFranchiseBenefits() {
  return (
    <section className="pharmacy-franchise-benefits">
      <h2 className="pharmacy-franchise-benefits__title">Here&apos;s How You Can Benefit:</h2>
      <p className="pharmacy-franchise-benefits__intro">
        A lot of legwork has already been done for you — all you have to do is become part of the
        winning team. By partnering with Sehat Connect Pharmacy, you will experience unprecedented
        support including:
      </p>
      <div className="pharmacy-franchise-benefits__grid">
        <BenefitList items={FRANCHISE_BENEFITS.left} />
        <BenefitList items={FRANCHISE_BENEFITS.right} />
      </div>
    </section>
  );
}
