import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { fadeIn, staggerChildren } from '../../animations/variants';

const footerSections = [
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Press', href: '#' },
    ],
  },
  // ... rest of the sections remain the same
];

export const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
        >
          <motion.div variants={fadeIn}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <Code2 className="h-8 w-8 text-[#4A90E2]" />
              <span className="text-2xl font-bold text-gray-900">DevConnect</span>
            </motion.div>
            <p className="text-gray-600 max-w-md">
              Connecting talented developers with amazing projects worldwide. Join our community and transform the way you work.
            </p>
          </motion.div>
          <FooterLinks sections={footerSections} />
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2024 DevConnect. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, color: '#4A90E2' }}
                className="text-gray-400 hover:text-gray-600"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};