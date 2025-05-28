import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const BrainAnimation: React.FC = () => {
  return (
    <div className="relative w-32 h-32">
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="bg-primary/20 rounded-full w-full h-full"></div>
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      >
        <div className="bg-primary/10 rounded-full w-full h-full"></div>
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Brain className="text-primary w-20 h-20" />
      </motion.div>
      
      {/* Neural connections */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${50 + 35 * Math.cos(2 * Math.PI * i / 8)}%`,
            top: `${50 + 35 * Math.sin(2 * Math.PI * i / 8)}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}
    </div>
  );
};

export default BrainAnimation;