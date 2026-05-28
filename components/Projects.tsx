import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Systems, AI, products, and engineering tools."
          description="A project portfolio centered on technical depth: repository intelligence, modern C++, assembly-level games, real-time applications, graph tooling, and applied machine learning."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              large={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
