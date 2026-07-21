import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projectsData, featuredProjectTitles } from "../../lib/data";
import type { ProjectProps } from "../ui/project-card";

const featured = featuredProjectTitles
  .map((t) => projectsData.find((p) => p.title === t))
  .filter(Boolean) as ProjectProps[];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-t hairline overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-baseline justify-between mb-14 flex-wrap gap-4">
          <p className="field-label">Featured work</p>
          <Link
            to="/projects"
            className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
          >
            all projects on github
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="space-y-8 md:space-y-4">
          {featured.map((project, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <a
                key={project.title}
                href={project.links.code || project.links.demo || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-10 md:py-14 border-b hairline last:border-b-0"
              >
                {/* oversized ghost numeral for asymmetry / visual weight */}
                <span
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 font-serif text-[9rem] leading-none text-primary/[0.05] pointer-events-none select-none ${
                    reversed ? "right-0" : "left-0"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div
                  className={`relative z-10 md:w-7/12 ${
                    reversed ? "md:order-2 md:ml-auto md:pl-10" : "md:pr-10"
                  }`}
                >
                  <span className="field-label md:hidden mb-2 block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-4 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight
                      size={24}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"
                    />
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>

                <div
                  className={`relative z-10 md:w-4/12 ${
                    reversed ? "md:order-1" : "md:ml-auto"
                  } md:border-l hairline md:pl-6`}
                >
                  <dl className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3">
                    <div>
                      <dt className="field-label mb-1">Category</dt>
                      <dd className="text-sm font-sans text-foreground">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="field-label mb-1">Stack</dt>
                      <dd className="text-sm font-sans text-foreground">{project.technologies.join(", ")}</dd>
                    </div>
                    <div>
                      <dt className="field-label mb-1">Status</dt>
                      <dd className="text-sm font-sans text-foreground">
                        {project.durationHours === "Ongoing" ? "Ongoing" : "Complete"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
