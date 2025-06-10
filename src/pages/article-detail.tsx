import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { articlesData } from "../lib/data";
import { ArticleProps } from "../components/ui/article-card";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { Badge } from "../components/ui/badge";
import { ChevronLeft } from "lucide-react";

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [article, setArticle] = useState<ArticleProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Instant scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

    if (slug) {
    // Find the article in the data
    const foundArticle = articlesData.find(
      (a) => a.title.toLowerCase().replace(/\s+/g, "-") === slug
    );
    
    if (foundArticle) {
      setArticle(foundArticle);
      }
    }
    
    setLoading(false);
  }, [slug]);

  const handleBackClick = () => {
    navigate("/#writing");
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen text-foreground">
        <Header />
        <main className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto bg-card/30 border border-card rounded-lg p-10 text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <button 
              onClick={handleBackClick}
              className="text-primary hover:text-primary/80 inline-flex items-center cursor-pointer"
            >
                <ChevronLeft size={16} className="mr-1" />
                Back to Articles
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={handleBackClick}
            className="text-primary hover:text-primary/80 inline-flex items-center mb-6 cursor-pointer"
          >
              <ChevronLeft size={16} className="mr-1" />
              Back to Articles
          </button>
          
          <article className="bg-card/30 border border-card rounded-lg p-8 md:p-10">
            <Badge
              variant="outline"
              className={`font-mono text-xs ${getCategoryColor(article.category)} mb-4 inline-block`}
            >
              {article.category}
            </Badge>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center mb-8 text-sm text-muted-foreground">
              <span>{article.source}</span>
              <span className="mx-2">•</span>
              <span>Published: March 2025</span>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;