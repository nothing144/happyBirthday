import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import BirthdayHero from './components/BirthdayHero';
import WishesSection from './components/WishesSection';
import VirtualGift from './components/VirtualGift';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';
import {
  birthdayPerson,
  heroImages,
  birthdayWishes,
  virtualGift,
} from './mockData';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio playback failed:', err);
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  useEffect(() => {
    // Note: In production, you would have an actual audio file
    // For now, this is just a placeholder
    // audioRef.current = new Audio('/path-to-birthday-song.mp3');
  }, []);

  return (
    <div className="App">
      <BirthdayHero
        personName={birthdayPerson.name}
        heroImage={heroImages[0]}
        onMusicToggle={toggleMusic}
        isMusicPlaying={isMusicPlaying}
      />
      
      <WishesSection wishes={birthdayWishes} />
      
      <CountdownTimer 
        birthDate={birthdayPerson.birthDate} 
        personName={birthdayPerson.name}
      />
      
      <VirtualGift giftData={virtualGift} />
      
      <Footer personName={birthdayPerson.name} />
    </div>
  );
}

export default App;
