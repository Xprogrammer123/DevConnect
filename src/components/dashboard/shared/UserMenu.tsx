import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, LogOut } from 'lucide-react';

interface UserMenuProps {
  userName: string;
  userImage?: string;
}

export const UserMenu = ({ userName, userImage }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-8 h-8 bg-[#4A90E2] rounded-full flex items-center justify-center">
          {userImage ? (
            <img src={userImage} alt={userName} className="w-full h-full rounded-full object-cover" />
          ) : (
            <User className="h-5 w-5 text-white" />
          )}
        </div>
        <span className="text-sm font-medium text-gray-700">{userName}</span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="py-2">
              <motion.a
                whileHover={{ backgroundColor: '#f8fafc' }}
                href="/settings"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700"
              >
                <Settings className="h-4 w-4" />
                Settings
              </motion.a>
              <motion.button
                whileHover={{ backgroundColor: '#f8fafc' }}
                className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 w-full"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};