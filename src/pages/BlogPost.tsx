import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/blog";
import { useSEO } from "@/lib/useSEO";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug && p.published);

  useSEO({
    title: post ? post.title : "Blog Post",
    description: post?.excerpt ?? "Blog article by Md. Shahrier Hasan Saki.",
  });

  if (!post) {
    return (
      <Container className="py-24">
        <p className="text-[var(--text-secondary)]">Post not found.</p>
        <Link
          to="/blog"
          className="mt-4 inline-flex items-center gap-1 text-sm"
          style={{ color: "var(--accent-text)" }}
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-16 sm:py-24">
      <Link
        to="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
      >
        <ArrowLeft size={14} /> Back to blog
      </Link>

      <article className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-full border border-[var(--border-hairline)] px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            {post.category}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-muted)]">
            {post.date}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--text-muted)]">
            {post.readingTime}
          </span>
        </div>

        <h1 className="mb-6 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mb-10 text-lg text-[var(--text-secondary)]">{post.excerpt}</p>

        <div 
          className="blog-content mt-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Container>
  );
}
