import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download,
  Filter,
  Calendar,
  BarChart2,
  PieChart,
  TrendingUp
} from 'lucide-react';

export const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState('user-activity');
  const [dateRange, setDateRange] = useState('last-30-days');

  const reports = [
    { id: 'user-activity', name: 'User Activity', icon: BarChart2 },
    { id: 'revenue', name: 'Revenue Analysis', icon: TrendingUp },
    { id: 'usage-metrics', name: 'Usage Metrics', icon: PieChart }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Reports</h2>
            <div className="flex items-center gap-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="last-7-days">Last 7 Days</option>
                <option value="last-30-days">Last 30 Days</option>
                <option value="last-90-days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {reports.map((report) => (
              <motion.button
                key={report.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedReport(report.id)}
                className={`p-4 rounded-lg border ${
                  selectedReport === report.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <report.icon className={`h-5 w-5 ${
                    selectedReport === report.id ? 'text-blue-500' : 'text-gray-500'
                  }`} />
                  <span className={selectedReport === report.id ? 'text-blue-700' : 'text-gray-700'}>
                    {report.name}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="h-96 flex items-center justify-center text-gray-500">
              {selectedReport === 'user-activity' && 'User Activity Chart'}
              {selectedReport === 'revenue' && 'Revenue Analysis Chart'}
              {selectedReport === 'usage-metrics' && 'Usage Metrics Chart'}
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Report Details</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Records</span>
                  <span className="font-medium">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Generated On</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};