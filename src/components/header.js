/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

function Header() {
  return (
    <header
      sx={{
        variant: 'styles.header',
      }}
    >
      <a
        href="/"
        sx={{
          variant: 'styles.navlink',
          fontSize: 4,
        }}
      >
        🎬 Mov-x
      </a>
      <div sx={{ mx: 'auto' }} />
      <a
        href="/"
        sx={{
          variant: 'styles.navlink',
        }}
      >
        Login
      </a>
      <a
        href="/about"
        sx={{
          variant: 'styles.navlink',
          border: '1px solid',
          borderColor: 'primary',
          borderRadius: 10,
          px: 4,
          color: 'primary',
        }}
      >
        Sign Up
      </a>
    </header>
  );
}

export default Header;
