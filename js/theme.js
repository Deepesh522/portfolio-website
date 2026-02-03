// ============================================
// THEME SWITCHER
// ============================================

class ThemeManager {
  constructor() {
    this.theme = this.getInitialTheme();
    this.init();
  }

  // Get initial theme from localStorage or system preference
  getInitialTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  }

  // Initialize theme
  init() {
    this.applyTheme(this.theme);
    this.setupToggleButton();
    this.watchSystemPreference();
  }

  // Apply theme to document
  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    this.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    this.updateToggleButton();
  }

  // Toggle between light and dark
  toggle() {
    const newTheme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);
  }

  // Setup toggle button click handler
  setupToggleButton() {
    const toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => this.toggle());
    }
  }

  // Update toggle button icon
  updateToggleButton() {
    const toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
      toggleBtn.textContent = this.theme === "light" ? "🌙" : "☀️";
      toggleBtn.setAttribute(
        "aria-label",
        `Switch to ${this.theme === "light" ? "dark" : "light"} mode`,
      );
    }
  }

  // Watch for system preference changes
  watchSystemPreference() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem("portfolio-theme")) {
          this.applyTheme(e.matches ? "dark" : "light");
        }
      });
    }
  }
}

// Initialize theme manager when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.themeManager = new ThemeManager();
});
