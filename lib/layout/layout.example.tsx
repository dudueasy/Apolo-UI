import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss';

const LayoutExample = (props: any) => {
  return (
    <>
      <div>
        <h1>Example 1</h1>
        <Layout className={'layout'}>
          <Header className={'header'}> header </Header>
          <Content className={'content'}> content </Content>
          <Footer className={'footer'}> footer </Footer>
        </Layout>
      </div>
    </>
  );
};

export default LayoutExample;
