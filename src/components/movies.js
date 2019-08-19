/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import Movie from './movie';
import movies from '../data/movies';

function Movies() {
  console.log(movies);

  return (
    <section
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {movies.results.map(movie => (
        <Movie movie={movie} />
      ))}
    </section>
  );
}

export default Movies;
