import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    console.log(12345, connectDB());
    await connectDB();

    const existing = await User.findOne({ email });
    if (existing) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    return Response.json({ message: "User registered successfully" });
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
