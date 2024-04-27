import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rav - The Rapper",
  description: "The library of old and classic songs of Rav.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-new-moon bg-cover bg-center text-white')}>
        {children}
      </body>
    </html>
  );
}
