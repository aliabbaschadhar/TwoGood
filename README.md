# TwoGood Co. Clone

<p align="center">
  <img src="./src/assets/images/favicon-32x32.png" alt="TwoGood Logo" width="80" height="80">
</p>

<p align="center">
  <strong>A fully responsive and immersive web experience</strong><br>
  Made with the help of <a href="https://github.com/WaqarHassan20">Waqar Hassan</a>
</p>

## Project Overview

TwoGood is a modern, responsive React web application that recreates the experience of the Two Good Co website. This project demonstrates advanced frontend development techniques with a focus on smooth animations, responsive design, and accessibility. The entire site is fully responsive across all devices and offers an immersive user experience through thoughtful interactions and visual effects.

The implementation recreates a social enterprise platform that offers various services including Shop, Wholesale, Catering, and Donation options, providing a seamless browsing experience while maintaining the brand's distinctive visual identity.

## Features

- **Fully Responsive Design** - Perfect experience across mobile, tablet, and desktop devices
- **Immersive Animations** - Smooth transitions and micro-interactions throughout the site
- **Interactive Navigation** - Intuitive and accessible menu system with elegant transitions
- **Dynamic Content Rendering** - Optimized loading and display of products and information
- **Cart Functionality** - Interactive shopping cart with visual feedback
- **Clean, Modern UI** - Minimalist design with thoughtful hover effects and visual feedback
- **Mobile-friendly Menu System** - Adaptive navigation for smaller screens
- **Performance Optimized** - Fast loading times and efficient rendering

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Scroll Effects**: Locomotive Scroll
- **State Management**: React Hooks
- **Icons & Graphics**: Custom SVG Components
- **Package Manager**: Bun (JavaScript Runtime & Package Manager)
- **Font Rendering**: Custom web fonts (Futura, HelveticaNow, Social Mono)

## Components

### Navigation System

- **Navbar**: Responsive design with mobile and desktop layouts
- **NavControls**: Animated hamburger menu and cart toggle
- **NavMenuOverlay**: Fullscreen menu with animated transitions
- **NavCartOverlay**: Interactive cart display with Marquee effects
- **NavDesktopLinks**: Desktop navigation with hover animations

### Content Sections

- **LandingPage**: Hero section with dynamic typography and imagery
- **Goods**: Product showcase with interactive card elements
- **Reviews**: Customer testimonials with animated quotes
- **Impact**: Social impact stories with responsive layout
- **ProductPage**: Detailed product displays with responsive grid
- **Email**: Newsletter subscription with interactive input

### UI Elements

- **Button**: Reusable button component with hover states
- **FooterLogo**: Animated SVG logo for the footer
- **QuoteAnimation**: SVG animation for testimonial quotes
- **MessageButton**: Interactive call-to-action button
- **GoodCard**: Product card with hover effects and dropdowns

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Bun (for faster installs and builds)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/aliabbaschadhar/TwoGood.git
   cd TwoGood
   ```

2. Install dependencies

   ```bash
   bun install
   # OR with npm
   npm install
   ```

3. Start the development server

   ```bash
   bun run dev
   # OR with npm
   npm run dev
   ```

4. Open your browser and navigate to `https://two-good-co-indol.vercel.app/`

## Project Structure

```
TwoGood/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── ABCSocialMono-Regular.woff2
│   │   │   ├── Futura-Bold.woff2
│   │   │   └── HelveticaNowText-Regular.woff2
│   │   └── images/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── CartSvg.jsx
│   │   ├── Email.jsx
│   │   ├── Footer.jsx
│   │   ├── FooterLogo.jsx
│   │   ├── GoodCard.jsx
│   │   ├── Goods.jsx
│   │   ├── Impact.jsx
│   │   ├── LandingPage.jsx
│   │   ├── MessageButton.jsx
│   │   ├── NavCartOverlay.jsx
│   │   ├── NavControls.jsx
│   │   ├── NavDesktopLinks.jsx
│   │   ├── NavFooterSection.jsx
│   │   ├── NavLogo.jsx
│   │   ├── NavMenuItemLink.jsx
│   │   ├── NavMenuOverlay.jsx
│   │   ├── Navbar.jsx
│   │   ├── OriginalLogo.jsx
│   │   ├── ProductPage.jsx
│   │   ├── QuoteAnimation.jsx
│   │   ├── Reviews.jsx
│   │   ├── TwoGoodSvg.jsx
│   │   └── index.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Implementation Details

### Responsive Design

The application uses Tailwind CSS breakpoints to ensure optimal display across all device sizes. Custom responsive components adapt their layout and functionality based on screen width, providing an intuitive experience on mobile, tablet, and desktop devices.

### Animation System

Animations are implemented using Framer Motion for component transitions and CSS transitions for subtle hover effects. Locomotive Scroll enhances the scrolling experience with smooth parallax effects and scroll-based triggers.

### State Management

React's Context API and hooks (useState, useEffect, useContext) manage application state efficiently. The cart functionality, navigation overlays, and interactive elements all utilize custom state management solutions.

### Performance Optimization

The application employs code splitting, lazy loading, and optimized assets to ensure fast initial load times and smooth runtime performance. SVG components are optimized for size and rendering efficiency.

## Future Improvements

- Implement full e-commerce functionality with working checkout
- Add user authentication and account management
- Integrate with a headless CMS for dynamic content management
- Enhance animations with more scroll-based triggers
- Implement dark mode support
- Add comprehensive unit and integration tests

## Contributors

- [Ali Abbas Chadhar](https://github.com/aliabbaschadhar) - Lead Developer
- [Waqar Hassan](https://github.com/WaqarHassan20) - Collaboration and Support

## License

[MIT](LICENSE)

## Acknowledgments

- Inspired by modern e-commerce and social enterprise websites
- Built with focus on accessibility and user experience
- Special thanks to the open-source community for the tools and libraries that made this project possible

---

<p align="center">
  Made with ❤️ and React
</p>
