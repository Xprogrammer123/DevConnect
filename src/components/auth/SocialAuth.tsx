import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { fadeIn, staggerChildren } from '../animations/variants';

const socialButtons = [
  {
    icon: Github,
    label: 'Continue with GitHub',
    bgColor: 'bg-gray-900 hover:bg-gray-800',
  },
  {
    icon: Linkedin,
    label: 'Continue with LinkedIn',
    bgColor: 'bg-[#0A66C2] hover:bg-[#004182]',
  },
];

export const SocialAuth = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      {socialButtons.map(({ icon: Icon, label, bgColor }) => (
        <motion.button
          key={label}
          variants={fadeIn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full ${bgColor} text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors`}
        >
          <Icon className="h-5 w-5" />
          {label}
        </motion.button>
      ))}
    </motion.div>
  );
};