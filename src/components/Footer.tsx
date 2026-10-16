import { Link } from 'react-router-dom'
import { Mail, ExternalLink } from 'lucide-react'
import { ORG, FOOTER_LINKS } from '../data/content'

function Instagram({ className = 'h-4 w-4 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {

  return (
    <footer className="bg-navy text-dusty-blue" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="group inline-block text-white no-underline"
              aria-label="Duaen Foundation NGO — Home"
            >
              <div className="inline-flex rounded-2xl bg-white p-3 shadow-md transition-transform group-hover:scale-102">
                <img
                  src="/logo.png"
                  alt="Duaen Foundation NGO — दुआएं फाउंडेशन एन.जी.ओ."
                  className="h-24 w-auto object-contain sm:h-28"
                  width={280}
                  height={270}
                />
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-dusty-blue/80">
              A social welfare organization working to empower underprivileged
              communities through education, women&apos;s empowerment,
              healthcare awareness, and community support.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-dusty-blue/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <a
                  href={`mailto:${ORG.email}`}
                  className="inline-flex items-center gap-2 text-sm text-dusty-blue/80 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {ORG.email}
                </a>
              </li>
              <li>
                <a
                  href={ORG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-dusty-blue/80 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Instagram
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={ORG.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-dusty-blue/80 transition-colors hover:text-white"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {ORG.website.replace('https://', '')}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-dusty-blue/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-dusty-blue/60">
            &copy; {CURRENT_YEAR} Duaen Foundation NGO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
