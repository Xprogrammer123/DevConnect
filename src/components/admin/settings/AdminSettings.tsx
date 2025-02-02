import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Globe,
  Palette,
  HardDrive
} from 'lucide-react';

export const AdminSettings = () => {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: User,
      settings: [
        { label: 'Update Profile Information', type: 'button' },
        { label: 'Change Password', type: 'button' },
        { label: 'Two-Factor Authentication', type: 'toggle', value: true }
      ]
    },
    {
      title: 'Notification Preferences',
      icon: Bell,
      settings: [
        { label: 'Email Notifications', type: 'toggle', value: true },
        { label: 'Push Notifications', type: 'toggle', value: false },
        { label: 'Newsletter Subscription', type: 'toggle', value: true }
      ]
    },
    {
      title: 'Security Settings',
      icon: Shield,
      settings: [
        { label: 'Login History', type: 'button' },
        { label: 'Session Management', type: 'button' },
        { label: 'API Access', type: 'toggle', value: false }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
        </div>
        
        <div className="p-6 space-y-8">
          {settingsSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-blue-500" />
                <h3 className="text-xl font-medium text-gray-900">{section.title}</h3>
              </div>
              
              <div className="space-y-4 ml-7">
                {section.settings.map((setting) => (
                  <motion.div
                    key={setting.label}
                    whileHover={{ x: 2 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700">{setting.label}</span>
                    {setting.type === 'toggle' ? (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={setting.value}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    ) : (
                      <button className="text-blue-500 hover:text-blue-600">
                        Configure
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
