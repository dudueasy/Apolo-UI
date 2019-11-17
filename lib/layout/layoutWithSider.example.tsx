import React from 'react';
import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Footer from './footer';

const LayoutWithSider: React.FC = (props) => {
  return ( <div>
      <h1>Example 2</h1>
      <Layout className={"layout"}>
        <Header className={"header"}> header </Header>
        <Layout>
          <Sider className={"sider"}> sider </Sider>
          <Content className={"content"}> content </Content>
        </Layout>
        <Footer className={"footer"}> footer </Footer>
      </Layout>
    </div>
  )
};

export default LayoutWithSider;
