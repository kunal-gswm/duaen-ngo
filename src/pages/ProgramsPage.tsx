import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Heart,
  Stethoscope,
  Users,
  Monitor,
  HandHeart,
  MapPin,
  Scissors,
  HeartPulse,
  ShieldAlert,
  Package,
  Shirt,
  ShieldCheck,
  Calendar,
  Sparkles,
  Info,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import {
  PageHero,
  Section,
  SectionHeading,
  ButtonLink,
  PlaceholderImage,
} from '../components/ui'
import SeoHead from '../components/SeoHead'
import { ORG, PROGRAMS, HEALTHCARE_EVENTS } from '../data/content'

export default function ProgramsPage() {
  const healthcareIcons = [Stethoscope, HeartPulse, ShieldAlert]

  return (
    <>
      <SeoHead
        title="Our Programs"
        description="Explore the programs of Duaen Foundation NGO, including Duaen Primary School, women's empowerment sewing centre, community healthcare camps, welfare distribution, and digital literacy in Ghaziabad."
        path="/programs"
      />

      <PageHero
        title="Our School & Programs"
        description="Empowering underserved communities through free primary education, women's vocational training, public healthcare awareness, computer learning, and essential social welfare across Ghaziabad."
        breadcrumb="Programs"
      />

      {/* Quick Navigation Strip */}
      <nav
        aria-label="Program sections navigation"
        className="sticky top-16 sm:top-20 z-30 border-b border-border bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto py-3 text-sm scrollbar-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary whitespace-nowrap mr-2">
              Programs:
            </span>
            {PROGRAMS.map((prog) => (
              <a
                key={prog.id}
                href={`#${prog.id}`}
                className="whitespace-nowrap rounded-full bg-cream px-3.5 py-1 text-xs font-medium text-navy hover:bg-terracotta hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-terracotta"
              >
                {prog.shortTitle || prog.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Program 1: Education & Primary School (White background, Two-column text left / image right) */}
      <Section id="education" background="white" className="scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-terracotta">
              Flagship Education Initiative
            </p>

            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Education & Duaen Primary School
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed">
              Education is the foundation of lasting empowerment. At Duaen Primary School,
              we provide completely free primary education up to Class 5 for children from
              low-income and vulnerable households in Ghaziabad. We believe financial
              circumstances should never hinder a child's access to learning.
            </p>

            {/* Key features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-border bg-cream/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Free Up to Class 5</h3>
                    <p className="text-xs text-text-secondary">No tuition or admission fees</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-cream/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">School Location</h3>
                    <p className="text-xs text-text-secondary">{ORG.schoolLocation}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-cream/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mustard/20 text-navy">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Interns & Volunteers</h3>
                    <p className="text-xs text-text-secondary">College students participate in teaching</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-cream/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-dusty-blue text-navy">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">Foundational Learning</h3>
                    <p className="text-xs text-text-secondary">Literacy, numeracy & life skills</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teaching highlight callout */}
            <div className="rounded-xl border-l-4 border-terracotta bg-cream p-4 text-sm text-text-primary">
              <p className="font-semibold text-navy mb-1">
                Active College Intern & Volunteer Participation
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our classrooms are energized by dedicated college student interns and passionate
                community volunteers who assist in subject instruction, creative mentoring,
                and individualized academic support for young students.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ButtonLink to="/contact" variant="primary">
                Contact to Learn More
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="outline">
                Volunteer as a Teacher
              </ButtonLink>
            </div>
          </div>

          {/* Right: Placeholder Image Area */}
          <div className="lg:col-span-5">
            <PlaceholderImage
              alt="Duaen Primary School classroom in D-Block, Ghaziabad"
              label="School classroom photograph (to be provided)"
              icon={<GraduationCap className="h-10 w-10 text-navy" />}
              aspectRatio="aspect-4/3 sm:aspect-auto"
              className="h-full min-h-[380px] w-full rounded-2xl border border-border bg-gradient-to-br from-cream-dark to-dusty-blue shadow-xs"
            />
          </div>
        </div>
      </Section>

      {/* Program 2: Women's Empowerment (Cream background, Reversed Layout: image left, text right) */}
      <Section id="women-empowerment" background="cream" className="scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Placeholder Image Area (reversed on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <PlaceholderImage
              alt="Women's vocational sewing centre"
              label="Vocational sewing centre photograph (to be provided)"
              icon={<Scissors className="h-10 w-10 text-terracotta" />}
              aspectRatio="aspect-4/3 sm:aspect-auto"
              className="h-full min-h-[380px] w-full rounded-2xl border border-border bg-gradient-to-br from-cream-dark to-dusty-blue shadow-xs"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-terracotta">
              Skills, Wellbeing & Independence
            </p>

            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Women's Empowerment
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed">
              Strengthening women creates a ripple effect of progress across families and
              communities. Our women's empowerment initiatives focus on skills development,
              personal wellbeing, and fostering lasting self-reliance for women from
              underserved backgrounds.
            </p>

            {/* Program pillars */}
            <div className="space-y-3 pt-1">
              <div className="rounded-xl border border-border bg-white p-4">
                <h3 className="font-heading text-base font-bold text-navy flex items-center gap-2">
                  <Scissors className="h-4 w-4 text-terracotta" aria-hidden="true" />
                  Sewing Centre & Vocational Training
                </h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  Our sewing centre provides vocational sewing training, teaching practical
                  tailoring and garment construction skills to help women cultivate marketable
                  handicrafts and achieve practical self-sufficiency.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-white p-4">
                <h3 className="font-heading text-base font-bold text-navy flex items-center gap-2">
                  <Heart className="h-4 w-4 text-terracotta" aria-hidden="true" />
                  Wellbeing & Self-Reliance
                </h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  Beyond technical craft, our programs nurture confidence, mutual support,
                  and shared peer learning, empowering women to make informed decisions for
                  themselves and their households.
                </p>
              </div>
            </div>

            {/* Note on enrollment transparency (Strict: no published fees, schedules, claims) */}
            <div className="rounded-xl border border-border/80 bg-white/70 p-4 text-xs text-text-secondary flex items-start gap-2.5">
              <Info className="h-4 w-4 shrink-0 text-navy mt-0.5" aria-hidden="true" />
              <p>
                To maintain accurate and transparent records, specific training sessions,
                availability, and participation details are coordinated directly with our team.
                We do not publish fee structures or enrollment schedules online.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ButtonLink to="/contact" variant="primary">
                Inquire About Women's Programs
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="outline">
                Volunteer as a Skills Mentor
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Program 3: Healthcare Initiatives (White background, Timeline / Card Layout) */}
      <Section id="healthcare" background="white" className="scroll-mt-28">
        <div className="space-y-12">
          {/* Section Heading */}
          <SectionHeading
            title="Healthcare Initiatives"
            subtitle="Health awareness camps and community medical support initiatives to improve public health understanding and emergency preparedness."
            centered={false}
          />

          {/* Historical Documentation Notice */}
          <div className="rounded-xl border-l-4 border-navy bg-dusty-blue/30 p-4 text-sm text-text-primary flex items-start gap-3">
            <Info className="h-5 w-5 shrink-0 text-navy mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-navy">
                Historical Activity Documentation
              </p>
              <p className="text-text-secondary text-xs sm:text-sm mt-0.5 leading-relaxed">
                The events listed below reflect documented past health and safety initiatives
                conducted with partner medical professionals and universities. Specific dates and
                attendee counts are presented as documented in organizational records. Future camps
                are coordinated directly with accredited partners.
              </p>
            </div>
          </div>

          {/* Healthcare Events Grid / Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTHCARE_EVENTS.map((event, index) => {
              const EventIcon = healthcareIcons[index] || Stethoscope
              return (
                <div
                  key={event.title}
                  className="rounded-2xl border border-border bg-white p-6 shadow-xs flex flex-col justify-between hover:border-terracotta/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dusty-blue/60 text-navy">
                        <EventIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-navy">
                        Event {index + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy">
                      {event.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-border">
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy">
                        Highlights
                      </p>
                      <ul className="space-y-1.5 text-xs text-text-secondary">
                        {event.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Date Note / Record Notice */}
                  <div className="mt-6 rounded-lg bg-cream/70 p-3 text-xs text-text-secondary border border-border/60">
                    <div className="flex items-center gap-1.5 font-semibold text-navy mb-1">
                      <Calendar className="h-3.5 w-3.5 text-terracotta" aria-hidden="true" />
                      <span>Documentation Note</span>
                    </div>
                    <p>{event.dateNote}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Placeholder Banner for Healthcare Media */}
          <PlaceholderImage
            alt="Healthcare camp & awareness session"
            label="Healthcare camp & awareness session photographs (to be provided)"
            icon={<Stethoscope className="h-10 w-10 text-navy" />}
            aspectRatio="aspect-video sm:aspect-21/9"
            className="w-full rounded-2xl border border-border bg-gradient-to-br from-cream-dark to-dusty-blue shadow-xs"
          />

          {/* CTA Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-cream/40 p-6">
            <div>
              <h3 className="font-heading text-base font-bold text-navy">
                Partner with us for future health drives
              </h3>
              <p className="text-sm text-text-secondary">
                Are you a healthcare professional or institution interested in organizing a camp?
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/contact" variant="primary">
                Inquire About Healthcare Camps
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="outline">
                Volunteer in Healthcare
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Program 4: Community Welfare (Dusty-Blue background, 4-Card Grid + Distribution visual) */}
      <Section id="community-welfare" background="dusty-blue" className="scroll-mt-28">
        <div className="space-y-12">
          {/* Section Heading */}
          <SectionHeading
            title="Community Welfare"
            subtitle="Conducting ration distribution, clothing assistance, polio-related initiatives, and other social welfare activities to support underprivileged families."
            centered={false}
          />

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-xs border border-border/80 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-terracotta mb-4">
                  <Package className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  Ration Distribution
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Distributing essential dry food rations, staple grains, and cooking supplies
                  to low-income families and vulnerable households facing distress.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="text-xs font-medium text-terracotta">
                  Essential food support
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-border/80 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-navy mb-4">
                  <Shirt className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  Clothing Assistance
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Providing clean wearable clothing, seasonal apparel, and warm winter
                  essentials to underprivileged children and families.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="text-xs font-medium text-navy">
                  Seasonal garment relief
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-border/80 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-mustard mb-4">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  Polio-Related Initiatives
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Supporting polio immunization drives, public health mobilization, and community
                  awareness to safeguard children's long-term health.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="text-xs font-medium text-navy">
                  Immunization advocacy
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-border/80 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-terracotta mb-4">
                  <HandHeart className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  Social Welfare Activities
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Conducting grassroots social welfare activities, emergency assistance,
                  and compassionate neighborhood support during times of crisis.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="text-xs font-medium text-terracotta">
                  Community care
                </span>
              </div>
            </div>
          </div>

          {/* Two-Column Detail & Image Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 rounded-2xl p-6 sm:p-8 border border-border">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-heading text-2xl font-bold text-navy">
                Direct Grassroots Distribution Drives
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Our welfare activities are carried out directly in the neighborhoods where the
                need is greatest. Volunteers and local contributors coordinate the transparent
                collection and dignified distribution of staple goods and seasonal necessities.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <ButtonLink to="/contact" variant="primary">
                  Support Community Relief
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink to="/volunteer" variant="outline">
                  Join a Welfare Drive
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-xs">
                <div className="relative aspect-video w-full overflow-hidden bg-navy/5">
                  <img
                    src="/images/events/cloth-distribution/cloth-distribution-overview.jpg"
                    alt="Duaen Foundation NGO team distributing seasonal clothing and care packages in Ghaziabad"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-cream/30 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-navy">Clothing &amp; Care Packages Drive</span>
                  <Link
                    to="/impact#cloth-distribution-campaign"
                    className="font-medium text-terracotta hover:underline inline-flex items-center gap-1 whitespace-nowrap self-start sm:self-auto"
                  >
                    <span>View Campaign</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Documentary Photo Strip: Authenticated Fieldwork */}
          <div className="mt-8 pt-8 border-t border-border/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-navy">
                  Documented Grassroots Action: 30 November 2025
                </h4>
                <p className="text-xs text-text-secondary mt-1">
                  Field moments from our open community distribution drive in Ghaziabad, Uttar Pradesh.
                </p>
              </div>
              <Link
                to="/impact#cloth-distribution-campaign"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:underline shrink-0"
              >
                <span>View Full Photo Archive in Impact</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="group overflow-hidden rounded-xl border border-border bg-white shadow-xs">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <img
                    src="/images/events/cloth-distribution/volunteer-distribution-outreach.jpg"
                    alt="Volunteers arranging care packages"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="font-heading text-xs font-bold text-navy">
                    Package Coordination
                  </p>
                  <p className="text-[11px] text-text-secondary mt-0.5 line-clamp-1">
                    Volunteers preparing warm clothing items for local families.
                  </p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-xl border border-border bg-white shadow-xs">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <img
                    src="/images/events/cloth-distribution/women-volunteers-outreach.jpg"
                    alt="Women volunteers engaging with community members"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="font-heading text-xs font-bold text-navy">
                    Community Engagement
                  </p>
                  <p className="text-[11px] text-text-secondary mt-0.5 line-clamp-1">
                    Women coordinators conducting direct, respectful dialogue.
                  </p>
                </div>
              </div>

              <div className="group overflow-hidden rounded-xl border border-border bg-white shadow-xs">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <img
                    src="/images/events/cloth-distribution/community-children-lineup.jpg"
                    alt="Community children attending outdoor welfare session"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="font-heading text-xs font-bold text-navy">
                    Youth &amp; Children Gathering
                  </p>
                  <p className="text-[11px] text-text-secondary mt-0.5 line-clamp-1">
                    Children assembled during the outdoor distribution session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Program 5: Computer Learning (White background, Two-Column Layout) */}
      <Section id="computer-learning" background="white" className="scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-terracotta">
              Digital Literacy & Exposure
            </p>

            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Computer Learning
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed">
              In an increasingly digital era, understanding computers opens pathways to education,
              communication, and future livelihood opportunities. We provide computer access and
              digital literacy learning support for students in the community, helping young minds
              build confidence with modern technology.
            </p>

            {/* Factual Focus Points (Strictly adhering to non-fabrication rules) */}
            <div className="space-y-3 pt-2">
              <div className="rounded-xl border border-border bg-cream/40 p-4">
                <h3 className="font-heading text-base font-bold text-navy flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-terracotta" aria-hidden="true" />
                  Computer Access & Learning Support
                </h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  Providing students with practical computer access in a guided, safe, and
                  encouraging environment to learn basic navigation and computational concepts.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-cream/40 p-4">
                <h3 className="font-heading text-base font-bold text-navy flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-mustard" aria-hidden="true" />
                  Digital Literacy Education
                </h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                  Hands-on technology exposure helping students gain familiarity with basic
                  software, keyboard skills, and introductory educational tools.
                </p>
              </div>
            </div>

            {/* Transparency Note: No invented curriculum, computer count, schedule, or enrollment */}
            <div className="rounded-xl border border-border/80 bg-cream/60 p-4 text-xs text-text-secondary flex items-start gap-2.5">
              <Info className="h-4 w-4 shrink-0 text-navy mt-0.5" aria-hidden="true" />
              <p>
                Our digital learning resources evolve with community contributions and volunteer
                availability. We do not publish standardized curricula, computer counts, or fixed
                enrollment schedules. To learn about current learning sessions or contribute
                hardware, please get in touch with our team directly.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ButtonLink to="/contact" variant="primary">
                Inquire About Computer Learning
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="outline">
                Volunteer as a Digital Mentor
              </ButtonLink>
            </div>
          </div>

          {/* Right: Placeholder Image Area */}
          <div className="lg:col-span-5">
            <PlaceholderImage
              alt="Computer learning session"
              label="Computer learning session photograph (to be provided)"
              icon={<Monitor className="h-10 w-10 text-navy" />}
              aspectRatio="aspect-4/3 sm:aspect-auto"
              className="h-full min-h-[380px] w-full rounded-2xl border border-border bg-gradient-to-br from-cream-dark to-dusty-blue shadow-xs"
            />
          </div>
        </div>
      </Section>

      {/* Program 6: Volunteer Engagement (Cream background, 3-Pillar Cards + College Spotlight) */}
      <Section id="volunteer-engagement" background="cream" className="scroll-mt-28">
        <div className="space-y-12">
          {/* Section Heading */}
          <SectionHeading
            title="Volunteer Engagement"
            subtitle="College students and community volunteers actively participate in teaching, mentoring, and community initiatives across all our programs."
            centered={false}
          />

          {/* 3 Involvement Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-xs border border-border flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-terracotta mb-4">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  Classroom Teaching
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Support teaching at Duaen Primary School in D-Block, Ghaziabad. Assist with
                  foundational literacy, math, reading circles, and creative extracurriculars.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="text-xs font-semibold text-terracotta">
                  Primary Education Up to Class 5
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-border flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-navy mb-4">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  Workshops & Mentorship
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Conduct specialized awareness sessions such as first-aid, disaster management,
                  vocational sewing mentoring, or digital literacy exploration.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="text-xs font-semibold text-navy">
                  Life Skills & Health Awareness
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xs border border-border flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-mustard mb-4">
                  <Heart className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  Community Welfare Drives
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Participate on the ground in ration distribution, clothing collection,
                  medical camp coordination, and neighborhood outreach programs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="text-xs font-semibold text-navy">
                  Grassroots Relief & Care
                </span>
              </div>
            </div>
          </div>

          {/* College Student Spotlight Banner */}
          <div className="rounded-2xl border border-border bg-white p-8 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-terracotta">
                  College Collaboration
                </p>
                <h3 className="font-heading text-2xl font-bold text-navy">
                  Empowering Youth Through University Partnerships
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  College students and interns—including participants from institutions such as
                  Christ University—bring vibrant energy, academic knowledge, and structured
                  engagement to Duaen Primary School and our community workshops.
                </p>
              </div>

              <div className="lg:col-span-5">
                <PlaceholderImage
                  alt="Student volunteers and interns"
                  label="Student volunteer & intern photo (to be provided)"
                  icon={<Users className="h-10 w-10 text-terracotta" />}
                  aspectRatio="aspect-video sm:aspect-auto"
                  className="h-full min-h-[180px] w-full rounded-2xl border border-border bg-gradient-to-br from-cream-dark to-dusty-blue shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Central CTA */}
          <div className="text-center max-w-xl mx-auto space-y-4 pt-4">
            <h3 className="font-heading text-2xl font-bold text-navy">
              Ready to Share Your Skills and Time?
            </h3>
            <p className="text-text-secondary text-sm">
              Whether you are a university student seeking an internship or a community member
              passionate about service, we welcome your contribution.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <ButtonLink to="/volunteer" variant="primary">
                Join Us as a Volunteer
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline">
                Inquire About Internships
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
