import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['locations', 'features', 'services' , 'itinerary' , 'testimonials'];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'
          : 'bg-transparent backdrop-blur-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Home Link */}
          <a 
            href="/" 
            className="text-2xl font-bold hover:opacity-75 transition-opacity duration-150 text-black"
          >
            Logo
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-black hover:opacity-75 transition-opacity duration-150"
              >
                {item}
              </a>
            ))}
            <button
              className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition-all duration-150"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:opacity-75 text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-2">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-black hover:opacity-75 transition-opacity duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100 transition-all duration-150"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;