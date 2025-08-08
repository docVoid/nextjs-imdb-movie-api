import fetch from 'node-fetch';
import https from 'https';

const agent = new https.Agent({ rejectUnauthorized: false }); // SSL fehler wegen Man-in-the-middle bei uns

const API_BASE = "https://api.themoviedb.org/3";

export async function searchMovies(query: string) {
  const apiKey = process.env.TMDB_API_KEY;

  const res = await fetch(
    `${API_BASE}/search/movie?query=${encodeURIComponent(query)}&api_key=${apiKey}`,
    { agent }
  );

  if (!res.ok) {
    throw new Error("fehler beim abrufen der filme");
  }

  return res.json() as Promise<MovieSearchResponse>;
}

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
  overview?: string;
};

export type MovieSearchResponse = {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
};
