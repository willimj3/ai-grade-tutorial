export default function Introduction() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Welcome to the AI Exam Grading Guide
      </h2>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
        <p className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
          What This Guide Covers
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          This interactive guide will walk you through the process of safely implementing AI-assisted grading for law school exams, based on rigorous empirical research showing that LLMs can achieve correlation coefficients of up to 0.93 with human graders when provided with detailed rubrics.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Key Research Findings
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">High Accuracy</h4>
          <p className="text-gray-700 dark:text-gray-300">
            GPT-5 achieved Pearson correlations of 0.66-0.80 without rubrics, and 0.78-0.93 with detailed rubrics across four law school exams.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Tested Subjects</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Research validated across Civil Procedure, Contracts, Torts, and Corporations courses at top-30 U.S. law schools.
          </p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Practical Applications</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Beyond full automation: grade validation, practice exam feedback, and error detection in human grading.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">Ethical Framework</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Addresses fairness concerns, bias mitigation, and when AI errors may differ from human errors.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Who This Guide Is For
      </h3>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start">
          <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
          <span className="text-gray-700 dark:text-gray-300">
            Law professors considering AI-assisted grading
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
          <span className="text-gray-700 dark:text-gray-300">
            Legal education administrators evaluating grading technologies
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
          <span className="text-gray-700 dark:text-gray-300">
            Anyone interested in providing better feedback to law students
          </span>
        </li>
      </ul>

      <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Important Note</h4>
        <p className="text-gray-700 dark:text-gray-300">
          This guide focuses on practical, straightforward implementation methods that don't require advanced technical expertise. The "Rubric" approach highlighted here offers the best balance of accuracy and ease of use for most professors.
        </p>
      </div>
    </div>
  );
}
