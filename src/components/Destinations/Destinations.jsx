


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapIcon, ClockIcon, LocationMarkerIcon,   SparklesIcon } from '@heroicons/react/solid';
import van_life from '../utils/van_life.jpg'
const Destinations = () => {
  const [animationState, setAnimationState] = useState({
    distance: false,
    duration: false,
    difficulty: false,
  });

  const destinations = [
    {
      title: "Himalayan Adventure: Chandigarh to Chandratal",
      duration: "6 Days",
      distance: "1230 km",
      highlights: ["Pandoh Dam", "Baralacha Pass", "Chandratal Lake", "Phugtal Gompa"],
      difficulty: "Moderate",
      startPoint: "Chandigarh",
      endPoint: "Chandratal",
      days: [
        {
          day: 1,
          description: "Chandigarh to Manali (250km) 6-7 hours",
          highlights: ["Pandoh Dam", "River rafting point", "Shawl factory Kullu"],
        },
        {
          day: 2,
          description: "Manali to Jispa (180km) 6-7 hours",
          highlights: ["Tandi", "Mrikula Devi Temple", "Trilokinat", "Keylong", "Jispa"],
        },
        {
          day: 3,
          description: "Jispa to Purne (180km) 7-8 hours",
          highlights: ["Baralacha La", "Suraj Tal", "Gumbok Rangan", "Purne"],
        },
        {
          day: 4,
          description: "Purne to Sissu (150km) 5-6 hours",
          highlights: ["Phugtal Gompa", "Sissu Waterfall"],
        },
        {
          day: 5,
          description: "Sissu to Chandratal (90km) 4-5 hours",
          highlights: ["Koksar", "Chandratal Lake"],
        },
        {
          day: 6,
          description: "Chandratal to Chandigarh drop (380km) 10 hours",
          highlights: [],
        },
      ],
    },
  ];

  const handleClick = (metric) => {
    setAnimationState((prev) => ({ ...prev, [metric]: !prev[metric] }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {destinations.map((destination, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="babu w-full shadow-2xl overflow-hidden mb-8 p-8"
        >
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-6">{destination.title}</h2>

          {/* Trip Summary */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <motion.div
              className="bg-blue-100 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => handleClick('distance')}
              animate={{
                scale: animationState.distance ? 1.05 : 1,
                rotate: animationState.distance ? 9 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <MapIcon className="h-8 w-8 mx-auto text-blue-600 mb-1" />
              <span className="block">Distance</span>
              <strong>{destination.distance}</strong>
            </motion.div>

            <motion.div
              className="bg-green-100 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => handleClick('duration')}
              animate={{
                scale: animationState.duration ? 1.1 : 1,
                x: animationState.duration ? 10 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <ClockIcon className="h-8 w-8 mx-auto text-green-600 mb-1" />
              <span className="block">Duration</span>
              <strong>{destination.duration}</strong>
            </motion.div>

            <motion.div
              className="bg-purple-100 p-4 rounded-lg text-center cursor-pointer"
              onClick={() => handleClick('difficulty')}
              animate={{
                scale: animationState.difficulty ? 1.3 : 1,
                y: animationState.difficulty ? -10 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <LocationMarkerIcon className="h-8 w-8 mx-auto text-purple-600 mb-1" />
              <span className="block">Difficulty</span>
              <strong>{destination.difficulty}</strong>
            </motion.div>
          </div>

          {/* Detailed Itinerary */}
<div 
  className="grid grid-cols-2 gap-4 p-4 rounded-xl  relative"
>
  {/* Optional Overlay for Better Readability */}
  <div className="absolute inset-0 bg-white rounded-xl"></div>

  {destination.days.map((day) => (
    <motion.div
      key={day.day}
      whileHover={{ scale: 1.04 }}
      className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border-l-4 border-blue-500 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${van_life})` }}

    >
      <h3 className="text-xl font-bold text-white mb-1">Day {day.day}</h3>
      <p className="text-white mb-1">{day.description}</p>

      {/* Highlights */}
      {day.highlights.length > 0 && (
        <>
          <h4 className="text-lg font-semibold text-blue-600 mb-1">Highlights</h4>
          <div className="grid grid-cols-3 grid-rows-2 gap-1">
            {day.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center">
                < SparklesIcon className="h-4 w-4 mr-2 text-yellow-500" />
                <span className="text-sm text-white">{highlight}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  ))}
</div>



        </motion.div>
      ))}
    </div>
  );
};

export default Destinations;
