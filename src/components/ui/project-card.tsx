import { Badge } from "./badge";
import { Card, CardContent } from "./card";
import { Github, ExternalLink, FileText, Trophy, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ProjectProps {
  title: string;
  description: string;
  fullDescription?: string;
  category: "Cybersecurity" | "Electronics" | "Engineering" | "MUN" | "Web Dev" | "Robotics" | "Research" | "AI/ML" | "Other";
  image: string;
  technologies: string[];
  durationHours?: number;
  challenges?: string;
  outcomes?: string;
  links: {
    demo?: string;
    code?: string;
    documentation?: string;
    paper?: string;
    video?: string;
    challenges?: string;
  };
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleCardClick = () => {
    const slug = project.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/project/${slug}`);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      default:
        return "bg-violet-900/50 text-primary";
    }
  };

  const getLinks = () => {
    const links = [];
    
    if (project.links.demo) {
      links.push(
        <a 
          key="demo" 
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={14} /> 
          {project.category === "Cybersecurity" ? "Demo" : "Live Site"}
        </a>
      );
    }
    
    if (project.links.code) {
      links.push(
        <a 
          key="code" 
          href={project.links.code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={14} /> Code
        </a>
      );
    }
    
    if (project.links.documentation) {
      links.push(
        <a 
          key="docs" 
          href={project.links.documentation}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <FileText size={14} /> Documentation
        </a>
      );
    }
    
    if (project.links.paper) {
      links.push(
        <div 
          key="paper" 
          className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.links.paper, '_blank', 'noopener noreferrer');
          }}
        >
          <FileText size={14} /> Research Paper
        </div>
      );
    }
    
    if (project.links.video) {
      links.push(
        <div 
          key="video" 
          className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.links.video, '_blank', 'noopener noreferrer');
          }}
        >
          <ExternalLink size={14} /> Demo Video
        </div>
      );
    }
    
    if (project.links.challenges) {
      links.push(
        <div 
          key="challenges" 
          className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.links.challenges, '_blank', 'noopener noreferrer');
          }}
        >
          <Trophy size={14} /> Challenges
        </div>
      );
    }
    
    return links;
  };

  return (
    <div className="h-full">
      <Card 
        className="project-card h-full bg-transparent border-transparent hover:border-primary hover:bg-primary/10 transition overflow-hidden 
                    transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)] cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <div className="h-48 bg-gradient-to-r from-background to-card flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${isHovering ? 'opacity-90' : 'opacity-70'} 
                        transition-all duration-500 ease-in-out`}
          />
        </div>
        <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold line-clamp-1">{project.title}</h3>
            <Badge variant="outline" className={`font-mono text-xs ${getCategoryColor(project.category)}`}>
              {project.category}
            </Badge>
          </div>
          <p className="text-muted-foreground mb-4 text-sm font-sans line-clamp-3">{project.description}</p>
          {project.durationHours && (
            <div className="flex items-center mb-4 text-xs text-muted-foreground">
              <Clock size={14} className="mr-1" />
              <span>{project.durationHours} hours</span>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-purple-500/50 text-muted-foreground text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-4 mt-auto">
            {getLinks()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
