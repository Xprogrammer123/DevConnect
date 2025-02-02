import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign } from 'lucide-react';
import { fadeIn } from '../../../animations/variants';

interface ProjectBudgetProps {
  data: {
    budget: {
      min: number;
      max: number;
    };
    timeline: string;
  };
  onChange: (data: Partial<typeof data>) => void;
}

export const ProjectBudget = ({ data, onChange }: ProjectBudgetProps) => {
  return (
    <motion.div variants={fadeIn} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Budget Range
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="number"
              value={data.budget.min}
              onChange={(e) =>
                onChange({
                  budget: { ...data.budget, min: parseInt(e.target.value) },
                })
              }
              placeholder="Minimum"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
            />
          </div>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="number"
              value={data.budget.max}
              onChange={(e) =>
                onChange({
                  budget: { ...data.budget, max: parseInt(e.target.value) },
                })
              }
              placeholder="Maximum"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Timeline
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            value={data.timeline}
            onChange={(e) => onChange({ timeline: e.target.value })}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
          />
        </div>
      </div>
    </motion.div>
  );
};