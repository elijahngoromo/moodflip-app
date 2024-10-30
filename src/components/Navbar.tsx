import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 text-white">
                <GraduationCap className="h-8 w-8" />
                <span className="font-bold text-xl">Prince Dan Academy</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#about" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md font-medium">About</a>
              <a href="#academics" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md font-medium">Academics</a>
              <a href="#admissions" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md font-medium">Admissions</a>
              <a href="#facilities" className="text-white hover:bg-blue-800 px-3 py-2 rounded-md font-medium">Facilities</a>
              <a href="#contact" className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900">
            <a href="#home" className="text-white block px-3 py-2 rounded-md font-medium hover:bg-blue-800">Home</a>
            <a href="#about" className="text-white block px-3 py-2 rounded-md font-medium hover:bg-blue-800">About</a>
            <a href="#academics" className="text-white block px-3 py-2 rounded-md font-medium hover:bg-blue-800">Academics</a>
            <a href="#admissions" className="text-white block px-3 py-2 rounded-md font-medium hover:bg-blue-800">Admissions</a>
            <a href="#facilities" className="text-white block px-3 py-2 rounded-md font-medium hover:bg-blue-800">Facilities</a>
            <a href="#contact" className="bg-blue-700 text-white block px-3 py-2 rounded-md font-medium hover:bg-blue-600">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}