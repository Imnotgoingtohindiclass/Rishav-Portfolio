import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectCard, { ProjectProps } from "../components/ui/project-card";
import { projectsData } from "../lib/data";

const getAllTags = (projects: typeof projectsData): string[] => {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
};

const getTagCounts = (projects: typeof projectsData, tags: string[]): Record<string, number> => {
  const counts: Record<string, number> = {};
  tags.forEach((tag) => {
    counts[tag] = projects.filter((project) => project.technologies.includes(tag)).length;
  });
  return counts;
};

const getTopTags = (tags: string[], counts: Record<string, number>, limit = 3): string[] => {
  return tags.sort((a, b) => counts[b] - counts[a]).slice(0, limit);
};

const AllProjects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => getAllTags(projectsData), []);
  const tagCounts = useMemo(() => getTagCounts(projectsData, allTags), [allTags]);
  const topTags = useMemo(() => getTopTags(allTags, tagCounts), [allTags, tagCounts]);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projectsData;
    return projectsData.filter((project) => project.technologies.includes(selectedTag));
  }, [selectedTag]);

  const handleBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleTagClick = useCallback((tag: string | null) => {
    setSelectedTag(tag);
  }, []);

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <Button variant="ghost" className="mb-6" onClick={handleBackClick}>
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Button>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-primary">#</span> All Projects
        </h2>
        <p className="text-muted-foreground mb-12 font-sans">
          Here's everything I've been workin' on
        </p>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => handleTagClick(null)}
            aria-pressed={selectedTag === null}
            className="hover:bg-secondary/80 transition-colors border-secondary/50 hover:border-secondary"
          >
            All Projects ({projectsData.length})
          </Button>
          {topTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleTagClick(tag)}
              aria-pressed={selectedTag === tag}
              className="hover:bg-secondary/80 transition-colors border-secondary/50 hover:border-secondary"
            >
              {tag} ({tagCounts[tag]})
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectProps, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;