import React from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Academic Excellence",
      description: "Consistently high academic performance with outstanding results in national examinations."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers dedicated to student success."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Curriculum",
      description: "Balanced approach to academics, sports, and character development."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Individual Focus",
      description: "Personalized attention with small class sizes and mentoring programs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Prince Dan Academy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 1995, Prince Dan Academy has been a beacon of educational excellence,
            nurturing young minds and shaping future leaders through our commitment to
            holistic development and academic rigor.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}