import { useState } from 'react';
import Header from '../components/Header';
import HeroText from '../components/HeroText';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';

export default function PhoneNumber() {
  const [phone, setPhone] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneNumberChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
    setIsComplete(formattedPhoneNumber.length === 14); // Adjust according to your formatting
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen px-4 pt-4 pb-8">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <HeroText>Add your<br /> phone number</HeroText>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneNumberChange}
          placeholder="(###) ###-####"
          className="text-white text-3xl placeholder-white/30 text-center w-80 bg-transparent border-none outline-none"
        />
      </main>
      <div className="w-full">
        <CTAButton isComplete={isComplete} next="/verify-phone">
          Next
        </CTAButton>
        <Footer />
      </div>
    </div>
  );
}
