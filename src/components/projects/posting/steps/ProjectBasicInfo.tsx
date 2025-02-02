import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../animations/variants';

const categories = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Backend Development',
  'DevOps',
  'Data Science',
];

interface ProjectBasicInfoProps {
  data: {
    title: string;
    description: string;
    category: string;
  };
  onChange: (data: Partial<typeof data>) => void;
}

export const ProjectBasicInfo = ({ data, onChange }: ProjectBasicInfoProps) => {
  return (
    <motion.div variants={fadeIn} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Project Title
        </label>
        <input
          type="text"
          id="title"
          value={data.title}
          onChange={(e) => onChange({ title: e.target.value })}
          placeholder="e.g., E-commerce Website Development"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          value={data.category}
          onChange={(e) => onChange({ category: e.target.value })}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Project Description
        </label>
        <textarea
          id="description"
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
          rows={6}
          placeholder="Describe your project in detail..."
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
        />
      </div>
    </motion.div>
  );
};