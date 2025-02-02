import React from 'react';
import { WalletOverview } from './WalletOverview';
import { TransactionList } from './TransactionList';
import { PaymentMethods } from './PaymentMethods';
import { SpendingAnalytics } from './SpendingAnalytics';

export const PaymentDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <WalletOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TransactionList />
          <SpendingAnalytics />
        </div>
        <div className="lg:col-span-1">
          <PaymentMethods />
        </div>
      </div>
    </div>
  );
};