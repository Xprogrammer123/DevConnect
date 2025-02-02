import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 10 },
};

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="flex flex-col items-start gap-4">
        <motion.div
          className="p-3 bg-blue-50 rounded-lg"
          variants={iconVariants}
          whileHover="hover"
        >
          <Icon className="h-6 w-6 text-[#4A90E2]" />
        </motion.div>
        <motion.h3
          className="text-xl font-semibold text-gray-900"
          whileHover={{ color: '#4A90E2' }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
