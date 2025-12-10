import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { examText } = await request.json();

    if (!examText || typeof examText !== "string") {
      return NextResponse.json(
        { error: "Exam text is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        messages: [
          {
            role: "user",
            content: `You are an expert law school professor helping to create a detailed grading rubric for an exam question. Based on research (Cope et al., 2025), detailed rubrics with specific point allocations significantly improve grading consistency.

Analyze this exam question and create a comprehensive grading rubric:

<exam_question>
${examText}
</exam_question>

Create a rubric with the following structure:
1. Identify all discrete legal issues/elements students should address
2. Assign specific point values to each element
3. Include partial credit criteria for each element
4. Consider common analytical approaches (IRAC, CREAC, etc.)

Respond ONLY with valid JSON in this exact format (no markdown, no explanation):
{
  "examType": "Brief description of exam type (e.g., 'Torts - Negligence Analysis')",
  "totalPoints": <number>,
  "elements": [
    {
      "id": "unique_id",
      "name": "Element Name (e.g., 'Duty of Care')",
      "description": "What students should address",
      "maxPoints": <number>,
      "criteria": [
        {"points": <full points>, "description": "Full credit criteria"},
        {"points": <partial points>, "description": "Partial credit criteria"},
        {"points": 0, "description": "No credit criteria"}
      ]
    }
  ]
}

Be thorough - include all issues a well-prepared student might identify. Typical law school essay questions have 5-12 distinct elements worth grading.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Anthropic API error:", errorData);
      return NextResponse.json(
        { error: errorData.error?.message || `API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.content[0]?.text;

    if (!content) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    // Parse the JSON response - strip markdown code blocks if present
    try {
      let jsonContent = content.trim();

      // Remove markdown code block wrapper if present
      if (jsonContent.startsWith("```json")) {
        jsonContent = jsonContent.slice(7); // Remove ```json
      } else if (jsonContent.startsWith("```")) {
        jsonContent = jsonContent.slice(3); // Remove ```
      }

      if (jsonContent.endsWith("```")) {
        jsonContent = jsonContent.slice(0, -3); // Remove trailing ```
      }

      jsonContent = jsonContent.trim();

      const rubric = JSON.parse(jsonContent);
      return NextResponse.json({ rubric });
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in generate-rubric API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
