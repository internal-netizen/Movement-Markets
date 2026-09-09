import '../styles/brand.css';

/**
 * The Movement Markets mark: two panels opening like a gate — the near one
 * in the text colour, the far one in brand lime. Drawn as an SVG so it stays
 * crisp at any size and follows the theme through currentColor.
 */
export const BRAND_LIME = '#b0f000';

export function LogoMark({ className = '', title }) {
  return (
    <svg className={`logo-mark ${className}`.trim()} viewBox="0 0 456 495" xmlns="http://www.w3.org/2000/svg" aria-hidden={title ? undefined : 'true'} role={title ? 'img' : undefined}>
      {title ? <title>{title}</title> : null}
      <polygon points="4,4 164,125 164,370 4,491" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
      <polygon points="452,4 292,125 292,370 452,491" fill={BRAND_LIME} stroke={BRAND_LIME} strokeWidth="8" strokeLinejoin="round" />
    </svg>
  );
}

/** Mark plus wordmark. `stacked` puts the wordmark under the mark. */
export default function BrandLogo({ stacked = false, className = '', wordmark = true }) {
  return (
    <span className={`logo${stacked ? ' is-stacked' : ''} ${className}`.trim()}>
      <LogoMark />
      {wordmark ? <span className="logo-word"><b>Movement</b> Markets</span> : null}
    </span>
  );
}
