import React from 'react';
import { PricingCard } from './PricingCard';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      { text: 'Up to 3 active projects', included: true },
      { text: 'Basic collaboration tools', included: true },
      { text: 'Community support', included: true },
      { text: 'Priority support', included: false },
      { text: 'Custom contracts', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '$49',
    description: 'Best for growing businesses',
    features: [
      { text: 'Unlimited active projects', included: true },
      { text: 'Advanced collaboration tools', included: true },
      { text: 'Priority support', included: true },
      { text: 'Custom contracts', included: true },
      { text: 'API access', included: false },
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'For large organizations',
    features: [
      { text: 'Unlimited everything', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'Custom integration', included: true },
      { text: 'API access', included: true },
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};