import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default (props: any) => {
  return (
    <>
      <h1>Example 1</h1>
      <Layout style={{borderRadius: 3}}>
        <Header> header </Header>
        <Content> content </Content>
        <Footer> footer </Footer>
      </Layout>
    </>
  );
};

