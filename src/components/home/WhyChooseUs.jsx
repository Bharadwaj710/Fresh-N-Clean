import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';

const points = [
  {
    title: "Industrial-Grade Hygiene Standards",
    desc: "We implement strict cross-contamination protocols and hospital-grade sanitization for every load. Our facility operates under clinically clean standards to ensure absolute safety.",
    tag: "Safety First"
  },
  {
    title: "Dedicated In-Plant Quality Assurance",
    desc: "Garments are inspected at three distinct stages: pre-wash, post-finish, and final packaging. Our QA teams ensure every item meets the 'Fresh 'N Clean' benchmark.",
    tag: "Quality"
  },
  {
    title: "Customized Washing Formulas",
    desc: "Our chemical engineers develop tailored detergent mixes for specific fabric types and soil levels, ensuring longevity for your linens and brilliant results every time.",
    tag: "Precision"
  },
  {
    title: "Guaranteed On-Time, GPS-Tracked Deliveries",
    desc: "Real-time fleet tracking and optimized routing ensure guaranteed delivery windows. Reliability is the foundation of our business partnerships.",
    tag: "Logistics"
  }
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            The Gold Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-text-dark leading-tight"
          >
            Why Businesses Trust <br /> 
            <span className="text-primary">Fresh ’N Clean</span>
          </motion.h2>
        </div>

        {/* Content List */}
        <div className="space-y-16">
          {points.map((point, i) => (
            <motion.div 
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid md:grid-cols-[1fr_2fr] gap-8 items-start border-l-2 border-slate-100 pl-8 transition-colors duration-500 hover:border-primary/40"
            >
              <div className="space-y-2">
                <span className="text-primary/60 font-mono text-sm leading-none">0{i + 1} /</span>
                <h4 className="text-sm font-bold text-primary tracking-widest uppercase">{point.tag}</h4>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark tracking-tight transition-colors duration-300 group-hover:text-primary">
                  {point.title}
                </h3>
                <p className="text-text-muted text-lg md:text-xl leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
