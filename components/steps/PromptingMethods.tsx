"use client";

import { useState } from "react";

export default function PromptingMethods() {
  const [selectedMethod, setSelectedMethod] = useState<'open' | 'rubric' | null>(null);

  return (
    <div className="max-w-none">
      <h2 className="font-serif mb-8">
        Prompting Methods: From Simple to Advanced
      </h2>

      <p className="text-lg mb-10">
        Choose the approach that best fits your needs and technical comfort level. Most professors will achieve excellent results with the <strong>Rubric method</strong>.
      </p>

      {/* Method Selector */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setSelectedMethod('open')}
          className={`p-6 rounded-xl border-2 transition-all text-left ${
            selectedMethod === 'open'
              ? 'border-neutral-400 bg-cream dark:bg-neutral-700/30'
              : 'border-neutral-200 dark:border-neutral-600 hover:border-neutral-300 dark:hover:border-neutral-500'
          }`}
        >
          <h3 className="text-xl font-serif text-neutral-900 dark:text-neutral-50 mb-2">Open Method</h3>
          <p className="text-sm mb-2">
            Simple, quick implementation with decent accuracy
          </p>
          <p className="text-neutral-600 font-semibold">Correlation: 0.66-0.80</p>
        </button>

        <button
          onClick={() => setSelectedMethod('rubric')}
          className={`p-6 rounded-xl border-2 transition-all text-left ${
            selectedMethod === 'rubric'
              ? 'border-tan-dark bg-tan-light dark:bg-tan-dark/20'
              : 'border-neutral-200 dark:border-neutral-600 hover:border-tan dark:hover:border-tan'
          }`}
        >
          <h3 className="text-xl font-serif text-neutral-900 dark:text-neutral-50 mb-2">
            Rubric Method
          </h3>
          <p className="text-sm mb-2">
            Recommended - best balance of accuracy and ease
          </p>
          <p className="text-tan-dark font-semibold">Correlation: 0.78-0.93</p>
        </button>
      </div>

      {/* Open Method Details */}
      {selectedMethod === 'open' && (
        <div className="bg-cream dark:bg-neutral-700/30 border border-neutral-200 dark:border-neutral-600 p-6 rounded-xl mb-8">
          <h3 className="font-serif text-neutral-900 dark:text-neutral-50 mb-4">
            Open Method: Quick Start
          </h3>

          <p className="mb-4">
            The Open method is the simplest approach, requiring only the exam question, student answer, and score range.
          </p>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 mb-4">
            <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">Example Prompt Template:</h4>
            <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="text-neutral-700 dark:text-neutral-300">{`You are grading a law school exam answer.

EXAM QUESTION:
[Insert your exam question here]

STUDENT ANSWER:
[Insert student's answer here]

GRADING INSTRUCTIONS:
- Score this answer on a scale of 0 to [MAX_POINTS]
- Evaluate based on: issue identification, rule statement, application of law to facts, and conclusion
- Consider the depth of analysis and legal reasoning
- Return only a numerical score and brief justification

Score:`}</pre>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start">
              <span className="w-5 h-5 bg-tan dark:bg-tan-dark rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3 text-neutral-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <strong className="text-neutral-900 dark:text-neutral-50">Pros:</strong>
                <p>Fastest to implement; no rubric needed; surprisingly good accuracy</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-5 h-5 bg-neutral-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <span className="text-white text-xs font-bold">-</span>
              </span>
              <div>
                <strong className="text-neutral-900 dark:text-neutral-50">Cons:</strong>
                <p>May not align with your specific grading priorities; relies entirely on AI's legal knowledge</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg">
            <p className="text-sm">
              <strong>Use case:</strong> Best for initial testing, practice exams, or when you want quick preliminary grades that you'll review later.
            </p>
          </div>
        </div>
      )}

      {/* Rubric Method Details */}
      {selectedMethod === 'rubric' && (
        <div className="bg-tan-light dark:bg-tan-dark/20 border border-tan dark:border-tan-dark p-6 rounded-xl mb-8">
          <h3 className="font-serif text-neutral-900 dark:text-neutral-50 mb-4">
            Rubric Method: Recommended Approach
          </h3>

          <p className="mb-4">
            The Rubric method provides your detailed grading rubric to the AI, dramatically improving accuracy while remaining straightforward to implement.
          </p>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 mb-4">
            <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">Example Prompt Template:</h4>
            <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="text-neutral-700 dark:text-neutral-300">{`You are grading a law school exam answer using the provided rubric.

EXAM QUESTION:
[Insert your exam question here]

GRADING RUBRIC:
[Insert your detailed rubric - example below]

Element 1: Issue Identification (3 points)
- 3 points: Identifies all major issues
- 2 points: Identifies most issues
- 1 point: Identifies some issues
- 0 points: Misses major issues

Element 2: Rule Statement (4 points)
- 4 points: States rule accurately and completely
- 3 points: States rule with minor omissions
- 2 points: Partially correct rule statement
- 0-1 points: Incorrect or missing rule

[Continue for each element...]

STUDENT ANSWER:
[Insert student's answer here]

GRADING INSTRUCTIONS:
- Evaluate the student's answer against each element in the rubric
- Assign points based on how well they addressed each element
- The maximum score is [SUM OF ALL RUBRIC POINTS]
- Provide the total score and a brief breakdown

Total Score:`}</pre>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">Creating an Effective Rubric:</h4>
            <div className="space-y-2">
              <p className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Break exam into discrete elements/issues (e.g., "Personal Jurisdiction," "Venue," "Subject Matter Jurisdiction")</p>
              <p className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Assign specific point values to each element</p>
              <p className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Include partial credit guidelines when appropriate</p>
              <p className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Specify the legal rules or principles students should apply</p>
              <p className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Note common mistakes or partial approaches</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <h5 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">Pros:</h5>
              <ul className="text-sm space-y-1">
                <li>• Significantly higher accuracy</li>
                <li>• Aligns with your grading priorities</li>
                <li>• Uses rubric you likely already have</li>
                <li>• Consistent across all students</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <h5 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">Cons:</h5>
              <ul className="text-sm space-y-1">
                <li>• Requires creating detailed rubric</li>
                <li>• Longer prompts to manage</li>
                <li>• May need rubric refinement</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Research Finding:</p>
            <p className="text-sm">
              The study found that more detailed rubrics led to better AI performance. The exam with the most granular rubric (Exam 2) achieved the highest correlation of 0.93, while the exam with the least detailed rubric (Exam 3) achieved 0.78.
            </p>
          </div>
        </div>
      )}

      {!selectedMethod && (
        <div className="bg-neutral-50 dark:bg-neutral-700/30 p-8 rounded-xl text-center border border-neutral-100 dark:border-neutral-700">
          <p className="text-neutral-500">
            Click on a method above to see detailed implementation instructions and example prompts.
          </p>
        </div>
      )}

      <div className="bg-neutral-50 dark:bg-neutral-700/30 border-l-4 border-tan p-6 mt-8 rounded-r-xl">
        <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
          Advanced Methods (Not Recommended for Most Users)
        </h4>
        <p className="mb-3">
          The research also tested "Bespoke" and "Pairwise" methods, but these offer minimal improvement over the Rubric method while requiring significantly more effort:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Bespoke:</strong> Requires custom code for each exam to extract individual element scores. Correlation: 0.80-0.92 (minimal improvement over Rubric)
          </li>
          <li>
            <strong>Pairwise:</strong> Compares all answer pairs using Bradley-Terry scaling. Requires quadratic API calls and is prohibitively expensive. Correlation: 0.84-0.91
          </li>
        </ul>
      </div>
    </div>
  );
}
