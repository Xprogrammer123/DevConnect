import React from 'react';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { ClientStats } from './ClientStats';
import { QuickActions } from './QuickActions';
import { ActiveProjectList } from './ActiveProjectList';
import { ActivityFeed } from '../shared/ActivityFeed';

const mockNotifications = [
  {
    id: 1,
    title: 'New Proposal',
    message: 'You received a new proposal for Website Redesign',
    time: '2 hours ago',
    isRead: false
  },
  {
    id: 2,
    title: 'Milestone Completed',
    message: 'Mobile App project milestone completed',
    time: '1 day ago',
    isRead: true
  }
];

const mockProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    status: 'In Progress',
    developer: 'Sarah Wilson',
    deadline: '2 weeks',
    budget: '$4,000',
    progress: 75
  },
  {
    id: 2,
    title: 'Mobile App Development',
    status: 'Pending Review',
    developer: 'John Smith',
    deadline: '1 month',
    budget: '$8,000',
    progress: 45
  }
];

const mockActivities = [
  {
    id: 1,
    type: 'project_update',
    title: 'Milestone Completed',
    description: 'E-commerce Website - Homepage Design',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment Processed',
    description: '$2,000 paid to Sarah Wilson',
    timestamp: '1 day ago'
  }
];

export const ClientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-y-hidden">
      <Header 
        notifications={mockNotifications}
        userName="Alex Johnson"
        userImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="flex">
        <Sidebar userType="client" />
        <main className="flex-1 p-8 overflow-y-auto h-[100vh] min-w-screen w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <ClientStats 
                  activeProjects={4}
                  completedProjects={12}
                  totalSpent="$45,000"
                  rating="4.9"
                  projectsTrend={{ value: 20, isPositive: true }}
                />
                <QuickActions />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Projects</h2>
                  <ActiveProjectList projects={mockProjects} />
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