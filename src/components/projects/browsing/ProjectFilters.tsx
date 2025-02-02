import React from 'react';

export const ProjectFilters = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800">Job Filter</h3>
      <div className="mt-4 space-y-4">
        {/* Job Type */}
        <div>
          <h4 className="text-sm font-semibold text-gray-600">Job Type</h4>
          <div className="flex flex-col mt-2 space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="text-blue-600" />
              <span>Full Time</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Freelance</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Part Time</span>
            </label>
          </div>
        </div>
        {/* Experience */}
        <div>
          <h4 className="text-sm font-semibold text-gray-600">Experience</h4>
          <div className="flex flex-col mt-2 space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Under 1 Year</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>1-2 Years</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>2-6 Years</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Over 6 Years</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
