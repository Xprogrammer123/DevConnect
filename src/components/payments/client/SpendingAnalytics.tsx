import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, BarChart, Calendar } from 'lucide-react';

export const SpendingAnalytics = () => {
  const categories = [
    { name: 'Software', amount: 2500, percentage: 45, color: 'bg-blue-500' },
    { name: 'Marketing', amount: 1800, percentage: 32, color: 'bg-purple-500' },
    { name: 'Hardware', amount: 1300, percentage: 23, color: 'bg-green-500' },
  ];

  const monthlyData = [
    { month: 'Jan', amount: 3200 },
    { month: 'Feb', amount: 4100 },
    { month: 'Mar', amount: 3800 },
    { month: 'Apr', amount: 4600 },
    { month: 'May', amount: 3900 },
    { month: 'Jun', amount: 4200 },
  ];

  const maxAmount = Math.max(...monthlyData.map(d => d.amount));

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Spending Analytics</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Calendar className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* Spending by Category */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Spending by Category</h3>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">{category.name}</span>
                  <span className="text-sm font-medium text-gray-900">
                    ${category.amount.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${category.percentage}%` }}
                    className={`h-full ${category.color}`}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Spending */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Spending</h3>
          <div className="flex items-end h-48 gap-2">
            {monthlyData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.amount / maxAmount) * 100}%` }}
                  className="w-full bg-blue-500 rounded-t-lg"
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};