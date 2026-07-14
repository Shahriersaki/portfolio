import { Container, SectionHeading } from "@/components/ui/Container";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { allProjects } from "@/data/projects";
import { useSEO } from "@/lib/useSEO";

export default function Projects() {
  useSEO({
    title: "Projects",
    description: "Case studies and projects spanning SEO automation, full-stack development, and testing.",
  });

  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A mix of production tools, internal systems, and automation projects — built to solve a specific, real problem rather than to pad a portfolio."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {allProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
