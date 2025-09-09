import { ReactNode } from 'react'

export interface Experience {
  id: number
  role: string
  company: string
  location: string
  period: string
  startYear: number
  endYear: number
  duration: string
  companyColor: string
  companyBg: string
  logo: string
  logoFull: string
  icon?: string
  description: string
  achievements: string[]
  technologies: string[]
  impact: Record<string, string>
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Staff Software Engineer",
    company: "Experian",
    location: "Remote",
    period: "2023 - 2025",
    startYear: 2023,
    endYear: 2025,
    duration: "2 years",
    companyColor: "#602D91",
    companyBg: "from-purple-600 to-purple-700",
    logo: "E",
    logoFull: "Experian",
    icon: "Experian",
    description: "Developed frontend solutions for Personal Loans and Auto financing services, contributing to Experian's consumer credit platforms.",
    achievements: [
      "Built and optimized frontend interfaces for Personal Loans application system",
      "Developed Auto financing services platform serving millions of users",
      "Implemented GraphQL APIs for efficient data fetching and state management",
      "Created comprehensive API documentation using Swagger for team collaboration",
      "Improved application performance and user experience across credit services"
    ],
    technologies: ["Angular", "Node.js", "GraphQL", "Swagger", "TypeScript", "REST APIs", "Microservices"],
    impact: {
      users: "10M+",
      performance: "+40%",
      cost: "-35%"
    }
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "NFL",
    location: "Remote",
    period: "May 2023 - Jun 2024",
    startYear: 2023,
    endYear: 2024,
    duration: "1 year",
    companyColor: "#013369",
    companyBg: "from-blue-800 to-blue-900",
    logo: "NFL",
    logoFull: "NFL",
    icon: "NFL",
    description: "Contributed to software architecture for NFL.com and NFL mobile app, delivering features for millions of fans worldwide.",
    achievements: [
      "Architected backend, frontend, and mobile solutions for NFL.com and NFL app",
      "Collaborated with product team to deliver innovative features for global NFL fans",
      "Implemented high-performance solutions using Next.js App Router and React Native",
      "Optimized content delivery using Fastly CDN and Cloudinary"
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "React", "React Native", "Java", "Datadog", "Cloudinary", "Jenkins", "Fastly"],
    impact: {
      users: "Millions",
      platform: "Web & Mobile",
      scale: "Global"
    }
  },
  {
    id: 3,
    role: "Senior Software Engineer",
    company: "Shell",
    location: "USA - Remote",
    period: "Dec 2021 - Apr 2023",
    startYear: 2021,
    endYear: 2023,
    duration: "1.5 years",
    companyColor: "#DD1D21",
    companyBg: "from-red-600 to-yellow-600",
    logo: "S",
    logoFull: "Shell",
    icon: "Shell",
    description: "Developed renewable energy services platforms, contributing to Shell's sustainable energy initiatives.",
    achievements: [
      "Architected backend and frontend solutions for Renewable Energy Services",
      "Built scalable microservices for energy monitoring and management",
      "Implemented real-time data processing for renewable energy tracking",
      "Supported cross-functional teams in delivering sustainable energy solutions"
    ],
    technologies: ["TypeScript", "React", "Node.js", "AWS", "Microservices", "PostgreSQL", "Docker"],
    impact: {
      focus: "Renewable Energy",
      architecture: "Microservices",
      impact: "Sustainability"
    }
  },
  {
    id: 4,
    role: "Technical Lead",
    company: "Critical Mass",
    location: "Costa Rica",
    period: "Apr 2019 - May 2020",
    startYear: 2019,
    endYear: 2020,
    duration: "1 year",
    companyColor: "#FF0080",
    companyBg: "from-pink-600 to-purple-600",
    logo: "CM",
    logoFull: "Critical Mass",
    icon: "CriticalMass",
    description: "Led development teams for enterprise clients including BMW USA, implementing cutting-edge web solutions.",
    achievements: [
      "Led technical architecture for BMW USA digital experiences",
      "Developed features using Angular, Vue.js, React.js and AEM",
      "Promoted junior developers' growth through mentorship",
      "Implemented SCRUM methodology for efficient project delivery",
      "Wrote comprehensive documentation for new features"
    ],
    technologies: ["TypeScript", "Vue.js", "Angular", "React", "Node.js", "AEM", "SASS", "SCRUM"],
    impact: {
      client: "BMW USA",
      team: "Leadership",
      methodology: "Agile/SCRUM"
    }
  },
  {
    id: 5,
    role: "Full Stack Software Engineer",
    company: "NTT DATA",
    location: "Costa Rica",
    period: "Apr 2018 - Sep 2018",
    startYear: 2018,
    endYear: 2018,
    duration: "6 months",
    companyColor: "#0072BC",
    companyBg: "from-blue-600 to-blue-700",
    logo: "NTT",
    logoFull: "NTT DATA",
    icon: "DigitalAgency",
    description: "Worked as consultant for Pampered Chef (Chicago, USA), developing e-commerce solutions.",
    achievements: [
      "Developed new features for Pampered Chef e-commerce platform",
      "Contributed to software architecture using Node.js and Angular",
      "Implemented MongoDB database solutions for scalability",
      "Deployed solutions on AWS cloud infrastructure"
    ],
    technologies: ["TypeScript", "Angular", "Node.js", "MongoDB", "AWS", "SASS", "SCRUM"],
    impact: {
      client: "Pampered Chef",
      type: "E-commerce",
      location: "Chicago, USA"
    }
  }
]

export const careerStats = {
  totalYears: 11,
  companiesWorked: 15,
  technologiesUsed: 30,
  projectsDelivered: "100+"
}