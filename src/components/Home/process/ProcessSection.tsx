import React from 'react';
import { FileText, Search, CreditCard } from 'lucide-react';
import { ProcessStep } from './ProcessStep';

const clientSteps = [
  {
    icon: FileText,
    title: 'Post Your Project',
    description: 'Share your project details, requirements, and expectations. Our smart system will help you create a comprehensive project brief.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80',
  },
  {
    icon: Search,
    title: 'Choose a Developer',
    description: 'Browse through matched developers or wait for applications. Review profiles, portfolios, and previous work to find your perfect match.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
  },
  {
    icon: CreditCard,
    title: 'Start and Pay Securely',
    description: 'Begin your project with confidence. Our secure payment system protects both parties and ensures smooth milestone-based payments.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your project up and running in three simple steps
          </p>
        </div>
        <div className="space-y-8">
          {clientSteps.map((step, index) => (
            <ProcessStep
              key={step.title}
              {...step}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};