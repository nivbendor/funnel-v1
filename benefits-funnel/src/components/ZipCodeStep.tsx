import React from 'react';

interface ZipCodeStepProps {
  zipCode: string;
  setZipCode: (zipCode: string) => void;
  onNext: () => void;
}

const ZipCodeStep: React.FC<ZipCodeStepProps> = ({ zipCode, setZipCode, onNext }) => {
  const isValidZipCode = /^\d{5}$/.test(zipCode);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary text-center">Let's start with the hardest question</h1>
      <img src="/step1.png" alt="Zip Code Visual" className="mb-4 w-32 h-32 md:w-48 md:h-48 object-cover" />
      <h2 className="text-lg md:text-xl mb-4 text-center">What's your zip code?</h2>
      <div className="group mb-4 w-full max-w-xs">
        <input
          required
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="input w-full"
          maxLength={5}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Zip Code</label>
      </div>
      <button
        onClick={onNext}
        disabled={!isValidZipCode}
        className={`bg-primary text-white px-6 py-2 rounded transition-colors ${
          isValidZipCode ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default ZipCodeStep;