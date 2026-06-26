export const SCIP_BROCHURE_META = {
  title: 'SCIP Program Brochure',
  subtitle: 'Software Career Incubation Program',
  tagline: 'Hire → Train → Deploy on Real Client Projects',
  duration: '2–3 Months Intensive Training',
  company: 'GravityTech Software',
  email: 'career@gravitytech.co.in',
  phone: '+91 83084 09100',
  website: 'www.gravitytechsoftware.com',
  location: 'Pune, Maharashtra, India',
  lastUpdated: 'June 2026',
} as const

export const SCIP_BROCHURE_OVERVIEW = {
  intro:
    'SCIP (Software Career Incubation Program) is GravityTech\'s hiring pathway for fresh graduates and early-career professionals. Selected candidates receive a SCIP employment offer, complete 2–3 months of intensive hands-on training on an assigned track, and then deploy on live client projects with senior mentor support.',
  highlights: [
    'One interview hiring process — not a limited external batch',
    'Paid employment with GravityTech from day one of onboarding',
    '4 specialized training tracks aligned to client project needs',
    'Daily mentorship from senior engineers and architects',
    'Production portfolio built on real client deliverables',
    'Long-term career growth path within GravityTech',
  ],
  journey: [
    { step: '01', title: 'Apply & Interview', detail: 'Submit application and attend one hiring interview.' },
    { step: '02', title: 'SCIP Offer', detail: 'Selected candidates receive an employment offer at GravityTech.' },
    { step: '03', title: 'Onboarding', detail: 'Track assignment, tooling setup, and mentor pairing.' },
    { step: '04', title: 'Training (2–3 mo)', detail: 'Intensive track-based training with assessments.' },
    { step: '05', title: 'Client Projects', detail: 'Deploy on live client work with team collaboration.' },
    { step: '06', title: 'Grow at GravityTech', detail: 'Continued specialization and career progression.' },
  ],
} as const

export interface BrochureSyllabusModule {
  title: string
  topics: string[]
}

export interface BrochureTrainingTrack {
  id: string
  name: string
  duration: string
  description: string
  outcomes: string[]
  tools: string[]
  modules: BrochureSyllabusModule[]
}

export const SCIP_BROCHURE_TRACKS: BrochureTrainingTrack[] = [
  {
    id: 'fullstack',
    name: 'Java & Python Full Stack with React',
    duration: '10–12 Weeks',
    description:
      'Build end-to-end web applications using Java or Python backends with React frontends. Learn REST APIs, databases, authentication, and deployment workflows used on GravityTech client projects.',
    outcomes: [
      'Design and build RESTful APIs with Spring Boot or Python frameworks',
      'Develop responsive React UIs with component-driven architecture',
      'Work with relational and NoSQL databases in production patterns',
      'Implement authentication, validation, and error handling',
      'Collaborate using Git, code reviews, and Agile sprints',
    ],
    tools: ['Java', 'Spring Boot', 'Python', 'React', 'MySQL', 'MongoDB', 'Git', 'Postman', 'Docker'],
    modules: [
      {
        title: 'Module 1 — Programming & OOP Foundations',
        topics: [
          'Core Java / Python syntax, data structures, and algorithms',
          'Object-oriented design principles and clean code practices',
          'Exception handling, collections, and file I/O',
        ],
      },
      {
        title: 'Module 2 — Backend Development',
        topics: [
          'Spring Boot or Django/Flask application structure',
          'REST API design, controllers, services, and repositories',
          'JPA/Hibernate or ORM patterns, query optimization',
        ],
      },
      {
        title: 'Module 3 — React Frontend',
        topics: [
          'React components, hooks, state, and routing',
          'API integration, forms, and client-side validation',
          'Responsive UI with modern CSS and component libraries',
        ],
      },
      {
        title: 'Module 4 — Databases & Integration',
        topics: [
          'MySQL schema design, joins, indexes, and transactions',
          'MongoDB basics for document-based data',
          'Connecting frontend, backend, and database layers',
        ],
      },
      {
        title: 'Module 5 — DevOps & Deployment Basics',
        topics: [
          'Git branching, pull requests, and merge workflows',
          'Environment configuration and build pipelines',
          'Deploying applications to staging environments',
        ],
      },
      {
        title: 'Module 6 — Capstone Project',
        topics: [
          'Full-stack mini product with mentor review cycles',
          'Code quality, testing, and documentation standards',
          'Demo presentation and readiness assessment',
        ],
      },
    ],
  },
  {
    id: 'qa',
    name: 'Software Testing & Quality Assurance',
    duration: '8–10 Weeks',
    description:
      'Master manual and automated testing practices for web and API applications. Learn to design test cases, build automation suites, and integrate QA into Agile delivery pipelines.',
    outcomes: [
      'Write comprehensive test plans, cases, and bug reports',
      'Automate UI and API tests with industry-standard tools',
      'Execute regression, smoke, and integration test cycles',
      'Understand STLC, Agile QA, and defect lifecycle management',
      'Support CI/CD pipelines with automated quality gates',
    ],
    tools: ['Selenium', 'TestNG', 'JUnit', 'Postman', 'JIRA', 'Cypress', 'Git', 'Jenkins'],
    modules: [
      {
        title: 'Module 1 — QA Fundamentals',
        topics: [
          'Software testing principles, SDLC vs STLC',
          'Test types: functional, regression, smoke, UAT',
          'Test case design techniques and traceability matrices',
        ],
      },
      {
        title: 'Module 2 — Manual Testing',
        topics: [
          'Exploratory testing and defect reporting in JIRA',
          'Cross-browser and responsive testing practices',
          'Requirement analysis and test scenario creation',
        ],
      },
      {
        title: 'Module 3 — Automation Basics',
        topics: [
          'Selenium WebDriver architecture and locators',
          'Writing maintainable automation scripts',
          'Page Object Model and test data management',
        ],
      },
      {
        title: 'Module 4 — API & Integration Testing',
        topics: [
          'REST API testing with Postman collections',
          'Status codes, payloads, authentication, and assertions',
          'Integration and end-to-end test orchestration',
        ],
      },
      {
        title: 'Module 5 — CI/CD for QA',
        topics: [
          'Running automated suites in build pipelines',
          'Test reporting, flaky test handling, and coverage metrics',
          'Agile ceremonies and QA collaboration with dev teams',
        ],
      },
      {
        title: 'Module 6 — Capstone Automation Suite',
        topics: [
          'Build an automation framework for a sample application',
          'Regression suite with documentation and demo',
          'Readiness review before client project assignment',
        ],
      },
    ],
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    duration: '8–10 Weeks',
    description:
      'Transform raw data into actionable insights using SQL, Python, and visualization tools. Ideal for graduates pursuing analytics engineering and reporting roles on client projects.',
    outcomes: [
      'Query and model data with advanced SQL techniques',
      'Clean, transform, and analyze datasets using Python',
      'Build interactive dashboards in Power BI and Tableau',
      'Apply statistical thinking to business data problems',
      'Present findings clearly to technical and business stakeholders',
    ],
    tools: ['SQL', 'Python', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'Excel', 'Jupyter'],
    modules: [
      {
        title: 'Module 1 — SQL & Data Modeling',
        topics: [
          'Relational database concepts and normalization',
          'Complex queries: joins, subqueries, window functions',
          'Data modeling for reporting and analytics use cases',
        ],
      },
      {
        title: 'Module 2 — Excel for Analytics',
        topics: [
          'Advanced formulas, pivot tables, and data cleaning',
          'Business metrics, KPIs, and summary reporting',
          'Data validation and structured workbook design',
        ],
      },
      {
        title: 'Module 3 — Python for Data Analysis',
        topics: [
          'Pandas and NumPy for data manipulation',
          'Data cleaning, aggregation, and exploratory analysis',
          'Working with CSV, Excel, and API-sourced datasets',
        ],
      },
      {
        title: 'Module 4 — Power BI Dashboards',
        topics: [
          'Data import, transformation, and DAX basics',
          'Interactive visuals, slicers, and drill-through reports',
          'Publishing and sharing dashboards for stakeholders',
        ],
      },
      {
        title: 'Module 5 — Tableau Visualization',
        topics: [
          'Connecting data sources and building calculated fields',
          'Storytelling with charts, maps, and dashboards',
          'Best practices for executive and operational reporting',
        ],
      },
      {
        title: 'Module 6 — Capstone Analytics Project',
        topics: [
          'End-to-end analysis on a real-world dataset',
          'Dashboard + written insights and presentation',
          'Mentor review and client-readiness assessment',
        ],
      },
    ],
  },
  {
    id: 'business-analytics',
    name: 'Business Analytics',
    duration: '8–10 Weeks',
    description:
      'Bridge business strategy and data. Learn to define KPIs, analyze performance, and deliver executive-ready reports that drive decisions on GravityTech client engagements.',
    outcomes: [
      'Translate business questions into analytical frameworks',
      'Build executive dashboards and performance scorecards',
      'Conduct trend, variance, and cohort analysis',
      'Communicate insights with clarity to non-technical audiences',
      'Support product, sales, and operations teams with data-backed recommendations',
    ],
    tools: ['SQL', 'Excel', 'Power BI', 'Tableau', 'Python', 'Google Sheets', 'JIRA'],
    modules: [
      {
        title: 'Module 1 — Business Metrics & KPIs',
        topics: [
          'Defining OKRs, KPIs, and success metrics by domain',
          'Revenue, funnel, retention, and operational metrics',
          'Aligning analytics output with business goals',
        ],
      },
      {
        title: 'Module 2 — SQL for Business Reporting',
        topics: [
          'Reporting queries for sales, finance, and operations',
          'Period-over-period comparisons and cohort views',
          'Automating recurring business reports',
        ],
      },
      {
        title: 'Module 3 — Excel & Spreadsheet Analytics',
        topics: [
          'Financial modeling basics and scenario analysis',
          'Pivot-driven business summaries and variance reports',
          'Templates for recurring stakeholder updates',
        ],
      },
      {
        title: 'Module 4 — Executive Dashboards',
        topics: [
          'Power BI / Tableau layouts for leadership audiences',
          'Designing drill-down paths and narrative visuals',
          'Accessibility, formatting, and export standards',
        ],
      },
      {
        title: 'Module 5 — Python for Business Data',
        topics: [
          'Automating report generation with Python scripts',
          'Combining multiple data sources for unified views',
          'Lightweight forecasting and trend analysis',
        ],
      },
      {
        title: 'Module 6 — Capstone Business Case',
        topics: [
          'Analyze a business problem with data-backed recommendations',
          'Executive summary deck and live dashboard delivery',
          'Presentation to mentors simulating client stakeholder review',
        ],
      },
    ],
  },
]

export const SCIP_BROCHURE_ELIGIBILITY = [
  'CS, IT, Engineering, Statistics, or related graduates',
  'Career switchers with strong motivation and aptitude',
  'Bootcamp graduates with foundational programming knowledge',
  'Freshers in Data Analytics and Business Analytics tracks',
  'Willingness to commit full-time during training period',
] as const
