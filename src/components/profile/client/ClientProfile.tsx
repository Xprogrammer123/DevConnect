import React, { useState } from 'react';
import { ProfileHeader } from '../shared/ProfileHeader';
import { ProfileTabs } from '../shared/ProfileTabs';
import { ClientOverview } from './ClientOverview';
import { ClientPreferences } from './ClientPreferences';
import { ClientProjects } from './ClientProjects';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'preferences', label: 'Hiring Preferences' },
  { id: 'projects', label: 'Past Projects' },
];

export const ClientProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ClientOverview />;
      case 'preferences':
        return <ClientPreferences />;
      case 'projects':
        return <ClientProjects />;
      default:
        return null;
    }
  };

  return (
    <main className="flex-1 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <ProfileHeader
          name="Alex Johnson"
          title="Product Manager at TechCorp"
          location="New York, NY"
          avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          onEditClick={() => console.log('Edit profile')}
        />
        <ProfileTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        {renderTabContent()}
      </div>
    </main>
  );
};