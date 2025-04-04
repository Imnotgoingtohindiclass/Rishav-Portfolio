import { Button } from "../ui/button.tsx";
import TerminalText from "../ui/terminal-text.tsx";
import { Github, Linkedin, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 relative group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-border animate-gradient-spin"></div>
              <div className="relative w-full h-full rounded-full p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img 
                    src="/Item-6_Jakarta-Trip24_GOJEK-Presentation.jpg" 
                    alt="Rishav Ganguly"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
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
