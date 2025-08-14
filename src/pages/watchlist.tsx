import MovieList from "@/components/movielist";
import { useWatchlist } from '@/context/watchlistcontext';
import Link from 'next/link';

export default function WatchlistPage() {
  const { watchlist } = useWatchlist();

  return (
    <main className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Watchlist</h1>
      <div className="self-start mb-4">
          <Link href="/">
            <span className="text-blue-600 cursor-pointer" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }}>
              ← back
            </span>
          </Link>
        </div>
      {watchlist.length === 0 ? (
        <p>no movies in your watchlist.</p>
      ) : (
        <MovieList movies={watchlist} />
      )}
    </main>
  );
}