import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import type { SongData } from "../../lib/data";

const Hero = () => {
  const [song, setSong] = useState<SongData | null>(null);
  const [showSong, setShowSong] = useState(false);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await fetch('/api/spotify');
        const data: SongData = await res.json();
        setSong(data);
      } catch (err) {
        console.error('Failed to fetch song:', err);
      }
    };

    fetchSong();
    const interval = setInterval(fetchSong, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="field-label mb-6">Engineering student — Singapore</p>

            <h1 className="font-serif text-[18vw] leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground">
              Rishav
              <br />
              Ganguly
            </h1>

            <div className="mt-12 flex items-center gap-6 flex-wrap">
              <a
                href="https://github.com/imnotgoingtohindiclass"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors"
              >
                <Github size={18} /> github
              </a>
              <a
                href="https://www.linkedin.com/in/rishav-ganguly-174960348/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} /> linkedin
              </a>
              <a
                href="https://instagram.com/r.15.hav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-primary transition-colors"
              >
                <Instagram size={18} /> instagram
              </a>

              {song?.isPlaying && (
                <button
                  type="button"
                  onMouseEnter={() => setShowSong(true)}
                  onMouseLeave={() => setShowSong(false)}
                  className="relative flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  now playing
                  {showSong && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border p-3 flex gap-3 text-left shadow-lg z-50">
                      {song.albumImageUrl && (
                        <img src={song.albumImageUrl} alt="" className="w-10 h-10 object-cover flex-shrink-0" />
                      )}
                      <div className="min-w-0">
                        <p className="text-foreground text-xs font-sans truncate">{song.title}</p>
                        <p className="text-muted-foreground text-xs font-sans truncate">{song.artist}</p>
                      </div>
                    </div>
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 md:ml-auto">
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-primary/30" />
              <img
                src="/Item-6_Jakarta-Trip24_GOJEK-Presentation.jpg"
                alt="Rishav Ganguly"
                className="relative w-full h-full object-cover grayscale-[15%] contrast-[1.05] shadow-sm"
              />
              <span className="field-label absolute -bottom-8 left-0">Jakarta, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
