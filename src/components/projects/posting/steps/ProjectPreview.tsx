import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign } from 'lucide-react';
import { fadeIn } from '../../../animations/variants';

interface ProjectPreviewProps {
  data: {
    title: string;
    description: string;
    category: string;
    skills: string[];
    budget: {
      min: number;
      max: number;
    };
    timeline: string;
    priority: string;
    files: File[];
  };
}

export const ProjectPreview = ({ data }: ProjectPreviewProps) => {
  return (
    <motion.div variants={fadeIn} className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h2>
        <span className="inline-block px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] rounded-full text-sm">
          {data.category}
        </span>

        <div className="mt-6">
          <h3 className="font-medium text-gray-900 mb-2">Description</h3>
          <p className="text-gray-600 whitespace-pre-wrap">{data.description}</p>
        </div>

        <div className="mt-6">
          <h3 className="font-medium text-gray-900 mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Budget Range</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="h-5 w-5" />
              <span>
                ${data.budget.min} - ${data.budget.max}
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">Timeline</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>{new Date(data.timeline).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {data.files.length > 0 && (
          <div className="mt-6">
            <h3 className="font-medium text-gray-900 mb-2">Attached Files</h3>
            <ul className="space-y-1">
              {data.files.map((file, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};