// ============================================
// REUSABLE COMPONENTS
// ============================================

// Navigation Bar Component
function createNavbar() {
  return `
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <a href="index.html" class="nav-logo">Portfolio</a>
        <ul class="nav-menu">
          <li><a href="index.html" class="nav-link">Home</a></li>
          <li><a href="blog.html" class="nav-link">Blog</a></li>
          <li><a href="resume.html" class="nav-link">Resume</a></li>
          <li><a href="contact.html" class="nav-link">Contact</a></li>
          <li><button class="theme-toggle" aria-label="Toggle theme">🌙</button></li>
        </ul>
      </div>
    </nav>
  `;
}

// Footer Component
function createFooter() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>About</h4>
            <p class="text-muted">
              ${portfolioData.personal.title} passionate about building scalable applications and solving complex problems.
            </p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="resume.html">Resume</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <ul class="footer-links">
              <li><a href="${portfolioData.personal.social.github}" target="_blank">GitHub</a></li>
              <li><a href="${portfolioData.personal.social.linkedin}" target="_blank">LinkedIn</a></li>
              <li><a href="${portfolioData.personal.social.twitter}" target="_blank">Twitter</a></li>
              <li><a href="mailto:${portfolioData.personal.email}">Email</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${currentYear} ${portfolioData.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// Blog Card Component
function createBlogCard(post) {
  return `
    <article class="card">
      <div class="card-meta">
        <span>📅 ${formatDate(post.date)}</span>
        <span>⏱️ ${post.readTime}</span>
      </div>
      <h3 class="card-title">${post.title}</h3>
      <p class="card-text">${post.excerpt}</p>
      <div class="card-meta">
        ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ')}
      </div>
      <a href="#" class="btn btn-secondary mt-4">Read More →</a>
    </article>
  `;
}

// Testimonial Card Component
function createTestimonialCard(testimonial) {
  return `
    <div class="card">
      <p class="card-text">"${testimonial.message}"</p>
      <div style="margin-top: var(--space-4);">
        <strong>${testimonial.name}</strong>
        <p class="text-muted" style="font-size: var(--text-sm); margin: 0;">
          ${testimonial.role}
        </p>
      </div>
    </div>
  `;
}

// Experience Card Component
function createExperienceCard(exp) {
  return `
    <div class="card">
      <div class="card-meta mb-4">
        <span>📅 ${exp.duration}</span>
        <span>📍 ${exp.location}</span>
      </div>
      <h3 class="card-title">${exp.position}</h3>
      <h4 style="color: var(--color-primary); margin-bottom: var(--space-4);">${exp.company}</h4>
      <p class="card-text">${exp.description}</p>
      <ul style="color: var(--color-text-secondary); margin-left: var(--space-5);">
        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
      </ul>
    </div>
  `;
}

// Skills Section Component
function createSkillsSection() {
  return `
    <div class="grid grid-2">
      <div class="card">
        <h3 class="card-title">💻 Languages</h3>
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
          ${portfolioData.skills.languages.map(skill => 
            `<span class="skill-tag">${skill}</span>`
          ).join('')}
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">🚀 Frameworks</h3>
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
          ${portfolioData.skills.frameworks.map(skill => 
            `<span class="skill-tag">${skill}</span>`
          ).join('')}
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">🗄️ Databases</h3>
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
          ${portfolioData.skills.databases.map(skill => 
            `<span class="skill-tag">${skill}</span>`
          ).join('')}
        </div>
      </div>
      <div class="card">
        <h3 class="card-title">🛠️ Tools & Concepts</h3>
        <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
          ${[...portfolioData.skills.tools, ...portfolioData.skills.concepts].map(skill => 
            `<span class="skill-tag">${skill}</span>`
          ).join('')}
        </div>
      </div>
    </div>
  `;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format date to readable format
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Set active navigation link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Inject navbar and footer
function injectComponents() {
  // Inject navbar
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = createNavbar();
  }
  
  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = createFooter();
  }
  
  // Set active nav link
  setActiveNavLink();
  
  // Initialize navbar scroll effect
  initNavbarScroll();
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
});

// ============================================
// FORM HANDLING
// ============================================

// Handle testimonial form submission
function handleTestimonialSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = {
    name: form.querySelector('#testimonial-name').value,
    role: form.querySelector('#testimonial-role').value,
    message: form.querySelector('#testimonial-message').value,
    date: new Date().toISOString(),
    approved: false // Requires admin approval
  };
  
  // TODO: Replace with actual API call when backend is ready
  console.log('Testimonial submitted:', formData);
  
  // Show success message
  alert('Thank you for your testimonial! It will be reviewed and published soon.');
  form.reset();
  
  /* When backend is ready, use this:
  submitTestimonial(formData)
    .then(response => {
      alert('Thank you for your testimonial! It will be reviewed and published soon.');
      form.reset();
    })
    .catch(error => {
      alert('Sorry, there was an error submitting your testimonial. Please try again.');
      console.error(error);
    });
  */
}

// Handle contact form submission
function handleContactSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = {
    name: form.querySelector('#contact-name').value,
    email: form.querySelector('#contact-email').value,
    subject: form.querySelector('#contact-subject').value,
    message: form.querySelector('#contact-message').value,
    date: new Date().toISOString()
  };
  
  // TODO: Replace with actual API call when backend is ready
  console.log('Contact form submitted:', formData);
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
  
  /* When backend is ready, use this:
  submitContactForm(formData)
    .then(response => {
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    })
    .catch(error => {
      alert('Sorry, there was an error sending your message. Please try again.');
      console.error(error);
    });
  */
}
