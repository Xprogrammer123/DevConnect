import React from "react";
import { SettingsHeader } from "../components/settings/SettingsHeader";
import { SettingsSection } from "../components/settings/SettingsSection";
import { LogoutButton } from "../components/settings/LogoutButton";
import { SettingsSections } from "../components/settings/SettingsData";
import { Sidebar } from "../components/dashboard/Sidebar";

export const Settings: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SettingsHeader />
      <div className="flex">
        {/* Sidebar */}
        <aside >
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-5xl mx-auto p-6 space-y-8 h-[100vh] overflow-y-auto w-full">
          {SettingsSections.map((section) => (
            <SettingsSection key={section.id} {...section} />
          ))}
          <LogoutButton />
        </main>
      </div>
    </div>
  );
};
