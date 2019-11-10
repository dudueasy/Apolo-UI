import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Content, Sider, Footer} from './lib/layout/layout';
import './example.scss'
import logo from './logo.png';

console.log(logo)
// import logo from './'

void 'examples 不要改动这一行代码！'; // tslint:disable-line

interface routerMatch {
  [key: string]: any
}

const Home = () => (
  <Layout className={"site-page"}>
    <Header className={'site-header'}>
      <div className={'logo'}>
        <img src={logo} alt="" height={48}/>
        <span> Apolo-UI logo </span>
      </div>
    </Header>
    <Layout
      // style={{background: 'rgba(0,0,0,0.1)'}}
    >
      <Sider className={'site-sider'}>
        <h2>组件</h2>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/icon"> Icon </Link></li>
          <li><Link to="/dialog"> Dialog </Link></li>
          <li><Link to="/layout"> Layout </Link></li>
        </ul>
      </Sider>
      <Layout>
        <Content className={'site-main'}>
          <Switch>
            <Route path="/icon" component={IconExample}/>
            <Route path="/dialog" component={DialogExample}/>
            <Route path="/layout" component={LayoutExample}/>
            <Route path="/" component={()=><h1>Apolo-UI</h1>}/>
          </Switch>
        </Content>
      </Layout>
    </Layout>
      <Footer className={"site-footer"}>
        &copy; Apolo Du
      </Footer>
  </Layout>
);


ReactDOM.render(
  <Router>
    <Home/>
  </Router>
  , document.getElementById('app'));
