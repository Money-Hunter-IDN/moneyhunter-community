"use client";

import React from "react";

function toId(t: string) {
  return t
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export default function Markdown({ text }: { text: string }) {
  const html = text
    .split("\n")
    .map((line) => {
      if (line.startsWith("# ")) {
        const t = line.slice(2);
        return `<h1 id="${toId(
          t
        )}" class="text-3xl font-bold text-white mt-8 mb-4">${t}</h1>`;
      } else if (line.startsWith("## ")) {
        const t = line.slice(3);
        return `<h2 id="${toId(
          t
        )}" class="text-2xl font-bold text-white mt-6 mb-3">${t}</h2>`;
      } else if (line.startsWith("### ")) {
        const t = line.slice(4);
        return `<h3 id="${toId(
          t
        )}" class="text-xl font-semibold text-white mt-4 mb-2">${t}</h3>`;
      } else if (line.startsWith("#### ")) {
        const t = line.slice(5);
        return `<h4 id="${toId(
          t
        )}" class="text-lg font-semibold text-white mt-3 mb-2">${t}</h4>`;
      } else if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
        if (match) {
          return `<li class="mb-2"><strong class="text-orange-400">${match[1]}</strong>: ${match[2]}</li>`;
        }
        return `<li class="mb-1">${line.slice(2)}</li>`;
      } else if (line.startsWith("- ")) {
        return `<li class="mb-1">${line.slice(2)}</li>`;
      } else if (line.startsWith("1. ") || line.match(/^\d+\. /)) {
        return `<li class="mb-1">${line.replace(/^\d+\. /, "")}</li>`;
      } else if (line.trim() === "") {
        return "<br>";
      }
      return `<p class="mb-4">${line}</p>`;
    })
    .join("");

  return (
    <div
      className="text-slate-300 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
