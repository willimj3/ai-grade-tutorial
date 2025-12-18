export default function Introduction() {
  return (
    <div className="max-w-none">
      <h2 className="font-serif mb-8">
        Welcome to the AI Exam Grading Guide
      </h2>

      <div className="bg-cream dark:bg-neutral-700/30 border-l-4 border-tan-dark p-6 mb-10 rounded-r-xl">
        <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
          What This Guide Covers
        </p>
        <p>
          This interactive guide will walk you through the process of safely implementing AI-assisted grading for law school exams, based on rigorous empirical research showing that LLMs can achieve correlation coefficients of up to 0.93 with human graders when provided with detailed rubrics.
        </p>
      </div>

      <h3 className="font-serif mb-6">
        Key Research Findings
      </h3>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <div className="w-10 h-10 bg-tan dark:bg-tan-dark rounded-lg flex items-center justify-center mb-4">
            <span className="text-neutral-800 dark:text-white font-bold text-sm">93%</span>
          </div>
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">High Accuracy</h4>
          <p className="text-sm">
            GPT-5 achieved Pearson correlations of 0.66-0.80 without rubrics, and 0.78-0.93 with detailed rubrics across four law school exams.
          </p>
        </div>

        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <div className="w-10 h-10 bg-neutral-300 dark:bg-neutral-600 rounded-lg flex items-center justify-center mb-4">
            <span className="text-neutral-800 dark:text-white font-bold">4</span>
          </div>
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">Tested Subjects</h4>
          <p className="text-sm">
            Research validated across Civil Procedure, Contracts, Torts, and Corporations courses at top-30 U.S. law schools.
          </p>
        </div>

        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <div className="w-10 h-10 bg-tan-dark rounded-lg flex items-center justify-center mb-4">
            <span className="text-white font-bold">+</span>
          </div>
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">Practical Applications</h4>
          <p className="text-sm">
            Beyond full automation: grade validation, practice exam feedback, and error detection in human grading.
          </p>
        </div>

        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <div className="w-10 h-10 bg-neutral-700 dark:bg-neutral-500 rounded-lg flex items-center justify-center mb-4">
            <span className="text-white font-bold">!</span>
          </div>
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-2">Ethical Framework</h4>
          <p className="text-sm">
            Addresses fairness concerns, bias mitigation, and when AI errors may differ from human errors.
          </p>
        </div>
      </div>

      <h3 className="font-serif mb-6">
        Who This Guide Is For
      </h3>

      <ul className="space-y-4 mb-10">
        <li className="flex items-start">
          <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-neutral-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>
            Law professors considering AI-assisted grading
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-neutral-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>
            Legal education administrators evaluating grading technologies
          </span>
        </li>
        <li className="flex items-start">
          <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-neutral-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>
            Anyone interested in providing better feedback to law students
          </span>
        </li>
      </ul>

      <div className="bg-cream dark:bg-neutral-700/50 p-6 rounded-xl border border-neutral-200 dark:border-neutral-600">
        <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">Important Note</h4>
        <p>
          This guide focuses on practical, straightforward implementation methods that don't require advanced technical expertise. The "Rubric" approach highlighted here offers the best balance of accuracy and ease of use for most professors.
        </p>
      </div>
    </div>
  );
}
