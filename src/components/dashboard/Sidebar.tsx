import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  CreditCard,
  UserCircle,
  Settings,
  Menu,
  FilePlus2
} from 'lucide-react';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the user type from the route
  const isDeveloper = location.pathname.includes('/developer');

  const handleNavigation = (path: string) => {
    setActiveTab(path);
    navigate(`/${path.toLowerCase()}`);
  };

  // Navigation options based on user type
  const navigationItems = isDeveloper
    ? [
        { label: 'Dashboard', icon: LayoutDashboard },
        { label: 'Messages', icon: MessageSquare },
        { label: 'Projects', icon: Briefcase },
        { label: 'Payments', icon: CreditCard },
        { label: 'Profile', icon: UserCircle },
        { label: 'update-Settings', icon: Settings },
      ]
    : [
        { label: 'Dashboard', icon: LayoutDashboard },
        { label: 'Messages', icon: MessageSquare },
        { label: 'post', icon: FilePlus2 },
        { label: 'Payments', icon: CreditCard },
        { label: 'Profile', icon: UserCircle },
        { label: 'UpdateSettings', icon: Settings },
      ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ width: isCollapsed ? '4rem' : '16rem' }}
        className="bg-white border-r border-gray-200 flex flex-col transition-all duration-300"
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-gray-900"
            >
             DevConnect
            </motion.span>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => handleNavigation(label)}
              className={`flex items-center gap-3 p-3 text-gray-700 w-full hover:bg-gray-100 focus:bg-blue-100 active:bg-blue-100 rounded-lg transition-colors ${
                activeTab === label ? 'bg-blue-100' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
              {!isCollapsed && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {label}
                </motion.span>
              )}
            </button>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};
