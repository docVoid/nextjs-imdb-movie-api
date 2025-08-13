import MovieCard from "@/components/moviecard";
import { useWatchlist } from '@/context/watchlistcontext';

export default function WatchlistPage() {
  const { watchlist } = useWatchlist();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>no movies in your watchlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {watchlist.map((m) => (
            <MovieCard key={m.id} {...m} />
          ))}
        </div>
      )}
    </main>
  );
}
