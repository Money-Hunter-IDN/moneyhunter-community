// app/learn/[...slug]/page.tsx
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import SidebarNav from "@/components/learn/sidebar-nav";
import Markdown from "@/components/learn/markdown";
import { getLearnEntry, allLearnSlugs } from "@/lib/learn-content";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams() {
  return allLearnSlugs.map((s) => ({ slug: [s] }));
}

export default async function LearnSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const slugArr = slug ?? [];
  const joined = slugArr.join("/");

  const content = getLearnEntry(slugArr);
  if (!content) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="flex">
        <SidebarNav activeSlug={joined} />

        <main className="flex-1">
          <div className="flex">
            <div className="flex-1 p-8">
              <Link
                href="/learn"
                className="inline-flex items-center text-slate-400 hover:text-white mb-6 text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Learning Hub
              </Link>

              <div className="flex items-center text-sm text-slate-400 mb-8">
                <span className="text-orange-400 font-medium">MONEYHUNTER</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span>{content.breadcrumb}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {content.title}
              </h1>

              <div className="prose prose-invert max-w-none">
                <Markdown text={content.content} />
              </div>
            </div>

            {/* Right Sidebar - On This Page */}
            <aside className="w-64 p-6 border-l border-slate-800/50">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                On this page
              </h3>
              <nav className="space-y-2">
                {content.content
                  .split("\n")
                  .filter((line) => line.startsWith("## "))
                  .map((heading, index) => {
                    const text = heading.slice(3);
                    const id = text
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]/g, "");
                    return (
                      <Link
                        key={index}
                        href={`#${id}`}
                        className="block text-sm text-slate-300 hover:text-white py-1"
                      >
                        {text}
                      </Link>
                    );
                  })}
              </nav>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
