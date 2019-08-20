/** @jsx jsx */
import { useState, useEffect, useContext } from 'react';
import { jsx } from 'theme-ui';
import Movie from './movie';
import Api from '../api';
import { FilterContext } from '../FilterContext';

function filterRaiting(movies, raiting) {
  return raiting
    ? movies
        .filter(m => m.vote_average <= raiting * 2)
        .sort((a, b) => b.vote_average - a.vote_average)
    : movies;
}

function Movies() {
  const [movies, setMovies] = useState([]);
  const {
    state: { query, raiting },
  } = useContext(FilterContext);

  useEffect(() => {
    async function fetchMovies() {
      const data = await Api[query ? 'search' : 'discover'](query);
      setMovies(data.results);
    }
    fetchMovies();
  }, [query]);

  return (
    <section
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {filterRaiting(movies, raiting).map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default Movies;
