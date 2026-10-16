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

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title?: string
  caption?: string
  date?: string
  location?: string
  isAuthentic?: boolean
  aspectRatio?: 'landscape' | 'portrait'
  category:
    | 'education'
    | 'women-empowerment'
    | 'healthcare'
    | 'community'
    | 'volunteer'
    | 'disaster-management'
  categoryLabel: string
}

export const GALLERY_CATEGORIES = [
  { value: 'all', label: 'All Activities' },
  { value: 'community', label: 'Community Welfare (Real Photos)' },
  { value: 'volunteer', label: 'Volunteering' },
  { value: 'education', label: 'Education' },
  { value: 'women-empowerment', label: "Women's Empowerment" },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'disaster-management', label: 'Disaster Management' },
] as const

/**
 * Authentic Documented Event: Cloth & Relief Distribution Campaign
 * Source: Official Google Drive archive "Cloth distribution campaign Duaen NGO"
 * Date: 30 November 2025
 * Location: Ghaziabad, Uttar Pradesh
 */
export const COMMUNITY_EVENT_CAMPAIGN = {
  id: 'cloth-distribution-2025',
  title: 'Cloth & Seasonal Relief Distribution Campaign',
  folderTitle: 'Cloth distribution campaign Duaen NGO',
  date: '30 November 2025',
  location: 'Ghaziabad, Uttar Pradesh',
  summary:
    'A documented field relief campaign organized by Duaen Foundation NGO in a peri-urban community settlement in Ghaziabad. Team members and volunteers mobilized mobile outreach to distribute winter clothing, care packages, and essential refreshments to local children and families.',
  highlights: [
    'On-site field presence with official Duaen Foundation NGO banner and mobile outreach unit',
    'Volunteers engaged directly with seated children, providing nutritional snacks and winter wear',
    'Participation from neighborhood mothers, families, and youth volunteers',
    'Documentary photo series preserved in high-resolution original format',
  ],
  images: [
    {
      id: 'cw-dist-01',
      src: '/images/events/cloth-distribution/cloth-distribution-overview.jpg',
      alt: 'Duaen Foundation NGO team members conducting community outreach and clothing distribution in Ghaziabad',
      title: 'Community Distribution Overview',
      caption:
        'Field outreach session with volunteers, local families, and children assembled with the official Duaen Foundation NGO banner.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-02',
      src: '/images/events/cloth-distribution/volunteer-distribution-outreach.jpg',
      alt: 'Duaen Foundation NGO representative distributing food and care packages to community children',
      title: 'Direct Relief & Nutrition Support',
      caption:
        'Volunteer representative distributing nutritional items and seasonal support packages beside the official organization display board.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-03',
      src: '/images/events/cloth-distribution/women-volunteers-outreach.jpg',
      alt: 'Women youth volunteers interacting with children and mothers during community outreach',
      title: 'Women Youth Volunteers on the Ground',
      caption:
        'Youth volunteers handing refreshment packs and interacting closely with community children and neighborhood mothers.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'volunteer' as const,
      categoryLabel: 'Volunteering',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-04',
      src: '/images/events/cloth-distribution/community-children-lineup.jpg',
      alt: 'Children waiting in line during the Duaen Foundation community distribution drive',
      title: 'Community Children Assembly',
      caption:
        'Children waiting attentively beside the outreach vehicle and official organization display board.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-05',
      src: '/images/events/cloth-distribution/community-field-assembly.jpg',
      alt: 'Families and children gathered around the Duaen Foundation field vehicle',
      title: 'Community Gathering & Outreach Camp',
      caption:
        'Neighborhood families and children gathered in the open community area as volunteers coordinate distribution.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-06',
      src: '/images/events/cloth-distribution/care-packages-interaction.jpg',
      alt: 'Volunteer handing nutritional supplies and snacks to seated children',
      title: 'Care Package & Nutrition Assistance',
      caption:
        'Hands-on distribution of bananas, biscuits, and nutritious refreshments to children seated in an open circle.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-07',
      src: '/images/events/cloth-distribution/field-team-and-banner.jpg',
      alt: 'Official Duaen Foundation NGO banner board standing beside the outreach vehicle',
      title: 'Duaen Foundation Field Presence',
      caption:
        'Official organization banner identifying Duaen Foundation NGO (Regd.) and its mission on site.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-08',
      src: '/images/events/cloth-distribution/volunteer-briefing-children.jpg',
      alt: 'Volunteer coordinator speaking to the children and mothers before distributing aid',
      title: 'Volunteer Welcome & Briefing',
      caption:
        'Welcoming community members and organizing the afternoon distribution session.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'volunteer' as const,
      categoryLabel: 'Volunteering',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-09',
      src: '/images/events/cloth-distribution/community-outreach-setting.jpg',
      alt: 'Children and local residents walking in the peri-urban community settlement under the flyover',
      title: 'Outreach Location Setting',
      caption:
        'Documentary establishing view of the peri-urban settlement in Ghaziabad where the grassroots welfare camp was organized.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-10',
      src: '/images/events/cloth-distribution/volunteer-and-children-interaction.jpg',
      alt: 'Volunteer bending down to listen and speak with children before the distribution',
      title: 'Supportive Volunteer Guidance',
      caption:
        'A warm moment as the volunteer coordinator listens to children and guides them into an orderly circle.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'volunteer' as const,
      categoryLabel: 'Volunteering',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-11',
      src: '/images/events/cloth-distribution/community-gathering-distribution.jpg',
      alt: 'Volunteer team member handing out supplies to seated children as local women observe',
      title: 'Grassroots Assistance in Action',
      caption:
        'Distribution in progress with local mothers and neighbors gathered in support of the initiative.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
    {
      id: 'cw-dist-12',
      src: '/images/events/cloth-distribution/community-mothers-children.jpg',
      alt: 'High-angle view of children seated with snacks and care packages while mothers watch',
      title: 'Community Circle & Distribution',
      caption:
        'High-angle perspective showing the complete community circle with the mobile unit and banner in the background.',
      date: '30 November 2025',
      location: 'Ghaziabad, UP',
      category: 'community' as const,
      categoryLabel: 'Community Welfare',
      aspectRatio: 'landscape' as const,
      isAuthentic: true,
    },
  ],
}

/**
 * Filterable Gallery Images
 * Incorporates authentic documented event photographs for Community Welfare and Volunteering,
 * alongside placeholder indicators for programs awaiting official photography releases.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  ...COMMUNITY_EVENT_CAMPAIGN.images,
  {
    id: 'edu-1',
    src: '/images/placeholder-education-1.jpg',
    alt: 'Classroom activity at Duaen Primary School (official photography awaiting organizational release)',
    title: 'Duaen Primary School Classroom',
    caption:
      'Elementary education classes conducted up to Class 5 in Ghaziabad. Official classroom photographs pending organizational release.',
    category: 'education',
    categoryLabel: 'Education',
    isAuthentic: false,
  },
  {
    id: 'we-1',
    src: '/images/placeholder-women-1.jpg',
    alt: "Women's vocational sewing and tailoring training centre (official photography awaiting release)",
    title: 'Vocational Sewing Centre',
    caption:
      "Skill-building sessions for women's self-reliance. Official workshop photographs pending organizational release.",
    category: 'women-empowerment',
    categoryLabel: "Women's Empowerment",
    isAuthentic: false,
  },
  {
    id: 'hc-1',
    src: '/images/placeholder-healthcare-1.jpg',
    alt: 'Healthcare awareness and medical checkup camp with Yashoda Hospital (official photography awaiting release)',
    title: 'Yashoda Hospital Medical Camp',
    caption:
      'Community health checkup camp conducted on 22 February with 5 doctors and 100+ attendees.',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    isAuthentic: false,
  },
  {
    id: 'dm-1',
    src: '/images/placeholder-disaster-1.jpg',
    alt: 'Disaster management session with Christ University students (official photography awaiting release)',
    title: 'Disaster Management Workshop',
    caption:
      'Preparedness and safety training conducted with student resource persons from Christ University.',
    category: 'disaster-management',
    categoryLabel: 'Disaster Management',
    isAuthentic: false,
  },
]
