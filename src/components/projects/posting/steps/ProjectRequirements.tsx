import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { fadeIn } from '../../../animations/variants';

const availableSkills = [
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'AWS',
  'Docker',
  'UI/UX Design',
  'Mobile Development',
];

interface ProjectRequirementsProps {
  data: {
    skills: string[];
    priority: string;
  };
  onChange: (data: Partial<typeof data>) => void;
}

export const ProjectRequirements = ({ data, onChange }: ProjectRequirementsProps) => {
  const handleAddSkill = (skill: string) => {
    if (!data.skills.includes(skill)) {
      onChange({ skills: [...data.skills, skill] });
    }
  };

  const handleRemoveSkill = (skill: string) => {
    onChange({ skills: data.skills.filter((s) => s !== skill) });
  };

  return (
    <motion.div variants={fadeIn} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Required Skills
        </label>
        <div className="flex flex-wrap gap-2 mb-4">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="hover:text-[#4A90E2]/80"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {availableSkills
            .filter((skill) => !data.skills.includes(skill))
            .map((skill) => (
              <button
                key={skill}
                onClick={() => handleAddSkill(skill)}
                className="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50"
              >
                {skill}
              </button>
            ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Priority
        </label>
        <div className="flex gap-4">
          {['low', 'medium', 'high'].map((priority) => (
            <label
              key={priority}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="priority"
                value={priority}
                checked={data.priority === priority}
                onChange={(e) => onChange({ priority: e.target.value })}
                className="text-[#4A90E2] focus:ring-[#4A90E2]"
              />
              <span className="capitalize">{priority}</span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  );
};