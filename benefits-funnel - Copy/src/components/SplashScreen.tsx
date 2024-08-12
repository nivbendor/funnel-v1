import React, { useEffect } from 'react';

interface SplashScreenProps {
  onNext: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onNext }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Benefits in a box</h1>
      <div className="mb-4">
        <img 
          src="/splashscreen_animation.gif" 
          alt="Benefits animation" 
          className="w-48 h-48 md:w-64 md:h-64 object-cover"
        />
      </div>
      <h2 className="text-xl md:text-2xl mb-8">Enterprise level employee benefits</h2>
    </div>
  );
};

export default SplashScreen;