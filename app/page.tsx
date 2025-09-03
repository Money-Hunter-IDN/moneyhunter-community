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
              50,000+ Learning Together - 100% Free
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Learn, Discuss, Grow
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Join the ultimate free community for Web3 enthusiasts. Learn about
            cryptocurrencies, blockchain technology, macroeconomy, onchain
            analysis, technical analysis, and discover Web3 career
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FF5900] hover:bg-[#FF5900]/90 text-white px-8 py-4 text-lg"
            >
              Join Free Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-white"
            >
              Browse Discussions
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-[#FF5900] to-[#FF5900] bg-clip-text text-transparent">
                Web3 Knowledge
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive platform for learning, discussing, and staying
              updated on Web3, crypto, and macroeconomic trends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">
                  Educational Resources
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive guides on Web3, blockchain technology, DeFi
                  protocols, and cryptocurrency fundamentals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Active Community</CardTitle>
                <CardDescription className="text-gray-600">
                  Connect with fellow learners, share insights, ask questions,
                  and participate in meaningful discussions about crypto and
                  Web3.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Web3 Career Hub</CardTitle>
                <CardDescription className="text-gray-600">
                  Discover job opportunities, career paths, and networking
                  opportunities in the Web3 and blockchain space.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-[#FF5900] pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Cryptocurrency & Blockchain
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Deep dive into Bitcoin, Ethereum, altcoins, and blockchain
                    technology. Learn about consensus mechanisms, tokenomics,
                    and the latest developments in the crypto space.
                  </p>
                  <Link
                    href="#"
                    className="text-[#FF5900] hover:text-[#FF5900]/80 inline-flex items-center"
                  >
                    Explore Topics <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Macroeconomy & Markets
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Understand how global economic trends, monetary policy, and
                    institutional adoption affect cryptocurrency markets and
                    Web3 ecosystem growth.
                  </p>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-700 inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>

                <div className="border-l-4 border-gray-300 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Technical & Onchain Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master chart reading, technical indicators, onchain metrics,
                    and data analysis tools to better understand market
                    movements and blockchain activity.
                  </p>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-700 inline-flex items-center"
                  >
                    Start Learning <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="bg-gradient-to-r from-[#FF5900]/10 to-[#FF5900]/5 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    TRENDING DISCUSSION
                  </span>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/30">
                    HOT
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Bitcoin ETF Impact Analysis
                </h4>
                <p className="text-gray-600 mb-4">
                  Community members discussing the long-term effects of
                  institutional Bitcoin adoption and ETF approvals.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">247</span>
                  <span className="text-sm text-gray-500">
                    Active Participants
                  </span>
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
              Loved by{" "}
              <span className="bg-gradient-to-r from-[#FF5900] to-[#FF5900] bg-clip-text text-transparent">
                Web3 Learners
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of Web3 enthusiasts who are learning, growing, and
              building their knowledge together in our free community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Web3 Developer",
                content:
                  "The discussions here helped me transition from traditional tech to Web3. The community is incredibly supportive and knowledgeable.",
                avatar: "AC",
              },
              {
                name: "Sarah Martinez",
                role: "Crypto Enthusiast",
                content:
                  "Best place to learn about DeFi and onchain analysis. The educational content and peer discussions are top-notch.",
                avatar: "SM",
              },
              {
                name: "David Kim",
                role: "Blockchain Student",
                content:
                  "Found my first Web3 job through connections made here. The career resources and networking opportunities are amazing.",
                avatar: "DK",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">
                    {testimonial.content}
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
                Is MoneyHunter community really free?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! MoneyHunter is a completely free community for Web3
                enthusiasts. We believe knowledge should be accessible to
                everyone. Join discussions, access educational resources, and
                connect with fellow learners at no cost.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                What topics can I learn about in the community?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our community covers Web3 fundamentals, blockchain technology,
                cryptocurrencies, DeFi protocols, macroeconomic analysis,
                technical analysis, onchain analytics, and Web3 career
                opportunities. We welcome discussions on all aspects of the
                crypto and blockchain ecosystem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                Do you provide financial advice?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No, MoneyHunter is an educational community focused on learning
                and discussion. We do not provide financial or investment
                advice. All content is for educational purposes only. Always do
                your own research and consult with qualified professionals for
                financial decisions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                How can I find Web3 job opportunities?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our Web3 Career Hub features job postings, career guidance,
                networking opportunities, and discussions about different roles
                in the blockchain space. Community members regularly share
                opportunities and career advice to help others transition into
                Web3.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900 hover:text-[#FF5900]">
                What makes this community different from others?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                MoneyHunter combines educational resources with active community
                discussions, covering both technical aspects of Web3 and broader
                macroeconomic context. We focus on quality discussions, peer
                learning, and practical knowledge that helps members grow in the
                Web3 space.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-[#FF5900]/10 to-[#FF5900]/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Ready to Start Your Web3 Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of Web3 enthusiasts learning about cryptocurrencies,
            blockchain technology, and the future of decentralized finance -
            completely free.
          </p>
          <Button
            size="lg"
            className="bg-[#FF5900] hover:bg-[#FF5900]/90 text-white px-12 py-4 text-xl"
          >
            Join Free Community
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
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
