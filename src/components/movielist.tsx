import MovieCard from './moviecard';
import { Movie } from '@/lib/tmdb';

type Props = {
  movies: Movie[];
};

export default function MovieList({ movies }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
