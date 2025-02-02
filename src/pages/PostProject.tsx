import React from 'react';
import { ProjectPostingForm } from '../components/projects/posting/ProjectPostingForm';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';

export const PostProject = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        notifications={[]}
        userName="Alex Johnson"
        userImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="flex">
        <Sidebar userType="client" />
        <main className="flex-1 p-8  h-[100vh] overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <ProjectPostingForm />
          </div>
        </main>
      </div>
    </div>
  );
};