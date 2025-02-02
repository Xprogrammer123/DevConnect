import React from 'react';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';
import { PaymentDashboard } from '../components/payments/client/PaymentDashboard';

export const Payments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        notifications={[]}
        userName="Alex Johnson"
        userImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 h-[100vh] overflow-y-auto">
          <PaymentDashboard />
        </main>
      </div>
    </div>
  );
};