import React from 'react';
import { ProjectList } from '../components/projects/browsing/ProjectList';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';
import { ViewToggle } from '../components/projects/browsing/ViewToggle'

export const BrowseProjects = () => {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = React.useState('recent');
  const [filters, setFilters] = React.useState({
    skills: [],
    budget: { min: 0, max: 10000 },
    deadline: null,
    location: '',
  });

  

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        notifications={[]}
        userName="David Chen"
        userImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="flex">
        <Sidebar userType="developer" />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
              

              <div className="flex flex-col lg:flex-row gap-8">
                <ProjectList view={view} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};