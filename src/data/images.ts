/**
 * Single source of truth — each image is assigned to exactly one placement
 * (logo may appear in header + footer as brand chrome).
 * Paths are root-absolute so they resolve on nested routes (e.g. /products/:slug).
 */
export const siteImages = {
  hero: {
    src: '/images/steel-structure.jpg',
    alt: 'Heavy steel structural members in an industrial setting',
  },
  homeAbout: {
    src: '/images/furnace.jpg',
    alt: 'High-temperature industrial furnace with glowing steel heat',
  },
  homeProcess: {
    src: '/images/image2.jpg',
    alt: 'Hot steel beams glowing on the rolling mill line',
  },
  productsBanner: {
    src: '/images/metal-finishing.jpg',
    alt: 'Worker finishing metal with protective gloves and sparks',
  },
  productBalls: {
    src: '/images/forged-steel-grinding-balls.jpg',
    alt: 'Forged steel grinding balls for gold mining',
  },
  productRods: {
    src: '/images/shutterstock_1122707477.jpg',
    alt: 'Stacked steel reinforcement bars on a construction site',
  },
  productOxygen: {
    src: '/images/steel-pipelines-cables-plant.jpg',
    alt: 'Steel pipelines and cable runs across an industrial plant',
  },
  productDrums: {
    src: '/images/steel-drum.jpg',
    alt: 'Industrial steel drum for product storage and transport',
  },
  productPlanned: {
    src: '/images/tmt-bars.jpg',
    alt: 'High-tensile TMT reinforcement bars',
  },
  process: {
    src: '/images/metallurgy-collage.jpg',
    alt: 'Illustrated overview of metallurgical plant production stages',
  },
  about: {
    src: '/images/metallurgy-composition.jpg',
    alt: 'Illustrated composition of steel production and foundry work',
  },
  markets: {
    src: '/images/image4.jpg',
    alt: 'Chart of global steel use by sector, led by building and infrastructure',
  },
  leadership: {
    src: '/images/team-collaboration.jpg',
    alt: 'Team collaborating across industrial and professional roles',
  },
} as const
