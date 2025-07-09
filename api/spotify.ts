import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client_id = process.env.CLIENT_ID!;
  const client_secret = process.env.CLIENT_SECRET!;
  const refresh_token = process.env.REFRESH_TOKEN!;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const tokenData = await tokenResponse.json();
  const access_token = tokenData.access_token;

  const nowPlayingRes = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await nowPlayingRes.json();

  const track = {
    isPlaying: song.is_playing,
    title: song.item?.name,
    artist: song.item?.artists.map((a: any) => a.name).join(", "),
    album: song.item?.album.name,
    albumImageUrl: song.item?.album.images[0]?.url,
    songProgress: song.item?.progress_ms , 
    songUrl: song.item?.external_urls.spotify,
  };

  res.status(200).json(track);
}

// hot diggity dog

