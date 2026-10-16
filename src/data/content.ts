// Centralized content data for the Duaen Foundation NGO website.
// All organizational information is sourced from the supplied NGO document.
// Items marked with VERIFICATION_NEEDED require confirmation before publication.

export const ORG = {
  name: 'Duaen Foundation NGO',
  tagline: 'Helping • Healing • Caring',
  email: 'duaenfoundation@gmail.com',
  website: 'https://duaenfoundationngo.in',
  instagram: 'https://www.instagram.com/duaenfoundationngo/',
  schoolName: 'Duaen Primary School',
  schoolLocation: 'D-Block, Ghaziabad, Uttar Pradesh 201003',
  // NOTE: The school location is NOT the confirmed registered office address.
  // The registered office address is pending verification.
} as const

export const HERO = {
  headline: 'Creating opportunities. Supporting communities. Changing lives.',
  description:
    'Duaen Foundation NGO is a social welfare organization dedicated to empowering underprivileged communities through education, women\'s empowerment, healthcare awareness, and community support in Ghaziabad and beyond.',
  primaryCta: { label: 'Explore Our Work', href: '/programs' },
  secondaryCta: { label: 'Volunteer With Us', href: '/volunteer' },
} as const

export const MISSION = {
  title: 'Our Mission',
  text: 'To provide educational opportunities and essential support to underprivileged children and communities, helping them build a better and more independent future.',
} as const

export const VISION = {
  title: 'Our Vision',
  text: 'To build an inclusive society where every child has access to education and every individual has an opportunity to live with dignity.',
} as const

export interface Program {
  id: string
  title: string
  shortTitle: string
  description: string
  details: string[]
  icon: string
  ctaLabel: string
  ctaHref: string
}

export const PROGRAMS: Program[] = [
  {
    id: 'education',
    title: 'Education & Duaen Primary School',
    shortTitle: 'Education',
    description:
      'Providing free education for children up to Class 5 in Ghaziabad. College student interns and volunteers actively participate in teaching and mentoring.',
    details: [
      'Free education initiative for underprivileged children',
      'Classes up to Class 5 at Duaen Primary School, D-Block, Ghaziabad',
      'Teaching supported by college student interns and volunteers',
      'Focus on foundational literacy and numeracy skills',
    ],
    icon: 'GraduationCap',
    ctaLabel: 'Learn More About Our School',
    ctaHref: '/programs#education',
  },
  {
    id: 'women-empowerment',
    title: 'Women\'s Empowerment',
    shortTitle: 'Women\'s Empowerment',
    description:
      'Supporting women through skills development, wellbeing initiatives, vocational sewing training, and programs designed to foster self-reliance and independence.',
    details: [
      'Skills development and vocational training programs',
      'Sewing centre for vocational sewing training',
      'Wellbeing and self-reliance initiatives',
      'Programs designed to build independence and confidence',
    ],
    icon: 'Heart',
    ctaLabel: 'Explore Our Programs',
    ctaHref: '/programs#women-empowerment',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Awareness',
    shortTitle: 'Healthcare',
    description:
      'Organizing health-awareness camps, first-aid and CPR awareness sessions, and community medical support initiatives to improve public health understanding.',
    details: [
      'Health awareness camps in partnership with medical institutions',
      'First-aid and CPR awareness sessions for students',
      'Community medical support initiatives',
      'Collaboration with healthcare professionals',
    ],
    icon: 'Stethoscope',
    ctaLabel: 'Learn About Healthcare Initiatives',
    ctaHref: '/programs#healthcare',
  },
  {
    id: 'community-welfare',
    title: 'Community Welfare',
    shortTitle: 'Community Welfare',
    description:
      'Conducting ration distribution, clothing assistance, polio-related initiatives, and other social welfare activities to support underprivileged families.',
    details: [
      'Ration distribution for families in need',
      'Clothing assistance programs',
      'Polio-related awareness and support initiatives',
      'Essential community welfare support',
    ],
    icon: 'Users',
    ctaLabel: 'See Our Community Work',
    ctaHref: '/programs#community-welfare',
  },
  {
    id: 'computer-learning',
    title: 'Computer Learning',
    shortTitle: 'Computer Learning',
    description:
      'Providing access to computer learning and digital literacy support for students in the community.',
    details: [
      'Computer access and learning support',
      'Digital literacy education',
      'Hands-on technology exposure for students',
    ],
    icon: 'Monitor',
    ctaLabel: 'Learn More',
    ctaHref: '/programs#computer-learning',
  },
  {
    id: 'volunteer-engagement',
    title: 'Volunteer Engagement',
    shortTitle: 'Volunteering',
    description:
      'Engaging college students, interns, and community volunteers in teaching, mentoring, and community initiatives.',
    details: [
      'College student internship opportunities',
      'Community volunteer participation',
      'Teaching and mentoring support',
      'Event and program coordination',
    ],
    icon: 'HandHeart',
    ctaLabel: 'Get Involved',
    ctaHref: '/volunteer',
  },
]

export interface HealthcareEvent {
  title: string
  description: string
  details: string[]
  dateNote: string
}

export const HEALTHCARE_EVENTS: HealthcareEvent[] = [
  {
    title: 'Medical Camp with Yashoda Hospital',
    description:
      'A medical camp organized in collaboration with Yashoda Hospital on 22 February.',
    details: [
      'Over 100 attendees participated',
      'Five doctors provided medical consultations',
      'Organized in partnership with Yashoda Hospital',
    ],
    dateNote:
      'Held on 22 February. The specific year was not documented in the source material.',
  },
  {
    title: 'First-Aid & CPR Awareness Session',
    description:
      'A first-aid and CPR awareness session conducted for approximately 30 primary-school students.',
    details: [
      'Conducted with Dr. Varsha Maurya',
      'Approximately 30 primary-school students participated',
      'Focus on basic first-aid and CPR techniques',
    ],
    dateNote: 'Date not specified in source material.',
  },
  {
    title: 'Disaster Management Awareness Session',
    description:
      'A disaster-management awareness session held at Duaen Primary School.',
    details: [
      'Conducted by three Christ University students',
      'Held at Duaen Primary School',
      'Focus on disaster preparedness and safety',
    ],
    dateNote:
      'Documented as 12 October 2026. Date subject to confirmation.',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What does Duaen Foundation NGO do?',
    answer:
      'Duaen Foundation NGO is a social welfare organization working to empower underprivileged communities through education, women\'s empowerment, healthcare awareness, and community support. Our primary initiative is Duaen Primary School in Ghaziabad, providing free education to children.',
  },
  {
    question: 'What is Duaen Primary School?',
    answer:
      'Duaen Primary School is a free-education initiative in D-Block, Ghaziabad, providing education for children up to Class 5. The school is supported by college student interns and volunteers who participate in teaching and mentoring.',
  },
  {
    question: 'What kinds of programs does the organization support?',
    answer:
      'We support programs across education, women\'s empowerment (including vocational sewing training), healthcare awareness (medical camps, first-aid and CPR sessions), community welfare (ration distribution, clothing assistance), computer learning, and volunteer engagement.',
  },
  {
    question: 'How can I express interest in volunteering?',
    answer:
      'You can express your interest by visiting our Volunteer page and filling out the interest form, or by contacting us directly at duaenfoundation@gmail.com. We welcome college students, professionals, and community members who wish to contribute their time and skills.',
  },
  {
    question: 'How can I contact the organization?',
    answer:
      'You can reach us by email at duaenfoundation@gmail.com, through our Instagram page (@duaenfoundationngo), or by visiting our Contact page to send an enquiry.',
  },
  {
    question: 'How can I support Duaen Foundation NGO?',
    answer:
      'You can support us by volunteering your time and skills, spreading awareness about our work, or contacting us at duaenfoundation@gmail.com to discuss how you can contribute. For donation enquiries, please contact us directly for verified payment information.',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Our Impact', href: '/impact' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  explore: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Programs', href: '/programs' },
    { label: 'Our Impact', href: '/impact' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
} as const

// Gallery placeholder structure - images need to be replaced with approved assets
export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'education' | 'women-empowerment' | 'healthcare' | 'community' | 'volunteer' | 'disaster-management'
  categoryLabel: string
}

export const GALLERY_CATEGORIES = [
  { value: 'all', label: 'All Activities' },
  { value: 'education', label: 'Education' },
  { value: 'women-empowerment', label: 'Women\'s Empowerment' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'community', label: 'Community Welfare' },
  { value: 'volunteer', label: 'Volunteering' },
  { value: 'disaster-management', label: 'Disaster Management' },
] as const

// NOTE: All gallery images below are temporary placeholders.
// They must be replaced with approved, consented photographs from the organization.
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'edu-1',
    src: '/images/placeholder-education-1.jpg',
    alt: 'Placeholder: Classroom activity at Duaen Primary School (to be replaced with approved photograph)',
    category: 'education',
    categoryLabel: 'Education',
  },
  {
    id: 'edu-2',
    src: '/images/placeholder-education-2.jpg',
    alt: 'Placeholder: Students learning at Duaen Primary School (to be replaced with approved photograph)',
    category: 'education',
    categoryLabel: 'Education',
  },
  {
    id: 'we-1',
    src: '/images/placeholder-women-1.jpg',
    alt: 'Placeholder: Women\'s empowerment program activity (to be replaced with approved photograph)',
    category: 'women-empowerment',
    categoryLabel: "Women's Empowerment",
  },
  {
    id: 'hc-1',
    src: '/images/placeholder-healthcare-1.jpg',
    alt: 'Placeholder: Healthcare awareness camp activity (to be replaced with approved photograph)',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
  },
  {
    id: 'cw-1',
    src: '/images/placeholder-community-1.jpg',
    alt: 'Placeholder: Community welfare distribution event (to be replaced with approved photograph)',
    category: 'community',
    categoryLabel: 'Community Welfare',
  },
  {
    id: 'vol-1',
    src: '/images/placeholder-volunteer-1.jpg',
    alt: 'Placeholder: Volunteer engagement activity (to be replaced with approved photograph)',
    category: 'volunteer',
    categoryLabel: 'Volunteering',
  },
  {
    id: 'dm-1',
    src: '/images/placeholder-disaster-1.jpg',
    alt: 'Placeholder: Disaster management awareness session (to be replaced with approved photograph)',
    category: 'disaster-management',
    categoryLabel: 'Disaster Management',
  },
]
