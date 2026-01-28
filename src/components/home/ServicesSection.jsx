import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import ServiceCard from './ServiceCard';
import { Shirt, Sparkles, Wind, Droplets, Scissors } from 'lucide-react';

const services = [
  {
    title: "Commercial Laundry",
    description: "Industrial-grade cleaning for hospitality, healthcare, and corporate sectors. Precision-washed and ready for business.",
    icon: Shirt,
    tag: "Commercial"
  },
  {
    title: "Dry Cleaning",
    description: "Expert care for your finest garments. Our specialized solvent-free process preserves texture and extends garment life.",
    icon: Sparkles,
    tag: "Premium"
  },
  {
    title: "Uniform Laundry",
    description: "Comprehensive uniform management for staff. We handle volume while maintaining individual quality standards.",
    icon: Wind,
    tag: "Specialized"
  },
  {
    title: "Linen Care",
    description: "Dedicated care for bed linens, towels, and tablecloths. Crisp finishes and allergen-free sanitization.",
    icon: Droplets,
    tag: "Hospitality"
  },
  {
    title: "Tailoring & Alteration",
    description: "Precision adjustments by master tailors. From simple repairs to complete garment transformations.",
    icon: Scissors,
    tag: "Artisanal"
  }
];

const ServicesSection = () => {
  return (
    <SectionWrapper id="services" className="bg-[#FDFDFD] relative">
      <div className="max-w-4xl mx-auto mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
        >
          Our Capabilities
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark leading-tight mb-6">
          Precision Services for <br /> 
          <span className="text-primary">Every Fabric Type</span>
        </h2>
        <p className="text-text-muted text-xl font-light max-w-2xl leading-relaxed">
          We combine advanced technology with traditional care to deliver results that exceed industry standards.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            {...service}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
