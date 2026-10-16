import {
  GraduationCap,
  Heart,
  Stethoscope,
  Users,
  Monitor,
  HandHeart,
  Target,
  Eye,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Mail,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { PageHero, Section, SectionHeading, ButtonLink } from '../components/ui'
import SeoHead from '../components/SeoHead'
import RegistrationsSection from '../components/RegistrationsSection'
import { ORG, MISSION, VISION, PROGRAMS } from '../data/content'

// Mapping icon names from PROGRAMS to Lucide icon components
const programIcons: Record<string, ComponentType<{ className?: string }>> = {
  GraduationCap,
  Heart,
  Stethoscope,
  Users,
  Monitor,
  HandHeart,
}

// Core objectives derived from organization's operational areas
const OBJECTIVES = [
  {
    title: 'Universal Primary Education',
    description:
      'Provide free, quality primary schooling up to Class 5 for underserved children in Ghaziabad, removing all cost barriers to education.',
    icon: GraduationCap,
  },
  {
    title: "Women's Economic Empowerment",
    description:
      'Foster financial self-reliance and confidence through practical sewing training, skill-building workshops, and personal development.',
    icon: Heart,
  },
  {
    title: 'Preventive Healthcare & Awareness',
    description:
      'Conduct regular health checkup camps in collaboration with medical centers, alongside lifesaving first-aid and CPR awareness sessions.',
    icon: Stethoscope,
  },
  {
    title: 'Essential Community Relief',
    description:
      'Deliver emergency support to vulnerable families through food ration drives, winter clothing distributions, and social welfare aid.',
    icon: Users,
  },
  {
    title: 'Digital & Computer Literacy',
    description:
      'Introduce young students to digital tools and computer fundamentals to bridge the technological divide in underserved communities.',
    icon: Monitor,
  },
  {
    title: 'Youth & Volunteer Mentorship',
    description:
      'Mobilize college student interns and community volunteers to actively teach, mentor, and participate in grassroots social development.',
    icon: HandHeart,
  },
]

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us"
        description="Learn about Duaen Foundation NGO, our mission, vision, core objectives, Duaen Primary School in Ghaziabad, and our social welfare programs."
        path="/about"
      />

      {/* 1. Page Hero */}
      <PageHero
        title="About Duaen Foundation NGO"
        description="A grassroots social welfare organization committed to empowering underprivileged communities through accessible education, women's empowerment, healthcare awareness, and compassionate support."
        breadcrumb="About Us"
      />

      {/* 2. Organization Overview */}
      <Section background="cream" id="overview">
        <SectionHeading
          title="Who We Are"
          subtitle="Dedicated to grassroots transformation through education, dignity, and community solidarity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-navy font-semibold">
                {ORG.name}
              </strong>{' '}
              is a social welfare organization founded on the principle that sustainable community
              progress begins with direct, compassionate, and transparent grassroots action. Based in{' '}
              <span className="text-text-primary font-medium">Ghaziabad, Uttar Pradesh</span>, the
              foundation works tirelessly to uplift vulnerable families and underprivileged children.
            </p>
            <p>
              Guided by our core motto—
              <em className="text-terracotta font-semibold not-italic">
                “{ORG.tagline}”
              </em>
              —our initiatives bridge critical gaps in essential human needs. We believe that
              education is the most powerful catalyst for generational change, which is why our
              foundational work centers on providing completely free schooling to children who would
              otherwise be excluded from the classroom.
            </p>
            <p>
              Beyond the classroom, we take a holistic approach to community upliftment. From
              operating vocational sewing programs that grant women economic agency, to organizing
              preventive medical camps, emergency ration drives, and youth digital literacy sessions,
              Duaen Foundation stands as an active partner in community resilience.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Official Logo & Identity Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-border flex flex-col items-center text-center">
              <img
                src="/logo.png"
                alt="Official Logo of Duaen Foundation NGO — दुआएं फाउंडेशन एन.जी.ओ."
                className="h-44 w-auto object-contain sm:h-52"
                width={320}
                height={310}
              />
              <div className="mt-4 pt-3 border-t border-border w-full text-center">
                <p className="font-heading text-base font-bold text-navy">
                  दुआएं फाउंडेशन एन.जी.ओ. रजि.
                </p>
                <p className="text-xs font-semibold text-terracotta mt-0.5 tracking-wide">
                  {ORG.tagline}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Official Organization Emblem • Ghaziabad, Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-border space-y-6">
              <h3 className="font-heading text-xl font-bold text-navy flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-terracotta" aria-hidden="true" />
                Organizational Pillars
              </h3>

              <ul className="space-y-4" role="list">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-terracotta shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-bold text-navy text-sm">Grassroots Presence</h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-0.5">
                      Directly active in Ghaziabad communities with deep local trust and context.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-terracotta shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-bold text-navy text-sm">Free Education for All</h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-0.5">
                      Zero-fee primary schooling up to Class 5 through Duaen Primary School.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-terracotta shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-bold text-navy text-sm">Dignity & Self-Reliance</h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-0.5">
                      Empowering women through vocational skills, sewing training, and confidence.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-terracotta shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-bold text-navy text-sm">Youth & Volunteer Model</h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-0.5">
                      Mobilizing university interns and civic volunteers to teach and mentor.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-text-secondary flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Headquartered in Ghaziabad, Uttar Pradesh, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Mission & Vision */}
      <Section background="white" id="mission-vision">
        <SectionHeading
          title="Mission & Vision"
          subtitle="The enduring purpose and long-term aspiration that direct every initiative we undertake."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card */}
          <div className="rounded-xl border border-border border-l-4 border-l-terracotta bg-cream/50 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-terracotta">
                    Our Purpose
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-navy">
                    {MISSION.title}
                  </h3>
                </div>
              </div>

              <blockquote className="mt-4 border-l-2 border-terracotta/40 pl-4 italic text-navy font-medium text-lg leading-relaxed">
                “{MISSION.text}”
              </blockquote>

              <p className="mt-5 text-text-secondary text-sm sm:text-base leading-relaxed">
                We believe that every child, regardless of economic background, deserves an equal
                opportunity to learn, thrive, and fulfill their potential. Through targeted primary
                education and consistent community support, we help children and families build the
                skills and confidence needed to overcome generational hardships.
              </p>
            </div>

            <ul className="mt-6 pt-6 border-t border-border space-y-2.5 text-sm text-text-secondary" role="list">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                <span>Foundational literacy and life skills for underprivileged children</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                <span>Essential vocational skills to build long-term economic autonomy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                <span>Immediate relief interventions during times of critical hardship</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="rounded-xl border border-border border-l-4 border-l-navy bg-cream/50 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-navy">
                    Our Future
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-navy">
                    {VISION.title}
                  </h3>
                </div>
              </div>

              <blockquote className="mt-4 border-l-2 border-navy/40 pl-4 italic text-navy font-medium text-lg leading-relaxed">
                “{VISION.text}”
              </blockquote>

              <p className="mt-5 text-text-secondary text-sm sm:text-base leading-relaxed">
                We envision an equitable society where socioeconomic status does not limit an
                individual's rights, dreams, or dignity. By expanding educational horizons and
                strengthening community support networks, we strive for a world where every human
                being is valued, empowered, and included.
              </p>
            </div>

            <ul className="mt-6 pt-6 border-t border-border space-y-2.5 text-sm text-text-secondary" role="list">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-navy" aria-hidden="true" />
                <span>Zero children deprived of primary schooling due to poverty</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-navy" aria-hidden="true" />
                <span>Empowered women actively contributing to self-reliant households</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-navy" aria-hidden="true" />
                <span>Resilient neighborhoods supported by compassionate volunteer networks</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 4. Objectives */}
      <Section background="dusty-blue" id="objectives">
        <SectionHeading
          title="Our Key Objectives"
          subtitle="Measurable commitments guiding our on-ground programs and grassroots interventions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OBJECTIVES.map((obj, index) => {
            const Icon = obj.icon
            return (
              <div
                key={obj.title}
                className="bg-white rounded-xl p-6 sm:p-7 shadow-xs border border-border/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-dusty-blue text-navy">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="font-heading font-bold text-xs tracking-wider text-text-secondary/60">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">
                    {obj.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* 5. Areas of Work */}
      <Section background="white" id="areas-of-work">
        <SectionHeading
          title="Areas of Work"
          subtitle="Holistic community development programs designed to create immediate and lasting change."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROGRAMS.map((program) => {
            const IconComponent = programIcons[program.icon] || BookOpen
            return (
              <article
                key={program.id}
                className="rounded-xl border border-border bg-white p-6 shadow-xs flex flex-col justify-between hover:border-terracotta/40 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors mb-5">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-navy mb-3">
                    {program.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-6" role="list">
                    {program.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className="h-4 w-4 text-mustard shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <ButtonLink
                    to={program.ctaHref}
                    variant="outline"
                    className="w-full text-xs justify-center py-2.5"
                  >
                    <span>{program.ctaLabel}</span>
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary text-sm sm:text-base mb-4">
            Want to see how our programs operate on the ground, view upcoming events, or learn how to participate?
          </p>
          <ButtonLink to="/programs" variant="primary">
            Explore All Programs & Activities
          </ButtonLink>
        </div>
      </Section>

      {/* 6. Duaen Primary School */}
      <Section background="cream" id="school">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-terracotta">
              Flagship Educational Initiative
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
              {ORG.schoolName}
            </h2>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Located in <strong className="text-navy">{ORG.schoolLocation}</strong>, Duaen Primary
              School is a dedicated grassroots learning center providing completely free education
              for children up to Class 5.
            </p>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Many children in underserved neighborhoods face prohibitive costs for uniforms, books,
              and tuition fees that keep them out of formal schools. Duaen Primary School eliminates
              all economic barriers, creating a nurturing and joyful environment where young minds
              discover foundational literacy, mathematics, science, and creative arts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-lg bg-white p-4 border border-border">
                <span className="font-heading font-bold text-xl text-terracotta block">Class 1 to 5</span>
                <span className="text-xs text-text-secondary mt-1 block">
                  Free primary schooling focusing on foundational skills & joyful learning
                </span>
              </div>
              <div className="rounded-lg bg-white p-4 border border-border">
                <span className="font-heading font-bold text-xl text-navy block">100% Free</span>
                <span className="text-xs text-text-secondary mt-1 block">
                  Zero tuition fees, free learning stationery, and essential materials
                </span>
              </div>
              <div className="rounded-lg bg-white p-4 border border-border">
                <span className="font-heading font-bold text-xl text-navy block">Student Mentors</span>
                <span className="text-xs text-text-secondary mt-1 block">
                  College student interns & volunteers actively assist with daily teaching
                </span>
              </div>
              <div className="rounded-lg bg-white p-4 border border-border">
                <span className="font-heading font-bold text-xl text-terracotta block">Holistic Care</span>
                <span className="text-xs text-text-secondary mt-1 block">
                  Health checkups, CPR awareness, and disaster preparedness sessions
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink to="/programs#education" variant="primary">
                View School Details
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="outline">
                Volunteer to Teach
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl bg-white shadow-md border border-border">
              {/* Photo placeholder with rich fallback */}
              <div className="relative aspect-4/3 w-full bg-linear-to-br from-navy to-navy-dark overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
                  alt="Students engaged in classroom learning at an elementary school"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-dark/85 via-navy/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="inline-block w-fit rounded-md bg-terracotta px-2.5 py-1 text-xs font-semibold uppercase tracking-wider mb-2">
                    Ghaziabad Campus
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {ORG.schoolName}
                  </h3>
                  <p className="text-xs sm:text-sm text-dusty-blue mt-1 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{ORG.schoolLocation}</span>
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-heading font-bold text-navy text-sm">
                      Interactive & Community-Centered Pedagogy
                    </h4>
                    <p className="text-text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
                      Classes are conducted with interactive teaching aids, storytelling, and hands-on
                      exercises. University students from institutions across the region regularly
                      contribute through teaching internships and mentor sessions.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-cream p-3.5 text-xs text-text-secondary flex items-center justify-between">
                  <span>Admissions & volunteer inquiries</span>
                  <a
                    href={`mailto:${ORG.email}?subject=Duaen%20Primary%20School%20Inquiry`}
                    className="font-semibold text-terracotta hover:underline"
                  >
                    {ORG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Registrations & Recognitions */}
      <RegistrationsSection
        id="registrations"
        background="white"
        showTransparencyNoticeIfEmpty={true}
      />

      {/* 8. Team & Leadership */}
      <Section background="cream" id="team">
        <SectionHeading
          title="Leadership & Coordination"
          subtitle="A dedicated grassroots team coordinating community welfare, educational programs, and volunteer operations."
        />

        <div className="max-w-4xl mx-auto">
          {/* Transparency notice banner */}
          <div className="rounded-2xl border border-border bg-cream/60 p-6 sm:p-8 shadow-xs mb-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-navy">
                  Commitment to Transparency & Verification
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  Duaen Foundation NGO values institutional clarity and public trust. Leadership
                  biographies, trustee appointments, and formal executive designations are currently
                  being compiled and verified in accordance with statutory documentation standards.
                </p>
                <p className="text-text-secondary text-xs sm:text-sm italic">
                  Note: Founder designations and official messages will be published here once
                  formally confirmed.
                </p>
              </div>
            </div>
          </div>

          {/* Documented personnel & coordinators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Anurag Singh */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-navy">
                    <UserCheck className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium text-text-secondary">
                    Role Pending Confirmation
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-1">
                  Anurag Singh
                </h3>
                <p className="text-xs text-terracotta font-medium mb-3">
                  Documented in Organization Communications
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Active representative involved in organizational correspondence and foundational
                  initiatives. Complete biographical and designation details are pending formal
                  verification.
                </p>
              </div>
            </div>

            {/* Shekhar Sir */}
            <div className="rounded-xl border border-border bg-white p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dusty-blue text-navy">
                    <UserCheck className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                    Field Operations
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-1">
                  Shekhar Sir
                </h3>
                <p className="text-xs text-terracotta font-medium mb-3">
                  Operations & Ground Coordination
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Coordinating ground-level execution for Duaen Primary School activities, community
                  distribution drives, and field volunteer mobilization in Ghaziabad.
                </p>
              </div>
            </div>
          </div>

          {/* Contact prompt box */}
          <div className="mt-8 rounded-xl border border-border p-6 text-center bg-white">
            <h4 className="font-heading text-base font-bold text-navy mb-2">
              Interested in connecting with our leadership team?
            </h4>
            <p className="text-text-secondary text-sm max-w-xl mx-auto mb-5 leading-relaxed">
              Our team information is being actively updated. For inquiries regarding our
              governance, advisory committee, or to connect with our team directly, please contact us.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ButtonLink to="/contact" variant="outline">
                Contact Our Team
              </ButtonLink>
              <a
                href={`mailto:${ORG.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{ORG.email}</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Get Involved CTA */}
      <Section background="navy" id="get-involved-cta">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Be Part of Our Mission"
            subtitle="Whether you are a student, professional, or compassionate community member, there are meaningful ways to help us create lasting impact."
            light={true}
          />

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink to="/volunteer" variant="primary" className="w-full sm:w-auto">
              Volunteer With Us
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline-light" className="w-full sm:w-auto">
              Get in Touch
            </ButtonLink>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-dusty-blue/70 block">
                Direct Email
              </span>
              <a
                href={`mailto:${ORG.email}`}
                className="font-medium text-white hover:text-mustard transition-colors text-sm mt-1 inline-block"
              >
                {ORG.email}
              </a>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-dusty-blue/70 block">
                School Campus
              </span>
              <span className="font-medium text-white text-sm mt-1 block">
                D-Block, Ghaziabad, UP
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-dusty-blue/70 block">
                Follow Updates
              </span>
              <a
                href={ORG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-mustard transition-colors text-sm mt-1 inline-block"
              >
                @duaenfoundationngo
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
