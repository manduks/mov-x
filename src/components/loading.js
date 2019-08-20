/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

function Loading(props) {
  return (
    <section
      sx={{
        width: '100%',
        height: 500,
        color: 'text',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Styled.h2>LOADING ...</Styled.h2>
    </section>
  );
}

export default Loading;
