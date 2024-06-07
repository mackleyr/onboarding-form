import { useState } from 'react';
import Header from '../components/Header';
import HeroText from '../components/HeroText';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';

export default function Home() {
  const [isComplete, setIsComplete] = useState(true);

  return (
    <div className="flex flex-col items-center justify-between h-screen px-4 pt-4 pb-8">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full">
       <HeroText>Welcome to<br /> Friends & Family</HeroText>
      </main>
      <div className="w-full">
        <CTAButton isComplete={isComplete} next="/phone-number">
          Get Started
        </CTAButton>
        <Footer />
      </div>
    </div>
  );
}
