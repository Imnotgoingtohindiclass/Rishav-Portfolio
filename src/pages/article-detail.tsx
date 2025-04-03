import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { articlesData } from "@/lib/data";
import { ArticleProps } from "@/components/ui/article-card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

const ArticleDetail = () => {
  const [, params] = useRoute("/article/:slug");
  const [article, setArticle] = useState<ArticleProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params?.slug || "";
    
    // Find the article in the data
    const foundArticle = articlesData.find(
      (a) => a.title.toLowerCase().replace(/\s+/g, "-") === slug
    );
    
    if (foundArticle) {
      setArticle(foundArticle);
    }
    
    setLoading(false);
  }, [params]);

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
            <Link href="/#writing">
              <span className="text-primary hover:text-primary/80 inline-flex items-center cursor-pointer">
                <ChevronLeft size={16} className="mr-1" />
                Back to Articles
              </span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Sample article content - In a real app, this would come from a database
  const sampleContent = article.content || `
  <p>
    This is a sample article content for <strong>${article.title}</strong>. In a real application, 
    this content would be stored in a database and retrieved when the article is accessed.
  </p>
  
  <h2>Introduction</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero euismod, 
    efficitur nisi a, finibus urna. Sed tincidunt eros vel arcu ultrices, 
    eget ultrices nisi malesuada. Proin a volutpat dui, non venenatis justo.
  </p>
  
  <h2>Main Concepts</h2>
  <p>
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Suspendisse potenti. Donec vel metus vel neque volutpat tincidunt. Vivamus dapibus risus a 
    purus finibus, in efficitur augue efficitur.
  </p>
  <ul>
    <li>First important point about ${article.category}</li>
    <li>Second critical concept to understand</li>
    <li>Third element that ties everything together</li>
  </ul>
  
  <h2>Implementation Details</h2>
  <p>
    Praesent tincidunt purus a nunc condimentum, vel facilisis libero sollicitudin. Cras eget 
    dapibus nulla. Integer ac felis non est lacinia ultrices. Suspendisse potenti. 
    Suspendisse vel dui vel nulla iaculis ultricies.
  </p>
  
  <pre><code>
  // Sample code block relevant to the article topic
  function secureDataTransfer(data) {
    // Implementation details would go here
    const encryptedData = encrypt(data);
    return sendSecurely(encryptedData);
  }
  </code></pre>
  
  <h2>Conclusion</h2>
  <p>
    Curabitur hendrerit nisi in lectus lobortis, vel malesuada dolor rhoncus. Suspendisse vel 
    semper sapien. Nulla facilisi. Donec malesuada arcu eget gravida cursus. Nulla mollis 
    nisl nec nisl aliquam, at dapibus mi consectetur.
  </p>
  `;

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <Link href="/#writing">
            <span className="text-primary hover:text-primary/80 inline-flex items-center mb-6 cursor-pointer">
              <ChevronLeft size={16} className="mr-1" />
              Back to Articles
            </span>
          </Link>
          
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
            
            <div 
              className="prose prose-invert prose-pre:bg-background/50 prose-pre:border prose-pre:border-card 
                        prose-headings:text-foreground prose-headings:font-bold prose-a:text-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: sampleContent }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;