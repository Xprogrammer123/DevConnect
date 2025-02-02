import React, { useState } from 'react';
import { ProfileHeader } from '../shared/ProfileHeader';
import { ProfileTabs } from '../shared/ProfileTabs';
import { DeveloperOverview } from './DeveloperOverview';
import { DeveloperSkills } from './DeveloperSkills';
import { DeveloperPortfolio } from './DeveloperPortfolio';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'skills', label: 'Skills & Experience' },
  { id: 'portfolio', label: 'Portfolio' },
];

export const DeveloperProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DeveloperOverview />;
      case 'skills':
        return <DeveloperSkills />;
      case 'portfolio':
        return <DeveloperPortfolio />;
      default:
        return null;
    }
  };

  return (
    <main className="flex-1 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <ProfileHeader
          name="David Chen"
          title="Senior Full Stack Developer"
          location="San Francisco, CA"
          avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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