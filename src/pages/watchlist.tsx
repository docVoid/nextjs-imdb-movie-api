import MovieList from "@/components/movielist";
import { useWatchlist } from '@/context/watchlistcontext';
import Link from 'next/link';

export default function WatchlistPage() {
  const { watchlist } = useWatchlist();

  return (
    <main className="p-6 flex flex-col items-center dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Watchlist</h1>
      <div className="self-start mb-4">
          <Link href="/">
            <span className="text-blue-600 dark:text-blue-400 cursor-pointer" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }}>
              ← back
            </span>
          </Link>
        </div>
      {watchlist.length === 0 ? (
        <p className="dark:text-gray-400">no movies in your watchlist.</p>
      ) : (
        <MovieList movies={watchlist} />
      )}
    </main>
  );
}