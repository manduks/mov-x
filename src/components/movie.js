/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import movies from '../data/movies';

function Movie({ movie }) {
  return (
    <div
      sx={{
        width: ['100%', '100%', '23%'],
        border: '1px solid',
        borderColor: 'backgroundLighten10',
        p: 1,
        my: 2,
        mx: 1,
        '&:hover': {
          borderColor: 'backgroundLighten20',
        },
      }}
    >
      <img
        sx={{
          width: '100%',
          height: [500, 500, 300],
        }}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <Styled.h4
        sx={{
          color: 'secondary',
        }}
      >
        {movie.title}
      </Styled.h4>
    </div>
  );
}

export default Movie;
