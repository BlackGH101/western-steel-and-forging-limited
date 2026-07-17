import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const
const duration = 0.55

type SectionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className = '', delay = 0 }: SectionRevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
}

export function Stagger({ children, className = '' }: StaggerProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: StaggerProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease },
        },
      }}
      whileHover={{ y: -4, transition: { duration: 0.28, ease } }}
    >
      {children}
    </motion.div>
  )
}
