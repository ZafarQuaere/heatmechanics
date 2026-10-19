import type { ReactNode } from 'react';
import { EnquiryForm } from './EnquiryForm';
import { Icon } from '../icons';

export function ContactSection({
  headingLevel = 'h2',
  title,
  intro,
  serviceSlug,
}: {
  headingLevel?: 'h1' | 'h2';
  title: ReactNode;
  intro: string;
  serviceSlug?: string;
}) {
  const Heading = headingLevel;
  return (
    <section className="contact-section" id="contact">
      <div className="contact-orbit contact-orbit-a" /><div className="contact-orbit contact-orbit-b" />
      <div className="contact-content section-wrap">
        <div className="contact-intro" data-reveal>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> LET’S GET COMFORTABLE</div>
          <Heading>{title}</Heading>
          <p>{intro}</p>
          <div className="contact-note"><span className="contact-note-icon"><Icon name="thermometer" size={19} /></span><span>Homes and businesses<br /><strong>Heating · Gas · Water · Air</strong></span></div>
        </div>
        <EnquiryForm serviceSlug={serviceSlug} />
      </div>
    </section>
  );
}
