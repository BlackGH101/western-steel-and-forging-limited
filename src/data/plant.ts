export const plantCapacity = [
  {
    category: 'Melt and shape',
    items: [
      {
        name: 'Induction furnace & ingot plant',
        detail: 'Two 5-ton Inductotherm furnaces',
        capacity: '4,000 t/mo',
      },
      {
        name: 'Re-heating furnace',
        detail: 'Dual-fired oil or gas',
        capacity: '6,000 t/mo',
      },
      {
        name: 'Rolling mill',
        detail: 'STEEFO India, construction rods 8mm to 25mm',
        capacity: '8,000 t/mo',
      },
      {
        name: 'Cross-roll mill',
        detail: 'Grinding balls up to 60mm from rod stock',
        capacity: '1,200 t/mo',
      },
      {
        name: 'Forging mill',
        detail: 'Four 1-ton hammers, balls 60mm to 140mm',
        capacity: '3,000 t/mo',
      },
    ],
  },
  {
    category: 'Supporting facilities',
    items: [
      { name: 'Drum plant', detail: '205-litre steel drums', capacity: '15,000 drums/mo' },
      { name: 'Oxygen plant', detail: 'Sanghi Oxygen, India', capacity: '~2,000 cyl/mo' },
      { name: 'Weighbridge', detail: 'Inbound scrap and outbound product', capacity: '80-ton' },
      { name: 'Site services', detail: 'Scrap yard, clinic, admin block', capacity: 'On-site' },
    ],
  },
] as const

export const companyTimeline = [
  {
    year: '2004',
    title: 'Plant commissioned',
    detail:
      'WSFL begins operations at Plot F, Kpone Industrial Area, Tema, as an integrated rolling and forging plant for Ghana’s gold mines.',
  },
  {
    year: '2005',
    title: 'Production ramp',
    detail:
      'Output reaches 2,000 tons per month within three months of commissioning, supplying forged grinding balls to major gold producers.',
  },
  {
    year: '2006+',
    title: 'Construction rods',
    detail:
      'Rolling mill line extended to reinforcement rods from 8mm to 25mm, diversifying output for Ghana’s building sector.',
  },
  {
    year: '2010s',
    title: 'Integrated site services',
    detail:
      'Oxygen plant, drum packaging, weighbridge, and scrap yard consolidated on one site to support melt-to-dispatch operations.',
  },
  {
    year: 'Today',
    title: 'Five product lines',
    detail:
      'Grinding balls, construction rods, industrial oxygen, steel drums, and planned post-expansion TMT and stainless forgings for export markets.',
  },
] as const

export const buyerFaq = [
  {
    question: 'What products does WSFL manufacture?',
    answer:
      'Forged steel grinding balls (40mm to 140mm), construction rods (8mm to 25mm), industrial oxygen, 205-litre steel drums, and planned stainless forgings and TMT bars post-expansion.',
  },
  {
    question: 'Who are your main customers?',
    answer:
      'Roughly 60% of the customer base is in mining: AngloGold Ashanti, Goldfields, and other West African gold producers. Construction-rod distributors such as B5 Ltd serve the building trade.',
  },
  {
    question: 'Where is the plant located?',
    answer:
      'Plot No. F, Kpone Industrial Area, near West Globe Pone, Tema, Ghana. The registered office is P.O. Box AN 6581, Accra-North.',
  },
  {
    question: 'How do I request a quote or place an order?',
    answer:
      'Use the product enquiry tool on this page or email info@wsflghana.com with the product line, sizes, estimated volume, and delivery location. Commercial teams respond to offtake and supply enquiries.',
  },
  {
    question: 'Why choose local forged balls over imports?',
    answer:
      'WSFL offers shorter lead times, lower logistics risk, and specification alignment for Ghanaian and sub-regional mills, produced on modern cross-roll and forging lines from the same scrap-to-steel path as construction rods.',
  },
  {
    question: 'Can I visit the plant?',
    answer:
      'Commercial visits can be arranged by writing to info@wsflghana.com with your company name, purpose of visit, and preferred dates.',
  },
] as const

export function buildProductEnquiryMailto(productName: string, spec: string, email: string) {
  const subject = encodeURIComponent(`Supply enquiry: ${productName}`)
  const body = encodeURIComponent(
    `I would like to enquire about supply of ${productName} from WSFL.\n\n` +
      `Specification: ${spec}\n\n` +
      `Quantity required:\n\n` +
      `Delivery location:\n\n` +
      `Company:\n\n` +
      `Contact name and phone:\n`,
  )
  return `mailto:${email}?subject=${subject}&body=${body}`
}
