import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Training and Development | Tobams Group",
  description:
    "Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

