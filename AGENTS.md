# AGENTS.md - AI Coding Agent Guidelines

This document provides guidelines for AI coding agents working on this portfolio website.

## Project Overview

A personal portfolio website for Vibhanshu Salve - static HTML/CSS/JS with no build system.

- **Live URL**: https://vibhanshusalve.github.io/
- **Repo**: https://github.com/Vibhanshusalve/Vibhanshusalve.github.io
- **Tech Stack**: Pure HTML5, CSS3, Vanilla JavaScript (no frameworks)

## Project Structure

```
vibhanshu-portfolio/
├── index.html              # Single-page HTML (all sections)
├── css/
│   └── style.css           # All styles (~885 lines)
├── js/
│   └── main.js             # All JavaScript (~424 lines)
├── images/
│   ├── placeholder-avatar.svg
│   └── ladybird-preview.png
├── README.md
├── QUICKSTART.md
└── AGENTS.md               # This file
```

## Development Commands

### No Build System Required

This is a static site with no npm, no bundler, no build step.

```bash
# View the site locally - just open in browser
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux

# Or use any local server
python -m http.server 8000
npx serve .
```

### Git Workflow

```bash
git add .
git commit -m "Description of changes"
git push origin main
# Site auto-deploys via GitHub Pages (takes ~1-2 min)
```

### Verify Deployment

After pushing, wait 1-2 minutes then check https://vibhanshusalve.github.io/
If cached, hard refresh with `Ctrl+Shift+R` or check in incognito.

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<section>`, `<nav>`, `<footer>`, `<article>`)
- All sections have unique IDs for navigation: `id="home"`, `id="about"`, etc.
- Include `aria-label` on interactive elements (buttons, links)
- External links must have `target="_blank" rel="noopener noreferrer"`
- Use inline SVG for icons (no external icon libraries)
- 4-space indentation

```html
<!-- Good -->
<a href="https://github.com/..." target="_blank" rel="noopener noreferrer" class="project-link">
    View on GitHub
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <!-- SVG path -->
    </svg>
</a>
```

### CSS

- Use CSS custom properties (variables) defined in `:root`
- BEM-like naming: `.project-card`, `.project-title`, `.project-link`
- Organize styles in clearly labeled sections with comment headers
- Mobile-first responsive design with breakpoints at 768px and 480px
- Use `var(--transition-fast)`, `var(--transition-medium)` for animations
- 4-space indentation

```css
/* Section comment header format */
/* ================================
   SECTION NAME
   ================================ */

/* Use CSS variables */
.element {
    background: var(--bg-card);
    color: var(--text-primary);
    border-radius: var(--radius-md);
    transition: var(--transition-medium);
}
```

#### Key CSS Variables

```css
--bg-primary: #0a0a0a;       /* Main background */
--bg-secondary: #1a1a1a;     /* Section backgrounds */
--bg-card: #2a2a2a;          /* Card backgrounds */
--text-primary: #f5f5f5;     /* Main text */
--text-secondary: #a0a0a0;   /* Secondary text */
--accent-cyan: #00d4ff;      /* Primary accent */
--accent-purple: #a855f7;    /* Secondary accent */
--gradient: linear-gradient(135deg, #00d4ff 0%, #a855f7 100%);
```

### JavaScript

- Vanilla JS only - no jQuery, no frameworks
- Use `const` by default, `let` when reassignment needed, never `var`
- Use arrow functions for callbacks
- Use template literals for string interpolation
- Query elements with `document.getElementById()` or `document.querySelectorAll()`
- Organize code in clearly labeled sections with comment headers
- 4-space indentation

```javascript
// Section comment header format
// ================================
// SECTION NAME
// ================================

// Use const/let and arrow functions
const elements = document.querySelectorAll('.selector');
elements.forEach((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        // handle click
    });
});
```

#### Key Patterns Used

- **IntersectionObserver** for scroll-triggered animations
- **Canvas API** for particle system in hero section
- **requestAnimationFrame** for smooth animations
- **Event delegation** where appropriate

## Common Tasks

### Adding a New Project Card

Edit `index.html` in the `.projects-grid` section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/project-name.png" alt="Project Name">
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Description here.</p>
        <div class="project-tech">
            <span class="tech-badge">Tech1</span>
            <span class="tech-badge">Tech2</span>
        </div>
        <div class="project-links">
            <a href="github-url" target="_blank" rel="noopener noreferrer" class="project-link">
                View on GitHub
                <!-- Include external link SVG icon -->
            </a>
        </div>
    </div>
</div>
```

### Adding a New Skill Tag

Edit `index.html` in the `.skills-grid` section:

```html
<span class="skill-tag">
    <svg><!-- Optional icon --></svg>
    Skill Name
</span>
```

### Modifying Colors

Edit CSS variables in `css/style.css` under `:root`.

### Modifying Animations

- Fade-in animations: `.fade-in` class + IntersectionObserver in `main.js`
- Particle system: `Particle` class in `main.js` (lines 290-420)
- Typing effect: `typeEffect()` function in `main.js`

## Security Considerations

- No backend, no forms that submit data
- No sensitive data in repository
- All external links use `rel="noopener noreferrer"`
- No inline JavaScript in HTML (all in `main.js`)
- Images from external sources use `crossorigin="anonymous"`

## Performance Guidelines

- No external JS libraries (no React, no jQuery)
- Minimal CSS (single file, ~885 lines)
- Lazy load images if adding more
- Use `requestAnimationFrame` for animations
- Particle count limited to 80 for performance

## Testing

No automated tests. Manual testing checklist:
1. Open in Chrome, Firefox, Safari, Edge
2. Test mobile responsiveness (hamburger menu)
3. Test all navigation links scroll correctly
4. Test project links open in new tabs
5. Test back-to-top button appears on scroll

## Deployment

Automatic via GitHub Pages on push to `main` branch.
- No build step required
- Changes appear in 1-2 minutes
- Clear browser cache if changes don't appear

## Contact

- **Owner**: Vibhanshu Salve
- **Email**: salvevibhanshu@proton.me
- **GitHub**: @Vibhanshusalve
