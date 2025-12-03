"use client";

import { useState } from "react";

export default function PreparationChecklist() {
  const [checklist, setChecklist] = useState({
    rubric: false,
    questions: false,
    answers: false,
    model: false,
    ethics: false,
    backup: false,
  });

  const toggleItem = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const progress = (Object.values(checklist).filter(Boolean).length / Object.keys(checklist).length) * 100;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Preparation Checklist
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Before implementing AI grading, ensure you have everything ready. Check off each item as you complete it.
      </p>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
          <div
            className="bg-green-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Rubric */}
        <div className="bg-white dark:bg-gray-700/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.rubric}
              onChange={() => toggleItem('rubric')}
              className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Create a Detailed Grading Rubric
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The research shows rubric specificity dramatically improves AI accuracy (correlation improved from 0.66-0.80 to 0.78-0.93).
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Your rubric should include:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Each issue/element students should address</li>
                  <li>• Points allocated to each element</li>
                  <li>• Specific legal rules or principles to apply</li>
                  <li>• Expected analytical steps (identify → rule → application → conclusion)</li>
                </ul>
              </div>
            </div>
          </label>
        </div>

        {/* Exam Questions */}
        <div className="bg-white dark:bg-gray-700/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.questions}
              onChange={() => toggleItem('questions')}
              className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Prepare Exam Questions in Digital Format
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Have your exam questions ready in a text format that can be easily copied into prompts.
              </p>
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ✓ Plain text or Word document<br />
                  ✓ Include all fact patterns and instructions<br />
                  ✓ Clearly delineate separate questions if exam has multiple
                </p>
              </div>
            </div>
          </label>
        </div>

        {/* Student Answers */}
        <div className="bg-white dark:bg-gray-700/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.answers}
              onChange={() => toggleItem('answers')}
              className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Collect Student Answers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Student responses must be in a format you can copy/paste into the AI interface.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded">
                <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Important:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If using blind grading, maintain anonymization when copying answers. Consider using student ID numbers instead of names.
                </p>
              </div>
            </div>
          </label>
        </div>

        {/* AI Model Access */}
        <div className="bg-white dark:bg-gray-700/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.model}
              onChange={() => toggleItem('model')}
              className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Choose and Access an AI Model
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                The research used GPT-5, but you can use any modern LLM with good results.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                <p className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Recommended options:</p>
                <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>ChatGPT (OpenAI):</strong> Most tested, paid plan recommended for higher rate limits</li>
                  <li>• <strong>Claude (Anthropic):</strong> Strong performance on legal reasoning tasks</li>
                  <li>• <strong>Gemini (Google):</strong> Large context window useful for long exams</li>
                </ul>
              </div>
            </div>
          </label>
        </div>

        {/* Ethics Review */}
        <div className="bg-white dark:bg-gray-700/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.ethics}
              onChange={() => toggleItem('ethics')}
              className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Review Institutional Policies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Check if your law school has policies regarding AI-assisted grading.
              </p>
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ⚠️ Consult with administration about:<br />
                  • Faculty grading requirements<br />
                  • Student privacy and data protection<br />
                  • Transparency obligations to students<br />
                  • ABA accreditation standards
                </p>
              </div>
            </div>
          </label>
        </div>

        {/* Backup Plan */}
        <div className="bg-white dark:bg-gray-700/50 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={checklist.backup}
              onChange={() => toggleItem('backup')}
              className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Establish a Validation Process
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Plan how you'll verify AI grades and handle discrepancies.
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded">
                <p className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Recommended approach:</p>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Review exams where AI and human grades differ significantly (e.g., &gt;10%)</li>
                  <li>• Spot-check a random sample of 5-10% of AI grades</li>
                  <li>• Keep human grades as backup for first implementation</li>
                </ul>
              </div>
            </div>
          </label>
        </div>
      </div>

      {progress === 100 && (
        <div className="mt-8 bg-green-50 dark:bg-green-900/30 border-2 border-green-500 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
            ✓ You're Ready!
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            You've completed all preparation steps. Proceed to the next section to learn about specific prompting methods.
          </p>
        </div>
      )}
    </div>
  );
}
