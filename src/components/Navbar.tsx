"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    // const res = await fetch("/api/auth/logout", {
    //   method: "POST"
    // });

    // const data = await res.json();
    // console.log(data);

    await fetch("/api/auth/logout", { method: "GET" });
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Your Diet Coach
      </Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog" className="hover:text-blue-500">
          Blog
        </Link>

        {user ? (
          <Link
            href="/logout"
            className="hover:text-blue-500"
            onClick={handleLogout}
          >
            Logout
          </Link>
        ) : (
          <Link href="/login" className="hover:text-blue-500">
            Login
          </Link>
        )}
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
