import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, User, ExternalLink } from 'lucide-react';
import { fadeIn } from '../../animations/variants';

interface ActiveProjectCardProps {
  title: string;
  status: 'In Progress' | 'Pending Review' | 'Completed';
  developer: string;
  deadline: string;
  budget: string;
  progress: number;
}

export const ActiveProjectCard = ({
  title,
  status,
  developer,
  deadline,
  budget,
  progress,
}: ActiveProjectCardProps) => {
  const statusColors = {
    'In Progress': 'bg-blue-100 text-blue-800',
    'Pending Review': 'bg-yellow-100 text-yellow-800',
    'Completed': 'bg-green-100 text-green-800',
  };

  return (
    <motion.div
      variants={fadeIn}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-sm mt-2  ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-gray-600"
        >
          <ExternalLink className="h-5 w-5" />
        </motion.button>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <User className="h-4 w-4" />
          <span>{developer}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{deadline}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>{budget}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-900">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-[#4A90E2] h-2 rounded-full"
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};