import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1] as const

export function PageTransition() {
  const location = useLocation()
  const reduce = useReducedMotion()

  if (reduce) {
    return <Outlet />
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.38, ease }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}
