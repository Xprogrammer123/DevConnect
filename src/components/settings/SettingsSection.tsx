import React from "react";
import { HelpCircle } from "lucide-react";

interface SettingsSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: { label: string; action: () => void }[];
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  icon,
  items,
}) => (
  <section className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    </div>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index}>
          <button
            onClick={item.action}
            className="w-full flex justify-between items-center p-4 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-800 text-sm font-medium transition"
          >
            {item.label}
            <HelpCircle className="transform rotate-180 text-gray-400" />
          </button>
        </li>
      ))}
    </ul>
  </section>
);
