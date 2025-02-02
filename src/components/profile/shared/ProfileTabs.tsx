import React, { useState } from 'react';
import { ClientProjects } from '../client/ClientProjects';
import { ClientPreferences } from '../client/ClientPreferences'
import { ActivityFeed } from '../../dashboard/shared/ActivityFeed';

const tabs = ['Overview', 'Projects', 'Activity'];

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div>
      <nav className="flex gap-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="py-4">
        {activeTab === 'Overview' && <ClientPreferences/>}
        {activeTab === 'Projects' && <ClientProjects />}
        {activeTab === 'Activity' && <ActivityFeed />}
      </div>
    </div>
  );
};
