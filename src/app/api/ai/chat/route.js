import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();

    // Try Gemini API if key is available
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = `You are FitGenie AI, a friendly and knowledgeable fitness assistant. Provide helpful, evidence-based advice about fitness, nutrition, workouts, and wellness. Keep responses concise and actionable. Use bullet points and emoji where appropriate.

User: ${message}`;

      const result = await model.generateContent(prompt);
      const response = result.response.text();
      return NextResponse.json({ response });
    }

    // Fallback demo response
    return NextResponse.json({ response: null });
  } catch (error) {
    return NextResponse.json({ response: null }, { status: 200 });
  }
}
