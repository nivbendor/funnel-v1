import React from 'react';

interface AgeStepProps {
  age: string;
  setAge: (age: string) => void;
  onNext: () => void;
}

const AgeStep: React.FC<AgeStepProps> = ({ age, setAge, onNext }) => {
  const isValidAge = /^([2-8][0-9]|90)$/.test(age);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-primary">We almost have everything we need to get you affordable benefits</h1>
      <img src="/step3.png" alt="Age Visual" className="mb-4 w-64 h-64 object-cover" />
      <h2 className="text-xl mb-4">How old are you?</h2>
      <div className="group mb-4">
        <input
          required
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input"
          min="21"
          max="90"
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Age</label>
      </div>
      <button
        onClick={onNext}
        disabled={!isValidAge}
        className={`bg-primary text-white px-6 py-2 rounded transition-colors ${
          isValidAge ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default AgeStep;