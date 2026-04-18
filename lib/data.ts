import {
  Code2,
  Smartphone,
  Palette,
  Rocket,
  ShoppingCart,
  Settings,
  User,
  Camera,
  Mail,
  PhoneCall,
  MapPin,
  MessageSquare
} from "lucide-react";

export const personalInfo = {
  name: "SSRN Services",
  fullName: "SSRN Services",
  greeting: "👋 Hello there!",
  role: "Web Developer",
  description: "I'm Amine, a passionate Software Developer who enjoys understanding how systems work — from low-level logic circuits to high-level applications. With solid experience in Java, C, and modern web technologies, I aim to create efficient, reliable, and scalable software that combines logic and creativity.",
  location: "Boudouaou, Boumerdès, Algerie",
  email: "support@ssrn.online",
  phone: "+91 892 002 4002",
  experience: "2+",
  whatsapp: "+91 892 002 4002",
  socials: [
    { name: "GitHub", icon: Code2, href: "https://github.com/SSRNServices", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: User, href: "https://linkedin.com/SSRNServices", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Camera, href: "https://instagram.com/SSRNServices", color: "hover:text-pink-500" },
    { name: "WhatsApp", icon: PhoneCall, href: "https://wa.me/+918920024002", color: "hover:text-green-500" },
  ],
  stats: [
    { label: "Projects Completed", value: "30+" },
    { label: "Years Experience", value: "2+" },
    { label: "Happy Clients", value: "20+" },
  ]
};

export const professions = [
  "Full-Stack Developer",
  "Frontend Engineer",
  "Backend Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator"
];

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Java", level: 75 },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
    ]
  }
];

export const services = [
  {
    title: "Web Development",
    description: "I create responsive, modern websites using the latest technologies and best practices. From concept to deployment, I ensure your website looks great and performs perfectly.",
    icon: Code2,
    features: ["Responsive Design", "Performance Optimized", "SEO Friendly"]
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile applications that work seamlessly on both iOS and Android devices using modern frameworks and tools.",
    icon: Smartphone,
    features: ["Cross-Platform", "Native Performance", "User-Friendly"]
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces that provide exceptional user experiences. I focus on usability, accessibility, and visual appeal.",
    icon: Palette,
    features: ["User-Centered", "Modern Design", "Accessibility"]
  },
  {
    title: "Performance Optimization",
    description: "Optimizing websites and applications for speed, scalability, and reliability. I ensure your digital products perform at their best under any conditions.",
    icon: Rocket,
    features: ["Fast Loading", "Scalable", "Reliable"]
  },
  {
    title: "E-commerce Solutions",
    description: "Building secure and efficient e-commerce platforms that drive sales and provide excellent shopping experiences for your customers.",
    icon: ShoppingCart,
    features: ["Secure Payments", "Inventory Management", "Analytics"]
  },
  {
    title: "API Development",
    description: "Creating robust and scalable APIs that power your applications. I build RESTful and GraphQL APIs with proper documentation and testing.",
    icon: Settings,
    features: ["RESTful APIs", "GraphQL", "Documentation"]
  }
];

export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "/images/Cleveroad.jpg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/Task manager app.jpg",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard with location-based forecasts, weather maps, and historical data visualization.",
    image: "/images/Weather Forecast Dashboard.jpg",
    tech: ["JavaScript", "Chart.js", "OpenWeather API"],
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
    image: "/images/pf.png",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    github: "#",
    live: "#"
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with CMS capabilities, user management, and SEO optimization features.",
    image: "/images/WordPress dashboard design concept.jpg",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration.",
    image: "/images/Dashboard - Social Media Analytics.jpg",
    tech: ["React", "D3.js", "Express.js"],
    github: "#",
    live: "#"
  }
];
