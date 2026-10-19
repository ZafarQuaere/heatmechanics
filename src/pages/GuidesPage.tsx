import { Link } from 'react-router';
import { getRelatedServices, guides, services, servicePath } from '../content/site';

export function GuidesPage() {
  return (
    <main id="top" className="services-section section-wrap">
      <header className="section-heading" data-reveal>
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> USEFUL ANSWERS</div>
          <h1>Guides and<br /><span>common questions.</span></h1>
        </div>
        <p>Short answers that sit alongside the services. No prices, coverage area, or promised arrival time.</p>
      </header>
      <div className="faq-list guide-list" data-reveal>
        {guides.map((guide) => (
          <details key={guide.question} open>
            <summary>{guide.question}</summary>
            {guide.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="prose-links">
              {getRelatedServices(guide.related).map((service) => (
                <Link key={service.slug} to={servicePath(service.slug)}>{service.title}</Link>
              ))}
            </p>
          </details>
        ))}
      </div>
      <div className="related-block prose" data-reveal>
        <h2>All services</h2>
        <p className="prose-links">
          {services.map((service) => <Link key={service.slug} to={servicePath(service.slug)}>{service.title}</Link>)}
          <Link to="/contact">Request a quote</Link>
        </p>
      </div>
    </main>
  );
}
