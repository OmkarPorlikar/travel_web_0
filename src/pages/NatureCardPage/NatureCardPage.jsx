



import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NatureCardPage = ({ animationStyle = 3 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const destinations = [
    {
      id: 1,
      location: "Tanzania",
      imageUrl: "/assest/sunset_mountains.jpg",
    },
    {
      id: 2,
      location: "Colombia",
      imageUrl: "/assest/people.jpeg",
    },
    {
      id: 3,
      location: "Bahrain",
      imageUrl: "/assest/buddha.jpg",
    },
    {
      id: 4,
      location: "Mauritius",
      imageUrl: "/assest/valley.jpg",
    }
  ];

  // Animation Variants
  const animations = {
   
    3: {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          }
        }
      },
      item: {
        hidden: { x: -100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }
      }
    },
    4: {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          }
        }
      },
      item: {
        hidden: { 
          scale: 0.8,
          opacity: 0,
          filter: "blur(10px)"
        },
        visible: {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.7,
            ease: "easeOut"
          }
        }
      }
    },
   
  };

  const selectedAnimation = animations[animationStyle];

  return (
    <section className="container mx-auto px-4 py-16" ref={ref} id='natureCard'>
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Discover the touch of Nature
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
        variants={selectedAnimation.container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {destinations.map((destination, index) => (
          <motion.div 
            key={destination.id}
            variants={selectedAnimation.item}
          

              // className={`relative group cursor-pointer transition-transform duration-300 hover:scale-105
//               ${index % 2 === 0 ? 'md:translate-y-12' : ''}`}
          >


            <div 
            
            className={`relative group cursor-pointer transition-transform duration-300 hover:scale-105
              h-[300px] w-[250px] rounded-3xl overflow-hidden justify-self-center
              ${index % 2 === 0 ? 'md:translate-y-12' : ''}`}
            >
              <img
                src={destination.imageUrl}
                alt={destination.location}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full flex items-center gap-2">
                <svg 
                  className="w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm font-medium">{destination.location}</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NatureCardPage;