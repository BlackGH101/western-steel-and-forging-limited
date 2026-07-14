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
  tagline: "Ghana's integrated steel rolling and forging plant, since 2004",
  founded: 2004,
  location: 'Tema, Ghana',
  email: 'info@wsfl.com.gh',
  address: {
    line1: 'Plot No. F, Kpone Industrial Area',
    line2: 'near West Globe Pone',
    line3: 'P.O. Box AN 6581, Accra-North',
    country: 'Ghana',
  },
}

export const snapshotStats = [
  { label: 'Founded', value: '2004' },
  { label: 'Location', value: 'Tema, Ghana' },
  { label: 'Core products', value: '5' },
  { label: 'Primary market', value: 'W. Africa mining' },
] as const

export const products = [
  {
    name: 'Forged Steel Grinding Balls',
    description:
      'Produced for gold mines across Ghana and the sub-region, oriented to displace imported forged balls with locally manufactured product of matching quality and shorter lead times.',
    spec: '40mm – 140mm',
  },
  {
    name: 'Construction Rods',
    description:
      'Reinforcement rods for Ghana’s building sector — introduced to diversify output, lower unit production cost, and close a gap in local supply.',
    spec: '8mm – 25mm',
  },
  {
    name: 'Industrial Oxygen',
    description:
      'Produced for on-site steel cutting and sold to industrial and hospital buyers beyond the plant gate.',
    spec: '~2,000 cyl/mo · target 6,000 cyl/mo',
  },
  {
    name: 'Steel Drums (205-litre)',
    description:
      'Packaging for steel grinding balls, sized to WSFL’s own outbound needs rather than as a primary merchant product.',
    spec: 'Target ~7,500 barrels/annum',
  },
  {
    name: 'Stainless Steel Forgings & TMT Bars',
    description:
      'Planned post-expansion line: high-tensile reinforcement bars and stainless products aimed at European export markets.',
    spec: 'Post-expansion · export-oriented',
    planned: true,
  },
] as const

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
    capacity: 'Scrap → steel',
  },
] as const

export const supportingFacilities = [
  { name: 'Drum Plant', capacity: '15,000 drums/mo' },
  { name: 'Oxygen Plant', capacity: 'Sanghi Oxygen, India' },
  { name: 'Weighbridge', capacity: '80-ton' },
  { name: 'Site services', capacity: 'Scrap yard · clinic · admin block' },
] as const

export const miningClients = [
  'AngloGold Ashanti — Obuasi, Ayanfuri, Bibiani',
  'Goldfields — Tarkwa',
  'Resolute Amansie Resources Ltd',
  'Abosso Goldfields Ltd',
  'Bogoso Goldfields Ltd',
  'Prestea Goldfields Ltd',
] as const

export const constructionClients = ['B5 Ltd (market leader among rod distributors)'] as const
