import React from 'react';
import Layout from '../layout';
import Header from '../header';
import Content from '../content';
import Footer from '../footer';
import style from './layout.example.scss';

const LayoutExample = (props: any) => {
  return (
    <>
      <div>
        <h1>Example 1</h1>
        <Layout className={style.layout}>
          <Header className={style.header}> header </Header>
          <Content className={style.content}> content </Content>
          <Footer className={style.footer}> footer </Footer>
        </Layout>
      </div>
    </>
  );
};

export default LayoutExample;
