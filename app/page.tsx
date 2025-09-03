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
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Knowledge Sharing{" "}
              <span className="bg-gradient-to-r from-[#FF5900] to-[#FF5900] bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with fellow learners across multiple platforms and dive deep into stocks, crypto, and Web3 through real discussions and shared experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">
                  Multi-Asset Learning
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Explore stocks, cryptocurrencies, and Web3 developments through peer discussions, technical analysis, and market insights from experienced community members.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Peer-to-Peer Learning</CardTitle>
                <CardDescription className="text-gray-600">
                  Join a community where we're all students. Share knowledge, ask questions, and learn from each other's experiences across different markets and strategies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Active Discussions</CardTitle>
                <CardDescription className="text-gray-600">
                  Engage in daily market discussions, technical analysis breakdowns, and fundamental research across Telegram, Discord, and Instagram platforms.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-[#FF5900] pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Market Analysis & Discussion
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Connect with community members who specialize in technical analysis, fundamental research, and market trends across traditional and digital assets.
                  </p>
                  <Link
                    href="#"
                    className="text-[#FF5900] hover:text-[#FF5900]/80 inline-flex items-center"
                  >
                    Join Discussions <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Stocks & Traditional Markets
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn from community members with years of experience in stock trading, investment strategies, and traditional market analysis.
                  </p>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-700 inline-flex items-center"
                  >
                    Explore Topics <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Crypto & Web3 Insights
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated on cryptocurrency trends, blockchain technology developments, and Web3 opportunities through community discussions and shared research.
                  </p>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-700 inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="bg-gradient-to-r from-[#FF5900]/10 to-[#FF5900]/5 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    COMMUNITY PLATFORMS
                  </span>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/30">
                    ACTIVE
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Connect Across Platforms
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Telegram</span>
                    <span className="text-sm text-gray-500">Daily Discussions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Discord</span>
                    <span className="text-sm text-gray-500">Structured Community</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Instagram</span>
                    <span className="text-sm text-gray-500">Educational Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Learning{" "}
              <span className="bg-gradient-to-r from-[#FF5900] to-[#FF5900] bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from community members who've grown their knowledge through peer discussions and shared learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Andi R.",
                role: "Learning Stocks & Crypto",
                content:
                  "Finally found a community that focuses on learning, not showing off profits. The discussions here helped me understand technical analysis basics and transition into crypto smoothly.",
                avatar: "AR",
              },
              {
                name: "Maya S.",
                role: "New to Finance",
                content:
                  "As a complete beginner, I was intimidated by finance communities. Here, everyone's supportive and patient. No stupid questions, just genuine help from fellow learners.",
                avatar: "MS",
              },
              {
                name: "Rudi K.",
                role: "Traditional Trader",
                content:
                  "Been trading stocks for years but Web3 was confusing. The cross-asset discussions here bridged that gap perfectly. Great mix of traditional and digital asset knowledge.",
                avatar: "RK",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#FF5900] rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community Philosophy
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We're all students here. Learning comes first - while we celebrate wins together, our main focus is genuine knowledge sharing and peer-to-peer learning across stocks, crypto, and Web3
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
                  <span className="text-gray-700 text-sm">Knowledge Over Profit</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
                  <span className="text-gray-700 text-sm">Peer Learning</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
                  <span className="text-gray-700 text-sm">Supportive Community</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
                  <span className="text-gray-700 text-sm">Multi-Asset Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gray-50">
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
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                What makes MoneyHunter different from other finance communities?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We've been building this community since 2021 with one core principle: we're all students here. No gurus, no profit flexing, just genuine peer-to-peer learning. We cover both traditional markets (stocks) and digital assets (crypto, Web3) in one supportive environment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                What topics do you cover in the community?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our community covers stocks, cryptocurrencies, and Web3 developments. We have members specializing in technical analysis, fundamental research, and market analysis. Discussions range from beginner basics to advanced trading strategies across both traditional and digital assets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                Do you provide financial advice or trading signals?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No, we focus purely on education and knowledge sharing. Members share their analysis and research for learning purposes, but we don't provide financial advice or trading signals. Everyone is responsible for their own investment decisions and should always do their own research.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                Which platforms can I join and what's the difference?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We're active across three platforms: Telegram for daily discussions and quick updates, Discord for more structured community interactions, and Instagram for educational content and market insights. Choose whichever platform suits your learning style best, or join all three for the full experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                Is this community suitable for beginners?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely! We welcome learners at all levels, from complete beginners to experienced traders. Our peer-to-peer learning approach means experienced members are always willing to help newcomers understand concepts, and there are no "stupid questions" in our community.
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
                Free Web3 learning community for crypto enthusiasts and
                blockchain builders.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Learning Topics</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Cryptocurrencies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Blockchain Tech
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
                  <Link href="#" className="hover:text-gray-900">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    YouTube
                  </Link>
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
