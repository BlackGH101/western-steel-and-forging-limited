import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { company, navLinks } from '../data/content'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const headerOffset = 72
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    const id = location.pathname.replace(/^\//, '') || 'home'
    // Allow layout to paint before scroll
    requestAnimationFrame(() => scrollToId(id))
  }, [location])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-steel/40 bg-graphite/95 backdrop-blur-sm'
          : 'border-transparent bg-graphite/80'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:h-[4.5rem] lg:px-8">
        <Link
          to="/"
          className="group flex items-baseline gap-2 focus-visible:outline-offset-4"
          onClick={() => scrollToId('home')}
        >
          <span className="font-display text-lg font-semibold tracking-tight text-paper lg:text-xl">
            {company.shortName}
          </span>
          <span className="hidden font-sans text-xs tracking-wide text-slate sm:inline">
            Western Steel &amp; Forgings
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`/${link.id === 'home' ? '' : link.id}`}
              className="px-2.5 py-1.5 font-sans text-[0.8125rem] tracking-wide text-paper/75 transition-colors hover:text-forge"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-px bg-current transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
            />
            <span className={`block h-px bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-px bg-current transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-steel/40 bg-graphite px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/${link.id === 'home' ? '' : link.id}`}
                  className="block border-b border-steel/30 py-3 font-sans text-sm text-paper/90 hover:text-forge"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
