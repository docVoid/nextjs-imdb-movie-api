import Link from 'next/link';
import { Movie } from '@/lib/tmdb';
import { useRouter } from 'next/router';
import { useWatchlist } from '@/context/watchlistcontext';

type Props = Movie;

export default function MovieCard({ id, title, release_date, poster_path }: Props) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const inList = isInWatchlist(id);

  const router = useRouter();
  const query = router.query.query as string | undefined;

  const toggleWatchlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inList) removeFromWatchlist(id);
    else addToWatchlist({ id, title, release_date, poster_path });
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
      <button
        onClick={toggleWatchlist}
        className="absolute top-2 right-2 text-yellow-500 text-2xl z-10"
        aria-label={inList ? 'Remove from watchlist' : 'Add to watchlist'}
        title={inList ? 'Remove from watchlist' : 'Add to watchlist'}
      >
        {inList ? '★' : '☆'}
      </button>

      <Link
        href={{
          pathname: `/movie/${id}`,
          query: query ? { from: query } : {},
        }}
        className="block"
      >
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className="w-full h-auto rounded mb-2"
          />
        )}
        <h2 className="text-lg font-semibold dark:text-gray-100">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{release_date}</p>
        <p className="text-sm text-gray-400 dark:text-gray-400">ID: {id}</p>
      </Link>
    </div>
  );
}
