"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `text-sm transition ${
      pathname === path
        ? "text-black font-semibold"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Tech Insight</h1>

        <div className="flex gap-6">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link href="/posts" className={linkStyle("/posts")}>
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
