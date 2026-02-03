# MeetRoute - Smart Meetup Planning Platform

A modern, responsive SaaS landing website for MeetRoute, an AI-powered platform that helps groups plan smarter meetups using social heatmaps and intelligent route optimization.

## 🚀 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, minimal design with soft pastel gradients (purple, teal, green)
- **Smooth Animations**: Framer Motion powered animations throughout
- **Component-Based**: Reusable, modular React components
- **Performance Optimized**: Built with Vite for lightning-fast development and builds
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, consistent icon set

## 🛠️ Tech Stack

- **React 19.2** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit
- **React Router DOM** - Declarative routing for React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd meetroute
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
meetroute/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── Footer.jsx
│   │   └── ui/          # Reusable UI components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Container.jsx
│   ├── utils/           # Utility functions
│   │   ├── api.js       # API integration (dummy)
│   │   └── helpers.js   # Helper functions
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Components

### Navbar
- Fixed navigation bar with smooth scroll
- Responsive mobile menu
- Logo and CTA buttons
- Sticky header on scroll

### Hero Section
- Large heading with gradient text
- CTA buttons (Start Planning, Watch Demo)
- Animated map illustration
- Stats display (Users, Meetups, Rating)

### Features Section
- 6 feature cards in grid layout
- Icon-based cards with hover effects
- Social Heatmaps, Smart Route Planning, Group Coordination
- Real-time Updates, AI Recommendations, Privacy First

### How It Works Section
- 4-step process visualization
- Numbered step indicators
- Animated icons and descriptions
- Connection lines between steps

### Pricing Section
- 3 pricing tiers (Free, Pro, Enterprise)
- Feature comparison lists
- Popular plan highlighting
- CTA buttons for each plan

### CTA Section
- Full-width gradient background
- Compelling call-to-action
- Multiple CTA buttons
- Animated background elements

### Footer
- Multi-column link layout
- Social media links
- Newsletter subscription
- Copyright and legal links

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette (primary purple, teal)
- Custom animations (float, slide-up, fade-in)
- Extended font family (Inter)
- Gradient utilities

### Environment Variables
See `.env.example` for available configuration options:
- API URL
- Analytics ID
- Google Maps API Key (optional)

## 🌐 API Integration

The project includes dummy API implementations in `src/utils/api.js`:
- **User API**: Profile management
- **Group API**: Group creation and management
- **Route API**: Route calculation and optimization
- **Heatmap API**: Heatmap generation
- **Analytics API**: Event tracking

Replace these with actual API calls when backend is ready.

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```js
colors: {
  primary: { /* your colors */ },
  teal: { /* your colors */ },
}
```

### Animations
Add custom animations in `tailwind.config.js`:
```js
animation: {
  'your-animation': 'yourKeyframes 1s ease-in-out',
}
keyframes: {
  yourKeyframes: { /* your keyframes */ }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

Build the project:
```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ by the MeetRoute team

---

**Happy Coding!** 🎉
