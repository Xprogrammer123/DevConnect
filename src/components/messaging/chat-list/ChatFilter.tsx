import React from 'react';

export const ChatFilter = () => {
  return (
    <select
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="all">All Chats</option>
      <option value="unread">Unread</option>
      <option value="favorites">Favorites</option>
    </select>
  );
};