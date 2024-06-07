"use client";

import { useState, ChangeEvent } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const EnterPhoneForm = ({ setPhoneNumber }) => {
  const [phone, setPhone] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setPhone(number);
    setIsComplete(number.length === 14); // Adjust according to your formatting
  };

  const handleNextClick = () => {
    if (isComplete) {
      setPhoneNumber(phone);
      router.push('/verify-phone');
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-blue-500">
      <div className="flex justify-between items-center w-full px-8 mt-8">
        <ChevronLeftIcon className="w-8 h-8 text-white cursor-pointer" onClick={() => router.back()} />
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="rounded-full border-2 border-white w-12 h-12"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-white mb-4 text-center">
          Add your<br /> phone number
        </h1>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneNumberChange}
          placeholder="(###) ###-####"
          className="text-white text-3xl placeholder-white/30 text-center w-80 bg-transparent border-none outline-none"
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <button
          onClick={handleNextClick}
          className={`mt-8 w-72 h-16 rounded-full ${
            isComplete ? "bg-white text-black" : "bg-white/30 text-black/30"
          } text-xl font-semibold`}
          disabled={!isComplete}
        >
          Next
        </button>
        <p className="text-white text-xs mt-4">powered by Friends & Family</p>
      </div>
    </div>
  );
};

export default EnterPhoneForm;
