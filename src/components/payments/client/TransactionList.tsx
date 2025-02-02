import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download } from 'lucide-react';

export const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      date: '2024-03-15',
      description: 'Website Development',
      amount: 2500,
      status: 'completed',
      type: 'income',
      method: 'Bank Transfer',
    },
    {
      id: 2,
      date: '2024-03-14',
      description: 'Software License',
      amount: -299,
      status: 'completed',
      type: 'expense',
      method: 'Credit Card',
    },
    {
      id: 3,
      date: '2024-03-13',
      description: 'Mobile App Design',
      amount: 1800,
      status: 'pending',
      type: 'income',
      method: 'PayPal',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Download className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <motion.div
            key={transaction.id}
            whileHover={{ backgroundColor: '#f8fafc' }}
            className="p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-gray-900">{transaction.description}</p>
              <p className="text-sm text-gray-500">{transaction.method}</p>
            </div>
            <div className="text-right">
              <p className={`font-medium ${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};