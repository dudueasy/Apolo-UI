import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import {Content, Footer, Header, Layout, Sider} from './lib/components/layout/layout';
import style from './example.scss';
import logo from './logo.png';
import IconDemo from './lib/components/icon/iconExampleWithCode';
import DialogDemo from './lib/components/dialog/dialogExampleWithCode';
import LayoutDemo from './lib/components/layout/layoutExampleWithCode';
import FormDemo from './lib/components/form/formExampleWithCode';
import ScrollExample from './lib/components/scroll/example/scrollExampleWithCode';
import RadiosGroupExample from "./lib/components/radioGroup/example/radioGroupExampleWithCode";
import CheckboxGroupExample from "./lib/components/checkboxGroup/example/checkboxGroupExampleWithCode";

interface routerMatch {
  [key: string]: any
}

const Home = () => (
  <Layout className={style.sitePage}>
    <Header className={style.siteHeader}>
      <div className={style.logo}>
        <img src={logo} alt="" height={48}/>
        <span> Apolo-UI </span>
      </div>
    </Header>
    <Layout>
      <Sider className={style.siteSider}>
        <h2>组件</h2>
        <ul>
          <li><NavLink to="/icon"> Icon </NavLink></li>
          <li><NavLink to="/dialog"> Dialog </NavLink></li>
          <li><NavLink to="/layout"> Layout </NavLink></li>
          <li><NavLink to="/form"> Form </NavLink></li>
          <li><NavLink to="/scroll"> Scroll </NavLink></li>
          <li><NavLink to="/radioGroup"> RadioGroup </NavLink></li>
          <li><NavLink to="/checkboxGroup"> CheckboxGroup </NavLink></li>
        </ul>
      </Sider>
      <Layout>
        <Content className={style.siteMain}>
          <Switch>
            <Route path="/icon" component={IconDemo}/>
            <Route path="/dialog" component={DialogDemo}/>
            <Route path="/layout" component={LayoutDemo}/>
            <Route path="/form" component={FormDemo}/>
            <Route path="/scroll" component={ScrollExample}/>
            <Route path="/radioGroup" component={RadiosGroupExample}/>
            <Route path="/checkboxGroup" component={CheckboxGroupExample}/>
          </Switch>
        </Content>
      </Layout>
    </Layout>
    <Footer className={style.siteFooter}>
      &copy; Apolo Du
    </Footer>
  </Layout>
);


ReactDOM.render(
  <Router>
    <Home/>
  </Router>
  , document.getElementById('app'));
