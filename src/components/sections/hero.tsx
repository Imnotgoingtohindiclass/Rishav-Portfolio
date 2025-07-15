import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { FaPause } from "react-icons/fa";
// import { Button } from "../ui/button";
import type { SongData } from "../../lib/data";

const Hero = () => {
  const [song, setSong] = useState<SongData | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);

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
    const interval = setInterval(fetchSong, 15000); // refresh every 30 sec

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative bg-background/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-8 relative group animate-fade-in"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-64 h-64 md:w-64 md:h-64 rounded-full relative animate-scale-in">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-border animate-gradient-rotate"></div>
              <div className="relative w-full h-full rounded-full p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src='Item-6_Jakarta-Trip24_GOJEK-Presentation.jpg'
                    alt="Rishav Ganguly"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            {hoverPosition && (
              <div
                className={`
                  absolute pointer-events-none rounded-2xl shadow-lg overflow-hidden
                  transition-all duration-300 ease-out
                  backdrop-blur-md border border-white/20
                  bg-black/30
                `}
                style={{
                  top: hoverPosition.y + 20,
                  left: hoverPosition.x,
                  transform: "translate(0%, -100%)",
                  minWidth: "17rem",
                  width: "max-content",
                  maxWidth: "24rem", // Optional cap to avoid excessive width
                }}                
              >
                {/* Header */}
                <div className="bg-purple-700/50 text-white text-xs font-semibold border-none flex items-center px-3 py-1.5 backdrop-blur-md">
                  <span className="mr-1">🎧</span>
                  Current Spotify Song:
                </div>

                {/* Main Content */}
                <div className="flex p-3">
                  {/* Album Art - Only show when song is playing */}
                  {song && song.isPlaying && (
                    <img
                      src={song.albumImageUrl}
                      alt={`Album cover for ${song.title}`}
                      className="w-16 h-16 rounded-lg object-cover shadow-sm"
                    />
                  )}

                  {/* Song Info + Controls */}
                  <div className={`flex flex-col justify-between w-full ${song && song.isPlaying ? 'ml-3' : ''}`}>
                    {song && song.isPlaying ? (
                      <>
                        <div className="truncate text-left">
                          <p className="text-white text-sm font-bold truncate">{song.title}</p>
                          <p className="text-zinc-300 text-xs truncate">{song.artist}</p>
                        </div>
                        <div className="flex justify-end mt-2 items-center justify-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              // play/pause logic here
                            }}
                            className="w-5 h-5 flex items-center justify-center bg-white rounded-full hover:scale-105 transition-transform shadow-md"
                          >
                            <FaPause className="w-2.5 h-2.5 text-black" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full w-full">
                        <p className="text-zinc-400 text-xs">not playing anyth rn...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mb-6 animate-fade-in-delay">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 font-mono animate-slide-up">Rishav Ganguly</h1>
            <p className="text-primary text-xl mt-2 font-sans opacity-95 animate-slide-up-delay">ENGINEER</p>
          </div>
          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              className="px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div> */}
          <div className="mt-16 flex space-x-6 animate-fade-in-delay-2">
            <a
              href="https://github.com/imnotgoingtohindiclass"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-muted-foreground hover:text-primary"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishav-ganguly-174960348/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-muted-foreground hover:text-secondary"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/r.15.hav"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-muted-foreground hover:text-accent"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 1.2s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-slide-up-delay {
          animation: slideUp 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;