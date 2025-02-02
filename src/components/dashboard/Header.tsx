import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search } from 'lucide-react';
import { NotificationPanel } from './shared/NotificationPanel';
import { UserMenu } from './shared/UserMenu';
import { SearchBar } from './shared/SearchBar';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

interface HeaderProps {
  notifications: Notification[];
  userName: string;
  userImage?: string;
}

export const Header = ({ notifications, userName, userImage }: HeaderProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky">
      <div className="flex items-center justify-between">
        <SearchBar 
          placeholder="Search projects, developers, or messages..." 
          onSearch={handleSearch}
        />

        <div className="flex items-center gap-6">
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-6 w-6 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </motion.button>

            <AnimatePresence>
              {showNotifications && (
                <NotificationPanel
                  notifications={notifications}
                  onClose={() => setShowNotifications(false)}
                  onMarkAsRead={(id) => console.log('Mark as read:', id)}
                />
              )}
            </AnimatePresence>
          </div>

          <UserMenu 
            userName={userName}
            userImage={userImage}
          />
        </div>
      </div>
    </header>
  );
};