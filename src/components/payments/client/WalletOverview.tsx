import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react';

export const WalletOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white"
      >
        <div className="flex items-center justify-between mb-4">
          <Wallet className="h-8 w-8" />
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Plus className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm opacity-90">Available Balance</p>
        <h3 className="text-2xl font-bold mt-1">$24,500.00</h3>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 text-green-600 mb-4">
          <ArrowUpRight className="h-5 w-5" />
          <span className="text-sm font-medium">Income</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">$8,200.00</h3>
        <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 text-red-600 mb-4">
          <ArrowDownRight className="h-5 w-5" />
          <span className="text-sm font-medium">Expenses</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">$3,850.00</h3>
        <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <div className="flex items-center gap-2 text-blue-600 mb-4">
          <Wallet className="h-5 w-5" />
          <span className="text-sm font-medium">Pending</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">$1,200.00</h3>
        <p className="text-sm text-gray-500 mt-1">3 transactions</p>
      </motion.div>
    </div>
  );
};