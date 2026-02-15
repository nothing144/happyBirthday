import React, { useEffect, useState } from 'react';
import { Sparkles, Music, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

const BirthdayHero = ({ personName, heroImage, onMusicToggle, isMusicPlaying }) => {
  const [confetti, setConfetti] = useState([]);
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Generate confetti
    const confettiItems = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 3 + Math.random() * 2,
    }));
    setConfetti(confettiItems);

    // Generate balloons
    const balloonItems = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 10 + (i * 10),
      animationDelay: i * 0.5,
      color: ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#00d2d3'][i % 6],
    }));
    setBalloons(balloonItems);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
       className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-amber-950/60"></div>
      </div>

      {/* Confetti Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((item) => (
          <div
            key={item.id}
            className="confetti-piece"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.animationDelay}s`,
              animationDuration: `${item.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              left: `${balloon.left}%`,
              animationDelay: `${balloon.animationDelay}s`,
              backgroundColor: balloon.color,
            }}
          />
        ))}
      </div>

      {/* Music Control Button */}
      <Button
        onClick={onMusicToggle}
        className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30"
        size="icon"
      >
        {isMusicPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </Button>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 animate-bounce-slow">
          <Sparkles className="w-16 h-16 mx-auto text-amber-300" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in-up">
          Happy Birthday
        </h1>
        
        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-pink-300 mb-8 animate-fade-in-up animation-delay-200">
          {personName}!
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto leading-relaxed">
          Today is all about celebrating you and the wonderful person you are!
        </p>
        
        <Button 
          onClick={() => {
            document.getElementById('wishes-section')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
          className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-6 text-lg font-semibold animate-fade-in-up animation-delay-600 shadow-lg hover:shadow-xl transition-all"
        >
          Explore Your Special Day
          <Sparkles className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayHero;
