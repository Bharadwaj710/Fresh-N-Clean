import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// 3–5 large, visible, well-placed droplets in negative space between text and image
const DROPLETS = [
  { id: 1, top: "28%", left: "8%", size: 54 },
  { id: 2, top: "62%", left: "18%", size: 72 },
  { id: 3, top: "38%", left: "44%", size: 36 },
  { id: 4, top: "70%", left: "36%", size: 48 },
  { id: 5, top: "54%", left: "28%", size: 40 },
];

const isMobile = () => window.innerWidth < 768;

const WaterDroplets = () => {
  const containerRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0, scroll: 0 });
  const ticking = useRef(false);

  // Enable only on desktop
  useEffect(() => {
    if (isMobile()) return;
    setEnabled(true);
    return () => setEnabled(false);
  }, []);

  // Mouse parallax (gentle, shared for all, max ±12px)
  useEffect(() => {
    if (!enabled) return;
    const handle = (e) => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current?.getBoundingClientRect();
          const cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
          const cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
          const dx = (e.clientX - cx) / (rect ? rect.width : window.innerWidth);
          const dy =
            (e.clientY - cy) / (rect ? rect.height : window.innerHeight);
          setParallax((p) => ({ ...p, x: dx * 12, y: dy * 12 }));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [enabled]);

  // Scroll drift (gentle, shared for all, throttled, very slow)
  useEffect(() => {
    if (!enabled) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setParallax((p) => ({ ...p, scroll: (window.scrollY / 1600) * 10 }));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden md:block"
      style={{ zIndex: 10, position: "absolute" }}
    >
      {DROPLETS.map((drop) => {
        // Each droplet gets a slight offset from shared parallax
        const style = {
          top: drop.top,
          left: drop.left,
          width: drop.size,
          height: drop.size,
          opacity: 0.32,
          transform: `translate3d(${parallax.x * (0.7 + drop.id * 0.08) + 0}px,${parallax.y * (0.7 + drop.id * 0.08) + parallax.scroll * (0.5 + drop.id * 0.07)}px,0)`,
        };
        return (
          <motion.div
            key={drop.id}
            style={style}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.32, scale: 1 }}
            transition={{ 
              delay: 0.1 + drop.id * 0.08, 
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="absolute rounded-full bg-blue-200/40 backdrop-blur-[0.5px] shadow-[0_0_0_2.5px_rgba(255,255,255,0.22),0_2px_8px_rgba(37,99,235,0.10)]"
          >
            {/* Stronger white highlight */}
            <div className="absolute left-1/5 top-1/5 w-2/5 h-2/5 bg-white/90 rounded-full blur-[2.5px] opacity-90" />
            {/* Refraction edge */}
            <div className="absolute left-0 top-0 w-full h-full rounded-full border-[2.5px] border-white/70 opacity-70 pointer-events-none" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default WaterDroplets;
