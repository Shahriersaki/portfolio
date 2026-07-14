import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-0)]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <Link to="/" className="font-[family-name:var(--font-display)] text-lg tracking-tight font-semibold">
              Shahrier<span style={{ color: "var(--accent-text)" }}>.</span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] max-w-xs">
              Digital Marketing Professional specializing in SEO strategy, paid ads, and automation tools.
            </p>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)] mb-3">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-[var(--text-secondary)]">
              <Link to="/about" className="hover:text-[var(--text-primary)] transition">About</Link>
              <Link to="/services" className="hover:text-[var(--text-primary)] transition">Services</Link>
              <Link to="/case-studies" className="hover:text-[var(--text-primary)] transition">Case Studies</Link>
              <Link to="/skills" className="hover:text-[var(--text-primary)] transition">Skills</Link>
              <Link to="/experience" className="hover:text-[var(--text-primary)] transition">Experience</Link>
              <Link to="/projects" className="hover:text-[var(--text-primary)] transition">Projects</Link>
              <Link to="/blog" className="hover:text-[var(--text-primary)] transition">Blog</Link>
              <Link to="/contact" className="hover:text-[var(--text-primary)] transition">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)] mb-3">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition">LinkedIn</a>
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition">GitHub</a>
              <a href={`mailto:${profile.email}`} className="hover:text-[var(--text-primary)] transition">Email</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--border-hairline)] pt-6 flex flex-col gap-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/labs" className="hover:text-[var(--text-primary)] transition">Labs</Link>
            <Link to="/github" className="hover:text-[var(--text-primary)] transition">GitHub Repos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
