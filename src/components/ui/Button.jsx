export default function Button({ children, variant = 'primary', size = 'medium', disabled = false, ...props }) {
  const className = `btn btn--${variant} btn--${size}`;

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
