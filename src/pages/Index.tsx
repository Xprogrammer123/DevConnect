import React from 'react';
import { HeroSection } from '../components/Home/HomePage/HeroSection.tsx';
import { FeaturesSection } from '../components/Home/features/FeaturesSection.tsx';
import { ProcessSection } from '../components/Home/process/ProcessSection.tsx';
import { CTASection } from '../components/Home/cta/CTASection.tsx';
import { PricingSection } from '../components/Home/pricing/PricingSection.tsx';
import { TestimonialsSection } from '../components/Home/testimonials/TestimonialsSection.tsx';
import { Footer } from '../components/Home/footer/Footer.tsx';



export const Index = () => {
  return (
  <>
  <HeroSection/>
  <FeaturesSection/>
  <ProcessSection/>
 
  <PricingSection/>
  <TestimonialsSection/>
  <CTASection/>
  <Footer/>
  
  
  
  </>
   
  );
};

