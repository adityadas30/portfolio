"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#_";

interface CyberGlitchTextProps {
  text: string;
  className?: string;
  scrambleOnMount?: boolean;
  scrambleDuration?: number;
}

export function CyberGlitchText({
  text,
  className,
  scrambleOnMount = true,
  scrambleDuration = 40,
}: CyberGlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  const scramble = () => {
    let iteration = 0;
    setIsGlitching(true);
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText((currentText) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setIsGlitching(false);
      }

      iteration += 1 / 3;
    }, scrambleDuration);
  };

  useEffect(() => {
    if (scrambleOnMount) {
      scramble();
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, scrambleOnMount]);

  // Occasional slow loop
  useEffect(() => {
    if (!isInView) return;
    
    const occasionalGlitch = setInterval(() => {
      scramble();
    }, 12000); // Glitch every 12 seconds instead of constantly
    
    return () => clearInterval(occasionalGlitch);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block group", className)}
      onMouseEnter={() => {
        if (!isGlitching) scramble();
      }}
    >
      {/* Base Text */}
      <span className="relative z-10">{displayText}</span>

      {/* Very Subtle Glitch Layers for Chromatic Aberration */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-[-1px] z-0 text-[#ee6c36] opacity-30 mix-blend-screen"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [-1, 1, 0], opacity: [0, 0.4, 0] }}
            transition={{ duration: 0.2, repeat: 2, repeatType: "mirror" }}
            aria-hidden="true"
          >
            {displayText}
          </motion.span>
          <motion.span
            className="absolute top-0 left-[1px] z-0 text-blue-400 opacity-20 mix-blend-screen"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: [1, -1, 0], opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.2, repeat: 2, repeatType: "mirror", delay: 0.05 }}
            aria-hidden="true"
          >
            {displayText}
          </motion.span>
        </>
      )}
    </div>
  );
}
