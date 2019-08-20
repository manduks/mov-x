/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

function Error(props) {
  return (
    <section
      sx={{
        width: '100%',
        color: 'error',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Styled.h2>OOPS</Styled.h2>
      <Styled.h3>Something whent wrong !!</Styled.h3>
    </section>
  );
}

export default Error;
