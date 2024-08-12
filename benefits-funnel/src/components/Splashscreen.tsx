import React from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onNext: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-[#2d5ff1]">Benefits in a box</h1>
      <motion.div
        animate={{
          x: ['-100%', '100%'],
          transition: { duration: 5, repeat: Infinity, ease: 'linear' },
        }}
        className="mb-4"
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            d="M50 10 L60 50 L50 90 L40 50 Z"
            fill="#2d5ff1"
          />
        </svg>
      </motion.div>
      <h2 className="text-2xl mb-8">Enterprise level employee benefits</h2>
      <button
        onClick={onNext}
        className="bg-[#2d5ff1] text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        START
      </button>
    </div>
  );
};

export default SplashScreen;