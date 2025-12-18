export default function Implementation() {
  return (
    <div className="max-w-none">
      <h2 className="font-serif mb-8">
        Step-by-Step Implementation Guide
      </h2>

      <p className="text-lg mb-10">
        Follow these steps to safely implement AI-assisted grading for your law school exams. This guide focuses on the Rubric method, which offers the best balance of accuracy and ease.
      </p>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-tan-dark">
          <div className="flex items-center mb-4">
            <div className="bg-tan dark:bg-tan-dark text-neutral-800 dark:text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              1
            </div>
            <h3 className="font-serif text-neutral-900 dark:text-neutral-50">
              Create Your Detailed Rubric
            </h3>
          </div>
          <p className="mb-4">
            The quality of your rubric directly impacts AI grading accuracy. A more detailed rubric leads to better results.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Rubric should include:</p>
            <ul className="space-y-2">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Each discrete issue or element students should address</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Specific point values for each element</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Partial credit criteria (e.g., 2/3 points for identifying issue but not fully analyzing)</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Key legal rules or doctrines students should apply</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Expected analytical structure (IRAC, CREAC, etc.)</li>
            </ul>
          </div>
          <div className="mt-4 bg-neutral-100 dark:bg-neutral-700/50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Tip:</strong> If you already have a rubric, great! If not, creating one will improve both AI <em>and</em> human grading consistency.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <div className="flex items-center mb-4">
            <div className="bg-neutral-300 dark:bg-neutral-600 text-neutral-800 dark:text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              2
            </div>
            <h3 className="font-serif text-neutral-900 dark:text-neutral-50">
              Prepare Your Prompt Template
            </h3>
          </div>
          <p className="mb-4">
            Create a reusable template that includes your rubric. You'll fill in the student answer for each grading session.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Template structure:</p>
            <ol className="space-y-2">
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">1</span><strong>System instructions:</strong> "You are grading a law school exam..."</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">2</span><strong>The exam question:</strong> Full text of the fact pattern and instructions</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">3</span><strong>The grading rubric:</strong> Your detailed scoring criteria</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">4</span><strong>The student answer:</strong> [Leave this blank in template]</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">5</span><strong>Output format:</strong> Specify how you want the grade presented</li>
            </ol>
          </div>
          <div className="mt-4 bg-neutral-100 dark:bg-neutral-700/50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Tip:</strong> Save your template in a Word document or text file. For each student, copy the template and paste in their answer.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <div className="flex items-center mb-4">
            <div className="bg-neutral-300 dark:bg-neutral-600 text-neutral-800 dark:text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              3
            </div>
            <h3 className="font-serif text-neutral-900 dark:text-neutral-50">
              Test on a Sample
            </h3>
          </div>
          <p className="mb-4">
            Before grading all exams, test your prompt on 3-5 student answers to calibrate.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Select diverse samples:</p>
            <ul className="space-y-2">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>One answer you expect to score high</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>One answer you expect to score low</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>One or two answers in the middle range</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>One answer with an unconventional approach (if available)</li>
            </ul>
          </div>
          <div className="mt-4 bg-neutral-100 dark:bg-neutral-700/50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>What to look for:</strong> Grade these yourself first, then compare your grades to the AI's grades. Look for systematic discrepancies or concerning patterns.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <div className="flex items-center mb-4">
            <div className="bg-neutral-300 dark:bg-neutral-600 text-neutral-800 dark:text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              4
            </div>
            <h3 className="font-serif text-neutral-900 dark:text-neutral-50">
              Refine Your Rubric (If Needed)
            </h3>
          </div>
          <p className="mb-4">
            Based on your test results, you may need to clarify or expand your rubric.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Common adjustments:</p>
            <ul className="space-y-2">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Add explicit instructions if AI is missing valid alternative approaches</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Clarify partial credit scenarios</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Specify relative importance of different elements</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Add examples of what constitutes "excellent," "good," and "poor" analysis</li>
            </ul>
          </div>
        </div>

        {/* Step 5 */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-tan-dark">
          <div className="flex items-center mb-4">
            <div className="bg-tan dark:bg-tan-dark text-neutral-800 dark:text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              5
            </div>
            <h3 className="font-serif text-neutral-900 dark:text-neutral-50">
              Grade All Exams
            </h3>
          </div>
          <p className="mb-4">
            Process all student answers through your AI grading system.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">For each student:</p>
            <ol className="space-y-2">
              <li className="flex items-start"><span className="w-5 h-5 bg-tan dark:bg-tan-dark rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">1</span>Copy your prompt template</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-tan dark:bg-tan-dark rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">2</span>Insert the student's answer</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-tan dark:bg-tan-dark rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">3</span>Submit to your chosen AI model (ChatGPT, Claude, etc.)</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-tan dark:bg-tan-dark rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">4</span>Record the AI-generated score in your spreadsheet</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-tan dark:bg-tan-dark rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">5</span>Save the AI's detailed feedback (optional but recommended)</li>
            </ol>
          </div>
          <div className="mt-4 bg-neutral-100 dark:bg-neutral-700/50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Pro tip:</strong> For first-time users, also grade manually or keep your existing grades to compare and validate.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <div className="flex items-center mb-4">
            <div className="bg-neutral-300 dark:bg-neutral-600 text-neutral-800 dark:text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              6
            </div>
            <h3 className="font-serif text-neutral-900 dark:text-neutral-50">
              Review and Validate
            </h3>
          </div>
          <p className="mb-4">
            Don't just accept AI grades blindly. Implement a review process.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Recommended validation:</p>
            <ul className="space-y-2">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Review outliers:</strong> Manually check any exam where AI grade differs significantly from what you'd expect</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Spot check:</strong> Randomly review 5-10% of exams to ensure AI is grading consistently</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Compare with human grades:</strong> If you graded first, look at correlation and investigate large discrepancies</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Check for patterns:</strong> Look for any systematic issues (e.g., consistently over/undervaluing certain types of analysis)</li>
            </ul>
          </div>
        </div>

        {/* Step 7 */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <div className="flex items-center mb-4">
            <div className="bg-neutral-300 dark:bg-neutral-600 text-neutral-800 dark:text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              7
            </div>
            <h3 className="font-serif text-neutral-900 dark:text-neutral-50">
              Finalize and Curve (If Applicable)
            </h3>
          </div>
          <p className="mb-4">
            Apply any final adjustments, curves, or institutional grading requirements.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p>
              AI grading produces raw scores. You'll still need to apply any mandatory curves or convert numerical scores to letter grades according to your institution's policies.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-cream dark:bg-neutral-700/50 p-6 rounded-xl mt-10 border border-neutral-200 dark:border-neutral-600">
        <h3 className="font-serif text-neutral-900 dark:text-neutral-50 mb-4">
          Time Estimate
        </h3>
        <p className="mb-4">
          For a class of 50 students:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>First time (with rubric creation):</strong> 4-6 hours</li>
          <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Subsequent exams (with existing rubric):</strong> 2-3 hours</li>
          <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Traditional grading baseline:</strong> 15-25 hours</li>
        </ul>
        <p className="text-sm text-neutral-500 mt-4">
          Note: Time savings increase with class size and decrease if you're already using detailed rubrics.
        </p>
      </div>
    </div>
  );
}
