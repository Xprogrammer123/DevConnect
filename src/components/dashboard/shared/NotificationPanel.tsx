import React from 'react';
import { motion } from 'framer-motion';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning';
  isRead: boolean;
}

interface NotificationPanelProps {
  notifications: Notification[];
  onClose: () => void;
  onMarkAsRead: (id: number) => void;
}

export const NotificationPanel = ({
  notifications,
  onClose,
  onMarkAsRead
}: NotificationPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Notifications</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            whileHover={{ backgroundColor: '#f8fafc' }}
            className={`p-4 border-b border-gray-100 cursor-pointer ${
              !notification.isRead ? 'bg-blue-50' : ''
            }`}
            onClick={() => onMarkAsRead(notification.id)}
          >
            <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
            <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};