// ============================================
// PORTFOLIO DATA - DATABASE READY STRUCTURE
// ============================================

// This data structure is designed to be easily replaced with API calls
// When you implement a backend, simply replace these objects with fetch() calls

const portfolioData = {
  // Personal Information
  personal: {
    name: "Your Name",
    title: "Java Software Development Engineer",
    email: "your.email@example.com",
    phone: "+91 XXXXX XXXXX",
    location: "Your City, India",
    bio: "Passionate Java Software Development Engineer with expertise in building scalable, high-performance applications. I love solving complex problems and creating elegant solutions that make a difference.",
    tagline: "Building the future, one line of code at a time.",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      portfolio: "https://yourportfolio.com"
    }
  },

  // Skills & Technologies
  skills: {
    languages: ["Java", "JavaScript", "Python", "SQL", "TypeScript"],
    frameworks: ["Spring Boot", "Hibernate", "React", "Node.js", "Express"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    tools: ["Git", "Docker", "Kubernetes", "Jenkins", "AWS", "Maven", "Gradle"],
    concepts: ["Microservices", "REST APIs", "System Design", "OOP", "Data Structures", "Algorithms"]
  },

  // Work Experience
  experience: [
    {
      id: 1,
      company: "Tech Company Name",
      position: "Senior Java Developer",
      duration: "Jan 2022 - Present",
      location: "City, Country",
      description: "Leading development of microservices architecture serving millions of users. Improved system performance by 40% through optimization.",
      achievements: [
        "Architected and implemented scalable microservices using Spring Boot",
        "Reduced API response time by 40% through caching and optimization",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      id: 2,
      company: "Previous Company",
      position: "Java Developer",
      duration: "Jun 2020 - Dec 2021",
      location: "City, Country",
      description: "Developed and maintained enterprise applications using Java and Spring framework.",
      achievements: [
        "Built RESTful APIs consumed by web and mobile applications",
        "Implemented automated testing increasing code coverage to 85%",
        "Collaborated with cross-functional teams in Agile environment"
      ]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      duration: "2016 - 2020",
      grade: "8.5 CGPA",
      description: "Focused on software engineering, data structures, and algorithms"
    }
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      name: "Oracle Certified Professional, Java SE",
      issuer: "Oracle",
      date: "2021",
      credentialUrl: "#"
    },
    {
      id: 2,
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialUrl: "#"
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      id: 1,
      title: "Building Scalable Microservices with Spring Boot",
      excerpt: "Learn how to design and implement microservices architecture using Spring Boot, with best practices for scalability and maintainability.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Java", "Spring Boot", "Microservices"],
      slug: "building-scalable-microservices-spring-boot"
    },
    {
      id: 2,
      title: "Understanding Java Memory Management",
      excerpt: "Deep dive into Java's memory model, garbage collection, and optimization techniques for better application performance.",
      date: "2023-12-10",
      readTime: "10 min read",
      tags: ["Java", "Performance", "JVM"],
      slug: "understanding-java-memory-management"
    },
    {
      id: 3,
      title: "REST API Best Practices in 2024",
      excerpt: "A comprehensive guide to designing robust, secure, and developer-friendly REST APIs with modern best practices.",
      date: "2023-11-20",
      readTime: "6 min read",
      tags: ["API", "REST", "Backend"],
      slug: "rest-api-best-practices-2024"
    }
  ],

  // Testimonials / Comments
  testimonials: [
    {
      id: 1,
      name: "John Doe",
      role: "Senior Tech Lead at Company X",
      message: "An exceptional developer with strong problem-solving skills. Always delivers high-quality code and is a great team player.",
      date: "2024-01-20",
      approved: true
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      message: "Working with them has been a pleasure. They understand business requirements and translate them into elegant technical solutions.",
      date: "2024-01-15",
      approved: true
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Fellow Developer",
      message: "Great mentor and collaborator. Their code reviews are insightful and have helped me grow as a developer.",
      date: "2024-01-10",
      approved: true
    }
  ],

  // Projects (optional - can be added later)
  projects: [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Built a scalable e-commerce platform handling 10K+ daily transactions using Spring Boot microservices",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      name: "Real-time Analytics Dashboard",
      description: "Developed a real-time analytics dashboard for monitoring application metrics and user behavior",
      technologies: ["Java", "Kafka", "MongoDB", "React"],
      github: "#",
      demo: "#"
    }
  ]
};

// ============================================
// DATABASE MIGRATION HELPERS
// ============================================

// When you're ready to connect to a backend, replace the data access
// with these API call functions:

/*
// Example API functions (uncomment and modify when backend is ready)

async function fetchPersonalInfo() {
  const response = await fetch('/api/personal');
  return await response.json();
}

async function fetchBlogPosts() {
  const response = await fetch('/api/blog');
  return await response.json();
}

async function fetchTestimonials() {
  const response = await fetch('/api/testimonials?approved=true');
  return await response.json();
}

async function submitTestimonial(testimonialData) {
  const response = await fetch('/api/testimonials', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(testimonialData)
  });
  return await response.json();
}

async function fetchExperience() {
  const response = await fetch('/api/experience');
  return await response.json();
}

async function submitContactForm(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return await response.json();
}
*/
