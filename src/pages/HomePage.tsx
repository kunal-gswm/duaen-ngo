import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Heart,
  Stethoscope,
  Users,
  Monitor,
  HandHeart,
  Target,
  Eye,
  BookOpen,
  CheckCircle2,
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react'
import {
  Section,
  SectionHeading,
  ButtonLink,
} from '../components/ui'
import SeoHead from '../components/SeoHead'
import Accordion from '../components/Accordion'
import RegistrationsSection from '../components/RegistrationsSection'
import {
  ORG,
  HERO,
  MISSION,
  VISION,
  FAQ_ITEMS,
  HEALTHCARE_EVENTS,
} from '../data/content'

function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
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

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Home"
        description="Duaen Foundation NGO is a social welfare organization dedicated to empowering underprivileged communities through education, women's empowerment, healthcare awareness, and community support in Ghaziabad."
        path="/"
      />

      {/* SECTION A: HERO */}
      <section
        className="relative overflow-hidden bg-navy text-white pt-9 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28"
        aria-labelledby="hero-heading"
      >
        {/* Subtle decorative background glow */}
        <div
          className="pointer-events-none absolute -top-40 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-terracotta/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 left-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-dusty-blue/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Headline and Actions */}
            <div className="lg:col-span-7">
              {/* Headline */}
              <h1
                id="hero-heading"
                className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]"
              >
                {HERO.headline}
              </h1>

              {/* Short Intro */}
              <p className="mt-6 text-base text-dusty-blue/90 sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                {HERO.description}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink to={HERO.primaryCta.href} variant="primary">
                  {HERO.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  to={HERO.secondaryCta.href}
                  variant="outline-light"
                >
                  {HERO.secondaryCta.label}
                </ButtonLink>
              </div>

              {/* Quick Grassroots Highlights */}
              <div className="mt-10 border-t border-white/15 pt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2.5 text-sm text-dusty-blue">
                  <CheckCircle2
                    className="h-4 w-4 text-mustard shrink-0"
                    aria-hidden="true"
                  />
                  <span>Free Primary Schooling</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-dusty-blue">
                  <CheckCircle2
                    className="h-4 w-4 text-mustard shrink-0"
                    aria-hidden="true"
                  />
                  <span>Women&apos;s Vocational Sewing</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-dusty-blue">
                  <CheckCircle2
                    className="h-4 w-4 text-mustard shrink-0"
                    aria-hidden="true"
                  />
                  <span>Health Camps &amp; CPR Drives</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic / Placeholder Area */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Ambient glow container */}
                <div
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-terracotta/30 via-mustard/20 to-dusty-blue/25 blur-xl opacity-80"
                  aria-hidden="true"
                />

                {/* Primary Card */}
                <div
                  className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-navy-light via-navy to-navy-dark p-6 sm:p-8 shadow-2xl text-white"
                  role="img"
                  aria-label="Illustration representing Duaen Foundation community initiatives including primary education, women's empowerment, and medical support"
                >
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-white p-1 shadow-xs flex items-center justify-center shrink-0">
                        <img
                          src="/logo-mark.png"
                          alt="Duaen Foundation NGO Emblem"
                          className="h-full w-full object-contain"
                          width={36}
                          height={36}
                        />
                      </div>
                      <div>
                        <span className="font-heading text-xs uppercase tracking-wider text-white font-bold block">
                          Duaen Foundation NGO
                        </span>
                        <span className="text-[11px] text-dusty-blue/80 font-medium">
                          दुआएं फाउंडेशन एन.जी.ओ.
                        </span>
                      </div>
                    </div>
                    <span className="rounded-md bg-terracotta px-2.5 py-1 text-xs font-semibold text-white shadow-xs">
                      Ghaziabad, UP
                    </span>
                  </div>

                  {/* Visual Centerpiece */}
                  <div className="my-6 rounded-xl bg-gradient-to-br from-cream/10 via-dusty-blue/10 to-transparent p-5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-terracotta text-white shadow-md">
                        <GraduationCap className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-heading text-base font-bold text-white">
                          Duaen Primary School
                        </p>
                        <p className="text-xs text-dusty-blue/80">
                          Free elementary education up to Class 5
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-lg bg-white/5 p-2.5 border border-white/5">
                        <span className="text-dusty-blue/70 block">Mentors</span>
                        <span className="font-semibold text-white">
                          Student Interns
                        </span>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2.5 border border-white/5">
                        <span className="text-dusty-blue/70 block">Location</span>
                        <span className="font-semibold text-white">
                          D-Block Centre
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Initiatives List */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 rounded-lg bg-white/5 p-3 border border-white/10">
                      <Heart
                        className="h-5 w-5 text-terracotta-light shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="text-xs">
                        <p className="font-semibold text-white">
                          Women&apos;s Vocational Sewing Training
                        </p>
                        <p className="text-dusty-blue/80">
                          Building practical tailoring skills for self-reliance
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg bg-white/5 p-3 border border-white/10">
                      <Stethoscope
                        className="h-5 w-5 text-mustard shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="text-xs">
                        <p className="font-semibold text-white">
                          Community Health &amp; First-Aid
                        </p>
                        <p className="text-dusty-blue/80">
                          Doctor consultations, first-aid &amp; CPR sessions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer note inside card */}
                  <div className="mt-5 pt-4 border-t border-white/10 text-center">
                    <p className="text-xs text-dusty-blue/70 italic">
                      Dedicated to dignity, education, and compassionate community care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: INTRODUCTION */}
      <Section background="cream" id="intro" className="border-b border-border">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-terracotta mb-3">
            About Our Organization
          </p>
          <h2 className="font-heading text-2xl font-bold sm:text-3xl lg:text-4xl text-navy leading-snug">
            Duaen Foundation NGO is a social welfare organization working to empower
            underprivileged communities through education, women&apos;s empowerment,
            healthcare initiatives, and community support.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed">
            From our grassroots base in Ghaziabad, we address pressing local
            challenges by providing accessible learning opportunities for young children,
            vocational training that enables women to earn independent livelihoods,
            and health awareness programs that protect community wellbeing.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/about" variant="secondary">
              Learn More About Our Journey &amp; Values
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* SECTION C: MISSION AND VISION */}
      <Section background="white" id="mission-vision">
        <SectionHeading
          title="Our Guiding Principles"
          subtitle="Our mission and vision define why we exist and provide the blueprint for every program we launch."
          centered={true}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-cream/40 p-8 sm:p-10 transition-shadow hover:shadow-md">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta text-white shadow-xs">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                    Core Purpose
                  </span>
                  <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                    {MISSION.title}
                  </h3>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-navy leading-relaxed border-l-3 border-terracotta pl-4 my-4">
                &ldquo;{MISSION.text}&rdquo;
              </blockquote>

              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                We believe practical assistance combined with consistent foundational
                schooling can unlock true generational progress. Our programs are designed
                to be immediate, practical, and sustainably rooted within the communities
                we serve.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-xs font-semibold text-navy">
              <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
              <span>Dignity • Independence • Grassroots Action</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-dusty-blue/25 p-8 sm:p-10 transition-shadow hover:shadow-md">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white shadow-xs">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-light">
                    Future Aspiration
                  </span>
                  <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                    {VISION.title}
                  </h3>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-navy leading-relaxed border-l-3 border-navy pl-4 my-4">
                &ldquo;{VISION.text}&rdquo;
              </blockquote>

              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                Our vision looks beyond temporary relief to an inclusive society where
                every child sits in a nurturing classroom and every woman and caregiver has
                the vocational confidence to live with economic freedom and dignity.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-xs font-semibold text-navy">
              <CheckCircle2 className="h-4 w-4 text-navy shrink-0" aria-hidden="true" />
              <span>Inclusion • Equality • Community Ownership</span>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION D: OUR WORK (Varied Grid Layout) */}
      <Section
        background="white"
        className="border-t border-border"
        id="programs"
      >
        <SectionHeading
          title="Our Key Program Areas"
          subtitle="Explore the six interconnected focus areas through which we create opportunities and support local families."
          centered={true}
        />

        {/* Varied Grid: Asymmetrical Bento Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {/* Card 1: Education & Duaen Primary School (Large Hero Bento Card: lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-border bg-gradient-to-br from-cream via-cream/50 to-dusty-blue/20 p-6 sm:p-8 hover:border-terracotta/50 transition-all shadow-xs">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta text-white shadow-xs">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                      Flagship Initiative
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy mt-1">
                      Education &amp; Duaen Primary School
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-base text-text-secondary leading-relaxed">
                Providing free education for children up to Class 5 in D-Block, Ghaziabad.
                Our classroom model pairs foundational reading and math instruction with
                caring guidance from college student interns and passionate community
                volunteers.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-text-primary">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Tuition-free learning for underprivileged children</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-primary">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Structured curriculum up to Class 5</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-primary">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
                  <span>College student interns and youth mentors</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-primary">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Foundational literacy and numeracy focus</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/80 flex items-center justify-between">
              <span className="text-xs font-medium text-text-secondary">
                D-Block, Ghaziabad • Regular weekday classes
              </span>
              <Link
                to="/programs#education"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
              >
                Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 2: Women's Empowerment (Accent Bento Card: lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-border bg-white p-6 sm:p-8 hover:border-terracotta/50 transition-all shadow-xs">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta mb-4">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                Livelihood &amp; Dignity
              </span>
              <h3 className="font-heading text-xl font-bold text-navy mt-1">
                Women&apos;s Empowerment &amp; Sewing
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Supporting women through skills development, vocational sewing
                training, and wellbeing initiatives designed to cultivate self-reliance,
                financial independence, and confidence.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-text-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Vocational tailoring &amp; stitching skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Independent income-generation pathways</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/programs#women-empowerment"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
              >
                Explore program <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 3: Healthcare & First-Aid Awareness (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-border bg-white p-6 sm:p-8 hover:border-navy/40 transition-all shadow-xs">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dusty-blue text-navy mb-4">
                <Stethoscope className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-light">
                Wellness &amp; Safety
              </span>
              <h3 className="font-heading text-lg font-bold text-navy mt-1">
                Healthcare &amp; First-Aid Awareness
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Organizing health-awareness camps, first-aid and CPR training
                sessions, and community health consultations with partner medical
                institutions and doctors.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/programs#healthcare"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-terracotta transition-colors"
              >
                View health camps <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 4: Community Welfare & Essential Support (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white hover:border-navy/40 transition-all shadow-xs group">
            <div className="relative aspect-video w-full overflow-hidden bg-navy/5">
              <img
                src="/images/events/cloth-distribution/volunteer-distribution-outreach.jpg"
                alt="Duaen Foundation NGO representative distributing food and care packages to community children beside official banner"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-navy-light">
                  Direct Relief
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-1">
                  Community Welfare &amp; Relief
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  Conducting essential clothing assistance, ration support drives,
                  and compassionate grassroots relief for vulnerable families across Ghaziabad.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <Link
                  to="/programs#community-welfare"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-terracotta transition-colors"
                >
                  Learn about relief <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <span className="text-xs text-text-secondary/70">Nov 2025 Drive</span>
              </div>
            </div>
          </div>

          {/* Card 5: Computer Learning (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-border bg-white p-6 sm:p-8 hover:border-navy/40 transition-all shadow-xs">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mustard/20 text-navy mb-4">
                <Monitor className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-light">
                Digital Inclusion
              </span>
              <h3 className="font-heading text-lg font-bold text-navy mt-1">
                Computer Learning
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Providing students with access to foundational computer literacy,
                basic digital tools, and practical exposure to prepare them for an
                increasingly digital world.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/programs#computer-learning"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-terracotta transition-colors"
              >
                Digital initiatives <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 6: Volunteer Engagement (Wide Banner Bento Card: lg:col-span-12) */}
          <div className="lg:col-span-12 rounded-2xl bg-navy text-white p-5 sm:p-8 lg:p-10 shadow-lg">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-mustard shrink-0">
                    <HandHeart className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-dusty-blue">
                    Youth &amp; Community Solidarity
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Volunteer Engagement &amp; Student Internships
                </h3>
                <p className="mt-2 text-sm sm:text-base text-dusty-blue/90 leading-relaxed max-w-3xl">
                  College students, young professionals, and community members power
                  our classrooms and welfare drives. Interns gain meaningful grassroots
                  experience while delivering high-impact mentorship to primary school
                  children.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <ButtonLink to="/volunteer" variant="primary">
                  Join Our Volunteer Network
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION E: FEATURED SCHOOL INITIATIVE (Dusty Blue Background) */}
      <Section background="dusty-blue" id="featured-school">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Descriptive Narrative */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-wider text-terracotta mb-3">
              Featured Educational Initiative
            </p>

            <h2 className="font-heading text-2xl font-bold sm:text-3xl lg:text-4xl text-navy leading-tight">
              Duaen Primary School — Free Quality Education in Ghaziabad
            </h2>

            <div className="mt-5 space-y-4 text-base text-text-primary leading-relaxed">
              <p>
                Duaen Primary School operates in D-Block, Ghaziabad, as a welcoming
                learning haven for children from underprivileged families. We believe
                that basic education should be universally accessible, free from tuition
                fees or financial barriers.
              </p>
              <p>
                The school provides comprehensive primary schooling spanning classes up
                to Class 5, with curriculum centered around reading, writing, foundational
                mathematics, and creative expression.
              </p>
              <p>
                A core pillar of our school is our energetic volunteer network: college
                student interns and young volunteers regularly conduct classes, mentor
                students individually, and introduce engaging extracurricular activities
                that make learning joyful.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/70 p-4 border border-navy/10 backdrop-blur-xs">
                <span className="font-heading text-sm font-bold text-navy block">
                  Completely Free of Cost
                </span>
                <span className="text-xs text-text-secondary mt-0.5 block">
                  Zero tuition fees, opening doors for local children
                </span>
              </div>
              <div className="rounded-xl bg-white/70 p-4 border border-navy/10 backdrop-blur-xs">
                <span className="font-heading text-sm font-bold text-navy block">
                  Primary Classes to Class 5
                </span>
                <span className="text-xs text-text-secondary mt-0.5 block">
                  Strong foundational literacy and numeracy focus
                </span>
              </div>
              <div className="rounded-xl bg-white/70 p-4 border border-navy/10 backdrop-blur-xs">
                <span className="font-heading text-sm font-bold text-navy block">
                  College Student Mentors
                </span>
                <span className="text-xs text-text-secondary mt-0.5 block">
                  Interns teach, tutor, and guide children daily
                </span>
              </div>
              <div className="rounded-xl bg-white/70 p-4 border border-navy/10 backdrop-blur-xs">
                <span className="font-heading text-sm font-bold text-navy block">
                  D-Block, Ghaziabad
                </span>
                <span className="text-xs text-text-secondary mt-0.5 block">
                  Community-embedded center serving neighborhood families
                </span>
              </div>
            </div>

            <div className="mt-8">
              <ButtonLink to="/programs" variant="secondary">
                Explore Our Programs
              </ButtonLink>
            </div>
          </div>

          {/* Right Column: Visual School Showcase Card */}
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl border border-navy/15 bg-gradient-to-br from-white via-cream to-dusty-blue/40 p-6 sm:p-8 shadow-md"
              role="img"
              aria-label="Overview card of Duaen Primary School learning environment"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy">
                      Duaen Primary School
                    </h3>
                    <p className="text-xs text-text-secondary">
                      D-Block, Ghaziabad, UP 201003
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-navy">
                  Active School
                </span>
              </div>

              {/* School Visual Placeholder with Gradient */}
              <div className="my-5 rounded-xl bg-gradient-to-br from-cream-dark to-dusty-blue p-6 text-center border border-border">
                <BookOpen className="mx-auto h-10 w-10 text-navy/70 mb-2" aria-hidden="true" />
                <p className="font-heading text-sm font-bold text-navy">
                  Foundational Classroom Learning
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Literacy • Numeracy • Creative Activities • Moral Values
                </p>
              </div>

              {/* Learning Pillars */}
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-white/80 p-3 text-xs border border-border">
                  <span className="font-semibold text-navy">Curriculum Level</span>
                  <span className="text-text-secondary">Classes up to Class 5</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/80 p-3 text-xs border border-border">
                  <span className="font-semibold text-navy">Teaching Team</span>
                  <span className="text-text-secondary">College Interns &amp; Volunteers</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/80 p-3 text-xs border border-border">
                  <span className="font-semibold text-navy">Admission Fee</span>
                  <span className="font-bold text-terracotta uppercase">
                    100% Free of Cost
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border text-center">
                <p className="text-xs text-text-secondary italic">
                  Creating safe, joyful, and encouraging spaces for young minds to bloom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION F: WOMEN'S EMPOWERMENT (White Background) */}
      <Section background="white" id="women-empowerment">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Visual Showcase Card */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div
              className="rounded-2xl border border-border bg-gradient-to-br from-cream via-white to-dusty-blue/20 p-6 sm:p-8 shadow-sm"
              role="img"
              aria-label="Illustration representing women's vocational sewing and self-reliance training"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-terracotta text-white">
                    <Heart className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-navy">
                      Vocational Sewing Centre
                    </h3>
                    <p className="text-xs text-text-secondary">
                      Skills for Economic Independence
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-terracotta">
                  Vocational Hub
                </span>
              </div>

              {/* Centre Visual Placeholder with Gradient */}
              <div className="my-5 rounded-xl bg-gradient-to-br from-cream-dark via-dusty-blue/30 to-cream p-6 text-center border border-border">
                <Sparkles className="mx-auto h-10 w-10 text-terracotta/80 mb-2" aria-hidden="true" />
                <p className="font-heading text-sm font-bold text-navy">
                  Hands-on Tailoring &amp; Craftsmanship
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Machine Stitching • Cutting • Garment Assembly • Finishing
                </p>
              </div>

              {/* Skills Highlights */}
              <div className="space-y-3">
                <div className="rounded-lg bg-white p-3 text-xs border border-border">
                  <span className="font-semibold text-navy block">
                    Practical Tailoring Techniques
                  </span>
                  <span className="text-text-secondary block mt-0.5">
                    Step-by-step instruction on stitching everyday garments
                  </span>
                </div>
                <div className="rounded-lg bg-white p-3 text-xs border border-border">
                  <span className="font-semibold text-navy block">
                    Economic Self-Reliance
                  </span>
                  <span className="text-text-secondary block mt-0.5">
                    Skills that equip women for home-based earning and independence
                  </span>
                </div>
                <div className="rounded-lg bg-white p-3 text-xs border border-border">
                  <span className="font-semibold text-navy block">
                    Supportive Community Circle
                  </span>
                  <span className="text-text-secondary block mt-0.5">
                    A safe, empowering environment fostering mutual encouragement
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-border text-center">
                <p className="text-xs text-text-secondary italic">
                  When women build skills, families thrive and communities flourish.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-wider text-terracotta mb-3">
              Vocational Training &amp; Livelihoods
            </p>

            <h2 className="font-heading text-2xl font-bold sm:text-3xl lg:text-4xl text-navy leading-tight">
              Fostering Self-Reliance Through Vocational Sewing &amp; Skills
            </h2>

            <div className="mt-5 space-y-4 text-base text-text-secondary leading-relaxed">
              <p>
                At Duaen Foundation NGO, our women&apos;s empowerment program centers on
                delivering tangible, practical skills that translate into lasting
                independence.
              </p>
              <p>
                Our vocational sewing centre offers structured training in garment
                stitching, pattern measurement, cutting, and tailoring. These practical
                proficiencies empower women to undertake tailoring work, earn
                sustainable supplementary income, and gain greater financial autonomy.
              </p>
              <p>
                Beyond technical sewing education, the centre provides a warm space for
                wellbeing, peer mentorship, and shared confidence, helping each participant
                realize her strength and potential.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-navy text-sm block">
                    Vocational Sewing Training
                  </span>
                  <span className="text-xs text-text-secondary">
                    Structured hands-on practice in tailoring and garment construction
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-navy text-sm block">
                    Pathways to Financial Independence
                  </span>
                  <span className="text-xs text-text-secondary">
                    Equipping participants to take local tailoring orders or start micro-ventures
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-navy text-sm block">
                    Wellbeing &amp; Confidence Building
                  </span>
                  <span className="text-xs text-text-secondary">
                    Creating an encouraging and dignified environment for mutual growth
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ButtonLink to="/programs" variant="primary">
                Learn About Our Programs
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION F.5: COMMUNITY WELFARE & RELIEF SPOTLIGHT (White Background - Real Field Documentation) */}
      <Section background="white" id="community-welfare-spotlight">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Feature */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-cream shadow-md group">
              <img
                src="/images/events/cloth-distribution/cloth-distribution-overview.jpg"
                alt="Duaen Foundation NGO volunteers and community families gathered for clothing and relief distribution in Ghaziabad"
                loading="lazy"
                className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-mustard mb-1.5 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  30 November 2025
                </p>
                <p className="font-heading text-base sm:text-lg font-bold text-white">
                  Cloth &amp; Seasonal Relief Distribution Campaign
                </p>
                <p className="text-xs text-dusty-blue/90 flex items-center gap-1.5 mt-1">
                  <MapPin className="h-3.5 w-3.5 text-mustard shrink-0" aria-hidden="true" />
                  Peri-urban settlement, Ghaziabad, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Small inset authentic photo card */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 items-center gap-3 rounded-xl border border-white/20 bg-navy p-3 text-white shadow-xl max-w-xs">
              <img
                src="/images/events/cloth-distribution/women-volunteers-outreach.jpg"
                alt="Women volunteers engaging with community members"
                className="h-14 w-14 rounded-lg object-cover shrink-0"
              />
              <div className="text-xs">
                <p className="font-bold text-white">Youth &amp; Women Volunteers</p>
                <p className="text-dusty-blue/80">Active field participation</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Factual Overview */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-terracotta">
              Documented Field Activity
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
              Direct Grassroots Relief for Vulnerable Families
            </h2>

            <p className="text-base text-text-secondary leading-relaxed">
              In addition to foundational primary schooling, Duaen Foundation NGO mobilizes on-the-ground social relief drives to support low-income and vulnerable households across Ghaziabad during harsh seasons.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-navy text-sm block">
                    Seasonal Clothing &amp; Winter Assistance
                  </span>
                  <span className="text-xs text-text-secondary">
                    Distributing warm clothes and care packages to children and families in peri-urban settlements.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-navy text-sm block">
                    Nutritional Care &amp; Refreshment Drives
                  </span>
                  <span className="text-xs text-text-secondary">
                    Providing fresh fruits, biscuits, and wholesome snacks during organized community assemblies.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-navy text-sm block">
                    Transparent Grassroots Presence
                  </span>
                  <span className="text-xs text-text-secondary">
                    Organized under official Duaen Foundation NGO registration banners with local youth participation.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <ButtonLink to="/impact#cloth-distribution-campaign" variant="primary">
                View Campaign Gallery
              </ButtonLink>
              <ButtonLink to="/programs#community-welfare" variant="outline">
                Our Welfare Programs
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION G: HEALTHCARE & COMMUNITY SUPPORT (Editorial Timeline Layout) */}
      <Section background="cream" id="healthcare-community">
        <SectionHeading
          title="Healthcare & Community Support"
          subtitle="A timeline of our healthcare outreach, emergency first-aid workshops, and community resilience sessions."
          centered={true}
        />

        <div className="mx-auto max-w-4xl">
          {/* Editorial Timeline Track */}
          <div className="relative pl-10 sm:pl-14 space-y-8 sm:space-y-10">
            {/* Continuous vertical timeline line */}
            <div
              className="absolute top-6 bottom-6 left-4 sm:left-5 w-0.5 bg-border/80 -translate-x-1/2"
              aria-hidden="true"
            />

            {/* Event 1: Medical Camp with Yashoda Hospital */}
            <div className="relative group">
              {/* Timeline Pin */}
              <div
                className="absolute left-4 sm:left-5 top-5 sm:top-6 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white ring-4 ring-cream shadow-xs"
                aria-hidden="true"
              >
                <Stethoscope className="h-4 w-4" />
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 sm:p-7 transition-shadow hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                    Institutional Collaboration
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-cream/70 px-2.5 py-1 text-xs font-medium text-navy border border-border/60 self-start sm:self-auto max-w-full">
                    <Calendar className="h-3.5 w-3.5 text-terracotta shrink-0" aria-hidden="true" />
                    <span className="break-words">22 February (Year unrecorded in source records)</span>
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-navy">
                  {HEALTHCARE_EVENTS[0].title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  {HEALTHCARE_EVENTS[0].description} Five consulting doctors conducted
                  comprehensive medical consultations and health examinations for over
                  100 attendees from underprivileged families.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-border pt-4">
                  {HEALTHCARE_EVENTS[0].details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs font-medium text-text-primary"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-terracotta shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-text-secondary/80 italic">
                  Note: {HEALTHCARE_EVENTS[0].dateNote}
                </p>
              </div>
            </div>

            {/* Event 2: First-Aid & CPR Awareness Session */}
            <div className="relative group">
              {/* Timeline Pin */}
              <div
                className="absolute left-4 sm:left-5 top-5 sm:top-6 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-white ring-4 ring-cream shadow-xs"
                aria-hidden="true"
              >
                <Heart className="h-4 w-4" />
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 sm:p-7 transition-shadow hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                    Life Safety Education
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-cream/70 px-2.5 py-1 text-xs font-medium text-navy border border-border/60 self-start sm:self-auto max-w-full">
                    <Clock className="h-3.5 w-3.5 text-terracotta shrink-0" aria-hidden="true" />
                    <span className="break-words">Specialist-Led Student Workshop</span>
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-navy">
                  {HEALTHCARE_EVENTS[1].title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  {HEALTHCARE_EVENTS[1].description} Led by healthcare professional Dr.
                  Varsha Maurya, the session trained students on recognizing medical
                  emergencies, administering basic first-aid, and basic CPR techniques.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-border pt-4">
                  {HEALTHCARE_EVENTS[1].details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs font-medium text-text-primary"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-terracotta shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-text-secondary/80 italic">
                  Note: {HEALTHCARE_EVENTS[1].dateNote}
                </p>
              </div>
            </div>

            {/* Event 3: Disaster Management Awareness Session */}
            <div className="relative group">
              {/* Timeline Pin */}
              <div
                className="absolute left-4 sm:left-5 top-5 sm:top-6 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-mustard text-navy ring-4 ring-cream shadow-xs"
                aria-hidden="true"
              >
                <ShieldCheck className="h-4 w-4" />
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 sm:p-7 transition-shadow hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                    University Volunteer Collaboration
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-cream/70 px-2.5 py-1 text-xs font-medium text-navy border border-border/60 self-start sm:self-auto max-w-full">
                    <Calendar className="h-3.5 w-3.5 text-terracotta shrink-0" aria-hidden="true" />
                    <span className="break-words">12 October 2026 (Date subject to confirmation)</span>
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-navy">
                  {HEALTHCARE_EVENTS[2].title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  {HEALTHCARE_EVENTS[2].description} Three dedicated Christ University
                  student volunteers led an engaging workshop on disaster preparedness,
                  evacuation measures, and emergency response for the school community.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-border pt-4">
                  {HEALTHCARE_EVENTS[2].details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs font-medium text-text-primary"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-terracotta shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-text-secondary/80 italic">
                  Note: {HEALTHCARE_EVENTS[2].dateNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION H: IMPACT PREVIEW (Navy Background - Activities, NOT animated counters or fake stats) */}
      <Section background="navy" id="impact">
        <SectionHeading
          title="Our Ongoing Impact in Communities"
          subtitle="We evaluate our progress through real, everyday grassroots commitments and consistent community service, rather than speculative metrics."
          centered={true}
          light={true}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Activity 1: Continuous Free Education */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta text-white mb-5 shadow-xs">
                <BookOpen className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                Continuous Primary Education
              </h3>
              <p className="mt-3 text-sm text-dusty-blue/90 leading-relaxed">
                Operating Duaen Primary School tuition-free for underprivileged
                children, instilling foundational reading, writing, and arithmetic skills
                in an encouraging environment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-dusty-blue">
              Focus: Foundational literacy &amp; schooling
            </div>
          </div>

          {/* Activity 2: Women's Vocational Training */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta text-white mb-5 shadow-xs">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                Vocational Tailoring &amp; Self-Reliance
              </h3>
              <p className="mt-3 text-sm text-dusty-blue/90 leading-relaxed">
                Conducting hands-on sewing and garment crafting classes for women,
                creating practical pathways toward home-based tailoring income and
                social independence.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-dusty-blue">
              Focus: Livelihood &amp; economic dignity
            </div>
          </div>

          {/* Activity 3: Healthcare Camps & First-Aid */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dusty-blue text-navy mb-5 shadow-xs">
                <Stethoscope className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                Preventive Health &amp; CPR Literacy
              </h3>
              <p className="mt-3 text-sm text-dusty-blue/90 leading-relaxed">
                Partnering with hospitals and qualified doctors to provide free
                checkups and teaching primary students essential first-aid and CPR
                procedures.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-dusty-blue">
              Focus: Preventive care &amp; emergency skills
            </div>
          </div>

          {/* Activity 4: Community Relief & Welfare */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mustard text-navy mb-5 shadow-xs">
                <Users className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">
                Direct Community Welfare Drives
              </h3>
              <p className="mt-3 text-sm text-dusty-blue/90 leading-relaxed">
                Mobilizing essential ration distributions, clothing support drives,
                and polio awareness campaigns to support vulnerable families in times of
                need.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-dusty-blue">
              Focus: Food security &amp; family assistance
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <ButtonLink to="/impact" variant="outline-light">
            Read Our Full Impact Overview
          </ButtonLink>
        </div>
      </Section>

      {/* SECTION I: PHOTO GALLERY PREVIEW (White Background - Clean Grid of Gradient Placeholders) */}
      <Section background="white" id="gallery">
        <SectionHeading
          title="Moments from the Ground"
          subtitle="A preview of key activities across our primary school, vocational sewing centre, health camps, and volunteer initiatives."
          centered={true}
        />

        {/* 3-column on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Gallery Item 1: Primary Education */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-cream-dark via-cream to-dusty-blue/40 p-6 min-h-[260px] shadow-xs hover:shadow-md transition-all"
            role="img"
            aria-label="Placeholder graphic representing primary school classroom learning activities at Duaen Primary School"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-navy">
                  Education
                </span>
                <GraduationCap className="h-5 w-5 text-navy/70" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                Classroom Learning &amp; Reading
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Daily foundational literacy and math sessions at Duaen Primary School,
                guided by interns and volunteer teachers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-text-secondary/80">
              <span>Duaen Primary School</span>
              <span className="italic">Activity Archive</span>
            </div>
          </div>

          {/* Gallery Item 2: Women's Empowerment */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-cream via-cream-dark/60 to-terracotta/10 p-6 min-h-[260px] shadow-xs hover:shadow-md transition-all"
            role="img"
            aria-label="Placeholder graphic representing vocational sewing training and skills workshops"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                  Women&apos;s Empowerment
                </span>
                <Heart className="h-5 w-5 text-terracotta/70" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                Vocational Sewing &amp; Tailoring
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Women mastering practical cutting, stitching, and garment finishing in
                a supportive community setting.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-text-secondary/80">
              <span>Sewing Centre</span>
              <span className="italic">Activity Archive</span>
            </div>
          </div>

          {/* Gallery Item 3: Healthcare Camp */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-dusty-blue/30 via-cream to-dusty-blue/50 p-6 min-h-[260px] shadow-xs hover:shadow-md transition-all"
            role="img"
            aria-label="Placeholder graphic representing community healthcare camp and consultations"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-navy">
                  Healthcare
                </span>
                <Stethoscope className="h-5 w-5 text-navy/70" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                Community Medical Consultations
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                Free health checkups and specialist doctor consultations conducted in
                collaboration with healthcare partners.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-text-secondary/80">
              <span>Yashoda Hospital Partner</span>
              <span className="italic">Activity Archive</span>
            </div>
          </div>

          {/* Gallery Item 4: Real Community Welfare Photo */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white shadow-xs hover:shadow-md transition-all">
            <div className="relative aspect-video w-full overflow-hidden bg-navy/5">
              <img
                src="/images/events/cloth-distribution/cloth-distribution-overview.jpg"
                alt="Duaen Foundation NGO team and community members at the cloth distribution drive in Ghaziabad"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-terracotta transition-colors">
                  Grassroots Clothing Distribution
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Volunteers gathering with local families to distribute warm winter clothing and essential care packages in Ghaziabad.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs">
                <span className="text-text-secondary">30 Nov 2025 • Ghaziabad</span>
                <Link
                  to="/impact#cloth-distribution-campaign"
                  className="font-semibold text-terracotta hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-terracotta rounded-xs"
                >
                  <span>View in Gallery</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery Item 5: Real Volunteer Outreach Photo */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white shadow-xs hover:shadow-md transition-all">
            <div className="relative aspect-video w-full overflow-hidden bg-navy/5">
              <img
                src="/images/events/cloth-distribution/women-volunteers-outreach.jpg"
                alt="Women volunteers from Duaen Foundation NGO coordinating care packages with community members"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-terracotta transition-colors">
                  Volunteer Relief &amp; Community Dialogue
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Dedicated women coordinators and youth volunteers organizing packages and interacting directly with local mothers and children.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs">
                <span className="text-text-secondary">Ghaziabad Fieldwork</span>
                <Link
                  to="/impact#cloth-distribution-campaign"
                  className="font-semibold text-terracotta hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-terracotta rounded-xs"
                >
                  <span>View in Gallery</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery Item 6: Real Youth Welfare Photo */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-white shadow-xs hover:shadow-md transition-all">
            <div className="relative aspect-video w-full overflow-hidden bg-navy/5">
              <img
                src="/images/events/cloth-distribution/community-children-lineup.jpg"
                alt="Community children gathered during Duaen Foundation welfare and clothing distribution drive"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-terracotta transition-colors">
                  Youth &amp; Family Welfare Support
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Children and families from local settlements attending our community assembly for clothing handovers and welfare engagement.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs">
                <span className="text-text-secondary">Outdoor Relief Drive</span>
                <Link
                  to="/impact#cloth-distribution-campaign"
                  className="font-semibold text-terracotta hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-terracotta rounded-xs"
                >
                  <span>View in Gallery</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Note on Gallery Documentation */}
        <div className="mt-8 rounded-xl bg-cream p-4 text-center border border-border max-w-2xl mx-auto">
          <p className="text-xs text-text-secondary">
            Note: The community welfare cards above display authenticated field photographs from our 30 November 2025 Ghaziabad clothing distribution campaign. Other program cards display temporary activity illustrations pending future photo releases.
          </p>
        </div>
      </Section>

      {/* REGISTRATIONS & RECOGNITIONS SECTION (Hidden until authentic verified credentials exist) */}
      <RegistrationsSection id="registrations" background="cream" />

      {/* SECTION J: GET INVOLVED (Terracotta / Warm Background) */}
      <section
        className="bg-terracotta py-16 sm:py-20 lg:py-24 text-white"
        id="get-involved"
        aria-labelledby="get-involved-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="get-involved-heading"
              className="font-heading text-2xl font-bold sm:text-3xl lg:text-4xl text-white"
            >
              How You Can Get Involved
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Whether you share your time, resources, or skills, your involvement
              directly strengthens our grassroots community mission.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Pathway 1: Volunteer */}
            <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-8 border border-white/20 backdrop-blur-xs transition-transform hover:-translate-y-1">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-terracotta mb-6 shadow-sm">
                  <HandHeart className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Volunteer With Us
                </h3>
                <p className="mt-3 text-sm text-white/90 leading-relaxed">
                  Join our passionate network of college students, interns, and
                  community mentors teaching primary school children or assisting in
                  community welfare drives.
                </p>
              </div>
              <div className="mt-8 pt-4">
                <ButtonLink
                  to="/volunteer"
                  variant="outline-light"
                  className="w-full"
                >
                  Become a Volunteer
                </ButtonLink>
              </div>
            </div>

            {/* Pathway 2: Support */}
            <div className="flex flex-col justify-between rounded-2xl bg-white text-text-primary p-8 border border-white/20 shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-terracotta text-white mb-6 shadow-sm">
                  <Heart className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  Support Our Work
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  Contribute toward classroom books, vocational sewing tools, medical
                  supplies, and seasonal relief packages for local families in
                  Ghaziabad.
                </p>
              </div>
              <div className="mt-8 pt-4">
                <ButtonLink to="/donate" variant="secondary" className="w-full">
                  Support Our Programs
                </ButtonLink>
              </div>
            </div>

            {/* Pathway 3: Contact */}
            <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-8 border border-white/20 backdrop-blur-xs transition-transform hover:-translate-y-1">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-terracotta mb-6 shadow-sm">
                  <Mail className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Contact &amp; Partner
                </h3>
                <p className="mt-3 text-sm text-white/90 leading-relaxed">
                  Have an institutional partnership idea, medical camp proposal, or
                  questions about admissions? Connect directly with our coordination
                  team.
                </p>
              </div>
              <div className="mt-8 pt-4">
                <ButtonLink
                  to="/contact"
                  variant="outline-light"
                  className="w-full"
                >
                  Reach Out to Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION K: FAQ (Cream Background with Accordion) */}
      <Section background="cream" id="faq">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Answers to common questions regarding our school, programs, volunteering, and governance."
          centered={true}
        />

        <div className="mx-auto max-w-3xl">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-xs">
            <Accordion items={FAQ_ITEMS} />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-text-secondary">
              Have a specific question not covered here?
            </p>
            <div className="mt-3">
              <ButtonLink to="/contact" variant="outline">
                Contact Our Team
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION L: CONTACT PREVIEW (White Background) */}
      <Section background="white" id="contact-preview">
        <SectionHeading
          title="Connect With Duaen Foundation"
          subtitle="We welcome enquiries from families, prospective volunteers, institutional partners, and supporters."
          centered={true}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Contact Details Card: lg:col-span-7 */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-border bg-cream/40 p-6 sm:p-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-navy mb-6">
                Official Channels &amp; Location
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${ORG.email}`}
                      className="font-heading text-base font-semibold text-terracotta hover:underline transition-colors mt-0.5 inline-block break-all"
                    >
                      {ORG.email}
                    </a>
                    <p className="text-xs text-text-secondary mt-0.5">
                      For general information, volunteering, and program partnerships
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mustard/20 text-navy">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block">
                      Social Media
                    </span>
                    <a
                      href={ORG.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-base font-semibold text-navy hover:text-terracotta transition-colors inline-flex items-center gap-1.5 mt-0.5 break-all"
                    >
                      @duaenfoundationngo
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </div>

                {/* School Location */}
                <div className="flex items-start gap-4 pt-2 border-t border-border">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block">
                      Primary School Location
                    </span>
                    <p className="font-heading text-base font-semibold text-navy mt-0.5">
                      {ORG.schoolName}, {ORG.schoolLocation}
                    </p>
                    <p className="mt-1.5 text-xs text-text-secondary/80 bg-white/70 p-2.5 rounded-lg border border-border">
                      * Please note: This address corresponds to Duaen Primary School.
                      The registered office address of the organization is subject to
                      formal verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs text-text-secondary">
              <Clock className="h-4 w-4 shrink-0 text-text-secondary" aria-hidden="true" />
              <span>We aim to respond to all email messages within 2–3 business days.</span>
            </div>
          </div>

          {/* Action Box: lg:col-span-5 */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                Online Enquiry
              </span>
              <h3 className="font-heading text-xl font-bold text-navy mt-3">
                Send Us a Direct Message
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Whether you want to enroll a child, inquire about our sewing classes,
                offer voluntary instruction, or partner on a medical drive, we are
                ready to assist.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-text-primary">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Student admission guidance for Class 1 to 5</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text-primary">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Internship and volunteer certificate queries</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text-primary">
                  <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
                  <span>Community health camp partnerships</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <ButtonLink to="/contact" variant="primary" className="w-full">
                Visit Contact Page &amp; Send Message
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
