import React from 'react';

export default function Academics() {
  const programs = [
    {
      level: "Primary School",
      grades: "Grades 1-6",
      description: "Foundation years focusing on core subjects and character development",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      level: "Junior Secondary",
      grades: "Grades 7-9",
      description: "Comprehensive curriculum with emphasis on academic excellence",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      level: "Senior Secondary",
      grades: "Grades 10-12",
      description: "Advanced studies preparing students for university education",
      image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive academic programs are designed to challenge and inspire
            students at every level of their educational journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={program.image} alt={program.level} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.level}</h3>
                <p className="text-blue-600 font-medium mb-3">{program.grades}</p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}