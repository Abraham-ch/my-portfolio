import {
  AttendanceService,
  BelcorpMvp,
  BessSolar,
  GaloissAcademy,
  JWControl,
  RxTeeth,
  SkyTech,
  SmartTransit,
  Surichakra,
} from '@/assets/img/Projects'

export const About = {
  title: ['Frontend Developer', 'UI/UX Designer'],
  description:
    'Full-Stack Developer, specialized in Frontend with a solid foundation in electronics and programming, focused on software development and the use of technological tools. Experienced in creating innovative solutions and coordinating initiatives that integrate technology and strategy for the growth of new projects.',
}

export const Services = [
  {
    title: 'Brand Identity.',
    description:
      'I help brands translate their vision into a consistent digital identity. From visual language to design systems, I create interfaces that reflect brand values, improve recognition, and ensure coherence across web and digital products.',
  },
  {
    title: 'Technology.',
    description:
      'I design and build scalable, high-performance web applications using modern technologies. From frontend architectures to backend integrations, I focus on clean code, maintainability, and real-world solutions that deliver measurable impact.',
  },
  {
    title: 'UX/UI Design.',
    description:
      'I create intuitive and accessible user experiences backed by design principles and real user needs. Through research, prototyping, and iteration, I design interfaces that are both functional and visually refined.',
  },
]

export const WorkExperience = [
  {
    company: 'Aynitech',
    role: 'Fullstack Developer',
    period: 'Jan 2026 — Present',
    highlights: [
      'Develop reusable widgets and UI components that power BI development and the production of interactive dashboards.',
      'Design every view with role-based access in mind, so each user role sees and interacts with exactly the data it needs.',
      'Lead AI-assisted QA across several projects: use AI to generate test cases, and write unit, integration and end-to-end tests with Playwright, Supertest and Testcontainers.',
    ],
    stack: [
      'TypeScript',
      'Vue',
      'echarts',
      'Playwright',
      'Supertest',
      'Testcontainers',
    ],
  },
  {
    company: 'JW Control',
    role: 'Fullstack Developer',
    period: 'Nov 2024 — Sep 2025',
    highlights: [
      'Designed and built the JW Control landing page with Astro and Sanity CMS, styled with Tailwind CSS, OpenGraph metadata for social sharing, deployed on Vercel with a Cloudflare-managed domain.',
      'Bess Solar: built a full-featured solar energy e-commerce platform with a shopping cart and an automated quotation flow over email and WhatsApp, using Remix, TypeScript, Tailwind CSS, Sanity as headless CMS and EmailJS.',
      'Galoiss Academy: developed a QR-based attendance system with React and Vite, reading codes from the browser camera to validate students, backed by Node.js and Firebase with OAuth authentication and Chart.js reporting.',
    ],
    stack: [
      'Astro',
      'Remix',
      'React',
      'TypeScript',
      'Sanity',
      'Node.js',
      'Firebase',
      'Tailwind CSS',
      'Vercel',
      'Cloudflare',
    ],
  },
  {
    company: 'SkyTech Lima (Remote)',
    role: 'Frontend Developer · UI/UX Designer',
    period: 'Jan 2024 — Nov 2025',
    highlights: [
      'Joined the startup from day one and helped shape its product, designing accessible, intuitive interfaces in Figma.',
      'Built the frontend with Remix and Vite, using Tailwind CSS and shadcn/ui, with Sanity as CMS.',
    ],
    stack: ['Figma', 'Remix', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Sanity'],
  },
  {
    company: 'Instituto ITS & Smart City Lima, Rímac',
    role: 'Researcher',
    period: 'Aug 2023 — Sep 2023',
    highlights: [
      'Presented a device that records meteorological parameters for data collection across the Florida and Yambrasbamba regions, used to evaluate environmental and tourism impact.',
    ],
    stack: [],
  },
]

export const Experiences = [
  {
    title: 'Attendance Service',
    description:
      'A real-time school attendance platform built with Rust, Axum, and React. Supports QR-based check-ins with location validation, instant attendance updates via WebSockets, JWT authentication, and attendance analytics. Includes a simulated school demo for anyone to explore through a single link.',
    stack:
      'Rust · Axum · PostgreSQL · sqlx · WebSockets · JWT · React 19 · TypeScript · React Router · Tailwind CSS · ECharts · WebAssembly · GitHub Actions · Vercel',
    link: 'https://attendance-service-pearl.vercel.app/',
    img: AttendanceService,
  },
  {
    title: 'JW Control',
    description:
      'Design and development of a landing page with Astro, integrated with Sanity CMS for content management. Used tailwindcss for styling, OpenGraph for social metadata, published on Vercel with domain managed through Cloudflare.',
    link: 'https://jw-control.com',
    img: JWControl,
  },
  {
    title: 'Galoiss Academy',
    description:
      'Developed a QR-based attendance system with React and Vite, reading codes from the browser camera to validate students. Backend built with Node.js and Firebase, with OAuth authentication, Tailwind CSS styling and Chart.js visualizations.',
    link: 'https://qr-assistance.vercel.app',
    img: GaloissAcademy,
  },
  {
    title: 'Bess Solar',
    description:
      'Developed a responsive e-commerce platform for Bess Solar, a clean energy company. The platform features a CMS integration, shopping cart functionality, and integrated quotation system with WhatsApp/email routing. It also includes a dashboard for tracking orders, customers, and sales.',
    link: 'https://bess-solar.vercel.app',
    img: BessSolar,
  },
  {
    title: 'RX Segmentation App',
    description:
      'Built a cross-platform desktop app (Electron, Vite, TypeScript) integrating ONNX-exported model for real-time inference (<3s/image) with intuitive bounding box visualizations.',
    link: 'https://github.com/Abraham-ch/Rx-TeethLesion',
    img: RxTeeth,
  },
  {
    title: 'Surichakra',
    description:
      'Participated from the beginning in the development and evolution of a startup, designing accessible and intuitive interfaces through Figma, with Frameworks like Remix, Vite using UI libraries like tailwindcss and shadcn/ui, integrating Sanity as CMS.',
    link: '',
    img: Surichakra,
  },
  {
    title: 'SkyTech',
    description:
      'Designed and developed a responsive landing page for SkyTech, a consulting company. Delivered a modern, user-friendly interface with optimized performance and mobile compatibility, ensuring a seamless experience across all devices.',
    link: 'https://skytech-services.vercel.app/',
    img: SkyTech,
  },
  {
    title: 'Smart Transit UI',
    description:
      'Presenting the design for Smart Transit, a web app developed for SkyTech. It provides real-time bus tracking, nearby stops, and route planning, all in one intuitive platform. Designed for efficiency and ease of use.',
    link: 'https://www.figma.com/community/file/1415097760195199937/smart-transit-landing-page',
    img: SmartTransit,
  },
  {
    title: 'Belcorp Mvp',
    description:
      'First design of the register for a skin care app, made it for Belcorp Hackaton.',
    link: 'https://www.figma.com/community/file/1429287727958038197/mobile-ui-register',
    img: BelcorpMvp,
  },
]

export const Skills = [
  {
    title: 'Front-End Development',
    description:
      'Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.',
    icons: [
      'HTML',
      'JavaScript',
      'TypeScript',
      'React',
      'Astro',
      'Remix',
      'Vite',
      'WebAssembly',
      'Electron',
    ],
  },
  {
    title: 'Back-End Development',
    description:
      'Developing robust server-side logic and APIs to power dynamic and scalable web applications.',
    icons: ['Nodejs', 'Express', 'Rust', 'Firebase', 'Sanity'],
  },
  {
    title: 'Core Computer Science Concepts',
    description:
      'Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.',
    skills: [
      'Operating Systems',
      'Computer Networks',
      'Object-Oriented Programming',
      'DSA',
      'System Design',
    ],
  },
  {
    title: 'Styling & Design',
    description:
      'Crafting visually appealing and responsive designs with advanced styling tools and frameworks.',
    icons: ['CSS', 'Tailwindcss', 'MUI', 'Shadcn', 'ECharts', 'Chartjs'],
  },
  {
    title: 'Web Animations',
    description:
      'Creating seamless animations and transitions to enhance user engagement and interactivity.',
    icons: ['FramerMotion'],
  },
  {
    title: 'Cloud & Deployment',
    description:
      'Experienced in deploying and managing applications using modern cloud platforms and tools.',
    icons: ['Docker', 'Vercel', 'Cloudflare', 'GithubActions'],
  },
  {
    title: 'Testing & Debugging',
    description:
      'Ensuring code quality and reliability through rigorous testing and debugging processes.',
    icons: ['Jest', 'Postman', 'Playwright', 'Testcontainers', 'Supertest'],
  },
  {
    title: 'Programming Languages',
    description:
      'Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.',
    icons: ['Python', 'C', 'CPlus'],
  },
  {
    title: 'Database Management',
    description:
      'Designing and managing databases to ensure secure and efficient data storage and retrieval.',
    icons: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Mobile App Development',
    description:
      'Creating cross-platform mobile apps with sleek designs and robust functionality.',
    icons: ['React'],
  },
  {
    title: 'Version Control & Collaboration',
    description:
      'Effectively managing code and collaborating on projects to ensure seamless teamwork.',
    icons: ['Git', 'Github'],
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.',
    skills: ['Prototyping', 'Wireframing'],
    icons: ['Figma'],
  },
  {
    title: 'Personal Development',
    description:
      'Committed to continuous learning and personal growth to excel in both professional and collaborative environments.',
    skills: [
      'Time Management',
      'Problem Solving',
      'Communication',
      'Leadership',
    ],
  },
]

export const InTouch = {
  title: "Let's build something",
  titleHighlight: 'amazing together',
  description:
    "I'm always excited to collaborate on new projects, discuss innovative ideas, or simply have a conversation about technology and development. Let's create something extraordinary.",
  features: [
    {
      title: 'Fast response time',
      icon: 'lightning',
    },
    {
      title: 'Professional collaboration',
      icon: 'check',
    },
    {
      title: 'Flexible solutions',
      icon: 'adjustments',
    },
  ],
  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Tell me about your project...',
    submitButton: 'Send Message',
    formTitle: "Let's work together",
    formSubtitle: "Let's help your projects build better.",
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'How can I help?',
    namePlaceholderFull: 'First and last name',
    emailPlaceholderFull: 'Work email',
    messagePlaceholderFull: 'Tell me about your project needs',
    submitButtonFull: 'Get in touch',
    toastTitle: 'Message sent',
    toastDescription: 'Thank you very much for contacting me :)',
  },
}

export const Navigation = {
  menu: 'MENU',
  sections: {
    main: 'Home',
    services: 'Services',
    work: 'Work',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
}

export const Subtitles = {
  services: 'Services',
  work: 'Work experience',
  projects: 'Some of my recent projects :)',
  skills: 'Skills',
}
