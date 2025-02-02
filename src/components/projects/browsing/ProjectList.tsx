import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';
import { ProjectApplyForm } from './ProjectApplyForm'
import { X } from 'lucide-react';


const jobs = [
  {
    companyLogo: 'https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png',
    jobTitle: 'Senior UI/UX Designer',
    location: 'Jakarta, Indonesia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    salary: '$600-1.2k / Month',
  },
  {
    companyLogo: 'https://thumbs.dreamstime.com/z/google-logo-white-background-vector-format-available-google-logo-124289805.jpg',
    jobTitle: 'Junior UI/UX Designer',
    location: 'Bandung, Indonesia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    salary: '$100-1k / Month',
  },
   {
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMnzB4UKtQGXQt_UsKf2hORn29VAYus-VDA&s',
    jobTitle: 'Junior UI/UX Designer',
    location: 'Bandung, Indonesia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    salary: '$100-1k / Month',
  },
   {
    companyLogo: 'https://icon2.cleanpng.com/20231123/isw/transparent-upward-arrow-white-arrow-on-blue-background-pointing-1711001244515.webp',
    jobTitle: 'Junior UI/UX Designer',
    location: 'Bandung, Indonesia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    salary: '$100-1k / Month',
  },
   {
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMnzB4UKtQGXQt_UsKf2hORn29VAYus-VDA&s',
    jobTitle: 'Junior UI/UX Designer',
    location: 'Bandung, Indonesia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    salary: '$100-1k / Month',
  },
   {
    companyLogo: 'https://icon2.cleanpng.com/20231123/isw/transparent-upward-arrow-white-arrow-on-blue-background-pointing-1711001244515.webp',
    jobTitle: 'Junior UI/UX Designer',
    location: 'Bandung, Indonesia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    salary: '$100-1k / Month',
  },
];

export const ProjectList= () => {
 const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

   const handleApply = (job) => {
    setSelectedJob(job);
    setIsApplyOpen(true);
  };

  const closeApplyForm = () => {
    setIsApplyOpen(false);
    setSelectedJob(null);
  };

  
  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Let’s find your dream job
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
  <div className="flex-1">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <ProjectCard key={job.id} job={job} onApply={handleApply} />
      ))}
    </div>
  </div>
  <div className="mb-6 lg:ml-6 lg:w-1/4">
    <ProjectFilters />
  </div>
</div>

      
      {/* Apply Job Modal */}
      {isApplyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <button
              className="absolute right-64 text-black font-2xl"
              onClick={closeApplyForm}
            >
             <X />
            </button>
            <ProjectApplyForm job={selectedJob} />
          </div>
        </div>
      )}
    </div>
  );
};





 

 
 