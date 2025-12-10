"use client";

import { useState, useRef } from "react";
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  HeadingLevel,
  WidthType,
  AlignmentType,
  BorderStyle,
  ShadingType,
} from "docx";
import { saveAs } from "file-saver";

interface RubricElement {
  id: string;
  name: string;
  description: string;
  maxPoints: number;
  criteria: {
    points: number;
    description: string;
  }[];
}

interface GeneratedRubric {
  examType: string;
  totalPoints: number;
  elements: RubricElement[];
}

export default function RubricBuilder() {
  const [examText, setExamText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rubric, setRubric] = useState<GeneratedRubric | null>(null);
  const [step, setStep] = useState<"input" | "review" | "export">("input");
  const [copied, setCopied] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);
    setUploadedFileName(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/parse-file", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to parse file");
      }

      setExamText(data.text);
      setUploadedFileName(file.name);
    } catch (err) {
      console.error("Error uploading file:", err);
      setError(
        err instanceof Error ? err.message : "Failed to upload file"
      );
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const generateRubric = async () => {
    if (!examText.trim()) {
      setError("Please enter your exam question");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-rubric", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ examText }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Error: ${response.status}`);
      }

      setRubric(data.rubric);
      setStep("review");
    } catch (err) {
      console.error("Error generating rubric:", err);
      setError(
        err instanceof Error ? err.message : "Failed to generate rubric"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const updateElement = (
    elementId: string,
    field: keyof RubricElement,
    value: string | number
  ) => {
    if (!rubric) return;
    setRubric({
      ...rubric,
      elements: rubric.elements.map((el) =>
        el.id === elementId ? { ...el, [field]: value } : el
      ),
    });
  };

  const updateCriteria = (
    elementId: string,
    criteriaIndex: number,
    field: "points" | "description",
    value: string | number
  ) => {
    if (!rubric) return;
    setRubric({
      ...rubric,
      elements: rubric.elements.map((el) =>
        el.id === elementId
          ? {
              ...el,
              criteria: el.criteria.map((c, i) =>
                i === criteriaIndex ? { ...c, [field]: value } : c
              ),
            }
          : el
      ),
    });
  };

  const addElement = () => {
    if (!rubric) return;
    const newElement: RubricElement = {
      id: `element_${Date.now()}`,
      name: "New Element",
      description: "Describe what students should address",
      maxPoints: 3,
      criteria: [
        { points: 3, description: "Full credit" },
        { points: 2, description: "Partial credit" },
        { points: 0, description: "No credit" },
      ],
    };
    setRubric({
      ...rubric,
      elements: [...rubric.elements, newElement],
    });
  };

  const removeElement = (elementId: string) => {
    if (!rubric) return;
    setRubric({
      ...rubric,
      elements: rubric.elements.filter((el) => el.id !== elementId),
    });
  };

  const addCriteria = (elementId: string) => {
    if (!rubric) return;
    setRubric({
      ...rubric,
      elements: rubric.elements.map((el) =>
        el.id === elementId
          ? {
              ...el,
              criteria: [
                ...el.criteria,
                { points: 1, description: "New criteria" },
              ],
            }
          : el
      ),
    });
  };

  const removeCriteria = (elementId: string, criteriaIndex: number) => {
    if (!rubric) return;
    setRubric({
      ...rubric,
      elements: rubric.elements.map((el) =>
        el.id === elementId
          ? {
              ...el,
              criteria: el.criteria.filter((_, i) => i !== criteriaIndex),
            }
          : el
      ),
    });
  };

  const calculateTotalPoints = () => {
    if (!rubric) return 0;
    return rubric.elements.reduce((sum, el) => sum + el.maxPoints, 0);
  };

  const exportRubricOnly = () => {
    if (!rubric) return "";

    let rubricText = `GRADING RUBRIC (Total: ${calculateTotalPoints()} points)\n\n`;

    rubric.elements.forEach((el, index) => {
      rubricText += `${index + 1}. ${el.name} (${el.maxPoints} points)\n`;
      rubricText += `   ${el.description}\n`;
      el.criteria.forEach((c) => {
        rubricText += `   - ${c.points} points: ${c.description}\n`;
      });
      rubricText += "\n";
    });

    return rubricText;
  };

  const exportRubricAsPrompt = () => {
    if (!rubric) return "";

    const rubricText = exportRubricOnly();

    return `You are grading a law school exam answer using the provided rubric.

EXAM QUESTION:
${examText || "[Your exam question is already included above]"}

${rubricText}
STUDENT ANSWER:
[Paste the student's answer here]

GRADING INSTRUCTIONS:
- Evaluate the student's answer against each element in the rubric
- Assign points based on how well they addressed each element
- The maximum score is ${calculateTotalPoints()} points
- For each element, provide:
  1. The points awarded
  2. A brief explanation of why those points were given
- At the end, provide the total score and any overall comments

Total Score:`;
  };

  const copyToClipboard = async () => {
    const prompt = exportRubricAsPrompt();
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const exportToDocx = async () => {
    if (!rubric) return;

    const tableBorder = {
      style: BorderStyle.SINGLE,
      size: 1,
      color: "CCCCCC",
    };

    const children: (Paragraph | Table)[] = [
      // Title
      new Paragraph({
        children: [
          new TextRun({
            text: "GRADING RUBRIC",
            bold: true,
            size: 36,
            color: "1a365d",
          }),
        ],
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
      }),

      // Exam Type
      new Paragraph({
        children: [
          new TextRun({
            text: rubric.examType,
            bold: true,
            size: 28,
            color: "2d3748",
          }),
        ],
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
      }),

      // Total Points
      new Paragraph({
        children: [
          new TextRun({
            text: `Total Points: ${calculateTotalPoints()}`,
            bold: true,
            size: 24,
            color: "4a5568",
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
      }),
    ];

    // Create a table for each rubric element
    rubric.elements.forEach((element, index) => {
      // Element header
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${index + 1}. ${element.name}`,
              bold: true,
              size: 26,
              color: "1a365d",
            }),
            new TextRun({
              text: ` (${element.maxPoints} points)`,
              bold: true,
              size: 22,
              color: "718096",
            }),
          ],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 300, after: 100 },
        })
      );

      // Element description
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: element.description,
              size: 22,
              color: "4a5568",
              italics: true,
            }),
          ],
          spacing: { after: 200 },
        })
      );

      // Criteria table
      const tableRows: TableRow[] = [
        // Header row
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Points",
                      bold: true,
                      size: 22,
                      color: "FFFFFF",
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
              width: { size: 12, type: WidthType.PERCENTAGE },
              shading: { fill: "2b6cb0", type: ShadingType.CLEAR },
              borders: {
                top: tableBorder,
                bottom: tableBorder,
                left: tableBorder,
                right: tableBorder,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Criteria",
                      bold: true,
                      size: 22,
                      color: "FFFFFF",
                    }),
                  ],
                }),
              ],
              width: { size: 73, type: WidthType.PERCENTAGE },
              shading: { fill: "2b6cb0", type: ShadingType.CLEAR },
              borders: {
                top: tableBorder,
                bottom: tableBorder,
                left: tableBorder,
                right: tableBorder,
              },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Score",
                      bold: true,
                      size: 22,
                      color: "FFFFFF",
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
              width: { size: 15, type: WidthType.PERCENTAGE },
              shading: { fill: "2b6cb0", type: ShadingType.CLEAR },
              borders: {
                top: tableBorder,
                bottom: tableBorder,
                left: tableBorder,
                right: tableBorder,
              },
            }),
          ],
        }),
      ];

      // Criteria rows - only add Score cell to first row (spans all criteria)
      element.criteria.forEach((criterion, cIndex) => {
        const isEven = cIndex % 2 === 0;
        const rowChildren = [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: criterion.points.toString(),
                    bold: true,
                    size: 22,
                    color: criterion.points === element.maxPoints ? "276749" : criterion.points === 0 ? "c53030" : "744210",
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
            shading: { fill: isEven ? "f7fafc" : "FFFFFF", type: ShadingType.CLEAR },
            borders: {
              top: tableBorder,
              bottom: tableBorder,
              left: tableBorder,
              right: tableBorder,
            },
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: criterion.description,
                    size: 22,
                    color: "2d3748",
                  }),
                ],
              }),
            ],
            shading: { fill: isEven ? "f7fafc" : "FFFFFF", type: ShadingType.CLEAR },
            borders: {
              top: tableBorder,
              bottom: tableBorder,
              left: tableBorder,
              right: tableBorder,
            },
          }),
        ];

        // Add Score cell only to first row with rowSpan for all criteria
        if (cIndex === 0) {
          rowChildren.push(
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `     / ${element.maxPoints}`,
                      size: 22,
                      color: "718096",
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
              rowSpan: element.criteria.length,
              shading: { fill: "f7fafc", type: ShadingType.CLEAR },
              borders: {
                top: tableBorder,
                bottom: tableBorder,
                left: tableBorder,
                right: tableBorder,
              },
            })
          );
        }

        tableRows.push(
          new TableRow({
            children: rowChildren,
          })
        );
      });

      children.push(
        new Table({
          rows: tableRows,
          width: { size: 100, type: WidthType.PERCENTAGE },
        })
      );

      // Add spacing after table
      children.push(
        new Paragraph({
          children: [],
          spacing: { after: 200 },
        })
      );
    });

    // Total Score Box
    children.push(
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: "TOTAL SCORE",
                        bold: true,
                        size: 24,
                        color: "1a365d",
                      }),
                    ],
                    alignment: AlignmentType.RIGHT,
                  }),
                ],
                width: { size: 70, type: WidthType.PERCENTAGE },
                borders: {
                  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
                },
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `          / ${calculateTotalPoints()}`,
                        bold: true,
                        size: 28,
                        color: "2d3748",
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
                width: { size: 30, type: WidthType.PERCENTAGE },
                shading: { fill: "edf2f7", type: ShadingType.CLEAR },
                borders: {
                  top: tableBorder,
                  bottom: tableBorder,
                  left: tableBorder,
                  right: tableBorder,
                },
              }),
            ],
          }),
        ],
        width: { size: 100, type: WidthType.PERCENTAGE },
      })
    );

    // Page break before AI Grading Prompt section
    children.push(
      new Paragraph({
        children: [],
        pageBreakBefore: true,
      })
    );

    // AI Grading Prompt Section
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "AI GRADING PROMPT",
            bold: true,
            size: 32,
            color: "1a365d",
          }),
        ],
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Copy and paste the following prompt into ChatGPT, Claude, or your preferred AI assistant. Then add the student's answer where indicated.",
            size: 22,
            color: "4a5568",
            italics: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
      })
    );

    // The actual prompt in a bordered box
    const promptText = exportRubricAsPrompt();
    children.push(
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: promptText.split('\n').map(line =>
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: line,
                        size: 20,
                        font: "Courier New",
                        color: "2d3748",
                      }),
                    ],
                  })
                ),
                shading: { fill: "f7fafc", type: ShadingType.CLEAR },
                borders: {
                  top: { style: BorderStyle.SINGLE, size: 1, color: "cbd5e0" },
                  bottom: { style: BorderStyle.SINGLE, size: 1, color: "cbd5e0" },
                  left: { style: BorderStyle.SINGLE, size: 1, color: "cbd5e0" },
                  right: { style: BorderStyle.SINGLE, size: 1, color: "cbd5e0" },
                },
              }),
            ],
          }),
        ],
        width: { size: 100, type: WidthType.PERCENTAGE },
      })
    );

    // Footer
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Generated with AI Exam Grading Guide",
            size: 18,
            color: "a0aec0",
            italics: true,
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { before: 400 },
      })
    );

    const doc = new Document({
      sections: [
        {
          children,
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `rubric-${rubric.examType.replace(/[^a-z0-9]/gi, "-").toLowerCase()}.docx`);
  };

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Interactive Rubric Builder
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Paste your exam question and let AI help you create a detailed grading
        rubric. Research shows that detailed rubrics improve AI grading accuracy
        from ~0.70 to ~0.90 correlation with human graders.
      </p>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          <div
            className={`flex items-center ${
              step === "input"
                ? "text-blue-600 dark:text-blue-400"
                : "text-green-600 dark:text-green-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === "input"
                  ? "bg-blue-600 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              {step === "input" ? "1" : "✓"}
            </div>
            <span className="ml-2 font-medium">Input</span>
          </div>

          <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600" />

          <div
            className={`flex items-center ${
              step === "review"
                ? "text-blue-600 dark:text-blue-400"
                : step === "export"
                ? "text-green-600 dark:text-green-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === "review"
                  ? "bg-blue-600 text-white"
                  : step === "export"
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
              }`}
            >
              {step === "export" ? "✓" : "2"}
            </div>
            <span className="ml-2 font-medium">Review & Edit</span>
          </div>

          <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600" />

          <div
            className={`flex items-center ${
              step === "export"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === "export"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
              }`}
            >
              3
            </div>
            <span className="ml-2 font-medium">Export</span>
          </div>
        </div>
      </div>

      {/* Step 1: Input */}
      {step === "input" && (
        <div className="space-y-6">
          {/* File Upload */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Upload Exam File
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Upload a PDF, Word document (.docx), or text file containing your exam question.
            </p>

            <div className="flex items-center space-x-4">
              <label
                className={`flex-1 flex items-center justify-center px-6 py-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                  isUploading
                    ? "border-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={isUploading}
                />
                {isUploading ? (
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Processing file...</span>
                  </div>
                ) : (
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-8 h-8 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        Click to upload
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {" "}or drag and drop
                      </span>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        PDF, DOCX, or TXT
                      </p>
                    </div>
                  </div>
                )}
              </label>
            </div>

            {uploadedFileName && (
              <div className="mt-3 flex items-center text-sm text-green-600 dark:text-green-400">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Loaded: {uploadedFileName}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-4 text-sm text-gray-500 dark:text-gray-400">
              or paste text directly
            </span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Exam Question Input */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Exam Question
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {uploadedFileName
                ? "Review the extracted text below and edit if needed."
                : "Paste your exam question below. Include the full fact pattern and any specific instructions given to students."}
            </p>
            <textarea
              value={examText}
              onChange={(e) => {
                setExamText(e.target.value);
                if (!e.target.value) setUploadedFileName(null);
              }}
              placeholder="Paste your exam question here...

Example:
Sarah owns a small coffee shop in downtown. One morning, she noticed water leaking from the ceiling onto the floor near the entrance. She placed a small 'Caution: Wet Floor' sign nearby but did not rope off the area. Two hours later, Marcus, a regular customer, entered the shop while texting on his phone. He slipped on the wet floor and broke his wrist.

Analyze all potential claims Marcus might have against Sarah and any defenses Sarah might raise. Consider issues of duty, breach, causation, and damages."
              rows={12}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm"
            />
            {examText && (
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {examText.length.toLocaleString()} characters
              </p>
            )}
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-4 text-red-700 dark:text-red-300">
              {error}
            </div>
          )}

          <button
            onClick={generateRubric}
            disabled={isLoading}
            className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating Rubric...
              </span>
            ) : (
              "Generate Rubric with AI"
            )}
          </button>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Tip:</strong> The more detailed your exam question, the
              better the generated rubric will be. Include all relevant facts,
              legal context, and any specific issues you want students to
              address.
            </p>
          </div>
        </div>
      )}

      {/* Step 2: Review & Edit */}
      {step === "review" && rubric && (
        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-green-800 dark:text-green-200">
                  {rubric.examType}
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Total Points: {calculateTotalPoints()} |{" "}
                  {rubric.elements.length} elements
                </p>
              </div>
              <button
                onClick={() => setStep("input")}
                className="text-sm text-green-700 dark:text-green-300 underline"
              >
                Start Over
              </button>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            Review and customize the AI-generated rubric below. You can edit
            element names, adjust point values, and modify criteria.
          </p>

          {/* Rubric Elements */}
          <div className="space-y-4">
            {rubric.elements.map((element, index) => (
              <div
                key={element.id}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 mr-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        {index + 1}.
                      </span>
                      <input
                        type="text"
                        value={element.name}
                        onChange={(e) =>
                          updateElement(element.id, "name", e.target.value)
                        }
                        className="flex-1 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold"
                      />
                      <div className="flex items-center space-x-1">
                        <input
                          type="number"
                          value={element.maxPoints}
                          onChange={(e) =>
                            updateElement(
                              element.id,
                              "maxPoints",
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-center"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          pts
                        </span>
                      </div>
                    </div>
                    <textarea
                      value={element.description}
                      onChange={(e) =>
                        updateElement(element.id, "description", e.target.value)
                      }
                      rows={2}
                      className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm"
                    />
                  </div>
                  <button
                    onClick={() => removeElement(element.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Remove element"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>

                {/* Criteria */}
                <div className="ml-6 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    Grading Criteria:
                  </p>
                  {element.criteria.map((criterion, cIndex) => (
                    <div
                      key={cIndex}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input
                        type="number"
                        value={criterion.points}
                        onChange={(e) =>
                          updateCriteria(
                            element.id,
                            cIndex,
                            "points",
                            parseInt(e.target.value) || 0
                          )
                        }
                        className="w-12 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-center"
                      />
                      <span className="text-gray-500 dark:text-gray-400">
                        pts:
                      </span>
                      <input
                        type="text"
                        value={criterion.description}
                        onChange={(e) =>
                          updateCriteria(
                            element.id,
                            cIndex,
                            "description",
                            e.target.value
                          )
                        }
                        className="flex-1 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                      />
                      <button
                        onClick={() => removeCriteria(element.id, cIndex)}
                        className="text-red-400 hover:text-red-600 p-1"
                        title="Remove criteria"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addCriteria(element.id)}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    + Add criteria level
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addElement}
            className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            + Add New Element
          </button>

          <div className="flex space-x-4">
            <button
              onClick={() => setStep("input")}
              className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => setStep("export")}
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue to Export
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Export */}
      {step === "export" && rubric && (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
              Your Complete Grading Package is Ready!
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Your rubric has been packaged with the exam question and grading instructions into a ready-to-use prompt.
              Just add the student's answer and paste into ChatGPT, Claude, or any AI assistant.
            </p>
          </div>

          {/* Export Options */}
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">
              Export Options
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={exportToDocx}
                className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download as Word Document
              </button>
              <button
                onClick={copyToClipboard}
                className={`flex items-center justify-center px-6 py-4 rounded-lg font-semibold transition-colors ${
                  copied
                    ? "bg-green-600 text-white"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                {copied ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              The Word document includes formatted tables and styling for easy printing and sharing.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">
              Complete AI Grading Prompt
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              This prompt includes your exam question, rubric, and grading instructions. Just add the student answer.
            </p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap max-h-96 overflow-y-auto">
              {exportRubricAsPrompt()}
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">
              How to Use This Prompt
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Copy the complete prompt above (or download the Word document)</li>
              <li>Open ChatGPT, Claude, or your preferred AI assistant</li>
              <li>Paste the prompt</li>
              <li>Replace "[Paste the student's answer here]" with the actual student answer</li>
              <li>Submit and receive AI-graded results with point breakdowns</li>
            </ol>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setStep("review")}
              className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Back to Edit
            </button>
            <button
              onClick={() => {
                setStep("input");
                setRubric(null);
                setExamText("");
              }}
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Create Another Rubric
            </button>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-8 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">
          Tips for Better Rubrics
        </h4>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>
            <strong>Be specific:</strong> Include exact legal rules or doctrines
            students should cite
          </li>
          <li>
            <strong>Define partial credit:</strong> Specify what earns 2/3
            points vs 1/3 points
          </li>
          <li>
            <strong>Cover all issues:</strong> A typical law school essay has
            5-12 gradable elements
          </li>
          <li>
            <strong>Include alternatives:</strong> Note valid alternative
            approaches students might take
          </li>
          <li>
            <strong>Test and refine:</strong> Grade a few exams, then adjust
            rubric based on results
          </li>
        </ul>
      </div>
    </div>
  );
}
