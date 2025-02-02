import React, { useState } from 'react';

const options = ['Name', 'Date', 'Status'];

export const SortDropdown = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
