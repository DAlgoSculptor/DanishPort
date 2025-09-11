# 🚀 Danish Nawaz - Advanced Modern Portfolio

A cutting-edge, fully responsive portfolio website built with React, featuring advanced animations, interactive components, and modern design patterns.

![Portfolio Preview](./src/assets/DanishPic.jpg)

## ✨ Features

### 🎨 Modern Design
- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- **Glassmorphism Effects** - Beautiful frosted glass UI components
- **Gradient Animations** - Dynamic color transitions and effects
- **Responsive Design** - Optimized for all devices and screen sizes

### 🎭 Advanced Animations
- **Framer Motion Integration** - Smooth, performant animations
- **Particle Background** - Interactive particle system with mouse interaction
- **Scroll-triggered Animations** - Elements animate as they come into view
- **Loading Screen** - Elegant loading animation with progress indicator
- **Hover Effects** - Interactive micro-animations throughout

### 🛠️ Interactive Components
- **Project Filtering & Search** - Advanced project showcase with real-time filtering
- **Skills Visualization** - Interactive skill cards with proficiency levels
- **Timeline Components** - Animated experience and education timelines
- **Contact Form** - Fully functional form with validation and animations
- **Testimonials Carousel** - Dynamic testimonial display

### 🔧 Technical Features
- **TypeScript Ready** - Type-safe development environment
- **Performance Optimized** - Code splitting, lazy loading, and optimizations
- **SEO Optimized** - Meta tags, structured data, and social media integration
- **Accessibility** - WCAG compliant with proper ARIA labels
- **PWA Ready** - Progressive Web App capabilities

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### Animations & Interactions
- **GSAP** - Professional-grade animation library
- **React Spring** - Spring-physics based animations
- **React Intersection Observer** - Scroll-triggered animations
- **Particles.js** - Interactive particle backgrounds

### Form & Validation
- **React Hook Form** - Performant forms with easy validation
- **Yup** - Schema validation library
- **React Hot Toast** - Beautiful toast notifications

### UI Components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon library
- **Class Variance Authority** - Type-safe component variants

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DAlgoSculptor/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Hero.jsx        # Hero section with animations
│   ├── Projects.jsx    # Project showcase with filtering
│   ├── Skills.jsx      # Interactive skills display
│   ├── Experience.jsx  # Timeline experience section
│   ├── Education.jsx   # Education timeline
│   ├── Contact.jsx     # Contact form with validation
│   └── Testimonials.jsx # Testimonial carousel
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme management
├── lib/               # Utility functions
│   └── utils.js       # Common utilities
├── constants/         # Static data
│   └── index.jsx      # Portfolio data
├── assets/           # Images and static files
└── styles/           # CSS files

## 🎨 Customization

### Theme Configuration
The portfolio supports both light and dark themes. You can customize the theme colors in:
- `src/contexts/ThemeContext.jsx` - Theme logic
- `tailwind.config.js` - Color palette
- `src/index.css` - Custom CSS variables

### Content Updates
Update your personal information in:
- `src/constants/index.jsx` - All portfolio data
- `public/` - Resume and images
- `index.html` - SEO meta tags

### Styling
- **Tailwind Classes** - Use Tailwind utilities for quick styling
- **Custom CSS** - Add custom animations in `src/index.css`
- **Component Variants** - Use CVA for component styling variants

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Danish Nawaz Portfolio
VITE_APP_DESCRIPTION=Full Stack Web Developer
VITE_CONTACT_EMAIL=your.email@example.com
```

### SEO Configuration
Update SEO settings in `index.html`:
- Meta descriptions
- Open Graph tags
- Twitter Card data
- Structured data (JSON-LD)

## 📱 Features Breakdown

### 🏠 Hero Section
- Animated text with gradient effects
- Interactive particle background
- Floating profile image with hover effects
- Social media links with animations
- Scroll indicator

### 💼 Projects Section
- **Search Functionality** - Real-time project search
- **Technology Filtering** - Filter by tech stack
- **Hover Effects** - Interactive project cards
- **External Links** - Direct links to live demos and GitHub

### 🎯 Skills Section
- **Categorized Skills** - Organized by technology type
- **Progress Bars** - Visual proficiency indicators
- **Interactive Cards** - Hover animations and effects
- **Statistics** - Overall experience metrics

### 📈 Experience Timeline
- **Interactive Timeline** - Animated experience journey
- **Company Details** - Role descriptions and tech stacks
- **Responsive Design** - Adapts to all screen sizes

### 🎓 Education Section
- **Academic Journey** - Educational background
- **Institution Links** - Direct links to schools/universities
- **Achievements** - GPA and graduation details

### 📞 Contact Section
- **Contact Form** - Fully functional with validation
- **Multiple Contact Methods** - Email, phone, location
- **Social Links** - All social media profiles
- **Form Validation** - Real-time error handling

### 💬 Testimonials
- **Client Feedback** - Professional testimonials
- **Star Ratings** - Visual rating system
- **Statistics** - Client satisfaction metrics

## 🚀 Performance Optimizations

### Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting
- Lazy loading of images and assets

### Image Optimization
- WebP format support
- Responsive images with srcset
- Lazy loading implementation

### Bundle Optimization
- Tree shaking for unused code
- Minification and compression
- CSS purging for smaller bundles

## 🔍 SEO Features

### Meta Tags
- Comprehensive meta descriptions
- Open Graph for social sharing
- Twitter Cards for better previews
- Canonical URLs

### Structured Data
- JSON-LD schema markup
- Person schema for better search results
- Organization and education data

### Performance
- Core Web Vitals optimization
- Fast loading times
- Mobile-first approach

## 🌐 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers** - iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement** - Graceful degradation for older browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Danish Nawaz** - Full Stack Web Developer

- 📧 Email: danishnawaz345678@gmail.com
- 💼 LinkedIn: [danish-nawaz](https://www.linkedin.com/in/danish-nawaz-86154028a/)
- 🐙 GitHub: [DAlgoSculptor](https://github.com/DAlgoSculptor)
- 🐦 Twitter: [@DNawaz65591](https://x.com/DNawaz65591)

---

⭐ **If you found this portfolio helpful, please give it a star!** ⭐

Built with ❤️ by Danish Nawaz
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
