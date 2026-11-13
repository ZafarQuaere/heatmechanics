import { business } from '../content/site';
import { Icon } from '../icons';

export function ContactLinks() {
  return (
    <div className="contact-links">
      <a href={business.phoneHref}><Icon name="phone" size={17} /> {business.phone}</a>
      <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={17} /> Chat on WhatsApp</a>
      <a href={business.emailHref}>{business.email}</a>
      <p>Registered office<br /><span>{business.address}</span></p>
    </div>
  );
}
