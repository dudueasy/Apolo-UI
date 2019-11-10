import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sider from './sider';
import './layout.example.scss'
import styled from 'styled-components';

// const StyledLayout = styled(Layout)` // background: pink; `
export default (props: any) => {
  return (
    <>
      <div>
        <h1>Example 1</h1>
        <Layout className={"layout"}>
          <Header className={"header"}> header </Header>
          <Content className={"content"}> content </Content>
          <Footer className={"footer"}> footer </Footer>
        </Layout>
      </div>

      <div>
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

      <div>
        <h1>Example 3</h1>
        <Layout className={"layout"}>
          <Sider className={"sider"}> sider </Sider>
          <Layout>
            <Header className={"header"}> header </Header>
            <Content className={"content"}> content </Content>
            <Footer className={"footer"}> footer </Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

