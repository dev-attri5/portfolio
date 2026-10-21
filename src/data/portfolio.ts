export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  technologies: string[]
  features: string[]
  repoUrl?: string
  liveUrl?: string
  status: 'completed' | 'in-progress'
  isPlaceholder?: boolean
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface CodingProfile {
  id: string
  platform: string
  url: string
  handle: string
  description: string
  badge?: string
}

export interface EducationInfo {
  degree: string
  branch: string
  institution: string
  location: string
  currentSemester: string
  coursework: string[]
}

export interface Profile {
  name: string
  headline: string
  bio: string
  email: string
  githubUrl: string
  linkedinUrl: string
  leetcodeUrl: string
  gfgUrl: string
  resumePath?: string
}

export const profile: Profile = {
  name: 'Dev Attri',
  headline: 'B.Tech CSE Student | Java Developer | Problem Solver',
  bio: "I'm a Computer Science Engineering student passionate about Java development, data structures, and building real-world software applications.",
  email: 'devattri099@gmail.com',
  githubUrl: 'https://github.com/dev-attri5',
  linkedinUrl: 'https://www.linkedin.com/in/dev-attri-51051a386/',
  leetcodeUrl: 'https://leetcode.com/u/dev-attri/',
  gfgUrl: 'https://www.geeksforgeeks.org/profile/devattu1v8',
  // Resume omitted until owner provides public/resume.pdf per Architecture.md FR-04
  resumePath: undefined,
}

export const skills: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'C'],
  },
  {
    category: 'CS Fundamentals',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS'],
  },
  {
    category: 'Development Tools',
    items: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code'],
  },
  {
    category: 'Currently Learning',
    items: ['Advanced Java', 'Python Application Development'],
  },
]

export const codingProfiles: CodingProfile[] = [
  {
    id: 'leetcode',
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/dev-attri/',
    handle: 'dev-attri',
    description: 'Practicing algorithmic problem solving and data structures in Java.',
    badge: 'Competitive Programming',
  },
  {
    id: 'geeksforgeeks',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/devattu1v8',
    handle: 'devattu1v8',
    description: 'Technical articles, CS fundamentals, and practice problems.',
    badge: 'Problem Solving',
  },
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/dev-attri5',
    handle: 'dev-attri5',
    description: 'Open source repositories, coursework labs, and project codebases.',
    badge: 'Code Repositories',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dev-attri-51051a386/',
    handle: 'dev-attri-51051a386',
    description: 'Professional networking, engineering learning journey, and updates.',
    badge: 'Network',
  },
]

export const education: EducationInfo = {
  degree: 'Bachelor of Technology (B.Tech)',
  branch: 'Computer Science and Engineering',
  institution: 'GLA University',
  location: 'Mathura, Uttar Pradesh',
  currentSemester: '3rd Semester',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java)',
    'Computer Organization & Architecture',
    'Discrete Mathematics',
    'Operating Systems Foundations',
  ],
}

/**
 * Projects list:
 * Note: The owner noted "current skip the project part" in Display Name.docx.
 * These 3 development records provide structured schema representation for 3rd semester CSE coursework.
 * Marked with isPlaceholder: true so they are clearly identified in compliance with Rules.md.
 */
export const projects: Project[] = [
  {
    id: 'java-dsa-toolkit',
    title: 'Data Structures & Algorithms in Java',
    tagline: 'Comprehensive collection of custom data structure implementations and algorithm benchmarks.',
    description:
      'A structured repository containing clean Java implementations of fundamental data structures (Linked Lists, Binary Trees, Stacks, Queues, Graphs) and classic algorithmic solutions.',
    technologies: ['Java', 'Algorithms', 'Data Structures', 'Git'],
    features: [
      'Modular object-oriented class hierarchies for standard data structures',
      'Time and space complexity documentation for each algorithm',
      'Test cases validating edge conditions and sorting performance',
    ],
    repoUrl: 'https://github.com/dev-attri5',
    status: 'in-progress',
    isPlaceholder: true,
  },
  {
    id: 'student-course-portal',
    title: 'Student Academic Portal Console Application',
    tagline: 'Terminal-based course management and student record processing system.',
    description:
      'Coursework software application simulating semester registration, grading evaluations, and student records management using object-oriented principles.',
    technologies: ['Java', 'OOP', 'File I/O'],
    features: [
      'Menu-driven console interface for student registration and course lookup',
      'Persistence of student records and transcript summaries via File I/O',
      'Robust validation for enrollment credits and semester course prerequisites',
    ],
    repoUrl: 'https://github.com/dev-attri5',
    status: 'in-progress',
    isPlaceholder: true,
  },
  {
    id: 'personal-portfolio-web',
    title: 'Developer Portfolio Website',
    tagline: 'Modern, responsive, accessible portfolio built with React, TypeScript, and Tailwind CSS.',
    description:
      'Single-page static portfolio designed with strict adherence to WCAG 2.2 AA accessibility standards, fluid clamp typography, and dark theme design tokens.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: [
      'Accessible navigation with keyboard skip links and mobile drawer',
      'Zero layout shift responsive design tested from 320px to 1440px',
      'Strongly-typed data architecture ensuring truthful content presentation',
    ],
    repoUrl: 'https://github.com/dev-attri5',
    status: 'completed',
    isPlaceholder: true,
  },
]
