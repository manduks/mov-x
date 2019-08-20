/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import StarRatings from 'react-star-ratings';

import theme from '../theme';

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
          height: [500, 600, 300],
        }}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <StarRatings
        rating={movie.vote_average / 2}
        starRatedColor={theme.colors.primaryLighten10}
        numberOfStars={5}
        starDimension="24px"
        starSpacing="10px"
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
