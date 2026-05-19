import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { goal, level, duration } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = `Generate a workout plan as JSON. Goal: ${goal}, Level: ${level}, Duration: ${duration} minutes.

Return ONLY valid JSON:
{
  "name": "Workout Name",
  "duration": "${duration} min",
  "difficulty": "${level}",
  "caloriesBurned": number,
  "exercises": [
    {
      "name": "Exercise Name",
      "sets": number,
      "reps": "8-10",
      "rest": "60s",
      "muscle": "Target Muscle",
      "icon": "emoji"
    }
  ]
}

Include 6-8 exercises appropriate for the level.`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const plan = JSON.parse(jsonMatch[0]);
        return NextResponse.json({ plan });
      }
    }

    return NextResponse.json({ plan: null });
  } catch (error) {
    return NextResponse.json({ plan: null }, { status: 200 });
  }
}
