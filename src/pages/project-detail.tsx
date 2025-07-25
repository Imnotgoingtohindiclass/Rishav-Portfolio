import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../lib/data";
import { ProjectProps } from "../components/ui/project-card";
import { ArrowLeft, Clock, Code, Lightbulb } from "lucide-react";
import { Badge } from "../components/ui/badge";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { Button } from "../components/ui/button";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (slug) {
      const foundProject = projectsData.find(
        (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
      );
      if (foundProject) setProject(foundProject);
    }

    setLoading(false);
  }, [slug]);

  const handleBackClick = () => navigate("/projects");

  const getCategoryColor = (category: string) => {
    const categoryStyles: Record<string, string> = {
      Cybersecurity: "bg-primary/20 text-primary",
      "Web Dev": "bg-secondary/20 text-secondary",
      Electronics: "bg-accent/20 text-accent",
      Engineering: "bg-accent/20 text-accent",
    };
    return categoryStyles[category] || "bg-muted/20 text-muted";
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button onClick={handleBackClick}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-foreground font-mono">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <Button
            variant="ghost"
            className="mb-6 flex items-center"
            onClick={handleBackClick}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Button>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content - LEFT COLUMN */}
            <div className="lg:w-2/3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                <Badge
                  className={"bg-accent/20 text-accent text-sm px-3 py-1"}>
                  {project.category}
                </Badge>
              </div>

              <Section
                title="Overview"
                icon={<Code size={20} className="text-primary mr-2" />}
                content={project.fullDescription || project.description}
              />

              {project.challenges && (
                <Section
                  title="Challenges"
                  icon={<Code size={20} className="text-primary mr-2" />}
                  content={project.challenges}
                />
              )}

              {project.outcomes && (
                <Section
                  title="Outcomes & Learnings"
                  icon={<Lightbulb size={20} className="text-primary mr-2" />}
                  content={project.outcomes}
                />
              )}
            </div>

            {/* Sidebar - RIGHT COLUMN */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-card/30 border border-border rounded-lg p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain rounded-md mb-4"
                />
                <Sidebar project={project} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Section = ({
  title,
  icon,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  content: string;
}) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4 flex items-center">
      {icon}
      {title}
    </h2>
    <div className="prose prose-invert max-w-none">
      <p className="text-foreground font-sans leading-relaxed">{content}</p>
    </div>
  </section>
);

const Sidebar = ({ project }: { project: ProjectProps }) => (
  <div className="bg-card/30 border border-border rounded-lg p-6">
    <h3 className="text-lg font-bold mb-4">Project Details</h3>

    <div className="space-y-4">
      <SidebarDetail title="Technologies">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-slate bg-secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </SidebarDetail>

      {project.durationHours && (
        <SidebarDetail title="Duration">
          <div className="flex items-center">
            <Clock size={16} className="text-primary mr-2" />
            <span>{project.durationHours}</span>
          </div>
        </SidebarDetail>
      )}

      <SidebarDetail title="Links">
        <div className="space-y-2">
          {Object.entries(project.links).map(([key, url]) => {
            if (!url) return null;

            const label = {
              demo: project.category === "Cybersecurity" ? "Demo" : "Live Site",
              code: "View Code",
              documentation: "Documentation",
              video: "Demo Video",
              paper: "Research Paper",
              challenges: "Challenges",
            }[key] || key.charAt(0).toUpperCase() + key.slice(1);

            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-primary/80 transition-colors"
              >
                {label}
              </a>
            );
          })}
        </div>
      </SidebarDetail>
    </div>
  </div>
);

const SidebarDetail = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h4 className="text-sm text-muted-foreground mb-2">{title}</h4>
    {children}
  </div>
);

export default ProjectDetail;