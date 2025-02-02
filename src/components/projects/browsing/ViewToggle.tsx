import React from 'react';
import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  setView: React.Dispatch<React.SetStateAction<'grid' | 'list'>>; // Type for setView
  currentView: 'grid' | 'list'; // Type for the current view
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ setView, currentView }) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <button
        onClick={() => setView('grid')} // When clicked, set view to 'grid'
        className={`p-2 rounded-lg ${
          currentView === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        <Grid className="h-5 w-5" />
      </button>
      <button
        onClick={() => setView('list')} // When clicked, set view to 'list'
        className={`p-2 rounded-lg ${
          currentView === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        <List className="h-5 w-5" />
      </button>
    </div>
  );
};
