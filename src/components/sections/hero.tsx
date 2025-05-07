import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

interface Song {
  title: string;
  artist: string;
  album: string;
  progress: number;
  duration: number;
  url: string;
  image: string;
}

const Hero = () => {
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    fetch('/api/spotify')
      .then(res => res.json())
      .then(data => {
        console.log('🎵 Access Token:', data.access_token);
      });
  }, []);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await fetch('/api/spotify/current');
        const data = await res.json();
        setSong(data.playing ? data.song : null);
      } catch (error) {
        console.error('Error fetching current song:', error);
        setSong(null);
      }
    };

    fetchSong();
    // Set up polling every 30 seconds
    const interval = setInterval(fetchSong, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 relative group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-border animate-gradient-rotate"></div>
              <div className="relative w-full h-full rounded-full p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img 
                    src="Item-6_Jakarta-Trip24_GOJEK-Presentation.jpg" 
                    alt="Rishav Ganguly"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 font-mono">
              Rishav Ganguly
              
            </h1>
            <p className="text-primary text-xl mt-2 font-sans opacity-95">
              ENGINEER
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="mt-16 flex space-x-6">
            <a href="https://github.com/imnotgoingtohindiclass" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-primary">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rishav-ganguly-174960348/" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-secondary">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/r.15.hav" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-accent">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;