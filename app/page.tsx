"use client";

import { useState } from "react";
import StepWizard from "@/components/StepWizard";
import Introduction from "@/components/steps/Introduction";
import UnderstandingAI from "@/components/steps/UnderstandingAI";
import PreparationChecklist from "@/components/steps/PreparationChecklist";
import PromptingMethods from "@/components/steps/PromptingMethods";
import RubricBuilder from "@/components/steps/RubricBuilder";
import EthicalConsiderations from "@/components/steps/EthicalConsiderations";
import Implementation from "@/components/steps/Implementation";
import BestPractices from "@/components/steps/BestPractices";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Introduction", component: Introduction },
    { title: "Understanding AI Grading", component: UnderstandingAI },
    { title: "Preparation Checklist", component: PreparationChecklist },
    { title: "Prompting Methods", component: PromptingMethods },
    { title: "Rubric Builder", component: RubricBuilder },
    { title: "Ethical Considerations", component: EthicalConsiderations },
    { title: "Implementation Guide", component: Implementation },
    { title: "Best Practices", component: BestPractices },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI Exam Grading Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A Step-by-Step Guide for Law Professors to Safely Implement AI-Assisted Grading
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Based on research by Cope et al. (2025) - Grading Machines: Can AI Exam-Grading Replace Law Professors?
          </p>
        </header>

        <StepWizard
          steps={steps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </div>
    </main>
  );
}
