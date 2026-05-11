export default function SehatLogoMark({ className, size = 36 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#255FB8" />
      <path d="M15 9h2v14h-2zM9 15h14v2H9z" fill="#fff" />
    </svg>
  );
}
