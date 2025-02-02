import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, Linkedin, Mail } from 'lucide-react';
import { fadeIn } from '../../animations/variants';

export const DeveloperOverview = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">About Me</h3>
        <p className="text-gray-600 leading-relaxed">
          Senior Full Stack Developer with 8+ years of experience building scalable web applications. 
          Passionate about clean code, performance optimization, and creating exceptional user experiences.
          Specialized in React, Node.js, and cloud architecture.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact & Social</h3>
        <div className="space-y-3">
          {[
            { icon: Mail, label: 'david.chen@example.com', href: 'mailto:david.chen@example.com' },
            { icon: Globe, label: 'davidchen.dev', href: 'https://davidchen.dev' },
            { icon: Github, label: 'github.com/davidchen', href: 'https://github.com/davidchen' },
            { icon: Linkedin, label: 'linkedin.com/in/davidchen', href: 'https://linkedin.com/in/davidchen' },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-[#4A90E2] transition-colors"
              whileHover={{ x: 4 }}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};