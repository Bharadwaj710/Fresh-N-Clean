import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm"
          >
            <img src={logo} alt="Fresh 'N Clean Logo" className="w-full h-full object-contain p-1" />
          </motion.div>
          <span className="text-2xl font-extrabold text-text-dark tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Fresh ’N Clean
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-text-muted hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-text-muted hover:text-primary transition-colors">Services</a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors">About</a>
          <Button size="sm" className="px-6">Schedule Pickup</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <a href="#" className="text-text-dark font-medium p-2">Home</a>
              <a href="#services" className="text-text-dark font-medium p-2">Services</a>
              <Button className="w-full justify-center">Schedule Pickup</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
