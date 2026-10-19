import { ContactSection } from '../components/ContactSection';

export function ContactPage() {
  return (
    <main id="top">
      <ContactSection
        headingLevel="h1"
        title={<>Request<br /><span>a quote.</span></>}
        intro="Tell us the service you need, whether it is a home or a business, and what is happening. There is no phone number on this site yet, and this form does not send until HeatMechanics connects a contact destination."
      />
    </main>
  );
}
