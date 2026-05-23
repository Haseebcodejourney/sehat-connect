import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_MEDICINES } from '../data/allMedicines';
import MedicineAlphabetFilter from '../components/MedicineAlphabetFilter';
import MedicineCatalogCard from '../components/MedicineCatalogCard';

const PAGE_SIZE = 20;

export default function AllMedicinesPage() {
  const [activeLetter, setActiveLetter] = useState('A');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => ALL_MEDICINES.filter((item) => item.letter === activeLetter),
    [activeLetter]
  );

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleLetterChange = (letter) => {
    setActiveLetter(letter);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="medicines-page">
      <div className="medicines-page__container">
        <nav className="medicines-page__breadcrumb" aria-label="Breadcrumb">
          <ol className="medicines-page__breadcrumb-list">
            <li>
              <Link to="/pharmacy">Pharmacy</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <span aria-current="page">Medicines</span>
            </li>
          </ol>
        </nav>

        <header className="medicines-page__header">
          <h1 className="medicines-page__title">All Medicines</h1>
          <p className="medicines-page__subtitle">
            Explore the medicine from A-Z and get delivered at your doorstep
          </p>
        </header>

        <MedicineAlphabetFilter
          activeLetter={activeLetter}
          onLetterChange={handleLetterChange}
        />

        {visibleItems.length > 0 ? (
          <div className="medicines-page__grid" role="list">
            {visibleItems.map((product) => (
              <MedicineCatalogCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="medicines-page__empty">
            No medicines found for letter &ldquo;{activeLetter}&rdquo;.
          </p>
        )}

        {hasMore ? (
          <button
            type="button"
            className="medicines-page__load-more"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
}
