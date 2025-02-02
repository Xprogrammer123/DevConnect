import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Plus, HandCoins, Wallet } from 'lucide-react';

export const PaymentMethods = () => {
  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      name: 'Visa ending in 4242',
      icon: CreditCard,
      expiryDate: '12/25',
    },
    {
      id: 2,
      type: 'Bank',
      name: 'Chase Bank Account',
      icon: HandCoins,
      accountNumber: '****6789',
    },
    {
      id: 3,
      type: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      balance: '$2,450.00',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Payment Methods</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
          >
            <Plus className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {paymentMethods.map((method) => (
          <motion.div
            key={method.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <method.icon className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{method.name}</p>
                <p className="text-sm text-gray-500">
                  {method.expiryDate || method.accountNumber || method.balance}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};