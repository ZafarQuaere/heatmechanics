import type { CSSProperties } from 'react';
import { Link } from 'react-router';
import { servicePath, type Service } from '../content/site';
import { Icon } from '../icons';

export function ServiceCard({ service, featured = false, index = 0 }: { service: Service; featured?: boolean; index?: number }) {
  return (
    <article className={`service-card ${featured ? 'service-card-featured' : ''}`} data-reveal style={{ '--delay': `${(index % 4) * 70}ms` } as CSSProperties}>
      <div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-icon"><Icon name={service.icon} size={23} /></span></div>
      <div className="service-tag">{service.tag}</div>
      <h3><Link to={servicePath(service.slug)}>{service.title}</Link></h3>
      <p>{service.summary}</p>
      <Link className="service-arrow" to={servicePath(service.slug)} aria-label={`Read about ${service.title}`}><Icon name="arrow" size={18} /></Link>
    </article>
  );
}
