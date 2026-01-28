import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import SectionWrapper from "../ui/SectionWrapper";
import WaterSpillEffect from "./WaterSpillEffect";
import WaterDroplets from "./WaterDroplets";

// Asset Imports
import imgLaundry from "../../assets/laundry_industrial_1769565623451.png";
import imgDryClean from "../../assets/dry_cleaning_1769565646007.png";
import imgUniforms from "../../assets/uniforms_1769565663684.png";
import imgLinens from "../../assets/linens_1769565686965.png";
import imgTailoring from "../../assets/tailoring_1769565707843.png";

const visuals = [
  { id: 1, title: "Industrial Laundry", img: imgLaundry },
  { id: 2, title: "Dry Cleaning", img: imgDryClean },
  { id: 3, title: "Uniform Care", img: imgUniforms },
  { id: 4, title: "Linen Service", img: imgLinens },
  { id: 5, title: "Expert Tailoring", img: imgTailoring },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visuals.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex items-center bg-transparent pt-20 overflow-hidden"
      style={{
        position: "relative",
        zIndex: 0,
        transition: "background 1.2s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Base Gradient - Immediate load for warmth */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-[-2] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.03) 0%, transparent 50%)"
        }}
      />

      {/* Background Effects */}
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <WaterSpillEffect />
      </div>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <WaterDroplets />
      </div>
      <SectionWrapper className="relative z-20 h-full" showCurve={false}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Content */}
          <div className="flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              <h1 className="text-5xl md:text-[5rem] font-bold text-text-dark leading-[1.05] tracking-tight mb-8 drop-shadow-sm">
                Fresh{" "}
                <span className="relative">
                  Clothes.
                  <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-primary/10 rounded-full" />
                </span>
                <br />
                <span className="text-primary font-extrabold">
                  Professional Care.
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-text-muted max-w-lg leading-relaxed font-light mb-10">
                Cleaned with precision, handled with care, and delivered with
                trust.
              </p>

              <div className="flex flex-wrap gap-6">
                <Button
                  variant="primary"
                  className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Schedule Pickup
                </Button>
                <Button
                  variant="secondary"
                  className="h-14 px-10 text-lg rounded-full border border-gray-200 hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visual System - Auto-Cycling Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative w-full aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 bg-slate-900"
            style={{ marginTop: "-3rem", zIndex: 15 }}
          >
            <AnimatePresence>
              {[
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                  style={{ position: "absolute" }}
                >
                  <img
                    src={visuals[currentIndex].img}
                    alt={visuals[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
                </motion.div>,
              ]}
            </AnimatePresence>

            {/* Progress Bars */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {visuals.map((_, idx) => (
                <div
                  key={idx}
                  className="w-12 h-1 bg-white/20 rounded-full overflow-hidden"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: idx === currentIndex ? "100%" : "0%" }}
                    transition={{
                      duration: idx === currentIndex ? 5 : 0.4,
                      ease: "linear",
                    }}
                    className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                </div>
              ))}
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-12 left-8 z-20">
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  style={{ position: "relative" }}
                >
                  <p className="text-white/80 text-sm font-bold tracking-[0.2em] uppercase mb-1">
                    Our Expertise
                  </p>
                  <h3 className="text-white text-3xl font-extrabold tracking-tight">
                    {visuals[currentIndex].title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Soft overlay for depth */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem] z-30" />
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HeroSection;
