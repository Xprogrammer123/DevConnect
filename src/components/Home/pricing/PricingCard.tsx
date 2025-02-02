import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { scaleIn, fadeIn } from '../../animations/variants';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

export const PricingCard = ({ name, price, description, features, isPopular }: PricingCardProps) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl p-8 shadow-lg ${isPopular ? 'ring-2 ring-[#4A90E2]' : ''}`}
    >
      {isPopular && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#4A90E2] text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          Most Popular
        </motion.span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mt-4">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="mt-8 space-y-4"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={fadeIn}
            className="flex items-center gap-3"
          >
            <Check className={`h-5 w-5 ${feature.included ? 'text-[#4A90E2]' : 'text-gray-300'}`} />
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </motion.li>
        ))}
      </motion.ul>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-colors
          ${isPopular 
            ? 'bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};