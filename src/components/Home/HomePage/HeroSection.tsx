import React from 'react';
import { Navigation } from './Navigation';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export const HeroSection = () => {
  return (
    <div className="relative min-h-[99vh] bg-gradient-to-br from-[#4A90E2] to-[#764BA2] overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};