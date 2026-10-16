import { useState, type FormEvent, type ChangeEvent } from 'react'
import { PageHero, Section, SectionHeading, ButtonLink } from '../components/ui'
import SeoHead from '../components/SeoHead'
import { ORG } from '../data/content'
import {
  Mail,
  Globe,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Send,
  Info,
  ExternalLink,
  MessageSquare,
} from 'lucide-react'

function Instagram({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

interface FormData {
  name: string
  email: string
  enquiryType: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  enquiryType?: string
  message?: string
  consent?: string
}

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Volunteering',
  'Donation Information',
  'Programs',
  'Media/Press',
  'Other',
] as const

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  enquiryType: 'General Enquiry',
  message: '',
  consent: false,
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState<boolean>(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.'
      }
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Please select an enquiry type.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter at least 10 characters in your message.'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree before submitting your enquiry.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validate()) {
      // In this frontend prototype, no network request is sent.
      setSubmitted(true)
    }
  }

  const handleReset = () => {
    setFormData(INITIAL_FORM)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <>
      <SeoHead
        title="Contact Us"
        description="Get in touch with Duaen Foundation NGO. Send an enquiry about our education programs, volunteering, or community welfare initiatives in Ghaziabad."
        path="/contact"
      />

      <PageHero
        title="Get in Touch"
        description="We welcome questions, volunteering interest, and community collaboration. Reach out to the Duaen Foundation team through our contact channels or the enquiry form below."
        breadcrumb="Contact"
      />

      {/* Contact Information & Form Section */}
      <Section background="cream">
        <SectionHeading
          title="How to Reach Us"
          subtitle="Connect with our team directly or send an enquiry using the form below."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: Contact details card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Reach out to us directly via email, visit our official website, or connect through our social channels.
              </p>

              <dl className="mt-6 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dusty-blue text-navy">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${ORG.email}`}
                        className="font-medium text-navy hover:text-terracotta transition-colors break-all focus-visible:outline-terracotta"
                      >
                        {ORG.email}
                      </a>
                    </dd>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dusty-blue text-navy">
                    <Globe className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Website
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={ORG.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-navy hover:text-terracotta transition-colors break-all focus-visible:outline-terracotta"
                      >
                        duaenfoundationngo.in
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden="true" />
                      </a>
                    </dd>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dusty-blue text-navy">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Instagram
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={ORG.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-navy hover:text-terracotta transition-colors focus-visible:outline-terracotta"
                      >
                        @duaenfoundationngo
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden="true" />
                      </a>
                    </dd>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dusty-blue text-navy">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-navy leading-snug">
                      Duaen Primary School, D-Block, Ghaziabad, Uttar Pradesh 201003
                    </dd>
                    <div className="mt-2.5 rounded-lg border border-mustard/40 bg-mustard/10 p-3 text-xs text-text-primary">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 shrink-0 text-navy mt-0.5" aria-hidden="true" />
                        <span className="leading-relaxed">
                          This is the school location. The registered office address is being confirmed.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div
                  className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                    Enquiry Received
                  </h3>
                  <p className="mt-3 text-sm text-text-primary leading-relaxed">
                    Thank you for your enquiry. This is a demonstration form. In the production version, your message would be sent to the Duaen Foundation team.
                  </p>
                  <p className="mt-2 text-xs text-text-secondary">
                    No real email was dispatched because this is a prototype environment.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors focus-visible:outline-terracotta"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-border pb-4">
                    <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-terracotta" aria-hidden="true" />
                      Send an Enquiry
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      Fill out the fields below. Required fields are marked with an asterisk (<span className="text-terracotta" aria-hidden="true">*</span>).
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-navy"
                    >
                      Your Name <span className="text-terracotta" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="e.g. Priyanshu Sharma"
                      className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta/40 ${
                        errors.name
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-border bg-white focus:border-terracotta'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-navy"
                    >
                      Email Address <span className="text-terracotta" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="e.g. priyanshu@example.com"
                      className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta/40 ${
                        errors.email
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-border bg-white focus:border-terracotta'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject / Enquiry Type */}
                  <div>
                    <label
                      htmlFor="contact-enquiry-type"
                      className="block text-sm font-semibold text-navy"
                    >
                      Subject / Enquiry Type <span className="text-terracotta" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-enquiry-type"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={errors.enquiryType ? 'true' : 'false'}
                      aria-describedby={errors.enquiryType ? 'enquiry-type-error' : undefined}
                      className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-text-primary shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta/40 ${
                        errors.enquiryType
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-border bg-white focus:border-terracotta'
                      }`}
                    >
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.enquiryType && (
                      <p
                        id="enquiry-type-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.enquiryType}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-navy"
                    >
                      Message <span className="text-terracotta" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Please share the details of your enquiry or how you would like to collaborate..."
                      className={`mt-1.5 block w-full rounded-md border px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta/40 ${
                        errors.message
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-border bg-white focus:border-terracotta'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Consent checkbox */}
                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="contact-consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={errors.consent ? 'true' : 'false'}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                        className="mt-1 h-4 w-4 rounded border-border text-terracotta focus:ring-terracotta"
                      />
                      <label
                        htmlFor="contact-consent"
                        className="text-sm text-text-primary leading-snug cursor-pointer select-none"
                      >
                        I agree that my information will be used solely to respond to this enquiry.
                        <span className="text-terracotta ml-1" aria-hidden="true">*</span>
                      </label>
                    </div>
                    {errors.consent && (
                      <p
                        id="consent-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-terracotta-dark transition-colors focus-visible:outline-terracotta sm:w-auto"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Submit Enquiry
                    </button>
                  </div>

                  {/* Prototype disclaimer note */}
                  <div className="rounded-lg border border-border bg-cream/70 p-3 text-xs text-text-secondary leading-relaxed">
                    <span className="font-semibold text-navy">Notice:</span> This form is part of a frontend prototype. A real submission service must be configured before launch.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Connect Section (navy background) */}
      <Section background="navy">
        <div className="text-center">
          <SectionHeading
            title="Connect With Duaen Foundation"
            subtitle="Follow our journey, view community activities, or write directly to our organizers."
            centered
            light
          />

          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              to={ORG.instagram}
              variant="primary"
              external
              className="gap-2"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Follow us on Instagram
            </ButtonLink>
            <ButtonLink
              to={`mailto:${ORG.email}`}
              variant="outline-light"
              external
              className="gap-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send us an email
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
