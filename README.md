# AI Exam Grading Guide

An interactive Next.js application based on the law review article "Grading Machines: Can AI Exam-Grading Replace Law Professors?" by Cope et al. (2025).

## Overview

This app provides a step-by-step guide for law professors to safely implement AI-assisted grading of law school exams. The guide is based on empirical research showing that large language models can achieve correlation coefficients of up to 0.93 with human graders when provided with detailed rubrics.

## Features

- **Interactive Step-by-Step Wizard**: Navigate through 7 comprehensive steps
- **Preparation Checklist**: Track your readiness with interactive checkboxes
- **Prompting Methods**: Compare different AI grading approaches with examples
- **Ethical Framework**: Understand limitations and address concerns
- **Implementation Guide**: Detailed instructions for safe deployment
- **Best Practices**: Alternative uses and success metrics

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

This app is optimized for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
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
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page with wizard
├── components/
│   ├── StepWizard.tsx        # Wizard navigation component
│   └── steps/
│       ├── Introduction.tsx
│       ├── UnderstandingAI.tsx
│       ├── PreparationChecklist.tsx
│       ├── PromptingMethods.tsx
│       ├── EthicalConsiderations.tsx
│       ├── Implementation.tsx
│       └── BestPractices.tsx
└── public/                   # Static assets
```

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Optimized for Vercel

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
