import type { CSSProperties, MouseEvent } from 'react';
import { Link } from 'react-router';
import { servicePath, type Service } from '../content/site';
import { Icon } from '../icons';

function trackSpotlight(event: MouseEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
  event.currentTarget.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
}

function clearSpotlight(event: MouseEvent<HTMLElement>) {
  event.currentTarget.style.removeProperty('--spot-x');
  event.currentTarget.style.removeProperty('--spot-y');
}

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <article className="service-card" data-reveal onMouseMove={trackSpotlight} onMouseLeave={clearSpotlight} style={{ '--delay': `${(index % 4) * 70}ms` } as CSSProperties}>
      <span className="service-card-sheen" aria-hidden="true" />
      <div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-icon"><Icon name={service.icon} size={23} /></span></div>
      <div className="service-tag">{service.tag}</div>
      <h3><Link to={servicePath(service.slug)}>{service.title}</Link></h3>
      <p>{service.summary}</p>
      <Link className="service-arrow" to={servicePath(service.slug)} aria-label={`Read about ${service.title}`}><Icon name="arrow" size={18} /></Link>
    </article>
  );
}
