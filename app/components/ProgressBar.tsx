import React from 'react';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  steps: {
    id: string;
    title: string;
  }[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume Sections</h3>
      <div className="space-y-2">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isClickable = isCompleted || isCurrent;

          return (
            <button
              key={step.id}
              onClick={() => isClickable && onStepClick?.(index)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3
                ${isCurrent 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                  : isCompleted 
                    ? 'bg-gray-50 text-gray-700 hover:bg-gray-100' 
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              disabled={!isClickable}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                ${isCurrent 
                  ? 'bg-blue-600 text-white' 
                  : isCompleted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              <span className="font-medium">{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar; 