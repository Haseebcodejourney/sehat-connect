export default function ErrorState({ title, description, retry }) {
  return (
    <div className="error-state">
      <div className="error-state__icon">⚠️</div>
      <h3 className="error-state__title">{title}</h3>
      {description && <p className="error-state__description">{description}</p>}
      {retry && (
        <button className="error-state__button" onClick={retry}>
          Try Again
        </button>
      )}
    </div>
  );
}
