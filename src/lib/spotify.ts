import axios from 'axios';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = 'https://6da1-2406-3003-2002-39e5-c4d6-502b-93b4-ea7.ngrok-free.app/callback';

if (!clientId || !clientSecret) {
  throw new Error('Missing Spotify credentials in environment variables');
}

// Function to get access token using refresh token
export const getAccessToken = async (refreshToken: string) => {
  const authStr = `${clientId}:${clientSecret}`;
  const b64Auth = Buffer.from(authStr).toString('base64');

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
      {
        headers: {
          'Authorization': `Basic ${b64Auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

// Function to get currently playing track
export const getCurrentlyPlaying = async (accessToken: string) => {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error getting currently playing track:', error);
    throw error;
  }
}; 