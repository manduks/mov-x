import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import Layout from './components/layout';
import Movies from './components/movies';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Movies />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
