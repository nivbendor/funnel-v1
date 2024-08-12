import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import ZipCodeStep from './components/ZipCodeStep';
import AgeStep from './benefits-funnel/src/components/AgeStep';
import DependentsStep from './benefits-funnel/src/components/DependentsStep';

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

  const handleBack = () => {
    switch (currentStep) {
      case 'zipCode':
        setCurrentStep('splash');
        break;
      case 'age':
        setCurrentStep('zipCode');
        break;
      case 'dependents':
        setCurrentStep('age');
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleNext();
      } else if (event.key === 'Backspace') {
        handleBack();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentStep, zipCode, age, dependents]);

  return (
    <div className="min-h-screen bg-white text-center flex flex-col justify-center items-center">
      {currentStep === 'splash' && <SplashScreen onNext={handleNext} />}
      {currentStep === 'zipCode' && <ZipCodeStep zipCode={zipCode} setZipCode={setZipCode} onNext={handleNext} />}
      {currentStep === 'age' && <AgeStep age={age} setAge={setAge} onNext={handleNext} />}
      {currentStep === 'dependents' && <DependentsStep dependents={dependents} setDependents={setDependents} onNext={handleNext} />}
    </div>
  );
};

export default App;