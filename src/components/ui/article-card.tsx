import { Badge } from "./badge";
import { Card, CardContent } from "./card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ArticleProps {
  title: string;
  description: string;
  category: "Cybersecurity" | "Web Development" | "Research" | "Tutorial";
  source: string;
  link: string;
  content?: string;
}

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleCardClick = () => {
    const slug = article.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/article/${slug}`);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cybersecurity":
        return "bg-primary/20 text-primary";
      case "Web Development":
        return "bg-secondary/20 text-secondary";
      case "Research":
        return "bg-accent/20 text-accent";
      case "Tutorial":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted/20 text-muted";
    }
  };

  return (
    <Card 
      className="h-full bg-card/30 border-transparent hover:border-primary/30 overflow-hidden transition-all 
                duration-300 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)] cursor-pointer"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <CardContent className="p-6 flex flex-col h-full">
        {/* Title with Category Badge */}
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-xl font-serif font-bold transition-all duration-300 ${isHovering ? 'text-primary' : 'text-foreground'}`}>
            {article.title}
          </h3>
          <Badge
            variant="outline"
            className={`font-mono text-[10px] px-2 py-1 ${getCategoryColor(article.category)}`}
          >
            {article.category}
          </Badge>
        </div>
        <p className="text-muted-foreground font-sans mb-4 flex-grow">{article.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-muted-foreground text-sm">{article.source}</span>
          <span className={`text-sm transition-all duration-300 flex items-center ${isHovering ? 'text-primary translate-x-1' : 'text-primary/80'}`}>
            Read Article →
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
