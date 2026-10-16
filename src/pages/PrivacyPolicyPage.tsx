import { PageHero, Section } from '../components/ui'
import SeoHead from '../components/SeoHead'
import {
  AlertTriangle,
  FileText,
  Lock,
  Info,
} from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <>
      <SeoHead
        title="Privacy Policy"
        description="Review the draft privacy policy and preliminary data handling principles for the Duaen Foundation NGO prototype website."
        path="/privacy-policy"
      />

      <PageHero
        title="Privacy Policy"
        description="Preliminary data protection principles and prototype privacy statement for Duaen Foundation NGO."
        breadcrumb="Privacy Policy"
      />

      {/* 3. Draft Notice (cream background) */}
      <Section background="cream" className="!py-8 sm:!py-10">
        <div className="rounded-xl border border-border border-l-4 border-l-terracotta bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-navy sm:text-xl">
                Preliminary Notice
              </h2>
              <p className="mt-1 text-sm font-semibold text-terracotta sm:text-base leading-relaxed">
                DRAFT — This privacy policy is a preliminary document prepared for frontend review. It has not been legally approved and must undergo organizational and legal review before production launch.
              </p>
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                Last reviewed: October 2026. This page provides transparency about current prototype operation and outlines the intended data handling framework.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Policy Content (white background) */}
      <Section background="white">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* a) Information We May Collect */}
            <article className="border-b border-border pb-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dusty-blue text-navy font-bold text-sm">
                  1
                </span>
                <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  Information We May Collect (Draft)
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-text-primary text-base leading-relaxed pl-11">
                <p>
                  In a production environment, Duaen Foundation NGO may collect personal information that you voluntarily provide when interacting with our organization. This includes information submitted through contact forms, volunteer expression-of-interest forms, or direct email correspondence.
                </p>
                <p>
                  Typical information requested may include your full name, email address, telephone contact number (if provided), city or area of residence, area of volunteer interest or specific enquiry, and any message details you choose to share.
                </p>
                <div className="rounded-lg border border-mustard/40 bg-mustard/10 p-4 text-sm text-text-primary">
                  <div className="flex items-start gap-2.5">
                    <Info className="h-5 w-5 shrink-0 text-navy mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-navy">Prototype Demonstration Notice: </span>
                      All interactive forms on this website currently operate in demonstration mode only. No personal details, identifiers, or form entries are stored or transmitted.
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* b) How Information Would Be Used */}
            <article className="border-b border-border pb-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dusty-blue text-navy font-bold text-sm">
                  2
                </span>
                <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  How Information Would Be Used (Draft)
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-text-primary text-base leading-relaxed pl-11">
                <p>
                  Any information gathered through organizational channels will be utilized strictly for legitimate non-profit and community purposes, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                  <li>
                    <strong className="text-text-primary">Responding to enquiries:</strong> Addressing questions regarding our programs, Duaen Primary School admissions, healthcare sessions, and community support initiatives.
                  </li>
                  <li>
                    <strong className="text-text-primary">Following up on volunteer interest:</strong> Coordinating with prospective volunteers, college interns, and mentors to organize orientation, scheduling, and project assignments.
                  </li>
                  <li>
                    <strong className="text-text-primary">Organizational communication:</strong> Providing administrative updates, verifying donation queries, or coordinating community assistance events.
                  </li>
                </ul>
                <p>
                  Duaen Foundation NGO does not sell, rent, trade, or monetize personal information with any commercial entity or third-party marketing agency.
                </p>
              </div>
            </article>

            {/* c) Data Minimization */}
            <article className="border-b border-border pb-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dusty-blue text-navy font-bold text-sm">
                  3
                </span>
                <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  Data Minimization (Draft)
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-text-primary text-base leading-relaxed pl-11">
                <p>
                  Our guiding principle is data minimization: we only collect and process the minimal amount of personal information strictly required to respond to your inquiry or coordinate voluntary service.
                </p>
                <p>
                  We do not ask for unneeded personal disclosures, sensitive financial credentials, government identity cards (such as Aadhaar or PAN) through open online forms, or unnecessary background data. Where verification is legally mandated for specific programs, it will be conducted through formal, secured offline or verified channels.
                </p>
              </div>
            </article>

            {/* d) Current Technical Implementation */}
            <article className="border-b border-border pb-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dusty-blue text-navy font-bold text-sm">
                  4
                </span>
                <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  Current Technical Implementation (Draft)
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-text-primary text-base leading-relaxed pl-11">
                <p>
                  This website is currently deployed as a client-side frontend prototype built with React and Tailwind CSS.
                </p>
                <div className="rounded-xl border border-border bg-cream p-5 text-sm text-text-primary">
                  <h3 className="font-heading font-bold text-navy text-base mb-2 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-terracotta" aria-hidden="true" />
                    Technical Prototype Boundary
                  </h3>
                  <ul className="space-y-1.5 list-disc pl-5 text-text-secondary">
                    <li>Forms do not currently transmit, store, or process personal data over the internet.</li>
                    <li>No server-side database, backend API, or third-party data processor is connected.</li>
                    <li>No tracking cookies, marketing beacons, or fingerprinting scripts are active.</li>
                    <li>Form submissions are validated in local component state and display prototype acknowledgments only.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* e) Data Retention */}
            <article className="border-b border-border pb-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dusty-blue text-navy font-bold text-sm">
                  5
                </span>
                <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  Data Retention (Draft)
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-text-primary text-base leading-relaxed pl-11">
                <p>
                  Data retention schedules are to be formally determined by Duaen Foundation organizational policy in accordance with relevant Indian legal and non-profit governance standards before full production launch.
                </p>
                <p>
                  As an overarching guideline, communication records and volunteer contact details will only be retained for the period necessary to complete the corresponding enquiry or active volunteering cycle, after which records will be securely archived or deleted.
                </p>
              </div>
            </article>

            {/* f) Your Rights */}
            <article className="border-b border-border pb-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dusty-blue text-navy font-bold text-sm">
                  6
                </span>
                <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  Your Rights (Draft)
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-text-primary text-base leading-relaxed pl-11">
                <p>
                  Regardless of our organizational status, we respect individual data autonomy and privacy rights. Community members, volunteers, and website visitors have the right to:
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 pt-2">
                  <div className="rounded-lg border border-border bg-white p-4 shadow-xs">
                    <h4 className="font-heading font-bold text-navy text-sm">Right to Access</h4>
                    <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                      Request confirmation of whether we hold personal data relating to you and review a copy of that data.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-white p-4 shadow-xs">
                    <h4 className="font-heading font-bold text-navy text-sm">Right to Correction</h4>
                    <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                      Request the rectification of inaccurate, out-of-date, or incomplete personal details.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-white p-4 shadow-xs">
                    <h4 className="font-heading font-bold text-navy text-sm">Right to Deletion</h4>
                    <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                      Request the removal and deletion of your personal records from our contact registries.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* g) Contact for Privacy Concerns */}
            <article className="border-b border-border pb-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dusty-blue text-navy font-bold text-sm">
                  7
                </span>
                <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  Contact for Privacy Concerns (Draft)
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-text-primary text-base leading-relaxed pl-11">
                <p>
                  If you have questions, feedback, or concerns regarding this preliminary privacy policy or future data handling practices, please contact our team directly:
                </p>
                <div className="rounded-lg border border-border bg-cream p-4">
                  <p className="font-semibold text-navy text-sm">Duaen Foundation NGO Privacy Inquiries</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Email:{' '}
                    <a
                      href="mailto:duaenfoundation@gmail.com"
                      className="font-medium text-navy hover:text-terracotta underline transition-colors focus-visible:outline-terracotta"
                    >
                      duaenfoundation@gmail.com
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Location: Duaen Primary School, D-Block, Ghaziabad, Uttar Pradesh 201003
                  </p>
                </div>
              </div>
            </article>

            {/* h) Policy Updates */}
            <article className="pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dusty-blue text-navy font-bold text-sm">
                  8
                </span>
                <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  Policy Updates (Draft)
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-text-primary text-base leading-relaxed pl-11">
                <p>
                  This policy will be updated when organizational processes are finalized, registered entity documentation is confirmed, and secure backend submission systems are deployed.
                </p>
                <p>
                  Any future revisions will be published on this page with an updated revision date and summary of changes.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {/* 5. Review Notice (dusty-blue background) */}
      <Section background="dusty-blue" className="!py-10 sm:!py-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy shadow-xs mb-4">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
            Legal & Governance Notice
          </h3>
          <p className="mt-3 text-base font-medium text-navy leading-relaxed">
            This document requires organizational and legal review before the website is published. Do not rely on this draft as a legally binding privacy policy.
          </p>
          <p className="mt-2 text-xs text-text-secondary">
            For official administrative information or legal enquiries, contact duaenfoundation@gmail.com.
          </p>
        </div>
      </Section>
    </>
  )
}
