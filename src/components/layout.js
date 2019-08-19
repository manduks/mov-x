import React from 'react';
import { Layout, Header as HeaderWrapper, Main, Container } from 'theme-ui';
import Header from './header';
import Search from './search';

function AppLayout(props) {
  return (
    <Layout>
      <HeaderWrapper>
        <Header />
        <Search />
      </HeaderWrapper>
      <Main>
        <Container>{props.children}</Container>
      </Main>
    </Layout>
  );
}

export default AppLayout;
