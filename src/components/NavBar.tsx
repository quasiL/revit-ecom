"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900">
      <div className="container mx-auto flex justify-between px-4 md:px-6 py-4 items-center">
        <Link className="flex items-center gap-2" href="/">
          <img src="/logo.png" alt="Logo" className="w-9 md:w-14" />
          <img src="/textlogo.svg" alt="Text Logo" className="w-40 md:w-72" />
        </Link>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-gray-800 bg-opacity-95 text-white py-6 z-50">
          <button
            className="absolute top-4 right-6 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-4 mt-6 text-center">
            <NavLinks onClick={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}
