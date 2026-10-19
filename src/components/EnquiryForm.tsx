import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useSearchParams } from 'react-router';
import { services } from '../content/site';
import { Icon } from '../icons';

export function EnquiryForm({ serviceSlug }: { serviceSlug?: string }) {
  const [params] = useSearchParams();
  const querySlug = params.get('service') ?? '';
  const requested = serviceSlug || querySlug;
  const [selected, setSelected] = useState(() => (services.some((service) => service.slug === requested) ? requested : ''));
  const [formNotice, setFormNotice] = useState('');

  useEffect(() => {
    if (requested && services.some((service) => service.slug === requested)) setSelected(requested);
  }, [requested]);

  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormNotice('Your details have not been sent. Connect HeatMechanics’ preferred inbox or booking system to receive enquiries from this form.');
  }

  return (
    <form className="enquiry-card" onSubmit={handleEnquiry} data-reveal>
      <div className="form-heading"><span>START A CONVERSATION</span><span className="form-index">HM / 01</span></div>
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
      <button className="button button-submit" type="submit">Prepare my enquiry <Icon name="arrow" size={17} /></button>
      <p className="form-disclaimer">No enquiry is sent yet. This form needs HeatMechanics’ preferred contact destination connected before it can receive submissions.</p>
      {formNotice && <p className="form-notice" role="status">{formNotice}</p>}
    </form>
  );
}
