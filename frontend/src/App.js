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
  musicPlaylist,
} from './mockData';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

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
    // Initialize audio with the actual music file
    if (musicPlaylist.enabled && musicPlaylist.defaultTrack.url) {
      audioRef.current = new Audio(musicPlaylist.defaultTrack.url);
      audioRef.current.loop = true; // Loop the music
      audioRef.current.volume = 0.5; // Set volume to 50%
    }
    
    return () => {
      // Cleanup audio when component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
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
