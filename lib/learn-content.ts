export type LearnKey =
  | "web3-basics"
  | "blockchain-basics"
  | "crypto-basics"
  | "defi";

export type LearnEntry = {
  title: string;
  breadcrumb: string;
  content: string;
};

export const learnContent: Record<LearnKey, LearnEntry> = {
  "web3-basics": {
    title: "Web3 Fundamentals",
    breadcrumb: "WEB3 FUNDAMENTALS",
    content: `
# Web3 Fundamentals
... (keep your existing content)
`,
  },
  "blockchain-basics": {
    title: "Blockchain Technology",
    breadcrumb: "BLOCKCHAIN BASICS",
    content: `
# Blockchain Technology
... (keep your existing content)
`,
  },
  "crypto-basics": {
    title: "Cryptocurrency Basics",
    breadcrumb: "CRYPTOCURRENCY BASICS",
    content: `
# Cryptocurrency Basics
... (keep your existing content)
`,
  },
  defi: {
    title: "DeFi Protocols",
    breadcrumb: "DEFI PROTOCOLS",
    content: `
# DeFi Protocols
... (keep your existing content)
`,
  },
};

export const allLearnSlugs = Object.keys(learnContent) as LearnKey[];

export function getLearnEntry(slug?: string | string[]) {
  const s = Array.isArray(slug) ? slug.join("/") : slug ?? "";
  const key = (s || "web3-basics") as LearnKey;
  return learnContent[key] ?? learnContent["web3-basics"];
}
