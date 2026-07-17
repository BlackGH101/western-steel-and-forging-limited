import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company, navLinks } from '../data/content'

function pathFor(id: string) {
  return id === 'home' ? '/' : `/${id}`
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === ''

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const solid = scrolled || open || !isHome

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-320 ${
        solid
          ? 'border-b border-graphite/10 bg-paper/95'
          : 'border-b border-transparent bg-transparent'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:h-[4.5rem] lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus-visible:outline-offset-4"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.jpg"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 object-contain lg:h-10 lg:w-10"
            style={{ borderRadius: 2 }}
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-lg font-semibold tracking-tight lg:text-xl ${
                solid ? 'text-graphite' : 'text-paper'
              }`}
            >
              {company.shortName}
            </span>
            <span className="hidden text-[0.6875rem] tracking-[0.06em] text-slate sm:inline">
              Western Steel &amp; Forgings
            </span>
          </span>
          <span className="sr-only">{company.name}</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={pathFor(link.id)}
              end={link.id === 'home'}
              className={({ isActive }) =>
                `px-2.5 py-1.5 text-[0.6875rem] tracking-[0.08em] uppercase transition-colors duration-320 ${
                  isActive
                    ? 'text-forge'
                    : solid
                      ? 'text-steel hover:text-forge'
                      : 'text-paper/70 hover:text-forge'
                }`
              }
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className={`hidden sm:inline-flex ${solid ? 'btn-primary' : 'btn-ghost-light'}`}
            style={{ padding: '0.55rem 1.1rem' }}
          >
            Contact
          </Link>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center lg:hidden ${
              solid ? 'text-graphite' : 'text-paper'
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-px bg-current transition-transform duration-320 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
              />
              <span className={`block h-px bg-current transition-opacity duration-320 ${open ? 'opacity-0' : ''}`} />
              <span
                className={`block h-px bg-current transition-transform duration-320 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-graphite/10 bg-paper px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={pathFor(link.id)}
                  end={link.id === 'home'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-graphite/8 py-3 text-[0.75rem] tracking-[0.08em] uppercase transition-colors ${
                      isActive ? 'text-forge' : 'text-graphite hover:text-forge'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
