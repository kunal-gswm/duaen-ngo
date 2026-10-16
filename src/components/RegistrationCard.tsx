import { ExternalLink, ShieldCheck, FileText } from 'lucide-react'
import type { RegistrationCredential } from '../data/registrations'

interface RegistrationCardProps {
  credential: RegistrationCredential
  className?: string
}

export default function RegistrationCard({
  credential,
  className = '',
}: RegistrationCardProps) {
  const {
    name,
    issuingAuthority,
    description,
    logo,
    registrationReference,
    certificateUrl,
  } = credential

  return (
    <article
      className={`group flex h-full flex-col justify-between rounded-xl border border-border bg-white p-5 shadow-xs transition-all hover:border-navy/30 hover:shadow-sm sm:p-6 ${className}`}
      aria-labelledby={`credential-heading-${credential.id}`}
    >
      <div>
        {/* Top: Logo / Emblem Header */}
        <div className="flex h-14 items-center justify-between border-b border-border/60 pb-3">
          {logo ? (
            <img
              src={logo}
              alt={`${name} official emblem`}
              className="h-10 w-auto max-w-[140px] object-contain"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center gap-2 text-navy">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-dusty-blue/60 text-navy">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="font-heading text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Official Credential
              </span>
            </div>
          )}

          {/* Verification Badge */}
          <span className="inline-flex items-center gap-1 rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-semibold text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
            Verified
          </span>
        </div>

        {/* Content: Title & Authority */}
        <div className="mt-4">
          <h3
            id={`credential-heading-${credential.id}`}
            className="font-heading text-base font-bold text-navy sm:text-lg leading-snug"
          >
            {name}
          </h3>
          <p className="mt-1 text-xs font-medium text-terracotta">
            {issuingAuthority}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-text-secondary sm:text-sm">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom: Reference Number & Certificate Link */}
      <div className="mt-5 pt-3 border-t border-border/60">
        {registrationReference && (
          <div className="mb-2">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
              Registration Ref:
            </span>
            <span className="font-mono text-xs font-bold text-navy">
              {registrationReference}
            </span>
          </div>
        )}

        {certificateUrl ? (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:text-terracotta-dark transition-colors focus-visible:outline-terracotta"
            aria-label={`View certificate for ${name} (opens in a new tab)`}
          >
            <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>View Certificate</span>
            <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-[11px] text-text-secondary/70 italic">
            Certificate on record
          </span>
        )}
      </div>
    </article>
  )
}
