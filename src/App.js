import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import Layout from './components/layout';
import Movies from './components/movies';
import { FilterContextProvider } from './FilterContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FilterContextProvider value={{ query: '', raiting: undefined }}>
        <Layout>
          <Movies />
        </Layout>
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
