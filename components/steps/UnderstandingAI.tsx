export default function UnderstandingAI() {
  return (
    <div className="max-w-none">
      <h2 className="font-serif mb-8">
        Understanding How AI Grading Works
      </h2>

      <p className="text-lg mb-10">
        Before implementing AI grading, it's essential to understand the underlying technology and how it processes legal analysis.
      </p>

      <h3 className="font-serif mb-6">
        Large Language Models (LLMs) Basics
      </h3>

      <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 mb-8">
        <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-4">How LLMs Work</h4>
        <p className="mb-4">
          LLMs are trained on vast amounts of text and use a "transformer" architecture developed in 2017. They excel at:
        </p>
        <ul className="space-y-3 ml-4">
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
            <span><strong>Next-token prediction:</strong> Predicting the most likely next word/phrase based on context</span>
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
            <span><strong>Attention mechanisms:</strong> Giving different weights to different parts of input text</span>
          </li>
          <li className="flex items-start">
            <span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
            <span><strong>Pattern recognition:</strong> Identifying conceptual relationships learned during training</span>
          </li>
        </ul>
      </div>

      <h3 className="font-serif mb-6">
        Four Approaches Tested
      </h3>

      <div className="space-y-4 mb-10">
        <div className="border-l-4 border-neutral-300 bg-cream dark:bg-neutral-700/30 p-5 rounded-r-xl">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">
            1. Open (Simplest)
          </h4>
          <p className="mb-2">
            <strong className="text-neutral-600">Correlation: 0.66-0.80</strong>
          </p>
          <p className="mb-2">
            Provides only the question, student answer, and score range. Relies entirely on the LLM's internal knowledge of law.
          </p>
          <p className="text-sm text-neutral-500">
            ✓ Easiest to implement • ✗ Most likely to deviate from your grading preferences
          </p>
        </div>

        <div className="border-l-4 border-tan-dark bg-tan-light dark:bg-tan-dark/20 p-5 rounded-r-xl">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">
            2. Rubric (Recommended)
          </h4>
          <p className="mb-2">
            <strong className="text-tan-dark">Correlation: 0.78-0.93</strong>
          </p>
          <p className="mb-2">
            Adds your detailed grading rubric to the prompt. The LLM considers your criteria but outputs a single overall score.
          </p>
          <p className="text-sm text-neutral-500">
            ✓ Best accuracy-to-effort ratio • ✓ Uses your existing rubric • ✓ Straightforward implementation
          </p>
        </div>

        <div className="border-l-4 border-neutral-400 bg-cream dark:bg-neutral-700/30 p-5 rounded-r-xl">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">
            3. Bespoke (More Complex)
          </h4>
          <p className="mb-2">
            <strong className="text-neutral-600">Correlation: 0.80-0.92</strong>
          </p>
          <p className="mb-2">
            Requires LLM to output individual scores for each rubric element, which are then summed.
          </p>
          <p className="text-sm text-neutral-500">
            ✓ More granular feedback • ✗ Requires custom code for each exam • ≈ No significant improvement over Rubric
          </p>
        </div>

        <div className="border-l-4 border-neutral-500 bg-cream dark:bg-neutral-700/30 p-5 rounded-r-xl">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">
            4. Pairwise (Most Resource-Intensive)
          </h4>
          <p className="mb-2">
            <strong className="text-neutral-600">Correlation: 0.84-0.91</strong>
          </p>
          <p className="mb-2">
            LLM compares answer pairs and ranks them using Bradley-Terry scaling. Requires quadratic comparisons (e.g., 4,422 for 67 students).
          </p>
          <p className="text-sm text-neutral-500">
            ✓ Theoretically more reliable • ✗ Extremely expensive • ✗ Not practical for manual implementation
          </p>
        </div>
      </div>

      <div className="bg-cream dark:bg-neutral-700/30 border-l-4 border-tan-dark p-6 mb-10 rounded-r-xl">
        <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">Key Takeaway</h4>
        <p>
          The <strong>Rubric approach</strong> offers the best balance for most professors: it significantly improves accuracy over the Open method while remaining straightforward to implement with tools you already have.
        </p>
      </div>

      <h3 className="font-serif mb-6">
        What Makes Legal Analysis Challenging for AI?
      </h3>

      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="w-6 h-6 bg-neutral-700 dark:bg-neutral-500 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <span className="text-white text-xs font-bold">!</span>
          </span>
          <div>
            <strong className="text-neutral-900 dark:text-neutral-50">Extended-response format:</strong>
            <p>
              Unlike multiple choice, essay answers require sophisticated text analysis
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="w-6 h-6 bg-neutral-700 dark:bg-neutral-500 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <span className="text-white text-xs font-bold">!</span>
          </span>
          <div>
            <strong className="text-neutral-900 dark:text-neutral-50">Multiple valid approaches:</strong>
            <p>
              Many ways to correctly answer legal questions, some unanticipated by grader
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="w-6 h-6 bg-neutral-700 dark:bg-neutral-500 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <span className="text-white text-xs font-bold">!</span>
          </span>
          <div>
            <strong className="text-neutral-900 dark:text-neutral-50">Complex reasoning:</strong>
            <p>
              Requires identifying issues, applying rules, and reaching conclusions
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
