import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building2,
  Clock,
  Cpu,
  Crown,
  DollarSign,
  FileText,
  Globe,
  GraduationCap,
  Headphones,
  Heart,
  Layers,
  Lightbulb,
  Monitor,
  Presentation,
  Rocket,
  Scale,
  Search,
  Shield,
  Star,
  TrendingUp,
  UserSearch,
  Users,
  Users2,
  Wallet,
  Zap,
} from 'lucide-react'

export const GRADIENT_LIGHT =
  'linear-gradient(135deg, #fce4f3 0%, #e8d5f5 30%, #d4c5f0 60%, #f0d5a0 100%)'

export const GRADIENT_LIGHT_SHORT =
  'linear-gradient(135deg, #fce4f3 0%, #e8d5f5 40%, #f0d5a0 100%)'

export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
] as const

export const CLIENTS = [
  { name: 'YouGet Software Solution', category: 'Software Solutions', color: '#3b82f6', initials: 'YG' },
  { name: 'IntactBox Systems', category: 'Enterprise Systems', color: '#8b5cf6', initials: 'IB' },
  { name: 'Appligo Technosoft', category: 'Technology Services', color: '#3b82f6', initials: 'AT' },
  { name: 'Mauli Project Management', category: 'Project Management', color: '#ef4444', initials: 'MP' },
  { name: 'Guru Software Solutions', category: 'Software Consulting', color: '#3b82f6', initials: 'GS' },
  { name: 'Inbatoz Consultancy', category: 'Business Consultancy', color: '#3b82f6', initials: 'IC' },
  { name: 'Incub8 Engineering', category: 'Engineering', color: '#3b82f6', initials: 'I8' },
  { name: 'Webforge Technology', category: 'Web Technology', color: '#10b981', initials: 'WF' },
  { name: 'Zentonia Technologies', category: 'Technology Products', color: '#3b82f6', initials: 'ZT' },
  { name: 'LAPD IT Services', category: 'IT Services', color: '#3b82f6', initials: 'LI' },
  { name: 'Eklakshya Athyasika', category: 'Education', color: '#3b82f6', initials: 'EA' },
  { name: 'Agastya Athyasika', category: 'Education', color: '#ef4444', initials: 'AA' },
  { name: 'Sarathi Study Center', category: 'Education', color: '#3b82f6', initials: 'SS' },
  { name: 'Terra Forge Infra', category: 'Infrastructure', color: '#6b7280', initials: 'TF' },
  { name: 'NimbusCare', category: 'Healthcare Tech', color: '#06b6d4', initials: 'NC' },
  { name: 'FinEdge Solutions', category: 'Fintech', color: '#0ea5e9', initials: 'FE' },
] as const

export const HOME_SERVICES = [
  {
    id: 'crm',
    title: 'CRM Solutions',
    description:
      'Custom CRM platforms for sales pipelines, AI-assisted lead scoring, and real-time analytics dashboards.',
    bg: '#0f172a',
    gradient: 'linear-gradient(135deg, #1fb6e8 0%, #0ea5e9 100%)',
    icon: Users2,
    aspectClass: 'aspect-[329/246]',
    buttonVariant: 'light' as const,
    buttonLabel: 'Learn more',
    buttonWidth: 'group-hover:w-[148px]',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'talent',
    title: 'Talent Acquisition',
    description:
      'End-to-end recruitment technology from AI resume screening to onboarding workflows.',
    bg: '#1e1b4b',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    icon: UserSearch,
    aspectClass: 'aspect-square',
    buttonVariant: 'dark' as const,
    buttonLabel: 'View service',
    buttonWidth: 'group-hover:w-[168px]',
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    description:
      'Large-scale ERP integrations, workflow automation, and cross-department portals engineered for scale.',
    bg: '#064e3b',
    gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    icon: Building2,
    aspectClass: 'aspect-[329/246]',
    buttonVariant: 'light' as const,
    buttonLabel: 'Learn more',
    buttonWidth: 'group-hover:w-[148px]',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 'payroll',
    title: 'Third Party Payroll',
    description:
      'Managed payroll processing, statutory compliance (PF, ESI, TDS), and real-time payroll reporting.',
    bg: '#1c1917',
    gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
    icon: Wallet,
    aspectClass: 'aspect-square',
    buttonVariant: 'dark' as const,
    buttonLabel: 'View service',
    buttonWidth: 'group-hover:w-[168px]',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
] as const

export const CORE_VALUES = [
  'Engineering Integrity',
  'Outcome Over Output',
  'Long-Term Partnership',
  'Radical Transparency',
  'Continuous Learning',
  'Community First',
] as const

export const OFFICES = [
  { country: 'India', city: 'Pune', address: 'Primary Development Hub' },
  { country: 'UAE', city: 'Dubai', address: 'Middle East Operations' },
  { country: 'USA', city: 'Delaware', address: 'North America Entity' },
] as const

export const SERVICES_DETAIL = [
  {
    title: 'CRM Solutions',
    color: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    bg: '#0f172a',
    icon: Users2,
    description:
      'Custom CRM platforms built for sales teams, relationship managers, and enterprise pipelines. AI-assisted lead scoring, pipeline automation, and real-time analytics.',
    features: [
      'Lead & Contact Management',
      'Pipeline Automation',
      'AI-Powered Insights',
      'Multi-channel Integration',
      'Custom Reporting Dashboards',
    ],
    tags: ['Sales Pipeline', 'AI Scoring', 'Analytics', 'Integrations'],
  },
  {
    title: 'Talent Acquisition',
    color: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    bg: '#1e1b4b',
    icon: UserSearch,
    description:
      'End-to-end recruitment technology from job posting and AI resume screening to interview scheduling and onboarding workflows. Built for HR teams that need to move fast.',
    features: [
      'AI Resume Screening',
      'Automated Interview Scheduling',
      'Candidate Pipeline Tracking',
      'Onboarding Automation',
      'Analytics & Compliance',
    ],
    tags: ['AI Screening', 'Scheduling', 'Onboarding', 'HR Analytics'],
  },
  {
    title: 'Enterprise Solutions',
    color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    bg: '#064e3b',
    icon: Building2,
    description:
      'Large-scale enterprise software — ERP integrations, workflow automation, cross-department portals, and custom platforms engineered for scale, security, and maintainability.',
    features: [
      'ERP & System Integration',
      'Workflow Automation',
      'Role-Based Access Control',
      'Audit & Compliance Modules',
      'Scalable Cloud Architecture',
    ],
    tags: ['ERP', 'Automation', 'RBAC', 'Cloud Scale'],
  },
  {
    title: 'Third Party Payroll',
    color: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
    bg: '#1c1917',
    icon: Wallet,
    description:
      'Fully managed payroll processing for enterprises — compliance, statutory filings (PF, ESI, TDS), salary disbursement, and real-time payroll reporting.',
    features: [
      'Multi-vendor Payroll Processing',
      'Statutory Compliance (PF, ESI, TDS)',
      'Salary Slip Automation',
      'Real-time Payroll Dashboard',
      'Year-end Filing Support',
    ],
    tags: ['PF/ESI/TDS', 'Compliance', 'Reporting', 'Automation'],
  },
] as const

export const WHY_GRAVITYTECH = [
  {
    icon: TrendingUp,
    title: '50+ Products Shipped',
    description: "From MVP to enterprise platforms, we've delivered across industries.",
  },
  {
    icon: Cpu,
    title: 'AI-First Engineering',
    description:
      'Every solution we build leverages modern AI to accelerate delivery and reduce cost.',
  },
  {
    icon: Rocket,
    title: 'Live Project Training',
    description: 'Our SCIP program deploys trainees on real client work from week 3.',
  },
  {
    icon: Layers,
    title: 'Domain Expertise',
    description:
      'Deep knowledge across healthcare, BFSI, edtech, logistics, and infrastructure.',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'Engineering in Pune. Operations in Dubai. Entity in Delaware.',
  },
  {
    icon: Shield,
    title: 'End-to-End Partnership',
    description: 'We stay with you from discovery to production — and beyond.',
  },
] as const

export const PERKS = [
  { icon: Heart, title: 'Health & Wellness', description: 'Guidance, healthy work habits, and support systems that keep you learning without burnout.' },
  { icon: Clock, title: 'Flexible Work Culture', description: 'Balance project work and learning with hybrid, remote-friendly, and adaptive flexibility.' },
  { icon: TrendingUp, title: 'Transparent Career Growth', description: 'Clear tracks, fair evaluations, real opportunities, and mentor feedback after every sprint.' },
  { icon: BookOpen, title: 'Dedicated Learning Budget', description: 'Access resources, tools, AI workflows, and guided practice for modern software skills.' },
  { icon: Layers, title: 'Real Project Ownership', description: 'Own modules, decisions, demos, and improvements instead of only watching others build.' },
  { icon: Users, title: 'Community Exposure', description: 'Collaborate with developers, analysts, testers, clients, mentors, and project contributors.' },
  { icon: Rocket, title: 'Career Development', description: 'Upskill with workshops, mentorship, code reviews, documentation practice, and mock demos.' },
  { icon: Monitor, title: 'High-end Project Tools', description: 'Use modern editors, AI tools, Git workflows, deployment utilities, and collaboration systems.' },
  { icon: Star, title: 'Bonus & Referrals', description: 'Extra rewards and recognition for strong delivery, referrals, and consistent improvement.' },
  { icon: Shield, title: 'Equal Opportunities', description: 'Freshers, students, switchers, and early-career talent grow through practical work.' },
  { icon: Presentation, title: 'Client Demo Exposure', description: 'Present your modules, dashboards, and delivery stories during showcase-style walkthroughs.' },
  { icon: FileText, title: 'Portfolio Support', description: 'Get help shaping project explanations, resume bullets, and confidence for technical conversations.' },
] as const

export const PERK_TAGS = [
  'Mentor-led reviews',
  'Live client projects',
  'Interview support',
  'Demo-day exposure',
  'Performance recognition',
  'Flexible timings',
] as const

export const ROLE_FILTERS = ['All', 'Engineering', 'Internships', 'Design', 'QA'] as const

export type RoleFilter = (typeof ROLE_FILTERS)[number]

export interface Role {
  title: string
  dept: string
  deptColor: string
  deptColorSoft: string
  location: string
  type: string
  salary: string
  category: string
  description: string
}

export const ROLES: Role[] = [
  {
    title: 'Java Intern',
    dept: 'Engineering',
    deptColor: '#3b82f6',
    deptColorSoft: '#eff6ff',
    location: 'Pune · Hybrid',
    type: 'Internship',
    salary: 'Stipend: ₹8k–15k/mo',
    category: 'Internships',
    description:
      'Work on live Java Spring Boot microservices for real enterprise clients. Learn through code reviews, sprint demos, and direct mentor feedback.',
  },
  {
    title: 'Python Intern',
    dept: 'AI & Data',
    deptColor: '#8b5cf6',
    deptColorSoft: '#f5f3ff',
    location: 'Pune · Hybrid',
    type: 'Internship',
    salary: 'Stipend: ₹8k–15k/mo',
    category: 'Internships',
    description:
      'Build Python automation scripts, data pipelines, and AI-assisted features deployed to real client environments from week 3.',
  },
  {
    title: 'QA Intern',
    dept: 'Quality',
    deptColor: '#10b981',
    deptColorSoft: '#f0fdf4',
    location: 'Remote',
    type: 'Internship',
    salary: 'Stipend: ₹6k–12k/mo',
    category: 'Internships',
    description:
      'Write and run automated test suites using Selenium and Playwright on live products. Gain real QA experience with JIRA and CI/CD pipelines.',
  },
  {
    title: 'Data Analytics Intern',
    dept: 'Analytics',
    deptColor: '#f59e0b',
    deptColorSoft: '#fffbeb',
    location: 'Remote',
    type: 'Internship',
    salary: 'Stipend: ₹8k–14k/mo',
    category: 'Internships',
    description:
      'Analyze real client datasets, build dashboards in Power BI and Tableau, and present insights directly in client demos.',
  },
  {
    title: 'Senior Full Stack Developer',
    dept: 'Engineering',
    deptColor: '#3b82f6',
    deptColorSoft: '#eff6ff',
    location: 'Pune · Hybrid',
    type: 'Full-time',
    salary: '₹8–18 LPA',
    category: 'Engineering',
    description:
      'Lead development of enterprise React + Node.js platforms. Mentor junior engineers and own architecture decisions end to end.',
  },
  {
    title: 'AI/ML Engineer',
    dept: 'AI & Data',
    deptColor: '#8b5cf6',
    deptColorSoft: '#f5f3ff',
    location: 'Pune · Hybrid',
    type: 'Full-time',
    salary: '₹10–20 LPA',
    category: 'Engineering',
    description:
      'Design, evaluate, and deploy AI features — LLM assistants, document processing, recommendation engines — with proper monitoring.',
  },
  {
    title: 'DevOps Engineer',
    dept: 'Infrastructure',
    deptColor: '#06b6d4',
    deptColorSoft: '#f0fdfa',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹8–16 LPA',
    category: 'Engineering',
    description:
      'Own CI/CD pipelines, AWS/Azure cloud infrastructure, and observability stacks across multiple live client projects.',
  },
  {
    title: 'UI/UX Designer',
    dept: 'Design',
    deptColor: '#ec4899',
    deptColorSoft: '#fdf2f8',
    location: 'Pune · Hybrid',
    type: 'Full-time',
    salary: '₹6–14 LPA',
    category: 'Design',
    description:
      'Design intuitive interfaces for enterprise software and AI products. Own the design system from wireframes to final handoff.',
  },
  {
    title: 'QA Automation Engineer',
    dept: 'Quality',
    deptColor: '#10b981',
    deptColorSoft: '#f0fdf4',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹6–13 LPA',
    category: 'QA',
    description:
      'Build and maintain automated test suites, integrate into CI pipelines, and help all teams ship with confidence.',
  },
  {
    title: 'HR & Talent Specialist',
    dept: 'HR',
    deptColor: '#f97316',
    deptColorSoft: '#fff7ed',
    location: 'Pune · On-site',
    type: 'Full-time',
    salary: '₹4–8 LPA',
    category: 'Engineering',
    description:
      "Own talent acquisition, SCIP cohort coordination, and employer branding for GravityTech's growing engineering team.",
  },
]

export const SCIP_STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Search,
    title: 'Selective Hiring',
    desc: 'We identify raw talent — aptitude and drive matter more than years of experience.',
  },
  {
    icon: BookOpen,
    title: 'Job-Oriented Training',
    desc: '8–12 weeks of structured domain training with daily reviews and mentored sprints.',
  },
  {
    icon: Rocket,
    title: 'Live Project Deployment',
    desc: 'Real client deliverables from week 3. No dummy projects. Real responsibility.',
  },
]

export const SCIP_BENEFITS = [
  'Guaranteed live project exposure',
  'Mentorship from senior engineers',
  'Portfolio-ready by program end',
  'Job placement assistance',
  'Certification upon completion',
  'Pathway to full-time role at GravityTech',
] as const

export const APPLY_ROLES = [
  ...ROLES.map((r) => r.title),
  'SCIP Program',
] as const

export const BUILD_DIFFERENTLY = [
  {
    title: 'Driving Strategy to Production',
    description:
      'We move from roadmap to reality through delivery, deployment, governance, and measurable enterprise outcomes.',
  },
  {
    title: 'Consultants with Engineering Depth',
    description:
      'Strategy clarity and engineering partnership in the same room reduces the gap between advice and execution.',
  },
  {
    title: 'Strong Data & Knowledge Foundation',
    description:
      'Enterprise context is engineered into every client engagement — entities, relationships, and business logic.',
  },
  {
    title: 'Measurable Outcomes Built In',
    description:
      'Success is defined before delivery begins, with quality gates, ROI visibility, and attribution built into the engagement.',
  },
] as const

export const TEAM_MEMBERS = [
  {
    name: 'Arjun Sharma',
    role: 'Co-Founder & CEO',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Priya Kulkarni',
    role: 'Co-Founder & CTO',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Rahul Desai',
    role: 'Co-Founder & Head of Delivery',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Sneha Joshi',
    role: 'Co-Founder & COO',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
  },
  {
    name: 'Vikram Nair',
    role: 'Co-Founder & Head of Engineering',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Aisha Patel',
    role: 'Co-Founder & Chief AI Officer',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
] as const

export const TECH_STACK = [
  {
    name: 'React & Next.js',
    details: 'v18, App Router, RSC',
    bgColor: 'linear-gradient(135deg,#61dafb,#0070f3)',
  },
  {
    name: 'Node.js & Python',
    details: 'Express, FastAPI, Django',
    bgColor: 'linear-gradient(135deg,#68a063,#3776ab)',
  },
  {
    name: 'AWS & Azure',
    details: 'EC2, Lambda, AKS, CDK',
    bgColor: 'linear-gradient(135deg,#ff9900,#0089d6)',
  },
  {
    name: 'PostgreSQL & Redis',
    details: 'Supabase, RDS, ElastiCache',
    bgColor: 'linear-gradient(135deg,#336791,#dc382d)',
  },
] as const

export const MAP_OFFICES = [
  { city: 'Pune', country: 'India', flag: '🇮🇳', x: '72%', y: '45%' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', x: '62%', y: '42%' },
  { city: 'Delaware', country: 'USA', flag: '🇺🇸', x: '22%', y: '35%' },
] as const

export const LIFE_AT_PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    alt: 'Team collaboration around laptop',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    alt: 'Team meeting in office',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    alt: 'Whiteboard presentation session',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    alt: 'Modern office workspace',
  },
] as const

export const WHY_JOIN_ROWS = [
  {
    photo: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    title: 'Where innovation is everyday work',
    description:
      "Every sprint, every delivery, every decision pushes us forward. You won't find anyone here doing things just because they've always been done that way.",
  },
  {
    photo: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
    title: 'Make an impact at a global scale',
    description:
      'Your code, your designs, your analysis — deployed to real clients across India, UAE, and the USA. The impact is immediate and visible.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    title: 'Grow with a team that invests in you',
    description:
      "Mentorship, learning budget, certifications, and a clear path forward. We don't hire and forget — we build careers.",
  },
] as const

export interface CareersPerk {
  icon: LucideIcon
  title: string
  description: string
  tall?: boolean
  gradient?: string
}

export const CAREERS_PERKS: CareersPerk[] = [
  {
    icon: Heart,
    title: 'Health Coverage',
    description: 'Comprehensive plans to keep you and your family protected.',
  },
  {
    icon: Headphones,
    title: 'Flexible Work Culture',
    description: 'Balance life and work with adaptive flexibility.',
    tall: true,
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(255,255,255,0.7))',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Career Growth',
    description: 'Clear paths, fair evaluations, real opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Dedicated AI Budget',
    description: 'Access resources and tools for cutting-edge AI.',
  },
  {
    icon: ArrowUpRight,
    title: 'Equity Share',
    description: "Be a co-owner and grow with GravityTech's success.",
    tall: true,
    gradient: 'linear-gradient(135deg, rgba(31,182,232,0.08), rgba(255,255,255,0.7))',
  },
  {
    icon: Users,
    title: 'Community Exposure',
    description: 'Collaborate with industry leaders and global communities.',
  },
  {
    icon: Rocket,
    title: 'Career Development',
    description: 'Upskill with workshops, mentorship, and training programs.',
  },
  {
    icon: Monitor,
    title: 'High-end Laptops',
    description: 'Premium devices, powerful performance, seamless work.',
    tall: true,
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(255,255,255,0.7))',
  },
  {
    icon: DollarSign,
    title: 'Bonus and Referrals',
    description: 'Extra rewards for great work and referrals.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Stipends',
    description: 'Support for courses, certifications, and skill upgrades.',
  },
  {
    icon: Globe,
    title: 'Industry Best Pay',
    description: 'Competitive salaries aligned with your contribution.',
  },
  {
    icon: Scale,
    title: 'Equal Opportunities',
    description: 'A workplace where every voice matters.',
  },
]

export const EXPLORE_PATHS = [
  {
    icon: GraduationCap,
    label: 'Graduates / Interns',
    tagline: 'Learn Fast, Build Real, Grow Fearless.',
    title:
      'Start strong with hands-on projects and mentorship that fuels your potential.',
    quote:
      'My internship gave me hands-on learning, constant mentor support, and a positive culture that fueled both personal and professional growth.',
    person: 'Riddhi C.',
    personRole: 'Java Intern → Junior Developer',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    icon: Zap,
    label: 'Early Career Professionals',
    tagline: 'Build Momentum From Day One.',
    title: 'Real projects, real feedback, and a team that helps you grow fast.',
    quote:
      'I shipped to production in my second week. The learning curve is steep but the support system makes it worth it.',
    person: 'Aryan M.',
    personRole: 'Python Intern → ML Engineer',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    icon: Briefcase,
    label: 'Experienced Professionals',
    tagline: 'Bring Your Expertise, Multiply Your Impact.',
    title: 'Lead, own, and drive outcomes across enterprise-grade projects.',
    quote:
      'I joined for the engineering culture. I stayed because of the ownership and the quality of clients we serve.',
    person: 'Neha K.',
    personRole: 'Senior Full Stack Developer',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
  },
  {
    icon: Crown,
    label: 'Executive Leaders',
    tagline: 'Shape Strategy, Build Teams, Drive Vision.',
    title: "Lead practices, mentor engineers, and influence GravityTech's direction.",
    quote:
      'The engineering culture here is rare. Pragmatic, fast-moving, and genuinely focused on outcomes.',
    person: 'Vijay S.',
    personRole: 'Head of Delivery',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80',
  },
] as const

export const FEATURED_ROLES = [
  {
    title: 'Java Intern',
    description:
      'Work on live Spring Boot microservices for enterprise clients. Hands-on from week 1.',
  },
  {
    title: 'Python Intern',
    description:
      'Build AI features, data pipelines, and automation scripts deployed to real client environments.',
  },
  {
    title: 'QA Automation Intern',
    description:
      'Write and run Selenium/Playwright test suites on live products with JIRA and CI/CD workflows.',
  },
  {
    title: 'Data Analytics Intern',
    description:
      'Analyze real datasets, build Power BI/Tableau dashboards, and present insights in client demos.',
  },
] as const

export const CAREERS_FAQ = [
  {
    q: 'How do I apply for a role at GravityTech?',
    a: "Fill out the application form on this page or click 'Apply Now' on any role card. Our talent team responds within 2 business days.",
  },
  {
    q: 'Can I apply for more than one role at a time?',
    a: 'Yes. You can apply for multiple roles. We recommend tailoring your message for each role to improve your chances.',
  },
  {
    q: 'What is the SCIP Program?',
    a: "SCIP (Specialized Corporate Incubation Program) is GravityTech's flagship training initiative. We hire driven individuals and put them through 8-12 weeks of job-oriented training on live client projects.",
  },
  {
    q: 'Are internship positions paid?',
    a: 'Yes. All internship positions come with a monthly stipend. The range depends on the role and is mentioned in each job listing.',
  },
  {
    q: 'Do I need prior experience for internships?',
    a: 'No prior work experience is required for internship roles. Strong fundamentals, problem-solving ability, and the drive to learn are what we look for.',
  },
] as const
