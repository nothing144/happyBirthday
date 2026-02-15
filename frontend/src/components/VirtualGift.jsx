import React, { useState } from 'react';
import { Gift, Sparkles, PartyPopper } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const VirtualGift = ({ giftData }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleReveal = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsRevealed(true);
      setIsShaking(false);
    }, 600);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 p-3 bg-pink-100 rounded-full">
            <Gift className="w-8 h-8 text-pink-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {giftData.title}
          </h2>
          <p className="text-lg text-gray-600">{giftData.message}</p>
        </div>

        <div className="flex justify-center">
          {!isRevealed ? (
            <div className="text-center">
              <div
                className={`relative inline-block cursor-pointer ${
                  isShaking ? 'animate-shake' : ''
                }`}
                onClick={handleReveal}
              >
                <div className="gift-box w-48 h-48 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-300 flex items-center justify-center relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-gradient-to-b from-yellow-300 to-yellow-400"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 bg-gradient-to-r from-yellow-300 to-yellow-400"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full"></div>
                  <Gift className="w-16 h-16 text-white z-10" />
                </div>
              </div>
              <p className="mt-6 text-gray-600 font-medium">Click the gift to reveal! 🎁</p>
            </div>
          ) : (
            <Card className="p-8 md:p-12 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 relative overflow-hidden animate-fade-in">
              {/* Celebration Animation */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float-up"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      fontSize: '24px',
                    }}
                  >
                    {['🎉', '🎊', '✨', '🎈', '🎁'][Math.floor(Math.random() * 5)]}
                  </div>
                ))}
              </div>

              <div className="relative z-10 text-center">
                <PartyPopper className="w-16 h-16 mx-auto mb-6 text-amber-600 animate-bounce" />
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {giftData.revealMessage}
                  </div>
                </div>
                <div className="mt-8 flex justify-center gap-2">
                  <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
                  <Sparkles className="w-8 h-8 text-orange-500 animate-pulse animation-delay-200" />
                  <Sparkles className="w-6 h-6 text-amber-500 animate-pulse animation-delay-400" />
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default VirtualGift;
