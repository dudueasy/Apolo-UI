import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Content, Sider, Footer} from './lib/layout/layout';
import './example.scss'

void 'examples 不要改动这一行代码！'; // tslint:disable-line

interface routerMatch {
  [key: string]: any
}

const Home = () => (
  <Layout className={"page"}>
    <Header style={{background: 'purple'}}>
      <div className={'logo'}>
        Apolo-UI logo
      </div>
    </Header>
    <Layout style={{background: 'rgba(0,0,0,0.1)'}}>
      <Sider style={{border: '1px solid black'}}>
        this is left panel
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/icon"> Icon </Link></li>
          <li><Link to="/dialog"> Dialog </Link></li>
          <li><Link to="/layout"> Layout </Link></li>
        </ul>
      </Sider>
      <Layout style={{border: '1px solid black'}}>
        <Content>
          <Switch>
            <Route path="/icon" component={IconExample}/>
            <Route path="/dialog" component={DialogExample}/>
            <Route path="/layout" component={LayoutExample}/>
            <Route path="/" component={()=><h1>Apolo-UI</h1>}/>
          </Switch>
        </Content>
        <Footer style={{background: 'pink'}}>
          footer
        </Footer>
      </Layout>
    </Layout>
  </Layout>
);


ReactDOM.render(
  <Router>
    <Home/>
  </Router>
  , document.getElementById('app'));
