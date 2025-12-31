
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'full' | 'icon';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'full', className = "" }) => {
  // SVG representation of the CollabHive logo: Bee icon + honeycomb speech bubble
  const icon = (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Honeycomb Speech Bubble Shape */}
      <path 
        d="M20 25C20 22.2386 22.2386 20 25 20H75C77.7614 20 80 22.2386 80 25V65C80 67.7614 77.7614 70 75 70H45L30 85V70H25C22.2386 70 20 67.7614 20 65V25Z" 
        fill="#FACC15" 
      />
      <path 
        d="M20 25C20 22.2386 22.2386 20 25 20H75C77.7614 20 80 22.2386 80 25V65C80 67.7614 77.7614 70 75 70H45L30 85V70H25C22.2386 70 20 67.7614 20 65V25Z" 
        stroke="black" 
        strokeWidth="4" 
      />
      
      {/* The Bee Character */}
      <g transform="translate(35, 30) scale(0.4)">
        {/* Wings */}
        <ellipse cx="20" cy="40" rx="30" ry="15" fill="white" stroke="black" strokeWidth="4" transform="rotate(-30 20 40)" />
        <ellipse cx="60" cy="40" rx="30" ry="15" fill="white" stroke="black" strokeWidth="4" transform="rotate(30 60 40)" />
        
        {/* Body */}
        <ellipse cx="40" cy="65" rx="35" ry="25" fill="#FACC15" stroke="black" strokeWidth="4" />
        {/* Stripes */}
        <path d="M25 55Q40 45 55 55" stroke="black" strokeWidth="6" fill="none" />
        <path d="M20 65Q40 55 60 65" stroke="black" strokeWidth="6" fill="none" />
        <path d="M25 75Q40 65 55 75" stroke="black" strokeWidth="6" fill="none" />
        
        {/* Head */}
        <circle cx="75" cy="50" r="18" fill="#FACC15" stroke="black" strokeWidth="4" />
        {/* Eye */}
        <circle cx="82" cy="45" r="4" fill="black" />
        {/* Antennae */}
        <path d="M75 32Q75 20 85 15" stroke="black" strokeWidth="3" fill="none" />
        <circle cx="85" cy="15" r="2" fill="black" />
      </g>
      {/* Small star spark */}
      <path d="M85 20L87 25L92 27L87 29L85 34L83 29L78 27L83 25L85 20Z" fill="black" />
    </svg>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex items-center gap-3 ${className}`}
    >
      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        {icon}
      </div>
      {variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-center leading-none">
            <span className="text-xl md:text-2xl font-extrabold text-black">Collab</span>
            <span className="text-xl md:text-2xl font-extrabold text-[#A855F7]">Hive</span>
          </div>
          <span className="text-[8px] md:text-[10px] tracking-widest uppercase font-bold text-neutral-500 mt-0.5">Influencer Marketing Agency</span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
