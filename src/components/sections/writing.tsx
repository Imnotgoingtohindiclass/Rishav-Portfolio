import ArticleCard, { ArticleProps } from "../ui/article-card";
import { articlesData } from "../../lib/data";

const Writing = () => {
  return (
    <section id="writing" className="py-20 bg-background/30">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-primary">#</span> WRITE UP
        </h2>
        <p className="text-muted-foreground mb-12 font-sans">
          Technical articles and research papers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map((article: ArticleProps, index: number) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
