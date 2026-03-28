"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10); 
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        ["A", "BUTTON"].includes(target.tagName) || 
        target.closest("button") || 
        target.closest("a")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  const cursorColor = "rgba(255, 255, 255, 1)"; 
  const glowColor = "rgba(236, 72, 153, 0.9)";   
  const glowColorSecondary = "rgba(236, 72, 153, 0.5)"; 

  return (
    <motion.div
      style={{
        translateX: x,
        translateY: y,
        backgroundColor: cursorColor, 
      }}
      className="hidden md:block fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-9999"
      
      animate={{
        boxShadow: isHovered 
          ? [
              `0 0 15px 5px ${glowColor}, 0 0 30px 10px ${glowColor}, 0 0 45px 15px ${glowColorSecondary}`,
              `0 0 20px 8px ${glowColor}, 0 0 40px 15px ${glowColor}, 0 0 60px 20px ${glowColorSecondary}`,
              `0 0 15px 5px ${glowColor}, 0 0 30px 10px ${glowColor}, 0 0 45px 15px ${glowColorSecondary}`
            ]
          : [
              `0 0 10px 2px ${glowColor}, 0 0 20px 4px ${glowColorSecondary}`,
              `0 0 15px 5px ${glowColor}, 0 0 30px 8px ${glowColorSecondary}`,
              `0 0 10px 2px ${glowColor}, 0 0 20px 4px ${glowColorSecondary}`
            ],
        
        scale: isHovered ? 1.5 : 1,
      }}
      
      transition={{
        boxShadow: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        },
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
    />
  );
};

export default CustomCursor;