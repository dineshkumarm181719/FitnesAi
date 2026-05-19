import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { goal, diet, weight, height, age } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = `Generate a personalized daily meal plan as JSON. User info: Goal: ${goal}, Diet: ${diet}, Weight: ${weight}kg, Height: ${height}cm, Age: ${age}.

Return ONLY valid JSON with this structure:
{
  "calories": number,
  "protein": number (grams),
  "carbs": number (grams),
  "fats": number (grams),
  "meals": [
    {
      "type": "Breakfast",
      "time": "7:00 AM",
      "name": "Meal Name",
      "calories": number,
      "protein": number,
      "carbs": number,
      "fats": number,
      "items": ["ingredient 1", "ingredient 2"]
    }
  ]
}

Include 5-6 meals. Make it practical and delicious.`;

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
