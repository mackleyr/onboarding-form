import { useState } from 'react';
import Header from '../components/Header';
import HeroText from '../components/HeroText';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';

export default function FirstName() {
  const [firstName, setFirstName] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleFirstNameChange = (e) => {
    const name = e.target.value;
    setFirstName(name);
    setIsComplete(name.trim().length > 0);
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen px-4 pt-4 pb-8">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <HeroText>Add your first name</HeroText>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="First name"
          className="text-white text-3xl placeholder-white/30 text-center w-80 bg-transparent border-none outline-none"
        />
      </main>
      <div className="w-full">
        <CTAButton isComplete={isComplete} next="/last-name">
          Next
        </CTAButton>
        <Footer />
      </div>
    </div>
  );
}
