
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold font-poppins text-gradient">
            Entrepreneur Framework
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#framework" className="font-medium hover:text-blue-600 transition-colors">
            Framework
          </a>
          <a href="#research" className="font-medium hover:text-blue-600 transition-colors">
            Research
          </a>
          <a href="#testimonials" className="font-medium hover:text-blue-600 transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="font-medium hover:text-blue-600 transition-colors">
            Contact
          </a>
          <Button className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#framework" className="font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Framework
            </a>
            <a href="#research" className="font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Research
            </a>
            <a href="#testimonials" className="font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
