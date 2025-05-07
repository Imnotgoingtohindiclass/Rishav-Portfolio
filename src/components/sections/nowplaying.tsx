import { useEffect, useState } from "react";

type SongData = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
};

export default function NowPlaying() {
  const [song, setSong] = useState<SongData | null>(null);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data) => setSong(data))
      .catch((err) => {
        console.error("Spotify fetch failed 💔", err);
        setSong(null);
      });
  }, []);

  return (
    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#1DB954]/10 shadow-md max-w-md mx-auto">
      {song?.isPlaying ? (
        <>
          <img
            src={song.albumImageUrl}
            alt="Album Art"
            className="w-16 h-16 rounded-xl shadow-sm"
          />
          <div>
            <a
              href={song.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:underline"
            >
              {song.title}
            </a>
            <p className="text-sm text-gray-400">{song.artist}</p>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 w-full">Not vibin rn 😔</div>
      )}
    </div>
  );
}