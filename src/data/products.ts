import { siteImages } from './images'

export type ProductArticle = {
  slug: string
  name: string
  description: string
  spec: string
  icon: string
  image: string
  imageAlt: string
  planned?: boolean
  lead: string
  sections: { heading: string; body: string }[]
  highlights: string[]
}

export const products: ProductArticle[] = [
  {
    slug: 'forged-steel-grinding-balls',
    name: 'Forged Steel Grinding Balls',
    description:
      'Produced for gold mines across Ghana and the sub-region, oriented to displace imported forged balls with locally manufactured product of matching quality and shorter lead times.',
    spec: '40mm to 140mm',
    icon: 'ball',
    image: siteImages.productBalls.src,
    imageAlt: siteImages.productBalls.alt,
    lead:
      'WSFL’s forged grinding balls are made at the Tema plant for gold mills that need consistent wear performance and reliable local supply. The line was built so Ghanaian and sub-regional mines could reduce dependence on imported forged media without giving up size range or metallurgical control.',
    sections: [
      {
        heading: 'Built for mining duty',
        body:
          'Grinding balls leave the plant sized from 40mm to 140mm. Smaller diameters are produced on the cross-roll mill from rod stock; larger balls are forged on 1-ton hammers. That split matches how mills charge media for primary and secondary grinding circuits across Ghana’s gold sector.',
      },
      {
        heading: 'From scrap to finished media',
        body:
          'Unusable scrap is melted in Inductotherm induction furnaces, cast, reheated, then rolled or forged into finished balls. The same scrap-to-steel path that defines WSFL’s operating model ends here as attrition media for mines at Obuasi, Tarkwa, and related operations.',
      },
      {
        heading: 'Local supply, import competition',
        body:
          'For years, Western Castings Ltd supplied cast grinding balls to Ghana’s mines. WSFL was established to meet higher volume and quality demand through modern forging. Today the product competes with imported forged balls on lead time, logistics, and specification alignment for West African mills.',
      },
    ],
    highlights: [
      'Sizes 40mm to 140mm',
      'Cross-roll mill up to 1,200 t/mo',
      'Forging mill up to 3,000 t/mo',
      'Serving Ghana and sub-regional gold mines',
    ],
  },
  {
    slug: 'construction-rods',
    name: 'Construction Rods',
    description:
      'Reinforcement rods for Ghana’s building sector, introduced to diversify output, lower unit production cost, and close a gap in local supply.',
    spec: '8mm to 25mm',
    icon: 'rod',
    image: siteImages.productRods.src,
    imageAlt: siteImages.productRods.alt,
    lead:
      'Construction rods from WSFL feed Ghana’s building trade with reinforcement sized for everyday structural work. The STEEFO India rolling mill processes rods from 8mm to 25mm, giving contractors and distributors a domestic source alongside the plant’s mining lines.',
    sections: [
      {
        heading: 'Why rods were added',
        body:
          'The rod line diversifies plant output, lowers unit production cost through fuller mill utilisation, and answers unmet local demand. It sits on the same scrap-fed steel path as grinding media, so capacity investments serve both mining and construction markets.',
      },
      {
        heading: 'Rolling capacity',
        body:
          'The construction-rod mill is rated at up to 8,000 tons per month. Reheating capacity of 6,000 tons per month supports continuous rolling of billets and ingots into finished reinforcement for Ghana’s yards and sites.',
      },
      {
        heading: 'Distribution',
        body:
          'Rods move through construction distributors, including market leader B5 Ltd. That channel complements the mining-heavy customer base and keeps finished steel flowing into the domestic building sector.',
      },
    ],
    highlights: [
      'Diameters 8mm to 25mm',
      'Rolling mill capacity 8,000 t/mo',
      'Domestic construction supply',
      'Distributed via major rod traders',
    ],
  },
  {
    slug: 'industrial-oxygen',
    name: 'Industrial Oxygen',
    description:
      'Produced for on-site steel cutting and sold to industrial and hospital buyers beyond the plant gate.',
    spec: '~2,000 cyl/mo, target 6,000 cyl/mo',
    icon: 'oxygen',
    image: siteImages.productOxygen.src,
    imageAlt: siteImages.productOxygen.alt,
    lead:
      'Industrial oxygen at WSFL starts as a plant necessity for steel cutting and extends as a merchant product for industrial and hospital customers. The Sanghi Oxygen plant from India anchors this line beside the furnace and mill halls.',
    sections: [
      {
        heading: 'On-site and external demand',
        body:
          'Cutting operations inside the Tema works consume oxygen daily. Surplus cylinders are sold outside the gate, turning a process input into a parallel revenue stream without diverting the plant from its core steel mandate.',
      },
      {
        heading: 'Capacity path',
        body:
          'Current output is about 2,000 cylinders per month, with a target capacity of 6,000 cylinders per month as demand and plant utilisation grow. That trajectory mirrors WSFL’s wider pattern of commissioning capacity then ramping to rated load.',
      },
      {
        heading: 'Place in the works',
        body:
          'Oxygen sits among supporting facilities (drum plant, weighbridge, scrap yard, site clinic, admin block) that keep the rolling and forging lines productive and safe.',
      },
    ],
    highlights: [
      'Sanghi Oxygen plant (India)',
      'About 2,000 cylinders per month today',
      'Target 6,000 cylinders per month',
      'Steel cutting plus external sales',
    ],
  },
  {
    slug: 'steel-drums',
    name: 'Steel Drums (205-litre)',
    description:
      'Packaging for steel grinding balls, sized to WSFL’s own outbound needs rather than as a primary merchant product.',
    spec: 'Target ~7,500 barrels/annum',
    icon: 'drum',
    image: siteImages.productDrums.src,
    imageAlt: siteImages.productDrums.alt,
    lead:
      '205-litre steel drums package grinding balls for outbound shipment. The drum plant exists first to serve WSFL’s own logistics: secure, standardised barrels for media leaving Tema for mine sites across Ghana and the sub-region.',
    sections: [
      {
        heading: 'Packaging as process',
        body:
          'Finished balls need durable packing before road transport. 205-litre drums are the plant’s answer, produced on site so packaging capacity tracks grinding-ball output rather than depending on third-party barrel supply.',
      },
      {
        heading: 'Targets and drum plant capacity',
        body:
          'Target production is about 7,500 barrels per annum for internal packaging needs. The drum plant itself is rated at up to 15,000 drums per month, giving headroom as ball shipments grow.',
      },
      {
        heading: 'Role in the product mix',
        body:
          'Drums are not positioned as WSFL’s lead merchant line. They support grinding-ball offtake, completing the chain from scrap melt to media ready for the customer’s mill.',
      },
    ],
    highlights: [
      '205-litre drums',
      'Target ~7,500 barrels per year',
      'Drum plant capacity 15,000/mo',
      'Built for grinding-ball packaging',
    ],
  },
  {
    slug: 'stainless-forgings-tmt-bars',
    name: 'Stainless Steel Forgings & TMT Bars',
    description:
      'Planned post-expansion line: high-tensile reinforcement bars and stainless products aimed at European export markets.',
    spec: 'Post-expansion, export-oriented',
    planned: true,
    icon: 'export',
    image: siteImages.productPlanned.src,
    imageAlt: siteImages.productPlanned.alt,
    lead:
      'Stainless steel forgings and TMT bars are planned for post-expansion. The intent is clear: high-tensile reinforcement and stainless products oriented to European export markets, extending WSFL beyond domestic mining and construction offtake.',
    sections: [
      {
        heading: 'Why this line',
        body:
          'Export-facing stainless and TMT products would diversify revenue, utilise expanded melting and rolling capacity, and place Ghanaian-made steel into markets that demand documented tensile performance and finish quality.',
      },
      {
        heading: 'Status',
        body:
          'This line is planned, not yet in production. Timing follows plant expansion. Until then, WSFL’s active catalogue remains grinding balls, construction rods, industrial oxygen, and packaging drums.',
      },
      {
        heading: 'Continuity with the plant',
        body:
          'Like today’s products, future stainless and TMT output would rest on the same integrated rolling and forging foundation established in Tema in 2004: scrap in, specification-led steel out.',
      },
    ],
    highlights: [
      'Planned post-expansion',
      'High-tensile TMT bars',
      'Stainless steel forgings',
      'Targeted at European export',
    ],
  },
]

export function getProductBySlug(slug: string): ProductArticle | undefined {
  return products.find((p) => p.slug === slug)
}
