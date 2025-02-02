import React from 'react';

export const HeroImage = () => {
  return (
    <div className="hidden lg:block relative animate-fade-in">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
        alt="Developers collaborating on a project"
        className="rounded-lg shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-black/20 to-transparent"></div>
    </div>
  );
};