import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Users, Bitcoin, BookOpen, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="py-20 px-4 min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge className="bg-[#FF5900]/10 text-[#FF5900] border-[#FF5900]/30 mb-4">
              <Bitcoin className="w-4 h-4 mr-2" />
              1,800+ Learners • Since 2021
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Web3 & Finance Community
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            A knowledge-sharing community where we're all students. Learn about stocks, cryptocurrencies, market analysis, and Web3 developments through peer-to-peer discussions and educational content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FF5900] hover:bg-[#FF5900]/90 text-white px-8 py-4 text-lg"
            >
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-white"
            >
              View Learning Resources
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Knowledge Sharing{" "}
                <span className="bg-gradient-to-r from-[#FF5900] to-[#FF5900] bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with 1,800+ learners exploring stocks, crypto, and Web3.
                Share knowledge, learn from peers, and grow together in a supportive
                environment where everyone's a student.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#FF5900] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-Asset Focus</h3>
                    <p className="text-gray-600">Stocks, crypto, and Web3 discussions in one place</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#FF5900] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Peer Learning</h3>
                    <p className="text-gray-600">Everyone's a student, no gurus or mentors</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#FF5900] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Education Focus</h3>
                    <p className="text-gray-600">Knowledge sharing over profit showing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Join Our Community
              </h3>

              <div className="space-y-4">
                <a
                  href="https://t.me/moneyhunteridn"
                  className="flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telegram</h4>
                      <p className="text-sm text-gray-600">Daily discussions & updates</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                </a>

                <a
                  href="https://discord.gg/moneyhunter"
                  className="flex items-center justify-between p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Discord</h4>
                      <p className="text-sm text-gray-600">Structured community</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500" />
                </a>

                <a
                  href="https://instagram.com/moneyhunteridn"
                  className="flex items-center justify-between p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instagram</h4>
                      <p className="text-sm text-gray-600">Educational content</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about MoneyHunter community.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-gray-50 border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                What makes MoneyHunter different from other finance communities?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We've been building this community since 2021 with one core principle: we're all students here. No gurus, no hierarchy, just genuine peer-to-peer learning. We cover both traditional markets (stocks) and digital assets (crypto, Web3) in one supportive environment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-gray-50 border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                What topics do you cover in the community?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our community covers stocks, cryptocurrencies, and Web3 developments. We have members specializing in technical analysis, fundamental research, and market analysis. Discussions range from beginner basics to advanced strategies across both traditional and digital assets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-gray-50 border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                Which platforms should I join and what's the difference?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We're active across three platforms: Telegram for daily discussions and quick updates, Discord for more structured community interactions, and Instagram for educational content and market insights. Start with whichever platform you prefer, or join multiple for the full experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-[#FF5900]/10 to-[#FF5900]/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 1,800+ learners in our knowledge-sharing community. Connect with fellow students exploring stocks, crypto, and Web3 through genuine discussions and peer learning.
          </p>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#FF5900] rounded-full mr-2"></div>
                <span>No Financial Advice</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#FF5900] rounded-full mr-2"></div>
                <span>Pure Education</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#FF5900] rounded-full mr-2"></div>
                <span>Peer-to-Peer Learning</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FF5900] hover:bg-[#FF5900]/90 text-white px-12 py-4 text-xl"
            >
              Join Community
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-4 text-xl bg-white"
            >
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                  <Image
                    src="/android-chrome-192x192.png"
                    width={128}
                    height={128}
                    alt="moneyhunter-logo"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#FF5900] to-[#FF5900] bg-clip-text text-transparent">
                  MoneyHunter
                </span>
              </div>
              <p className="text-gray-600">
                Web3 & Finance community for knowledge sharing and peer-to-peer learning since 2021.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Learning Topics</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Stock Market
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Cryptocurrencies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    DeFi & Web3
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Technical Analysis
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Community</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="https://discord.gg/moneyhunter" className="hover:text-gray-900">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://t.me/moneyhunteridn" className="hover:text-gray-900">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/moneyhunteridn" className="hover:text-gray-900">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 MoneyHunter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
