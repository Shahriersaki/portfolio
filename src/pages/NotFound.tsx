import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="mb-3 font-[family-name:var(--font-display)] text-3xl">Page not found</h1>
      <p className="mb-6 text-[var(--text-secondary)]">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-sm text-[var(--accent-text)]">
        Back to home
      </Link>
    </Container>
  );
}
