import React from 'react';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { DeveloperStats } from './DeveloperStats';
import { ProjectList } from './ProjectList';
import { ActivityFeed } from '../shared/ActivityFeed';

const mockNotifications = [
  {
    id: 1,
    title: 'New Project Match',
    message: 'New project matching your skills: React Developer needed',
    time: '1 hour ago',
    isRead: false
  },
  {
    id: 2,
    title: 'Payment Received',
    message: 'Payment for Mobile App project received',
    time: '2 days ago',
    isRead: true
  }
];

const mockProjects = [
  {
    id: 1,
    title: 'React Native Mobile App',
    description: 'Looking for an experienced React Native developer for a social media app',
    skills: ['React Native', 'TypeScript', 'Firebase'],
    budget: '$6,000',
    deadline: '45 days'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Need a full-stack developer for an e-commerce website',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    budget: '$8,000',
    deadline: '60 days'
  }
];

const mockActivities = [
  {
    id: 1,
    type: 'application',
    title: 'Application Sent',
    description: 'Applied to React Native Mobile App project',
    timestamp: '3 hours ago'
  },
  {
    id: 2,
    type: 'project_match',
    title: 'New Match Found',
    description: 'New project matches your skills: E-commerce Platform',
    timestamp: '1 day ago'
  }
];

export const DeveloperDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        notifications={mockNotifications}
        userName="David Chen"
        userImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="flex">
        <Sidebar userType="developer" />
        <main className="flex-1 p-8 overflow-y-auto h-[100vh] min-w-screen w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <DeveloperStats 
                  activeApplications={8}
                  activeProjects={3}
                  totalEarnings="$12,500"
                  rating="4.8"
                  applicationsTrend={{ value: 15, isPositive: true }}
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Projects</h2>
                  <ProjectList projects={mockProjects} />
                </div>
              </div>
              <div className="lg:col-span-1">
                <ActivityFeed activities={mockActivities} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};