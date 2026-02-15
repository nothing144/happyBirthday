import React from 'react';
import { Heart, Cake, Sparkles } from 'lucide-react';

const Footer = ({ personName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
            <Cake className="w-8 h-8 text-amber-300" />
            <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Celebrating {personName}
          </h3>
          
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            May your special day be filled with love, laughter, and unforgettable moments. 
            Here's to another year of amazing adventures and cherished memories!
          </p>
          
          <div className="flex justify-center items-center gap-2 text-amber-200">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" fill="currentColor" />
            <span>for an amazing friend</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-amber-700">
            <p className="text-amber-300 text-sm">
              © {currentYear} • A Special Birthday Celebration
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
