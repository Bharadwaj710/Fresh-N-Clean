import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) => {
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/30",
    secondary: "bg-white text-primary border border-primary/10 shadow-sm hover:border-primary/20 hover:bg-secondary/20",
    outline: "border-2 border-white/20 text-white hover:bg-white/10"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
