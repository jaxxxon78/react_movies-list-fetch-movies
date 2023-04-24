import { useState } from 'react';
import './App.scss';

import { Movie } from './types/Movie';
import { MoviesList } from './components/MoviesList';

import { FindMovie } from './components/FindMovie';

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList
          movies={movies}
        />
      </div>

      <div className="sidebar">
        <FindMovie
          movies={movies}
          query={query}
          setMovies={setMovies}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
};