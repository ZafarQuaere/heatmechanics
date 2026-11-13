import type { IconName } from '../icons';

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  number: string;
  icon: IconName;
  title: string;
  tag: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  paragraphs: string[];
  enquiryPoints: string[];
  enquiryPrompt: string;
  askLabel: string;
  faqs: Faq[];
  related: string[];
  image?: { src: string; alt: string; width: number; height: number };
};

export type Guide = {
  question: string;
  paragraphs: string[];
  related: string[];
};

export const business = {
  name: 'QZ Engineers',
  tagline: 'WARM WINTERS, COOL SUMMERS',
  credentials: ['Gas Safe Registered', 'REFCOM Certified F-Gas Installer'],
  phone: '020 8036 1007',
  phoneHref: 'tel:+442080361007',
  email: 'info@qzengineers.co.uk',
  emailHref: 'mailto:info@qzengineers.co.uk',
  address: '80 Kingston Road, SW19 1LA',
  website: 'qzengineers.co.uk',
  whatsappHref: 'https://wa.me/442080361007',
};

export const whatsapp = { display: business.phone, href: business.whatsappHref };

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.name,
  telephone: '+442080361007',
  email: business.email,
  address: {
    '@type': 'PostalAddress', streetAddress: '80 Kingston Road',
    postalCode: 'SW19 1LA', addressLocality: 'London', addressCountry: 'GB',
  },
  areaServed: { '@type': 'City', name: 'London' },
};

export const coverageAreas = [
  { title: 'South & South West', places: 'Wimbledon · South Wimbledon · Wimbledon Chase · Kingston · Merton · Wandsworth · Richmond · Clapham · Croydon · Battersea · Putney' },
  { title: 'West & Central', places: 'Hounslow · Southall · Chelsea · Kensington · Knightsbridge · Mayfair · Westminster · Fulham · Chiswick · Ealing · Hammersmith' },
  { title: 'North & North West', places: 'Hampstead · Highgate · Camden · Islington · Finchley · Barnet · Harrow · Wembley' },
  { title: 'East & South East', places: 'Greenwich · Canary Wharf · Docklands · Hackney · Stratford · Lewisham · Bromley' },
];

export const serviceImages = {
  cooling: { src: '/images/qz-air-conditioning.webp', alt: 'A wall-mounted air conditioning unit in a bright living room', width: 1229, height: 860 },
  radiator: { src: '/images/qz-radiator.webp', alt: 'A white wall-mounted radiator in a contemporary interior', width: 1290, height: 860 },
  cylinder: { src: '/images/qz-hot-water-cylinder.webp', alt: 'A hot-water cylinder with copper pipework and an expansion vessel', width: 862, height: 746 },
  controls: { src: '/images/qz-thermostat.webp', alt: 'A wall-mounted thermostat displaying the room temperature', width: 1000, height: 1000 },
};

export const services: Service[] = [
  {
    slug: 'boiler-repair-servicing',
    image: serviceImages.radiator,
    number: '01',
    icon: 'boiler',
    title: 'Boiler repair & servicing',
    tag: 'HEATING',
    summary: 'Gas boiler repair, boiler servicing and heating repairs when the system is not doing its job.',
    seoTitle: 'Gas boiler repair and servicing London | QZ Engineers',
    seoDescription: 'Gas boiler repair, boiler servicing and heating repairs for homes and businesses. Tell QZ Engineers what the boiler is doing and we will talk through the next step.',
    headline: 'Gas boiler repair',
    headlineAccent: 'and servicing.',
    intro: 'When the heating has stopped, a room stays cold, or the boiler is due a service, this is the page to start from.',
    paragraphs: [
      'Gas boiler repair is for a fault. That might be no heat, no hot water, a lockout, a noise, or a leak from the heating system. Tell us the make if you know it, and what changed before it failed.',
      'Boiler servicing is the planned visit for a boiler that is already in use. Many manufacturers suggest a service about once a year. That is general guidance, not a promise of a particular result, and it is separate from a landlord gas safety certificate.',
      'Heating repairs cover the parts around the boiler that stop warmth moving through the building, such as a pump, valve or control. We will say what we find before any work goes ahead.',
    ],
    enquiryPoints: [
      'Whether you need a repair, a service, or both',
      'What the boiler or heating is doing',
      'The make and model, if you have them',
      'Whether the property is a home or a business',
    ],
    enquiryPrompt: 'Describe the boiler, the fault or the service you need, and whether the property is a home or a business.',
    askLabel: 'boiler repair.',
    faqs: [
      {
        question: 'What is the difference between boiler repair and boiler servicing?',
        answer: 'Repair is for a fault: no heating, no hot water, a leak, a noise or a boiler that will not stay on. Servicing is a planned check of a boiler that is in use. If a service finds a fault, we will explain it before any repair.',
      },
      {
        question: 'Can you help if the heating is on but the rooms stay cold?',
        answer: 'Yes. That can be a boiler fault or a heating repair elsewhere on the system. Describe the cold rooms, any noises, and how long it has been happening.',
      },
      {
        question: 'Do you service boilers in businesses as well as homes?',
        answer: 'Yes. Use this page for a boiler that heats a home or a business. Professional catering equipment belongs under commercial gas and catering equipment.',
      },
    ],
    related: ['boiler-installation-replacement', 'gas-safety-checks', 'commercial-gas-catering'],
  },
  {
    slug: 'boiler-installation-replacement',
    image: serviceImages.radiator,
    number: '02',
    icon: 'spark',
    title: 'Boiler installation & replacement',
    tag: 'HEATING',
    summary: 'Boiler installation and boiler replacement, planned around the property and how the heating is used.',
    seoTitle: 'Boiler installation and replacement London | QZ Engineers',
    seoDescription: 'Boiler installation and boiler replacement for homes and businesses, planned around the property. Gas Safe registered engineers serving London.',
    headline: 'Boiler installation',
    headlineAccent: 'and replacement.',
    intro: 'QZ Engineers installs and replaces boilers for homes and businesses, planned around the property and the way the heating is used.',
    paragraphs: [
      'A boiler installation puts in the appliance that heats the rooms and, where the system is set up that way, the hot water. Tell us about the existing controls, radiators and pipework so we can plan the work around your property.',
      'Boiler replacement is worth a conversation when the current boiler fails often, parts are hard to find, or it no longer heats the property properly. A repair may still be the sensible first step. We can talk that through before you commit to a new appliance.',
      'The plan depends on the property: where the boiler sits, how the flue can leave the building, and whether the existing controls can stay. Those details belong in the enquiry.',
    ],
    enquiryPoints: [
      'Whether this is a new installation or a replacement',
      'The type of property: home or business',
      'Where the current boiler is, if there is one',
      'What is wrong with the present heating, if anything',
    ],
    enquiryPrompt: 'Say whether you need a new boiler or a replacement, where it sits, and what the current heating is doing.',
    askLabel: 'a new boiler.',
    faqs: [
      {
        question: 'Can I discuss radiator and control work with a boiler replacement?',
        answer: 'Yes. Tell us about any radiator, thermostat or plumbing work you need alongside the boiler replacement so we can discuss the scope together.',
      },
      {
        question: 'Should I repair the boiler or replace it?',
        answer: 'If the fault is clear and the boiler otherwise heats the property, a repair is often enough. Replacement comes into view when faults keep returning or the boiler cannot heat the building properly. Describe the symptoms and we will talk through which path makes sense.',
      },
      {
        question: 'Can you replace a boiler in a business?',
        answer: 'Yes, where the job is the boiler for the building. Professional catering equipment sits under commercial gas and catering equipment.',
      },
    ],
    related: ['boiler-repair-servicing', 'unvented-cylinder-installation', 'commercial-gas-catering'],
  },
  {
    slug: 'gas-safety-checks',
    number: '03',
    icon: 'certificate',
    title: 'Gas services & safety / CP12',
    tag: 'GAS SAFETY',
    summary: 'Gas safety inspections, landlord certificates (CP12) and gas leak detection across London.',
    seoTitle: 'Landlord gas safety certificate London | QZ Engineers',
    seoDescription: 'Gas Safe registered engineers for gas safety inspections, CP12 landlord certificates and gas leak detection across London.',
    headline: 'Gas services',
    headlineAccent: 'and safety checks.',
    intro: 'Our Gas Safe registered engineers provide gas safety inspections, landlord CP12 certificates and gas leak detection across London.',
    paragraphs: [
      'A landlord gas safety check looks at the gas appliances and flues the record needs to cover. The completed record is often called a CP12. It is the document used to show that the check has been done.',
      'A home that is not let can still book a gas safety check when you want the appliances looked over. Say whether the property is rented, so we know if you need the landlord record.',
      'We also provide gas leak detection. Tell us about a planned inspection or an existing system that needs attention. Boiler repair and servicing is a separate service and can be discussed in the same enquiry. This enquiry form is not an emergency contact channel.',
    ],
    enquiryPoints: [
      'Whether you need a landlord CP12 or a check for a home you live in',
      'How many gas appliances should be on the record',
      'The type of property',
      'Any appliance you already know is not working',
    ],
    enquiryPrompt: 'Say whether you need a landlord CP12 or a gas safety check, and which appliances the property has.',
    askLabel: 'a CP12.',
    faqs: [
      {
        question: 'What is a CP12?',
        answer: 'CP12 is the name people use for the landlord gas safety record. It is the certificate issued after a gas safety check on the appliances and flues covered by the visit.',
      },
      {
        question: 'Who is a landlord gas safety certificate for?',
        answer: 'It is for landlords and anyone else who needs a gas safety record for a property that is let. If you live in the home yourself, say so and we will treat the visit as a gas safety check rather than a landlord record.',
      },
      {
        question: 'Does a gas safety check include a boiler service?',
        answer: 'No. The check and the certificate are this service. Boiler servicing is separate. You can mention both in the same enquiry if you need them together.',
      },
    ],
    related: ['boiler-repair-servicing', 'commercial-gas-catering', 'general-plumbing'],
  },
  {
    slug: 'general-plumbing',
    image: serviceImages.radiator,
    number: '04',
    icon: 'pipe',
    title: 'General plumbing',
    tag: 'PLUMBING',
    summary: 'Plumbing installations and repairs, radiators, and first-fix and second-fix work.',
    seoTitle: 'General plumbing repairs London | QZ Engineers',
    seoDescription: 'Plumbing installations, repairs, radiators and first-fix and second-fix plumbing across London. Contact QZ Engineers for your home or business.',
    headline: 'General plumbing',
    headlineAccent: 'and installations.',
    intro: 'Professional plumbing for homes and businesses across London, from everyday repairs to first-fix and second-fix installations.',
    paragraphs: [
      'We install and repair plumbing, including taps, toilets, wastes and pipework. First-fix plumbing prepares the pipework; second-fix connects the fixtures and fittings.',
      'Radiator installation and replacement is also available. Tell us how many radiators are involved and whether the work is part of a wider property project.',
      'An unvented hot-water cylinder has its own page, because that installation has Part G requirements. A simpler repair on other pipework can stay here.',
    ],
    enquiryPoints: [
      'What is leaking, blocked or not working',
      'Whether it is a home or a business',
      'How the problem is affecting the building, in your own words',
      'Any access limits, such as a flat or a locked cupboard',
    ],
    enquiryPrompt: 'Describe the plumbing fault, where it is, and whether the property is a home or a business.',
    askLabel: 'plumbing.',
    faqs: [
      {
        question: 'Do you install and replace radiators?',
        answer: 'Yes. We install and replace radiators in homes and businesses. Include the number of radiators and the current heating setup in your enquiry.',
      },
      {
        question: 'Is a smell of gas a plumbing job?',
        answer: 'No. Leave the building, avoid switches and flames, and call the National Gas Emergency Service on 0800 111 999. That is the public gas emergency line, not a QZ Engineers number. This site does not offer an emergency call-out.',
      },
      {
        question: 'Can you look at a leaking pipe in a business?',
        answer: 'Yes. General plumbing covers homes and businesses. Catering gas equipment is a different service.',
      },
    ],
    related: ['unvented-cylinder-installation', 'underfloor-heating', 'boiler-repair-servicing'],
  },
  {
    slug: 'air-conditioning',
    image: serviceImages.cooling,
    number: '05',
    icon: 'snowflake',
    title: 'Air conditioning installation & servicing',
    tag: 'COOLING',
    summary: 'Air conditioning installation and servicing for homes and businesses.',
    seoTitle: 'Air conditioning installation and servicing London | QZ Engineers',
    seoDescription: 'Air conditioning installation and servicing for homes and businesses. Tell QZ Engineers whether you need a new system or help with one that is already fitted.',
    headline: 'Air conditioning',
    headlineAccent: 'installation and servicing.',
    intro: 'Bespoke air conditioning installation and servicing across London from REFCOM-certified F-Gas installers.',
    paragraphs: [
      'Installation is a new air conditioning system planned around the room: where the indoor unit can sit, where the outdoor unit can go, and how the pipework can run.',
      'Servicing is for a system that is already in place. The visit checks that the unit is cooling as it should and looks at the basics that keep it running.',
      'If the unit is fitted but no longer cooling, say what it is doing. We will look at the existing system and tell you what we find before further work.',
    ],
    enquiryPoints: [
      'Whether you need installation or servicing',
      'The space: home, office or other business',
      'How many rooms need cooling',
      'Whether a system is already fitted',
    ],
    enquiryPrompt: 'Say whether you need air conditioning installed or serviced, and what kind of space it is for.',
    askLabel: 'air conditioning.',
    faqs: [
      {
        question: 'Do you install air conditioning in homes and in businesses?',
        answer: 'Yes. Tell us which it is, and how the space is used, so the installation or service matches the building.',
      },
      {
        question: 'The air conditioning is fitted but it is not cooling. Where do I start?',
        answer: 'Start with servicing. Describe what the unit is doing — warm air, a noise, a leak, or a unit that will not start — and we will look at the existing system.',
      },
      {
        question: 'Is air conditioning booked with the heating?',
        answer: 'No. Boiler and heating work is a separate service. You can mention both in one enquiry if the property needs them.',
      },
    ],
    related: ['commercial-gas-catering', 'boiler-installation-replacement', 'general-plumbing'],
  },
  {
    slug: 'unvented-cylinder-installation',
    image: serviceImages.cylinder,
    number: '06',
    icon: 'cylinder',
    title: 'Vented & unvented hot-water cylinders',
    tag: 'HOT WATER',
    summary: 'Vented and unvented hot-water cylinder installation, planned around your hot-water needs.',
    seoTitle: 'Vented & Unvented Hot-Water Cylinders London | QZ Engineers',
    seoDescription: 'Vented and unvented hot-water cylinder installation for homes and businesses across London. Discuss your system with QZ Engineers.',
    headline: 'Hot-water cylinders',
    headlineAccent: 'vented and unvented.',
    intro: 'Vented and unvented cylinder installations for homes and businesses across London, with hot-water safety at the centre of the work.',
    paragraphs: [
      'An unvented cylinder stores hot water under mains pressure. It suits a property that needs mains-pressure hot water and has a suitable mains supply.',
      'Part G of the Building Regulations covers hot water safety for this kind of cylinder, including the safety controls the installation needs. Our installation planning keeps those safety requirements in view.',
      'We also install vented hot-water cylinders. Tell us about the current system, the space available and your hot-water needs. A boiler replacement or plumbing work can be discussed as part of the same enquiry.',
    ],
    enquiryPoints: [
      'Whether this is a new cylinder or a replacement',
      'Where the cylinder is, or where you hope to put it',
      'Whether a boiler change is part of the same job',
      'Whether the property is a home or a business',
    ],
    enquiryPrompt: 'Tell us where the cylinder sits, whether it replaces an existing one, and if a boiler is part of the same job.',
    askLabel: 'a cylinder.',
    faqs: [
      {
        question: 'What does Part G mean for an unvented cylinder?',
        answer: 'Part G is the Building Regulations section that covers sanitation, hot water safety and water efficiency. An unvented cylinder installation has to meet the hot-water safety requirements, including the controls the cylinder needs.',
      },
      {
        question: 'Should I use the plumbing page instead?',
        answer: 'Use this page for vented or unvented cylinder installation. General plumbing and radiator work have their own page; you can describe related work in one enquiry.',
      },
      {
        question: 'Do you service existing unvented cylinders?',
        answer: 'The listed service is installation. If an existing cylinder needs attention, describe it in the enquiry and we will say whether we can help.',
      },
    ],
    related: ['boiler-installation-replacement', 'general-plumbing', 'boiler-repair-servicing'],
  },
  {
    slug: 'commercial-gas-catering',
    number: '07',
    icon: 'catering',
    title: 'Commercial gas & catering equipment',
    tag: 'COMMERCIAL',
    summary: 'Commercial gas work and support for professional catering equipment.',
    seoTitle: 'Commercial gas and catering equipment London | QZ Engineers',
    seoDescription: 'Commercial gas work and support for professional catering equipment. For businesses — not a maintenance contract or a separate commercial inspection.',
    headline: 'Commercial gas',
    headlineAccent: 'and catering equipment.',
    intro: 'Practical support for commercial gas and professional catering equipment in businesses.',
    paragraphs: [
      'This service is for businesses that use gas in a commercial setting, including kitchens with professional catering equipment. It is separate from a domestic boiler service.',
      'Tell us what the equipment is and what it is doing: an existing catering appliance, a commercial gas installation, or a fault on equipment you already use. We will say whether it sits within this service.',
      'A boiler that heats an office or other business premises belongs under boiler repair, servicing, installation or replacement. A landlord gas safety certificate has its own page. We do not list maintenance contracts or a separate commercial gas safety inspection.',
    ],
    enquiryPoints: [
      'The type of business and the equipment involved',
      'Whether you need help with an existing appliance or a new installation',
      'What the equipment is doing',
      'Any limits on access to the site',
    ],
    enquiryPrompt: 'Describe the business, the commercial gas or catering equipment, and what you need done.',
    askLabel: 'commercial gas.',
    faqs: [
      {
        question: 'Do you offer commercial boiler servicing or a maintenance contract?',
        answer: 'Those are not listed services. A boiler that heats a business premises can be discussed under boiler repair, servicing, installation or replacement.',
      },
      {
        question: 'Can you carry out a commercial gas safety inspection?',
        answer: 'We do not list a separate commercial gas safety inspection. Landlord gas safety checks and CP12 certificates are described on the gas safety page. For catering equipment, describe the job and we will confirm whether this service fits.',
      },
      {
        question: 'Which businesses is this for?',
        answer: 'Businesses that need commercial gas work or support for professional catering equipment. Include what the premises is used for.',
      },
    ],
    related: ['gas-safety-checks', 'boiler-repair-servicing', 'boiler-installation-replacement'],
  },
  {
    slug: 'underfloor-heating', number: '08', icon: 'thermometer', tag: 'ADVANCED COMFORT',
    title: 'Underfloor heating & controls',
    image: serviceImages.controls,
    summary: 'Underfloor heating installation, thermostats and system power flushing.',
    seoTitle: 'Underfloor Heating & Thermostats London | QZ Engineers',
    seoDescription: 'Underfloor heating installation, thermostats and heating system power flushing across London. Discuss your home or business with QZ Engineers.',
    headline: 'Underfloor heating', headlineAccent: 'and better control.',
    intro: 'Comfort from the ground up. Underfloor heating, thermostats and system power flushing for properties across London.',
    paragraphs: [
      'Underfloor heating brings warmth into the room through the floor. We plan the installation around the property, floor construction and the way you use each space.',
      'Thermostats help you manage when and where the heating runs. Tell us about your existing system and the level of control you would like.',
      'System power flushing addresses deposits in a heating circuit. Describe any cold spots, uneven heating or system history so we can discuss whether it is the right next step.',
    ],
    enquiryPoints: ['Whether you need underfloor heating, a thermostat or power flushing', 'The rooms and floor area involved', 'Your existing heating system', 'Whether this is a renovation, new project or an occupied property'],
    enquiryPrompt: 'Tell us about the rooms, existing heating and the underfloor heating, thermostat or power flushing work you need.',
    askLabel: 'advanced comfort.',
    faqs: [
      { question: 'Can I discuss underfloor heating during a renovation?', answer: 'Yes. Include the rooms, floor construction and project stage so the installation can be planned around the building work.' },
      { question: 'Can I ask about a thermostat without underfloor heating?', answer: 'Yes. Thermostats and power flushing can be discussed independently of an underfloor heating installation.' },
      { question: 'Does every heating system need power flushing?', answer: 'No. Tell us what the heating is doing and we will discuss whether power flushing is appropriate for your system.' },
    ],
    related: ['boiler-repair-servicing', 'general-plumbing', 'boiler-installation-replacement'],
  },
];

export const guides: Guide[] = [
  {
    question: 'What is a CP12?',
    paragraphs: [
      'A CP12 is the everyday name for a landlord gas safety record. It is the certificate produced after a gas safety check of the appliances and flues that the visit covers.',
      'In the UK, a landlord is generally required to have the gas appliances they provide checked at least every 12 months, and to keep a record that can be shown to tenants. QZ Engineers carries out those gas safety checks for landlords, homes and properties. This site does not quote a registration number.',
      'If you live in the home and you are not letting it, you can still ask for a gas safety check. Say that in the enquiry so the visit is not treated as a landlord record.',
    ],
    related: ['gas-safety-checks', 'boiler-repair-servicing'],
  },
  {
    question: 'How often do people book boiler servicing?',
    paragraphs: [
      'Boiler servicing is a planned visit to a boiler that is already in use. Many manufacturers recommend a service about once a year. That is a recommendation, not an interval this site can set for every home.',
      'A service is different from a repair. Repair is for a fault: no heat, no hot water, a leak, a noise, or a boiler that will not stay on. If the property is let, the landlord gas safety check is a separate record from a routine service. You can ask for both in one enquiry.',
    ],
    related: ['boiler-repair-servicing', 'gas-safety-checks'],
  },
  {
    question: 'Should a boiler be repaired or replaced?',
    paragraphs: [
      'A repair is the usual starting point when the boiler has a clear fault and otherwise heats the property. Replacement is the conversation when the same faults keep coming back, parts are no longer practical, or the boiler cannot heat the building properly.',
      'The right plan depends on the property, existing boiler, controls and hot-water needs. Mention any radiator or thermostat changes you want to discuss at the same time.',
      'In the enquiry, include the symptoms, the age of the boiler if you know it, and whether the property is a home or a business.',
    ],
    related: ['boiler-repair-servicing', 'boiler-installation-replacement'],
  },
  {
    question: 'What does Part G mean for an unvented cylinder?',
    paragraphs: [
      'An unvented cylinder stores hot water under mains pressure. Installing one has to follow Part G of the Building Regulations, which covers hot water safety for this kind of cylinder, including the safety controls the installation needs.',
      'QZ Engineers lists unvented cylinder installation with those requirements kept in view. It is separate from general plumbing. If a boiler is being replaced at the same time, say so.',
    ],
    related: ['unvented-cylinder-installation', 'boiler-installation-replacement'],
  },
  {
    question: 'What does the commercial gas service cover?',
    paragraphs: [
      'Commercial gas and catering equipment is for businesses that use commercial gas or professional catering appliances. The useful enquiry describes the equipment, the premises, and what is happening.',
      'Commercial boiler servicing, heating maintenance contracts, and a separate commercial gas safety inspection are not listed services. A boiler in a business can be discussed under boiler repair, servicing, installation or replacement. A landlord gas safety certificate has its own page.',
    ],
    related: ['commercial-gas-catering', 'gas-safety-checks', 'boiler-repair-servicing'],
  },
  {
    question: 'What happens when you use the enquiry form?',
    paragraphs: [
      'Choose a service and enter your contact details and a description of the job. Continue in WhatsApp opens a prepared message for you to review and send. Opening WhatsApp does not send the message automatically.',
      `You can also call ${business.phone} or email ${business.email}. Enquiry details are not saved by this site.`,
    ],
    related: ['underfloor-heating', 'gas-safety-checks'],
  },
];

export const homeSeo = {
  title: 'QZ Engineers | Plumbing, Heating & Air Conditioning London',
  description: 'Plumbing, heating, boiler and air conditioning services across London. QZ Engineers: Gas Safe Registered and REFCOM Certified F-Gas Installer, based in South London.',
};
export const guidesSeo = {
  title: 'Heating, Plumbing & AC Guides | QZ Engineers London',
  description: 'Answers on CP12, boiler servicing, hot-water cylinders, underfloor heating and contacting QZ Engineers for plumbing, heating and air conditioning in London.',
};
export const contactSeo = {
  title: 'Contact QZ Engineers | London Plumbing, Heating & AC',
  description: 'Call 020 8036 1007, email info@qzengineers.co.uk or prepare a WhatsApp enquiry. QZ Engineers serves homes and businesses across all London boroughs.',
};
export const notFoundSeo = {
  title: 'Page not found | QZ Engineers',
  description: 'Browse QZ Engineers services across London, read the guides, or start an enquiry.',
};
export const homeServicesLead = 'Boilers, air conditioning, gas safety, plumbing, hot-water cylinders and underfloor heating — practical engineering for homes and businesses across London.';

export function servicePath(slug: string) {
  return `/services/${slug}`;
}

export function getServiceBySlug(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs.map((slug) => getServiceBySlug(slug)).filter((service): service is Service => Boolean(service));
}

export function getPageMeta(pathname: string) {
  const path = pathname.split('?')[0].replace(/\/+$/, '') || '/';
  if (path === '/') return homeSeo;
  if (path === '/guides') return guidesSeo;
  if (path === '/contact') return contactSeo;
  if (path.startsWith('/services/')) {
    const service = getServiceBySlug(path.slice('/services/'.length));
    if (service) return { title: service.seoTitle, description: service.seoDescription };
  }
  return notFoundSeo;
}

export const prerenderPaths = ['/', ...services.map((service) => servicePath(service.slug)), '/guides', '/contact'];
