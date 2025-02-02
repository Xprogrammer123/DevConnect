import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface AdminSidebarProps {
  isCollapsed: boolean;
  activeView: string;
  onViewChange: (view: string) => void;
}

export const AdminSidebar = ({ isCollapsed, activeView, onViewChange }: AdminSidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? '4rem' : '16rem' }}
      className="bg-white border-r border-gray-200 h-screen sticky top-0"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-gray-900"
            >
              Admin Panel
            </motion.span>
          )}
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors
                ${activeView === item.id 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {item.label}
                </motion.span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};