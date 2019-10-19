import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sider from './sider';

export default (props: any) => {
  return (
    <>
      <div>
        <h1>Example 1</h1>
        <Layout style={{borderRadius: 3, height: 500}}>
          <Header> header </Header>
          <Content> content </Content>
          <Footer> footer </Footer>
        </Layout>
      </div>

      <div>
        <h1>Example 2</h1>
        <Layout style={{borderRadius: 3, height: 500}}>
          <Header> header </Header>
          <Layout>
            <Sider> sider </Sider>
            <Content> content </Content>
          </Layout>
          <Footer> footer </Footer>
        </Layout>
      </div>

      <div>
        <h1>Example 3</h1>
        <Layout style={{borderRadius: 3, height: 500}}>
          <Sider> sider </Sider>
          <Layout>
            <Header> header </Header>
            <Content> content </Content>
            <Footer> footer </Footer>
          </Layout>
        </Layout>
      </div>

      <div>
        <h1>Example 4</h1>
        <Layout style={{borderRadius: 3, height: 500}}>
          <Sider> sider </Sider>
          <Layout>
            <Header> header </Header>
            <Content>
              <Layout>
                <Sider>sider</Sider>
                <Layout>
                  <Content>content</Content>
                  <Footer>footer</Footer>
                </Layout>
              </Layout>
            </Content>
            <Footer> footer </Footer>
          </Layout>
        </Layout>
      </div>

    </>
  );
};

