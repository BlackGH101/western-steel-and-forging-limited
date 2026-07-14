import { Link } from 'react-router-dom'
import { company, navLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-steel/50 bg-graphite text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="./logo.jpg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-xl font-semibold tracking-tight">{company.shortName}</span>
            <span className="sr-only">{company.name}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate">
            {company.name}
            <br />
            Integrated steel rolling and forging · Tema, Ghana
          </p>
        </div>

        <div>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-slate">
            Registered office
          </p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-paper/85">
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            {company.address.line3}
            <br />
            {company.address.country}
          </address>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-slate">
            Navigate
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/${link.id === 'home' ? '' : link.id}`}
                  className="text-paper/80 transition-colors hover:text-forge"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-steel/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-slate sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            <span className="stat-mono">© {new Date().getFullYear()}</span> {company.name}
          </p>
          <p>Established <span className="stat-mono">2004</span> · Kpone Industrial Area</p>
        </div>
      </div>
    </footer>
  )
}
