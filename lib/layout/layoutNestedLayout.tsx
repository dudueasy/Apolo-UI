import React from 'react';
import Layout from './layout';
import Sider from './sider';
import Header from './header';
import Content from './content';
import Footer from './footer';

const LayoutNestedLayout: React.FC = (props) => {
  return (
    <div>
      <h1>Example 3</h1>
      <Layout className={'layout'}>
        <Sider className={'sider'}> sider </Sider>
        <Layout>
          <Header className={'header'}> header </Header>
          <Content className={'content'}> content </Content>
          <Footer className={'footer'}> footer </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutNestedLayout;
