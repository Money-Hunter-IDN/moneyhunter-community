import type React from "react";
import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Money Hunter | Web3 & Finance Community",
  description:
    "Join the elite community of crypto traders and macro analysts. Get exclusive insights, real-time signals, and proven strategies to dominate Web3 markets.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: 'Plus Jakarta Sans', sans-serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}