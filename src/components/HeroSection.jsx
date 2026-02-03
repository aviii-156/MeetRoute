import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Play, Users, MapPin, Star } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Meetups Planned', value: '2M+', icon: MapPin },
    { label: 'App Rating', value: '4.9', icon: Star },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Aesthetic Map Doodles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main floating blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Map Doodle SVGs */}
        <svg className="absolute top-10 right-20 w-32 h-32 opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-500"/>
          <circle cx="30" cy="30" r="3" fill="currentColor" className="text-green-600"/>
          <circle cx="70" cy="40" r="3" fill="currentColor" className="text-green-600"/>
          <circle cx="50" cy="70" r="3" fill="currentColor" className="text-green-600"/>
          <path d="M 30 30 Q 50 50 70 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-400"/>
          <path d="M 70 40 Q 60 60 50 70" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-400"/>
        </svg>

        <svg className="absolute bottom-32 left-20 w-40 h-40 opacity-15" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-600" rx="10"/>
          <line x1="30" y1="10" x2="30" y2="110" stroke="currentColor" strokeWidth="1" className="text-emerald-500" opacity="0.5"/>
          <line x1="50" y1="10" x2="50" y2="110" stroke="currentColor" strokeWidth="1" className="text-emerald-500" opacity="0.5"/>
          <line x1="70" y1="10" x2="70" y2="110" stroke="currentColor" strokeWidth="1" className="text-emerald-500" opacity="0.5"/>
          <line x1="90" y1="10" x2="90" y2="110" stroke="currentColor" strokeWidth="1" className="text-emerald-500" opacity="0.5"/>
          <circle cx="40" cy="40" r="5" fill="currentColor" className="text-green-600"/>
          <circle cx="80" cy="70" r="5" fill="currentColor" className="text-green-600"/>
        </svg>

        <svg className="absolute top-1/3 left-1/4 w-48 h-48 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 100 Q 50 50 100 100 T 180 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500"/>
          <circle cx="100" cy="100" r="8" fill="currentColor" className="text-green-600"/>
          <circle cx="60" cy="80" r="4" fill="currentColor" className="text-green-500" opacity="0.7"/>
          <circle cx="140" cy="120" r="4" fill="currentColor" className="text-green-500" opacity="0.7"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>🗺️ Smart Meetup Planning</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Meet Smarter,
              <span className="block gradient-text">Route Better</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Discover the perfect meeting spots with our AI-powered platform. 
              Plan smarter group meetups using social heatmaps and intelligent route optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold text-lg shadow-md hover:shadow-2xl hover:shadow-green-400/70 transition-all duration-300"
              >
                Start Planning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold text-lg shadow-md hover:text-green-600 hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-1">
                    <stat.icon className="text-green-600" size={20} />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Illustration with Map Doodles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl shadow-xl overflow-hidden border border-emerald-200/50">
              {/* Decorative Map SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
                {/* Grid pattern */}
                <g stroke="currentColor" strokeWidth="1" className="text-green-300" opacity="0.3">
                  <line x1="0" y1="50" x2="400" y2="50" />
                  <line x1="0" y1="100" x2="400" y2="100" />
                  <line x1="0" y1="150" x2="400" y2="150" />
                  <line x1="0" y1="200" x2="400" y2="200" />
                  <line x1="0" y1="250" x2="400" y2="250" />
                  <line x1="0" y1="300" x2="400" y2="300" />
                  <line x1="0" y1="350" x2="400" y2="350" />
                  <line x1="0" y1="400" x2="400" y2="400" />
                  <line x1="50" y1="0" x2="50" y2="500" />
                  <line x1="100" y1="0" x2="100" y2="500" />
                  <line x1="150" y1="0" x2="150" y2="500" />
                  <line x1="200" y1="0" x2="200" y2="500" />
                  <line x1="250" y1="0" x2="250" y2="500" />
                  <line x1="300" y1="0" x2="300" y2="500" />
                  <line x1="350" y1="0" x2="350" y2="500" />
                </g>

                {/* Compass rose */}
                <g className="text-green-400">
                  <circle cx="350" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="350" y1="30" x2="350" y2="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="350" y1="70" x2="350" y2="90" stroke="currentColor" strokeWidth="1"/>
                </g>

                {/* Road paths */}
                <path d="M 100 150 Q 150 100 200 150 T 350 150" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400" opacity="0.6"/>
                <path d="M 200 250 Q 200 300 200 450" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400" opacity="0.6"/>
              </svg>

              {/* Animated Markers with Routes */}
              {/* Route paths connecting markers sequentially: 1st → 2nd → 3rd */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
                {/* Line from 1st pin (top-left) to 2nd pin (right-middle) */}
                <motion.path 
                  d="M 133 125 Q 200 170 266 250" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                {/* Line from 2nd pin (right-middle) to 3rd pin (bottom-center) */}
                <motion.path 
                  d="M 266 250 Q 240 310 200 375" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </svg>

              <motion.div
                animate={{ scale: [1, 1.1, 1], y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/4 left-1/3 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-xl flex items-center justify-center z-10 border-4 border-white"
              >
                <MapPin className="text-white drop-shadow-lg" size={28} strokeWidth={2.5} />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1], y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 right-1/4 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full shadow-xl flex items-center justify-center z-10 border-4 border-white"
              >
                <MapPin className="text-white drop-shadow-lg" size={28} strokeWidth={2.5} />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1], y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 left-1/2 w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full shadow-xl flex items-center justify-center z-10 border-4 border-white"
              >
                <MapPin className="text-white drop-shadow-lg" size={24} strokeWidth={2.5} />
              </motion.div>
            </div>

            {/* Floating Info Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 w-48"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center">
                  <MapPin className="text-white drop-shadow-md" size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Optimal Route</div>
                  <div className="text-xs text-gray-500">12 min away</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 w-48"
            >
              <div className="flex items-center space-x-3">
                <Users className="text-green-600" size={32} />
                <div>
                  <div className="text-sm font-semibold text-gray-900">5 Friends</div>
                  <div className="text-xs text-gray-500">All confirmed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
