import React from 'react';
import { motion } from 'framer-motion';
import { ActiveProjectCard } from './ActiveProjectCard';
import { staggerChildren } from '../../animations/variants';

interface Project {
  id: number;
  title: string;
  status: string;
  developer: string;
  deadline: string;
  budget: string;
  progress: number;
}

interface ActiveProjectListProps {
  projects: Project[];
}

export const ActiveProjectList = ({ projects }: ActiveProjectListProps) => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {projects.map((project) => (
        <ActiveProjectCard key={project.id} {...project} />
      ))}
    </motion.div>
  );
};