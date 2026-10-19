import { Link, useParams } from 'react-router';
import { ContactSection } from '../components/ContactSection';
import { ServiceCard } from '../components/ServiceCard';
import { getRelatedServices, getServiceBySlug } from '../content/site';
import { NotFoundPage } from './NotFoundPage';

export function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  if (!service) return <NotFoundPage />;

  const related = getRelatedServices(service.related);

  return (
    <main id="top">
      <article className="services-section section-wrap">
        <header className="section-heading" data-reveal>
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> {service.tag}</div>
            <h1>{service.headline}<br /><span>{service.headlineAccent}</span></h1>
          </div>
          <p>{service.intro}</p>
        </header>
        <div className="prose" data-reveal>
          {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <h2>What to tell us</h2>
          <ul>{service.enquiryPoints.map((point) => <li key={point}>{point}</li>)}</ul>
          <h2>Common questions</h2>
          <div className="faq-list">
            {service.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="prose-links"><Link to="/guides">More answers in the guides</Link></p>
        </div>
        <div className="related-block" data-reveal>
          <h2>Other services</h2>
          <div className="service-grid service-grid-compact">
            {related.map((item, index) => <ServiceCard key={item.slug} service={item} index={index} />)}
          </div>
        </div>
      </article>
      <ContactSection
        title={<>Ask about<br /><span>{service.askLabel}</span></>}
        intro={service.enquiryPrompt}
        serviceSlug={service.slug}
      />
    </main>
  );
}
