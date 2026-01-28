import React, { useEffect, useRef } from "react";

const MAX_BLUR = 40; // px
const RIPPLE_COUNT = 3;
const ANIMATION_DURATION = 1800; // ms
const CANVAS_MAX_WIDTH = 1920;
const CANVAS_MAX_HEIGHT = 1080;

const WaterSpillEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const finishedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Cap canvas resolution for perf
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.min(window.innerWidth, CANVAS_MAX_WIDTH);
      const height = Math.min(window.innerHeight, CANVAS_MAX_HEIGHT);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const ctx = canvas.getContext("2d");
    let ripples = [];

    class Ripple {
      constructor() {
        this.x = canvas.width / 2 + (Math.random() - 0.5) * 80;
        this.y = canvas.height / 2 + (Math.random() - 0.5) * 80;
        this.radius = 0;
        this.maxRadius = Math.max(canvas.width, canvas.height) * 0.55;
        this.speed = 3.2 + Math.random() * 1.2;
        this.opacity = 0.18;
        this.finished = false;
      }
      update() {
        this.radius += this.speed;
        this.opacity -= 0.0006 * this.speed;
        if (this.radius > this.maxRadius || this.opacity <= 0.01) {
          this.finished = true;
        }
      }
      draw() {
        // Radial gradient fill
        const grad = ctx.createRadialGradient(
          this.x,
          this.y,
          this.radius * 0.2,
          this.x,
          this.y,
          this.radius,
        );
        grad.addColorStop(0, `rgba(37,99,235,${this.opacity * 0.7})`);
        grad.addColorStop(0.5, `rgba(37,99,235,${this.opacity * 0.25})`);
        grad.addColorStop(1, `rgba(37,99,235,0)`);
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.filter = `blur(${MAX_BLUR}px)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
        ctx.filter = "none";
      }
    }

    // Staggered ripple start
    ripples = [new Ripple()];
    const t1 = setTimeout(() => ripples.push(new Ripple()), 400);
    const t2 = setTimeout(() => ripples.push(new Ripple()), 800);

    let start;
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate global fade in/out for the whole effect if needed
      const globalOpacity = Math.min(elapsed / 1000, 1);
      
      ripples.forEach((r) => {
        if (!r.finished) {
          r.update();
          r.draw();
        }
      });

      if (elapsed < ANIMATION_DURATION) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Transition to static state smoothly
        const transitionDuration = 1000;
        const transitionElapsed = elapsed - ANIMATION_DURATION;
        const transitionProgress = Math.min(transitionElapsed / transitionDuration, 1);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the static texture with a fade-in progress
        ctx.save();
        ctx.globalAlpha = 0.1 * transitionProgress;
        for (let i = 0; i < RIPPLE_COUNT; i++) {
          const r = new Ripple();
          r.radius = r.maxRadius * (0.7 + 0.2 * (i / RIPPLE_COUNT));
          r.opacity = 0.13;
          r.draw();
        }
        ctx.restore();

        if (transitionProgress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          finishedRef.current = true;
        }
      }
    }
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(t1);
      clearTimeout(t2);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-60"
      aria-hidden="true"
    />
  );
};

export default WaterSpillEffect;
