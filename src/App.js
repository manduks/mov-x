import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import Api from './api';
import Layout from './components/layout';
import Movies from './components/movies';

function App() {
  Api.search('the').then(data => console.log(data));

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Movies />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
