import React, { useState, useEffect } from 'react';
import { Cake, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const CountdownTimer = ({ birthDate, personName }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(birthDate);
      
      // Set to current year if date has passed
      const currentYear = now.getFullYear();
      targetDate.setFullYear(currentYear);
      
      // If birthday has passed this year, set to next year
      if (targetDate < now) {
        targetDate.setFullYear(currentYear + 1);
      }

      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isPast: false,
        });
      } else {
        // Birthday is today!
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-amber-400 to-orange-400 text-white rounded-lg p-4 md:p-6 shadow-lg min-w-[80px] md:min-w-[100px]">
        <div className="text-3xl md:text-5xl font-bold">{value.toString().padStart(2, '0')}</div>
      </div>
      <div className="text-gray-600 font-medium mt-2 text-sm md:text-base">{label}</div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 p-3 bg-orange-100 rounded-full">
            <Calendar className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {timeLeft.isPast ? "It's Your Special Day! 🎉" : "Counting Down to Your Special Day"}
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-white shadow-xl border-0">
          {timeLeft.isPast ? (
            <div className="text-center">
              <Cake className="w-24 h-24 mx-auto mb-6 text-amber-600 animate-bounce" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Happy Birthday, {personName}! 🎂
              </h3>
              <p className="text-xl text-gray-600">
                Today is YOUR day to shine! ✨
              </p>
            </div>
          ) : (
            <div>
              <div className="flex justify-center gap-4 md:gap-8 mb-8">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
              </div>
              <p className="text-center text-lg text-gray-600">
                Until {personName}'s next birthday celebration! 🎈
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default CountdownTimer;
