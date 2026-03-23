"use client";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md">
      <Link href="/">
        <Image
          src="/images/icons/circles_79_white.svg"
          width={48}
          height={48}
          alt="Trevor Nei"
          priority
        />
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className="font-mono text-sm text-white/60 transition-colors hover:text-white">
          Home
        </Link>
        <Link href="/notes" className="font-mono text-sm text-white/60 transition-colors hover:text-white">
          Notes
        </Link>
      </div>
    </nav>
  );
}
