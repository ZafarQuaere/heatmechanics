import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <main id="top" className="services-section section-wrap">
      <header className="section-heading" data-reveal>
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> HEATMECHANICS</div>
          <h1>We can’t find<br /><span>that page.</span></h1>
        </div>
        <p>The address does not match a page on this site.</p>
      </header>
      <p className="prose-links" data-reveal>
        <Link to="/">Home</Link>
        <Link to="/guides">Guides</Link>
        <Link to="/contact">Contact</Link>
      </p>
    </main>
  );
}
