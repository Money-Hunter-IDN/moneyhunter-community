import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DollarSign,
  MessageCircle,
  Instagram,
  Send,
  Music,
} from "lucide-react";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              MoneyHunter
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#features"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#community"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Community
            </Link>
            <Link
              href="/learn"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/#faq"
              className="text-slate-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
              Join Free Community
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect with 50,000+ Web3 enthusiasts across our social platforms.
              Choose your preferred way to engage, learn, and grow with the
              MoneyHunter community.
            </p>
          </div>

          {/* Social Media Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Discord Card */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Discord</CardTitle>
                <CardDescription className="text-slate-400 text-lg">
                  Real-time discussions, voice chats, and exclusive channels for
                  different Web3 topics
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">
                    25,000+
                  </div>
                  <div className="text-slate-400">Active Members</div>
                </div>
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg"
                  asChild
                >
                  <a
                    href="https://discord.gg/moneyhunter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord Server
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Telegram Card */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Telegram</CardTitle>
                <CardDescription className="text-slate-400 text-lg">
                  Quick updates, market alerts, and fast-paced crypto
                  discussions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    15,000+
                  </div>
                  <div className="text-slate-400">Subscribers</div>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  asChild
                >
                  <a
                    href="https://t.me/moneyhunter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Telegram Group
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Instagram</CardTitle>
                <CardDescription className="text-slate-400 text-lg">
                  Visual content, infographics, and behind-the-scenes community
                  moments
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    8,000+
                  </div>
                  <div className="text-slate-400">Followers</div>
                </div>
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg"
                  asChild
                >
                  <a
                    href="https://instagram.com/moneyhunter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on Instagram
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* TikTok Card */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform border border-white/20">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">TikTok</CardTitle>
                <CardDescription className="text-slate-400 text-lg">
                  Short-form educational videos, crypto trends, and Web3 tips
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-300 mb-2">
                    12,000+
                  </div>
                  <div className="text-slate-400">Followers</div>
                </div>
                <Button
                  className="w-full bg-black hover:bg-gray-900 text-white py-3 text-lg border border-white/20"
                  asChild
                >
                  <a
                    href="https://tiktok.com/@moneyhunter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on TikTok
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Community Guidelines */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Community Guidelines
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our community thrives on respectful discussions, knowledge
              sharing, and mutual support. Please be kind, stay on-topic, and
              help create a positive learning environment for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
                ✓ Respectful Communication
              </div>
              <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">
                ✓ Educational Focus
              </div>
              <div className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full border border-purple-500/30">
                ✓ No Financial Advice
              </div>
              <div className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full border border-orange-500/30">
                ✓ Help Others Learn
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  MoneyHunter
                </span>
              </div>
              <p className="text-slate-400">
                Free Web3 learning community for crypto enthusiasts and
                blockchain builders.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Learning Topics</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Cryptocurrencies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blockchain Tech
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    DeFi & Web3
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Technical Analysis
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 MoneyHunter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
