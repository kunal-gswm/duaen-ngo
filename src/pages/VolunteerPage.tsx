import { useState, useId, type FormEvent, type ChangeEvent } from 'react'
import {
  GraduationCap,
  Users,
  Stethoscope,
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  HeartHandshake,
  Mail,
  ArrowRight,
  Info,
} from 'lucide-react'
import { PageHero, Section, SectionHeading, ButtonLink } from '../components/ui'
import SeoHead from '../components/SeoHead'
import { ORG } from '../data/content'

interface FormState {
  fullName: string
  email: string
  areaOfInterest: string
  availability: string
  message: string
  consent: boolean
}

interface FormErrors {
  fullName?: string
  email?: string
  areaOfInterest?: string
  availability?: string
  consent?: string
}

const INITIAL_FORM_STATE: FormState = {
  fullName: '',
  email: '',
  areaOfInterest: '',
  availability: '',
  message: '',
  consent: false,
}

const INTEREST_OPTIONS = [
  'Teaching & Education',
  "Women's Empowerment Programs",
  'Healthcare Awareness',
  'Community Welfare',
  'Computer Education',
  'Event Coordination',
  'Other',
] as const

const AVAILABILITY_OPTIONS = [
  'Weekdays',
  'Weekends',
  'Both',
  'Flexible',
] as const

export default function VolunteerPage() {
  const formId = useId()
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error for the current field as user types or modifies
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = 'Please provide a valid email address (e.g. name@example.com).'
    }

    if (!formData.areaOfInterest) {
      newErrors.areaOfInterest = 'Please select your preferred area of interest.'
    }

    if (!formData.availability) {
      newErrors.availability = 'Please select your availability.'
    }

    if (!formData.consent) {
      newErrors.consent =
        'You must acknowledge and consent to the expression of interest statement.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValid = validate()
    if (!isValid) {
      // Focus on first error element for keyboard accessibility
      const firstErrorField = Object.keys(errors)[0]
      if (firstErrorField) {
        const el = document.getElementById(`${formId}-${firstErrorField}`)
        el?.focus()
      }
      return
    }

    // Pure frontend handling: show success state, no remote transmission or storage
    setIsSubmitted(true)
  }

  const handleResetForm = () => {
    setFormData(INITIAL_FORM_STATE)
    setErrors({})
    setIsSubmitted(false)
  }

  return (
    <>
      <SeoHead
        title="Volunteer & Careers"
        description="Volunteer with Duaen Foundation NGO in Ghaziabad. Join college students and community volunteers in teaching, healthcare awareness, and social welfare programs."
        path="/volunteer"
      />

      <PageHero
        title="Volunteer With Us"
        description="Join college students, working professionals, and community volunteers dedicating time and care to uplift children and families across Ghaziabad."
        breadcrumb="Volunteer"
      />

      {/* 1. Introduction Section */}
      <Section background="cream">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
            <HeartHandshake className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
            Lending Hands, Nurturing Futures
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Volunteering at Duaen Foundation NGO is grounded in grassroots
            engagement. College students, interns, and community members
            regularly participate in teaching at Duaen Primary School and
            assisting in outreach drives across Ghaziabad.
          </p>
          <p className="mt-4 text-base text-text-secondary leading-relaxed">
            Whether you can commit a few hours on weekends or assist with weekly
            tutoring and workshop support, your dedication brings invaluable
            encouragement to young learners and local families.
          </p>
        </div>
      </Section>

      {/* 2. Ways to Contribute */}
      <Section background="white">
        <SectionHeading
          title="Ways to Contribute"
          subtitle="Explore the diverse avenues through which you can share your knowledge, time, and skills."
          centered
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contribution 1 */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 sm:p-8 shadow-xs transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-dusty-blue text-navy">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy">
              Teaching &amp; Education Support
            </h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Support classroom activities and mentorship at Duaen Primary
              School in Ghaziabad. Volunteers and student interns help children
              up to Class 5 build foundational skills in reading, mathematics,
              basic English, and creative arts.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary" role="list">
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Foundational literacy and basic numeracy tutoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Storytelling, art, and creative expression sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Homework assistance and interactive learning games</span>
              </li>
            </ul>
          </div>

          {/* Contribution 2 */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 sm:p-8 shadow-xs transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-terracotta">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy">
              Program &amp; Community Activity Assistance
            </h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Lend active support to community welfare initiatives. From
              organizing ration kits and clothing drives to assisting in the
              vocational sewing centre and digital literacy classes, volunteers
              keep ground programs running smoothly.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary" role="list">
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Ration distribution and clothing drive logistics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Assisting with women&apos;s vocational training programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Supporting introductory computer and digital skills</span>
              </li>
            </ul>
          </div>

          {/* Contribution 3 */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 sm:p-8 shadow-xs transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-dusty-blue text-navy">
              <Stethoscope className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy">
              Healthcare Awareness Support
            </h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Help conduct community medical camps, first-aid and CPR
              demonstrations, and hygiene awareness campaigns organized in
              collaboration with healthcare professionals and institutional
              partners.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary" role="list">
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Registration and attendee guidance at health camps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Assisting trainers during first-aid and CPR sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Distributing informational hygiene and nutrition pamphlets</span>
              </li>
            </ul>
          </div>

          {/* Contribution 4 */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 sm:p-8 shadow-xs transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-terracotta">
              <CalendarCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-navy">
              Event Coordination
            </h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Coordinate special school days, annual celebrations, awareness
              walks, and interactive guest workshops. Event volunteers bring
              creativity and operational structure to ensure memorable experiences.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary" role="list">
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Planning children&apos;s cultural and sports activities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Logistics, photography, and documentation support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-terracotta">•</span>
                <span>Crowd management and safety during large community events</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. Volunteer Interest Form */}
      <Section background="dusty-blue" id="interest-form">
        <SectionHeading
          title="Volunteer Interest Form"
          subtitle="Let us know how you would like to participate. Share your interests and availability with our team."
          centered
        />

        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-border bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            {isSubmitted ? (
              <div
                className="py-6 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy">
                  Thank You for Your Interest!
                </h3>
                <div className="mt-4 rounded-lg bg-cream p-4 text-left border border-border">
                  <p className="text-sm font-semibold text-navy">
                    Submission Demonstration Notice:
                  </p>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    Thank you for your interest! This is a demonstration form.
                    In the production version, your information would be sent
                    to the Duaen Foundation team.
                  </p>
                </div>
                <p className="mt-5 text-sm text-text-secondary leading-relaxed">
                  To contact the foundation directly regarding volunteering or
                  internships, please write to us at{' '}
                  <a
                    href={`mailto:${ORG.email}`}
                    className="font-semibold text-terracotta hover:underline break-all"
                  >
                    {ORG.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                >
                  Submit Another Expression
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Volunteer Expression of Interest Form"
                className="space-y-6"
              >
                {/* Prototype Notice */}
                <div className="flex items-start gap-3 rounded-lg bg-cream p-4 border border-border">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <span className="font-semibold text-navy">Prototype Note:</span>{' '}
                    This form is part of a frontend prototype. A submission
                    mechanism must be configured before production use.
                  </p>
                </div>

                {/* Accessible Error Summary if errors exist */}
                {Object.keys(errors).length > 0 && (
                  <div
                    role="alert"
                    aria-label="Form validation errors"
                    className="rounded-lg border border-red-200 bg-red-50 p-4"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-red-800">
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0" aria-hidden="true" />
                      <span>Please correct the errors indicated below to continue:</span>
                    </div>
                    <ul className="mt-2 list-inside list-disc text-xs text-red-700 space-y-1">
                      {errors.fullName && <li>{errors.fullName}</li>}
                      {errors.email && <li>{errors.email}</li>}
                      {errors.areaOfInterest && <li>{errors.areaOfInterest}</li>}
                      {errors.availability && <li>{errors.availability}</li>}
                      {errors.consent && <li>{errors.consent}</li>}
                    </ul>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label
                    htmlFor={`${formId}-fullName`}
                    className="block text-sm font-semibold text-navy"
                  >
                    Full Name <span className="text-terracotta" aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="text"
                    id={`${formId}-fullName`}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={
                      errors.fullName ? `${formId}-fullName-error` : undefined
                    }
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-text-primary transition-colors focus:outline-none ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
                        : 'border-border focus:border-terracotta focus:ring-2 focus:ring-terracotta/20'
                    }`}
                    placeholder="e.g. Ananya Sharma"
                  />
                  {errors.fullName && (
                    <p
                      id={`${formId}-fullName-error`}
                      className="mt-1.5 text-xs font-medium text-red-600"
                      role="alert"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="block text-sm font-semibold text-navy"
                  >
                    Email Address <span className="text-terracotta" aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="email"
                    id={`${formId}-email`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? `${formId}-email-error` : undefined
                    }
                    className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-text-primary transition-colors focus:outline-none ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
                        : 'border-border focus:border-terracotta focus:ring-2 focus:ring-terracotta/20'
                    }`}
                    placeholder="e.g. ananya@example.com"
                  />
                  {errors.email && (
                    <p
                      id={`${formId}-email-error`}
                      className="mt-1.5 text-xs font-medium text-red-600"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Area of Interest */}
                <div>
                  <label
                    htmlFor={`${formId}-areaOfInterest`}
                    className="block text-sm font-semibold text-navy"
                  >
                    Area of Interest <span className="text-terracotta" aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <select
                    id={`${formId}-areaOfInterest`}
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.areaOfInterest)}
                    aria-describedby={
                      errors.areaOfInterest
                        ? `${formId}-areaOfInterest-error`
                        : undefined
                    }
                    className={`mt-1.5 block w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-text-primary transition-colors focus:outline-none ${
                      errors.areaOfInterest
                        ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
                        : 'border-border focus:border-terracotta focus:ring-2 focus:ring-terracotta/20'
                    }`}
                  >
                    <option value="">Select your area of interest</option>
                    {INTEREST_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.areaOfInterest && (
                    <p
                      id={`${formId}-areaOfInterest-error`}
                      className="mt-1.5 text-xs font-medium text-red-600"
                      role="alert"
                    >
                      {errors.areaOfInterest}
                    </p>
                  )}
                </div>

                {/* Availability */}
                <div>
                  <label
                    htmlFor={`${formId}-availability`}
                    className="block text-sm font-semibold text-navy"
                  >
                    Availability <span className="text-terracotta" aria-hidden="true">*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <select
                    id={`${formId}-availability`}
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.availability)}
                    aria-describedby={
                      errors.availability
                        ? `${formId}-availability-error`
                        : undefined
                    }
                    className={`mt-1.5 block w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-text-primary transition-colors focus:outline-none ${
                      errors.availability
                        ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
                        : 'border-border focus:border-terracotta focus:ring-2 focus:ring-terracotta/20'
                    }`}
                  >
                    <option value="">Select your availability</option>
                    {AVAILABILITY_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.availability && (
                    <p
                      id={`${formId}-availability-error`}
                      className="mt-1.5 text-xs font-medium text-red-600"
                      role="alert"
                    >
                      {errors.availability}
                    </p>
                  )}
                </div>

                {/* Message (Optional) */}
                <div>
                  <label
                    htmlFor={`${formId}-message`}
                    className="block text-sm font-semibold text-navy"
                  >
                    Message or Relevant Experience{' '}
                    <span className="text-xs font-normal text-text-secondary">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-md border border-border px-3.5 py-2.5 text-sm text-text-primary transition-colors focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                    placeholder="Share any past volunteering background, specialized skills, or language proficiencies..."
                  />
                </div>

                {/* Consent Checkbox */}
                <div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id={`${formId}-consent`}
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={
                        errors.consent ? `${formId}-consent-error` : undefined
                      }
                      className="mt-1 h-4 w-4 rounded border-border text-terracotta focus:ring-2 focus:ring-terracotta"
                    />
                    <label
                      htmlFor={`${formId}-consent`}
                      className="text-sm text-text-secondary leading-snug cursor-pointer select-none"
                    >
                      I understand this is an expression of interest and my
                      information will only be used to follow up on my enquiry.{' '}
                      <span className="text-terracotta" aria-hidden="true">*</span>
                      <span className="sr-only"> (required)</span>
                    </label>
                  </div>
                  {errors.consent && (
                    <p
                      id={`${formId}-consent-error`}
                      className="mt-1.5 text-xs font-medium text-red-600"
                      role="alert"
                    >
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-terracotta px-6 py-3 text-base font-semibold text-white shadow-xs transition-colors hover:bg-terracotta-light focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
                >
                  Submit Expression of Interest
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* 4. Note about Careers */}
      <Section background="white">
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-cream/40 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
              <Briefcase className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-navy">
                Career Opportunities &amp; Staff Positions
              </h3>
              <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                We do not currently have confirmed job openings. For
                career-related enquiries, please contact us at{' '}
                <a
                  href={`mailto:${ORG.email}`}
                  className="font-semibold text-terracotta hover:underline break-all"
                >
                  {ORG.email}
                </a>
                .
              </p>
            </div>
            <a
              href={`mailto:${ORG.email}?subject=Career%20Enquiry%20-%20Duaen%20Foundation`}
              className="mt-3 inline-flex items-center gap-2 rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white sm:mt-0"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </Section>

      {/* 5. Contact CTA */}
      <Section background="navy">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Have Questions About Getting Involved?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-dusty-blue/90 leading-relaxed">
            Reach out to our team directly. We are happy to answer your
            questions about volunteer commitments, student internships, or
            institutional collaborations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink to="/contact" variant="primary">
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-4 w-4 inline" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              to={`mailto:${ORG.email}`}
              variant="outline-light"
              external
            >
              Email Directly
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
