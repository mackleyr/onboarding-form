import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroText from '../components/HeroText';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';

export default function VerifyPhone() {
  const [code, setCode] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const phoneNumber = '(123) 456-7890'; // Replace with the actual phone number

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleCodeChange = (e) => {
    const code = e.target.value;
    setCode(code);
    setIsComplete(code.length === 6); // Adjust according to your formatting
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen px-4 pt-4 pb-8">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <HeroText>Verify your<br /> phone number</HeroText>
        <input
          type="text"
          value={code}
          onChange={handleCodeChange}
          placeholder="Enter code"
          className="text-white text-3xl placeholder-white/30 text-center w-80 bg-transparent border-none outline-none"
        />
        <p className="text-white text-sm mt-4">
          Sent to {phoneNumber}. Resend in {countdown}s.
        </p>
      </main>
      <div className="w-full">
        <CTAButton isComplete={isComplete} next="/first-name">
          Next
        </CTAButton>
        <Footer />
      </div>
    </div>
  );
}
