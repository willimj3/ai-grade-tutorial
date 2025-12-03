export default function UnderstandingAI() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Understanding How AI Grading Works
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Before implementing AI grading, it's essential to understand the underlying technology and how it processes legal analysis.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Large Language Models (LLMs) Basics
      </h3>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg mb-6">
        <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">How LLMs Work</h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          LLMs are trained on vast amounts of text and use a "transformer" architecture developed in 2017. They excel at:
        </p>
        <ul className="space-y-2 ml-6">
          <li className="text-gray-700 dark:text-gray-300">
            • <strong>Next-token prediction:</strong> Predicting the most likely next word/phrase based on context
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            • <strong>Attention mechanisms:</strong> Giving different weights to different parts of input text
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            • <strong>Pattern recognition:</strong> Identifying conceptual relationships learned during training
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Four Approaches Tested
      </h3>

      <div className="space-y-4 mb-8">
        <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-5">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">
            1. Open (Simplest)
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Correlation: 0.66-0.80</strong>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Provides only the question, student answer, and score range. Relies entirely on the LLM's internal knowledge of law.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            ✓ Easiest to implement • ✗ Most likely to deviate from your grading preferences
          </p>
        </div>

        <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-5">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
            2. Rubric (Recommended)
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Correlation: 0.78-0.93</strong>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Adds your detailed grading rubric to the prompt. The LLM considers your criteria but outputs a single overall score.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            ✓ Best accuracy-to-effort ratio • ✓ Uses your existing rubric • ✓ Straightforward implementation
          </p>
        </div>

        <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 p-5">
          <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
            3. Bespoke (More Complex)
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Correlation: 0.80-0.92</strong>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Requires LLM to output individual scores for each rubric element, which are then summed.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            ✓ More granular feedback • ✗ Requires custom code for each exam • ≈ No significant improvement over Rubric
          </p>
        </div>

        <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-5">
          <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">
            4. Pairwise (Most Resource-Intensive)
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Correlation: 0.84-0.91</strong>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            LLM compares answer pairs and ranks them using Bradley-Terry scaling. Requires quadratic comparisons (e.g., 4,422 for 67 students).
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            ✓ Theoretically more reliable • ✗ Extremely expensive • ✗ Not practical for manual implementation
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-6">
        <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3">Key Takeaway</h4>
        <p className="text-gray-700 dark:text-gray-300">
          The <strong>Rubric approach</strong> offers the best balance for most professors: it significantly improves accuracy over the Open method while remaining straightforward to implement with tools you already have.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        What Makes Legal Analysis Challenging for AI?
      </h3>

      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-red-600 dark:text-red-400 mr-3 text-xl">⚠️</span>
          <div>
            <strong className="text-gray-900 dark:text-gray-100">Extended-response format:</strong>
            <p className="text-gray-700 dark:text-gray-300">
              Unlike multiple choice, essay answers require sophisticated text analysis
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-red-600 dark:text-red-400 mr-3 text-xl">⚠️</span>
          <div>
            <strong className="text-gray-900 dark:text-gray-100">Multiple valid approaches:</strong>
            <p className="text-gray-700 dark:text-gray-300">
              Many ways to correctly answer legal questions, some unanticipated by grader
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-red-600 dark:text-red-400 mr-3 text-xl">⚠️</span>
          <div>
            <strong className="text-gray-900 dark:text-gray-100">Complex reasoning:</strong>
            <p className="text-gray-700 dark:text-gray-300">
              Requires identifying issues, applying rules, and reaching conclusions
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
