import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Map, Route, Users, Bell, Brain, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Map,
      title: 'Social Heatmaps',
      description: 'Visualize where your friends are and discover the perfect meeting spots based on everyone\'s location.',
      color: 'from-teal-400 to-cyan-500',
      iconColor: 'text-teal-600',
      borderColor: 'border-teal-300 hover:border-teal-500',
    },
    {
      icon: Route,
      title: 'Smart Route Planning',
      description: 'Get optimized routes that save time and make meetups convenient for everyone in your group.',
      color: 'from-green-400 to-emerald-500',
      iconColor: 'text-green-600',
      borderColor: 'border-green-300 hover:border-green-500',
    },
    {
      icon: Users,
      title: 'Group Coordination',
      description: 'Manage multiple friends, sync calendars, and coordinate meetups effortlessly in one place.',
      color: 'from-lime-300 to-green-400',
      iconColor: 'text-lime-600',
      borderColor: 'border-lime-300 hover:border-lime-500',
    },
    {
      icon: Bell,
      title: 'Real-time Updates',
      description: 'Stay informed with live notifications about your friends\' locations and meetup status changes.',
      color: 'from-emerald-400 to-green-500',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-300 hover:border-emerald-500',
    },
    {
      icon: Brain,
      title: 'AI Recommendations',
      description: 'Get intelligent venue suggestions based on preferences, ratings, and group dynamics.',
      color: 'from-green-300 to-teal-400',
      iconColor: 'text-green-600',
      borderColor: 'border-green-300 hover:border-green-500',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is encrypted and secure. Control who sees your location and when they see it.',
      color: 'from-emerald-500 to-teal-400',
      iconColor: 'text-emerald-700',
      borderColor: 'border-emerald-300 hover:border-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration with Green Doodles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circles and organic shapes */}
        <div className="absolute top-20 left-5% w-72 h-72 bg-gradient-to-br from-green-200 to-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10% w-96 h-96 bg-gradient-to-br from-lime-200 to-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-teal-100 to-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        {/* Decorative doodle shapes */}
        <svg className="absolute top-10 left-10 w-40 h-40 opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="3" fill="#10b981" className="animate-bounce" style={{animationDelay: '0s'}}/>
          <circle cx="30" cy="35" r="2" fill="#059669"/>
          <circle cx="15" cy="50" r="2.5" fill="#34d399"/>
          <path d="M40 10 Q50 20, 40 30" stroke="#10b981" fill="none" strokeWidth="1.5"/>
          <path d="M45 45 Q55 40, 60 50" stroke="#059669" fill="none" strokeWidth="1.5"/>
        </svg>
        
        <svg className="absolute bottom-20 right-20 w-48 h-48 opacity-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="30" r="3" fill="#059669" className="animate-bounce" style={{animationDelay: '0.5s'}}/>
          <circle cx="70" cy="50" r="2" fill="#10b981"/>
          <circle cx="85" cy="65" r="2.5" fill="#34d399"/>
          <path d="M60 20 Q70 25, 65 35" stroke="#10b981" fill="none" strokeWidth="1.5"/>
          <path d="M75 70 Q85 75, 80 85" stroke="#059669" fill="none" strokeWidth="1.5"/>
        </svg>

        <svg className="absolute top-1/2 left-1/4 w-32 h-32 opacity-15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="25" r="2.5" fill="#10b981"/>
          <circle cx="35" cy="50" r="2" fill="#059669"/>
          <circle cx="65" cy="50" r="2" fill="#34d399"/>
          <path d="M50 40 Q60 50, 50 60" stroke="#10b981" fill="none" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="block gradient-text">Smarter Meetups</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to plan, coordinate, and optimize your group meetups in one intelligent platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${feature.borderColor}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className={`${feature.iconColor} drop-shadow-md`} size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
