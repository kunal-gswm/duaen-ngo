import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Camera,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Heart,
  Stethoscope,
  Users,
  Calendar,
  Info,
  ExternalLink,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Maximize2,
  Eye,
  ShieldCheck,
} from 'lucide-react'
import { PageHero, Section, SectionHeading, ButtonLink } from '../components/ui'
import SeoHead from '../components/SeoHead'
import Lightbox, { type LightboxImage } from '../components/Lightbox'
import {
  GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  HEALTHCARE_EVENTS,
  COMMUNITY_EVENT_CAMPAIGN,
  ORG,
} from '../data/content'

// Core impact areas structured descriptively without invented statistics or counters
const IMPACT_AREAS = [
  {
    id: 'education',
    title: 'Foundational Primary Education',
    subtitle: 'Duaen Primary School',
    icon: GraduationCap,
    description:
      'Duaen Primary School provides completely free education for children up to Class 5 in D-Block, Ghaziabad. Supported by dedicated college student interns and community volunteers, the school focuses on building literacy, fundamental numeracy, and creative confidence in a structured, nurturing learning environment.',
    points: [
      'Free schooling for children up to Class 5',
      'Daily classroom mentorship supported by college interns',
      'Focus on reading comprehension and foundational mathematics',
      'A safe, encouraging space designed to keep children in school',
    ],
  },
  {
    id: 'women-empowerment',
    title: "Women's Vocational Empowerment",
    subtitle: 'Sewing Centre & Skill Development',
    icon: Heart,
    description:
      "Our vocational sewing centre equips local women with practical tailoring and garment-crafting skills. Alongside technical craftsmanship, the program hosts discussions on personal wellbeing and mutual support, helping women foster economic self-reliance, dignity, and independent livelihoods.",
    points: [
      'Hands-on vocational sewing and tailoring sessions',
      'Fostering self-reliance and practical economic skills',
      'Peer support and women’s wellbeing discussions',
      'Creating sustainable avenues for home-based work',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare Awareness & First-Aid',
    subtitle: 'Preventive Health Outreach',
    icon: Stethoscope,
    description:
      'Collaborating with established healthcare institutions and medical professionals, we host community health camps, diagnostic screenings, and emergency readiness workshops. Primary school students and families gain practical knowledge in basic first-aid, CPR awareness, and preventive hygiene.',
    points: [
      'Multi-doctor health check-ups and consultations',
      'Interactive first-aid and CPR orientation for youth',
      'Health, hygiene, and emergency preparedness awareness',
      'Partnerships with respected medical institutions like Yashoda Hospital',
    ],
  },
  {
    id: 'community-welfare',
    title: 'Community Welfare & Relief',
    subtitle: 'Grassroots Community Support',
    icon: Users,
    description:
      'We coordinate direct social welfare assistance to support vulnerable families in times of acute need. Our grassroots interventions provide essential resources including dry ration supplies, seasonal clothing assistance, and proactive community mobilization during health drives.',
    points: [
      'Essential ration distribution for families experiencing hardship',
      'Seasonal clothing drives for winter and monsoon relief',
      'Community participation in national polio awareness drives',
      'Continuous local engagement to identify grassroots needs',
    ],
  },
]

export default function ImpactPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [activeLightboxImages, setActiveLightboxImages] = useState<LightboxImage[]>([])

  const openLightbox = useCallback((images: LightboxImage[], index: number) => {
    setActiveLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const filteredImages =
    selectedCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory)

  return (
    <div className="flex flex-col">
      {/* 1. SEO Head */}
      <SeoHead
        title="Our Impact"
        description="Explore the grassroots impact, program initiatives, healthcare camps, and activity gallery of Duaen Foundation NGO in Ghaziabad."
        path="/impact"
      />

      {/* 2. Hero Section */}
      <PageHero
        title="Our Impact & Gallery"
        description="Transparent grassroots impact across education, women's empowerment, healthcare awareness, and community welfare in Ghaziabad."
        breadcrumb="Our Impact"
      />

      {/* 3. Program Impact Highlights (Cream Background) */}
      <Section background="cream" id="program-impact">
        <SectionHeading
          title="Program Impact Highlights"
          subtitle="How our ongoing grassroots initiatives make a real difference for children, women, and families every day."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {IMPACT_AREAS.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.id}
                className="flex flex-col rounded-2xl border border-border bg-white p-7 sm:p-9 shadow-xs hover:border-terracotta/40 transition-colors"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream text-terracotta">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                      {area.subtitle}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  {area.description}
                </p>

                <div className="mt-auto border-t border-border/70 pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                    Key Focus & Approach
                  </h4>
                  <ul className="space-y-2">
                    {area.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* 4. Activity Highlights (White Background) */}
      <Section background="white" id="activity-highlights">
        <SectionHeading
          title="Healthcare & Community Activities"
          subtitle="A documented timeline of health camps, training sessions, and collaborative events organized by Duaen Foundation NGO."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-border ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {HEALTHCARE_EVENTS.map((event, index) => (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-terracotta text-white shadow-xs"
                  aria-hidden="true"
                >
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>

                {/* Event Card */}
                <div className="rounded-xl border border-border bg-cream/30 p-6 sm:p-8 transition-all hover:bg-cream/50 hover:shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-heading text-xl font-bold text-navy">
                      {event.title}
                    </h3>
                  </div>

                  <p className="text-text-primary leading-relaxed mb-5">
                    {event.description}
                  </p>

                  {/* Event Details bullets */}
                  <div className="mb-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Event Summary
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {event.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/60"
                            aria-hidden="true"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Date Note / Transparency disclosure */}
                  <div className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-white/90 p-3.5 text-xs text-text-secondary">
                    <Info className="h-4 w-4 shrink-0 text-mustard mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-navy">Record Note: </span>
                      <span className="italic">{event.dateNote}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4.5 Dedicated Event Showcase: Cloth & Seasonal Relief Distribution Campaign */}
      <Section background="white" id="cloth-distribution-campaign">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-1 text-xs font-semibold text-terracotta mb-3">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Verified Field Activity • {COMMUNITY_EVENT_CAMPAIGN.date}</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                {COMMUNITY_EVENT_CAMPAIGN.title}
              </h2>
              <p className="mt-3 text-base text-text-secondary max-w-3xl leading-relaxed">
                {COMMUNITY_EVENT_CAMPAIGN.summary}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-navy bg-cream/70 rounded-xl px-4 py-3 shrink-0 border border-border">
              <MapPin className="h-4 w-4 text-terracotta shrink-0" aria-hidden="true" />
              <span>{COMMUNITY_EVENT_CAMPAIGN.location}</span>
            </div>
          </div>

          {/* Campaign Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMMUNITY_EVENT_CAMPAIGN.highlights.map((highlight, hIdx) => (
              <div
                key={hIdx}
                className="flex items-start gap-3 rounded-xl border border-border bg-cream/30 p-4 text-xs text-text-secondary"
              >
                <CheckCircle2 className="h-4 w-4 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Curated Grid of Authentic Photographs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_EVENT_CAMPAIGN.images.map((img, idx) => (
              <div
                key={img.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all hover:shadow-md hover:border-terracotta/40"
              >
                <button
                  type="button"
                  className="relative aspect-video w-full overflow-hidden bg-navy/5 text-left cursor-pointer focus-visible:outline-3 focus-visible:outline-terracotta"
                  onClick={() => openLightbox(COMMUNITY_EVENT_CAMPAIGN.images, idx)}
                  aria-label={`Enlarge photo: ${img.title}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-navy shadow-md">
                      <Eye className="h-3.5 w-3.5 text-terracotta" aria-hidden="true" />
                      <span>View Full Size</span>
                    </span>
                  </div>
                  <div className="absolute top-2.5 left-2.5">
                    <span className="rounded-md bg-navy/85 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-xs">
                      {img.categoryLabel}
                    </span>
                  </div>
                </button>

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading text-sm font-bold text-navy group-hover:text-terracotta transition-colors">
                      {img.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-text-secondary leading-relaxed line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-[11px] text-text-secondary/80">
                    <span>{img.date}</span>
                    <button
                      type="button"
                      onClick={() => openLightbox(COMMUNITY_EVENT_CAMPAIGN.images, idx)}
                      className="font-semibold text-terracotta hover:underline inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-terracotta rounded-xs"
                    >
                      <span>Enlarge</span>
                      <Maximize2 className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy & Dignity Commitment Notice */}
          <div className="rounded-xl border border-border bg-cream/40 p-4 text-xs text-text-secondary flex items-start gap-3">
            <Info className="h-4 w-4 text-mustard shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              <strong className="text-navy">Community Dignity & Transparency:</strong> Duaen Foundation NGO records on-the-ground activities to document genuine social stewardship. All attendees participated willingly during this open relief session in Ghaziabad. We preserve full respectful contextual integrity across all published imagery.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. Photo Gallery (Dusty-Blue Background) */}
      <Section background="dusty-blue" id="photo-gallery">
        <SectionHeading
          title="Activity Photo Gallery"
          subtitle="A comprehensive visual archive of our grassroots initiatives across community welfare, primary education, skills training, and volunteer participation."
        />

        {/* Filter Navigation and Buttons */}
        <div className="mb-10">
          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            role="toolbar"
            aria-label="Filter gallery by category"
          >
            {/* Previous Category quick navigation */}
            <button
              type="button"
              onClick={() => {
                const currentIndex = GALLERY_CATEGORIES.findIndex(
                  (c) => c.value === selectedCategory
                )
                const prevIndex =
                  (currentIndex - 1 + GALLERY_CATEGORIES.length) %
                  GALLERY_CATEGORIES.length
                setSelectedCategory(GALLERY_CATEGORIES[prevIndex].value)
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-navy hover:bg-cream transition-colors focus-visible:outline-3 focus-visible:outline-terracotta"
              aria-label="Previous category"
              title="Previous category"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-3 focus-visible:outline-terracotta ${
                    isActive
                      ? 'bg-terracotta text-white shadow-xs'
                      : 'bg-white text-navy hover:bg-cream border border-border'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}

            {/* Next Category quick navigation */}
            <button
              type="button"
              onClick={() => {
                const currentIndex = GALLERY_CATEGORIES.findIndex(
                  (c) => c.value === selectedCategory
                )
                const nextIndex =
                  (currentIndex + 1) % GALLERY_CATEGORIES.length
                setSelectedCategory(GALLERY_CATEGORIES[nextIndex].value)
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-navy hover:bg-cream transition-colors focus-visible:outline-3 focus-visible:outline-terracotta"
              aria-label="Next category"
              title="Next category"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Active filter clear indicator when not viewing all */}
          {selectedCategory !== 'all' && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-xs text-text-secondary">
                Filtered view active
              </span>
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className="inline-flex items-center gap-1 rounded-full bg-white/80 hover:bg-white px-2.5 py-1 text-xs font-semibold text-terracotta border border-border shadow-2xs transition-colors"
                aria-label="Reset filter to all activities"
              >
                <span>Reset filter</span>
                <X className="h-3 w-3" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredImages.map((image, idx) => (
              <div
                key={image.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-xs transition-all hover:shadow-md hover:border-navy/20"
              >
                {image.isAuthentic ? (
                  /* Authentic photograph display */
                  <button
                    type="button"
                    onClick={() => openLightbox(filteredImages, idx)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-navy/5 text-left cursor-pointer focus-visible:outline-3 focus-visible:outline-terracotta"
                    aria-label={`Enlarge photo: ${image.title || image.alt}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/35 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-navy shadow-md">
                        <Eye className="h-3.5 w-3.5 text-terracotta" aria-hidden="true" />
                        <span>Enlarge Photo</span>
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-navy/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-mustard" aria-hidden="true" />
                        {image.categoryLabel}
                      </span>
                    </div>
                  </button>
                ) : (
                  /* Visual placeholder box with CSS gradient for pending releases */
                  <div
                    className="relative aspect-[4/3] w-full bg-gradient-to-br from-cream-dark to-dusty-blue-dark flex flex-col items-center justify-center p-6 text-center select-none"
                    role="img"
                    aria-label={image.alt}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-navy shadow-xs mb-3 group-hover:scale-105 transition-transform">
                      <Camera className="w-7 h-7 text-navy" aria-hidden="true" />
                    </div>
                    <span className="inline-block rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-2xs">
                      {image.categoryLabel}
                    </span>
                    <p className="text-xs text-text-secondary mt-2 font-medium">
                      Official Photo Pending Release
                    </p>
                  </div>
                )}

                {/* Card Information */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
                        {image.categoryLabel}
                      </span>
                      {image.isAuthentic ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-navy bg-cream px-2 py-0.5 rounded-md">
                          <CheckCircle2 className="h-3 w-3 text-terracotta" aria-hidden="true" />
                          Verified Event
                        </span>
                      ) : (
                        <span className="text-[11px] text-text-secondary/70">
                          ID: {image.id}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-base font-bold text-navy group-hover:text-terracotta transition-colors">
                      {image.title || image.alt}
                    </h3>

                    {image.caption && (
                      <p className="mt-2 text-xs text-text-secondary leading-relaxed line-clamp-2">
                        {image.caption}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs text-text-secondary">
                    <span>{image.date || 'Activity Archive'}</span>
                    {image.isAuthentic ? (
                      <button
                        type="button"
                        onClick={() => openLightbox(filteredImages, idx)}
                        className="font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
                      >
                        <span>View</span>
                        <Maximize2 className="h-3 w-3" aria-hidden="true" />
                      </button>
                    ) : (
                      <span className="italic text-text-secondary/70">Awaiting Release</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center py-12 px-6 bg-white rounded-2xl border border-border">
            <Camera className="mx-auto h-12 w-12 text-text-secondary/40 mb-3" aria-hidden="true" />
            <h3 className="font-heading text-lg font-bold text-navy">
              No images in this category
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              There are currently no images recorded under this filter.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta hover:underline"
            >
              <Filter className="w-4 h-4" /> Reset to All Activities
            </button>
          </div>
        )}
      </Section>

      {/* 6. Note About Content (White Background) */}
      <Section background="white">
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-cream/40 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dusty-blue text-navy">
              <Info className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-navy sm:text-xl">
                Information & Verification Note
              </h3>
              <p className="mt-2 text-text-secondary leading-relaxed text-sm sm:text-base">
                Annual reports, verified impact statistics, and approved beneficiary stories will be published as they become available. For the latest updates on our work, follow us on Instagram or contact us directly.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={ORG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors"
                >
                  Follow us on Instagram
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <span className="text-border hidden sm:inline" aria-hidden="true">
                  •
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-light transition-colors"
                >
                  Contact Our Team
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. CTA Section (Navy Background) */}
      <Section background="navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            See Our Work in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dusty-blue/90 leading-relaxed">
            Discover our comprehensive programs, volunteer with our primary school, or connect with our team to help empower children and women in Ghaziabad.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink to="/programs" variant="primary">
              Explore Programs
            </ButtonLink>
            <ButtonLink to="/volunteer" variant="outline-light">
              Volunteer With Us
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Accessible Interactive Lightbox */}
      <Lightbox
        images={activeLightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  )
}
