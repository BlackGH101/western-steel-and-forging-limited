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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-steel/40 bg-graphite/95 backdrop-blur-sm'
          : 'border-transparent bg-graphite/90'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:h-[4.5rem] lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus-visible:outline-offset-4"
          onClick={() => setOpen(false)}
        >
          <img
            src="./logo.jpg"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 object-contain lg:h-10 lg:w-10"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-paper lg:text-xl">
              {company.shortName}
            </span>
            <span className="hidden font-sans text-[0.6875rem] tracking-wide text-slate sm:inline">
              Western Steel &amp; Forgings
            </span>
          </span>
          <span className="sr-only">{company.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={pathFor(link.id)}
              end={link.id === 'home'}
              className={({ isActive }) =>
                `px-2.5 py-1.5 font-sans text-[0.8125rem] tracking-wide transition-colors hover:text-forge ${
                  isActive ? 'text-forge' : 'text-paper/75'
                }`
              }
            >
              {link.label}
            </NavLink>
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
                <NavLink
                  to={pathFor(link.id)}
                  end={link.id === 'home'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-steel/30 py-3 font-sans text-sm transition-colors hover:text-forge ${
                      isActive ? 'text-forge' : 'text-paper/90'
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
