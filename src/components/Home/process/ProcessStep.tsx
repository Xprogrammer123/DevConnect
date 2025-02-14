import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
  reversed?: boolean;
}

export const ProcessStep = ({ icon: Icon, title, description, imageUrl, reversed}: ProcessStepProps) => {
  const containerVariants = {
    hidden: { opacity: 0, x: reversed ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center gap-8 ${
        reversed ? 'md:flex-row-reverse' : ''
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-xl shadow-lg w-full"
        />
      </motion.div>
      <motion.div className="md:w-1/2 space-y-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <div className="p-3 bg-blue-100 rounded-full">
            <Icon className="h-6 w-6 text-blue-500"/>
          </div>
          
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};
