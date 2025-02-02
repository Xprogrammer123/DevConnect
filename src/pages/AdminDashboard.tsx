import React, { useState } from 'react';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { AdminHeader } from '../components/admin/AdminHeader';
import { DashboardContent } from '../components/admin/DashboardContent';
import { UsersTable } from '../components/admin/UsersTable';
import { AdminSettings } from '../components/admin/settings/AdminSettings';
import { AdminReports } from '../components/admin/reports/AdminReports';
import { AdminFooter } from '../components/admin/AdminFooter';

export const AdminDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <AdminSidebar 
          isCollapsed={isSidebarCollapsed}
          activeView={activeView}
          onViewChange={setActiveView}
        />
        <div className="flex-1">
          <AdminHeader 
            onToggleSidebar={toggleSidebar}
          />
          <main className="p-6">
            {activeView === 'dashboard' && <DashboardContent />}
            {activeView === 'users' && <UsersTable />}
            {activeView === 'settings' && <AdminSettings />}
            {activeView === 'reports' && <AdminReports />}
          </main>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
};