import { FRANCHISE_BENEFITS } from '../constants';

function TickIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 9.2 7 12.7 14.5 5.2"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BenefitList({ items }) {
  return (
    <ul className="pharmacy-franchise-benefits__list">
      {items.map((item) => (
        <li key={item}>
          <span className="pharmacy-franchise-benefits__check" aria-hidden="true">
            <TickIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PharmacyFranchiseBenefits() {
  return (
    <section className="pharmacy-franchise-benefits">
      <h2 className="pharmacy-franchise-benefits__title">Here&apos;s How You Can Benefit!</h2>
      <p className="pharmacy-franchise-benefits__intro">
        A lot of legwork has already been done for you — all you have to do is become a part of the
        winning team! By being part of Sehat Connect Pharmacy, you will experience unprecedented
        support orbiting around:
      </p>
      <div className="pharmacy-franchise-benefits__grid">
        <BenefitList items={FRANCHISE_BENEFITS.left} />
        <BenefitList items={FRANCHISE_BENEFITS.right} />
      </div>
    </section>
  );
}
