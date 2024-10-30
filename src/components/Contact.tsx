import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to answer any questions you may have about our programs,
            admissions process, or general inquiries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+234 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@princedanacademy.edu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Education Drive, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}