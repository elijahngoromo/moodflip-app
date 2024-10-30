import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="w-full h-full object-cover"
          alt="School campus"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Welcome to Prince Dan Academy</h1>
          <p className="text-xl mb-8">Nurturing Excellence, Building Character, Shaping Future Leaders</p>
          <div className="flex gap-4">
            <a href="#admissions" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
              Apply Now <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#about" className="border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}