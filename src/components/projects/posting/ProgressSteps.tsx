import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Step {
  id: string;
  label: string;
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep: number;
}

export const ProgressSteps = ({ steps, currentStep }: ProgressStepsProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: index <= currentStep ? '#4A90E2' : '#fff',
                  borderColor: index <= currentStep ? '#4A90E2' : '#e5e7eb',
                }}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                  ${index <= currentStep ? 'text-white' : 'text-gray-400'}`}
              >
                {index < currentStep ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </motion.div>
              <span className="ml-2 text-sm font-medium text-gray-900">
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4">
                <div className="h-0.5 bg-gray-200">
                  <motion.div
                    initial={false}
                    animate={{
                      width: index < currentStep ? '100%' : '0%',
                    }}
                    className="h-full bg-[#4A90E2]"
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};