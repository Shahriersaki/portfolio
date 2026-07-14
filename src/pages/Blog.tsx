import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, PenLine } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { blogPosts, BLOG_CATEGORIES, type BlogCategory } from "@/data/blog";
import { useSEO } from "@/lib/useSEO";

export default function Blog() {
  useSEO({
    title: "Blog",
    description:
      "Articles on SEO, digital marketing, AI workflows, and automation — by Md. Shahrier Hasan Saki.",
  });

  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");

  const publishedPosts = blogPosts.filter((p) => p.published);
  const filteredPosts =
    activeCategory === "All"
      ? publishedPosts
      : publishedPosts.filter((p) => p.category === activeCategory);

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Blog"
        title="Thoughts on SEO, marketing, and building things"
        description="Articles drawn from real project work — not rewritten theory. Covering SEO, digital marketing, AI, and the automation that ties it together."
      />

      {/* Category Filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("All")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            activeCategory === "All"
              ? "text-white"
              : "border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
          }`}
          style={activeCategory === "All" ? { background: "var(--accent)" } : undefined}
        >
          All
        </button>
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              activeCategory === cat
                ? "text-white"
                : "border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
            }`}
            style={activeCategory === cat ? { background: "var(--accent)" } : undefined}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts or Empty State */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {filteredPosts.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-1)] p-6 transition hover:border-[var(--border-strong)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full border border-[var(--border-hairline)] px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {post.category}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-muted)]">
                  {post.readingTime}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-medium">{post.title}</h3>
              <p className="mb-4 flex-1 text-sm text-[var(--text-secondary)]">{post.excerpt}</p>
              <span className="text-sm text-[var(--accent-text)] opacity-0 transition group-hover:opacity-100">
                Read article →
              </span>
            </motion.a>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center rounded-2xl border border-dashed border-[var(--border-hairline)] bg-[var(--bg-1)] px-8 py-16 text-center"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "var(--accent-bg)" }}>
            <PenLine size={24} style={{ color: "var(--accent)" }} />
          </div>
          <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl">
            Articles coming soon
          </h3>
          <p className="max-w-md text-sm text-[var(--text-secondary)]">
            I am writing articles based on real project experience across SEO, digital marketing, AI workflows, and automation. The first posts will appear here shortly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-[var(--border-hairline)] px-3 py-1 text-sm text-[var(--text-secondary)]"
              >
                <FileText size={12} className="mr-1.5 inline-block" />
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </Container>
  );
}
