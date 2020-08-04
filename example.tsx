import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import {Content, Footer, Header, Layout, Sider} from './lib/layout/layout';
import './example.scss';
import logo from './logo.png';
import IconDemo from './lib/icon/iconExampleWithCode';
import DialogDemo from './lib/dialog/dialogExampleWithCode';
import LayoutDemo from './lib/layout/layoutExampleWithCode';
import FormDemo from './lib/form/formExampleWithCode';
import ScrollExample from './lib/scroll/scroll.example';

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
    <Layout>
      <Sider className={'site-sider'}>
        <h2>组件</h2>
        <ul>
          <li><NavLink to="/icon"> Icon </NavLink></li>
          <li><NavLink to="/dialog"> Dialog </NavLink></li>
          <li><NavLink to="/layout"> Layout </NavLink></li>
          <li><NavLink to="/form"> Form </NavLink></li>
          <li><NavLink to="/scroll"> Scroll </NavLink></li>
        </ul>
      </Sider>
      <Layout>
        <Content className={'site-main'}>
          <Switch>
            <Route path="/icon" component={IconDemo}/>
            <Route path="/dialog" component={DialogDemo}/>
            <Route path="/layout" component={LayoutDemo}/>
            <Route path="/form" component={FormDemo}/>
            <Route path="/scroll" component={ScrollExample}/>
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
