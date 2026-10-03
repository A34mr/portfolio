/**
 * Portfolio resume dataset containing personal, career, skills, and project records.
 * Populated from Amr Hamdy Saad's Software Developer Curriculum Vitae.
 * @module data/portfolioData
 */
import { PortfolioData } from '../types/portfolio';

/**
 * Amr Hamdy Saad's verified resume and portfolio dataset.
 */
export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Amr Hamdy Saad',
    title: 'Junior Software Developer',
    tagline: 'Computer Science student & developer crafting full-stack web applications, AI-integrated solutions, and network architectures.',
    summary: 'Motivated Computer Science student at the Egyptian E-Learning University (EELU) with a solid foundation in software development, networking, and data analysis. Experienced in Java, C++, JavaScript, Node.js, Express, React, and MySQL through academic coursework and hands-on training at the Information Technology Institute (ITI). Built a full-stack MERN application (Dent AI) integrating an AI diagnostic model, real-time messaging, and REST APIs. Certified in Cisco CCNAv7 networking, Huawei HCIA Artificial Intelligence, and advanced data analysis. Seeking a Junior Software Developer role to apply programming skills and contribute to building scalable, efficient software solutions.',
    email: 'amrhamdys54321@gmail.com',
    location: 'Cairo, Egypt',
    avatarUrl: '/assets/profile.jpg',
    resumeUrl: '/assets/Amr_Hamdy_Saad_Software_Developer_CV.pdf',
    socials: [
      {
        platform: 'github',
        label: 'GitHub',
        url: 'https://github.com/A34mr',
      },
      {
        platform: 'linkedin',
        label: 'LinkedIn',
        url: 'https://linkedin.com',
      },
      {
        platform: 'email',
        label: 'Email',
        url: 'mailto:amrhamdys54321@gmail.com',
      },
    ],
  },
  skills: [
    // Web & Frontend
    { name: 'React', category: 'frontend', icon: 'Code', proficiency: 90 },
    { name: 'JavaScript (ES6+)', category: 'frontend', icon: 'FileCode2', proficiency: 88 },
    { name: 'HTML5 & CSS3', category: 'frontend', icon: 'Palette', proficiency: 92 },
    { name: 'Tailwind CSS & Responsive UI', category: 'frontend', icon: 'Layout', proficiency: 89 },
    { name: 'Socket.IO (Client)', category: 'frontend', icon: 'Workflow', proficiency: 84 },

    // Backend & Languages
    { name: 'Node.js & Express', category: 'backend', icon: 'Server', proficiency: 87 },
    { name: 'Java', category: 'backend', icon: 'Terminal', proficiency: 85 },
    { name: 'C++', category: 'backend', icon: 'Cpu', proficiency: 86 },
    { name: 'REST APIs & JWT Authentication', category: 'backend', icon: 'ShieldCheck', proficiency: 88 },
    { name: 'Socket.IO (Real-Time Server)', category: 'backend', icon: 'Network', proficiency: 85 },

    // Databases
    { name: 'MongoDB (Mongoose ODM)', category: 'tools', icon: 'Database', proficiency: 88 },
    { name: 'MySQL & Relational Design', category: 'tools', icon: 'Database', proficiency: 86 },
    { name: 'Geospatial Queries ($geoNear)', category: 'tools', icon: 'Layers', proficiency: 82 },

    // Networking & Systems
    { name: 'Cisco CCNAv7 Networking', category: 'devops', icon: 'Network', proficiency: 90 },
    { name: 'IPv4 / IPv6 Addressing & Subnetting', category: 'devops', icon: 'Workflow', proficiency: 92 },
    { name: 'Router & Switch Configuration (VLANs)', category: 'devops', icon: 'Server', proficiency: 88 },
    { name: 'Network Security (ACLs, SSH)', category: 'devops', icon: 'ShieldCheck', proficiency: 85 },

    // Tools & AI
    { name: 'Git & Version Control', category: 'tools', icon: 'GitBranch', proficiency: 90 },
    { name: 'Huawei HCIA-AI Fundamentals', category: 'tools', icon: 'Boxes', proficiency: 85 },
    { name: 'Applied AI (Hugging Face APIs)', category: 'tools', icon: 'CheckCircle2', proficiency: 84 },
    { name: 'Advanced Data Analysis (Data Pill)', category: 'tools', icon: 'Gauge', proficiency: 83 },
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Software Engineering Trainee',
      company: 'Information Technology Institute (ITI)',
      location: 'Cairo, Egypt',
      startDate: 'Jul 2023',
      endDate: 'Sep 2024',
      achievements: [
        'Completed an intensive software engineering program covering C++, object-oriented design, and structured problem-solving.',
        'Developed console-based applications in C++ demonstrating core data structures, algorithms, and dynamic memory management.',
        'Collaborated with peers on group engineering projects, building modular, maintainable code with version control workflows.',
      ],
      techStack: ['C++', 'OOP', 'Data Structures', 'Algorithms', 'Git'],
    },
    {
      id: 'exp-2',
      role: 'Professional Certificate Program',
      company: 'Information Technology Industry Development Agency (ITIDA)',
      location: 'Cairo, Egypt',
      startDate: 'Apr 2023',
      endDate: 'May 2024',
      achievements: [
        'Earned a professional certification validating software development fundamentals, debugging, and industry-standard coding practices.',
        'Applied structured software testing, refactoring techniques, and modular architecture principles.',
      ],
      techStack: ['Software Fundamentals', 'Debugging', 'Testing', 'Clean Code'],
    },
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Computing and Information Technology',
      institution: 'Egyptian E-Learning University (EELU)',
      location: 'Egypt',
      graduationYear: '2022 – 2026',
      highlights: [
        'Coursework: Programming Languages, Computer Networks, Data Structures, Algorithms, OOP, Relational Database Design (MySQL), and Web Development Fundamentals.',
      ],
    },
    {
      id: 'edu-2',
      degree: 'CCNAv7: Introduction to Networks',
      institution: 'Cisco Networking Academy',
      location: 'Credential',
      graduationYear: 'May 2024',
      highlights: [
        'Hands-on mastery in IPv4/IPv6 addressing schemes, Cisco IOS router/switch configuration, VLAN segmentation, and enterprise network security.',
      ],
    },
    {
      id: 'edu-3',
      degree: 'HCIA – Artificial Intelligence (20 Hours)',
      institution: 'Huawei / EELU Continuing Learning Center',
      location: 'Credential',
      graduationYear: '2025',
      highlights: [
        'Neural network architectures, deep learning fundamentals, and applied machine learning integration.',
      ],
    },
    {
      id: 'edu-4',
      degree: 'Advanced Data Analysis (50 Hours, Score: 80%)',
      institution: 'Data Pill',
      location: 'Credential',
      graduationYear: 'Aug 2025',
      highlights: [
        'Data cleaning, exploratory data analysis, statistical modeling, and actionable business insight generation.',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Dent AI — Smart Dental Clinic Platform',
      description: 'End-to-end full-stack MERN healthcare platform connecting patients, dentists, and clinic admins. Features geolocation-based clinic search, slot-based booking, real-time chat via Socket.IO, Hugging Face AI cavity detection from X-rays, secure JWT refresh-rotation auth, and clinical PDF report generation with PDFKit.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Hugging Face AI', 'PDFKit'],
      githubUrl: 'https://github.com/A34mr',
      liveDemoUrl: 'https://github.com/A34mr',
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'Network Configuration and Troubleshooting Lab',
      description: 'Academic Cisco enterprise network project configuring switches and routers for end-to-end connectivity using Cisco IOS and VLAN segmentation. Designed IPv4/IPv6 addressing schemes with subnets, access control lists (ACLs), port security, and SSH remote access.',
      techStack: ['Cisco IOS', 'CCNAv7', 'IPv4/IPv6', 'VLANs', 'Network Security', 'ACLs', 'SSH'],
      githubUrl: 'https://github.com/A34mr',
      liveDemoUrl: 'https://github.com/A34mr',
      featured: true,
    },
    {
      id: 'proj-3',
      title: 'C++ Algorithmic & Memory Management Suite',
      description: 'Comprehensive software engineering suite built during ITI training implementing dynamic memory allocation, pointers, complex data structures, and optimized sorting and graph algorithms.',
      techStack: ['C++', 'OOP', 'Data Structures', 'Algorithms', 'Memory Management'],
      githubUrl: 'https://github.com/A34mr',
      featured: false,
    },
    {
      id: 'proj-4',
      title: 'Statistical Data Analysis & Insights Pipeline',
      description: 'Data analytics project developed during the 50-hour Data Pill program conducting advanced exploratory data analysis, relational SQL querying, and metric visualization.',
      techStack: ['SQL', 'Data Analysis', 'Statistical Modeling', 'Excel / BI'],
      githubUrl: 'https://github.com/A34mr',
      featured: false,
    },
  ],
};
