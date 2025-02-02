import React from 'react';
import { Link } from 'react-router-dom'
export const QuickActions = () => {
  
  return (
    <div className="flex gap-4">
    <Link to="/post">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
        Add New Project
        </button>
    </Link>
    </div>
  );
};