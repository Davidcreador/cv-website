export const projects = [
  {
    id: 1,
    title: "Energy Management Platform",
    description: "A comprehensive web application for monitoring and managing energy consumption in real-time.",
    image: "/projects/energy-platform.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "development",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Solution",
    description: "Full-stack e-commerce platform with payment integration, inventory management, and analytics.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "development",
    featured: true
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, and marketing materials.",
    image: "/projects/brand-design.jpg",
    technologies: ["Illustrator", "Photoshop", "Figma"],
    behanceUrl: "https://www.behance.net",
    category: "design",
    featured: false
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    image: "/projects/task-app.jpg",
    technologies: ["Vue.js", "Express", "Socket.io", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "development",
    featured: false
  },
  {
    id: 5,
    title: "Church Website & Graphics",
    description: "Volunteer work creating website and graphic designs for local church community.",
    image: "/projects/church.jpg",
    technologies: ["WordPress", "PHP", "Photoshop"],
    liveUrl: "#",
    category: "volunteer",
    featured: false
  },
  {
    id: 6,
    title: "Mobile App UI Design",
    description: "User interface design for a fitness tracking mobile application.",
    image: "/projects/mobile-ui.jpg",
    technologies: ["Figma", "Principle", "Sketch"],
    behanceUrl: "https://www.behance.net",
    category: "design",
    featured: false
  }
]

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "volunteer", label: "Volunteer" }
]