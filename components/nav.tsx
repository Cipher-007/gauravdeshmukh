"use client";

import Link from "next/link";
import { Logo } from "./icons";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/lib/hook";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection();
  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "fixed top-0 z-10 flex h-24 w-full items-center justify-center px-8 backdrop-blur-md transition-all duration-300 ease-in-out",
        scrollDirection === "down" && !scrolledToTop ? "-translate-y-24" : null,
        scrollDirection === "up" && !scrolledToTop
          ? "h-16 translate-y-0 shadow-lg"
          : null,
      )}
    >
      <nav className={cn("flex w-full items-center justify-between")}>
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="flex h-9 items-center justify-between font-mono text-xs text-[#ccd6f6]">
          <div className="flex w-full list-inside list-decimal items-center justify-between">
            <Link
              href="/#about"
              className="mr-8 flex gap-x-2 hover:text-[#64ffda]"
            >
              <h2 className="self-end font-mono text-[#64ffda]">01.</h2>
              <h2>About</h2>
            </Link>
            <Link
              href="/#work"
              className="mr-8 flex gap-x-2 hover:text-[#64ffda]"
            >
              <h2 className="self-end font-mono text-[#64ffda]">02.</h2>
              <h2>Work</h2>
            </Link>
            <Link
              href="/#contact"
              className="mr-8 flex gap-x-2 hover:text-[#64ffda]"
            >
              <h2 className="self-end font-mono text-[#64ffda]">03.</h2>
              <h2>Contact</h2>
            </Link>
          </div>
          <Link
            href={`/resume.pdf`}
            className="my-10 rounded bg-[#64ffda] font-mono text-[#64ffda]"
          >
            <div className="rounded border border-[#64ffda] bg-[#0a192f] px-4 py-2.5 transition-transform hover:-translate-x-1 hover:-translate-y-1">
              Resume
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
