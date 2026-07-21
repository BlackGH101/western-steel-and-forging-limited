export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'process', label: 'Process' },
  { id: 'markets', label: 'Markets' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
] as const

export const company = {
  name: 'Western Steel and Forgings Limited',
  shortName: 'WSFL',
  slogan: 'From scrap to strength.',
  tagline: "Ghana's integrated steel rolling and forging plant, since 2004",
  founded: 2004,
  location: 'Tema, Ghana',
  email: 'info@wsflghana.com',
  phone: '',
  address: {
    line1: 'Plot No. F, Kpone Industrial Area',
    line2: 'near West Globe Pone',
    line3: 'P.O. Box AN 6581, Accra-North',
    country: 'Ghana',
  },
  aboutShort:
    'WSFL converts scrap metal into finished steel for Ghana’s gold mines and construction sector, an integrated rolling and forging plant in Tema, built to deliver quality and volume that casting alone could not sustain.',
}

export const snapshotStats = [
  { label: 'Founded', value: '2004', numeric: 2004 },
  { label: 'Location', value: 'Tema, Ghana', numeric: null },
  { label: 'Core products', value: '5', numeric: 5 },
  { label: 'Primary market', value: 'W. Africa mining', numeric: null },
] as const

export const homeStats = [
  { label: 'Years in operation', value: 22, suffix: '+' },
  { label: 'Product lines', value: 5, suffix: '' },
  { label: 'Mining share of customers', value: 60, suffix: '%' },
  { label: 'Plant location', value: 1, suffix: '', display: 'Tema' },
] as const

export const missionVision = {
  mission: {
    title: 'Mission',
    description:
      'Deliver innovative, reliable, and customer-focused solutions that create lasting value while maintaining the highest standards of professionalism, integrity, and excellence.',
  },
  vision: {
    title: 'Vision',
    description:
      'To become a trusted industry leader recognized for innovation, quality service, sustainable growth, and creating meaningful impact across every community we serve.',
  },
} as const

export const coreValues = [
  {
    title: 'Integrity',
    description: 'We uphold honesty, transparency, and ethical business practices.',
  },
  {
    title: 'Excellence',
    description: 'We strive for exceptional quality in everything we do.',
  },
  {
    title: 'Innovation',
    description: 'We embrace creativity and continuous improvement.',
  },
  {
    title: 'Customer Focus',
    description: 'Our clients are at the center of every decision.',
  },
  {
    title: 'Teamwork',
    description: 'We believe collaboration drives success.',
  },
  {
    title: 'Accountability',
    description: 'We take ownership of our actions and commitments.',
  },
] as const

export const whyChooseUs = [
  {
    title: 'Experience',
    description:
      'Operating since 2004 as an integrated rolling and forging plant serving Ghana and the sub-region.',
  },
  {
    title: 'Professional team',
    description:
      'Engineering, production, and commercial teams oriented to mining and construction specifications.',
  },
  {
    title: 'Reliability',
    description:
      'Local manufacture of forged grinding balls and rods, with shorter lead times than import-dependent supply.',
  },
  {
    title: 'Innovation',
    description:
      'Modern induction, rolling, cross-roll, and forging lines converting scrap into finished steel.',
  },
  {
    title: 'Customer satisfaction',
    description:
      'Long-standing relationships with major gold producers and construction-rod distributors.',
  },
  {
    title: 'Quality assurance',
    description:
      'Specification-led products sized and forged for mining attrition and structural reinforcement.',
  },
] as const

export { getProductBySlug, products } from './products'
export type { ProductArticle } from './products'

export const processStages = [
  {
    id: 'induction',
    title: 'Induction Furnace & Ingot Plant',
    detail: 'Two 5-ton Inductotherm induction furnaces melt scrap into castable steel.',
    capacity: '4,000 t/mo',
  },
  {
    id: 'reheat',
    title: 'Re-heating Furnace',
    detail: 'Dual-fired (oil or gas) furnace brings billets and ingots to rolling temperature.',
    capacity: '6,000 t/mo',
  },
  {
    id: 'rolling',
    title: 'Rolling Mill',
    detail: 'STEEFO India mill produces construction rods from 8mm to 25mm.',
    capacity: '8,000 t/mo',
  },
  {
    id: 'crossroll',
    title: 'Cross-Roll Mill',
    detail: 'Russian-developed process converts rods up to 60mm into grinding balls.',
    capacity: '1,200 t/mo',
  },
  {
    id: 'forging',
    title: 'Forging Mill',
    detail: 'Four 1-ton hammers forge balls from 60mm to 140mm for mining duty.',
    capacity: '3,000 t/mo',
  },
  {
    id: 'finished',
    title: 'Finished Products',
    detail: 'Grinding balls and construction rods leave the plant for mines and building sites.',
    capacity: 'Scrap to steel',
  },
] as const

export const supportingFacilities = [
  { name: 'Drum Plant', capacity: '15,000 drums/mo' },
  { name: 'Oxygen Plant', capacity: 'Sanghi Oxygen, India' },
  { name: 'Weighbridge', capacity: '80-ton' },
  { name: 'Site services', capacity: 'Scrap yard, clinic, admin block' },
] as const

export const miningClients = [
  'AngloGold Ashanti (Obuasi, Ayanfuri, Bibiani)',
  'Goldfields (Tarkwa)',
  'Resolute Amansie Resources Ltd',
  'Abosso Goldfields Ltd',
  'Bogoso Goldfields Ltd',
  'Prestea Goldfields Ltd',
] as const

export const constructionClients = ['B5 Ltd (market leader among rod distributors)'] as const

/** Public trust statements, not attributed to named individuals. */
export const trustHighlights = [
  {
    quote:
      'Local forged grinding balls and construction rods, produced to mining and building specifications from an integrated Tema plant.',
    role: 'What we deliver',
    company: 'Mining and construction supply',
  },
  {
    quote:
      'Roughly sixty percent of our customer base is in the mining sector, with relationships built on consistent offtake and measurable product sizes.',
    role: 'Market focus',
    company: 'West African gold producers',
  },
  {
    quote:
      'Scrap converted into finished steel: a circular operating model at the heart of the furnace hall, not a marketing line.',
    role: 'How we work',
    company: 'Circular steel production',
  },
] as const
