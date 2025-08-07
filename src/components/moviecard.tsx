import { Movie } from '@/lib/tmdb';

type Props = Movie;

export default function MovieCard({ id, title, release_date, poster_path }: Props) {
  return (
    <div key={id} className="bg-white p-4 rounded shadow">
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="w-full h-auto rounded mb-2"
        />
      )}
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{release_date}</p>
      <p className="text-sm text-gray-400">ID: {id}</p>
    </div>
  );
}
