import React from 'react';
import { Sparkles, Heart, Star, Rocket, Clock } from 'lucide-react';
import { Card } from './ui/card';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Star: Star,
  Rocket: Rocket,
};

const TimelineSection = ({ memories }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-3 bg-amber-100 rounded-full">
            <Clock className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Journey Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of wonderful memories and moments we've shared
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 via-orange-300 to-amber-300"></div>

          {memories.map((memory, index) => {
            const IconComponent = iconMap[memory.icon] || Sparkles;
            const isEven = index % 2 === 0;

            return (
              <div
                key={memory.id}
                className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <span className="text-2xl font-bold text-amber-600">{memory.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{memory.title}</h3>
                    <p className="text-gray-600">{memory.description}</p>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Empty Space for alternate layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
