import { render, screen } from '@testing-library/react';
import MovieList from '@/components/movielist';
import { Movie } from '@/lib/tmdb';

describe('MovieList Integration', () => {
  const mockMovies: Movie[] = [
    { id: 1, title: 'Movie One', release_date: '2025-01-01', poster_path: '/poster1.jpg' },
    { id: 2, title: 'Movie Two', release_date: '2025-01-02', poster_path: '/poster2.jpg' },
  ];

  it('renders MovieCards for each movie', () => {
    render(<MovieList movies={mockMovies} />);

    expect(screen.getByText('Movie One')).toBeInTheDocument();
    expect(screen.getByText('Movie Two')).toBeInTheDocument();
    
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});