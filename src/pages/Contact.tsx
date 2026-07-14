import { useState } from "react";
import { ArrowUpRight, Code2, Download, Mail } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { useSEO } from "@/lib/useSEO";

const CONTACT_LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "seo-expert-saki", href: profile.social.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "Shahriersaki", href: profile.social.github, icon: GithubIcon },
  { label: "LeetCode", value: "tlIY7zMbuS", href: profile.social.leetcode, icon: Code2 },
  { label: "HackerRank", value: "shahrierseopro", href: profile.social.hackerrank, icon: Code2 },
];

export default function Contact() {
  useSEO({
    title: "Contact",
    description: "Get in touch with Md. Shahrier Hasan Saki.",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // TODO: Replace 'YOUR_FORM_ID' with your real Formspree Form ID
    const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Formspree submit error:", error);
      setStatus("error");
    }
  };

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Open to SEO and technical marketing roles, freelance builds, or just a conversation about where SEO and software overlap."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="mb-8 space-y-3">
            {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-[var(--border-hairline)] px-4 py-3.5 transition hover:border-[var(--border-strong)]"
              >
                <span className="flex items-center gap-3 text-sm">
                  <Icon size={16} className="shrink-0 text-[var(--text-muted)]" />
                  <span>
                    <span className="text-[var(--text-muted)]">{label}: </span>
                    {value}
                  </span>
                </span>
                <ArrowUpRight size={14} className="text-[var(--text-muted)]" />
              </a>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 py-2.5 text-sm font-medium text-[var(--bg-0)] transition hover:opacity-85"
          >
            <Download size={15} /> Download resume
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--text-secondary)]">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              disabled={status === "submitting"}
              className="w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-1)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--accent)] disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--text-secondary)]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={status === "submitting"}
              className="w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-1)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--accent)] disabled:opacity-50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--text-secondary)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={status === "submitting"}
              className="w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-1)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--accent)] disabled:opacity-50"
              placeholder="What are you working on?"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-[var(--text-primary)] px-5 py-2.5 text-sm font-medium text-[var(--bg-0)] transition hover:opacity-85 disabled:opacity-50 cursor-pointer"
          >
            {status === "submitting"
              ? "Sending..."
              : status === "success"
              ? "Message sent!"
              : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-xs text-[var(--accent-text)]">
              Thank you! Your message has been sent successfully. I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-xs text-red-500">
              Something went wrong. Please check your Formspree endpoint config or try again later.
            </p>
          )}
        </form>
      </div>
    </Container>
  );
}
