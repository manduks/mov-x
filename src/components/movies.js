/** @jsx jsx */
import { useEffect, useContext } from 'react';
import { jsx } from 'theme-ui';
import Movie from './movie';
import { useTheMovieDBApi } from '../api';
import { FilterContext } from '../FilterContext';
import Loading from './loading';
import Error from './error';

function filterRaiting(movies, raiting) {
  return raiting
    ? movies
        .filter(m => m.vote_average <= raiting * 2)
        .sort((a, b) => b.vote_average - a.vote_average)
    : movies;
}

function Movies() {
  const {
    state: { query, raiting },
  } = useContext(FilterContext);
  const [{ movies, isLoading, isError }, setQuery] = useTheMovieDBApi();

  useEffect(() => {
    setQuery(query);
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

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
