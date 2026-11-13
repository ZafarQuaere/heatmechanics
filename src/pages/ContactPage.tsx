import { ContactSection } from '../components/ContactSection';
import { whatsapp } from '../content/site';

export function ContactPage() {
  return (
    <main id="top">
      <ContactSection
        headingLevel="h1"
        title={<>Request<br /><span>a quote.</span></>}
        intro={`Based in South London and serving all London boroughs. Tell us about your home or business, or contact our engineers directly on ${whatsapp.display}. Prepare a message below, then review and send it in WhatsApp.`}
      />
    </main>
  );
}
