
/**
 * Central portfolio data for Rifqah Sulaiha N.
 * Portfolio: THE DEVELOPER SERIES
 *
 * Project status is stated honestly as completed, planned, or in progress
 * wherever implementation has not been confirmed.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

/* =========================================================
   PROFILE
========================================================= */

export const profile = {
  fullName: 'Rifqah Sulaiha N',
  displayName: 'Rifqah',
  firstName: 'RIFQAH',
  seriesTag: 'THE DEVELOPER SERIES',
  originalLabel: 'A RIFQAH ORIGINAL',

  role: 'BCA Student · Creative Designer · AI Prompt Engineer',

  tagline: [
    'BCA Student',
    'Graphic Design',
    'Video Editing',
    'AI Prompt Engineering',
  ],

  intro:
    'Motivated BCA student passionate about graphic design, video editing, AI prompt engineering, and full-stack web development. I enjoy exploring technology, learning new skills, and creating visually appealing and user-friendly digital experiences.',

  location: 'Verkilambi, Kanyakumari District, Tamil Nadu, India',

  email: 'jrartisthub45@gmail.com',

  phone: '+91 9384210833',

  links: {
    linkedin: 'https://www.linkedin.com/in/rsulaiha8/',
    github: 'https://github.com/RifqahSulaiha',
  },

  resumePdf: '/assets/Rifqah_Sulaiha_Resume.pdf',

  portrait: {
    src: '/assets/portrait-420.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rifqah Sulaiha N',
  },

  interests: [
    'Graphic Design',
    'Video Editing',
    'AI Prompt Engineering',
    'Full-Stack Web Development',
    'Creative Technology',
    'Digital Product Ideas',
    'User-Friendly Experiences',
  ],
};

/* =========================================================
   EDUCATION
========================================================= */

export type Education = {
  school: string;
  place: string;
  degree: string;
  period: string;
  details: string;
  score?: string;
};

export const education: Education[] = [
  {
    school: 'Noorul Islam College of Arts and Science',
    place: 'Kumaracoil, Tamil Nadu',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: 'Currently studying · First Year',
    details:
      'Currently pursuing a BCA degree and developing foundational knowledge in computer applications and digital technologies.',
    score: 'Current',
  },
  {
    school: 'Thassim Beevi Abdul Kader College for Women',
    place: 'Kilakarai, Tamil Nadu',
    degree: 'Previous college education',
    period: 'Previously attended',
    details:
      'Previously studied at this institution before transferring to Noorul Islam College of Arts and Science.',
  },
];

/* =========================================================
   INTERNSHIP EXPERIENCE
========================================================= */

export type Experience = {
  company: string;
  role: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: 'CodTech IT Solutions Pvt. Ltd.',
    role: 'Full Stack Web Development Intern',
    place: 'Internship',
    period: 'April 10 – May 10, 2025',

    points: [
      'Worked on frontend and backend development fundamentals.',
      'Completed assigned tasks and mini-projects during the internship.',
      'Gained exposure to real-world software development workflows.',
      'Developed a foundational understanding of full-stack web development.',
    ],
  },

  {
    company: 'Foxtech Pvt Solutions',
    role: 'Project Manager Intern',
    place: 'Marthandam',
    period: 'Internship experience',

    points: [
      'Help coordinate project tasks and communicate progress updates.',
      'Support UI/UX quality assurance by reviewing application screens and comparing implementations against designs.',
      'Prepare structured bug reports with reproduction steps, expected results, actual results, and priorities.',
      'Track issues and follow up on fixes with project team members.',
      'Help organize tasks and communicate issues across project workflows.',
    ],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'jr-artist-hub',
    title: 'JR Artist Hub',
    year: 'In Progress',
    genre: 'Creator Platform · Portfolio · Marketplace',

    logline:
      'A creator-focused platform concept designed to help emerging artists showcase their work, build portfolios, and explore ways to promote or monetize their creative services.',

    stack: [
      'React',
      'Node.js',
      'MongoDB',
      'EmailJS',
      'Payment Integration — Planned',
    ],

    build: [
      'Developed the concept around artist registration, login, artwork uploads, portfolio pages, and a creator dashboard.',
      'Planned a storefront experience for presenting creative work and services.',
      'Explored AI-assisted artwork pricing to help artists estimate the value of their work.',
      'Outlined email invoice workflows and payment-related features for future implementation.',
    ],

    features: [
      'Artist registration and login concept',
      'Artwork uploads',
      'Artist portfolio pages',
      'Creator dashboard',
      'Storefront concept',
      'AI-assisted pricing concept',
      'Email invoice workflow concept',
      'Admin dashboard concept',
    ],

    metrics: [
      { value: 'Creator-First', label: 'platform concept' },
      { value: 'AI-Assisted', label: 'pricing idea' },
    ],

    palette: jade,
    motif: 'tenants',
  },

  {
    id: 'skillswap-rent',
    title: 'SkillSwap & Rent',
    year: 'Concept / In Progress',
    genre: 'Student Marketplace · Community Platform',

    logline:
      'A student-focused marketplace concept where users can explore skill-based gigs and rent useful equipment or study materials for specific periods.',

    stack: [
      'Web Application Concept',
      'Marketplace UX',
      'User Profiles',
      'Admin Moderation',
    ],

    build: [
      'Planned a marketplace where students can offer skills and discover small gigs.',
      'Explored time-based rentals for cameras, tripods, microphones, projectors, laptops, calculators, and textbooks.',
      'Outlined onboarding requirements for student profiles and address information.',
      'Defined an admin moderation concept for managing or suspending user accounts.',
      'Explored a purple-and-black visual identity and a potential marketplace service-fee model.',
    ],

    features: [
      'Student-focused profiles',
      'Skill and gig listings',
      'Hourly or daily rental concept',
      'Equipment rental listings',
      'Textbook and study-material rentals',
      'Admin user moderation',
      'Marketplace commission concept',
    ],

    metrics: [
      { value: 'Skills + Rentals', label: 'marketplace areas' },
      { value: 'Student-First', label: 'target audience' },
    ],

    palette: violet,
    motif: 'flow',
  },

  {
    id: 'vehicle-fleet-management',
    title: 'Vehicle Tracking & Fleet Management',
    year: 'Phase 1 Planning',
    genre: 'Fleet Management · Live Tracking · Full-Stack',

    logline:
      'A planned fleet management system focused on vehicle registration, tracking-device linking, live location monitoring, route replay, and reporting.',

    stack: [
      'React',
      'Vite',
      'React Router',
      'Axios',
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],

    build: [
      'Outlined a proposed frontend, backend, and database architecture for Phase 1.',
      'Defined admin workflows for registering vehicles and associating one or more tracking devices with each vehicle.',
      'Planned live map tracking, route history, replay, and report export functionality.',
      'Explored a device-agnostic ingestion layer for phones, GPS trackers, vehicle cameras, and future IoT sources.',
      'Identified backend planning areas including authentication, database models, API validation, tracking, reports, and real-time updates.',
    ],

    features: [
      'Vehicle registration concept',
      'Tracking-device management',
      'Live map tracking planned',
      'Route history and replay planned',
      'Report export planned',
      'Device-agnostic ingestion concept',
    ],

    metrics: [
      { value: 'Phase 1', label: 'planned scope' },
      { value: 'Device-Agnostic', label: 'architecture goal' },
    ],

    palette: ocean,
    motif: 'tenants',
  },

  {
    id: 'portfolio-series',
    title: 'Personal Portfolio — The Developer Series',
    year: '2026',
    genre: 'Personal Branding · Web Design',

    logline:
      'A cinematic portfolio experience presenting personal information, education, internship experience, creative skills, and digital project concepts.',

    stack: [
      'TypeScript',
      'Web UI',
      'Responsive Images',
      'Open Graph Metadata',
    ],

    build: [
      'Organized portfolio content into profile, education, experience, projects, skills, and highlights.',
      'Explored a cinematic black-and-burgundy visual identity.',
      'Planned responsive portrait assets and social-sharing metadata.',
      'Structured project data to present technical interests alongside creative work.',
    ],

    features: [
      'Profile and introduction',
      'Education and internship sections',
      'Project showcase',
      'Skill categories',
      'Creative interests',
      'Responsive portrait assets',
      'Social-sharing metadata',
    ],

    metrics: [
      { value: '1200 × 630', label: 'OG image target size' },
      { value: 'The Developer Series', label: 'personal brand' },
    ],

    palette: crimson,
    motif: 'shield',
  },

  {
    id: 'ai-powered-smart-research',
    title: 'AI-Powered Smart Research',
    year: '2026',
    genre: 'Academic Presentation · AI Research',

    logline:
      'An academic presentation exploring how AI tools can support research while keeping human intelligence and judgment central to the process.',

    stack: [
      'AI Tools',
      'Prompt Engineering',
      'Research Workflow',
      'Presentation Design',
    ],

    build: [
      'Prepared a college presentation about AI-powered smart research.',
      'Structured the presentation around the topics included in the academic slides.',
      'Prepared a written report based on the presentation content.',
      'Explored the relationship between AI assistance and human judgment in research.',
    ],

    features: [
      'AI-supported research concepts',
      'Structured research workflow',
      'Academic presentation',
      'Written report preparation',
      'AI and human intelligence theme',
    ],

    metrics: [
      { value: 'Academic', label: 'presentation project' },
      { value: 'AI + Human', label: 'research approach' },
    ],

    palette: amber,
    motif: 'flow',
  },
];

/* =========================================================
   ACHIEVEMENTS & HIGHLIGHTS
========================================================= */

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'codtech-internship',
    title: 'Full Stack Web Development Internship',
    org: 'CodTech IT Solutions Pvt. Ltd.',
    detail:
      'Completed an internship involving frontend and backend fundamentals, assigned tasks, mini-projects, and exposure to development workflows.',
    laurel: 'Web Development',
  },

  {
    id: 'project-management',
    title: 'Project Coordination Experience',
    org: 'Foxtech Pvt Solutions',
    detail:
      'Gained practical experience supporting task coordination, progress communication, issue tracking, and project follow-up.',
    laurel: 'Project Management',
  },

  {
    id: 'qa-documentation',
    title: 'UI/UX Quality Assurance',
    org: 'Software Project Work',
    detail:
      'Practices reviewing application screens, identifying visual and functional issues, and documenting bugs clearly for follow-up.',
    laurel: 'Quality Assurance',
  },

  {
    id: 'academy-youth-talk',
    title: 'Academy Youth Talk',
    org: 'Regional Pre-Finals',
    detail:
      'Participation in the Academy Youth Talk Regional Pre-Finals.',
    laurel: 'Participation',
  },

  {
    id: 'creative-learning',
    title: 'Creative and AI Learning',
    org: 'Graphic Design · Video · AI',
    detail:
      'Pursues learning in graphic design, video editing, AI tools, and prompt engineering alongside BCA studies.',
    laurel: 'Creative Learning',
  },
];

/* =========================================================
   CERTIFICATIONS & COURSES
========================================================= */

export type Certification = {
  issuer: string;
  name: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    name: 'Full Stack Web Development Internship',
    issuer: 'CodTech IT Solutions Pvt. Ltd.',
  },

  {
    name: 'AI Tools & Prompt Engineering',
    issuer: 'ByteTree.in',
  },

  {
    name: 'Introduction to AI',
    issuer: 'ByteTree.in',
  },

  {
    name: 'Introduction to Graphic Design with Photoshop',
    issuer: 'Great Learning Academy',
  },
];

/* =========================================================
   SKILLS
========================================================= */

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'creative-design',
    title: 'Graphic Design',
    subtitle: 'Visual communication and creative design',

    skills: [
      { name: 'Graphic Design', mono: 'Gd' },
      { name: 'Photoshop Basics', mono: 'Ps' },
      { name: 'Visual Composition', mono: 'Vc' },
      { name: 'Presentation Design', mono: 'Pd' },
    ],
  },

  {
    id: 'video-editing',
    title: 'Video Editing',
    subtitle: 'Editing tools and visual storytelling',

    skills: [
      { name: 'CapCut', mono: 'Cc' },
      { name: 'VN Video Editor', mono: 'Vn' },
      { name: 'Video Editing', mono: 'Ve' },
      { name: 'Visual Storytelling', mono: 'Vs' },
    ],
  },

  {
    id: 'ai',
    title: 'AI & Prompt Engineering',
    subtitle: 'AI tools, prompts, and creative workflows',

    skills: [
      { name: 'AI Tools', mono: 'Ai' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'AI-Assisted Ideation', mono: 'Id' },
      { name: 'Smart Research Concepts', mono: 'Sr' },
    ],
  },

  {
    id: 'development',
    title: 'Web Development',
    subtitle: 'Programming and full-stack foundations',

    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript Basics', mono: 'Js' },
      { name: 'Frontend Fundamentals', mono: 'Fe' },
      { name: 'Backend Fundamentals', mono: 'Be' },
    ],
  },

  {
    id: 'project-coordination',
    title: 'Project Coordination',
    subtitle: 'Organization, communication, and follow-up',

    skills: [
      { name: 'Task Coordination', mono: 'Tc' },
      { name: 'Progress Updates', mono: 'Pu' },
      { name: 'Issue Tracking', mono: 'It' },
      { name: 'Documentation', mono: 'Dc' },
      { name: 'Team Communication', mono: 'Tm' },
    ],
  },

  {
    id: 'quality-assurance',
    title: 'UI/UX Quality Assurance',
    subtitle: 'Design review and issue documentation',

    skills: [
      { name: 'UI Review', mono: 'Ui' },
      { name: 'Functional Testing', mono: 'Ft' },
      { name: 'Bug Reporting', mono: 'Br' },
      { name: 'Design Comparison', mono: 'Fg' },
      { name: 'Issue Follow-Up', mono: 'If' },
    ],
  },

  {
    id: 'soft-skills',
    title: 'Soft Skills',
    subtitle: 'Personal and professional strengths',

    skills: [
      { name: 'Creativity', mono: 'Cr' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Adaptability', mono: 'Ad' },
      { name: 'Time Management', mono: 'Tm' },
      { name: 'Teamwork', mono: 'Tw' },
    ],
  },
];

/* =========================================================
   SKILL EVIDENCE
========================================================= */

export const skillEvidence: Record<string, string[]> = {
  'Graphic Design': [
    'Introduction to Graphic Design with Photoshop — Great Learning Academy',
  ],

  'Photoshop Basics': [
    'Introduction to Graphic Design with Photoshop — Great Learning Academy',
  ],

  'Video Editing': [
    'CapCut',
    'VN Video Editor',
  ],

  CapCut: [
    'Video editing tool listed in resume',
  ],

  'VN Video Editor': [
    'Video editing tool listed in resume',
  ],

  'AI Tools': [
    'AI Tools & Prompt Engineering — ByteTree.in',
    'Introduction to AI — ByteTree.in',
  ],

  'Prompt Engineering': [
    'AI Tools & Prompt Engineering — ByteTree.in',
  ],

  'JavaScript Basics': [
    'JavaScript basics listed in resume',
  ],

  'Frontend Fundamentals': [
    'Full Stack Web Development Internship — CodTech IT Solutions Pvt. Ltd.',
  ],

  'Backend Fundamentals': [
    'Full Stack Web Development Internship — CodTech IT Solutions Pvt. Ltd.',
  ],

  'Task Coordination': [
    'Project Manager Intern — Foxtech Pvt Solutions',
  ],

  'Progress Updates': [
    'Project coordination experience',
  ],

  'Issue Tracking': [
    'UI/UX quality assurance and bug tracking',
  ],

  Documentation: [
    'Bug reports and academic project reports',
  ],

  'Team Communication': [
    'Team coordination and internship workflows',
  ],

  'Functional Testing': [
    'UI/UX QA practice',
  ],

  'Bug Reporting': [
    'Structured issue documentation',
  ],

  Creativity: [
    'Graphic design, video editing, and digital project ideas',
  ],

  Communication: [
    'Team communication and project coordination',
  ],

  Adaptability: [
    'Learning across creative and technical disciplines',
  ],

  Teamwork: [
    'Internship and project coordination experience',
  ],

  'Feature Planning': [
    'JR Artist Hub and SkillSwap & Rent concepts',
  ],

  'Marketplace Concepts': [
    'JR Artist Hub and SkillSwap & Rent',
  ],
};

/* =========================================================
   JOURNEY / SEASONS
========================================================= */

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'BCA · Present',

    synopsis:
      'Building an academic foundation while exploring technology, creativity, and digital experiences.',

    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',

        description:
          'Currently pursuing a Bachelor of Computer Applications at Noorul Islam College of Arts and Science.',

        tags: ['BCA', 'Computer Applications'],

        runtime: 'Currently studying',

        palette: violet,
      },

      {
        code: 'S01 E02',
        title: 'The Creative',

        description:
          'Exploring graphic design, video editing, AI prompt engineering, and visually appealing digital experiences.',

        tags: ['Design', 'Video Editing', 'AI'],

        runtime: 'Ongoing',

        palette: jade,
      },
    ],
  },

  {
    number: 2,
    title: 'Learning to Build',
    period: 'April – May 2025',

    synopsis:
      'Developing foundational knowledge of full-stack web development through internship experience.',

    episodes: [
      {
        code: 'S02 E01',
        title: 'The Intern',

        description:
          'Completed a Full Stack Web Development internship at CodTech IT Solutions Pvt. Ltd.',

        tags: ['Internship', 'Web Development'],

        runtime: 'April 10 – May 10, 2025',

        palette: ocean,
      },

      {
        code: 'S02 E02',
        title: 'Frontend and Backend',

        description:
          'Worked on frontend and backend fundamentals, completed assigned tasks, and explored mini-projects.',

        tags: ['Frontend', 'Backend', 'Mini-Projects'],

        runtime: 'Internship period',

        palette: violet,
      },
    ],
  },

  {
    number: 3,
    title: 'Learning to Coordinate',
    period: 'Internship Experience',

    synopsis:
      'Developing project coordination and UI/UX quality assurance skills through software project workflows.',

    episodes: [
      {
        code: 'S03 E01',
        title: 'The Coordinator',

        description:
          'Supporting task coordination, progress communication, and follow-up with project team members.',

        tags: ['Coordination', 'Communication'],

        runtime: 'Foxtech internship',

        palette: amber,
      },

      {
        code: 'S03 E02',
        title: 'The QA Mindset',

        description:
          'Reviewing application interfaces, identifying issues, and documenting expected and actual results.',

        tags: ['UI/UX QA', 'Bug Reporting'],

        runtime: 'Ongoing practice',

        palette: crimson,
      },
    ],
  },

  {
    number: 4,
    title: 'Building Ideas',
    period: 'Project Concepts',

    synopsis:
      'Exploring ideas for creator platforms, student marketplaces, fleet management, and academic research.',

    episodes: [
      {
        code: 'S04 E01',
        title: 'The Artist Platform',

        description:
          'JR Artist Hub: a creator-platform concept for artwork uploads, portfolios, storefronts, and AI-assisted pricing.',

        tags: ['Creators', 'Portfolios', 'AI'],

        runtime: 'In progress',

        palette: jade,
      },

      {
        code: 'S04 E02',
        title: 'The Student Marketplace',

        description:
          'SkillSwap & Rent: a marketplace concept for student gigs and time-based rentals.',

        tags: ['Students', 'Skills', 'Rentals'],

        runtime: 'Concept / In progress',

        palette: violet,
      },

      {
        code: 'S04 E03',
        title: 'The Fleet System',

        description:
          'Planning vehicle registration, tracking devices, live tracking, route replay, and reporting.',

        tags: ['Fleet', 'Tracking', 'Reports'],

        runtime: 'Phase 1 planning',

        palette: ocean,
      },

      {
        code: 'S04 E04',
        title: 'Smart Research',

        description:
          'Preparing an academic presentation and report exploring AI-powered smart research.',

        tags: ['AI', 'Research', 'Presentation'],

        runtime: '2026',

        palette: amber,
      },
    ],
  },

  {
    number: 5,
    title: 'The Next Chapter',
    period: 'Now Exploring',

    synopsis:
      'Combining academic learning, technical foundations, creative practice, and project ideas.',

    episodes: [
      {
        code: 'S05 E01',
        title: 'The Digital Creator',

        description:
          'Continuing to explore graphic design, video editing, AI tools, and prompt engineering.',

        tags: ['Design', 'Video', 'AI'],

        runtime: 'Ongoing',

        palette: jade,
      },

      {
        code: 'S05 E02',
        title: 'The Product Thinker',

        description:
          'Exploring ways to turn ideas into organized, visually appealing, and user-friendly digital experiences.',

        tags: ['UX', 'Planning', 'Product Ideas'],

        runtime: 'Ongoing',

        palette: crimson,
      },
    ],
  },
];

/* =========================================================
   TOP PICKS
========================================================= */

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Current Education',
    title: 'BCA',
    detail: 'Noorul Islam College of Arts and Science',
    palette: violet,
  },

  {
    label: 'Development Experience',
    title: 'Full Stack Internship',
    detail: 'CodTech IT Solutions Pvt. Ltd.',
    palette: ocean,
  },

  {
    label: 'Project Coordination',
    title: 'Project Manager Intern',
    detail: 'Foxtech Pvt Solutions',
    palette: crimson,
  },

  {
    label: 'Creator Platform',
    title: 'JR Artist Hub',
    detail: 'Artist portfolio and marketplace concept',
    palette: jade,
  },

  {
    label: 'Student Marketplace',
    title: 'SkillSwap & Rent',
    detail: 'Student gigs and rental concept',
    palette: violet,
  },

  {
    label: 'Technical Planning',
    title: 'Vehicle Tracking',
    detail: 'Fleet management project planning',
    palette: ocean,
  },

  {
    label: 'Academic Project',
    title: 'AI-Powered Smart Research',
    detail: 'College presentation and report',
    palette: amber,
  },

  {
    label: 'Creative Skill',
    title: 'Graphic Design',
    detail: 'Photoshop and visual design learning',
    palette: jade,
  },

  {
    label: 'Creative Skill',
    title: 'Video Editing',
    detail: 'CapCut and VN Video Editor',
    palette: crimson,
  },

  {
    label: 'Current Interest',
    title: 'AI Prompt Engineering',
    detail: 'AI tools and prompt-based workflows',
    palette: amber,
  },
];

/* =========================================================
   CINEMATIC INTRO SLIDES
========================================================= */

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Introduction',

    title: 'Rifqah Sulaiha N',

    lines: [
      'BCA Student',
      'Creative Designer · AI Prompt Engineering',
    ],

    chips: [
      'Creativity',
      'Technology',
      'Learning',
    ],
  },

  {
    kicker: 'Education',

    title: 'The Foundation',

    lines: [
      'Bachelor of Computer Applications',
      'Noorul Islam College of Arts and Science',
    ],

    chips: [
      'BCA',
      'Computer Applications',
    ],
  },

  {
    kicker: 'Experience',

    title: 'Learning to Build',

    lines: [
      'Full Stack Web Development Intern',
      'CodTech IT Solutions Pvt. Ltd.',
      'April 10 – May 10, 2025',
    ],

    chips: [
      'Frontend',
      'Backend',
      'Mini-Projects',
    ],
  },

  {
    kicker: 'Project Coordination',

    title: 'Organize. Review. Improve.',

    lines: [
      'Project Manager Intern — Foxtech Pvt Solutions',
      'Task coordination and progress communication',
      'UI/UX QA and structured bug reporting',
    ],

    chips: [
      'Coordination',
      'Communication',
      'QA',
    ],
  },

  {
    kicker: 'Projects',

    title: 'Ideas into Experiences',

    lines: [
      'JR Artist Hub — creator platform concept',
      'SkillSwap & Rent — student marketplace concept',
      'Vehicle Tracking — fleet management planning',
    ],
  },

  {
    kicker: 'Creative Work',

    title: 'Technical + Creative',

    lines: [
      'Graphic design and video editing',
      'AI tools and prompt engineering',
      'AI-Powered Smart Research presentation',
    ],

    chips: [
      'Design',
      'Video',
      'AI',
    ],
  },

  {
    kicker: 'The Next Chapter',

    title: 'Build with Purpose',

    lines: [
      'Learning through BCA studies, internship experience,',
      'creative practice, and digital product ideas.',
    ],
  },
];

/* =========================================================
   VIEWER PROFILES & NAVIGATION
========================================================= */

export type ProfileId =
  | 'rifqah'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'rifqah',
    name: 'Rifqah',
    blurb: 'The full story, in order',
    color: '#e5132b',

    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },

  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, experience, and skills first',
    color: '#4cc9ff',

    order: [
      'story',
      'moments',
      'skills',
      'originals',
      'about',
      'journey',
      'picks',
    ],
  },

  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects and technical learning first',
    color: '#46e3a8',

    order: [
      'originals',
      'skills',
      'journey',
      'moments',
      'about',
      'picks',
      'story',
    ],
  },

  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Creative interests and project ideas first',
    color: '#ffb547',

    order: [
      'journey',
      'picks',
      'originals',
      'moments',
      'about',
      'skills',
      'story',
    ],
  },
];

/* =========================================================
   SECTION METADATA
========================================================= */

export const sectionMeta: Record<
  SectionId,
  {
    nav: string;
    card: string;
    meta: string;
    palette: Palette;
  }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot · Education & experience',
    palette: violet,
  },

  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons · ${seasons.reduce(
      (total, season) => total + season.episodes.length,
      0,
    )} Episodes`,
    palette: amber,
  },

  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Projects & Concepts`,
    palette: crimson,
  },

  picks: {
    nav: 'Highlights',
    card: 'Top Highlights',
    meta: 'Selected experience and interests',
    palette: jade,
  },

  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },

  moments: {
    nav: 'Achievements',
    card: 'My Highlights',
    meta: `${achievements.length} Highlights · ${certifications.length} Courses & Certifications`,
    palette: crimson,
  },

  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume · View & download',
    palette: violet,
  },
};