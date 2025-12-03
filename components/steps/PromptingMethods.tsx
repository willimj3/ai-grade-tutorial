"use client";

import { useState } from "react";

export default function PromptingMethods() {
  const [selectedMethod, setSelectedMethod] = useState<'open' | 'rubric' | null>(null);

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Prompting Methods: From Simple to Advanced
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Choose the approach that best fits your needs and technical comfort level. Most professors will achieve excellent results with the <strong>Rubric method</strong>.
      </p>

      {/* Method Selector */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setSelectedMethod('open')}
          className={`p-6 rounded-lg border-2 transition-all ${
            selectedMethod === 'open'
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
              : 'border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-700'
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Open Method</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Simple, quick implementation with decent accuracy
          </p>
          <p className="text-green-600 dark:text-green-400 font-semibold mt-2">Correlation: 0.66-0.80</p>
        </button>

        <button
          onClick={() => setSelectedMethod('rubric')}
          className={`p-6 rounded-lg border-2 transition-all ${
            selectedMethod === 'rubric'
              ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
              : 'border-gray-300 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-700'
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Rubric Method ⭐
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Recommended - best balance of accuracy and ease
          </p>
          <p className="text-green-600 dark:text-green-400 font-semibold mt-2">Correlation: 0.78-0.93</p>
        </button>
      </div>

      {/* Open Method Details */}
      {selectedMethod === 'open' && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Open Method: Quick Start
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Open method is the simplest approach, requiring only the exam question, student answer, and score range.
          </p>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Example Prompt Template:</h4>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`You are grading a law school exam answer.

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
              <span className="text-green-600 dark:text-green-400 mr-3">✓</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Pros:</strong>
                <p className="text-gray-700 dark:text-gray-300">Fastest to implement; no rubric needed; surprisingly good accuracy</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 dark:text-red-400 mr-3">✗</span>
              <div>
                <strong className="text-gray-900 dark:text-white">Cons:</strong>
                <p className="text-gray-700 dark:text-gray-300">May not align with your specific grading priorities; relies entirely on AI's legal knowledge</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Use case:</strong> Best for initial testing, practice exams, or when you want quick preliminary grades that you'll review later.
            </p>
          </div>
        </div>
      )}

      {/* Rubric Method Details */}
      {selectedMethod === 'rubric' && (
        <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
            Rubric Method: Recommended Approach
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Rubric method provides your detailed grading rubric to the AI, dramatically improving accuracy while remaining straightforward to implement.
          </p>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Example Prompt Template:</h4>
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800 dark:text-gray-200">{`You are grading a law school exam answer using the provided rubric.

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
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Creating an Effective Rubric:</h4>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p>✓ Break exam into discrete elements/issues (e.g., "Personal Jurisdiction," "Venue," "Subject Matter Jurisdiction")</p>
              <p>✓ Assign specific point values to each element</p>
              <p>✓ Include partial credit guidelines when appropriate</p>
              <p>✓ Specify the legal rules or principles students should apply</p>
              <p>✓ Note common mistakes or partial approaches</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded">
              <h5 className="font-bold text-green-900 dark:text-green-100 mb-2">Pros:</h5>
              <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Significantly higher accuracy</li>
                <li>• Aligns with your grading priorities</li>
                <li>• Uses rubric you likely already have</li>
                <li>• Consistent across all students</li>
              </ul>
            </div>
            <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded">
              <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">Cons:</h5>
              <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Requires creating detailed rubric</li>
                <li>• Longer prompts to manage</li>
                <li>• May need rubric refinement</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded">
            <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Research Finding:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              The study found that more detailed rubrics led to better AI performance. The exam with the most granular rubric (Exam 2) achieved the highest correlation of 0.93, while the exam with the least detailed rubric (Exam 3) achieved 0.78.
            </p>
          </div>
        </div>
      )}

      {!selectedMethod && (
        <div className="bg-gray-50 dark:bg-gray-700/30 p-8 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Click on a method above to see detailed implementation instructions and example prompts.
          </p>
        </div>
      )}

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 mt-8">
        <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">
          Advanced Methods (Not Recommended for Most Users)
        </h4>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          The research also tested "Bespoke" and "Pairwise" methods, but these offer minimal improvement over the Rubric method while requiring significantly more effort:
        </p>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
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
