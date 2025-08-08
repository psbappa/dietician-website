import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">Your Diet Coach</Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog" className="hover:text-blue-500">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
