import React, { useState } from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';

export const UpdateSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [notification, setNotification] = useState(true);
  const [pushNotification, setPushNotification] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [accessibility, setAccessibility] = useState(true);
  const [dataSharing, setDataSharing] = useState(true);
  const [downloadData, setDownloadData] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 max-w-5xl mx-auto p-6 space-y-8 h-[100vh] overflow-y-auto w-full">
        <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

        {/* Edit Profile */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Edit Profile</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 px-4 py-2 w-full border rounded-md"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 px-4 py-2 w-full border rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </form>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save Profile Changes
          </button>
        </div>

        {/* Change Password */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Change Password</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 px-4 py-2 w-full border rounded-md"
                placeholder="Enter new password"
              />
            </div>
          </form>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save Password Changes
          </button>
        </div>

        {/* Two-Factor Authentication */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Two-Factor Authentication</h2>
          <div className="flex items-center">
            <label className="text-sm font-semibold mr-4">Enable Two-Factor Authentication</label>
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
              className="form-checkbox"
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save 2FA Settings
          </button>
        </div>

        {/* Notification Settings */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Notification Settings</h2>
          <div className="mb-4">
            <label className="text-sm font-semibold">Email Notifications</label>
            <input
              type="checkbox"
              checked={notification}
              onChange={(e) => setNotification(e.target.checked)}
              className="form-checkbox"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-semibold">Push Notifications</label>
            <input
              type="checkbox"
              checked={pushNotification}
              onChange={(e) => setPushNotification(e.target.checked)}
              className="form-checkbox"
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save Notification Settings
          </button>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Payment Method</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Payment Method</label>
              <input
                type="text"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mt-2 px-4 py-2 w-full border rounded-md"
                placeholder="Enter payment method"
              />
            </div>
          </form>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save Payment Method
          </button>
        </div>

        {/* Theme */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Theme</h2>
          <div className="flex items-center">
            <label className="text-sm font-semibold mr-4">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="border p-2 rounded-md"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save Theme Settings
          </button>
        </div>

        {/* Language */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Language</h2>
          <div className="flex items-center">
            <label className="text-sm font-semibold mr-4">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border p-2 rounded-md"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save Language Settings
          </button>
        </div>

        {/* Accessibility */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Accessibility</h2>
          <div className="flex items-center">
            <label className="text-sm font-semibold mr-4">Enable Accessibility Features</label>
            <input
              type="checkbox"
              checked={accessibility}
              onChange={(e) => setAccessibility(e.target.checked)}
              className="form-checkbox"
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save Accessibility Settings
          </button>
        </div>

        {/* Data Sharing */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Data Sharing</h2>
          <div className="flex items-center">
            <label className="text-sm font-semibold mr-4">Allow Data Sharing</label>
            <input
              type="checkbox"
              checked={dataSharing}
              onChange={(e) => setDataSharing(e.target.checked)}
              className="form-checkbox"
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Save Data Sharing Settings
          </button>
        </div>

        {/* Download Data */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Download Data</h2>
          <div className="flex items-center">
            <label className="text-sm font-semibold mr-4">Download Your Data</label>
            <input
              type="checkbox"
              checked={downloadData}
              onChange={(e) => setDownloadData(e.target.checked)}
              className="form-checkbox"
            />
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2">
            Download Data
          </button>
        </div>
      </div>
    </div>
  );
};
