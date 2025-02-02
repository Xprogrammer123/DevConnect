import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  UserCheck,
  DollarSign,
  ListTodo
} from 'lucide-react';

export const DashboardContent = () => {
  const summaryCards = [
    { 
      title: 'Total Users',
      value: '12,345',
      icon: Users,
      color: 'bg-blue-500'
    },
    { 
      title: 'Active Users',
      value: '10,234',
      icon: UserCheck,
      color: 'bg-green-500'
    },
    { 
      title: 'Monthly Revenue',
      value: '$45,678',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    { 
      title: 'Pending Tasks',
      value: '23',
      icon: ListTodo,
      color: 'bg-orange-500'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card) => (
          <motion.div
            key={card.title}
            whileHover={{ y: -2 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 ${card.color} rounded-lg`}>
                <card.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Charts would go here - You'll need to add a charting library */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">User Activity</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Line Chart Placeholder
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Distribution</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Pie Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};