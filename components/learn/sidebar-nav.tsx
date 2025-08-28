"use client";

import Link from "next/link";
import {
  BookOpen,
  TrendingUp,
  Users,
  Briefcase,
  BarChart3,
} from "lucide-react";

export default function SidebarNav({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="w-80 border-r border-slate-800/50 bg-slate-950/50 min-h-screen sticky top-16">
      <div className="p-6">
        <nav className="space-y-2">
          {/* Getting Started */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Getting Started
            </h3>
            <div className="space-y-1">
              <Link
                href="/learn"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === ""
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <BookOpen className="w-4 h-4 mr-3" />
                Introduction
              </Link>
              <Link
                href="/learn/web3-basics"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "web3-basics"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <div className="w-4 h-4 mr-3" />
                Web3 Fundamentals
              </Link>
              <Link
                href="/learn/blockchain-basics"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "blockchain-basics"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <div className="w-4 h-4 mr-3" />
                Blockchain Technology
              </Link>
              <Link
                href="/learn/crypto-basics"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "crypto-basics"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <div className="w-4 h-4 mr-3" />
                Cryptocurrency Basics
              </Link>
            </div>
          </div>

          {/* Advanced Topics */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Advanced Topics
            </h3>
            <div className="space-y-1">
              <Link
                href="/learn/defi"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "defi"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <TrendingUp className="w-4 h-4 mr-3" />
                DeFi Protocols
              </Link>
              <Link
                href="/learn/technical-analysis"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "technical-analysis"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <BarChart3 className="w-4 h-4 mr-3" />
                Technical Analysis
              </Link>
              <Link
                href="/learn/onchain-analysis"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "onchain-analysis"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <div className="w-4 h-4 mr-3" />
                Onchain Analysis
              </Link>
              <Link
                href="/learn/macroeconomy"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "macroeconomy"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <div className="w-4 h-4 mr-3" />
                Macroeconomy
              </Link>
            </div>
          </div>

          {/* Career & Community */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Career & Community
            </h3>
            <div className="space-y-1">
              <Link
                href="/learn/web3-jobs"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "web3-jobs"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Briefcase className="w-4 h-4 mr-3" />
                Web3 Jobs
              </Link>
              <Link
                href="/learn/networking"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "networking"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Users className="w-4 h-4 mr-3" />
                Networking
              </Link>
              <Link
                href="/learn/community-guidelines"
                className={`flex items-center px-3 py-2 rounded ${
                  activeSlug === "community-guidelines"
                    ? "text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <div className="w-4 h-4 mr-3" />
                Community Guidelines
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
