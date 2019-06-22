import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Switch,Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';

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
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Icon">
                                Icon
                            </Link>
                        </li>
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
            <Route path="/Icon" component={IconExample}/>
        </Switch>
    </Router>
    , document.getElementById('app'));
