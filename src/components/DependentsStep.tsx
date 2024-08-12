import React from 'react';

interface DependentsStepProps {
  dependents: string[];
  setDependents: (dependents: string[]) => void;
  onNext: () => void;
}

const DependentsStep: React.FC<DependentsStepProps> = ({ dependents, setDependents, onNext }) => {
  const options = ['Myself', '+Spouse', '+Children', 'Family'];

  const handleSelection = (option: string) => {
    if (option === 'Family') {
      setDependents(['Family']);
    } else if (option === 'Myself') {
      setDependents(['Myself']);
    } else {
      const newDependents = dependents.includes(option)
        ? dependents.filter(dep => dep !== option)
        : [...dependents.filter(dep => dep !== 'Family' && dep !== 'Myself'), option];
      setDependents(newDependents);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary text-center">One last question before we can generate a personalized offer</h1>
      <img src="/step2.png" alt="Dependents Visual" className="mb-4 w-32 h-32 md:w-48 md:h-48 object-cover" />
      <h2 className="text-lg md:text-xl mb-4 text-center">Who would you like to cover?</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelection(option)}
            className={`px-4 py-2 rounded ${
              dependents.includes(option) ? 'bg-primary text-white' : 'bg-white text-primary border-2 border-primary'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={onNext}
        disabled={dependents.length === 0}
        className={`bg-primary text-white px-6 py-2 rounded transition-colors ${
          dependents.length > 0 ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Let's Cake
      </button>
    </div>
  );
};

export default DependentsStep;