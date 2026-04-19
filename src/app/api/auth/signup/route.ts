import { Data } from "@/lib/Data";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // Password safe rakhne ke liye: npm install bcryptjs

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Check agar user pehle se hai
    const existingUser = await Data.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Password ko secure (hash) karna
    const hashedPassword = await bcrypt.hash(password, 10);

    // Database mein save karna
    const user = await Data.user.create({
      data: { name, email, password: hashedPassword },
    });

    return NextResponse.json({ message: "User created!", user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Signup failed" }, { status: 500 });
  }
}