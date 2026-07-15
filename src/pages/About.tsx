import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { education } from "@/data/experience";
import { useSEO } from "@/lib/useSEO";

import { assetUrl } from "@/lib/assets";

const LANGUAGES = [
  { lang: "English", level: "Advanced / Professional" },
  { lang: "Bengali", level: "Native" },
];

export default function About() {
  useSEO({
    title: "About",
    description: "About Md. Shahrier Hasan Saki — Data-Driven SEO Expert, Digital Marketer, and Software Developer with 4+ years of experience.",
  });

  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-16 lg:grid-cols-[300px_1fr] lg:gap-20">

        {/* Left column */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl opacity-25 blur-xl" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <img
              src={assetUrl('/images/profile.png')}
              alt={profile.name}
              className="relative w-full max-w-[300px] rounded-2xl border border-[var(--border-hairline)] object-cover aspect-square"
              loading="lazy"
              width={300}
              height={300}
            />
          </div>

          <div className="space-y-1 text-sm">
            <p className="font-medium text-[var(--text-primary)]">{profile.name}</p>
            <p className="text-[var(--text-secondary)]">{profile.role}</p>
            <p className="text-[var(--text-secondary)]">{profile.location}</p>
            <a href={`mailto:${profile.email}`} className="block text-[var(--accent-text)] hover:underline underline-offset-4">
              {profile.email}
            </a>
          </div>

          <div className="space-y-2">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">Languages</p>
            {LANGUAGES.map((l) => (
              <div key={l.lang} className="flex justify-between text-sm">
                <span className="font-medium">{l.lang}</span>
                <span className="text-[var(--text-secondary)]">{l.level}</span>
              </div>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--accent)]"
          >
            Download Resume
          </a>
        </div>

        {/* Right column */}
        <div>
          <SectionHeading
            eyebrow="About"
            title="A Digital Marketer Who Engineers Solutions"
          />

          <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">
            <p>
              I’m a data-driven SEO specialist, digital marketer, and software developer who enjoys solving marketing challenges with technology. Over the past 4+ years, I’ve worked across SEO, paid advertising, content strategy, analytics, automation, and web development, helping businesses improve their online visibility and build scalable growth systems.
            </p>
            <p>
              My career began in eCommerce SEO, optimizing Shopify, Etsy, and eBay stores. Since then, I’ve expanded into technical SEO, search strategy, performance marketing, AI-powered workflows, and software development. Every role has strengthened a different part of my skill set, allowing me to approach digital marketing from both a strategic and technical perspective.
            </p>
            <p>
              What sets me apart is my ability to build the solutions I need. Rather than relying solely on existing tools, I develop custom applications and automation that eliminate repetitive work and improve efficiency. One example is <span className="text-[var(--text-primary)] font-medium">Hotel Schema Maker</span>, a web application I built to automate structured data generation for hotel websites, significantly reducing implementation time while maintaining consistency and accuracy.
            </p>
            <p>
              AI is an integral part of my workflow. I use tools like ChatGPT, Claude, and Gemini to accelerate research, content creation, competitive analysis, and automation, while Python enables me to build scripts that streamline reporting and other time-consuming marketing tasks. I believe AI is most valuable when it enhances expertise rather than replacing it.
            </p>
            <p>
              At my core, I enjoy building things that create measurable business impact. Whether that's improving organic search performance, automating complex workflows, or developing custom software to solve marketing problems, I bring a developer's mindset to digital marketing—combining strategy, data, and technology to deliver practical, scalable results.
            </p>
          </div>

          {/* Education */}
          <div className="mt-10 border-t border-[var(--border-hairline)] pt-8">
            <h3 className="mb-5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">Education</h3>
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{education.degree}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{education.school}</p>
                </div>
                <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--text-muted)] shrink-0">{education.year}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{education.earlier.credential}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{education.earlier.school}</p>
                </div>
                <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--text-muted)] shrink-0">{education.earlier.year}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:opacity-85"
              style={{ background: "var(--text-primary)", color: "var(--bg-0)" }}
            >
              See my work <ArrowRight size={14} />
            </Link>
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--accent)]"
            >
              View all skills
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
