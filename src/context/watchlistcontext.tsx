import React, { createContext, useContext, useEffect, useState } from 'react';
import { Movie } from '@/lib/tmdb';

type WatchlistContextType = {
  watchlist: Movie[];
  addToWatchlist: (m: Movie) => void;
  removeFromWatchlist: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
};

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('watchlist');
      if (raw) {
        setWatchlist(JSON.parse(raw));
      }
    } catch (e) {
      console.error('Failed read watchlist from localStorage', e);
    } finally {
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!initialized) return;
    try {
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
    } catch (e) {
      console.error('Failed write watchlist in localStorage', e);
    }
  }, [watchlist, initialized]);

  const addToWatchlist = (movie: Movie) => {
    setWatchlist((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  const isInWatchlist = (id: number) => watchlist.some((m) => m.id === id);

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = (): WatchlistContextType => {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error('error');
  return ctx;
};
