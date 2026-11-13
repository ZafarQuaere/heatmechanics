import { Link } from 'react-router';
import { business } from '../content/site';

export function Brand({ footer = false, onClick }: { footer?: boolean; onClick?: () => void }) {
  return (
    <Link className={footer ? 'footer-brand' : 'brand-lockup'} to="/" aria-label={`${business.name} home`} onClick={onClick}>
      <img src="/qz-engineers-logo.png" alt="QZ Engineers flame and snowflake emblem" width={184} height={152} />
      <span className="business-copy">
        <span className="business-wordmark">{business.name}</span>
        <strong className="business-tagline">{business.tagline}</strong>
      </span>
    </Link>
  );
}
