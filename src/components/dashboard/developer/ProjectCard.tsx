import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign } from 'lucide-react';
import { fadeIn } from '../../animations/variants';

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  budget: string;
  deadline: string;
}

export const ProjectCard = ({ title, description, skills, budget, deadline }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign className="h-4 w-4" />
          <span>{budget}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{deadline}</span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 bg-[#4A90E2] text-white py-2 rounded-lg font-medium hover:bg-[#4A90E2]/90 transition-colors"
      >
        Apply Now
      </motion.button>
    </motion.div>
  );
};