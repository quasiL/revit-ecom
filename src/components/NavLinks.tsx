"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "Families", href: "/families" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
  ];

  return (
    <>
      <div className="flex gap-8 text-gray-500">
        {links.map((link) => {
          return (
            <div key={link.name} className="flex items-center gap-2 group">
              <Link
                key={link.name}
                href={link.href}
                className={clsx({
                  "font-bold": pathname === link.href,
                  "text-black": pathname === link.href,
                  "hover:text-gray-800": pathname !== link.href,
                })}
              >
                <p>{link.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
