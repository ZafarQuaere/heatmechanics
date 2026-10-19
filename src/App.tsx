import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router';
import { getPageMeta, whatsapp } from './content/site';
import { Icon } from './icons';
import { ContactPage } from './pages/ContactPage';
import { GuidesPage } from './pages/GuidesPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServicePage } from './pages/ServicePage';

type Season = 'winter' | 'summer';

function App() {
  const [season, setSeason] = useState<Season>('winter');
  const [seasonReady, setSeasonReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const stored = window.localStorage.getItem('heatmechanics-season');
    if (stored === 'summer') setSeason('summer');
    setSeasonReady(true);
  }, []);

  useEffect(() => {
    if (!seasonReady) return;
    window.localStorage.setItem('heatmechanics-season', season);
    document.documentElement.dataset.season = season;
  }, [season, seasonReady]);

  useEffect(() => {
    const meta = getPageMeta(location.pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    document.documentElement.classList.add('has-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" data-season={season}>
      <div className="announcement-bar">
        <span className="pulse-dot" />
        <span>Gas engineering <i>·</i> heating <i>·</i> air conditioning</span>
        <Link to="/#services">A better balance, all year <Icon name="arrow" size={14} /></Link>
      </div>

      <header className="site-header">
        <Link className="brand-lockup" to="/" aria-label="HeatMechanics home" onClick={closeMenu}>
          <img src="/heatmechanics-logo.png" alt="HeatMechanics — Gas Engineering & Air Conditioning" />
        </Link>
        <button className="mobile-menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <Link to="/#services" onClick={closeMenu}>Services</Link>
          <Link to="/#approach" onClick={closeMenu}>Our approach</Link>
          <Link to="/guides" onClick={closeMenu} aria-current={location.pathname === '/guides' ? 'page' : undefined}>Guides</Link>
          <Link to="/contact" onClick={closeMenu} aria-current={location.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
        </nav>
        <div className="header-actions">
          <div className="season-switch" role="group" aria-label="Choose seasonal colour theme">
            <button type="button" className={season === 'winter' ? 'active' : ''} aria-pressed={season === 'winter'} onClick={() => setSeason('winter')}>
              <Icon name="snowflake" size={15} /><span>Winter</span>
            </button>
            <button type="button" className={season === 'summer' ? 'active' : ''} aria-pressed={season === 'summer'} onClick={() => setSeason('summer')}>
              <Icon name="sun" size={15} /><span>Summer</span>
            </button>
          </div>
          <Link className="nav-cta" to="/contact">Request a quote <Icon name="arrow" size={16} /></Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage season={season} />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <footer className="site-footer">
        <div className="footer-top section-wrap">
          <Link className="footer-brand" to="/"><img src="/heatmechanics-logo.png" alt="HeatMechanics" /></Link>
          <p>Warm winters. Cool summers.<br />Gas engineering, heating and air conditioning.</p>
          <div className="footer-links">
            <Link to="/#services">Services</Link>
            <Link to="/#approach">Our approach</Link>
            <Link to="/guides" aria-current={location.pathname === '/guides' ? 'page' : undefined}>Guides</Link>
            <Link to="/contact" aria-current={location.pathname === '/contact' ? 'page' : undefined}>Start an enquiry</Link>
          </div>
          <a className="back-top" href="#top" aria-label="Back to top"><Icon name="arrow" size={18} /></a>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} HeatMechanics</span><span>Comfort, considered.</span><a href="#top">Back to the top ↑</a></div>
      </footer>
      <a className="whatsapp-button" href={whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" size={28} />
      </a>
    </div>
  );
}

export default App;
