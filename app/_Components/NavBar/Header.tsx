"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Status } from "./Status";
import { Section } from "../Section";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 py-4 bg-background/80 backdrop-blur-md z-50 border-b border-black/5">
      <Section className=" w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-[4px]">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-foreground">
          SZ-Dev
        </Link>

        {/* Status */}
        <Status status="Available" />

        {/* Navbar */}
        <ul className="flex flex-row gap-4 justify-end items-center">
          <li
            className={`text-sm text-foreground ${
              pathname === "/" ? "font-bold" : "font-normal"
            }`}
          >
            <Link href="/">{pathname === "/" ? "(index)" : "index"}</Link>
          </li>

          <li
            className={`text-sm text-foreground ${
              pathname === "/works" ? "font-bold" : "font-normal"
            }`}
          >
            <Link href="/works">
              {pathname === "/works" ? "(works)" : "works"}
            </Link>
          </li>

          <li
            className={`text-sm text-foreground ${
              pathname === "/stack" ? "font-bold" : "font-normal"
            }`}
          >
            <Link href="/stack">
              {pathname === "/stack" ? "(stack)" : "stack"}
            </Link>
          </li>
        </ul>
      </Section>
    </header>
  );
};
