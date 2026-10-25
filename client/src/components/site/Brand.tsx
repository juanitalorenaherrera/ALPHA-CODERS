type BrandProps = { light?: boolean };

export function AlphaMark({ light = false }: BrandProps) {
  return (
    <svg
      aria-hidden="true"
      className={`alpha-mark${light ? " alpha-mark-light" : ""}`}
      viewBox="0 0 42 42"
      fill="none"
    >
      <rect width="42" height="42" rx="13" fill="currentColor" />
      <path d="M9 22 20 11l11 11-5 5-6-6-6 6-5-5Z" fill="var(--mark-cut, #fff8f3)" />
      <path d="m17 29 4-4 4 4-4 4-4-4Z" fill="var(--mark-cut, #fff8f3)" opacity=".72" />
    </svg>
  );
}

export default function Brand({ light = false }: BrandProps) {
  return (
    <a className={`brand${light ? " brand-light" : ""}`} href="#inicio" aria-label="Alpha Coders — ir al inicio">
      <AlphaMark light={light} />
      <span className="brand-wordmark"><strong>Alpha</strong><span>Coders</span></span>
    </a>
  );
}
