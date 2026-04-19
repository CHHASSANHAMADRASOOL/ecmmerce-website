import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { inventory } from '@/lib/Data'; // Aapka purana inventory data

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 1. Inventory ko String mein convert karna taake AI ko pata ho kya bechna hai
    const inventoryContext = inventory
      .map(item => `${item.name}: $${item.price} (${item.stock ? 'In Stock' : 'Out of Stock'})`)
      .join(", ");

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `
        Aapka naam CH HASSAN AI hai. Aap ek VIP Executive Assistant hain.
        Aapka lehja (tone) bohot luxury, professional aur polite hona chahiye.
        
        Aapke paas ye inventory hai: ${inventoryContext}.
        
        Rules:
        - Agar user inventory ke baare mein pooche, to yahan se confirm jawab den.
        - Agar user koi aam baat kare (Greetings, General questions), to uska intelligent jawab den.
        - Hamesha Roman Urdu/Hindi aur English ka mix use karen.
        - User ko hamesha 'VIP Client' mehsoos karwayen.
      `,
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ reply: "Maazrat, main connects nahi ho pa raha. Dobara koshish karen." }, { status: 500 });
  }
}