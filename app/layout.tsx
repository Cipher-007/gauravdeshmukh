import Email from "@/components/email";
import Nav from "@/components/nav";
import Socials from "@/components/social";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Deshmukh",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Nav />
        <Socials />
        <main className="h-full snap-y px-12 md:px-28 2xl:px-[14rem]">
          {children}
        </main>
        <Email />
        <Analytics />
      </body>
    </html>
  );
}
