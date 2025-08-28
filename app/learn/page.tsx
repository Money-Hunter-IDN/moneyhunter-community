import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Users,
  Briefcase,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-20">
      <div className="flex">
        <aside className="w-80 border-r border-slate-800/50 bg-slate-950/50 min-h-screen sticky top-16">
          <div className="p-6">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Quick search..."
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-orange-500"
              />
            </div>
            <nav className="space-y-2">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Getting Started
                </h3>
                <div className="space-y-1">
                  <Link
                    href="/learn"
                    className="flex items-center px-3 py-2 text-white bg-orange-500/20 border-r-2 border-orange-500 rounded-l"
                  >
                    <BookOpen className="w-4 h-4 mr-3" />
                    Introduction
                  </Link>
                  <Link
                    href="/learn/web3-basics"
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
                  >
                    <div className="w-4 h-4 mr-3" />
                    Web3 Fundamentals
                  </Link>
                  <Link
                    href="/learn/blockchain-basics"
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
                  >
                    <div className="w-4 h-4 mr-3" />
                    Blockchain Technology
                  </Link>
                  <Link
                    href="/learn/crypto-basics"
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
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
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
                  >
                    <TrendingUp className="w-4 h-4 mr-3" />
                    DeFi Protocols
                  </Link>
                  <Link
                    href="/learn/technical-analysis"
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
                  >
                    <BarChart3 className="w-4 h-4 mr-3" />
                    Technical Analysis
                  </Link>
                  <Link
                    href="/learn/onchain-analysis"
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
                  >
                    <div className="w-4 h-4 mr-3" />
                    Onchain Analysis
                  </Link>
                  <Link
                    href="/learn/macroeconomy"
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
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
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
                  >
                    <Briefcase className="w-4 h-4 mr-3" />
                    Web3 Jobs
                  </Link>
                  <Link
                    href="/learn/networking"
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
                  >
                    <Users className="w-4 h-4 mr-3" />
                    Networking
                  </Link>
                  <Link
                    href="/learn/community-guidelines"
                    className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded"
                  >
                    <div className="w-4 h-4 mr-3" />
                    Community Guidelines
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex">
            {/* Content Area */}
            <div className="flex-1 p-8">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-slate-400 mb-8">
                <span className="text-orange-400 font-medium">MONEYHUNTER</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span>GETTING STARTED</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Web3 Learning Hub: Introduction
              </h1>

              {/* Hero Image/Chart Placeholder */}
              <div className="bg-slate-800/30 rounded-2xl p-8 mb-8 border border-slate-700">
                <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Welcome to MoneyHunter Learning Hub
                  </h3>
                  <p className="text-slate-300">
                    Your comprehensive guide to Web3, cryptocurrencies, and
                    blockchain technology
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  The MoneyHunter Learning Hub is your gateway to understanding
                  the complex world of Web3, cryptocurrencies, blockchain
                  technology, and macroeconomic factors that drive digital asset
                  markets. Whether you&apos;re a complete beginner or looking to
                  deepen your knowledge, our comprehensive educational resources
                  will guide you through every aspect of the decentralized
                  economy.
                </p>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  This learning platform covers everything from fundamental
                  blockchain concepts to advanced trading strategies, onchain
                  analysis techniques, and career opportunities in the Web3
                  space. Our community-driven approach ensures you&apos;re
                  learning from real practitioners and staying up-to-date with
                  the latest developments.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">
                  What You&apos;ll Learn
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                        <BookOpen className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        Blockchain Fundamentals
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Understand how blockchain technology works, consensus
                      mechanisms, and the principles behind decentralized
                      systems.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        DeFi & Web3
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Explore decentralized finance protocols, yield farming,
                      liquidity mining, and the Web3 ecosystem.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                        <BarChart3 className="w-4 h-4 text-green-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        Technical Analysis
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Master chart reading, technical indicators, and market
                      analysis techniques for cryptocurrency trading.
                    </p>
                  </div>

                  <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                        <Briefcase className="w-4 h-4 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        Web3 Careers
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Discover career opportunities, required skills, and
                      pathways to enter the Web3 and blockchain industry.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">
                  Learning Path Recommendations
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">
                      Beginner
                    </Badge>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Start with the Fundamentals
                      </h4>
                      <p className="text-slate-300 mb-2">
                        Begin with Web3 Fundamentals → Blockchain Technology →
                        Cryptocurrency Basics
                      </p>
                      <Link
                        href="/learn/web3-basics"
                        className="text-orange-400 hover:text-orange-300 inline-flex items-center text-sm"
                      >
                        Begin Learning Path{" "}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mt-1">
                      Intermediate
                    </Badge>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Dive into DeFi and Analysis
                      </h4>
                      <p className="text-slate-300 mb-2">
                        Explore DeFi Protocols → Technical Analysis → Onchain
                        Analysis → Macroeconomy
                      </p>
                      <Link
                        href="/learn/defi"
                        className="text-orange-400 hover:text-orange-300 inline-flex items-center text-sm"
                      >
                        Continue Learning{" "}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mt-1">
                      Advanced
                    </Badge>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Build Your Web3 Career
                      </h4>
                      <p className="text-slate-300 mb-2">
                        Web3 Jobs → Networking → Community Guidelines → Advanced
                        Trading Strategies
                      </p>
                      <Link
                        href="/learn/web3-jobs"
                        className="text-orange-400 hover:text-orange-300 inline-flex items-center text-sm"
                      >
                        Explore Careers{" "}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - On This Page */}
            <aside className="w-64 p-6 border-l border-slate-800/50">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                On this page
              </h3>
              <nav className="space-y-2">
                <Link
                  href="#introduction"
                  className="block text-sm text-slate-300 hover:text-white py-1"
                >
                  Introduction
                </Link>
                <Link
                  href="#what-youll-learn"
                  className="block text-sm text-slate-300 hover:text-white py-1"
                >
                  What You&apos;ll Learn
                </Link>
                <Link
                  href="#learning-paths"
                  className="block text-sm text-slate-300 hover:text-white py-1"
                >
                  Learning Path Recommendations
                </Link>
                <Link
                  href="#getting-started"
                  className="block text-sm text-slate-300 hover:text-white py-1"
                >
                  Getting Started
                </Link>
              </nav>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
