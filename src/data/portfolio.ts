
/**
 * Central portfolio data for Rifqah Sulaiha.
 * Portfolio: THE DEVELOPER SERIES
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
  fullName: 'Rifqah Sulaiha',
  displayName: 'Rifqah',
  firstName: 'RIFQAH',
  seriesTag: 'BCA STUDENT • ASPIRING GAME DEVELOPER • PROJECT MANAGEMENT TRAINEE',
  originalLabel: 'A RIFQAH ORIGINAL',

  role: 'BCA Student | Aspiring Game Developer | Junior Project Management Trainee',

  tagline: [
    'BCA Student',
    'Aspiring Game Developer',
    'Junior Project Management Trainee',
    'Creative Tech Learner',
  ],

  intro:
    'An aspiring software and game developer with experience in project management, manual software testing, web development, UI/UX collaboration, creative design and AI-assisted development. Interested in building innovative digital products, developing intelligent applications and gaining practical industry experience.',

  location: 'Kanyakumari, Tamil Nadu, India',

  email: 'jrartisthub45@gmail.com',

  phone: '+91 9384210833',

  links: {
    linkedin: 'https://www.linkedin.com/in/rsulaiha8/',
    github: 'https://github.com/RifqahSulaiha',
  },

  resumePdf: `${import.meta.env.BASE_URL}assets/Rifqah_Sulaiha_Resume.pdf`,

  portrait: {
    src: '/assets/portrait-420.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rifqah Sulaiha',
  },

  interests: [
    'Game Development',
    'AI-Assisted Development',
    'Project Management',
    'Manual Software Testing',
    'Web Development',
    'Creative Design',
    'Computer Vision Concepts',
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
    school: 'Noorul Islam College of Arts and Science (NICAS)',
    place: 'Kumaracoil, Tamil Nadu',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: 'Expected graduation · 2028',
    details:
      'Currently pursuing a BCA degree with a focus on computer applications, software development, and emerging digital technologies.',
    score: 'Expected 2028',
  },
  {
    school: 'Thassim Beevi Abdul Kader College for Women',
    place: 'Kilakarai, Tamil Nadu',
    degree: 'Previous Institution',
    period: 'Earlier studies',
    details:
      'Completed earlier higher education at Thassim Beevi Abdul Kader College for Women before pursuing BCA at NICAS.',
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
    company: 'Foxtech Solutions',
    role: 'Junior Project Management Trainee / Project Management Intern',
    place: 'Internship',
    period: 'Project management internship',
    points: [
      'Prepared project documentation and maintained structured records for team work.',
      'Reviewed user flows and collaborated with development and UI/UX teams to improve product quality.',
      'Performed user acceptance testing and manual software testing to validate functionality.',
      'Tracked bugs, documented issues, and reported findings for resolution and follow-up.',
    ],
  },
  {
    company: 'CODETECH IT',
    role: 'Full-Stack Development Internship',
    place: 'Internship',
    period: 'Full-stack development internship',
    points: [
      'Worked on frontend and backend fundamentals during the internship program.',
      'Built exposure to practical web development workflows and implementation practices.',
      'Developed confidence in creating and testing digital products with a full-stack mindset.',
    ],
  },
  {
    company: 'Marcello Tech',
    role: 'Java Development Internship',
    place: 'Internship',
    period: 'One month',
    points: [
      'Gained exposure to Java development concepts and core programming practices.',
      'Strengthened understanding of structured coding and application logic basics.',
      'Developed practical exposure to software development workflows in a short internship period.',
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
    id: 'junior-artist-hub',
    title: 'Junior Artist Hub',
    year: '2024–2025',
    genre: 'Creative Technology · Artist Community · Web Development',
    logline:
      'An artist community and creative learning platform designed to connect artists, support creative education, and provide opportunities to showcase and sell artwork.',
    stack: ['React', 'Web Development', 'Creative Platforms', 'Artist Community'],
    build: [
      'Designed an artist-focused platform concept around artist registration, artwork submissions, community engagement, and creative learning.',
      'Explored a marketplace model for showcasing artistic work and enabling creators to present portfolios and services.',
      'Incorporated AI-assisted artwork pricing ideas to help artists estimate value and improve decision-making.',
      'Outlined artist certificate workflows and community-based learning opportunities for future product growth.',
    ],
    features: [
      'Artist registration',
      'Artwork submissions',
      'Artist community',
      'Creative learning',
      'Art marketplace concept',
      'AI-assisted artwork pricing',
      'Artist certificates',
    ],
    metrics: [
      { value: 'Artist', label: 'community platform' },
      { value: 'AI-Assisted', label: 'pricing concept' },
      { value: 'Creative', label: 'learning ecosystem' },
    ],
    palette: jade,
    motif: 'tenants',
  },
  {
    id: 'php-practical-website',
    title: 'PHP Practical Website',
    year: '2024–2025',
    genre: 'Educational Technology · PHP Programming · Web Development',
    logline:
      'An educational website providing organized access to PHP practical programs through a user-friendly interface and searchable resources.',
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'PWA'],
    build: [
      'Built an educational website focused on organized PHP practical program access for learners and beginner developers.',
      'Created a searchable and navigable interface to improve browsing, discovery, and learning flow.',
      'Explored offline-ready functionality to support learning experiences in a lightweight, accessible format.',
      'Structured practical content so users can quickly find relevant programming resources.',
    ],
    features: [
      'PHP practical program collection',
      'Search and navigation',
      'Offline PWA functionality',
      'Educational programming resources',
    ],
    metrics: [
      { value: 'PHP', label: 'learning portal' },
      { value: 'PWA', label: 'offline access' },
      { value: 'Searchable', label: 'learning flow' },
    ],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'jarvis-ai-assistant',
    title: 'J.A.R.V.I.S. AI Assistant',
    year: '2025',
    genre: 'Artificial Intelligence · Gesture Recognition · Interactive Software',
    logline:
      'An interactive AI assistant that answers user questions and responds to physical hand gestures through gesture-based control and intelligent conversation.',
    stack: ['Python', 'AI', 'Computer Vision', 'Gesture Recognition', 'Web App'],
    build: [
      'Developed an AI assistant experience that responds to user queries and integrates gesture-based interaction for a more immersive experience.',
      'Explored hand-gesture recognition and control patterns to support movement and response behavior.',
      'Focused on intuitive, interactive user experience design with responsive AI-driven engagement.',
      'Combined question answering features with motion-based interaction to create a multifunctional assistant concept.',
    ],
    features: [
      'AI-powered question answering',
      'Hand gesture recognition',
      'Gesture-controlled movement',
      'Interactive user experience',
      'Gesture-responsive functionality',
    ],
    metrics: [
      { value: 'AI + Gesture', label: 'interaction model' },
      { value: 'Computer Vision', label: 'core capability' },
      { value: 'Interactive', label: 'user experience' },
    ],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'additional-projects',
    title: 'Additional Project Work',
    year: '2024–2025',
    genre: 'Software Development · Problem Solving · Product Exploration',
    logline:
      'Selected repositories and project experiments demonstrating practical development, learning, and digital product exploration across multiple problem areas.',
    stack: ['GitHub Projects', 'Problem Solving', 'Web Development', 'Prototype Work'],
    build: [
      'Reviewed and selected relevant repositories that highlight growth in software development, experimentation, and hands-on project work.',
      'Emphasized projects that show applied learning rather than unfinished or duplicate experiments.',
      'Curated work that demonstrates initiative, iteration, and technical exploration in real project contexts.',
    ],
    features: [
      'Relevant GitHub projects',
      'Hands-on development practice',
      'Prototype and experimentation work',
      'Portfolio-ready technical projects',
    ],
    metrics: [
      { value: 'Curated', label: 'project selection' },
      { value: 'Applied', label: 'learning focus' },
      { value: 'Portfolio-ready', label: 'work quality' },
    ],
    palette: violet,
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
    title: 'CODETECH IT Full-Stack Internship',
    org: 'CODETECH IT',
    detail:
      'Completed a full-stack development internship focused on web development fundamentals, practical implementation, and project exposure.',
    laurel: 'Web Development',
  },

  {
    id: 'marcello-java',
    title: 'Marcello Tech Java Internship',
    org: 'Marcello Tech',
    detail:
      'Completed a Java development internship with a focus on foundational programming concepts and software workflow exposure.',
    laurel: 'Java',
  },

  {
    id: 'foxtech-pm',
    title: 'Junior Project Management Trainee',
    org: 'Foxtech Solutions',
    detail:
      'Worked on project documentation, user-flow review, UAT, manual software testing, bug tracking, and cross-team coordination.',
    laurel: 'Project Management',
  },

  {
    id: 'ml-healthcare',
    title: 'Machine Learning Workshop',
    org: 'Healthcare and Drug Discovery',
    detail:
      'Participated in a machine learning workshop focused on healthcare and drug discovery, expanding technical understanding of AI applications.',
    laurel: 'AI Workshop',
  },

  {
    id: 'national-art',
    title: 'National-Level Indian Art Contest',
    org: 'Art and Creativity',
    detail:
      'Participated in a national-level art contest and earned a medal for creative achievement.',
    laurel: 'Art Achievement',
  },

  {
    id: 'prompt-engineering',
    title: 'AI Prompt Engineering Knowledge',
    org: 'AI and Emerging Technologies',
    detail:
      'Built practical understanding of AI prompt engineering, AI-assisted development, and modern digital workflows.',
    laurel: 'AI Skills',
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
    name: 'CODETECH IT Full-Stack Internship',
    issuer: 'CODETECH IT',
  },

  {
    name: 'Marcello Tech Java Internship',
    issuer: 'Marcello Tech',
  },

  {
    name: 'Machine Learning Workshop — Healthcare and Drug Discovery',
    issuer: 'Workshop Participation',
  },

  {
    name: 'AI Prompt Engineering knowledge',
    issuer: 'AI and Emerging Technologies',
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
    id: 'programming',
    title: 'Programming & Development',
    subtitle: 'Languages and core software development foundations',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C++' },
      { name: 'Java', mono: 'Ja' },
      { name: 'PHP', mono: 'Php' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },

  {
    id: 'project-management',
    title: 'Project Management & QA',
    subtitle: 'Planning, testing, documentation, and delivery support',
    skills: [
      { name: 'Project Management', mono: 'Pm' },
      { name: 'Manual Software Testing', mono: 'Mt' },
      { name: 'UAT', mono: 'Ua' },
      { name: 'Bug Reporting', mono: 'Br' },
      { name: 'User Flow Analysis', mono: 'Uf' },
      { name: 'BPMN Fundamentals', mono: 'Bp' },
      { name: 'Google Sheets', mono: 'Gs' },
    ],
  },

  {
    id: 'ai-emerging',
    title: 'AI & Emerging Technologies',
    subtitle: 'AI-assisted workflows and intelligent product concepts',
    skills: [
      { name: 'AI Prompt Engineering', mono: 'Pe' },
      { name: 'AI-Assisted Development', mono: 'Ai' },
      { name: 'AI Application Concepts', mono: 'Ap' },
      { name: 'Gesture-Based Interaction', mono: 'Gb' },
      { name: 'Computer Vision Concepts', mono: 'Cv' },
    ],
  },

  {
    id: 'creative-digital',
    title: 'Creative & Digital',
    subtitle: 'Design, visual media, and content creation tools',
    skills: [
      { name: 'Canva', mono: 'Cn' },
      { name: 'Adobe Photoshop', mono: 'Ps' },
      { name: 'Poster Design', mono: 'Pd' },
      { name: 'Acrylic Painting', mono: 'Ap' },
      { name: 'CapCut', mono: 'Cc' },
      { name: 'VN Video Editor', mono: 'Vn' },
    ],
  },
];

/* =========================================================
   SKILL EVIDENCE
========================================================= */

export const skillEvidence: Record<string, string[]> = {
  Python: ['Core development skill listed in professional profile'],
  C: ['Programming language listed in professional profile'],
  'C++': ['Programming language listed in professional profile'],
  Java: ['Programming language listed in professional profile'],
  PHP: ['Used in PHP practical website and educational development work'],
  HTML: ['Core web development skill and project work'],
  CSS: ['Core styling skill and front-end fundamentals'],
  JavaScript: ['Web development skill used across projects'],
  'Project Management': ['Experience in project documentation and coordination'],
  'Manual Software Testing': ['Practical QA and verification work in internship experience'],
  UAT: ['User acceptance testing responsibilities in project work'],
  'Bug Reporting': ['Issue tracking and structured testing reports'],
  'User Flow Analysis': ['User-flow reviews and product usability review'],
  'BPMN Fundamentals': ['Process mapping and workflow understanding'],
  'Google Sheets': ['Used for coordination and tracking tasks'],
  'AI Prompt Engineering': ['AI-assisted workflow and emerging technology skill'],
  'AI-Assisted Development': ['Applied in AI-related project and digital product ideas'],
  'AI Application Concepts': ['Interest in building intelligent applications'],
  'Gesture-Based Interaction': ['Applied in J.A.R.V.I.S. AI assistant concept'],
  'Computer Vision Concepts': ['Relevant to AI assistant and gesture-recognition work'],
  Canva: ['Creative design and visual communication work'],
  'Adobe Photoshop': ['Design practice and foundational image editing skill'],
  'Poster Design': ['Creative design and visual communication work'],
  'Acrylic Painting': ['Creative expression and visual arts practice'],
  CapCut: ['Video editing tool used in creative workflow'],
  'VN Video Editor': ['Video editing skill and creative media practice'],
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
    period: 'BCA · 2024–2028',

    synopsis:
      'Building a strong academic base in computing while exploring software, design, and digital creativity.',

    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',

        description:
          'Currently pursuing a Bachelor of Computer Applications at Noorul Islam College of Arts and Science, Kumaracoil.',

        tags: ['BCA', 'Computer Applications'],

        runtime: 'Expected 2028',

        palette: violet,
      },

      {
        code: 'S01 E02',
        title: 'The Creative Thinker',

        description:
          'Exploring design, AI-assisted development, computer vision concepts, and digital product ideas through creative technology.',

        tags: ['Design', 'AI', 'Creative Tech'],

        runtime: 'Ongoing',

        palette: jade,
      },
    ],
  },

  {
    number: 2,
    title: 'Learning to Build',
    period: 'Internships',

    synopsis:
      'Developing practical skills through internships in full-stack development, project coordination, and Java development.',

    episodes: [
      {
        code: 'S02 E01',
        title: 'The Full-Stack Intern',

        description:
          'Completed a full-stack development internship at CODETECH IT and gained exposure to web application work and delivery practices.',

        tags: ['Internship', 'Web Development'],

        runtime: 'CODETECH IT',

        palette: ocean,
      },

      {
        code: 'S02 E02',
        title: 'The Java Developer',

        description:
          'Worked through a Java development internship at Marcello Tech and strengthened programming fundamentals and application logic.',

        tags: ['Java', 'Programming', 'Learning'],

        runtime: 'Marcello Tech',

        palette: violet,
      },
    ],
  },

  {
    number: 3,
    title: 'Learning to Coordinate',
    period: 'Project Work',

    synopsis:
      'Applying project management practices, documentation, testing, and quality review in professional and team-based contexts.',

    episodes: [
      {
        code: 'S03 E01',
        title: 'The PM Trainee',

        description:
          'Worked at Foxtech Solutions as a Junior Project Management Trainee, supporting documentation, reviews, testing, and bug reporting.',

        tags: ['Project Management', 'Testing'],

        runtime: 'Foxtech Solutions',

        palette: amber,
      },

      {
        code: 'S03 E02',
        title: 'The QA Mindset',

        description:
          'Reviewed user flows, tested applications, and documented issues to improve usability and product quality.',

        tags: ['UAT', 'Bug Reporting'],

        runtime: 'Practice-based',

        palette: crimson,
      },
    ],
  },

  {
    number: 4,
    title: 'Building Ideas',
    period: 'Projects',

    synopsis:
      'Turning creative and technical interests into practical products, learning portals, and interactive AI experiences.',

    episodes: [
      {
        code: 'S04 E01',
        title: 'Junior Artist Hub',

        description:
          'A creative platform concept for artist community building, artwork showcases, learning, and AI-assisted pricing ideas.',

        tags: ['Artist Community', 'Creative Tech', 'AI'],

        runtime: '2024–2025',

        palette: jade,
      },

      {
        code: 'S04 E02',
        title: 'PHP Practical Website',

        description:
          'An educational PHP project designed to help users access practical programs, search resources, and learn efficiently.',

        tags: ['PHP', 'Education', 'PWA'],

        runtime: '2024–2025',

        palette: ocean,
      },

      {
        code: 'S04 E03',
        title: 'J.A.R.V.I.S. AI Assistant',

        description:
          'An interactive AI assistant combining question answering with hand-gesture recognition and motion-based control.',

        tags: ['AI', 'Gesture', 'Computer Vision'],

        runtime: '2025',

        palette: amber,
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
    label: 'Education',
    title: 'BCA',
    detail: 'Noorul Islam College of Arts and Science (NICAS)',
    palette: violet,
  },

  {
    label: 'Project Management',
    title: 'Foxtech Solutions',
    detail: 'Junior Project Management Trainee',
    palette: crimson,
  },

  {
    label: 'Development',
    title: 'Full-Stack Internship',
    detail: 'CODETECH IT',
    palette: ocean,
  },

  {
    label: 'Creative Tech',
    title: 'Junior Artist Hub',
    detail: 'Artist community and creative learning platform',
    palette: jade,
  },

  {
    label: 'Learning Portal',
    title: 'PHP Practical Website',
    detail: 'Educational PHP resource platform',
    palette: ocean,
  },

  {
    label: 'AI Project',
    title: 'J.A.R.V.I.S.',
    detail: 'AI assistant with gesture-based interaction',
    palette: amber,
  },

  {
    label: 'Creative Skill',
    title: 'Graphic Design',
    detail: 'Canva, Photoshop and visual communication',
    palette: jade,
  },

  {
    label: 'AI Skill',
    title: 'Prompt Engineering',
    detail: 'AI-assisted development and applications',
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

    title: 'Rifqah Sulaiha',

    lines: [
      'BCA Student',
      'Aspiring Game Developer · Junior Project Management Trainee',
    ],

    chips: ['Game Dev', 'Project Management', 'Creative Tech'],
  },

  {
    kicker: 'Education',

    title: 'The Foundation',

    lines: [
      'Bachelor of Computer Applications',
      'Noorul Islam College of Arts and Science (NICAS)',
    ],

    chips: ['BCA', 'Expected 2028'],
  },

  {
    kicker: 'Experience',

    title: 'Project Ready',

    lines: [
      'Foxtech Solutions — Junior Project Management Trainee',
      'CODETECH IT — Full-Stack Development Internship',
      'Marcello Tech — Java Development Internship',
    ],

    chips: ['PM', 'QA', 'Web Dev'],
  },

  {
    kicker: 'Projects',

    title: 'Ideas in Motion',

    lines: [
      'Junior Artist Hub — creative community platform',
      'PHP Practical Website — educational programming portal',
      'J.A.R.V.I.S. AI Assistant — gesture-based AI experience',
    ],
  },

  {
    kicker: 'Creative Work',

    title: 'Technical + Creative',

    lines: [
      'Graphic design and visual storytelling',
      'Video editing and AI-assisted workflows',
      'Creative problem-solving with technology',
    ],

    chips: ['Design', 'Video', 'AI'],
  },

  {
    kicker: 'The Next Chapter',

    title: 'Build with Purpose',

    lines: [
      'Developing software, games, and digital experiences',
      'with a strong interest in AI, creative technology, and practical learning.',
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