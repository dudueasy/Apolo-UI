import React from 'react';
import Layout from '../layout';
import Sider from '../sider';
import Header from '../header';
import Content from '../content';
import Footer from '../footer';
import style from './layout.example.scss'

const LayoutNestedLayout: React.FC = (props) => {
  return (
    <div>
      <h1>Example 3</h1>
      <Layout className={style.layout}>
        <Sider className={style.sider}> sider </Sider>
        <Layout>
          <Header className={style.header}> header </Header>
          <Content className={style.content}> content </Content>
          <Footer className={style.footer}> footer </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutNestedLayout;
