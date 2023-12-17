"use client";

import { useScrollDirection } from "@/lib/hook";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { LogoIcon } from "./icons";
import Link from "next/link";

const navItems = [
  {
    id: "01",
    name: "About",
    href: "/#about",
  },
  {
    id: "02",
    name: "Work",
    href: "/#work",
  },
  {
    id: "03",
    name: "Contact",
    href: "/#contact",
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
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
        scrollDirection === "down" && !scrolledToTop && !isOpen
          ? "-translate-y-24"
          : null,
        scrollDirection === "up" && !scrolledToTop
          ? "h-16 translate-y-0 shadow-lg"
          : null,
      )}
    >
      <nav className={cn("flex w-full items-center justify-between")}>
        <div className="flex items-center justify-center">
          <LogoIcon />
        </div>
        <>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={cn(
              "fixed flex h-screen w-4/5 flex-col items-center justify-center px-2 py-12 font-mono text-xl text-[#ccd6f6] shadow-2xl md:relative md:h-auto md:w-auto md:flex-row md:justify-between md:p-0 md:text-xs md:shadow-none",
              isOpen
                ? "bottom-0 right-0 top-0 z-10 gap-y-4 bg-[#112240] md:z-0 md:bg-transparent"
                : "hidden md:flex",
            )}
          >
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <svg
                className="md:hover: fixed right-8 top-9 h-6 w-6 cursor-pointer text-[#64ffda] hover:text-[#ccd6f6]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex list-inside list-decimal flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex flex-col gap-y-2 hover:text-[#64ffda] md:mr-8 md:flex-row md:gap-x-2 md:gap-y-0"
                >
                  <h2 className="text-center font-mono text-sm text-[#64ffda] md:self-end md:text-xs">
                    {item.id}.
                  </h2>
                  <h2>{item.name}</h2>
                </Link>
              ))}
            </div>
            <Link
              href={`/resume.pdf`}
              className="my-10 rounded bg-[#64ffda] font-mono text-[#64ffda]"
            >
              <div className="rounded border border-[#64ffda] bg-[#112240] px-12 py-4 text-sm transition-transform hover:-translate-x-1 hover:-translate-y-1 md:bg-[#0a192f] md:px-4 md:py-2.5 md:text-xs">
                Resume
              </div>
            </Link>
          </div>
        </>
      </nav>
    </header>
  );
}
