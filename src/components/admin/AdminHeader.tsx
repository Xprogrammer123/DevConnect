import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  User,
  Menu
} from 'lucide-react';

interface AdminHeaderProps {
  onToggleSidebar: () => void;
}

export const AdminHeader = ({ 
  onToggleSidebar 
}: AdminHeaderProps) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'New user registered', unread: true },
    { id: 2, text: 'Monthly report ready', unread: true },
  ]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">

            <div className="relative">
              <button
                className="relative p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <Bell className="h-5 w-5 text-gray-600" />
                {notifications.some(n => n.unread) && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {notifications.filter(n => n.unread).length}
                  </span>
                )}
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
              </button>

              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
                >
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};