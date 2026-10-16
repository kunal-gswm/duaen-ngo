import {
  Heart,
  Mail,
  Info,
  Shield,
  BookOpen,
  Scissors,
  Stethoscope,
  Package,
  ArrowRight,
  CheckCircle,
  FileText,
  Clock,
} from 'lucide-react'
import { PageHero, Section, SectionHeading, ButtonLink } from '../components/ui'
import SeoHead from '../components/SeoHead'
import { ORG } from '../data/content'

export default function DonatePage() {
  return (
    <>
      <SeoHead
        title="Donate & Support"
        description="Learn how community support aids education at Duaen Primary School, women's vocational training, healthcare camps, and social welfare in Ghaziabad."
        path="/donate"
      />

      <PageHero
        title="Support Our Work"
        description="Your support sustains grassroots initiatives in education, vocational training, healthcare awareness, and community welfare across Ghaziabad."
        breadcrumb="Donate"
      />

      {/* 1. Why Support Section */}
      <Section background="cream">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            title="Why Your Support Matters"
            subtitle="Grassroots initiatives thrive when community members come together with empathy and collective responsibility."
            centered
          />

          <div className="rounded-xl border border-border bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
            <p className="text-base sm:text-lg text-text-primary leading-relaxed">
              Duaen Foundation NGO works on the ground in Ghaziabad to uplift
              underprivileged families and children facing systemic barriers.
              Support from individuals, community champions, and partner
              institutions directly reinforces vital social programs:
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream text-terracotta">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-navy">
                    Free Primary Education
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    Supporting Duaen Primary School, where children receive
                    foundational learning, books, and interactive instruction
                    from dedicated interns and volunteers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dusty-blue text-navy">
                  <Scissors className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-navy">
                    Women&apos;s Skill Development
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    Powering the sewing centre and tailoring workshops that
                    equip women with practical vocational capabilities for
                    sustainable self-reliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream text-terracotta">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-navy">
                    Healthcare &amp; Awareness
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    Facilitating medical checkup camps, basic first-aid training,
                    and life-saving CPR awareness sessions in collaboration
                    with qualified health professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dusty-blue text-navy">
                  <Package className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-navy">
                    Community Social Welfare
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    Assisting families in vulnerable situations through ration
                    kits, clothing assistance, and community welfare drives.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-cream/60 p-4 border border-border">
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="font-semibold text-navy">Community Commitment:</span>{' '}
                Our focus is the meaningful, dignified empowerment of community
                members. We treat all contributions with earnest responsibility
                and dedicated stewardship.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. How Your Support Helps */}
      <Section background="white">
        <SectionHeading
          title="How Your Support Helps"
          subtitle="Essential resources and material supplies that sustain daily learning, health, and welfare."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-terracotta">
              <BookOpen className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-navy">
              School Supplies
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Foundational textbooks, writing notebooks, geometry kits, crayons,
              blackboard chalks, and learning charts for primary students
              attending Duaen Primary School.
            </p>
            <div className="mt-auto pt-4 border-t border-border/60">
              <span className="text-xs font-semibold text-terracotta uppercase tracking-wider">
                Education Materials
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-dusty-blue text-navy">
              <Scissors className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-navy">
              Training Materials
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Sewing machines, practice textile rolls, threads, measuring
              tapes, tailoring scissors, and craft equipment for women enrolled
              in vocational training courses.
            </p>
            <div className="mt-auto pt-4 border-t border-border/60">
              <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                Vocational Equipment
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-terracotta">
              <Stethoscope className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-navy">
              Healthcare Camps
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Basic health diagnostic consumables, first-aid training kits, CPR
              demonstration tools, and printed public hygiene and nutrition
              guidelines for community awareness.
            </p>
            <div className="mt-auto pt-4 border-t border-border/60">
              <span className="text-xs font-semibold text-terracotta uppercase tracking-wider">
                Preventive Health
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-xs transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-dusty-blue text-navy">
              <Package className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-navy">
              Community Essentials
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Essential dry ration staples (flour, pulses, oil), warm winter
              blankets, protective garments, and basic necessities distributed to
              underprivileged households.
            </p>
            <div className="mt-auto pt-4 border-t border-border/60">
              <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                Social Welfare
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Key Section: Donation Information */}
      <Section background="dusty-blue" id="donation-information">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Donation Information"
            subtitle="Important update regarding official payment methods and community contributions."
            centered
          />

          {/* Prominent, intentional notice card */}
          <div className="overflow-hidden rounded-2xl border-2 border-border bg-white shadow-md">
            {/* Card Header Banner */}
            <div className="bg-navy px-6 py-4 sm:px-8 text-white flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <Info className="h-5 w-5 text-mustard" aria-hidden="true" />
                <span className="font-heading text-base font-bold">
                  Official Contribution Notice
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Details Under Finalization
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-terracotta mb-5">
                  <Shield className="h-8 w-8" aria-hidden="true" />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy">
                  Official donation details are being finalized
                </h3>

                <p className="mt-3 text-base text-text-secondary max-w-xl leading-relaxed">
                  UPI ID and donation QR code are pending. To guarantee
                  authenticity and proper accounting, we do not provide
                  automated or provisional payment options on this portal.
                </p>

                {/* Status Box */}
                <div className="mt-6 w-full rounded-xl border border-border bg-cream/50 p-5 text-left">
                  <h4 className="font-heading text-sm font-bold text-navy flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-terracotta" aria-hidden="true" />
                    How to support at this stage:
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-text-secondary" role="list">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-terracotta">•</span>
                      <span>
                        <strong className="text-navy">Direct Enquiry:</strong>{' '}
                        Please contact us directly for verified payment information.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-terracotta">•</span>
                      <span>
                        <strong className="text-navy">In-Kind Donations:</strong>{' '}
                        Educational materials, books, and fabric supplies can be
                        coordinated through our Ghaziabad centre.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-terracotta">•</span>
                      <span>
                        <strong className="text-navy">Verification:</strong>{' '}
                        Our coordinators will directly assist you with official
                        documentation and payment clearance instructions.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Direct Action Area */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                  <a
                    href={`mailto:${ORG.email}?subject=Official%20Donation%20Information%20Enquiry`}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-terracotta px-6 py-3 text-base font-semibold text-white shadow-xs transition-colors hover:bg-terracotta-light focus:outline-none focus:ring-2 focus:ring-terracotta"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    <span>Contact via {ORG.email}</span>
                  </a>

                  <ButtonLink
                    to="/contact"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Send an Enquiry Online
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Transparency Note */}
      <Section background="white">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-border bg-cream/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-navy">
                  Commitment to Institutional Transparency
                </h3>
                <p className="mt-2 text-sm sm:text-base text-text-secondary leading-relaxed">
                  Registration details and relevant certificates are being
                  verified. We are committed to transparency in how support is
                  utilized, ensuring that every initiative adheres to high
                  standards of accountability, integrity, and ethical public
                  service.
                </p>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  If you require organizational records, activity summaries, or
                  documentation prior to offering institutional support, our team
                  will gladly connect with you.
                </p>
                <div className="mt-5">
                  <ButtonLink
                    to="/contact"
                    variant="secondary"
                    className="text-xs sm:text-sm py-2 px-4"
                  >
                    <span>Request Documentation &amp; Information</span>
                    <ArrowRight className="ml-2 h-3.5 w-3.5 inline" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Contact CTA */}
      <Section background="navy">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-mustard">
            <Heart className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Contact Us for Official Donation Information
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-dusty-blue/90 leading-relaxed">
            Connect directly with our team to obtain verified payment details,
            coordinate material deliveries, or learn more about our ongoing
            welfare programs in Ghaziabad.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink to="/contact" variant="primary">
              <span>Go to Contact Page</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              to={`mailto:${ORG.email}?subject=Donation%20Enquiry%20-%20Duaen%20Foundation`}
              variant="outline-light"
              external
            >
              <Mail className="mr-2 h-4 w-4 inline" aria-hidden="true" />
              <span>Email {ORG.email}</span>
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
