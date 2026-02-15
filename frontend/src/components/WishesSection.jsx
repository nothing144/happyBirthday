import React from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { Card } from './ui/card';

const WishesSection = ({ wishes }) => {
  return (
    <section id="wishes-section" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 p-3 bg-amber-100 rounded-full">
            <Heart className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {wishes.title}
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-white shadow-xl border-0 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-8">
                {wishes.mainMessage}
              </div>
              
              <div className="flex items-center justify-center gap-3 mt-8 pt-8 border-t border-amber-200">
                <Sparkles className="w-6 h-6 text-amber-500" />
                <p className="text-xl font-semibold text-amber-700 italic">
                  {wishes.closingNote}
                </p>
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
            </div>
          </div>
        </Card>

        {/* Decorative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <Gift className="w-10 h-10 mx-auto mb-3 text-amber-600" />
            <h3 className="font-semibold text-gray-800 mb-2">Endless Joy</h3>
            <p className="text-sm text-gray-600">May your day be filled with laughter and happiness</p>
          </Card>
          
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <Sparkles className="w-10 h-10 mx-auto mb-3 text-orange-600" />
            <h3 className="font-semibold text-gray-800 mb-2">Great Success</h3>
            <p className="text-sm text-gray-600">Wishing you achievement in all your endeavors</p>
          </Card>
          
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <Heart className="w-10 h-10 mx-auto mb-3 text-pink-600" />
            <h3 className="font-semibold text-gray-800 mb-2">Beautiful Memories</h3>
            <p className="text-sm text-gray-600">Creating moments you'll cherish forever</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
