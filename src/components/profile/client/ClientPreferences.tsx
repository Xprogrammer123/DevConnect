import React from 'react';
import { motion } from 'framer-motion';
import { Code2, DollarSign, Clock, Globe } from 'lucide-react';
import { fadeIn, staggerChildren } from '../../animations/variants';

const preferences = {
  skills: ['React', 'Node.js', 'Python', 'AWS', 'Mobile Development'],
  budget: {
    hourly: '$50 - $100',
    project: '$5,000 - $50,000',
  },
  availability: ['Full-time', 'Contract', 'Project-based'],
  location: ['Remote', 'US-based', 'European Time Zones'],
};

export const ClientPreferences = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="h-5 w-5 text-[#4A90E2]" />
          <h3 className="text-lg font-semibold text-gray-900">Required Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {preferences.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5 text-[#4A90E2]" />
          <h3 className="text-lg font-semibold text-gray-900">Budget Range</h3>
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700">Hourly Rate</p>
            <p className="text-gray-600">{preferences.budget.hourly}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Project Budget</p>
            <p className="text-gray-600">{preferences.budget.project}</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-[#4A90E2]" />
          <h3 className="text-lg font-semibold text-gray-900">Preferred Availability</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {preferences.availability.map((type) => (
            <span
              key={type}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {type}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-5 w-5 text-[#4A90E2]" />
          <h3 className="text-lg font-semibold text-gray-900">Location Preferences</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {preferences.location.map((location) => (
            <span
              key={location}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {location}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};