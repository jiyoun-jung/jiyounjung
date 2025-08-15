# Personal Academic Website

A clean, professional academic website template inspired by [Academic Pages](https://academicpages.github.io/) with a modern design and responsive layout.

## Features

- **Left Sidebar Layout**: Clean sidebar with profile information, quick navigation, and social links
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradients, smooth animations, and professional typography
- **Easy Customization**: Simple HTML structure that's easy to modify
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Accessibility**: Proper focus states and semantic HTML

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to add your information
3. **Deploy**: Upload to any web hosting service or GitHub Pages

## Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

```html
<!-- Profile Section -->
<h1 class="name">Your Name</h1>
<p class="title">Academic Title</p>
<p class="institution">Institution Name</p>

<!-- Contact Information -->
<p><i class="fas fa-envelope"></i> your.email@institution.edu</p>
<p><i class="fas fa-map-marker-alt"></i> City, Country</p>
```

### 2. Profile Picture

Replace the placeholder image URL with your actual photo:

```html
<img src="path/to/your/photo.jpg" alt="Your Name" id="profile-pic">
```

**Recommended image specifications:**
- Size: 200x200 pixels or larger (square aspect ratio)
- Format: JPG, PNG, or WebP
- Style: Professional headshot with neutral background

### 3. Social Media Links

Update the social media links in the sidebar:

```html
<div class="social-icons">
    <a href="https://scholar.google.com/citations?user=YOUR_ID" title="Google Scholar">
        <i class="fas fa-graduation-cap"></i>
    </a>
    <a href="https://github.com/YOUR_USERNAME" title="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/YOUR_PROFILE" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- Add or remove as needed -->
</div>
```

### 4. Content Sections

Customize each section with your actual information:

- **About**: Your research interests and background
- **Research**: Current projects and research areas
- **Publications**: Your academic publications
- **Teaching**: Courses you teach or have taught
- **CV**: Education, experience, and downloadable CV

### 5. CV Download

Add your actual CV file and update the download link:

```html
<a href="path/to/your/cv.pdf" class="cv-download-btn">
    <i class="fas fa-download"></i> Download CV (PDF)
</a>
```

## Styling Customization

### Colors

The main color scheme uses a blue-to-purple gradient. To change colors, edit the CSS variables in `styles.css`:

```css
/* Main gradient colors */
.sidebar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Accent colors */
.content-section h2 {
    border-bottom: 3px solid #667eea;
}
```

### Fonts

The website uses the Inter font family. To change fonts, update the font-family property in `styles.css`:

```css
body {
    font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

## Deployment Options

### GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select source branch (usually `main` or `master`)
5. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Services

- **Netlify**: Drag and drop your folder to deploy
- **Vercel**: Connect your GitHub repository for automatic deployment
- **Traditional hosting**: Upload files via FTP to your web server

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized CSS with minimal repaints
- Smooth animations using CSS transforms
- Lazy loading for content sections
- Responsive images and layouts

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Focus indicators for keyboard navigation
- Alt text for images
- Screen reader friendly navigation

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Styling not applied**: Verify CSS file is in the same directory as HTML
3. **JavaScript not working**: Check browser console for errors
4. **Mobile layout issues**: Ensure viewport meta tag is present

### Getting Help

If you encounter issues:
1. Check the browser's developer console for error messages
2. Verify all files are in the correct directory structure
3. Ensure your web server supports the file types used

## License

This template is free to use and modify for personal and academic purposes.

## Credits

- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Design Inspiration**: Academic Pages template
- **Color Palette**: Modern gradient design

---

**Happy customizing!** 🎓✨
