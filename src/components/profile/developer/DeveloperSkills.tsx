import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Book } from 'lucide-react';
import { fadeIn, staggerChildren } from '../../animations/variants';

const skills = {
  technical: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'],
  soft: ['Team Leadership', 'Project Management', 'Communication', 'Problem Solving'],
};

const experience = [
  {
    role: 'Senior Full Stack Developer',
    company: 'TechCorp',
    period: '2020 - Present',
    description: 'Led development of multiple high-traffic web applications using React and Node.js.',
  },
  {
    role: 'Full Stack Developer',
    company: 'StartupFlow',
    period: '2018 - 2020',
    description: 'Developed and maintained microservices architecture for e-commerce platform.',
  },
];

export const DeveloperSkills = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-[#4A90E2]" />
          <h3 className="text-lg font-semibold text-gray-900">Technical Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill) => (
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
          <Book className="h-5 w-5 text-[#4A90E2]" />
          <h3 className="text-lg font-semibold text-gray-900">Soft Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.soft.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="h-5 w-5 text-[#4A90E2]" />
          <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
        </div>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.company} className="border-l-2 border-gray-200 pl-4">
              <h4 className="text-lg font-medium text-gray-900">{job.role}</h4>
              <p className="text-[#4A90E2] font-medium">{job.company}</p>
              <p className="text-sm text-gray-500 mt-1">{job.period}</p>
              <p className="text-gray-600 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};