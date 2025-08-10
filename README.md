# 🎭 Framer Motion Animation Playground

> An interactive, comprehensive playground for learning and experimenting with Framer Motion animations in React

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-purple.svg)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.1-yellow.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## ✨ Overview

Framer Motion Animation Playground is an interactive web application designed to help developers learn, experiment, and master Framer Motion animations. Built with React 19 and modern web technologies, it provides a comprehensive collection of animation examples with real-time controls and live code previews.

## 🚀 Features

### 🎯 Core Animation Demos

- **Basic Animations** - Fundamental motion concepts with customizable duration, scale, and rotation
- **Keyframe Animations** - Multi-step animations with dynamic control over scale and rotation values
- **Gesture Animations** - Interactive animations triggered by hover, tap, and focus events
- **Drag Animations** - Mouse-based element manipulation with drag constraints
- **Smooth Counter** - Animated number counting with Framer Motion
- **Scroll Reveal** - Scroll-triggered animations using `whileInView`
- **Stagger Animations** - Sequential element animations with `staggerChildren`

### 🎨 Everyday Animation Components

- **Text Animations** - Typing effects, fade transitions, slide animations, and scale effects
- **Icon Animations** - Hover effects, rotation, bouncing, and pulse animations
- **Button Animations** - Interactive button states with smooth transitions
- **Card Animations** - Hover effects, scale transformations, and shadow animations
- **Form Animations** - Input field animations, validation feedback, and submission states
- **Loading Animations** - Spinners, skeleton loaders, and progress bars
- **Modal Animations** - Entrance/exit animations, backdrop effects, and content transitions
- **Navigation Animations** - Menu animations, tab transitions, and breadcrumb effects
- **List Animations** - Staggered list items, reordering animations, and hover effects
- **Data Visualization** - Animated charts, progress bars, and statistical displays

### 🎛️ Interactive Controls

- **Real-time Parameter Adjustment** - Modify animation values on-the-fly
- **Range Sliders** - Precise control over duration, delay, scale, and other properties
- **Live Preview** - See changes instantly without page refresh
- **Code Snippets** - Dynamic code examples that reflect current control values

### 🌓 Theme System

- **Dark/Light Mode** - Automatic theme detection with manual toggle
- **CSS Custom Properties** - Consistent theming across all components
- **Responsive Design** - Optimized for all device sizes

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Animation Library**: Framer Motion 12.23.12
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.1.1
- **Code Quality**: ESLint 9.32.0
- **Package Manager**: npm

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/framer-motion-playground.git
cd framer-motion-playground

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 🏗️ Project Structure

```
src/
├── components/
│   ├── demos/           # Core animation demos
│   │   ├── everyday/    # Everyday animation components
│   │   └── ...
│   └── ui/             # Reusable UI components
├── context/            # React context providers
├── data/              # Demo configurations and metadata
├── hooks/             # Custom React hooks
├── pages/             # Page components
└── assets/            # Static assets and icons
```

## 🎮 Usage

### Exploring Animations

1. **Browse Demos**: Use the sidebar navigation to explore different animation categories
2. **Interactive Controls**: Adjust animation parameters using the real-time control panel
3. **Live Preview**: Watch animations update instantly as you modify controls
4. **Code Examples**: View dynamic code snippets that reflect your current settings

### Learning Path

1. Start with **Basic Animations** to understand fundamental concepts
2. Progress to **Keyframe Animations** for multi-step sequences
3. Explore **Gesture Animations** for user interaction
4. Dive into **Everyday Components** for practical use cases
5. Experiment with **Advanced Features** like scroll-triggered animations

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Adding New Animations

1. Create a new component in `src/components/demos/` or `src/components/demos/everyday/`
2. Add demo configuration to `src/data/demos.js`
3. Include controls and default props as needed
4. Update the demo grid and navigation

### Code Style

- Follow React best practices and hooks patterns
- Use Framer Motion's declarative animation syntax
- Implement responsive design with Tailwind CSS
- Maintain consistent component structure

## 🌟 Key Framer Motion Concepts Demonstrated

- **Motion Components** - `motion.div`, `motion.span`, `motion.path`
- **Animation Props** - `initial`, `animate`, `exit`, `variants`
- **Transitions** - `duration`, `ease`, `delay`, `staggerChildren`
- **Gestures** - `whileHover`, `whileTap`, `whileInView`
- **Drag & Drop** - `drag`, `dragConstraints`, `dragElastic`
- **Motion Values** - `useMotionValue`, `useTransform`, `useMotionValueEvent`
- **Spring Physics** - `stiffness`, `damping`, `mass`

## 📱 Responsive Design

The playground is fully responsive and optimized for:

- **Desktop** - Full feature set with sidebar navigation
- **Tablet** - Adaptive layout with optimized controls
- **Mobile** - Touch-friendly interface with simplified navigation

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-animation`)
3. **Commit** your changes (`git commit -m 'Add amazing animation'`)
4. **Push** to the branch (`git push origin feature/amazing-animation`)
5. **Open** a Pull Request

### Contribution Guidelines

- Add new animation examples with practical use cases
- Include proper controls and customization options
- Maintain consistent code style and documentation
- Test animations across different devices and browsers

## 🐛 Known Issues & Solutions

### Spring Animation Keyframes

**Issue**: Spring animations only support 2 keyframes
**Solution**: Use simple values or switch to ease-based transitions for complex keyframe sequences

### MotionValue Rendering

**Issue**: MotionValue objects cannot be rendered directly as React children
**Solution**: Use `useMotionValueEvent` to convert MotionValues to state variables

## 📚 Learning Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Animation Best Practices](https://reactjs.org/docs/animation.html)
- [CSS Animation Fundamentals](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Performance Optimization](https://www.framer.com/motion/performance/)

## 🎯 Roadmap

- [ ] **3D Animations** - Three.js integration for 3D motion
- [ ] **Physics Engine** - Advanced physics-based animations
- [ ] **Animation Presets** - Pre-built animation libraries
- [ ] **Export Functionality** - Generate animation code for other projects
- [ ] **Performance Metrics** - Animation performance monitoring
- [ ] **Accessibility** - Enhanced accessibility features for animations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion Team** - For the incredible animation library
- **React Team** - For the amazing framework
- **Tailwind CSS Team** - For the utility-first CSS framework
- **Vite Team** - For the fast build tool
- **Open Source Community** - For inspiration and contributions

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/framer-motion-playground/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/framer-motion-playground/discussions)
- **Documentation**: [Wiki](https://github.com/yourusername/framer-motion-playground/wiki)

---

<div align="center">
  <p>Made with ❤️ Mojnu</p>
  <p>
    <a href="https://github.com/yourusername/framer-motion-playground/stargazers">
      <img src="https://img.shields.io/github/stars/yourusername/framer-motion-playground" alt="Stars">
    </a>
    <a href="https://github.com/yourusername/framer-motion-playground/network">
      <img src="https://img.shields.io/github/forks/yourusername/framer-motion-playground" alt="Forks">
    </a>
    <a href="https://github.com/yourusername/framer-motion-playground/issues">
      <img src="https://img.shields.io/github/issues/yourusername/framer-motion-playground" alt="Issues">
    </a>
  </p>
</div>
