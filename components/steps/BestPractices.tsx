export default function BestPractices() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Best Practices & Alternative Uses
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Beyond full automation, AI grading technology can enhance legal education in multiple ways. Here are research-backed best practices and alternative applications.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Best Practices for Safe Implementation
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">
            ✓ Do: Start Small
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Begin with a single exam or use AI for practice exams before deploying on high-stakes final exams. Build confidence in the system gradually.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">
            ✗ Don't: Fully Automate Immediately
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Maintain human oversight, especially in your first semester using AI grading. Review discrepancies and outliers carefully.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">
            ✓ Do: Use Detailed Rubrics
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Research shows correlation increases from 0.66-0.80 to 0.78-0.93 with detailed rubrics. The investment in rubric quality pays off.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">
            ✗ Don't: Skip Validation
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Always review a sample of AI-graded exams. Look for systematic errors or biases that might disadvantage certain students.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">
            ✓ Do: Be Transparent
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Inform students that you're using AI as a grading tool. Explain your validation process and maintain traditional grade appeal mechanisms.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">
            ✗ Don't: Ignore Institutional Policies
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Check with your administration about faculty grading requirements, student privacy rules, and ABA compliance before implementing.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Alternative Applications of AI Grading
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Even if you're not ready for full AI grading, the research suggests several valuable alternative uses:
      </p>

      <div className="space-y-6 mb-8">
        {/* Grade Validation */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border-l-4 border-purple-600">
          <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
            1. Grade Validation & Error Detection
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Use AI to double-check your own grading and identify potential errors.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">How it works:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>1. Grade exams yourself first using your traditional process</li>
              <li>2. Run the same exams through AI grading</li>
              <li>3. Compare results and investigate large discrepancies (e.g., &gt;10% difference)</li>
              <li>4. Review flagged exams to catch grading errors or reconsider your assessment</li>
            </ul>
          </div>
          <div className="mt-3 bg-purple-100 dark:bg-purple-900/40 p-4 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Benefit:</strong> The research found instances where AI flagged apparent human grading errors. One example showed a student receiving more points than the rubric warranted.
            </p>
          </div>
        </div>

        {/* Practice Exams */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border-l-4 border-green-600">
          <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
            2. Practice Exam Feedback
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Provide students with rapid, personalized feedback on practice exams without spending hours grading.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">Implementation:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>• Create practice problems with rubrics</li>
              <li>• Students complete practice exams</li>
              <li>• You or students run answers through AI grading</li>
              <li>• Students receive immediate feedback on strengths/weaknesses</li>
            </ul>
          </div>
          <div className="mt-3 bg-green-100 dark:bg-green-900/40 p-4 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Key advantage:</strong> Addresses ABA's new requirement for formative assessments in all first-year courses without overwhelming faculty with additional grading burdens.
            </p>
          </div>
        </div>

        {/* Midterm Grading */}
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-6 rounded-lg border-l-4 border-indigo-600">
          <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">
            3. Midterm Exam Feedback
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Provide substantive feedback on midterms without the time investment of full grading.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Many professors want to give midterms for pedagogical value but skip them due to grading time. AI can generate detailed feedback on ungraded midterms, helping students improve without creating grading obligations.
            </p>
          </div>
        </div>

        {/* Professional Development */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg border-l-4 border-orange-600">
          <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
            4. Junior Lawyer Feedback
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Beyond academia: Use AI to provide feedback on junior lawyers' work product.
          </p>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Law firms could develop rubrics for common tasks (memo writing, contract drafting) and use AI to provide consistent feedback to associates, accelerating their development while freeing senior lawyers' time.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Measuring Success
      </h3>

      <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg mb-8">
        <p className="font-semibold text-teal-900 dark:text-teal-100 mb-3">Track these metrics to evaluate your implementation:</p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• <strong>Correlation:</strong> Compare AI grades to your grades (aim for r &gt; 0.85)</li>
          <li>• <strong>Time savings:</strong> Log hours spent on AI-assisted vs. traditional grading</li>
          <li>• <strong>Error detection:</strong> Count grading mistakes caught through AI validation</li>
          <li>• <strong>Student feedback:</strong> Survey students about the quality of AI-generated feedback</li>
          <li>• <strong>Grade appeals:</strong> Monitor if AI grading affects appeal rates or outcomes</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Resources & Further Reading
      </h3>

      <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg space-y-3">
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-1">Primary Research</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Cope, K.L., Frankenreiter, J., Hirst, S., Posner, E.A., Schwarcz, D., & Thorley, D. (2025).
            "Grading Machines: Can AI Exam-Grading Replace Law Professors?" SSRN Working Paper 5851362.
          </p>
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-1">Related Studies</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            • Choi et al. (2022) - "ChatGPT Goes to Law School"<br />
            • Katz et al. (2024) - "GPT-4 Passes the Bar Exam"<br />
            • Martin et al. (2024) - "Better Call GPT: Comparing Large Language Models Against Lawyers"
          </p>
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-1">ABA Standards</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            American Bar Association (2025). "Introduction to Learning Outcomes, Assessment, and Evaluation Standards" - New requirements for formative assessments in first-year courses.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg mt-8">
        <h3 className="text-2xl font-bold mb-4">
          Congratulations! You're Ready to Get Started
        </h3>
        <p className="mb-4">
          You now have a comprehensive understanding of how to safely implement AI-assisted grading for law school exams.
        </p>
        <p className="mb-4">
          Remember: Start small, maintain oversight, and focus on using AI as a tool to enhance—not replace—your professional judgment.
        </p>
        <div className="bg-white/10 p-4 rounded mt-4">
          <p className="font-semibold mb-2">Key Takeaways:</p>
          <ul className="space-y-1 text-sm">
            <li>✓ Rubric method offers best balance (0.78-0.93 correlation)</li>
            <li>✓ Detailed rubrics dramatically improve accuracy</li>
            <li>✓ Start with validation and alternative uses</li>
            <li>✓ Maintain transparency with students and administration</li>
            <li>✓ AI can reduce grading time while potentially improving consistency</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
