import { Link } from "react-router-dom"; // since vite + react router
import ProjectCard, { ProjectProps } from "../ui/project-card";
import { projectsData } from "../../lib/data";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-primary">#</span> Projects
        </h2>
        <p className="text-muted-foreground mb-12 font-sans">
          A selection of my technical work
        </p>

        {/* Only show 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project: ProjectProps, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View All Projects button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/projects"
            className="px-6 py-3 bg-transparent border rounded-[10px] border-primary text-primary hover:bg-primary hover:text-black transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
