import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Content, Sider, Footer} from './lib/layout/layout';
import './example.scss'
import logo from './logo.png';

interface routerMatch {
  [key: string]: any
}

const Home = () => (
  <Layout className={'site-page'}>
    <Header className={'site-header'}>
      <div className={'logo'}>
        <img src={logo} alt="" height={48}/>
        <span> Apolo-UI </span>
      </div>
    </Header>
    <Layout >
      <Sider className={'site-sider'}>
        <h2>组件</h2>
        <ul>
          <li><NavLink to="/icon"> Icon </NavLink></li>
          <li><NavLink to="/dialog"> Dialog </NavLink></li>
          <li><NavLink to="/layout"> Layout </NavLink></li>
        </ul>
      </Sider>
      <Layout>
        <Content className={'site-main'}>
          <Switch>
            <Route path="/icon" component={IconExample}/>
            <Route path="/dialog" component={DialogExample}/>
            <Route path="/layout" component={LayoutExample}/>
          </Switch>
        </Content>
      </Layout>
    </Layout>
    <Footer className={'site-footer'}>
      &copy; Apolo Du
    </Footer>
  </Layout>
);


ReactDOM.render(
  <Router>
    <Home/>
  </Router>
  , document.getElementById('app'));
