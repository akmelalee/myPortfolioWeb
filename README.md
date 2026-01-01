# Senior Software Engineer Portfolio

A modern, responsive portfolio website showcasing professional experience, skills, projects, and services. Built with Angular 20 and designed with a focus on performance, accessibility, and user experience.

## Overview

This portfolio website serves as a comprehensive digital showcase for a Senior Software Engineer, featuring a clean and professional design that highlights technical expertise, project experience, and professional services. The application is built with modern web technologies and follows best practices for performance, SEO, and maintainability.

## Features

- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection and localStorage persistence
- **Fully Responsive Design** - Optimized for all devices from mobile to desktop
- **Smooth Navigation** - Single-page application with smooth scrolling and active route highlighting
- **Performance Optimized** - Lazy-loaded routes and optimized bundle size
- **Accessible UI** - Semantic HTML, ARIA labels, and keyboard navigation support
- **Modern UI/UX** - Clean design with smooth transitions and hover effects
- **Contact Form** - Integrated contact form for client inquiries
- **Scroll-to-Top Button** - Enhanced navigation experience for long pages
- **SEO Optimized** - Meta tags, semantic structure, and proper heading hierarchy

## Tech Stack

### Core Framework
- **Angular 20.1.0** - Modern component-based framework
- **TypeScript 5.8.2** - Type-safe development
- **RxJS 7.8.0** - Reactive programming patterns

### Styling
- **SCSS** - Advanced CSS with variables and mixins
- **CSS Custom Properties** - Dynamic theming system
- **Responsive Design** - Mobile-first approach

### Development Tools
- **Angular CLI 20.1.4** - Development and build tooling
- **Karma & Jasmine** - Unit testing framework
- **Prettier** - Code formatting

## Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher) or **yarn**

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/akmelalee/myPortfolioWeb.git
   cd myPortfolioWeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

The application will automatically reload when you modify source files.

## Usage Instructions

### Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Build with watch mode
npm run watch
```

### Production Build

```bash
# Create optimized production build
npm run build

# Output will be in the `dist/` directory
```

### Code Scaffolding

Generate new components, services, or other Angular artifacts:

```bash
# Generate a new component
ng generate component component-name

# Generate with additional options
ng generate component component-name --skip-tests --inline-style

# View all available schematics
ng generate --help
```

## Configuration

### Theme Customization

The color scheme can be customized in `src/styles.scss`:

```scss
:root {
  --accent-primary: #bd4520;  // Primary brand color
  --accent-secondary: #9e3a1b; // Secondary accent
  // ... other theme variables
}
```

### Route Configuration

Routes are defined in `src/app/app.routes.ts`. Add or modify routes as needed:

```typescript
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    children: [
      // Add your routes here
    ]
  }
];
```

### Personal Information

Update personal information in the following files:
- `src/index.html` - Meta tags and page title
- `src/app/layout/layout.html` - Footer content and social links
- `src/app/contact/contact.html` - Contact information
- Component TypeScript files - Update data arrays with your information

## Project Structure

```
myPortfolioWeb/
├── public/                 # Static assets
│   ├── favicon.svg        # Favicon files
│   └── logo-*.svg         # Logo variations
├── src/
│   ├── app/
│   │   ├── about/         # About page component
│   │   ├── case-studies/  # Case studies component
│   │   ├── contact/       # Contact page component
│   │   ├── experience/    # Experience timeline component
│   │   ├── home/          # Home/landing page component
│   │   ├── layout/        # Layout wrapper component
│   │   │   └── logo.component.ts  # Logo component
│   │   ├── projects/      # Projects showcase component
│   │   ├── services/      # Services page component
│   │   ├── skills/        # Skills display component
│   │   ├── app.config.ts  # Application configuration
│   │   ├── app.routes.ts  # Route definitions
│   │   └── app.ts         # Root component
│   ├── styles.scss        # Global styles and theme
│   └── index.html         # Main HTML file
├── angular.json           # Angular CLI configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Screenshots / Demo

> **Note:** Add screenshots or a live demo link here once the portfolio is deployed.

### Sections Overview

- **Home** - Hero section with key statistics and value propositions
- **About** - Professional background and expertise
- **Skills** - Technical skills with proficiency levels
- **Projects** - Portfolio of completed projects
- **Case Studies** - Detailed project case studies
- **Experience** - Professional experience timeline
- **Services** - Available services and offerings
- **Contact** - Contact form and social links

## Development Guidelines

### Code Style

- Follow Angular style guide conventions
- Use TypeScript strict mode
- Maintain consistent naming conventions
- Write self-documenting code with clear variable names

### Component Structure

Each feature module follows this structure:
```
feature-name/
├── feature-name.ts        # Component class
├── feature-name.html      # Template
└── feature-name.scss      # Styles
```

### Best Practices

- Use standalone components (Angular 20+)
- Implement lazy loading for routes
- Optimize images and assets
- Follow accessibility guidelines (WCAG 2.1)
- Write meaningful commit messages

## Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
ng test --code-coverage
```

## Deployment

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory, optimized for performance with:
- Minified code
- Tree-shaking
- AOT compilation
- Bundle optimization

### Deployment Options

- **Netlify** - Connect GitHub repository for automatic deployments
- **Vercel** - Zero-config deployment with Angular support
- **GitHub Pages** - Static hosting for the built application
- **AWS S3 + CloudFront** - Scalable cloud hosting solution

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and structure
- Write clear commit messages
- Update documentation as needed
- Ensure all tests pass
- Test on multiple browsers and devices

## License

This project is private and proprietary. All rights reserved.

## Author / Maintainer

**Akmal Ali**

- **Role:** Senior Software Engineer
- **Experience:** 5+ years
- **Email:** akmelalee@gmail.com
- **LinkedIn:** [akmelalee](https://www.linkedin.com/in/akmelalee/)
- **GitHub:** [akmelalee](https://github.com/akmelalee)
- **Upwork:** [akmalali](https://www.upwork.com/freelancers/akmalali)

---

**Built with Angular 20** | **Last Updated:** 2025
