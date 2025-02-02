import React from 'react';
import { ProjectCard } from '../../projects/browsing/ProjectCard.tsx';

export const ClientProjects = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Projects</h2>
      <ProjectCard />
    </section>
  );
};
