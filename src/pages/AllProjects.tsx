import ProjectCard, { ProjectProps } from "../components/ui/project-card.tsx";
import { projectsData } from "../lib/data.ts";

const AllProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-primary">#</span> All Projects
        </h2>
        <p className="text-muted-foreground mb-12 font-sans">
          Here's everything I've been workin' on
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project: ProjectProps, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
