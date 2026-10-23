export const sectionLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About & Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const projects = [
  {
    title: 'GitOps Kubernetes Homelab',
    description: 'A personal platform for learning how infrastructure and applications fit together. Terraform provisions a Hetzner-hosted K3s cluster, while Argo CD manages deployments from Git.',
    detail: 'The ApplicationSet discovers application folders and configures automatic sync, pruning, and self-healing. Helm and Kustomize organize services and platform configuration.',
    status: 'Personal homelab',
    tech: ['Terraform', 'Kubernetes / K3s', 'Argo CD', 'Helm', 'Hetzner'],
    url: 'https://github.com/Namilaus/argocd_platform',
    flowLabel: 'Deployment flow',
    flow: ['Git changes', 'Argo CD sync', 'K3s services'],
  },
  {
    title: 'Shared Gift Wishlist',
    description: 'A shared wishlist interface that loads gift ideas from an API and lets visitors reserve an item. Built with Next.js, React, and TypeScript.',
    detail: 'The page fetches wishes on the server; a client component submits reservations and refreshes the list. The public repository contains the frontend and API integration.',
    status: 'Frontend & API integration',
    tech: ['Next.js', 'React', 'TypeScript', 'API integration'],
    url: 'https://github.com/Namilaus/wishList',
    flowLabel: 'Reservation flow',
    flow: ['Load wishes', 'Reserve a gift', 'Refresh the list'],
  },
  {
    title: 'German Address Data Pipeline',
    description: 'An experimental Python pipeline for collecting German locality data, looking up postcodes, and storing the results in MySQL.',
    detail: 'Combines web data collection with Wikidata lookups and a relational schema. A learning prototype for data ingestion and modeling; an autocomplete service is a future step.',
    status: 'Data prototype',
    tech: ['Python', 'BeautifulSoup', 'Wikidata API', 'MySQL'],
    url: 'https://github.com/Namilaus/DE-DB',
    flowLabel: 'Data flow',
    flow: ['Web sources', 'Python collector', 'MySQL'],
  },
];

export const experiences = [
  {
    title: 'Dual Student · Software Engineering',
    company: 'EDEKA IT',
    period: 'August 2025 – Present',
    location: 'Hamburg, Germany',
    description: [
      'Support monitoring and automation of cloud infrastructure and the development of cloud platform processes.',
      'Develop CI pipelines for automated code checks and quality assurance.',
      'Develop and automate Power BI dashboards to improve operational data visibility and reporting.',
    ],
  },
  {
    title: 'IT Intern',
    company: 'PC Spezialist Cornix IT',
    period: 'August – September 2024',
    location: 'Bünde, Germany',
    description: [
      'Diagnosed hardware, software, and network issues during a return internship.',
      'Installed and configured IT systems, migrated data, and supported system performance analysis.',
    ],
  },
  {
    title: 'Backend Development Intern',
    company: 'Etiya',
    period: 'October – November 2023',
    location: 'Ankara, Turkey',
    description: [
      'Contributed to backend development and supported API integration and database query improvements.',
      'Worked with Node.js, Next.js, and MySQL.',
    ],
  },
  {
    title: 'IT Intern',
    company: 'PC Spezialist Cornix IT',
    period: 'November – December 2020',
    location: 'Bünde, Germany',
    description: [
      'Assisted with hardware and software troubleshooting, system installation, and customer support.',
    ],
  },
];

export const skillCategories = [
  {
    code: 'WRK',
    title: 'Practical experience',
    context: 'Tools and practices used across my dual study and internships.',
    skills: ['Power BI', 'CI pipelines', 'Node.js', 'Next.js', 'MySQL', 'IT troubleshooting'],
  },
  {
    code: 'CLD',
    title: 'Cloud & monitoring',
    context: 'My current focus in infrastructure visibility, automation, and delivery.',
    skills: ['Microsoft Azure', 'Datadog', 'GitOps', 'Cloud monitoring', 'Infrastructure automation'],
  },
  {
    code: 'OPS',
    title: 'Personal infrastructure',
    context: 'Hands-on learning through my GitOps homelab on Hetzner.',
    skills: ['Terraform', 'Kubernetes / K3s', 'Argo CD', 'Helm', 'Kustomize', 'Hetzner'],
  },
  {
    code: 'DEV',
    title: 'Personal applications',
    context: 'Web interfaces, API integration, and data collection in my projects.',
    skills: ['TypeScript', 'JavaScript', 'React', 'Python', 'BeautifulSoup', 'REST APIs', 'SQL'],
  },
];
