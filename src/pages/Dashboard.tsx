import React from 'react';
import { useLocation } from 'react-router-dom';
import { ClientDashboard } from '../components/dashboard/client/ClientDashboard';
import { DeveloperDashboard } from '../components/dashboard/developer/DeveloperDashboard';

export const Dashboard: React.FC = () => {
  const location = useLocation();
  const isDeveloper = location.pathname.includes('/developer');

  return ( 
    <main className="p-2">
      {isDeveloper ? <DeveloperDashboard /> : <ClientDashboard />}
    </main>
  );
};
