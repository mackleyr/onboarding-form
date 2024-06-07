import { useState } from 'react';
import Header from '../components/Header';
import HeroText from '../components/HeroText';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';

export default function SelectPhoto() {
  const [photo, setPhoto] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setIsComplete(!!file);
  };

  const handleImageClick = () => {
    document.getElementById('photoInput').click();
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen px-4 pt-4 pb-8 relative">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        <HeroText>Add a profile photo</HeroText>
        <input
          id="photoInput"
          type="file"
          onChange={handlePhotoChange}
          className="hidden"
        />
        <img
          src={photo ? URL.createObjectURL(photo) : "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"}
          alt="Profile"
          className="w-36 h-36 rounded-full border-2 border-white cursor-pointer mt-4"
          onClick={handleImageClick}
        />
      </main>
      <div className="absolute bottom-20 w-full text-center flex flex-col items-center">
        <CTAButton isComplete={isComplete} next="/complete">
          Next
        </CTAButton>
        <Footer />
      </div>
    </div>
  );
}
