import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { searchMovies } from '@/lib/tmdb';
import SearchBar from '@/components/searchbar';
import MovieList from '@/components/movielist';
import { Movie } from '@/lib/tmdb';
import Link from 'next/link';

type Props = {
  results: Movie[];
  initialQuery: string;
};

export default function Home({ results, initialQuery }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/?query=${encodeURIComponent(query)}`);
  };

  return (
    <main className="min-h-screen p-4 flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Movie search</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {initialQuery && (
        <div className="self-start mb-4">
          <Link href="/">
            <span className="text-blue-600 cursor-pointer" onClick={(e) => { e.preventDefault(); window.location.href = "/"; }}>
              ← back
            </span>
          </Link>
        </div>
      )}

      {initialQuery && results.length === 0 ? (
        <p className="text-gray-600">no results.</p>
      ) : results.length > 0 ? (
        <MovieList movies={results} />
      ) : null}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query.query as string || '';
  let results: Movie[] = [];
  if (query.trim()) {
    try {
      const data = await searchMovies(query);
      results = data.results;
    } catch (error) {
      console.error('error during search:', error);
    }
  }

  return {
    props: {
      results,
      initialQuery: query,
    },
  };
};
