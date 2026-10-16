import { useState, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import { NAV_LINKS, ORG } from '../data/content'

function Instagram({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md" role="banner">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-white no-underline"
            aria-label="Duaen Foundation NGO — Home"
            onClick={closeMobileMenu}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-xs transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
              <img
                src="/logo-mark.png"
                alt="Duaen Foundation NGO Emblem"
                className="h-full w-full object-contain"
                width={48}
                height={48}
              />
            </div>
            <div className="hidden min-[480px]:block">
              <div className="font-heading text-base font-bold leading-tight tracking-wide text-white sm:text-lg">
                Duaen Foundation
              </div>
              <div className="text-xs text-dusty-blue leading-tight">
                {ORG.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'text-dusty-blue hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/donate"
              className={`ml-3 inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${
                location.pathname === '/donate'
                  ? 'bg-terracotta-light text-white'
                  : 'bg-terracotta text-white hover:bg-terracotta-light'
              }`}
            >
              Donate
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/donate"
              className="inline-flex items-center rounded-md bg-terracotta px-4 py-2 text-sm font-semibold text-white hover:bg-terracotta-light"
              onClick={closeMobileMenu}
            >
              Donate
            </Link>
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-dusty-blue hover:bg-white/10 hover:text-white"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-navy-dark lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl space-y-1 px-4 pb-4 pt-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'text-dusty-blue hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center gap-4 border-t border-white/10 px-4 pt-4">
              <a
                href={`mailto:${ORG.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-md text-dusty-blue hover:bg-white/10 hover:text-white"
                aria-label="Email Duaen Foundation"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={ORG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md text-dusty-blue hover:bg-white/10 hover:text-white"
                aria-label="Duaen Foundation on Instagram (opens in a new tab)"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
