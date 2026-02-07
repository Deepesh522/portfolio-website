// ============================================
// PORTFOLIO DATA - DATABASE READY STRUCTURE
// ============================================

// This data structure is designed to be easily replaced with API calls
// When you implement a backend, simply replace these objects with fetch() calls

const portfolioData = {
  // Personal Information
  personal: {
    name: "Deepesh Panwar",
    title: "Java Software Development Engineer",
    email: "deepeshpanwar1212@gmail.com",
    phone: "+91 7425077048",
    location: "Pune, India",
    bio: "Passionate Java Software Development Engineer with expertise in building scalable, high-performance applications. I love solving complex problems and creating elegant solutions that make a difference. Outside of coding, I enjoy sketching, reading, playing games, hitting the gym, and hiking.",
    tagline: "Building the future, one line of code at a time.",
    social: {
      github: "https://github.com/Deepesh522",
      linkedin: "https://www.linkedin.com/in/deepesh-panwar-79a135193/",
      whatsapp: "https://wa.me/7425077048",
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
      company: "Bank of New York",
      position: "Backend Developer II",
      duration: "Dec 2025 - Present",
      location: "Pune, India",
      description: "Designed and led scalable backend systems improving messaging reliability, database performance, and production delivery",
      achievements: [
        "Built a dynamic Kafka publishing factory enabling runtime topic onboarding with zero service downtime",
        "Led database partitioning initiative, significantly reducing report generation latency for multi-team workloads",
        "Owned multiple production releases, managing builds, deployments, and seamless feature rollouts"
      ]
    },
    {
      id: 2,
      company: "Bank of New York",
      position: "Analyst",
      duration: "Jul 2023 - Dec 2025",
      location: "Pune, India",
      description: "Built and modernized a reporting platform used for large-scale data processing and analytics.",
      achievements: [
        "Delivered a new reporting system end-to-end within 6 months (5K+ LOC)",
        "Migrated monolith to scalable Spring Boot microservices",
        "Maintained 90%+ test coverage with secure, production-grade code"
      ]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Indian Institute of technology, Guwahati",
      duration: "2019 - 2023",
      description: "Best Institute in India for Engineering",
      grade: "6.9"
    }
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      name: "JavaScript",
      issuer: "Udemy",
      date: "2022",
      credentialUrl: "https://www.udemy.com/certificate/UC-fb35bfbd-3316-4e61-9dd5-2344b1bdbf59/"
    },
    {
      id: 2,
      name: "Data Structures and algorithms",
      issuer: "GeeksforGeeks",
      date: "2023",
      credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/4088f96a306313cc02f45425b4312afd.pdf"
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      id: 1,
      title: "Building Scalable Microservices with Spring Boot",
      excerpt: "Learn how to design and implement microservices architecture using Spring Boot, with best practices for scalability and maintainability.",
      content: `
        <p class="mb-4">Microservices have become the de facto standard for building scalable, complex applications. In this guide, we'll explore how to leverage Spring Boot to build robust microservices.</p>
        
        <h3>Why Microservices?</h3>
        <p class="mb-4">Monolithic applications can become difficult to maintain and scale as they grow. Microservices solve this by breaking the application into smaller, independent services that can be developed, deployed, and scaled individually.</p>
        
        <h3>Key Principles</h3>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2"><strong>Single Responsibility:</strong> Each service should do one thing and do it well.</li>
          <li class="mb-2"><strong>Loose Coupling:</strong> Services should minimize dependencies on each other.</li>
          <li class="mb-2"><strong>High Cohesion:</strong> Related functionality should stay together within a service.</li>
        </ul>
        
        <h3>Implementing with Spring Boot</h3>
        <p class="mb-4">Spring Boot makes it incredibly easy to get started. With its auto-configuration and embedded server, you can have a service running in minutes.</p>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `,
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Java", "Spring Boot", "Microservices"],
      slug: "building-scalable-microservices-spring-boot"
    },
    {
      id: 2,
      title: "Understanding Java Memory Management",
      excerpt: "Deep dive into Java's memory model, garbage collection, and optimization techniques for better application performance.",
      content: `
        <p class="mb-4">Java memory management is a critical aspect of performance tuning. Understanding the Stack and Heap is fundamental to writing efficient Java code.</p>
        
        <h3>The Stack and The Heap</h3>
        <p class="mb-4">Java memory is divided into two main parts: the Stack and the Heap. The Stack stores primitives and object references, while the Heap stores the actual objects.</p>
        
        <h3>Garbage Collection</h3>
        <p class="mb-4">The Garbage Collector (GC) is responsible for reclaiming memory used by objects that are no longer reachable. Understanding how different GC algorithms work can help you tune your application.</p>
        
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `,
      date: "2023-12-10",
      readTime: "10 min read",
      tags: ["Java", "Performance", "JVM"],
      slug: "understanding-java-memory-management"
    },
    {
      id: 3,
      title: "REST API Best Practices in 2024",
      excerpt: "A comprehensive guide to designing robust, secure, and developer-friendly REST APIs with modern best practices.",
      content: `
        <p class="mb-4">Designing a great REST API is more art than science. It requires balancing standards with pragmatism.</p>
        
        <h3>Resource Naming</h3>
        <p class="mb-4">Use nouns, not verbs. Use plural nouns for collections. For example, <code>/users</code> instead of <code>/getUsers</code>.</p>
        
        <h3>HTTP Methods</h3>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2"><strong>GET:</strong> Retrieve a resource</li>
          <li class="mb-2"><strong>POST:</strong> Create a resource</li>
          <li class="mb-2"><strong>PUT:</strong> Update a resource (replace)</li>
          <li class="mb-2"><strong>PATCH:</strong> Update a resource (partial)</li>
          <li class="mb-2"><strong>DELETE:</strong> Delete a resource</li>
        </ul>
        
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
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
