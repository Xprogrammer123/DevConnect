import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { fadeIn, staggerChildren } from '../../animations/variants';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application with team collaboration features.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
    technologies: ['React', 'Firebase', 'Material-UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
];

export const DeveloperPortfolio = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="aspect-video relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#4A90E2] text-white rounded-lg"
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                <Github className="h-4 w-4" />
                View Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};