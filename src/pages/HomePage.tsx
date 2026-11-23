import { Link } from 'react-router';
import { ContactSection } from '../components/ContactSection';
import { ServiceCard } from '../components/ServiceCard';
import { business, coverageAreas, homeServicesLead, serviceImages, services } from '../content/site';
import { Icon } from '../icons';

export function HomePage({ season }: { season: 'winter' | 'summer' }) {
  return (
    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> LONDON-WIDE ENGINEERING</div>
          <p className="hero-tagline">{business.tagline}</p>
          <h1>Plumbing, heating<br />&amp; <span>air conditioning.</span><br />Across London.</h1>
          <p className="hero-intro">Premium engineering for year-round comfort. Based in South London, QZ Engineers brings plumbing, heating and cooling expertise to homes and businesses across all London boroughs.</p>
          <div className="hero-buttons">
            <Link className="button button-primary" to="/contact">Request a quote <Icon name="arrow" size={17} /></Link>
            <a className="text-link" href={business.phoneHref}>Call our engineers <span className="link-arrow"><Icon name="phone" size={15} /></span></a>
          </div>
          <div className="hero-footnotes">
            <span><Icon name="shield" size={17} /> {business.credentials[0]}</span><span><Icon name="snowflake" size={17} /> {business.credentials[1]}</span>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-photo-wrap">
            <img className="hero-photo" src="/images/heating.webp" alt="A modern, neatly installed heating system with contemporary boiler and pipework" />
            <div className="photo-overlay" />
            <div className="image-top-label"><span className="status-dot" /> COMFORT, UNDER CONTROL</div>
            <div className="image-caption">
              <span className="caption-mark"><Icon name={season === 'winter' ? 'snowflake' : 'sun'} size={21} /></span>
              <div><strong>{season === 'winter' ? 'Ready for the colder days' : 'A cooler kind of comfort'}</strong><span>{season === 'winter' ? 'Heating · Gas · Hot water' : 'Air conditioning · Climate control'}</span></div>
            </div>
            <div className="image-index"><span>01</span><i /> <span>MECHANICAL CARE</span></div>
          </div>
          <div className="hero-side-note"><span className="side-note-line" /> <span>Warm winters.<br />Cool summers.</span></div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        </div>
        <div className="hero-scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <div className="marquee-band" aria-label="QZ Engineers services: heating, gas safety, plumbing and air conditioning">
        <div className="marquee-track"><span>HEATING</span><Icon name="spark" size={17} /><span>GAS SAFETY</span><Icon name="snowflake" size={17} /><span>PLUMBING</span><Icon name="spark" size={17} /><span>AIR CONDITIONING</span><Icon name="snowflake" size={17} /><span>COMMERCIAL GAS</span><Icon name="spark" size={17} /><span>HEATING</span><Icon name="snowflake" size={17} /><span>GAS SAFETY</span><Icon name="spark" size={17} /><span>PLUMBING</span><Icon name="snowflake" size={17} /><span>AIR CONDITIONING</span></div>
      </div>

      <section className="services-section section-wrap" id="services">
        <div className="section-heading services-heading" data-reveal>
          <div><div className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</div><h2>Everything that keeps<br /><span>a space comfortable.</span></h2></div>
          <p>From a boiler service to underfloor heating and bespoke air conditioning — one practical team for heat, water and air.</p>
        </div>
        <p className="services-lead" data-reveal>{homeServicesLead}</p>
        <div className="service-grid">
          {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
        </div>
        <div className="service-endnote" data-reveal><span className="endnote-line" /><p>Not sure where to start? <Link to="/contact">Tell us what’s going on <Icon name="arrow" size={14} /></Link></p></div>
      </section>

      <section className="feature-section section-wrap" id="approach">
        <div className="feature-visual" data-reveal>
          <img {...serviceImages.cooling} loading="lazy" />
          <div className="feature-photo-badge"><span><Icon name="leaf" size={17} /></span> GOOD AIR. GOOD FEELING.</div>
          <div className="feature-number"><span>02</span><i /> COOLING & COMFORT</div>
        </div>
        <div className="feature-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> ABOUT QZ ENGINEERS</div>
          <h2>Engineering comfort.<br /><span>Delivering confidence.</span></h2>
          <p className="feature-lead">Based in South London, our mobile engineering team serves residential and commercial properties throughout the capital. We combine technical expertise, careful workmanship and attention to safety to keep your space comfortable through every season.</p>
          <div className="feature-points">
            <div><span className="point-icon"><Icon name="check" size={16} /></span><p><strong>Clear next steps</strong><span>Understand the options before work begins.</span></p></div>
            <div><span className="point-icon"><Icon name="check" size={16} /></span><p><strong>Certified expertise</strong><span>Gas Safe Registered and REFCOM-certified F-Gas installation expertise.</span></p></div>
            <div><span className="point-icon"><Icon name="check" size={16} /></span><p><strong>Domestic to commercial</strong><span>Solutions for homes, offices, retail spaces and commercial premises.</span></p></div>
          </div>
          <Link className="text-link feature-link" to="/contact">Find the right service <span className="link-arrow"><Icon name="arrow" size={15} /></span></Link>
        </div>
      </section>

      <section className="approach-band">
        <div className="approach-inner section-wrap">
          <div className="approach-title" data-reveal><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> THE QZ ENGINEERS WAY</div><h2>Simple, from<br /><span>first enquiry to finish.</span></h2><p>Practical help, without the fuss.</p></div>
          <div className="approach-steps">
            <article data-reveal><span className="step-number">01 <i /></span><div><h3>Tell us what’s up</h3><p>A repair, a service, an installation or a safety check — start with what you need.</p></div></article>
            <article data-reveal><span className="step-number">02 <i /></span><div><h3>Get a clear plan</h3><p>We’ll talk through the next steps and what makes sense for your space.</p></div></article>
            <article data-reveal><span className="step-number">03 <i /></span><div><h3>Feel the difference</h3><p>From heating to cooling, get the right care for the season ahead.</p></div></article>
          </div>
        </div>
        <div className="approach-decoration"><span>QZ</span></div>
      </section>

      <section className="safety-section section-wrap" data-reveal>
        <div className="safety-emblem"><Icon name="shield" size={32} /></div>
        <div className="safety-copy"><span className="eyebrow">QUALIFIED FOR YOUR COMFORT</span><h2>Gas Safe Registered.<br /><span>REFCOM Certified.</span></h2></div>
        <p>Gas Safe registered engineering and REFCOM-certified F-Gas installation expertise. Professional care for your heating, cooling and gas systems across London.</p>
        <Link className="safety-link" to="/services/gas-safety-checks">Read about gas safety <span><Icon name="arrow" size={16} /></span></Link>
      </section>

      <section className="coverage-section section-wrap" id="coverage">
        <div className="section-heading" data-reveal>
          <div><div className="eyebrow"><span className="eyebrow-line" /> AREAS WE COVER</div><h2>South London roots.<br /><span>London-wide reach.</span></h2></div>
          <p>Our fully equipped mobile team serves all London boroughs. These are just some of the areas we cover, for homes and businesses alike.</p>
        </div>
        <div className="coverage-grid">
          {coverageAreas.map((area) => <article key={area.title} data-reveal><h3>{area.title}</h3><p>{area.places}</p></article>)}
        </div>
        <p className="coverage-note">Registered office: {business.address}. <Link to="/contact">Discuss a job in your area <Icon name="arrow" size={14} /></Link></p>
      </section>

      <ContactSection
        title={<>A better season<br /><span>starts here.</span></>}
        intro="Tell us a little about the job. Whether it’s a repair, a boiler service, an installation or a question about gas safety, we’ll help you find the right next step."
      />
    </main>
  );
}
