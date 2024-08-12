import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import ZipCodeStep from './components/ZipCodeStep';
import AgeStep from './components/AgeStep';
import DependentsStep from './components/DependentsStep';

type Step = 'splash' | 'zipCode' | 'age' | 'dependents';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('splash');
  const [zipCode, setZipCode] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [dependents, setDependents] = useState<string[]>([]);

  const handleNext = () => {
    switch (currentStep) {
      case 'splash':
        setCurrentStep('zipCode');
        break;
      case 'zipCode':
        setCurrentStep('age');
        break;
      case 'age':
        setCurrentStep('dependents');
        break;
      case 'dependents':
        handleSubmit();
        break;
    }
  };

  const handleSubmit = () => {
    const eligibilityIndex = dependents.includes('Family') ? 4 :
      dependents.includes('+Children') ? 3 :
      dependents.includes('+Spouse') ? 2 : 1;
    
    const url = `https://nivbendor.github.io/john/?zipCode=${zipCode}&age=${age}&eligibility=${eligibilityIndex}`;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800 flex flex-col justify-center items-center p-4">
      <div className="w-full md:w-1/2 max-w-2xl">
        {currentStep === 'splash' && <SplashScreen onNext={handleNext} />}
        {currentStep === 'zipCode' && <ZipCodeStep zipCode={zipCode} setZipCode={setZipCode} onNext={handleNext} />}
        {currentStep === 'age' && <AgeStep age={age} setAge={setAge} onNext={handleNext} />}
        {currentStep === 'dependents' && <DependentsStep dependents={dependents} setDependents={setDependents} onNext={handleNext} />}
      </div>
    </div>
  );
};

export default App;