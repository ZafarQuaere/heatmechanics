import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useSearchParams } from 'react-router';
import { business, services } from '../content/site';
import { Icon } from '../icons';

export function EnquiryForm({ serviceSlug }: { serviceSlug?: string }) {
  const [params] = useSearchParams();
  const querySlug = params.get('service') ?? '';
  const requested = serviceSlug || querySlug;
  const [selected, setSelected] = useState(() => (services.some((service) => service.slug === requested) ? requested : ''));
  const [preparedUrl, setPreparedUrl] = useState('');

  useEffect(() => {
    setSelected(services.some((service) => service.slug === requested) ? requested : '');
    setPreparedUrl('');
  }, [requested]);

  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const service = services.find((item) => item.slug === data.get('service'));
    if (!service) return;
    const message = [
      `Hello ${business.name}, I would like to enquire about ${service.title}.`,
      `Name: ${String(data.get('name') ?? '').trim()}`,
      `Email: ${String(data.get('email') ?? '').trim()}`,
      `Postcode: ${String(data.get('postcode') ?? '').trim()}`,
      `Details: ${String(data.get('details') ?? '').trim()}`,
    ].join('\n');
    const url = `${business.whatsappHref}?text=${encodeURIComponent(message)}`;
    setPreparedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="enquiry-card" onSubmit={handleEnquiry} data-reveal>
      <div className="form-heading"><span>START A CONVERSATION</span><span className="form-index">QZ / 01</span></div>
      <h3>What can we help with?</h3>
      <label>Your name<input name="name" type="text" placeholder="Name" autoComplete="name" required /></label>
      <div className="form-row"><label>Email address<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label><label>Postcode<input name="postcode" type="text" placeholder="Your postcode" autoComplete="postal-code" required /></label></div>
      <label>Service needed
        <select name="service" value={selected} onChange={(event) => setSelected(event.target.value)} required>
          <option value="" disabled>Choose a service</option>
          {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
        </select>
      </label>
      <label>A few details<textarea name="details" rows={3} placeholder="Tell us what’s happening…" /></label>
      <button className="button button-submit" type="submit">Continue in WhatsApp <Icon name="arrow" size={17} /></button>
      <p className="form-disclaimer">Opens your details in WhatsApp. Review the message and press send there to contact us. This site does not save your enquiry. Prefer email? <a href={business.emailHref}>Email QZ Engineers</a>.</p>
      {preparedUrl && <p className="form-notice" role="status">Your message is ready. Nothing has been sent automatically. If WhatsApp did not open, <a href={preparedUrl} target="_blank" rel="noopener noreferrer">open your prepared enquiry</a>.</p>}
    </form>
  );
}
