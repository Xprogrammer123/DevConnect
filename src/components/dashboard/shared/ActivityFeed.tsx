import React from 'react';

export const ActivityFeed = () => {
  const activities = [
    { id: 1, message: 'Client A approved the milestone.', time: '2 hours ago' },
    { id: 2, message: 'Project X completed.', time: 'Yesterday' },
    { id: 3, message: 'You were assigned to Project Y.', time: '3 days ago' },
  ];

  return (
    <ul className="space-y-4">
      {activities.map((activity) => (
        <li key={activity.id} className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="text-gray-800">{activity.message}</p>
          <span className="text-sm text-gray-500">{activity.time}</span>
        </li>
      ))}
    </ul>
  );
};