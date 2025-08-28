import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Lightbulb, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              About MoneyHunter
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Born from a passion for democratizing Web3 knowledge and creating a
            space where crypto enthusiasts, traders, and builders can learn,
            share, and grow together.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                How It All Started
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  In early 2023, a group of crypto veterans and Web3 builders
                  noticed a gap in the market. While there were plenty of paid
                  trading groups and expensive courses, there wasn&#39;t a
                  genuine community focused on free education and open knowledge
                  sharing.
                </p>
                <p>
                  After years of navigating bull and bear markets, analyzing
                  on-chain data, and building in the Web3 space, our founders
                  realized that the best insights came from collaborative
                  learning and peer-to-peer knowledge exchange.
                </p>
                <p>
                  MoneyHunter was born from this vision - a free, open community
                  where anyone passionate about crypto, blockchain technology,
                  and macroeconomics could learn from each other without
                  barriers or paywalls.
                </p>
              </div>
            </div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">The Idea</h3>
                      <p className="text-slate-400 text-sm">
                        Free education for everyone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
                      <Users className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        The Community
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Bringing experts together
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">The Impact</h3>
                      <p className="text-slate-400 text-sm">
                        Global Web3 education
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Our Mission & Values
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We believe in the power of community-driven learning and the
              democratization of Web3 knowledge.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Free Education
                </h3>
                <p className="text-slate-300">
                  Knowledge should be accessible to everyone. We provide free
                  resources, discussions, and insights without any paywalls or
                  hidden costs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Community First
                </h3>
                <p className="text-slate-300">
                  Our community members are our greatest asset. We foster an
                  environment of mutual respect, learning, and collaboration.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6">
                <Lightbulb className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Innovation
                </h3>
                <p className="text-slate-300">
                  We stay at the forefront of Web3 developments, sharing the
                  latest insights in DeFi, NFTs, blockchain technology, and
                  market analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Meet the Team
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our diverse team of crypto veterans, developers, and analysts who
              are passionate about Web3 education.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-900">AK</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Alex Kim
                </h3>
                <Badge className="mb-3 bg-orange-500/10 text-orange-400 border-orange-500/20">
                  Founder & Community Lead
                </Badge>
                <p className="text-slate-300 text-sm">
                  Former DeFi protocol developer with 6+ years in crypto.
                  Passionate about on-chain analysis and building inclusive Web3
                  communities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-900">SM</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Sarah Martinez
                </h3>
                <Badge className="mb-3 bg-orange-500/10 text-orange-400 border-orange-500/20">
                  Head of Education
                </Badge>
                <p className="text-slate-300 text-sm">
                  Macro economist turned crypto analyst. Specializes in
                  connecting traditional finance concepts with Web3 innovations
                  and market dynamics.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-900">DJ</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  David Johnson
                </h3>
                <Badge className="mb-3 bg-orange-500/10 text-orange-400 border-orange-500/20">
                  Technical Analysis Lead
                </Badge>
                <p className="text-slate-300 text-sm">
                  Professional trader with expertise in both traditional and
                  crypto markets. Focuses on technical analysis education and
                  risk management strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Ready to Join Our Community?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Connect with thousands of Web3 enthusiasts, learn from experts,
                and stay ahead of the curve in the rapidly evolving crypto
                landscape.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg px-8 py-3">
                Join MoneyHunter Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-sm">MH</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  MoneyHunter
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                The premier free Web3 learning community for crypto enthusiasts
                and builders.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Learning Hub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Market Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Web3 Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 MoneyHunter Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
