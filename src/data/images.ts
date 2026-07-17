/**
 * Single source of truth — each image is assigned to exactly one placement
 * (logo may appear in header + footer as brand chrome).
 */
export const siteImages = {
  hero: {
    src: './images/steel-structure.jpg',
    alt: 'Heavy steel structural members in an industrial setting',
  },
  homeAbout: {
    src: './images/furnace.jpg',
    alt: 'High-temperature industrial furnace with glowing steel heat',
  },
  productsBanner: {
    src: './images/metal-finishing.jpg',
    alt: 'Worker finishing metal with protective gloves and sparks',
  },
  productBalls: {
    src: './images/forged-steel-grinding-balls.jpg',
    alt: 'Forged steel grinding balls for gold mining',
  },
  productRods: {
    src: './images/construction-rods.jpg',
    alt: 'Worker securing steel reinforcement rods on a construction site',
  },
  productOxygen: {
    src: './images/arc-welding.jpg',
    alt: 'Arc welding on a steel construction site with bright sparks',
  },
  productDrums: {
    src: './images/hero-mill.jpg',
    alt: 'Industrial steel mill with molten metal pour and heavy rolling equipment',
  },
  productPlanned: {
    src: './images/plant-floor.jpg',
    alt: 'Engineer at a precision workstation on an industrial plant floor',
  },
  process: {
    src: './images/metallurgy-collage.jpg',
    alt: 'Illustrated overview of metallurgical plant production stages',
  },
  about: {
    src: './images/metallurgy-composition.jpg',
    alt: 'Illustrated composition of steel production and foundry work',
  },
  markets: {
    src: './images/steel-process.jpg',
    alt: 'Illustrated metallurgical plant, workers, and finished steel products',
  },
  leadership: {
    src: './images/team-collaboration.jpg',
    alt: 'Team collaborating across industrial and professional roles',
  },
} as const
