import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionWrapper = ({ children, className, id, showCurve = true }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔧 FIX: softer translate, NO opacity clamp
const y = useTransform(scrollYProgress, [0, 0.35], [40, 0]);
  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full py-20 md:py-32 overflow-hidden ${className || ""}`}
    >
      {showCurve && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
              82.39-16.72,168.19-17.73,250.45-.39
              C823.78,31,906.67,72,985.66,92.83
              c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35
              A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: "var(--next-section-bg, #f8fafc)" }}
            />
          </svg>
        </div>
      )}

      <motion.div
        style={{ y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
