import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, navLinks, products } from '../data/content'
import { IconArrow } from './Icons'

export function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="border-t border-forge/20 bg-graphite text-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
                style={{ borderRadius: 2 }}
              />
              <span className="font-display text-xl font-semibold tracking-tight">
                {company.shortName}
              </span>
              <span className="sr-only">{company.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              <span className="font-display text-forge">{company.slogan}</span>
              <br />
              {company.name}. Integrated steel rolling and forging, Tema, Ghana.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-forge">
              Quick links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`/${link.id === 'home' ? '' : link.id}`}
                    className="text-paper/75 transition-colors duration-320 hover:text-forge"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-forge">
              Products
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.slice(0, 4).map((p) => (
                <li key={p.name}>
                  <Link
                    to="/products"
                    className="text-paper/75 transition-colors duration-320 hover:text-forge"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-forge">
              Contact
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-paper/75">
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.line3}
              <br />
              {company.address.country}
            </address>
            <a href={`mailto:${company.email}`} className="btn-text-light mt-5">
              {company.email}
              <IconArrow />
            </a>
          </div>
        </div>

        <div className="border-t border-forge/15">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-slate sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>
              <span className="stat-mono">© {new Date().getFullYear()}</span> {company.name}
            </p>
            <p>
              Established <span className="stat-mono">2004</span>, Kpone Industrial Area
            </p>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          className="fixed right-5 bottom-5 z-40 flex h-10 w-10 items-center justify-center border border-forge bg-graphite text-forge transition-colors duration-320 hover:bg-transparent focus-visible:outline-offset-4 sm:right-8 sm:bottom-8"
          style={{ borderRadius: 3 }}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M8 12.5V3.5M4.5 7 8 3.5 11.5 7"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  )
}
