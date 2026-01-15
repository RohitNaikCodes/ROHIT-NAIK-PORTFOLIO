# Rohit Naik - Linktree Style Portfolio

A clean, modern, and responsive portfolio website inspired by Linktree design patterns. Features dark/light theme support, smooth animations, and pixel-perfect implementation.

## 🌟 Features

- **Dark/Light Theme Toggle** - Smooth theme switching with localStorage persistence
- **Responsive Design** - Looks great on desktop, tablet, and mobile
- **Dynamic Greeting** - Changes based on time of day (Morning/Afternoon/Evening/Night)
- **Micro-interactions** - Subtle hover effects, transitions, and animations
- **Accessibility** - Keyboard navigation, ARIA labels, reduced motion support
- **Performance Optimized** - Minimal dependencies, clean code

## 📁 File Structure

```
portfolio-linktree/
├── index.html          # Main HTML structure
├── styles.css          # CSS with theme variables
├── script.js           # JavaScript for interactivity
├── profile.jpg         # Your profile photo (replace this)
└── README.md           # This file
```

## 🚀 Quick Start

1. **Replace the profile image**
   - Add your photo as `profile.jpg` (recommended: 300x300px, square)
   - Or update the `src` attribute in `index.html`

2. **Update personal information**
   - Edit `index.html` to change:
     - Your name
     - Tagline
     - Social media links
     - Email address
     - Footer text

3. **Open in browser**
   - Simply open `index.html` in any modern browser
   - Or use a local server: `npx serve .`

## 🎨 Customization

### Colors (in `styles.css`)

Edit the CSS variables in `:root` for light theme and `[data-theme="dark"]` for dark theme:

```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #1a1a1a;
    --profile-ring: #3b82f6;
    /* ... more variables */
}
```

### Social Links

Add or remove social icons in the `<nav class="social-links">` section of `index.html`.

### Buttons

Modify the CTA buttons in the `<section class="cta-buttons">` section.

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript** - ES6+, No frameworks
- **Google Fonts** - Inter font family

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## ⌨️ Keyboard Shortcuts

- `Alt + T` - Toggle theme

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

---

Made with ❤️ by Rohit Naik
