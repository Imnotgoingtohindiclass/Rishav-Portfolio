import ProjectCard, { ProjectProps } from "../components/ui/project-card.tsx";
import { projectsData } from "../lib/data.ts";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

const AllProjects = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projectsData.forEach(project => {
      project.technologies.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Count tag occurrences
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allTags.forEach(tag => {
      counts[tag] = projectsData.filter(project => 
        project.technologies.includes(tag)
      ).length;
    });
    return counts;
  }, [allTags]);

  // Get top 4 most used tags
  const topTags = useMemo(() => {
    return allTags
      .sort((a, b) => tagCounts[b] - tagCounts[a])
      .slice(0, 4);
  }, [allTags, tagCounts]);

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projectsData;
    return projectsData.filter(project => 
      project.technologies.includes(selectedTag)
    );
  }, [selectedTag]);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <section className="py-20">
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
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(null)}
          >
            All Projects ({projectsData.length})
          </Button>
          {topTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
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
