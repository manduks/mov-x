/** @jsx jsx */
import { useContext } from 'react';
import { jsx, Styled } from 'theme-ui';
import StarRatings from 'react-star-ratings';
import theme from '../theme';
import { FilterContext, SET_QUERY, SET_RAITING } from '../FilterContext';

function Search() {
  const {
    dispatch,
    state: { query, raiting },
  } = useContext(FilterContext);

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
        value={query}
        onChange={e => {
          const {
            target: { value },
          } = e;
          dispatch({ type: SET_QUERY, query: value });
        }}
      />
      <br />
      <StarRatings
        rating={raiting}
        starRatedColor={theme.colors.primary}
        starHoverColor={theme.colors.primaryLighten10}
        numberOfStars={5}
        starDimension="32px"
        starSpacing="10px"
        changeRating={newRaiting =>
          dispatch({ type: SET_RAITING, raiting: newRaiting })
        }
      />
    </section>
  );
}

export default Search;
