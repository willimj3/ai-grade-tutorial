export default function Implementation() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Step-by-Step Implementation Guide
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Follow these steps to safely implement AI-assisted grading for your law school exams. This guide focuses on the Rubric method, which offers the best balance of accuracy and ease.
      </p>

      <div className="space-y-8">
        {/* Step 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border-l-4 border-blue-600">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create Your Detailed Rubric
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The quality of your rubric directly impacts AI grading accuracy. A more detailed rubric leads to better results.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">Rubric should include:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Each discrete issue or element students should address</li>
              <li>✓ Specific point values for each element</li>
              <li>✓ Partial credit criteria (e.g., 2/3 points for identifying issue but not fully analyzing)</li>
              <li>✓ Key legal rules or doctrines students should apply</li>
              <li>✓ Expected analytical structure (IRAC, CREAC, etc.)</li>
            </ul>
          </div>
          <div className="mt-4 bg-blue-100 dark:bg-blue-900/40 p-4 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Tip:</strong> If you already have a rubric, great! If not, creating one will improve both AI <em>and</em> human grading consistency.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border-l-4 border-green-600">
          <div className="flex items-center mb-4">
            <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Prepare Your Prompt Template
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Create a reusable template that includes your rubric. You'll fill in the student answer for each grading session.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">Template structure:</p>
            <ol className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>1. <strong>System instructions:</strong> "You are grading a law school exam..."</li>
              <li>2. <strong>The exam question:</strong> Full text of the fact pattern and instructions</li>
              <li>3. <strong>The grading rubric:</strong> Your detailed scoring criteria</li>
              <li>4. <strong>The student answer:</strong> [Leave this blank in template]</li>
              <li>5. <strong>Output format:</strong> Specify how you want the grade presented</li>
            </ol>
          </div>
          <div className="mt-4 bg-green-100 dark:bg-green-900/40 p-4 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Tip:</strong> Save your template in a Word document or text file. For each student, copy the template and paste in their answer.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border-l-4 border-purple-600">
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Test on a Sample
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Before grading all exams, test your prompt on 3-5 student answers to calibrate.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">Select diverse samples:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• One answer you expect to score high</li>
              <li>• One answer you expect to score low</li>
              <li>• One or two answers in the middle range</li>
              <li>• One answer with an unconventional approach (if available)</li>
            </ul>
          </div>
          <div className="mt-4 bg-purple-100 dark:bg-purple-900/40 p-4 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>What to look for:</strong> Grade these yourself first, then compare your grades to the AI's grades. Look for systematic discrepancies or concerning patterns.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg border-l-4 border-orange-600">
          <div className="flex items-center mb-4">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              4
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Refine Your Rubric (If Needed)
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Based on your test results, you may need to clarify or expand your rubric.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">Common adjustments:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Add explicit instructions if AI is missing valid alternative approaches</li>
              <li>• Clarify partial credit scenarios</li>
              <li>• Specify relative importance of different elements</li>
              <li>• Add examples of what constitutes "excellent," "good," and "poor" analysis</li>
            </ul>
          </div>
        </div>

        {/* Step 5 */}
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-lg border-l-4 border-indigo-600">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              5
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Grade All Exams
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Process all student answers through your AI grading system.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">For each student:</p>
            <ol className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>1. Copy your prompt template</li>
              <li>2. Insert the student's answer</li>
              <li>3. Submit to your chosen AI model (ChatGPT, Claude, etc.)</li>
              <li>4. Record the AI-generated score in your spreadsheet</li>
              <li>5. Save the AI's detailed feedback (optional but recommended)</li>
            </ol>
          </div>
          <div className="mt-4 bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Pro tip:</strong> For first-time users, also grade manually or keep your existing grades to compare and validate.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg border-l-4 border-red-600">
          <div className="flex items-center mb-4">
            <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              6
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Review and Validate
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Don't just accept AI grades blindly. Implement a review process.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">Recommended validation:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ <strong>Review outliers:</strong> Manually check any exam where AI grade differs significantly from what you'd expect</li>
              <li>✓ <strong>Spot check:</strong> Randomly review 5-10% of exams to ensure AI is grading consistently</li>
              <li>✓ <strong>Compare with human grades:</strong> If you graded first, look at correlation and investigate large discrepancies</li>
              <li>✓ <strong>Check for patterns:</strong> Look for any systematic issues (e.g., consistently over/undervaluing certain types of analysis)</li>
            </ul>
          </div>
        </div>

        {/* Step 7 */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-6 rounded-lg border-l-4 border-teal-600">
          <div className="flex items-center mb-4">
            <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
              7
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Finalize and Curve (If Applicable)
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Apply any final adjustments, curves, or institutional grading requirements.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              AI grading produces raw scores. You'll still need to apply any mandatory curves or convert numerical scores to letter grades according to your institution's policies.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Time Estimate
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          For a class of 50 students:
        </p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• <strong>First time (with rubric creation):</strong> 4-6 hours</li>
          <li>• <strong>Subsequent exams (with existing rubric):</strong> 2-3 hours</li>
          <li>• <strong>Traditional grading baseline:</strong> 15-25 hours</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          Note: Time savings increase with class size and decrease if you're already using detailed rubrics.
        </p>
      </div>
    </div>
  );
}
