"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex justify-between p-6">
        <Link className="" href="/">
          <p>Logo</p>
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}
