# AI Exam Grading Guide

An interactive Next.js application based on the law review article "Grading Machines: Can AI Exam-Grading Replace Law Professors?" by Cope et al. (2025).

## Overview

This app provides a step-by-step guide for law professors to safely implement AI-assisted grading of law school exams. The guide is based on empirical research showing that large language models can achieve correlation coefficients of up to 0.93 with human graders when provided with detailed rubrics.

## Features

- **Interactive Step-by-Step Wizard**: Navigate through 8 comprehensive steps
- **AI-Powered Rubric Builder**: Upload exam files (PDF, DOCX, TXT) or paste text and let AI generate detailed grading rubrics
- **Export Options**: Download rubrics as formatted Word documents with scoring columns, or copy ready-to-use AI prompts
- **Preparation Checklist**: Track your readiness with interactive checkboxes
- **Prompting Methods**: Compare different AI grading approaches with examples
- **Ethical Framework**: Understand limitations and address concerns
- **Implementation Guide**: Detailed instructions for safe deployment
- **Best Practices**: Alternative uses and success metrics

## Rubric Builder

The Rubric Builder is an interactive tool that helps professors create detailed grading rubrics:

### How It Works

1. **Upload or Paste**: Upload an exam file (PDF, Word, or text) or paste your exam question directly
2. **AI Generation**: Claude AI analyzes your exam and generates a comprehensive rubric with:
   - Discrete grading elements
   - Point allocations
   - Partial credit criteria
3. **Review & Edit**: Customize the generated rubric - add/remove elements, adjust points, modify criteria
4. **Export**:
   - **Word Document**: Professionally formatted with tables, scoring columns for manual grading
   - **Copy to Clipboard**: Complete AI grading prompt with your exam, rubric, and instructions ready to paste into ChatGPT/Claude

### Supported File Types

- PDF (.pdf)
- Microsoft Word (.docx)
- Plain Text (.txt)

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Anthropic API key (for rubric generation)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/willimj3/ai-grade-tutorial.git
cd ai-grade-tutorial
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your Anthropic API key:
```
ANTHROPIC_API_KEY=your-api-key-here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

This app is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add the `ANTHROPIC_API_KEY` environment variable in Vercel's project settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Research Background

This application is based on research from:

**Cope, K.L., Frankenreiter, J., Hirst, S., Posner, E.A., Schwarcz, D., & Thorley, D. (2025).** "Grading Machines: Can AI Exam-Grading Replace Law Professors?" SSRN Working Paper 5851362.

### Key Findings

- **Open Method**: 0.66-0.80 Pearson correlation (no rubric)
- **Rubric Method**: 0.78-0.93 Pearson correlation (with detailed rubric) - **Recommended**
- **Bespoke Method**: 0.80-0.92 correlation (requires custom code)
- **Pairwise Method**: 0.84-0.91 correlation (extremely resource-intensive)

### Subjects Tested

- Civil Procedure
- Contracts
- Torts
- Corporations

All exams from top-30 U.S. law schools.

## Application Structure

```
├── app/
│   ├── api/
│   │   ├── generate-rubric/    # AI rubric generation endpoint
│   │   └── parse-file/         # File parsing endpoint (PDF, DOCX, TXT)
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with analytics
│   └── page.tsx                # Main page with wizard
├── components/
│   ├── StepWizard.tsx          # Wizard navigation component
│   └── steps/
│       ├── Introduction.tsx
│       ├── UnderstandingAI.tsx
│       ├── PreparationChecklist.tsx
│       ├── PromptingMethods.tsx
│       ├── RubricBuilder.tsx   # Interactive rubric builder
│       ├── EthicalConsiderations.tsx
│       ├── Implementation.tsx
│       └── BestPractices.tsx
├── types/
│   └── pdf-parse.d.ts          # Type declarations
└── public/                     # Static assets
```

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API
- **File Parsing**: pdf-parse, mammoth
- **Document Export**: docx, file-saver
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key for rubric generation | Yes |

## Contributing

This is an educational tool based on academic research. If you find issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is created for educational purposes based on publicly available academic research.

## Citation

If you use this tool in your academic work, please cite the underlying research:

```
Cope, K.L., Frankenreiter, J., Hirst, S., Posner, E.A., Schwarcz, D., & Thorley, D. (2025).
Grading Machines: Can AI Exam-Grading Replace Law Professors?
SSRN Working Paper 5851362.
```

## Disclaimer

This tool provides guidance based on academic research but should not be considered legal or professional advice. Always consult your institution's policies and consider ethical implications before implementing AI grading systems.
