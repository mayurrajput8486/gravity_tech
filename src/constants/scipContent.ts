import {
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle,
  Clock,
  Cloud,
  Code,
  Database,
  DollarSign,
  FileCheck,
  Laptop,
  LifeBuoy,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const SCIP_PROGRAM_CARDS = [
  {
    icon: Briefcase,
    title: 'Real-World Projects',
    description:
      'After your 2–3 month training period, you work on real-time GravityTech client projects — not dummy assignments.',
    hoverStat: 'Live client deliverables',
  },
  {
    icon: Users,
    title: 'Industry Expert Mentors',
    description: 'Learn from senior developers and architects with 10+ years experience',
    hoverStat: '1:1 Weekly Sessions',
  },
  {
    icon: Rocket,
    title: 'Hire & Grow at GravityTech',
    description:
      'SCIP is our hiring pathway — one interview, a SCIP offer, and a career path inside GravityTech.',
    hoverStat: 'No external batch enrollment',
  },
  {
    icon: Code,
    title: 'Multiple Tracks',
    description:
      'Training across Java, Python & AI, QA Automation, and Data Analytics — including fresh graduates in analytics.',
    hoverStat: '4 career tracks',
  },
  {
    icon: Award,
    title: 'Portfolio + Certification',
    description: 'Build impressive portfolio projects and earn industry-recognized certification',
    hoverStat: 'Verified Credentials',
  },
  {
    icon: Target,
    title: 'Structured Training',
    description:
      'A focused 2–3 month probation-style training period before you are deployed on client work.',
    hoverStat: 'Hands-on from day one at GravityTech',
  },
] as const

export const SCIP_PHASES = [
  {
    icon: CheckCircle,
    weeks: 'Step 1',
    title: 'Apply & Interview',
    description:
      'Apply through our hiring process. One interview — if selected, you receive a SCIP offer to join GravityTech.',
    deliverable: '✓ SCIP employment offer',
    duration: '1 Interview',
    phase: 1,
  },
  {
    icon: BookOpen,
    weeks: 'Step 2',
    title: 'Onboarding',
    description:
      'Join the team, meet your mentor, get your tools set up, and get assigned to your track.',
    deliverable: '✓ Team intro, track assignment, workspace setup',
    duration: 'Week 1',
    phase: 2,
  },
  {
    icon: BarChart3,
    weeks: 'Step 3',
    title: 'Intensive Training',
    description:
      '2–3 months of hands-on training on your track — development, QA, or Data Analytics — with daily mentorship.',
    deliverable: '✓ Track skills, mini-projects, assessments',
    duration: '2–3 Months',
    phase: 3,
    highlight: true,
  },
  {
    icon: Briefcase,
    weeks: 'Step 4',
    title: 'Live Client Projects',
    description:
      'Move to real-time client projects. Your code ships. Your dashboards are used. Real business impact.',
    deliverable: '✓ Production contributions, portfolio work',
    duration: 'Ongoing',
    phase: 4,
  },
  {
    icon: Zap,
    weeks: 'Step 5',
    title: 'Grow at GravityTech',
    description:
      'Continue building your career with GravityTech — deeper responsibility, client ownership, and long-term growth.',
    deliverable: '✓ Full team member pathway',
    duration: 'Long-term',
    phase: 5,
  },
] as const

export const SCIP_METRICS = [
  {
    icon: Users,
    target: 150,
    suffix: '+',
    prefix: '',
    label: 'Graduates Trained',
    subtext: 'Across dev, QA & Data Analytics',
  },
  {
    icon: TrendingUp,
    target: 95,
    suffix: '%',
    prefix: '',
    label: 'Move to Client Work',
    subtext: 'After training period',
  },
  {
    icon: DollarSign,
    target: 45,
    suffix: '% ↑',
    prefix: '',
    label: 'Average Salary Growth',
    subtext: 'After joining client projects',
  },
  {
    icon: Clock,
    target: 3,
    suffix: '',
    prefix: '',
    label: 'Training Period',
    subtext: 'Before client project deployment',
    display: '2–3 mo',
  },
] as const

export const SCIP_TESTIMONIALS = [
  {
    name: 'Aditya Sharma',
    role: 'Senior Frontend Developer',
    company: 'GravityTech Software',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    quote:
      'SCIP completely transformed my career. I went through training, then straight onto live client work. The real projects made the difference — I was production-ready when it mattered.',
    before: 'College graduate, no experience',
    after: 'Senior Developer, leading 3-person team',
  },
  {
    name: 'Priya Desai',
    role: 'Full Stack Engineer',
    company: 'GravityTech Software',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    quote:
      'The mentorship here is unreal. My mentor taught me not just code, but how to think about problems. After training I was on client projects doing exactly what I wanted.',
    before: 'Bootcamp graduate, portfolio weak',
    after: 'Lead developer, architecting new features',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Backend Engineer',
    company: 'GravityTech Software',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    quote:
      'The SCIP program gave me the confidence to tackle complex systems. Training first, then real client projects — that was the best experience. Highly recommended!',
    before: 'Self-taught, imposter syndrome',
    after: 'Confident backend architect',
  },
  {
    name: 'Neha Verma',
    role: 'Data Analytics Engineer',
    company: 'GravityTech Software',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    quote:
      "SCIP's Data Analytics track helped me go from fresh graduate to building real dashboards for clients. The training period gave me exactly what college didn't.",
    before: 'Fresh graduate, Data Analytics',
    after: 'Analytics engineer on live client projects',
  },
] as const

export const SCIP_FEATURES = [
  {
    icon: Laptop,
    title: '100% Hands-On',
    description:
      'Training is practical from the start. After 2–3 months you move to live client projects — no theory-only learning.',
    details: 'Track-based training, weekly reviews, then production deployment',
  },
  {
    icon: Users,
    title: 'Senior Mentors',
    description:
      'Learn directly from industry veterans with 10+ years experience. Personalized guidance every step.',
    details: '1:1 sessions during training, ongoing support on client projects',
  },
  {
    icon: Rocket,
    title: 'Career at GravityTech',
    description:
      'SCIP is how we hire — not a bootcamp with batches. One interview, an offer, and a long-term path inside the company.',
    details: 'Hiring process, structured training, then client project ownership',
  },
  {
    icon: FileCheck,
    title: 'Real Portfolio',
    description:
      'Build production-ready work during training and on client projects. Real output you can show anywhere.',
    details: 'GitHub portfolio, case studies, live applications',
  },
  {
    icon: Code,
    title: 'Multiple Tracks',
    description:
      'Java, Python & AI, QA Automation, and Data Analytics — SQL, Power BI, Tableau, and Python for analytics graduates.',
    details: 'Track-matched training, client-aligned skills, mentor-led sprints',
  },
  {
    icon: LifeBuoy,
    title: 'Long-Term Support',
    description:
      'Stay and grow at GravityTech. Continued mentorship, skill upgrades, and career progression on real projects.',
    details: 'Internal growth path, client exposure, continuous learning',
  },
] as const

export interface CurriculumPhase {
  icon: LucideIcon
  title: string
  duration: string
  progress: number
  weeks: { range: string; topics: string[] }[]
  technologies: string[]
  projects: string
  deliverable: string
}

export const SCIP_CURRICULUM: CurriculumPhase[] = [
  {
    icon: CheckCircle,
    title: 'Step 1: Interview & SCIP Offer',
    duration: 'Hiring Process',
    progress: 20,
    weeks: [
      {
        range: 'How it works',
        topics: [
          'Apply through the SCIP application form',
          'One hiring interview with the GravityTech talent team',
          'Selected candidates receive a SCIP offer to join the company',
          'No batch enrollment — we hire when we need talent',
        ],
      },
    ],
    technologies: ['Interview', 'SCIP Offer'],
    projects: 'N/A',
    deliverable: 'SCIP employment offer',
  },
  {
    icon: BookOpen,
    title: 'Step 2: Onboarding',
    duration: 'Week 1',
    progress: 35,
    weeks: [
      {
        range: 'First week at GravityTech',
        topics: [
          'Team introduction and company orientation',
          'Track assignment: Java, Python & AI, QA, or Data Analytics',
          'Tooling, codebase access, and mentor pairing',
          'Training roadmap for your 2–3 month period',
        ],
      },
    ],
    technologies: ['Onboarding', 'Track Setup'],
    projects: 'Orientation tasks',
    deliverable: 'Ready to begin training',
  },
  {
    icon: BarChart3,
    title: 'Step 3: Intensive Training (2–3 Months)',
    duration: '2–3 Months',
    progress: 70,
    weeks: [
      {
        range: 'Development & QA tracks',
        topics: [
          'Programming fundamentals and domain-specific skills',
          'Mini-projects with mentor review',
          'Agile workflows, Git, and team collaboration',
          'Assessments before client project deployment',
        ],
      },
      {
        range: 'Data Analytics track',
        topics: [
          'SQL, data modeling, and query optimization',
          'Power BI, Tableau, and dashboard design',
          'Python for data processing and reporting',
          'Real dataset analysis and presentation skills',
        ],
      },
    ],
    technologies: ['Java', 'Python', 'SQL', 'Power BI', 'Tableau', 'QA Tools'],
    projects: 'Track-based training projects',
    deliverable: 'Training completion & client-ready skills',
  },
  {
    icon: Briefcase,
    title: 'Step 4: Live Client Projects',
    duration: 'Ongoing',
    progress: 90,
    weeks: [
      {
        range: 'Real-time client work',
        topics: [
          'Assigned to active GravityTech client projects',
          'Contribute to production code, dashboards, or QA suites',
          'Daily standups, sprint participation, and mentor reviews',
          'Portfolio-building on real deliverables',
        ],
      },
    ],
    technologies: ['Production Stack', 'Client Tools', 'DevOps'],
    projects: 'Live client deliverables',
    deliverable: 'Production contributions',
  },
  {
    icon: Target,
    title: 'Step 5: Grow at GravityTech',
    duration: 'Long-term',
    progress: 100,
    weeks: [
      {
        range: 'Career progression',
        topics: [
          'Expanded responsibility on client accounts',
          'Advanced specialization and system design exposure',
          'Continued mentorship and performance reviews',
          'Long-term career path within GravityTech',
        ],
      },
    ],
    technologies: ['Career Growth', 'Leadership'],
    projects: 'Ongoing client ownership',
    deliverable: 'Full team member growth',
  },
]
