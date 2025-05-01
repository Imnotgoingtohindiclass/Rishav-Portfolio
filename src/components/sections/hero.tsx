import { Button } from "../ui/button.tsx";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { getAccessToken, getCurrentlyPlaying } from "../../lib/spotify";

interface SpotifyTrack {
  item: {
    name: string;
    artists: Array<{ name: string }>;
  };
  progress_ms: number;
  is_playing: boolean;
}

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
        if (!refreshToken) {
          throw new Error('Missing Spotify refresh token');
        }
        const accessToken = await getAccessToken(refreshToken);
        const trackData = await getCurrentlyPlaying(accessToken);
        setCurrentTrack(trackData);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isHovering) {
      fetchCurrentlyPlaying();
      const interval = setInterval(fetchCurrentlyPlaying, 30000); // Update every 30 seconds
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-8 relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
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
            {isHovering && (
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg z-10 w-64 border border-primary/20">
                <h3 className="text-lg font-bold text-primary">Currently Listening</h3>
                {isLoading ? (
                  <p className="text-sm mt-2 text-foreground">Loading...</p>
                ) : currentTrack && currentTrack.is_playing ? (
                  <>
                    <p className="text-sm mt-2 text-foreground">
                      <span className="font-semibold">Song:</span> {currentTrack.item.name}
                    </p>
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Artist:</span> {currentTrack.item.artists[0].name}
                    </p>
                    <div className="mt-3 w-full bg-primary/20 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentTrack.progress_ms / 30000) * 100}%` }}
                      ></div>
                    </div>
                  </>
                ) : (
                  <p className="text-sm mt-2 text-foreground">Not currently playing</p>
                )}
              </div>
            )}
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
    </section>
  );
};

export default Hero;