/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import theme from '../theme';

function Search() {
  let [rating, setRaiting] = useState(0);

  return (
    <section
      sx={{
        variant: 'styles.search',
      }}
    >
      <Styled.h1>Your Favorite movies, Explained!</Styled.h1>
      <Styled.h2
        sx={{
          color: 'grayText',
        }}
      >
        Find them here{' '}
        <span role="img" aria-label="down">
          👇🏼
        </span>
      </Styled.h2>
      <input
        sx={{
          borderRadius: 24,
          background: 'text',
          height: 48,
          width: 512,
          px: 4,
          fontSize: 3,
          color: 'backgroundLighten20',
        }}
      />
      <br />
      <StarRatings
        rating={rating}
        starRatedColor={theme.colors.primary}
        starHoverColor={theme.colors.primaryLighten10}
        numberOfStars={5}
        starDimension="32px"
        starSpacing="10px"
        changeRating={newRaiting => setRaiting(newRaiting)}
      />
    </section>
  );
}

export default Search;
