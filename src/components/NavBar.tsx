"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex justify-between px-6 py-4 items-center">
        <Link className="flex items-center gap-4" href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-12 h-12 object-contain"
          />
          <Image
            src="/logo_text.svg"
            alt="Logo Text"
            width={350}
            height={150}
            className="h-auto w-auto"
          />
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}
