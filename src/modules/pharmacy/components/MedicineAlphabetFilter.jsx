import { MEDICINE_ALPHABET } from '../data/allMedicines';

export default function MedicineAlphabetFilter({ activeLetter, onLetterChange }) {
  return (
    <div className="medicines-alpha" role="group" aria-label="Filter medicines by letter">
      {MEDICINE_ALPHABET.map((letter) => (
        <button
          key={letter}
          type="button"
          className={`medicines-alpha__btn${activeLetter === letter ? ' medicines-alpha__btn--active' : ''}`}
          aria-pressed={activeLetter === letter}
          onClick={() => onLetterChange(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
