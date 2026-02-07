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
      title: "Building a Dynamic Kafka Publishing Factory",
      excerpt: "I built a dynamic Kafka Publishing Factory that allows consuming from multiple Kafka topics at runtime — without redeployments — while supporting per-topic authentication and enterprise security constraints. Using a factory pattern and runtime topic registration APIs, teams can onboard themselves by submitting their principals and start publishing instantly, even under strict infrastructure policies like no mounted storage.",
      content: `
        <p class="mb-4">Most Kafka systems are built with a simple assumption: <strong>topics are known ahead of time.</strong></p>
        <p class="mb-4">But in real enterprise environments, that assumption breaks fast.</p>
        
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">Different teams need different topics.</li>
          <li class="mb-2">Each team needs different authentication.</li>
          <li class="mb-2">Security policies restrict storage access.</li>
          <li class="mb-2">And redeploying services every time a new topic is added quickly becomes painful.</li>
        </ul>

        <p class="mb-4">This is the story of how I built a Kafka Publishing Factory from scratch — a system that dynamically consumes from multiple Kafka topics at runtime, supports per-topic principals, and works within strict infrastructure constraints — all without service restarts.</p>

        <h3>The Problem I Was Trying to Solve</h3>
        <p class="mb-4">In our environment:</p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">Multiple internal teams wanted to publish and consume Kafka messages</li>
          <li class="mb-2">Each team had its own principal, credentials, and auth configs</li>
          <li class="mb-2">We were restricted by company policy from mounting external storage</li>
          <li class="mb-2">Adding a topic traditionally required code changes and redeployment</li>
        </ul>
        <p class="mb-4">We needed something better: A Kafka layer that felt self-service, but stayed secure, controlled, and enterprise-compliant.</p>

        <h3>The Core Idea: Kafka as a Runtime Service</h3>
        <p class="mb-4">Instead of hardcoding Kafka consumers, I designed the system around a factory pattern:</p>
        <p class="mb-4"><em>“Kafka consumers should be created dynamically, not statically.”</em></p>
        <p class="mb-4">This led to a Kafka Publishing Factory that:</p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">Builds consumers at runtime</li>
          <li class="mb-2">Injects topic-specific authentication</li>
          <li class="mb-2">Registers and manages them centrally</li>
          <li class="mb-2">Starts consuming immediately — no redeploys</li>
        </ul>
        <p class="mb-4">Kafka became a runtime capability, not a compile-time dependency.</p>

        <h3>High-Level Architecture</h3>
        <p class="mb-4"><code>Client → REST API → Topic Registry → Kafka Consumer Factory → Kafka Cluster</code></p>
        
        <p class="mb-4"><strong>Key Components:</strong></p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2"><strong>Kafka Consumer Factory</strong> – Builds consumers dynamically</li>
          <li class="mb-2"><strong>Runtime Topic Registry</strong> – Tracks active topics and consumers</li>
          <li class="mb-2"><strong>Security Validator</strong> – Verifies principals and auth configs</li>
          <li class="mb-2"><strong>REST API Layer</strong> – Allows teams to onboard themselves</li>
        </ul>
        <p class="mb-4">Each piece is isolated, making the system scalable and maintainable.</p>

        <h3>Consuming From Multiple Topics at Runtime</h3>
        <p class="mb-4">Once the factory was in place, supporting multiple topics simultaneously became natural. Each topic maps to: <code>Topic → Consumer Group → Consumer Instance</code></p>

        <p class="mb-4">When a new topic is registered:</p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">A consumer instance is created dynamically</li>
          <li class="mb-2">It’s attached to the correct auth config</li>
          <li class="mb-2">It starts polling immediately</li>
          <li class="mb-2">The service keeps running uninterrupted</li>
        </ul>
        <p class="mb-4">No restarts. No downtime. No redeploys.</p>

        <h3>Per-Topic Authentication & Principal Validation</h3>
        <p class="mb-4">Security was non-negotiable. Each topic required a specific principal, its own authentication files, and strict validation before consumer startup.</p>
        
        <p class="mb-4">So the registration flow became:</p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">✔ Validate topic</li>
          <li class="mb-2">✔ Validate principal</li>
          <li class="mb-2">✔ Load auth configs</li>
          <li class="mb-2">✔ Test Kafka connectivity</li>
          <li class="mb-2">✔ Start consumer</li>
        </ul>
        <p class="mb-4">If anything failed, the consumer never started — keeping the system safe by default.</p>

        <h3>Runtime Topic Registration API</h3>
        <p class="mb-4">To make this usable by other teams, I built a simple REST API:</p>
        <pre><code class="language-json">POST /kafka/topics/register
{
  "topic": "orders.events",
  "principal": "orders-team-principal",
  "groupId": "orders-consumer-group"
}</code></pre>
        
        <p class="mb-4">Behind the scenes, this:</p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">Validates ownership</li>
          <li class="mb-2">Loads credentials</li>
          <li class="mb-2">Builds Kafka configs</li>
          <li class="mb-2">Spins up a consumer dynamically</li>
        </ul>
        <p class="mb-4">From the team’s perspective, Kafka onboarding became: <em>“Call one API and you’re live.”</em></p>

        <h3>The Hard Constraint: No Mounted Storage</h3>
        <p class="mb-4">Here’s where things got interesting. Due to company policy:</p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">❌ No mounted storage</li>
          <li class="mb-2">❌ No uploading auth files dynamically</li>
        </ul>
        <p class="mb-4">Which meant we couldn’t accept new credential files at runtime.</p>

        <h3>The Workaround</h3>
        <p class="mb-4">Instead: Teams submit their principal/auth files to the platform team. These are bundled into the service classpath.</p>
        <p class="mb-4">Once present, teams can dynamically register topics via API. So while credentials couldn’t be added dynamically, topics still could — as long as their principals already existed.</p>
        <p class="mb-4">This gave us: <strong>Runtime flexibility, Security compliance, and Zero redeploys</strong>. All at once.</p>

        <h3>Why the Factory Pattern Worked So Well</h3>
        <p class="mb-4">The factory abstraction gave us:</p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">🔁 Dynamic consumer creation</li>
          <li class="mb-2">🔐 Centralized security handling</li>
          <li class="mb-2">🚀 Zero-downtime onboarding</li>
          <li class="mb-2">🧠 Clean separation between Kafka infra and business logic</li>
        </ul>
        <p class="mb-4">Kafka became an internal platform, not just a messaging system.</p>

        <h3>What I Learned</h3>
        <p class="mb-4">This project changed how I think about distributed systems:</p>
        <ul style="margin-bottom: var(--space-6); padding-left: var(--space-6);">
          <li class="mb-2">Kafka consumers don’t need to be static</li>
          <li class="mb-2">Security configs should be modeled as runtime objects</li>
          <li class="mb-2">Infrastructure constraints often force better architecture</li>
          <li class="mb-2">Factory patterns scale beautifully in messaging systems</li>
        </ul>

        <h3>Final Thoughts</h3>
        <p class="mb-4">This Kafka Publishing Factory turned Kafka into a self-service, runtime-configurable messaging layer — while staying compliant with enterprise security and infrastructure policies. If you’re building Kafka systems in restricted enterprise environments, this approach gives you flexibility without sacrificing control.</p>
      `,
      date: "2024-02-07",
      readTime: "4 min read",
      tags: ["Kafka", "System Design", "Java", "Backend"],
      slug: "dynamic-kafka-publishing-factory"
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
