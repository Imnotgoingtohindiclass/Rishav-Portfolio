import { Button } from "../ui/button.tsx";
import TerminalText from "../ui/terminal-text.tsx";
import { Github, Linkedin, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 overflow-hidden">
            <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6v12" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12h12" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 3a4 4 0 0 1 4 4" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 21a4 4 0 0 1-4-4" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 7a4 4 0 0 1 4-4" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 17a4 4 0 0 1-4 4" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 font-mono">
              <TerminalText text="Rishav Ganguly" typingDelay={1} />
            </h1>
            <p className="text-muted-foreground text-xl mt-2 font-sans opacity-75">
              ENGINEER
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="mt-16 flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-primary">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-secondary">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-accent">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
