import React from 'react';

export const SearchBar = () => {
  return (
    <input
      type="text"
      className="md:w-1/2 w-3/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search..."
    />
  );
};