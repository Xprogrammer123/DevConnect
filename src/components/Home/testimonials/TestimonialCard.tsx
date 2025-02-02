import React from 'react';

export const TestimonialCard = ({ image, name, role, quote, company }) => {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Avatar */}
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
          {company && <p className="text-sm text-gray-400">{company}</p>}
        </div>
      </div>
      {/* Testimonial */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed italic">
        "{quote}"
      </p>
    </div>
  );
};
