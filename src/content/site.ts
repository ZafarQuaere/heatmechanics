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
};

export type Guide = {
  question: string;
  paragraphs: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'boiler-repair-servicing',
    number: '01',
    icon: 'boiler',
    title: 'Boiler repair & servicing',
    tag: 'HEATING',
    summary: 'Gas boiler repair, boiler servicing and heating repairs when the system is not doing its job.',
    seoTitle: 'Gas boiler repair and servicing | HeatMechanics',
    seoDescription: 'Gas boiler repair, boiler servicing and heating repairs for homes and businesses. Tell HeatMechanics what the boiler is doing and we will talk through the next step.',
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
    number: '02',
    icon: 'spark',
    title: 'Boiler installation & replacement',
    tag: 'HEATING',
    summary: 'Boiler installation and boiler replacement, planned around the property and how the heating is used.',
    seoTitle: 'Boiler installation and replacement | HeatMechanics',
    seoDescription: 'Boiler installation and boiler replacement for homes and businesses, planned around the property. This is the boiler itself, not a whole new heating system.',
    headline: 'Boiler installation',
    headlineAccent: 'and replacement.',
    intro: 'HeatMechanics installs and replaces boilers for homes and businesses, planned around the property and the way the heating is used.',
    paragraphs: [
      'A boiler installation puts in the appliance that heats the rooms and, where the system is set up that way, the hot water. We treat it as the heating installation for that boiler, not as a new set of pipes and radiators throughout the building.',
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
        question: 'Is boiler replacement the same as installing a whole heating system?',
        answer: 'No. This service is boiler installation and replacement: the appliance, planned around the property. It is not a separate offer to install every pipe and radiator from scratch.',
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
    title: 'Gas safety checks / CP12',
    tag: 'GAS SAFETY',
    summary: 'Landlord gas safety certificates and gas safety checks for landlords, homes and properties.',
    seoTitle: 'Landlord gas safety certificate | HeatMechanics',
    seoDescription: 'Gas safety checks and CP12 landlord gas safety certificates for landlords, homes and properties. The check is separate from a boiler service or a repair.',
    headline: 'Landlord gas safety',
    headlineAccent: 'checks and CP12.',
    intro: 'HeatMechanics carries out gas safety checks and CP12 certificates for landlords, homes and properties.',
    paragraphs: [
      'A landlord gas safety check looks at the gas appliances and flues the record needs to cover. The completed record is often called a CP12. It is the document used to show that the check has been done.',
      'A home that is not let can still book a gas safety check when you want the appliances looked over. Say whether the property is rented, so we know if you need the landlord record.',
      'This visit is a check and a certificate. It is not a repair by itself. If something needs work, we will explain it. Boiler repair and servicing is booked as its own service, including in the same enquiry if you need both.',
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
    number: '04',
    icon: 'pipe',
    title: 'General plumbing',
    tag: 'PLUMBING',
    summary: 'Everyday plumbing repairs that keep water moving in a home or a business.',
    seoTitle: 'General plumbing repairs | HeatMechanics',
    seoDescription: 'Everyday plumbing repairs for homes and businesses, from leaks to fittings that have stopped working. Boilers, gas appliances and unvented cylinders have their own pages.',
    headline: 'General plumbing',
    headlineAccent: 'repairs.',
    intro: 'Everyday plumbing repairs for homes and businesses, from a fitting that leaks to the pipework that has stopped doing its job.',
    paragraphs: [
      'This service covers taps, leaks, toilets, wastes and other everyday water repairs. Tell us what is leaking, what has stopped, and how long it has been happening.',
      'A boiler, a heating control or a gas appliance is not a plumbing enquiry. Use boiler repair and servicing, or gas safety checks, for those jobs.',
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
        question: 'Do you install radiators as a service of its own?',
        answer: 'Radiator installation is not listed as its own service. If a plumbing or heating fault involves a radiator, describe it and we will say whether it sits with plumbing or with heating repairs.',
      },
      {
        question: 'Is a smell of gas a plumbing job?',
        answer: 'No. Leave the building, avoid switches and flames, and call the National Gas Emergency Service on 0800 111 999. That is the public gas emergency line, not a HeatMechanics number. This site does not offer an emergency call-out.',
      },
      {
        question: 'Can you look at a leaking pipe in a business?',
        answer: 'Yes. General plumbing covers homes and businesses. Catering gas equipment is a different service.',
      },
    ],
    related: ['unvented-cylinder-installation', 'boiler-repair-servicing', 'gas-safety-checks'],
  },
  {
    slug: 'air-conditioning',
    number: '05',
    icon: 'snowflake',
    title: 'Air conditioning installation & servicing',
    tag: 'COOLING',
    summary: 'Air conditioning installation and servicing for homes and businesses.',
    seoTitle: 'Air conditioning installation and servicing | HeatMechanics',
    seoDescription: 'Air conditioning installation and servicing for homes and businesses. Tell HeatMechanics whether you need a new system or help with one that is already fitted.',
    headline: 'Air conditioning',
    headlineAccent: 'installation and servicing.',
    intro: 'Installation and servicing for homes and businesses that need a cooler season.',
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
    number: '06',
    icon: 'cylinder',
    title: 'Unvented cylinder installation (Part G)',
    tag: 'HOT WATER',
    summary: 'Unvented hot-water cylinder installation, with Part G requirements kept in view.',
    seoTitle: 'Unvented cylinder installation | HeatMechanics',
    seoDescription: 'Unvented hot-water cylinder installation with Part G requirements kept in view. For homes and businesses that need mains-pressure hot water.',
    headline: 'Unvented cylinder',
    headlineAccent: 'installation.',
    intro: 'Installation of unvented hot-water cylinders, with the Part G requirements for that work kept in view.',
    paragraphs: [
      'An unvented cylinder stores hot water under mains pressure. It suits a property that needs mains-pressure hot water and has a suitable mains supply.',
      'Part G of the Building Regulations covers hot water safety for this kind of cylinder, including the safety controls the installation needs. HeatMechanics keeps those requirements in view. This page does not quote a personal qualification or a registration number.',
      'The service is the cylinder installation. It is not a general plumbing call-out and it is not a boiler swap, though a cylinder is often discussed alongside the boiler that feeds it. Say if both are part of the same job.',
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
        answer: 'No. Ask for this service rather than general plumbing, so the enquiry is treated as an unvented cylinder installation.',
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
    seoTitle: 'Commercial gas and catering equipment | HeatMechanics',
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
];

export const guides: Guide[] = [
  {
    question: 'What is a CP12?',
    paragraphs: [
      'A CP12 is the everyday name for a landlord gas safety record. It is the certificate produced after a gas safety check of the appliances and flues that the visit covers.',
      'In the UK, a landlord is generally required to have the gas appliances they provide checked at least every 12 months, and to keep a record that can be shown to tenants. HeatMechanics carries out those gas safety checks for landlords, homes and properties. This site does not quote a registration number.',
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
      'Boiler installation and replacement here means the boiler itself, planned around the property. It is not a separate product for installing every pipe and radiator in a whole heating system.',
      'In the enquiry, include the symptoms, the age of the boiler if you know it, and whether the property is a home or a business.',
    ],
    related: ['boiler-repair-servicing', 'boiler-installation-replacement'],
  },
  {
    question: 'What does Part G mean for an unvented cylinder?',
    paragraphs: [
      'An unvented cylinder stores hot water under mains pressure. Installing one has to follow Part G of the Building Regulations, which covers hot water safety for this kind of cylinder, including the safety controls the installation needs.',
      'HeatMechanics lists unvented cylinder installation with those requirements kept in view. It is separate from general plumbing. If a boiler is being replaced at the same time, say so.',
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
      'The form asks for your name, email, postcode, the service, and a short description of the job. Nothing is sent. The form says so again when you submit it. HeatMechanics needs a contact destination connected before an enquiry can be received.',
      'There is no phone number and no stated response time on this site. Include whether the property is a home or a business, and what is happening, so the job is clear once a destination is connected.',
    ],
    related: ['boiler-repair-servicing', 'gas-safety-checks'],
  },
];

export const homeSeo = {
  title: 'HeatMechanics | Gas engineering, heating and air conditioning',
  description: 'HeatMechanics is a gas and heating engineer for homes and businesses. Boiler repair and servicing, boiler installation, gas safety checks, plumbing, air conditioning and commercial gas.',
};

export const guidesSeo = {
  title: 'Guides and common questions | HeatMechanics',
  description: 'Plain answers on CP12 landlord gas safety certificates, boiler servicing, boiler replacement, unvented cylinders and commercial gas work from HeatMechanics.',
};

export const contactSeo = {
  title: 'Request a quote | HeatMechanics',
  description: 'Enquire about boiler repair, servicing, installation, gas safety, plumbing, air conditioning, unvented cylinders or commercial gas. The form does not send until a contact destination is connected.',
};

export const notFoundSeo = {
  title: 'Page not found | HeatMechanics',
  description: 'That page is not on the HeatMechanics site. Browse the services, read the guides, or start an enquiry.',
};

export const homeServicesLead = 'These are the services HeatMechanics carries out: gas boiler repair and boiler servicing, heating repairs, boiler installation and replacement, landlord gas safety certificates (CP12), general plumbing, air conditioning installation and servicing, unvented cylinder installation, and commercial gas and catering equipment. If you are not sure which one fits, describe the job and we will point you to the right page.';

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
