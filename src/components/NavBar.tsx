"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-900">
      <div className="container mx-auto flex justify-between px-6 py-4 items-center">
        <Link className="flex items-center gap-2" href="/">
          <img src="/logo.png" alt="Logo" className="w-14" />
          <img src="/textlogo.svg" alt="Text Logo" className="w-72" />
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}
