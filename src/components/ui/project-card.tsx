import { Badge } from "./badge";
import { Card, CardContent } from "./card";
import { Github, ExternalLink, FileText, Trophy, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ProjectProps {
    title: string;
    description: string;
    fullDescription?: string;
    category: "Systems" | "Cybersecurity" | "Electronics" | "Engineering" | "MUN" | "Web Dev" | "Robotics" | "Research" | "AI/ML" | "Other";
    image: string;
    technologies: string[];
    durationHours?: number | "Ongoing";
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
    const navigate = useNavigate();

    const handleCardClick = () => {
        const slug = project.title.toLowerCase().replace(/\s+/g, "-");
        navigate(`/project/${slug}`);
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Cybersecurity":
                return "bg-red-900/50 text-red-300 border-red-700/80";
            case "Electronics":
                return "bg-blue-900/50 text-blue-300 border-blue-700/80";
            case "Engineering":
                return "bg-green-900/50 text-green-300 border-green-700/80";
            case "MUN":
                return "bg-yellow-900/50 text-yellow-300 border-yellow-700/80";
            case "Web Dev":
                return "bg-purple-900/50 text-purple-300 border-purple-700/80";
            case "Robotics":
                return "bg-indigo-900/50 text-indigo-300 border-indigo-700/80";
            case "Research":
                return "bg-pink-900/50 text-pink-300 border-pink-700/80";
            case "AI/ML":
                return "bg-gray-700/50 text-gray-300 border-gray-600/80";
            default:
                return "bg-violet-900/50 text-primary border-violet-700/80";
        }
    };

    const renderLink = (key: string, href: string, icon: React.ReactNode, text: string) => (
        <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-foreground text-sm flex items-center gap-1.5 transition-colors"
            onClick={(e) => e.stopPropagation()}
        >
            {icon} {text}
        </a>
    );

    const getLinks = () => {
        const linkConfig = [
            { key: 'demo', href: project.links.demo, icon: <ExternalLink size={14} />, text: project.category === "Cybersecurity" ? "Demo" : "Live Site" },
            { key: 'code', href: project.links.code, icon: <Github size={14} />, text: 'Code' },
            { key: 'documentation', href: project.links.documentation, icon: <FileText size={14} />, text: 'Docs' },
            { key: 'paper', href: project.links.paper, icon: <FileText size={14} />, text: 'Paper' },
            { key: 'video', href: project.links.video, icon: <ExternalLink size={14} />, text: 'Video' },
            { key: 'challenges', href: project.links.challenges, icon: <Trophy size={14} />, text: 'Challenges' },
        ];

        return linkConfig
            .filter(link => link.href)
            .map(link => renderLink(link.key, link.href!, link.icon, link.text));
    };

    return (
        <Card
            className="project-card h-full bg-card/30 border border-slate-800 hover:border-primary/70
                        transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]
                        cursor-pointer flex flex-col"
            onClick={handleCardClick}
        >
            <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-primary pr-2 line-clamp-1">{project.title}</h3>
                    <Badge variant="outline" className={`font-mono text-xs whitespace-nowrap ${getCategoryColor(project.category)}`}>
                        {project.category}
                    </Badge>
                </div>

                <p className="text-muted-foreground mb-4 text-sm font-sans h-20 overflow-hidden text-ellipsis">
                    {project.description}
                </p>

                {project.durationHours && (
                    <div className="flex items-center mb-4 text-xs text-muted-foreground/80">
                        <Clock size={14} className="mr-1.5" />
                        <span>
                            {typeof project.durationHours === "number"
                                ? `${project.durationHours} hours`
                                : project.durationHours}
                        </span>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/75 text-primary-foreground/80 text-xs font-normal">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex-grow" /> 

                <div className="flex items-center space-x-4 mt-auto border-t border-slate-800 pt-4">
                    {getLinks()}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;