import React from 'react';
import Layout from '../layout';
import Header from '../header';
import Sider from '../sider';
import Content from '../content';
import Footer from '../footer';
import style from './layout.example.scss'

const LayoutWithSider: React.FC = (props) => {
  return (<div>
      <h1>Example 2</h1>
      <Layout className={style.layout}>
        <Header className={style.header}> header </Header>
        <Layout>
          <Sider className={style.sider}> sider </Sider>
          <Content className={style.content}> content </Content>
        </Layout>
        <Footer className={style.footer}> footer </Footer>
      </Layout>
    </div>
  );
};

export default LayoutWithSider;
