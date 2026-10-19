import { Link } from 'react-router';
import { ContactSection } from '../components/ContactSection';
import { ServiceCard } from '../components/ServiceCard';
import { homeServicesLead, services } from '../content/site';
import { Icon } from '../icons';

export function HomePage({ season }: { season: 'winter' | 'summer' }) {
  return (
    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> THE COMFORT PEOPLE</div>
          <h1>Warm winters.<br /><span>Cool summers.</span><br />All sorted.</h1>
          <p className="hero-intro">A gas and heating engineer for homes and businesses. Boiler repair and servicing, boiler installation, gas safety checks, plumbing, air conditioning and commercial gas.</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#services">Explore our services <Icon name="arrow" size={17} /></a>
            <Link className="text-link" to="/contact">Talk through a job <span className="link-arrow"><Icon name="arrow" size={15} /></span></Link>
          </div>
          <div className="hero-footnotes">
            <span><Icon name="home" size={17} /> Homes</span><span className="footnote-divider" /><span><Icon name="building" size={17} /> Businesses</span><span className="footnote-divider" /><span><Icon name="shield" size={17} /> Safety-minded</span>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-photo-wrap">
            <img className="hero-photo" src="/images/heating.webp" alt="A modern, neatly installed heating system with contemporary boiler and pipework" />
            <div className="photo-overlay" />
            <div className="image-top-label"><span className="status-dot" /> COMFORT, UNDER CONTROL</div>
            <div className="image-caption">
              <span className="caption-mark"><Icon name={season === 'winter' ? 'snowflake' : 'sun'} size={21} /></span>
              <div><strong>{season === 'winter' ? 'Ready for the colder days' : 'A cooler kind of comfort'}</strong><span>{season === 'winter' ? 'Heating · Gas · Hot water' : 'Air conditioning · Ventilation'}</span></div>
            </div>
            <div className="image-index"><span>01</span><i /> <span>MECHANICAL CARE</span></div>
          </div>
          <div className="hero-side-note"><span className="side-note-line" /> <span>Warm winters.<br />Cool summers.</span></div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        </div>
        <div className="hero-scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <div className="marquee-band" aria-label="HeatMechanics services: heating, gas safety, plumbing and air conditioning">
        <div className="marquee-track"><span>HEATING</span><Icon name="spark" size={17} /><span>GAS SAFETY</span><Icon name="snowflake" size={17} /><span>PLUMBING</span><Icon name="spark" size={17} /><span>AIR CONDITIONING</span><Icon name="snowflake" size={17} /><span>COMMERCIAL GAS</span><Icon name="spark" size={17} /><span>HEATING</span><Icon name="snowflake" size={17} /><span>GAS SAFETY</span><Icon name="spark" size={17} /><span>PLUMBING</span><Icon name="snowflake" size={17} /><span>AIR CONDITIONING</span></div>
      </div>

      <section className="services-section section-wrap" id="services">
        <div className="section-heading services-heading" data-reveal>
          <div><div className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</div><h2>Everything that keeps<br /><span>a space comfortable.</span></h2></div>
          <p>From a boiler that needs repair or a service, to commercial gas for a business — one practical team for heat, water and air.</p>
        </div>
        <p className="services-lead" data-reveal>{homeServicesLead}</p>
        <div className="service-grid">
          {services.map((service, index) => <ServiceCard key={service.slug} service={service} featured={index === 0} index={index} />)}
        </div>
        <div className="service-endnote" data-reveal><span className="endnote-line" /><p>Not sure where to start? <Link to="/contact">Tell us what’s going on <Icon name="arrow" size={14} /></Link></p></div>
      </section>

      <section className="feature-section section-wrap" id="approach">
        <div className="feature-visual" data-reveal>
          <img src="/images/cooling.webp" alt="A bright, considered interior with a discreet wall-mounted air conditioning unit" loading="lazy" />
          <div className="feature-photo-badge"><span><Icon name="leaf" size={17} /></span> GOOD AIR. GOOD FEELING.</div>
          <div className="feature-number"><span>02</span><i /> COOLING & COMFORT</div>
        </div>
        <div className="feature-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-line" /> GOOD WORK, WELL CONSIDERED</div>
          <h2>Comfort is in<br /><span>the details.</span></h2>
          <p className="feature-lead">The right system is only part of the story. Good advice, careful installation and ongoing care make the difference you notice every day — whether that is a boiler, air conditioning, or a gas safety check.</p>
          <div className="feature-points">
            <div><span className="point-icon"><Icon name="check" size={16} /></span><p><strong>Clear next steps</strong><span>Understand the options before work begins.</span></p></div>
            <div><span className="point-icon"><Icon name="check" size={16} /></span><p><strong>Safety in the details</strong><span>Gas safety and compliance kept in view.</span></p></div>
            <div><span className="point-icon"><Icon name="check" size={16} /></span><p><strong>Domestic to commercial</strong><span>Homes and businesses, from heating to catering equipment.</span></p></div>
          </div>
          <Link className="text-link feature-link" to="/contact">Find the right service <span className="link-arrow"><Icon name="arrow" size={15} /></span></Link>
        </div>
      </section>

      <section className="approach-band">
        <div className="approach-inner section-wrap">
          <div className="approach-title" data-reveal><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> THE HEATMECHANICS WAY</div><h2>Simple, from<br /><span>first enquiry to finish.</span></h2><p>Practical help, without the fuss.</p></div>
          <div className="approach-steps">
            <article data-reveal><span className="step-number">01 <i /></span><div><h3>Tell us what’s up</h3><p>A repair, a service, an installation or a safety check — start with what you need.</p></div></article>
            <article data-reveal><span className="step-number">02 <i /></span><div><h3>Get a clear plan</h3><p>We’ll talk through the next steps and what makes sense for your space.</p></div></article>
            <article data-reveal><span className="step-number">03 <i /></span><div><h3>Feel the difference</h3><p>From heating to cooling, get the right care for the season ahead.</p></div></article>
          </div>
        </div>
        <div className="approach-decoration"><span>HM</span></div>
      </section>

      <section className="safety-section section-wrap" data-reveal>
        <div className="safety-emblem"><Icon name="shield" size={32} /></div>
        <div className="safety-copy"><span className="eyebrow">GAS SAFETY, TAKEN SERIOUSLY</span><h2>Good to know.<br /><span>Good to be safe.</span></h2></div>
        <p>From landlord gas safety checks and CP12 certificates to commercial gas work, keep the important details part of the conversation.</p>
        <Link className="safety-link" to="/services/gas-safety-checks">Read about gas safety <span><Icon name="arrow" size={16} /></span></Link>
      </section>

      <ContactSection
        title={<>A better season<br /><span>starts here.</span></>}
        intro="Tell us a little about the job. Whether it’s a repair, a boiler service, an installation or a question about gas safety, we’ll help you find the right next step."
      />
    </main>
  );
}
