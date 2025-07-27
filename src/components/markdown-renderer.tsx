"use client";

import type React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface IMarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = "" }: IMarkdownRendererProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Customize heading styles
          h1: ({ children }) => <h1 className="mb-4 mt-6 text-2xl font-bold first:mt-0">{children}</h1>,
          h2: ({ children }) => <h2 className="mb-3 mt-5 text-xl font-semibold first:mt-0">{children}</h2>,
          h3: ({ children }) => <h3 className="mb-2 mt-4 text-lg font-medium first:mt-0">{children}</h3>,
          // Customize paragraph styles
          p: ({ children }) => <p className="mb-3 leading-relaxed last:mb-0">{children}</p>,
          // Customize list styles
          ul: ({ children }) => <ul className="mb-3 ml-4 list-disc space-y-1 last:mb-0">{children}</ul>,
          ol: ({ children }) => <ol className="mb-3 ml-4 list-decimal space-y-1 last:mb-0">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          // Customize code styles
          code: ({ children, ...props }: any) => {
            const isInline = !props.className?.includes("language-");
            return isInline ? (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground" {...props}>
                {children}
              </code>
            ) : (
              <code className="block overflow-x-auto rounded bg-muted p-3 font-mono text-sm" {...props}>
                {children}
              </code>
            );
          },
          // Customize pre styles for code blocks
          pre: ({ children }) => (
            <pre className="mb-3 overflow-x-auto rounded bg-muted p-3 font-mono text-sm last:mb-0">{children}</pre>
          ),
          // Customize blockquote styles
          blockquote: ({ children }) => (
            <blockquote className="mb-3 border-l-4 border-muted-foreground/20 pl-4 italic text-muted-foreground last:mb-0">
              {children}
            </blockquote>
          ),
          // Customize link styles
          a: ({ children, href, ...props }) => (
            <a
              href={href}
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          ),
          // Customize table styles
          table: ({ children }) => (
            <div className="mb-3 overflow-x-auto last:mb-0">
              <table className="w-full border-collapse border border-border">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
          th: ({ children }) => <th className="border border-border px-3 py-2 text-left font-semibold">{children}</th>,
          td: ({ children }) => <td className="border border-border px-3 py-2">{children}</td>,
          // Customize horizontal rule
          hr: () => <hr className="my-6 border-t border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
