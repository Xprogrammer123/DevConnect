import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { staggerChildren } from '../../animations/variants';

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  budget: string;
  deadline: string;
}

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </motion.div>
  );
};