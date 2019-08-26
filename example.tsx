import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch,Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';

void 'examples 不要改动这一行代码！'; // tslint:disable-line

interface routerMatch{
    [key:string]: any
}

const Home = ()=>(
    <div>
        <div className="header">
            <header>Apolo-UI logo</header>
        </div>
        <div>
            <div className="left-panel">
                <aside>
                    this is left panel
                  <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/icon"> Icon </Link> </li>
                    <li> <Link to="/dialog"> Dialog </Link> </li>
                  </ul>
                </aside>
            </div>
            <div className="main-content">
                <main>
                    this is main container
                </main>
            </div>
        </div>
    </div>
)


ReactDOM.render(
    <Router>
        <Home/>
      <Switch>
        <Route path="/icon" component={IconExample}/>
        <Route path="/dialog" component={DialogExample}/>
      </Switch>
    </Router>
    , document.getElementById('app'));
