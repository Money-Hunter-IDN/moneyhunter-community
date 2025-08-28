"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DollarSign, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="border-b border-slate-800/50 backdrop-blur-sm fixed w-full top-0 z-50 bg-slate-950/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-transparent  flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
            <Image
              src="/android-chrome-192x192.png"
              width={128}
              height={128}
              alt="moneyhunter-logo"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            MoneyHunter
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/learn"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Learn
          </Link>
          <Link
            href="#community"
            className="text-slate-300 hover:text-white transition-colors"
          >
            Community
          </Link>
          <Link
            href="#faq"
            className="text-slate-300 hover:text-white transition-colors"
          >
            FAQ
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
            Join Free Community
          </Button>
        </div>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          {open ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden border-t border-slate-800/50 ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 bg-slate-950/80 backdrop-blur-sm">
          <nav className="flex flex-col gap-3">
            <Link
              href="#features"
              onClick={closeMenu}
              className="px-2 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Learn
            </Link>
            <Link
              href="#community"
              onClick={closeMenu}
              className="px-2 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              Community
            </Link>
            <Link
              href="#faq"
              onClick={closeMenu}
              className="px-2 py-2 rounded-lg text-slate-200 hover:bg-white/5"
            >
              FAQ
            </Link>
          </nav>

          <div className="mt-4 flex flex-col gap-2">
            <Button
              onClick={closeMenu}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
            >
              Join Free Community
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
