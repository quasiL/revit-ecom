"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "Families", href: "/families" },
    { name: "Contact", href: "/contact" },
    { name: "My orders", href: "/orders" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-400">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={clsx("text-lg", {
            "font-bold text-white": pathname === link.href,
            "hover:text-white": pathname !== link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
