import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      {/* Floating Circles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-orange-primary/30 blur-3xl mix-blend-screen"
          style={{
            width: Math.random() * 150 + 100,
            height: Math.random() * 150 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 80 - 40],
            x: [0, Math.random() * 80 - 40],
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating Dots */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full bg-orange-secondary/40 mix-blend-screen"
          style={{
            width: Math.random() * 15 + 8,
            height: Math.random() * 15 + 8,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -250 - 150],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 via-transparent to-orange-secondary/5"></div>
    </div>
  );
}
