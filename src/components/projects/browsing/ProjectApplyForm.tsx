import React from 'react';

export const ProjectApplyForm = ({ job , onClose}) => {
  if (!job) {
    return <p>No job selected. Please go back and select a job to apply.</p>;
  }

  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Apply for {job.title}</h2>
      
      <p className="text-sm text-gray-500 mb-6">{job.company} - {job.location}</p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Full Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email Address"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Resume</label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="Write a brief cover letter..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};
