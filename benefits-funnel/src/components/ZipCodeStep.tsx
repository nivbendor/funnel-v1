import React from 'react';

interface ZipCodeStepProps {
  zipCode: string;
  setZipCode: (zipCode: string) => void;
  onNext: () => void;
}

const ZipCodeStep: React.FC<ZipCodeStepProps> = ({ zipCode, setZipCode, onNext }) => {
  const isValidZipCode = /^\d{5}$/.test(zipCode);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-[#2d5ff1]">Let's start with the hardest question</h1>
      <img src="./public/img2.png" alt="Zip Code Visual" className="mb-4 w-64 h-64 object-cover" />
      <h2 className="text-xl mb-4">What's your zip code?</h2>
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        className="border-2 border-[#2d5ff1] rounded px-4 py-2 mb-4 w-64 text-center"
        placeholder="Enter zip code"
        maxLength={5}
      />
      <button
        onClick={onNext}
        disabled={!isValidZipCode}
        className={`bg-[#2d5ff1] text-white px-6 py-2 rounded transition-colors ${
          isValidZipCode ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default ZipCodeStep;