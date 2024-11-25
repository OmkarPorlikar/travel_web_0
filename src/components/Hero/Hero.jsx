
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(0);

  const activities = [
    {
      id: "01",
      title: "Trekking",
      description: "Climbing the tallest mountain in Europe!",
      imageUrl: "/assest/sunset_mountains.jpg",
    },
    {
      id: "02",
      title: "Rafting",
      description: "Let's meet the wildest river and raft on these!",
      imageUrl: "/assest/buddha.jpg",
    },
    {
      id: "03",
      title: "Windsurfing",
      description: "Didn't see the tallest wave on a rainy day?",
      imageUrl: "/assest/people.jpeg",
    },
  ];

  // Auto-play carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % activities.length);
      setSelectedActivity((prevSlide) => (prevSlide + 1) % activities.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const handleActivityClick = (index) => {
    setSelectedActivity(index);
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden" id="hero">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key="design4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="relative h-full w-full bg-gray-800"
          >
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Background Image */}
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent">
                  {/* Text Content */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-16 text-white">
                    <motion.h2
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="font-bold font-borel text-4xl"
                    >
                      {activity.title}
                    </motion.h2>
                    <motion.p
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="mt-4 text-lg font-poppins font-thin"
                    >
                      {activity.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Activities Tab */}
      <div className="absolute right-0 bottom-0 m-8">
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-l-2xl shadow-lg max-w-xs">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white mb-2">
              What Excites You Most?
            </h2>
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
          <div>
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`flex items-center gap-2 p-4 px-8 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedActivity === index ? "bg-white/10" : "bg-transparent"
                }`}
                onClick={() => handleActivityClick(index)}
              >
                <div className="relative">
                  <span className="absolute -left-6 -top-1 text-sm text-white/70">
                    {activity.id}
                  </span>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={activity.imageUrl}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-base text-white">
                    {activity.title}
                  </h3>
                  <p className="text-white/80 text-xs">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {activities.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
