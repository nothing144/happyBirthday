import React from 'react';
import { Cake, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const CountdownTimer = ({ personName }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 p-3 bg-orange-100 rounded-full">
            <Calendar className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            It's Your Special Day! 🎉
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-white shadow-xl border-0">
          <div className="text-center">
            <Cake className="w-24 h-24 mx-auto mb-6 text-amber-600 animate-bounce" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Happy Birthday, {personName}! 🎂
            </h3>
            <p className="text-xl text-gray-600">
              Today is YOUR day to shine! ✨
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CountdownTimer;
