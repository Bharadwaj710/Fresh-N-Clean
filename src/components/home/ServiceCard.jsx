import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, tag, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white p-10 rounded-[2.5rem] border border-slate-100/80 hover:border-primary/20 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.08)] transition-all duration-500 relative flex flex-col items-start gap-8"
    >
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      
      <div className="space-y-4">
        <span className="text-[10px] font-bold tracking-[0.2em] text-primary/60 uppercase">{tag}</span>
        <h3 className="text-2xl font-extrabold text-text-dark tracking-tight leading-tight">{title}</h3>
        <p className="text-slate-500 leading-relaxed font-light text-lg">{description}</p>
      </div>

      <div className="mt-auto w-full pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-sm font-semibold text-primary flex items-center gap-2 cursor-pointer">
          Learn More 
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
