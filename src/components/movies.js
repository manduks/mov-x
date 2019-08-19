/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import Movie from './movie';
import Api from '../api';

// import movies from '../data/movies';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await Api.discover();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <section
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default Movies;
