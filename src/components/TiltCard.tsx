import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Mouse position relative to card
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Smooth springs for tilt
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    if (!cardRef.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate percentage for gradient
    const xPct = (mouseX / width) * 100;
    const yPct = (mouseY / height) * 100;
    setMousePos({ x: xPct, y: yPct });

    // Calculate tilt (max 5 degrees)
    const rX = ((mouseY / height) - 0.5) * -10;
    const rY = ((mouseX / width) - 0.5) * 10;
    
    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseEnter = () => {
    if (prefersReducedMotion) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* The Card Content */}
        {children}

        {/* Glossy sheen effect overlay */}
        {!prefersReducedMotion && (
          <div 
            className="pointer-events-none absolute inset-0 z-50 rounded-3xl mix-blend-overlay transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 250px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.15), transparent 80%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
