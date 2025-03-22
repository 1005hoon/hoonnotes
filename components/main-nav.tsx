"use client";

import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Vault" },
  { href: "/about", label: "About" },
  { href: "/thoughts", label: "Thoughts" },
];

export function MainNav() {
  return (
    <header className="font-display p-4">
      <div className="flex items-center justify-between">
        <Link className="shrink-0 text-xl font-medium" href="/">
          hoonnotes
        </Link>
        <button className="block sm:hidden">Login</button>
        <nav className="subheading hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      className={cn(
        "font-medium uppercase opacity-60 transition-opacity hover:opacity-100",
        isActive && "opacity-100",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
