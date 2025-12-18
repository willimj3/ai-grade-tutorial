export default function EthicalConsiderations() {
  return (
    <div className="max-w-none">
      <h2 className="font-serif mb-8">
        Ethical Considerations & Limitations
      </h2>

      <p className="text-lg mb-10">
        While AI grading shows promise, it's crucial to understand the ethical implications, potential biases, and how to address student concerns.
      </p>

      <div className="bg-cream dark:bg-neutral-700/30 border-l-4 border-tan-dark p-6 mb-10 rounded-r-xl">
        <h3 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
          Core Principle: Human Oversight
        </h3>
        <p>
          Even with high correlations, AI should supplement, not entirely replace, human judgment—at least initially. The research authors acknowledge that institutional and ethical concerns may prevent full automation in the near term.
        </p>
      </div>

      <h3 className="font-serif mb-6">
        Key Ethical Considerations
      </h3>

      <div className="space-y-5 mb-10">
        {/* Different Errors */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            1. Different Types of Errors
          </h4>
          <p className="mb-3">
            AI may make different mistakes than humans would, even if the total error rate is comparable.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Example Concern:</p>
            <p className="text-sm">
              If an AI consistently undervalues creative approaches or novel arguments that a human grader would recognize as valid, it could unfairly penalize certain students even if aggregate accuracy is high.
            </p>
          </div>
          <div className="mt-3 p-3 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Mitigation:</p>
            <p className="text-sm">
              Review exams with large discrepancies between human and AI grades. Look for patterns in which types of answers the AI struggles with.
            </p>
          </div>
        </div>

        {/* Bias Concerns */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            2. Potential for Bias
          </h4>
          <p className="mb-3">
            LLMs could potentially exhibit biases based on writing style, language patterns, or cultural references in student answers.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Possible sources of bias:</strong></p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Training data biases reflected in the model</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Systematic preferences for certain writing styles</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Differential treatment of non-native English speakers</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Penalizing unconventional but valid analytical approaches</li>
            </ul>
          </div>
          <div className="mt-3 p-3 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Note from Research:</p>
            <p className="text-sm">
              The study did not find evidence of systematic bias, but sample sizes were limited. Blind grading protocols should be maintained when using AI.
            </p>
          </div>
        </div>

        {/* Human Grading Isn't Perfect */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            3. Acknowledging Human Grading Limitations
          </h4>
          <p className="mb-3">
            The research emphasizes that human grading should not be treated as a "gold standard."
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Well-documented human grading issues:</strong></p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span><strong>Fatigue:</strong> Quality declines over long grading sessions</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span><strong>Inconsistency:</strong> Same grader may score similar answers differently</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span><strong>Halo effect:</strong> Prior impressions of student influence scoring</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span><strong>Order effects:</strong> Early vs. late exams graded differently</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span><strong>Implicit biases:</strong> Even with blind grading, writing style cues can trigger biases</li>
            </ul>
          </div>
          <div className="mt-3 p-3 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg">
            <p className="text-sm">
              <strong>Key insight:</strong> AI grading offers potential to reduce fatigue and increase consistency, even if it introduces different types of errors.
            </p>
          </div>
        </div>

        {/* Student Trust */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            4. Student Trust and Perception
          </h4>
          <p className="mb-3">
            Research shows people often undervalue AI-generated output, even when quality is equivalent to human work.
          </p>
          <div className="mt-3 p-3 bg-neutral-100 dark:bg-neutral-700/50 rounded-lg">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Recommendation:</p>
            <p className="text-sm">
              Be transparent with students about your use of AI as a grading tool. Explain the research backing, your validation process, and that you maintain oversight.
            </p>
          </div>
        </div>

        {/* Professional Responsibility */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            5. Professional Responsibility
          </h4>
          <p className="mb-3">
            Consider whether delegating grading to AI is consistent with your role as an educator.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Questions to consider:</strong></p>
            <ul className="ml-4 space-y-1">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Are you hired/paid in part to personally evaluate students?</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Does your institution have policies requiring faculty to grade exams?</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>Are there ABA requirements about who can assign grades?</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>How is this different from using teaching assistants?</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="font-serif mb-6">
        Addressing Common Concerns
      </h3>

      <div className="space-y-4">
        <details className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 group">
          <summary className="font-serif text-neutral-900 dark:text-neutral-50 cursor-pointer">
            "Won't AI miss nuanced arguments that humans would catch?"
          </summary>
          <p className="mt-3">
            Possibly, but humans also miss things, especially when fatigued. The research found high correlations even without explicit instructions about nuance. Using detailed rubrics that specify the range of acceptable approaches can help AI recognize valid alternative arguments.
          </p>
        </details>

        <details className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <summary className="font-serif text-neutral-900 dark:text-neutral-50 cursor-pointer">
            "What if students use AI to write better exam answers?"
          </summary>
          <p className="mt-3">
            This is a separate concern from AI grading. Exam security (closed-book, proctored environments) addresses this regardless of how grading is conducted. AI grading doesn't make this problem worse.
          </p>
        </details>

        <details className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <summary className="font-serif text-neutral-900 dark:text-neutral-50 cursor-pointer">
            "Is it fair to use AI when humans make grading mistakes too?"
          </summary>
          <p className="mt-3">
            This is a philosophical question. The research argues that if AI makes comparable or fewer errors than humans on average, and if those errors are random rather than systematic, there's an argument that AI grading could actually be <em>more</em> fair. However, reasonable people may disagree, especially if they believe human judgment has intrinsic value beyond accuracy.
          </p>
        </details>
      </div>

      <div className="bg-cream dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-600 p-6 rounded-xl mt-10">
        <h3 className="font-serif text-neutral-900 dark:text-neutral-50 mb-4">
          Recommended Ethical Framework
        </h3>
        <ol className="space-y-3">
          <li className="flex items-start">
            <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-neutral-800 dark:text-white text-sm font-bold">1</span>
            <span><strong>Start with validation:</strong> Use AI to supplement, not replace, human grading initially</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-neutral-800 dark:text-white text-sm font-bold">2</span>
            <span><strong>Be transparent:</strong> Inform students about your use of AI tools</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-neutral-800 dark:text-white text-sm font-bold">3</span>
            <span><strong>Maintain oversight:</strong> Review outlier cases and spot-check random samples</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-neutral-800 dark:text-white text-sm font-bold">4</span>
            <span><strong>Monitor for bias:</strong> Look for patterns in discrepancies across student demographics</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-neutral-800 dark:text-white text-sm font-bold">5</span>
            <span><strong>Preserve student rights:</strong> Maintain grade appeal processes and human review options</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-tan dark:bg-tan-dark rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-neutral-800 dark:text-white text-sm font-bold">6</span>
            <span><strong>Check institutional policies:</strong> Ensure compliance with school and ABA requirements</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
