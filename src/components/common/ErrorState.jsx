export default function ErrorState({ title, description, retry }) {
  return (
    <div className="error-state">
      <div className="error-state__icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
          <path d="M24 14v14M24 34h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="error-state__title">{title}</h3>
      {description && <p className="error-state__description">{description}</p>}
      {retry && (
        <button type="button" className="error-state__button" onClick={retry}>
          Try again
        </button>
      )}
    </div>
  );
}
