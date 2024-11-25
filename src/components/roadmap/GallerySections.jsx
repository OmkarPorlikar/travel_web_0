

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import itineraryData from '../utils/itineraryData';  // Assuming itineraryData is an array of itinerary objects
import { useParams } from 'react-router-dom';
// Cinematic Modal with advanced animations
const CinematicModal = ({ image, isOpen, onClose, onNext, onPrev, totalImages, currentIndex }) => (
  console.log(image , "image cinema"),
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-7xl p-4"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            src={image}
            alt={image.alt}
            className="w-full h-[85vh] object-contain"
          />

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 bottom-0 flex justify-between items-center p-2 bg-gradient-to-t from-black/80 to-transparent"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={onPrev}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <span className="text-white">
                {currentIndex + 1} / {totalImages}
              </span>
              <button
                onClick={onNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Design 5: Floating Cards
const FloatingCards = ({ images, onImageClick }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px] p-6"
  >
    {images.map((image, index) => (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          delay: index * 0.2,
        }}
        whileHover={{
          y: -10,
          rotate: Math.random() * 3 - 1.5,
          transition: { duration: 0.2 },
        }}
        className="cursor-pointer"
        onClick={() => onImageClick(index)}
      >
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="relative">
            <img
              src={`${image}`}
              alt={` ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

// Main Gallery Component
const GallerySection = () => {
  const {id} = useParams()
  console.log(id , "the id is ")
  // Fetching the trip data (itinerary)
  const trip = itineraryData[id];  // Assuming only one trip for now, or you can loop over if multiple trips exist.

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(selectedImage , "selected images")
  const handleImageClick = (index) => {
    setSelectedImage({ index, images: trip.images });
    setModalOpen(true);
  };

  const handleNext = () => {
    setSelectedImage((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  };

  const handlePrev = () => {
    setSelectedImage((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
console.log(selectedImage?.images[selectedImage.index] , "index")
  return (
    <div className="w-full p-6">
  <h2 className="text-3xl font-extrabold text-gray-800 mb-4 mt-20 text-center">
  {trip.title}
</h2>
<p className="text-lg text-gray-600 mb-6 text-center">
  {trip.duration} &bull; {trip.distance}
</p>

      <FloatingCards images={trip.images} onImageClick={handleImageClick} />
      {selectedImage && (
        <CinematicModal
          image={selectedImage.images[selectedImage.index]}
          isOpen={modalOpen}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
          totalImages={selectedImage.images.length}
          currentIndex={selectedImage.index}
        />
      )}
    </div>
  );
};

export default GallerySection;
