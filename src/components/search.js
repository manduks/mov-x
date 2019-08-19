/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

function Search() {
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
        Find them here 👇🏼
      </Styled.h2>
      <input
        sx={{
          borderRadius: 24,
          background: 'white',
          height: 48,
          width: 512,
          px: 4,
          fontSize: 3,
        }}
      />
    </section>
  );
}

export default Search;
