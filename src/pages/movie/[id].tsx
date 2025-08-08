import { GetServerSideProps } from 'next';
import Link from 'next/link';
import https from 'https';
import fetch from 'node-fetch';
import { Movie } from '@/lib/tmdb';
import { useRouter } from "next/router";

const agent = new https.Agent({ rejectUnauthorized: false });

type Props = {
  movie: Movie | null;
};

export default function MovieDetailPage({ movie }: Props) {
  const router = useRouter();
  const from = router.query.from as string | undefined;
  
  if (!movie) {
    return (
      <div className="p-4 text-center">
        <p>movie not found.</p>
        <Link href={from ? `/?query=${encodeURIComponent(from)}` : "/"} className="text-blue-600">
          ← back
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4 flex flex-col items-center bg-gray-100">
      <Link href={from ? `/?query=${encodeURIComponent(from)}` : "/"} className="mb-4 text-blue-600 self-start">
        ← back
      </Link>

      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-64 h-auto rounded mb-4"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-600 mb-1">release date: {movie.release_date}</p>
      <p className="text-gray-700 max-w-2xl text-center">{movie.overview}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const apiKey = process.env.TMDB_API_KEY;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
      { agent }
    );

    if (!res.ok) {
      throw new Error('error retrieving movie details');
    }

    const movie = (await res.json()) as Movie;

    return { props: { movie } };
  } catch (error) {
    console.error('detail page error:', error);
    return { props: { movie: null } };
  }
};
