import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';

export default function Complete() {
  const [isComplete, setIsComplete] = useState(true);
  const [randomNumber, setRandomNumber] = useState(6);

  useEffect(() => {
    const generateRandomNumber = () => Math.floor(Math.random() * 7) + 4;
    setRandomNumber(generateRandomNumber());
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-screen px-4 pt-4 pb-8">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        <h1 className="text-4xl font-semibold text-white mb-4">Thank you!</h1>
        <p className="text-xl text-white mb-4">Refer-a-friend for a deal:</p>
        <div className="relative w-80 h-40 mb-4 bg-white rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/320x180"
            alt="Deal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="flex items-center mb-2">
              <img
                src="https://via.placeholder.com/50"
                alt="Friend"
                className="w-12 h-12 rounded-full border-2 border-white mr-"
              />
              <img
                src="https://via.placeholder.com/50"
                alt="Friend"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-2xl font-semibold">50% off</p>
            <p className="text-lg">next session</p>
          </div>
          <div className="absolute top-0 right-0 bg-red-500 text-white text-sm px-4 py-2 rounded-bottom">24h</div>
        </div>
      </main>
      <div className="w-full text-center flex flex-col items-center mb-0"> {/* Adjusted padding */}
        <p className="text-white text-sm mb-0">👇 {randomNumber} people just tapped this button 👇</p>
        <CTAButton isComplete={isComplete} next="/">
          Claim
        </CTAButton>
      </div>
      <Footer />
    </div>
  );
}
