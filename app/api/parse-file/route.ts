import { NextRequest, NextResponse } from "next/server";
import mammoth from "mammoth";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const fileName = file.name.toLowerCase();
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let text = "";

    if (fileName.endsWith(".pdf")) {
      // Parse PDF using pdf-parse lib directly (avoids test file issue)
      try {
        // Import the actual parsing module directly to avoid initialization issue
        const pdfParse = (await import("pdf-parse/lib/pdf-parse.js")).default;
        const pdfData = await pdfParse(buffer);
        text = pdfData.text;
      } catch (pdfError) {
        console.error("PDF parsing error:", pdfError);
        return NextResponse.json(
          { error: "Failed to parse PDF file. Please ensure it's a valid PDF." },
          { status: 400 }
        );
      }
    } else if (fileName.endsWith(".docx")) {
      // Parse DOCX
      try {
        const result = await mammoth.extractRawText({ buffer });
        text = result.value;
      } catch (docxError) {
        console.error("DOCX parsing error:", docxError);
        return NextResponse.json(
          { error: "Failed to parse DOCX file. Please ensure it's a valid Word document." },
          { status: 400 }
        );
      }
    } else if (fileName.endsWith(".txt")) {
      // Plain text
      text = buffer.toString("utf-8");
    } else {
      return NextResponse.json(
        { error: "Unsupported file type. Please upload a PDF, DOCX, or TXT file." },
        { status: 400 }
      );
    }

    // Clean up the text
    text = text
      .replace(/\r\n/g, "\n") // Normalize line endings
      .replace(/\n{3,}/g, "\n\n") // Remove excessive blank lines
      .trim();

    if (!text) {
      return NextResponse.json(
        { error: "Could not extract text from the file. The file may be empty or contain only images." },
        { status: 400 }
      );
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Error parsing file:", error);
    return NextResponse.json(
      { error: "Failed to process file" },
      { status: 500 }
    );
  }
}
