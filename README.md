# Hithesh M R - Portfolio

A modern, responsive portfolio website showcasing my professional experience, projects, and skills. The website features a clean design with dark/light mode toggle for better user experience.

## Features

- **Responsive Design**: Works on all device sizes
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Modern UI**: Clean and professional interface with smooth animations
- **Performance Optimized**: Fast loading and efficient code
- **Accessibility**: Built with accessibility in mind

## Technologies Used

- **Frontend**:
  - HTML5, CSS3, JavaScript (ES6+)
  - CSS Variables for theming
  - Font Awesome for icons
  - AOS (Animate On Scroll) library for scroll animations

## Project Structure

```
portfolio-hithesh-mr/
├── css/
│   └── styles.css          # Main styles with theme variables
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── theme.js           # Theme toggle functionality
├── images/
│   └── profile.png       # Profile picture
├── about.html             # About Me page
├── experience.html        # Professional experience
├── index.html             # Homepage
├── projects.html          # Projects and publications
└── README.md              # Project documentation
```

## Theme System

The website features a theme system with the following color schemes:

- **Light Theme**: Default theme with light colors
- **Dark Theme**: Dark theme for reduced eye strain

Theme preference is saved in the browser's local storage for returning visitors.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-hithesh-mr.git
   cd portfolio-hithesh-mr
   ```

2. Open any HTML file in a modern web browser to view the website locally.

## Development

### Adding New Pages
1. Create a new HTML file in the root directory
2. Copy the basic structure from an existing page
3. Update the navigation menu in all pages to include the new link

### Styling
- Main styles are in `css/styles.css`
- Uses CSS variables for theming
- Mobile-first responsive design approach

### JavaScript
- `main.js`: Handles common functionality like scroll-to-top button
- `theme.js`: Manages theme switching and persistence

## Pages

### Home (`index.html`)
- Hero section with introduction
- Quick links to other sections

### About (`about.html`)
- Professional summary
- Contact information
- Social media links

### Experience (`experience.html`)
- Work experience timeline
- Project highlights
- Key responsibilities and achievements

### Projects (`projects.html`)
- Showcase of projects
- Publications
- Skills and technologies

## Responsive Design

The website is fully responsive and works on:
- Desktop (1200px and above)
- Laptops (992px - 1199px)
- Tablets (768px - 991px)
- Mobile devices (up to 767px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: hitheshmr@gmail.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-linkedin)
- GitHub: [Your GitHub Profile](https://github.com/your-github)
- YouTube: [Your YouTube Channel](https://youtube.com/your-channel)
  - Vercel or Netlify (static hosting)
  - GitHub Pages (for plain HTML/CSS/JS)
- Optional Extras:
  - TypeScript for type safety
  - MDX or Markdown for content blocks
  - GitHub Actions for CI/CD pipelines