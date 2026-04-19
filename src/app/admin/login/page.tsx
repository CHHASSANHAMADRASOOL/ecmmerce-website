import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Environment variables se compare karna
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Yahan aap session ya cookie set kar sakte hain
      return NextResponse.json({ success: true, message: "Access Granted" }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: "Invalid Credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
