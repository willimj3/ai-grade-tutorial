export default function EthicalConsiderations() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Ethical Considerations & Limitations
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        While AI grading shows promise, it's crucial to understand the ethical implications, potential biases, and how to address student concerns.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-8">
        <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
          Core Principle: Human Oversight
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Even with high correlations, AI should supplement, not entirely replace, human judgment—at least initially. The research authors acknowledge that institutional and ethical concerns may prevent full automation in the near term.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Key Ethical Considerations
      </h3>

      <div className="space-y-6 mb-8">
        {/* Different Errors */}
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">
            1. Different Types of Errors
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            AI may make different mistakes than humans would, even if the total error rate is comparable.
          </p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Example Concern:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              If an AI consistently undervalues creative approaches or novel arguments that a human grader would recognize as valid, it could unfairly penalize certain students even if aggregate accuracy is high.
            </p>
          </div>
          <div className="mt-3 p-3 bg-red-100 dark:bg-red-900/40 rounded">
            <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">Mitigation:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Review exams with large discrepancies between human and AI grades. Look for patterns in which types of answers the AI struggles with.
            </p>
          </div>
        </div>

        {/* Bias Concerns */}
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
          <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">
            2. Potential for Bias
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            LLMs could potentially exhibit biases based on writing style, language patterns, or cultural references in student answers.
          </p>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p><strong>Possible sources of bias:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Training data biases reflected in the model</li>
              <li>• Systematic preferences for certain writing styles</li>
              <li>• Differential treatment of non-native English speakers</li>
              <li>• Penalizing unconventional but valid analytical approaches</li>
            </ul>
          </div>
          <div className="mt-3 p-3 bg-orange-100 dark:bg-orange-900/40 rounded">
            <p className="text-sm font-semibold text-orange-900 dark:text-orange-100 mb-1">Note from Research:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              The study did not find evidence of systematic bias, but sample sizes were limited. Blind grading protocols should be maintained when using AI.
            </p>
          </div>
        </div>

        {/* Human Grading Isn't Perfect */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">
            3. Acknowledging Human Grading Limitations
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            The research emphasizes that human grading should not be treated as a "gold standard."
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700 dark:text-gray-300"><strong>Well-documented human grading issues:</strong></p>
            <ul className="ml-6 space-y-1 text-gray-700 dark:text-gray-300">
              <li>• <strong>Fatigue:</strong> Quality declines over long grading sessions</li>
              <li>• <strong>Inconsistency:</strong> Same grader may score similar answers differently</li>
              <li>• <strong>Halo effect:</strong> Prior impressions of student influence scoring</li>
              <li>• <strong>Order effects:</strong> Early vs. late exams graded differently</li>
              <li>• <strong>Implicit biases:</strong> Even with blind grading, writing style cues can trigger biases</li>
            </ul>
          </div>
          <div className="mt-3 p-3 bg-blue-100 dark:bg-blue-900/40 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Key insight:</strong> AI grading offers potential to reduce fatigue and increase consistency, even if it introduces different types of errors.
            </p>
          </div>
        </div>

        {/* Student Trust */}
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
          <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">
            4. Student Trust and Perception
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Research shows people often undervalue AI-generated output, even when quality is equivalent to human work.
          </p>
          <div className="mt-3 p-3 bg-purple-100 dark:bg-purple-900/40 rounded">
            <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-1">Recommendation:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Be transparent with students about your use of AI as a grading tool. Explain the research backing, your validation process, and that you maintain oversight.
            </p>
          </div>
        </div>

        {/* Professional Responsibility */}
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">
            5. Professional Responsibility
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Consider whether delegating grading to AI is consistent with your role as an educator.
          </p>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p><strong>Questions to consider:</strong></p>
            <ul className="ml-6 space-y-1">
              <li>• Are you hired/paid in part to personally evaluate students?</li>
              <li>• Does your institution have policies requiring faculty to grade exams?</li>
              <li>• Are there ABA requirements about who can assign grades?</li>
              <li>• How is this different from using teaching assistants?</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Addressing Common Concerns
      </h3>

      <div className="space-y-4">
        <details className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
          <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
            "Won't AI miss nuanced arguments that humans would catch?"
          </summary>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            Possibly, but humans also miss things, especially when fatigued. The research found high correlations even without explicit instructions about nuance. Using detailed rubrics that specify the range of acceptable approaches can help AI recognize valid alternative arguments.
          </p>
        </details>

        <details className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
          <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
            "What if students use AI to write better exam answers?"
          </summary>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            This is a separate concern from AI grading. Exam security (closed-book, proctored environments) addresses this regardless of how grading is conducted. AI grading doesn't make this problem worse.
          </p>
        </details>

        <details className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
          <summary className="font-bold text-gray-900 dark:text-white cursor-pointer">
            "Is it fair to use AI when humans make grading mistakes too?"
          </summary>
          <p className="text-gray-700 dark:text-gray-300 mt-3">
            This is a philosophical question. The research argues that if AI makes comparable or fewer errors than humans on average, and if those errors are random rather than systematic, there's an argument that AI grading could actually be <em>more</em> fair. However, reasonable people may disagree, especially if they believe human judgment has intrinsic value beyond accuracy.
          </p>
        </details>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-500 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">
          Recommended Ethical Framework
        </h3>
        <ol className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>1. <strong>Start with validation:</strong> Use AI to supplement, not replace, human grading initially</li>
          <li>2. <strong>Be transparent:</strong> Inform students about your use of AI tools</li>
          <li>3. <strong>Maintain oversight:</strong> Review outlier cases and spot-check random samples</li>
          <li>4. <strong>Monitor for bias:</strong> Look for patterns in discrepancies across student demographics</li>
          <li>5. <strong>Preserve student rights:</strong> Maintain grade appeal processes and human review options</li>
          <li>6. <strong>Check institutional policies:</strong> Ensure compliance with school and ABA requirements</li>
        </ol>
      </div>
    </div>
  );
}
