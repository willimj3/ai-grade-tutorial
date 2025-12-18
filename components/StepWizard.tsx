import { FC } from "react";

interface Step {
  title: string;
  component: FC;
}

interface StepWizardProps {
  steps: Step[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

export default function StepWizard({ steps, currentStep, onStepChange }: StepWizardProps) {
  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      onStepChange(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex justify-between mb-3">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => {
                onStepChange(index);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xs md:text-sm font-medium transition-all duration-200 ${
                index === currentStep
                  ? "text-neutral-900 dark:text-neutral-50"
                  : index < currentStep
                  ? "text-sage"
                  : "text-neutral-400 dark:text-neutral-500"
              } hover:text-neutral-700 dark:hover:text-neutral-200`}
            >
              {index + 1}. {step.title}
            </button>
          ))}
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-1.5 dark:bg-neutral-700">
          <div
            className="bg-neutral-800 dark:bg-neutral-300 h-1.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-warm-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 min-h-[600px]">
        <CurrentStepComponent />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="px-6 py-3 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-all duration-200"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-3 bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 rounded-xl font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-700 dark:hover:bg-white transition-all duration-200"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
