const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
};

export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#FFF',
    grayText: '#e6e6e6',
    background: '#1A2232',
    backgroundLighten10: '#232B3B',
    backgroundLighten20: '#2C3648',
    primary: '#A085FF',
    primaryLighten10: '#9D82FF',
    secondary: '#85FFD0',
    error: 'salmon',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    Header: {
      color: 'text',
      bg: 'background',
      height: 500,
      flexDirection: 'column',
    },
    Layout: {
      bg: 'background',
    },
    Container: {},
    header: {
      display: 'flex',
      alignItems: 'center',
      width: '100hv',
      height: 80,
      px: 6,
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    navlink: {
      px: 3,
      py: 2,
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'text',
      textTransform: 'Uppercase',
      fontSize: 2,
      ...heading,
    },
    search: {
      width: '100%',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
};
