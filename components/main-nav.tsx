"use client";

import { Popover } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
        <MobileNav />
        <nav className="hidden items-center gap-8 text-sm sm:flex">
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
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      className={cn(
        "font-medium uppercase opacity-60 transition-opacity hover:opacity-100",
        isActive && "opacity-100",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

function MobileNav() {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <Popover
      mobileOnly
      content={
        <div className="flex w-full flex-col items-start justify-start gap-3">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} className="w-full px-6">
              {item.label}
            </NavItem>
          ))}
        </div>
      }
      openPopover={openPopover}
      setOpenPopover={setOpenPopover}
    >
      <button className="text-sm font-medium uppercase opacity-60 transition-opacity hover:opacity-100">
        Menu
      </button>
    </Popover>
  );
}
