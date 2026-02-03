import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { UserPlus, Map, Navigation, Coffee } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Add Your Group',
      description: 'Invite friends and create your meetup group. Everyone joins with a simple link.',
      color: 'from-blue-400 to-cyan-500',
      iconColor: 'text-blue-600',
    },
    {
      icon: Map,
      title: 'Explore Heatmaps',
      description: 'See where everyone is located. Our heatmap visualizes the best meeting areas.',
      color: 'from-red-400 to-pink-500',
      iconColor: 'text-red-600',
    },
    {
      icon: Navigation,
      title: 'Get Optimal Routes',
      description: 'Our AI analyzes locations and suggests the most convenient meeting spot for all.',
      color: 'from-purple-400 to-indigo-500',
      iconColor: 'text-purple-600',
    },
    {
      icon: Coffee,
      title: 'Meet & Enjoy',
      description: 'Navigate to your spot with turn-by-turn directions. Have a great time together!',
      color: 'from-orange-400 to-amber-500',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes. Our simple 4-step process makes planning meetups effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary-200 via-emerald-200 to-green-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="text-center">
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                      className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg z-10`}
                    >
                      <Icon className={`${step.iconColor} drop-shadow-md`} size={32} strokeWidth={2.5} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-900 shadow-md">
                        {index + 1}
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-semibold text-lg shadow-md hover:shadow-2xl hover:shadow-green-400/70 transition-all duration-300"
          >
            Try It Now - It's Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
