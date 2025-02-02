import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    name: 'David Chen',
    role: 'Senior Software Engineer',
    quote: 'DevConnect helped me find challenging projects that perfectly match my expertise. The platforms secure payment system gives me peace of mind.',
    company: 'Tech Innovators Inc.',
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    name: 'Sarah Williams',
    role: 'Product Manager',
    quote: 'Finding skilled developers has never been easier. The AI matching system saved us countless hours in the hiring process.',
    company: 'StartupFlow',
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    name: 'Michael Roberts',
    role: 'Frontend Developer',
    quote: 'The collaboration tools are fantastic. I can easily communicate with clients and manage multiple projects efficiently.',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied developers and clients who have found success on our platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};