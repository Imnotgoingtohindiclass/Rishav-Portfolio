import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { projectsData } from "@/lib/data";
import { ProjectProps } from "@/components/ui/project-card";
import { ArrowLeft, Clock, Code, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const [location] = useLocation();
  const [project, setProject] = useState<ProjectProps | null>(null);
  
  useEffect(() => {
    // Extract slug from location
    const slug = location.split("/").pop();
    
    if (slug) {
      // Find the matching project
      const foundProject = projectsData.find(p => 
        p.title.toLowerCase().replace(/\s+/g, "-") === slug
      );
      
      if (foundProject) {
        setProject(foundProject);
      }
    }
  }, [location]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cybersecurity":
        return "bg-primary/20 text-primary";
      case "Web Dev":
        return "bg-secondary/20 text-secondary";
      case "Electronics":
      case "Engineering":
        return "bg-accent/20 text-accent";
      default:
        return "bg-muted/20 text-muted";
    }
  };
  
  return (
    <div className="min-h-screen text-foreground font-mono">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
              </Link>
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              <Badge className={`${getCategoryColor(project.category)} text-sm px-3 py-1`}>
                {project.category}
              </Badge>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden mb-10 bg-card/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-3">
                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Code size={20} className="mr-2 text-primary" /> Overview
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-foreground font-sans leading-relaxed mb-4">
                      {project.fullDescription || project.description}
                    </p>
                  </div>
                </section>
                
                {project.challenges && (
                  <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                      <Code size={20} className="mr-2 text-primary" /> Challenges
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-foreground font-sans leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>
                  </section>
                )}
                
                {project.outcomes && (
                  <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                      <Lightbulb size={20} className="mr-2 text-primary" /> Outcomes & Learnings
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-foreground font-sans leading-relaxed">
                        {project.outcomes}
                      </p>
                    </div>
                  </section>
                )}
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-card/30 border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-background/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {project.durationHours && (
                      <div>
                        <h4 className="text-sm text-muted-foreground mb-2">Duration</h4>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2 text-primary" />
                          <span>{project.durationHours} hours</span>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Links</h4>
                      <div className="space-y-2">
                        {Object.entries(project.links).map(([key, url]) => {
                          if (!url) return null;
                          
                          let label;
                          switch (key) {
                            case 'demo': 
                              label = project.category === "Cybersecurity" ? "Demo" : "Live Site";
                              break;
                            case 'code': 
                              label = "View Code";
                              break;
                            case 'documentation': 
                              label = "Documentation";
                              break;
                            case 'video': 
                              label = "Demo Video";
                              break;
                            case 'paper': 
                              label = "Research Paper";
                              break;
                            case 'challenges': 
                              label = "Challenges";
                              break;
                            default: 
                              label = key.charAt(0).toUpperCase() + key.slice(1);
                          }
                          
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;