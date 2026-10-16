import { Section, SectionHeading } from './ui'
import RegistrationCard from './RegistrationCard'
import {
  getVerifiedRegistrations,
  getAllRegistrations,
  type RegistrationCredential,
} from '../data/registrations'
import { ShieldAlert, Mail } from 'lucide-react'
import { ORG } from '../data/content'

interface RegistrationsSectionProps {
  id?: string
  className?: string
  background?: 'white' | 'cream'
  /**
   * If true, renders internal review cards with "Verification Pending" badges
   * for organization review without fabricating credentials as public facts.
   */
  previewPendingForReview?: boolean
  /**
   * If true and no credentials are verified yet, renders a transparent institutional
   * compliance notice explaining that certificates are currently under review.
   */
  showTransparencyNoticeIfEmpty?: boolean
}

export default function RegistrationsSection({
  id = 'registrations',
  className = '',
  background = 'cream',
  previewPendingForReview = false,
  showTransparencyNoticeIfEmpty = false,
}: RegistrationsSectionProps) {
  const verifiedList = getVerifiedRegistrations()

  // If verified credentials exist, render the verified credentials grid
  if (verifiedList.length > 0) {
    return (
      <Section id={id} background={background} className={className}>
        <SectionHeading
          title="Registrations & Recognitions"
          subtitle="Explore the registrations, recognitions, and organizational credentials that have been verified and approved for publication by Duaen Foundation NGO."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {verifiedList.map((credential) => (
            <RegistrationCard key={credential.id} credential={credential} />
          ))}
        </div>
      </Section>
    )
  }

  // If preview mode is requested for administrative review of the layout:
  if (previewPendingForReview) {
    const allCredentials = getAllRegistrations()
    return (
      <Section id={id} background={background} className={className}>
        <div className="mb-6 rounded-xl border border-mustard/50 bg-mustard/10 p-4 text-xs text-text-primary">
          <div className="flex items-center gap-2 font-semibold text-navy">
            <ShieldAlert className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
            <span>Administrative Preview — Pending Verification</span>
          </div>
          <p className="mt-1 text-text-secondary leading-relaxed">
            The items below represent credentials currently undergoing verification.
            In public production mode, this section remains hidden until authentic certificates
            and registration references are approved for publication.
          </p>
        </div>

        <SectionHeading
          title="Registrations & Recognitions"
          subtitle="Institutional credential framework prepared for verified publication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {allCredentials.map((credential) => (
            <PendingReviewCard key={credential.id} credential={credential} />
          ))}
        </div>
      </Section>
    )
  }

  // If transparency notice mode is enabled:
  if (showTransparencyNoticeIfEmpty) {
    return (
      <Section id={id} background={background} className={className}>
        <SectionHeading
          title="Registrations & Recognitions"
          subtitle="Commitment to statutory compliance and non-profit governance."
        />

        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-dusty-blue/70 text-navy">
            <ShieldAlert className="h-6 w-6 text-terracotta" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-lg font-bold text-navy sm:text-xl">
            Statutory Verification in Progress
          </h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-text-secondary">
            Duaen Foundation NGO is in the process of auditing and updating its official registration documentation,
            including NITI Aayog NGO Darpan, 12AB non-profit status, and 80G tax exemption records.
            Verified registration references and approved certificates will be published here upon completion of review.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-border">
            <span className="text-xs text-text-secondary">For institutional verification enquiries:</span>
            <a
              href={`mailto:${ORG.email}?subject=Registration%20Verification%20Enquiry`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:underline focus-visible:outline-terracotta break-all"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{ORG.email}</span>
            </a>
          </div>
        </div>
      </Section>
    )
  }

  // Per specification: "If no certificate has yet been verified, build the section's layout
  // and component system but do not populate it with fabricated credentials. Keep it hidden
  // from the production-facing page until authentic information is available."
  return null
}

function PendingReviewCard({ credential }: { credential: RegistrationCredential }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-dashed border-border bg-white/70 p-5 shadow-xs">
      <div>
        <div className="flex h-12 items-center justify-between border-b border-border/50 pb-2">
          <span className="font-heading text-xs font-bold text-text-secondary uppercase">
            Credential Target
          </span>
          <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] font-semibold text-terracotta">
            Verification Pending
          </span>
        </div>
        <div className="mt-3">
          <h3 className="font-heading text-base font-bold text-navy">
            {credential.name}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-text-secondary">
            {credential.issuingAuthority}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-text-secondary">
            {credential.description}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-2 border-t border-border/50 text-[11px] text-text-secondary italic">
        Status: Awaiting official documentation
      </div>
    </article>
  )
}
