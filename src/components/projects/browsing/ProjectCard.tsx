import React from 'react';

export const ProjectCard = ({ job, onApply }) => {
  console.log("Job Data:", job); // Debugging log

  if (!job) {
    return null; // Safely handle missing job data
  }

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <img
          src={job.companyLogo || 'https://via.placeholder.com/150'}
          alt={`${job.jobTitle || 'Job'} logo`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{job.jobTitle || 'Untitled Job'}</h3>
          <p className="text-sm text-gray-500">{job.location || 'Location not specified'}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600 line-clamp-3">
        {job.description || 'No description available'}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-blue-500 font-bold">{job.salary || 'Salary not disclosed'}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => onApply(job)}
        >
          Apply Job
        </button>
      </div>
    </div>
  );
};


