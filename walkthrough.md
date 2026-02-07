# Portfolio Website Walkthrough

I have successfully built and refined your personal portfolio website. This document summarizes the features, project structure, and instructions for maintenance and deployment.

## 🚀 Key Features

### 1. Multi-Page Layout

- **Home/Bio (`index.html`)**: Introduction, About Me, Skills, and call-to-action buttons.
- **Blog (`blog.html`)**: A listing of your technical articles.
- **Blog Post (`blog-post.html`)**: A dedicated template to read full blog posts.
- **Resume (`resume.html`)**: Professional experience, education, and credentials with a "Download PDF" print-friendly mode.
- **Contact (`contact.html`)**: Contact details and a working "Send Message" form that opens your email client.

### 2. Design System

- **Themes**: Fully supported **Light** (Olive/White) and **Dark** (Black/Light Yellow) modes.
- **Responsive**: Adapts perfectly to mobile, tablet, and desktop screens.
- **Accessibility**: High contrast buttons and accessible navigation.

### 3. Dynamic Functionality

- **Theme Switcher**: Persists your preference (locks to Dark/Light mode) using local storage.
- **Data-Driven**: All content (content, experience, blog posts) is stored in `js/data.js`, making it easy to update without touching HTML.
- **Blog Engine**: Clicking "Read More" dynamically loads the correct post content based on the URL ID.

## 📂 Project Structure

```
portfolio/
├── index.html          # Home page
├── blog.html           # Blog listing
├── blog-post.html      # Single blog post template
├── resume.html         # Resume page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Main design system
├── js/
│   ├── data.js         # Your content (EDIT THIS TO UPDATE INFO)
│   ├── components.js   # Reusable UI logic
│   └── theme.js        # Dark/Light mode logic
└── assets/
    └── icons/          # Favicon (round profile pic)
```

## 🛠️ How to Manage Content

All your personal information is centralized in **`js/data.js`**.

- **To update your Bio/Phone/Email**: Edit the `personal` object.
- **To add a new Job**: Add an object to the `experience` array.
- **To add a Blog Post**: Add a new object to the `blogPosts` array. usage HTML in the `content` field for rich text.

## 🌐 Deployment (GitHub Pages)

Your site is ready to be hosted for free on GitHub Pages.

1.  **Commit & Push**: Ensure all files are committed to your GitHub repository.
2.  **Settings**: Go to your Repository on GitHub -> **Settings** -> **Pages**.
3.  **Source**: Select **Deploy from a branch**.
4.  **Branch**: Select `main` and folder `/ (root)`.
5.  **Save**: GitHub will build your site and provide a URL (e.g., `https://yourusername.github.io/portfolio`).

## 📝 Recent Changes

- **Hidden Testimonials**: The testimonials section on the home page has been commented out (hidden) as requested, but the code is preserved for future use.
- **Working Contact Form**: The contact form now uses `mailto:` to open the user's email client directly.
- **WhatsApp Integration**: Replaced Twitter with WhatsApp link for direct messaging.
- **Phone Number**: Added dedicated phone number card to contact page for easier access.
- **Updated Bio**: Included personal interests (Sketching, Gaming, etc.) in the About Me section.
- **Resume Download**: Updated resume button to directly download the PDF file.
- **Blog Details**: Added a dedicated page to read full blog posts.
