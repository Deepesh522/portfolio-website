# Portfolio Website

A modern, responsive portfolio website for a Java Software Development Engineer featuring light/dark themes and database-ready architecture.

## 🌟 Features

- **Multi-page Design**: Home, Blog, Resume, and Contact pages
- **Dual Themes**: Light mode (Olive & White) and Dark mode (Black & Very Light Yellow)
- **Responsive**: Mobile-first design that works on all devices
- **Testimonials Section**: Visitors can leave comments/testimonials
- **Database-Ready**: Structured for easy backend integration
- **Modern UI**: Smooth animations, hover effects, and premium aesthetics
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Home/Bio page with testimonials
├── blog.html           # Blog listing page
├── resume.html         # Resume/CV page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Complete design system
├── js/
│   ├── theme.js        # Theme switcher logic
│   ├── data.js         # Content data (database-ready)
│   └── components.js   # Reusable components
└── assets/
    ├── images/         # Profile photos, project images
    └── icons/          # Theme toggle, social icons
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Run a local server**

   ```bash
   # Using Python
   python -m http.server 8080

   # OR using Node.js
   npx -y http-server . -p 8080
   ```

3. **Open in browser**
   Navigate to `http://localhost:8080`

### Customization

1. **Update Personal Information**
   - Edit `js/data.js` to update your personal info, skills, experience, blog posts, etc.

2. **Customize Colors** (Optional)
   - Modify CSS variables in `css/styles.css` (lines 12-90)

3. **Add Images**
   - Place your profile photo in `assets/images/`
   - Update image references in HTML files

## 🌐 Deployment

### GitHub Pages (Free)

1. **Create a GitHub repository**
   - Go to GitHub and create a new repository
   - Name it `yourusername.github.io` for personal site OR any name for project site

2. **Push your code**

   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

4. **Access your site**
   - Your site will be live at `https://yourusername.github.io/portfolio-website`

### Alternative Hosting Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the folder or connect via Git
- **Cloudflare Pages**: Connect GitHub and deploy

## 🔌 Backend Integration

The website is designed to work with static data initially, but can easily connect to a backend API.

### When You're Ready for a Database

1. **Uncomment API functions** in `js/data.js`
2. **Update endpoints** to match your backend API
3. **Implement backend** using:
   - Java Spring Boot + PostgreSQL
   - Node.js + Express + MongoDB
   - Any other stack you prefer

### Recommended Backend Architecture

```
Frontend (GitHub Pages)
    ↓ API Calls
Backend Service (Render/Railway/Vercel)
    ↓
Database (PostgreSQL/MongoDB)
```

## 🎨 Theme System

The website supports automatic theme switching:

- **Light Mode**: Olive and white color scheme
- **Dark Mode**: Black and very light yellow color scheme
- **Auto-detection**: Respects system preferences
- **Persistence**: Saves user's choice in localStorage

Toggle theme using the button in the navigation bar.

## 📝 Content Management

### Current Setup (Static)

All content is stored in `js/data.js` as JavaScript objects.

### Future Setup (Dynamic)

Replace data objects with API calls to fetch from your backend:

- Blog posts
- Testimonials
- Work experience
- Projects

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript**: Vanilla JS (no frameworks)
- **Google Fonts**: Inter & Fira Code

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - Feel free to use this template for your own portfolio.

## 📧 Contact

For questions or suggestions, please reach out via the contact form on the website.

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
