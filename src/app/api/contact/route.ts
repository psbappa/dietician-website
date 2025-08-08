import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Contact form data:", data);
  
  // Future: Send email using Nodemailer or EmailJS
  return NextResponse.json({ success: true, message: "Form submitted successfully!" });
}
