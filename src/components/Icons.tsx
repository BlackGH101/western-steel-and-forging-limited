/** Thin-stroke editorial line icons — typographic accents, not illustrations */

type IconProps = { className?: string }

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Mission — horizon with a single focal point */
export function IconTarget({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
      <path d="M4 12h16" />
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 5.5V8.5M12 15.5v3" />
    </svg>
  )
}

/** Vision — open frame / far line */
export function IconEye({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
      <path d="M3 12c2.8-4.2 6.2-6.2 9-6.2S18.2 7.8 21 12c-2.8 4.2-6.2 6.2-9 6.2S5.8 16.2 3 12Z" />
      <circle cx="12" cy="12" r="2.25" />
    </svg>
  )
}

/** Integrity — balance upright */
export function IconShield({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
      <path d="M12 4v16" />
      <path d="M7 9h10" />
      <path d="M8 9 5.5 14.5M16 9l2.5 5.5" />
      <path d="M4.5 14.5h4M15.5 14.5h4" />
    </svg>
  )
}

/** Excellence — thin diamond */
export function IconStar({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
      <path d="M12 4.5 18.5 12 12 19.5 5.5 12 12 4.5Z" />
    </svg>
  )
}

/** Innovation — unfolding corner */
export function IconSpark({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
      <path d="M7 17V7h10" />
      <path d="M7 17h10V11" />
      <path d="M11 7h6v6" />
    </svg>
  )
}

/** Customer / people — two restrained figures */
export function IconUsers({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
      <circle cx="9" cy="8" r="2.25" />
      <path d="M4.5 18c0-2.3 2-4.15 4.5-4.15S13.5 15.7 13.5 18" />
      <circle cx="16.5" cy="9" r="1.75" />
      <path d="M14.2 18c.25-1.55 1.5-2.75 3.3-2.9" />
    </svg>
  )
}

/** Accountability — ruled square */
export function IconCheck({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
      <rect x="5" y="5" width="14" height="14" rx="0.5" />
      <path d="M8 12h8M8 15.5h5" />
    </svg>
  )
}

/** Experience — thin clock arc */
export function IconClock({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
      <circle cx="12" cy="12" r="7.25" />
      <path d="M12 8.25V12l2.75 1.75" />
    </svg>
  )
}

/** Editorial arrow — fine chevron */
export function IconArrow({ className = 'h-3 w-3' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden {...stroke} strokeWidth={1.2}>
      <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

/** Product marks — modest geometric line art */
export function IconProduct({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  switch (name) {
    case 'ball':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <circle cx="12" cy="12" r="7" />
          <path d="M5.5 12h13" opacity=".55" />
          <path d="M12 5.5c2.2 2.2 2.2 8.8 0 11M12 5.5c-2.2 2.2-2.2 8.8 0 11" opacity=".45" />
        </svg>
      )
    case 'rod':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M5 17 17 5" />
          <path d="M8 19 19 8" opacity=".55" />
        </svg>
      )
    case 'oxygen':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <rect x="9" y="5" width="6" height="14" rx="0.5" />
          <path d="M11 5V3.5h2V5M10.5 10h3M10.5 13h3" />
        </svg>
      )
    case 'drum':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <ellipse cx="12" cy="6.5" rx="5.5" ry="2" />
          <path d="M6.5 6.5v10c0 1.15 2.45 2.1 5.5 2.1s5.5-.95 5.5-2.1v-10" />
          <path d="M6.5 12c0 1.15 2.45 2.1 5.5 2.1s5.5-.95 5.5-2.1" />
        </svg>
      )
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...stroke}>
          <path d="M6 17.5V8l6-3 6 3v9.5l-6 3-6-3Z" />
          <path d="M6 8l6 3 6-3M12 11v9.5" opacity=".55" />
        </svg>
      )
  }
}

export const valueIcons = [IconShield, IconStar, IconSpark, IconUsers, IconUsers, IconCheck] as const
export const whyIcons = [IconClock, IconUsers, IconShield, IconSpark, IconStar, IconCheck] as const
