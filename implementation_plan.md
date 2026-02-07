# Portfolio Website for Java SDE

Building a modern, multi-page portfolio website with dual theme support (light/dark mode) and database-ready architecture.

## User Review Required

> [!IMPORTANT]
> **Database Integration**: The initial version will use static content in JavaScript objects. This structure is designed to be easily replaced with API calls to fetch data from a database later. You'll need to implement a backend API when ready.

> [!IMPORTANT]
> **Testimonials/Comments Feature**: The bio page will include a section where visitors can leave comments/testimonials about you. The initial version will have:
>
> - Display area for existing testimonials (from static data initially)
> - Submission form for new testimonials
> - **Backend required**: To actually save new comments, you'll need to implement a backend API with database. The form is ready to connect to your API endpoint.

> [!NOTE]
> **Content Placeholders**: I'll create placeholder content for your bio, blog posts, resume, testimonials, and contact info. You can update these directly in the JavaScript files initially, then migrate to a database when ready.

## Proposed Changes

### Project Structure

#### [NEW] [portfolio-website/](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/)

Root directory for the portfolio website project with the following structure:

```
portfolio-website/
├── index.html          # Home/Bio page
├── blog.html           # Blog listing page
├── resume.html         # Resume/CV page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Main stylesheet with design system
├── js/
│   ├── theme.js        # Theme switcher logic
│   ├── data.js         # Content data (database-ready structure)
│   └── components.js   # Reusable component functions
└── assets/
    ├── images/         # Profile photo, project images
    └── icons/          # Theme toggle, social icons
```

---

### Design System

#### [NEW] [styles.css](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/css/styles.css)

Complete design system with:

- **CSS Variables** for theming:
  - Light mode: Olive (#6B8E23, #808000) and white (#FFFFFF, #F5F5F5)
  - Dark mode: Black (#0A0A0A, #1A1A1A) and very light yellow (#FFFEF0, #F5F4E8)
- **Typography**: Modern font stack using Google Fonts (Inter or similar)
- **Responsive utilities**: Grid, flexbox, spacing system
- **Component styles**: Navigation, cards, forms, buttons
- **Animations**: Smooth transitions, hover effects, micro-interactions

---

### Core Functionality

#### [NEW] [theme.js](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/js/theme.js)

Theme switcher implementation:

- Detects user's system preference on first visit
- Persists theme choice in localStorage
- Smooth transition between light/dark modes
- Toggle button in navigation

#### [NEW] [data.js](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/js/data.js)

Content data structure (database-ready):

- Bio information object
- Blog posts array
- Resume/experience data
- Skills and technologies
- Testimonials/comments array
- Contact information
- Structured for easy migration to API calls

#### [NEW] [components.js](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/js/components.js)

Reusable component functions:

- Navigation bar generator
- Footer component
- Blog card renderer
- Testimonial card renderer
- Dynamic content injection

---

### Pages

#### [NEW] [index.html](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/index.html)

Home/Bio page featuring:

- Hero section with introduction
- About section with bio
- Featured skills/technologies
- **Testimonials section** (Hidden in code for future use) with:
  - Display of existing testimonials/comments
  - Form for visitors to submit new testimonials (name, role, message)
  - Backend-ready submission
- Call-to-action to other sections

#### [NEW] [blog.html](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/blog.html)

Blog listing page with:

- Grid/list of blog posts
- Post cards with title, excerpt, date
- Filtering/sorting capabilities (ready for database)

#### [NEW] [resume.html](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/resume.html)

Resume/CV page displaying:

- Professional experience timeline
- Education
- Skills and technologies
- Certifications (if any)
- Download resume button

#### [NEW] [contact.html](file:///C:/Users/storr/.gemini/antigravity/scratch/portfolio-website/contact.html)

Contact page with:

- Contact form (ready to connect to backend)
- Email and social links
- Professional information

## Deployment Strategy

### GitHub Pages (Free Hosting)

The portfolio website will be deployed using **GitHub Pages** for free static hosting:

**Setup Steps:**

1. Create a GitHub repository (e.g., `yourusername.github.io` or any repo name)
2. Push the portfolio-website files to the repository
3. Enable GitHub Pages in repository Settings → Pages
4. Select branch (main) and root folder
5. Site will be live at `https://yourusername.github.io/repo-name`

**Benefits:**

- ✅ Free hosting with HTTPS
- ✅ Custom domain support (optional)
- ✅ Automatic deployment on git push
- ✅ CDN-backed for fast loading worldwide

### Future Backend Integration

When you're ready to add database functionality (for blog posts, testimonials, etc.):

**Frontend**: Stays on GitHub Pages (no changes needed)

**Backend Options** (all have free tiers):

- **Vercel**: Serverless functions + database
- **Render**: Free web services + PostgreSQL
- **Railway**: Free tier with database support
- **AWS Free Tier**: EC2 + RDS for more control

**Architecture:**

```
GitHub Pages (Frontend) → API calls → Backend Service → Database
```

I'll include deployment instructions in the final walkthrough documentation.

## Verification Plan

### Automated Tests

- Run local development server: `npx -y http-server ./portfolio-website -p 8080`
- Test in browser at `http://localhost:8080`

### Manual Verification

- Verify all pages load correctly
- Test navigation between pages
- Toggle light/dark theme on each page
- Verify theme persistence across page navigation
- Test responsive design at different screen sizes
- Validate all content displays properly
- Check smooth animations and transitions
