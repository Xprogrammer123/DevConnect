import React from 'react';
import { useLocation } from 'react-router-dom';

export const ProfileHeader = () => {
  const location = useLocation();
  const isDeveloper = location.pathname.includes('/developer');

  // User info based on role
  const userInfo = isDeveloper
    ? {
        name: 'David Chen',
        role: 'Software Engineer',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
    : {
        name: 'Alex Johnson',
        role: 'Client Manager',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      };

  return (
    <header className="flex items-center justify-between py-2 px-3 bg-gray-50 text-white rounded-lg shadow">
      <div className="flex items-center gap-4">
        <img
          src={userInfo.image}
          alt={`${userInfo.name} profile`}
          className="h-14 w-14 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-black">{userInfo.name}</h1>
          <p className="text-sm text-blue-500">{userInfo.role}</p>
        </div>
      </div>
    </header>
  );
};
