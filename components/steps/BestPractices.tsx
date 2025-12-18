export default function BestPractices() {
  return (
    <div className="max-w-none">
      <h2 className="font-serif mb-8">
        Best Practices & Alternative Uses
      </h2>

      <p className="text-lg mb-10">
        Beyond full automation, AI grading technology can enhance legal education in multiple ways. Here are research-backed best practices and alternative applications.
      </p>

      <h3 className="font-serif mb-6">
        Best Practices for Safe Implementation
      </h3>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            Do: Start Small
          </h4>
          <p>
            Begin with a single exam or use AI for practice exams before deploying on high-stakes final exams. Build confidence in the system gradually.
          </p>
        </div>

        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            Don't: Fully Automate Immediately
          </h4>
          <p>
            Maintain human oversight, especially in your first semester using AI grading. Review discrepancies and outliers carefully.
          </p>
        </div>

        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            Do: Use Detailed Rubrics
          </h4>
          <p>
            Research shows correlation increases from 0.66-0.80 to 0.78-0.93 with detailed rubrics. The investment in rubric quality pays off.
          </p>
        </div>

        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            Don't: Skip Validation
          </h4>
          <p>
            Always review a sample of AI-graded exams. Look for systematic errors or biases that might disadvantage certain students.
          </p>
        </div>

        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            Do: Be Transparent
          </h4>
          <p>
            Inform students that you're using AI as a grading tool. Explain your validation process and maintain traditional grade appeal mechanisms.
          </p>
        </div>

        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            Don't: Ignore Institutional Policies
          </h4>
          <p>
            Check with your administration about faculty grading requirements, student privacy rules, and ABA compliance before implementing.
          </p>
        </div>
      </div>

      <h3 className="font-serif mb-6">
        Alternative Applications of AI Grading
      </h3>

      <p className="mb-6">
        Even if you're not ready for full AI grading, the research suggests several valuable alternative uses:
      </p>

      <div className="space-y-5 mb-10">
        {/* Grade Validation */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-tan-dark">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            1. Grade Validation & Error Detection
          </h4>
          <p className="mb-3">
            Use AI to double-check your own grading and identify potential errors.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">How it works:</p>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">1</span>Grade exams yourself first using your traditional process</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">2</span>Run the same exams through AI grading</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">3</span>Compare results and investigate large discrepancies (e.g., &gt;10% difference)</li>
              <li className="flex items-start"><span className="w-5 h-5 bg-neutral-300 dark:bg-neutral-600 rounded text-neutral-800 dark:text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">4</span>Review flagged exams to catch grading errors or reconsider your assessment</li>
            </ol>
          </div>
          <div className="mt-3 bg-neutral-100 dark:bg-neutral-700/50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Benefit:</strong> The research found instances where AI flagged apparent human grading errors. One example showed a student receiving more points than the rubric warranted.
            </p>
          </div>
        </div>

        {/* Practice Exams */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            2. Practice Exam Feedback
          </h4>
          <p className="mb-3">
            Provide students with rapid, personalized feedback on practice exams without spending hours grading.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-2">Implementation:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Create practice problems with rubrics</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Students complete practice exams</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>You or students run answers through AI grading</li>
              <li className="flex items-start"><span className="w-1.5 h-1.5 bg-neutral-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>Students receive immediate feedback on strengths/weaknesses</li>
            </ul>
          </div>
          <div className="mt-3 bg-neutral-100 dark:bg-neutral-700/50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Key advantage:</strong> Addresses ABA's new requirement for formative assessments in all first-year courses without overwhelming faculty with additional grading burdens.
            </p>
          </div>
        </div>

        {/* Midterm Grading */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            3. Midterm Exam Feedback
          </h4>
          <p className="mb-3">
            Provide substantive feedback on midterms without the time investment of full grading.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="text-sm">
              Many professors want to give midterms for pedagogical value but skip them due to grading time. AI can generate detailed feedback on ungraded midterms, helping students improve without creating grading obligations.
            </p>
          </div>
        </div>

        {/* Professional Development */}
        <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border-l-4 border-neutral-400">
          <h4 className="font-serif text-neutral-900 dark:text-neutral-50 mb-3">
            4. Junior Lawyer Feedback
          </h4>
          <p className="mb-3">
            Beyond academia: Use AI to provide feedback on junior lawyers' work product.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg border border-neutral-100 dark:border-neutral-700">
            <p className="text-sm">
              Law firms could develop rubrics for common tasks (memo writing, contract drafting) and use AI to provide consistent feedback to associates, accelerating their development while freeing senior lawyers' time.
            </p>
          </div>
        </div>
      </div>

      <h3 className="font-serif mb-6">
        Measuring Success
      </h3>

      <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 mb-10">
        <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Track these metrics to evaluate your implementation:</p>
        <ul className="space-y-2">
          <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Correlation:</strong> Compare AI grades to your grades (aim for r &gt; 0.85)</li>
          <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Time savings:</strong> Log hours spent on AI-assisted vs. traditional grading</li>
          <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Error detection:</strong> Count grading mistakes caught through AI validation</li>
          <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Student feedback:</strong> Survey students about the quality of AI-generated feedback</li>
          <li className="flex items-start"><span className="w-1.5 h-1.5 bg-tan-dark rounded-full mr-3 mt-2.5 flex-shrink-0"></span><strong>Grade appeals:</strong> Monitor if AI grading affects appeal rates or outcomes</li>
        </ul>
      </div>

      <h3 className="font-serif mb-6">
        Resources & Further Reading
      </h3>

      <div className="bg-cream dark:bg-neutral-700/30 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 space-y-4 mb-10">
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Primary Research</p>
          <p className="text-sm">
            Cope, K.L., Frankenreiter, J., Hirst, S., Posner, E.A., Schwarcz, D., & Thorley, D. (2025).
            "Grading Machines: Can AI Exam-Grading Replace Law Professors?" SSRN Working Paper 5851362.
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Related Studies</p>
          <p className="text-sm">
            Choi et al. (2022) - "ChatGPT Goes to Law School"<br />
            Katz et al. (2024) - "GPT-4 Passes the Bar Exam"<br />
            Martin et al. (2024) - "Better Call GPT: Comparing Large Language Models Against Lawyers"
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">ABA Standards</p>
          <p className="text-sm">
            American Bar Association (2025). "Introduction to Learning Outcomes, Assessment, and Evaluation Standards" - New requirements for formative assessments in first-year courses.
          </p>
        </div>
      </div>

      <div className="bg-neutral-800 dark:bg-neutral-700 text-white p-8 rounded-xl">
        <h3 className="font-serif text-white mb-4">
          Congratulations! You're Ready to Get Started
        </h3>
        <p className="text-neutral-200 mb-4">
          You now have a comprehensive understanding of how to safely implement AI-assisted grading for law school exams.
        </p>
        <p className="text-neutral-200 mb-4">
          Remember: Start small, maintain oversight, and focus on using AI as a tool to enhance—not replace—your professional judgment.
        </p>
        <div className="bg-white/10 p-5 rounded-lg mt-4">
          <p className="font-semibold text-white mb-3">Key Takeaways:</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start text-white"><span className="w-1.5 h-1.5 bg-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>Rubric method offers best balance (0.78-0.93 correlation)</li>
            <li className="flex items-start text-white"><span className="w-1.5 h-1.5 bg-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>Detailed rubrics dramatically improve accuracy</li>
            <li className="flex items-start text-white"><span className="w-1.5 h-1.5 bg-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>Start with validation and alternative uses</li>
            <li className="flex items-start text-white"><span className="w-1.5 h-1.5 bg-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>Maintain transparency with students and administration</li>
            <li className="flex items-start text-white"><span className="w-1.5 h-1.5 bg-tan rounded-full mr-3 mt-2 flex-shrink-0"></span>AI can reduce grading time while potentially improving consistency</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
