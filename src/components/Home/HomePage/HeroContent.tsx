import React from 'react';
import { CTAButtons } from './CTAButtons';

export const HeroContent = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        Revolutionizing Collaboration Between Developers and Clients
      </h1>
      <p className="text-xl text-white/90 leading-relaxed">
        Find the perfect match for your projects with our innovative platform that combines talent discovery, secure collaboration, and seamless payment solutions.
      </p>
      <CTAButtons />
    </div>
  );
};