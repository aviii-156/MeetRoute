import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400';
  
  const variants = {
    primary: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md hover:shadow-2xl hover:shadow-green-400/70',
    secondary: 'bg-white text-gray-700 shadow-md hover:shadow-2xl hover:text-green-600 hover:shadow-green-400/50',
    outline: 'bg-transparent text-white shadow-md hover:bg-green-500/10 hover:shadow-2xl hover:shadow-green-400/60',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm gap-2',
    md: 'px-7 py-3.5 text-base gap-2',
    lg: 'px-9 py-4.5 text-lg gap-2',
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.08,
        y: -2
      }}
      whileTap={{ 
        scale: 0.92,
        y: 0
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-1" size={20} />}
    </motion.button>
  );
};

export default Button;
