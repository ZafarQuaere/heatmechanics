import { ContactSection } from '../components/ContactSection';
import { whatsapp } from '../content/site';

export function ContactPage() {
  return (
    <main id="top">
      <ContactSection
        headingLevel="h1"
        title={<>Request<br /><span>a quote.</span></>}
        intro={`Tell us the service you need, whether it is a home or a business, and what is happening. You can also message HeatMechanics on WhatsApp at ${whatsapp.display}. This form does not send until HeatMechanics connects a contact destination.`}
      />
    </main>
  );
}
