import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectBasicInfo } from './steps/ProjectBasicInfo';
import { ProjectRequirements } from './steps/ProjectRequirements';
import { ProjectBudget } from './steps/ProjectBudget';
import { ProjectFiles } from './steps/ProjectFiles';
import { ProjectPreview } from './steps/ProjectPreview';
import { ProgressSteps } from './ProgressSteps';
import { fadeIn } from '../../animations/variants';

const steps = [
  { id: 'basics', label: 'Basic Info' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'budget', label: 'Budget & Timeline' },
  { id: 'files', label: 'Files' },
  { id: 'preview', label: 'Preview' },
];

export const ProjectPostingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    skills: [],
    budget: { min: 0, max: 0 },
    timeline: '',
    priority: 'medium',
    files: [],
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ProjectBasicInfo data={formData} onChange={updateFormData} />;
      case 1:
        return <ProjectRequirements data={formData} onChange={updateFormData} />;
      case 2:
        return <ProjectBudget data={formData} onChange={updateFormData} />;
      case 3:
        return <ProjectFiles data={formData} onChange={updateFormData} />;
      case 4:
        return <ProjectPreview data={formData} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Post a New Project</h1>
        <p className="text-gray-600">
          Fill in the details below to post your project and find the perfect developer.
        </p>
      </div>

      <ProgressSteps steps={steps} currentStep={currentStep} />

      <div className="bg-white p-6 rounded-xl shadow-sm">
        {renderStep()}

        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          {currentStep > 0 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBack}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Back
            </motion.button>
          )}
          <div className="ml-auto">
            {currentStep < steps.length - 1 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="px-6 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#4A90E2]/90"
              >
                Continue
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Post Project
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};