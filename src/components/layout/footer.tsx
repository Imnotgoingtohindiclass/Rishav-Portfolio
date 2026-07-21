import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t hairline">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            Rishav Ganguly, {new Date().getFullYear()}. Singapore.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/imnotgoingtohindiclass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishav-ganguly-174960348/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
