import React from 'react';
import { ClientStats } from '../../dashboard/client/ClientStats';
import { QuickActions } from '../../dashboard/client/QuickActions';

export const ClientOverview = () => {
  return (
    <div className="space-y-8">
      <ClientStats />
      <QuickActions />
     
    </div>
  );
};
